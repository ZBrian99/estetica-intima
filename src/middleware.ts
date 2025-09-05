import { NextRequest, NextResponse } from 'next/server';
import { 
  getRateLimitForPath, 
  getIdentifier, 
  createRateLimitResponse, 
  addRateLimitHeaders 
} from './lib/rateLimit';

export default async function middleware(request: NextRequest) {
  // Solo aplicar rate limiting a rutas API
  if (!request.nextUrl.pathname.startsWith('/api')) {
    return NextResponse.next();
  }

  // Desactivar rate limiting en desarrollo si está configurado
  if (process.env.DISABLE_RATE_LIMIT === 'true') {
    return NextResponse.next();
  }

  try {
    // Determinar qué rate limit aplicar según la ruta y método
    const rateLimit = getRateLimitForPath(request.nextUrl.pathname, request.method);
    
    // Obtener identificador para el rate limiting
    const identifier = getIdentifier(request);
    
    // Verificar rate limit
    const { success, limit, reset, remaining } = await rateLimit.limit(identifier);
    
    if (!success) {
      // Rate limit excedido - registrar y devolver error 429
      console.warn(
        `Rate limit exceeded for ${identifier} on ${request.nextUrl.pathname}`,
        { limit, remaining, reset }
      );
      
      return createRateLimitResponse(limit, reset, remaining);
    }
    
    // Rate limit OK - continuar con la request
    const response = NextResponse.next();
    
    // Añadir headers informativos de rate limit
    return addRateLimitHeaders(response, limit, remaining, reset);
    
  } catch (error) {
    // Si hay error con Redis/rate limiting, permitir la request (fail-open)
    console.error('Rate limiting error:', error);
    
    // En desarrollo, mostrar el error
    if (process.env.NODE_ENV === 'development') {
      console.warn('Rate limiting disabled due to error - check Redis configuration');
    }
    
    return NextResponse.next();
  }
}

// Configurar en qué rutas se ejecuta el middleware
export const config = {
  matcher: '/api/:path*',
};