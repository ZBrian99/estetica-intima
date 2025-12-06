import { Ratelimit } from '@upstash/ratelimit';
import type { Duration } from '@upstash/ratelimit';
import { Redis } from '@upstash/redis';

type LimitResult = { success: boolean; limit: number; remaining: number; reset: number };
export interface Limiter {
  limit(identifier: string): Promise<LimitResult>;
}

class NoopLimiter implements Limiter {
  private max: number;
  constructor(max = 1000) { this.max = max; }
  async limit(): Promise<LimitResult> {
    const now = Date.now();
    return { success: true, limit: this.max, remaining: this.max, reset: now + 60_000 };
  }
}

const isDev = process.env.NODE_ENV !== 'production';
const redis = isDev ? null : Redis.fromEnv();

// Configuración de rate limits por tipo de endpoint
const makeLimiter = (limit: number, window: Duration, prefix: string): Limiter => {
  if (isDev || !redis) return new NoopLimiter(limit);
  return new Ratelimit({
    redis,
    limiter: Ratelimit.slidingWindow(limit, window),
    analytics: true,
    prefix,
  }) as unknown as Limiter;
};

export const rateLimits: Record<string, Limiter> = {
  // Endpoints de autenticación (permite varios intentos)
  auth: makeLimiter(2, '1 m', 'ratelimit:auth'),

	// Endpoints de creación/modificación (generoso para uso normal)
  create: makeLimiter(50, '15 m', 'ratelimit:create'),

	// Endpoints de búsqueda y filtros
  search: makeLimiter(150, '15 m', 'ratelimit:search'),

	// Endpoints públicos generales
  public: makeLimiter(300, '15 m', 'ratelimit:public'),

	// Endpoints de administración (libertad total para admin)
  admin: makeLimiter(1000, '15 m', 'ratelimit:admin'),
};

// Función para determinar qué rate limit aplicar según la ruta
export function getRateLimitForPath(pathname: string, method?: string): Limiter {
  // Endpoints de administración - límites más altos
  if (pathname.startsWith('/api/admin')) {
    return rateLimits.admin;
  }

	// Endpoints de autenticación - límites moderados
	if (pathname.includes('/auth') || pathname.includes('/login') || pathname.includes('/register')) {
		return rateLimits.auth;
	}

	// Operaciones de creación/modificación basadas en método HTTP - límites más estrictos
	if (method && ['POST', 'PUT', 'PATCH', 'DELETE'].includes(method.toUpperCase())) {
		if (pathname.includes('/create') || pathname.includes('/update') || pathname.includes('/delete') || 
				method === 'POST' || method === 'PUT' || method === 'PATCH' || method === 'DELETE') {
			return rateLimits.create;
		}
	}

	// Operaciones de búsqueda - límites moderados
	if (pathname.includes('/search') || pathname.includes('/filter')) {
		return rateLimits.search;
	}

  // Por defecto, usar límite público
  return rateLimits.public;
}

// Función para obtener identificador único por usuario/IP
export function getIdentifier(request: Request): string {
	// Intentar obtener IP real desde headers de proxy
	const forwarded = request.headers.get('x-forwarded-for');
	const realIp = request.headers.get('x-real-ip');
	const cfConnectingIp = request.headers.get('cf-connecting-ip'); // Cloudflare

	// Priorizar headers de proxy confiables
	const ip = cfConnectingIp || (forwarded ? forwarded.split(',')[0].trim() : null) || realIp || 'anonymous';

	// Para usuarios autenticados, usar user ID si está disponible
	const userId = request.headers.get('x-user-id');

	return userId ? `user:${userId}` : `ip:${ip}`;
}

// Función para manejar respuesta de rate limit excedido
export function createRateLimitResponse(limit: number, reset: number, remaining: number) {
	return new Response(
		JSON.stringify({
			error: 'Demasiadas solicitudes',
			message: 'Has excedido el límite de solicitudes. Intenta nuevamente más tarde.',
			limit,
			remaining,
			resetTime: new Date(reset).toISOString(),
		}),
		{
			status: 429,
			headers: {
				'Content-Type': 'application/json',
				'X-RateLimit-Limit': limit.toString(),
				'X-RateLimit-Remaining': remaining.toString(),
				'X-RateLimit-Reset': reset.toString(),
				'Retry-After': Math.ceil((reset - Date.now()) / 1000).toString(),
			},
		}
	);
}

// Función para añadir headers de rate limit a respuestas exitosas
export function addRateLimitHeaders(response: Response, limit: number, remaining: number, reset: number): Response {
	const newHeaders = new Headers(response.headers);
	newHeaders.set('X-RateLimit-Limit', limit.toString());
	newHeaders.set('X-RateLimit-Remaining', remaining.toString());
	newHeaders.set('X-RateLimit-Reset', reset.toString());

	return new Response(response.body, {
		status: response.status,
		statusText: response.statusText,
		headers: newHeaders,
	});
}
