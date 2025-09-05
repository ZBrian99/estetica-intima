import { auth } from '@/lib/auth/auth';
import { redirect } from 'next/navigation';
import { NextResponse } from 'next/server';
import type { Session } from 'next-auth';

// ============================================
// PARA SERVER ACTIONS Y PAGES
// ============================================

// Función para requerir autenticación en Server Actions/Pages
export async function requireAuth(): Promise<Session> {
	const session = await auth();
	if (!session?.user) {
		redirect('/login');
	}
	return session;
}

// Función para requerir permisos de admin en Server Actions/Pages
export async function requireAdmin(): Promise<Session> {
	const session = await requireAuth();
	if (session.user.role !== 'ADMIN') {
		redirect('/');
	}
	return session;
}

// ============================================
// PARA API ROUTES
// ============================================

// Función para requerir autenticación en API Routes
export async function requireAuthAPI() {
	const session = await auth();

	if (!session?.user) {
		return {
			error: NextResponse.json({ error: 'No autenticado' }, { status: 401 }),
			session: null,
		};
	}

	return { error: null, session };
}

// Función para requerir admin en API Routes
export async function requireAdminAPI() {
	const authResult = await requireAuthAPI();

	if (authResult.error) {
		return authResult;
	}

	if (authResult.session!.user.role !== 'ADMIN') {
		return {
			error: NextResponse.json({ error: 'Sin permisos de administrador' }, { status: 403 }),
			session: null,
		};
	}

	return { error: null, session: authResult.session };
}

// ============================================
// HELPERS PARA COMPONENTES
// ============================================

// Helper para verificar si es admin (sin redirección)
export async function isAdmin(): Promise<boolean> {
	const session = await auth();
	return session?.user?.role === 'ADMIN';
}

// Helper para verificar si está autenticado (sin redirección)
export async function isAuthenticated(): Promise<boolean> {
	const session = await auth();
	return !!session?.user;
}
