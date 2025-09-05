import { requireAuthAPI } from '@/lib/auth/utils';
import { NextResponse } from 'next/server';

export async function GET() {
	try {
		const { error, session } = await requireAuthAPI();
		if (error) {
			return error; // ✅ Retorna error JSON
		}
		return NextResponse.json({
			message: 'Acceso autorizado',
			user: {
				id: session.user.id,
				name: session.user.name,
				email: session.user.email,
				role: session.user.role,
			},
		});
	} catch (error) {
		return NextResponse.json({ error: 'No autorizado' }, { status: 401 });
	}
}
