import { requireAdminAPI } from '@/lib/auth/utils';
import { NextResponse } from 'next/server';

export async function GET() {
	try {
		const { error, session } = await requireAdminAPI();
		if (error) {
			return error; // ✅ Retorna error JSON
		}
		return NextResponse.json({
			message: 'Acceso de administrador autorizado',
			admin: {
				id: session.user.id,
				name: session.user.name,
				email: session.user.email,
				role: session.user.role,
			},
		});
	} catch (error) {
		return NextResponse.json({ error: 'Acceso denegado - Se requieren permisos de administrador' }, { status: 403 });
	}
}
