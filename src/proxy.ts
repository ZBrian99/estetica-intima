import { NextRequest, NextResponse } from 'next/server';
import { 
  getRateLimitForPath, 
  getIdentifier, 
  createRateLimitResponse, 
  addRateLimitHeaders 
} from './lib/rateLimit';

export default async function proxy(request: NextRequest) {
  if (!request.nextUrl.pathname.startsWith('/api')) {
    return NextResponse.next();
  }

  if (process.env.DISABLE_RATE_LIMIT === 'true') {
    return NextResponse.next();
  }

  try {
    const rateLimit = getRateLimitForPath(request.nextUrl.pathname, request.method);
    const identifier = getIdentifier(request);
    const { success, limit, reset, remaining } = await rateLimit.limit(identifier);

    if (!success) {
      console.warn(
        `Rate limit exceeded for ${identifier} on ${request.nextUrl.pathname}`,
        { limit, remaining, reset }
      );
      return createRateLimitResponse(limit, reset, remaining);
    }

    const response = NextResponse.next();
    return addRateLimitHeaders(response, limit, remaining, reset);
    
  } catch (error) {
    console.error('Rate limiting error:', error);
    if (process.env.NODE_ENV === 'development') {
      console.warn('Rate limiting disabled due to error - check Redis configuration');
    }
    return NextResponse.next();
  }
}

export const config = {
  matcher: '/api/:path*',
};

