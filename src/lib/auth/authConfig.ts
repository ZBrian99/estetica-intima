// auth.config.ts
import type { NextAuthConfig } from 'next-auth';
import Credentials from 'next-auth/providers/credentials';
import bcrypt from 'bcryptjs';
import { prisma } from '@/lib/prisma';
import { z } from 'zod';

// Schema de validación para las credenciales
const credentialsSchema = z.object({
	email: z.email('Email inválido'),
	password: z.string().min(6, 'La contraseña debe tener al menos 6 caracteres'),
});

export default {
	providers: [
		Credentials({
			credentials: {
				email: { label: 'Email', type: 'email' },
				password: { label: 'Password', type: 'password' },
			},
			authorize: async (credentials) => {
				try {
					// 1. Validar formato de credenciales
					const validatedCredentials = credentialsSchema.parse(credentials);

					// 2. Buscar usuario en la base de datos
					const user = await prisma.user.findUnique({
						where: { email: validatedCredentials.email },
						select: {
							id: true,
							email: true,
							name: true,
							password: true,
							role: true,
						},
					});

					// 3. Si no existe el usuario
					if (!user) {
						throw new Error('USER_NOT_FOUND');
					}

					// 4. Verificar la contraseña
					const isValidPassword = await bcrypt.compare(validatedCredentials.password, user.password);

					if (!isValidPassword) {
						throw new Error('INVALID_PASSWORD');
					}

					// 5. Devolver datos del usuario (sin la contraseña)
					return {
						id: user.id,
						email: user.email,
						name: user.name,
						role: user.role,
					};
				} catch (error) {
					if (error instanceof z.ZodError) {
						throw new Error('VALIDATION_ERROR');
					}
					throw error;
				}
			},
		}),
	],
	callbacks: {
		jwt({ token, user }) {
			if (user) {
				token.role = user.role;
			}
			return token;
		},
		session({ session, token }) {
			if (token) {
				session.user.id = token.sub as string;
				session.user.role = token.role as string;
			}
			return session;
		},
	},
} satisfies NextAuthConfig;
