import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
	images: {
		remotePatterns: [
			{
				protocol: 'https',
				hostname: 'image.pollinations.ai',
				port: '',
				pathname: '/**',
			},
		],
	},

	// Configuración anti-caché SOLO para desarrollo
	...(process.env.NODE_ENV === 'development' && {
		experimental: {
			staleTimes: {
				dynamic: 0,
				static: 0,
			},
		},
	}),

	// Headers de seguridad para todas las rutas
	async headers() {
		return [
			{
				// Aplicar a todas las rutas
				source: '/(.*)',
				headers: [
					// Prevenir MIME type sniffing
					{
						key: 'X-Content-Type-Options',
						value: 'nosniff',
					},
					// Prevenir clickjacking
					{
						key: 'X-Frame-Options',
						value: 'DENY',
					},
					// Protección XSS
					{
						key: 'X-XSS-Protection',
						value: '1; mode=block',
					},
					// Política de referrer
					{
						key: 'Referrer-Policy',
						value: 'strict-origin-when-cross-origin',
					},

					// Anti-caché SOLO en desarrollo
					...(process.env.NODE_ENV === 'development'
						? [
								{
									key: 'Cache-Control',
									value: 'no-cache, no-store, must-revalidate',
								},
								{
									key: 'Pragma',
									value: 'no-cache',
								},
								{
									key: 'Expires',
									value: '0',
								},
						  ]
						: []),
				],
			},
			{
				// Headers adicionales para rutas API
				source: '/api/(.*)',
				headers: [
					// Cache control para APIs
					{
						key: 'Cache-Control',
						value: 'no-store, no-cache, must-revalidate, proxy-revalidate',
					},
					// Prevenir caching de respuestas sensibles
					{
						key: 'Pragma',
						value: 'no-cache',
					},
					// Expiración inmediata
					{
						key: 'Expires',
						value: '0',
					},
				],
			},
		];
	},
};

export default nextConfig;
