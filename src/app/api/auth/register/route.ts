// app/api/auth/register/route.ts
import { prisma } from '@/lib/prisma';
import bcrypt from 'bcryptjs';
import { NextRequest } from 'next/server';

export async function POST(request: NextRequest) {
	try {
		// 1. Obtener los datos del body
		const body = await request.json();
		const { email, password, name } = body;

		// 2. Validar que llegaron todos los datos
		if (!email || !password || !name) {
			return Response.json({ error: 'Faltan datos requeridos' }, { status: 400 });
		}

		// 3. Verificar si el usuario ya existe
		const existingUser = await prisma.user.findUnique({
			where: { email },
		});

		if (existingUser) {
			return Response.json({ error: 'El usuario ya existe' }, { status: 400 });
		}

		// 4. Encriptar la contraseña
		const hashedPassword = await bcrypt.hash(password, 12);
		// 12 = número de "rondas" de encriptación (más = más seguro pero más lento)

		// 5. Crear el usuario en la base de datos
		const user = await prisma.user.create({
			data: {
				email,
				name,
				password: hashedPassword, // Guardar la contraseña encriptada
			},
		});

		// 6. Devolver respuesta exitosa (SIN la contraseña)
		return Response.json({
			message: 'Usuario creado exitosamente',
			user: {
				id: user.id,
				email: user.email,
				name: user.name,
			},
		});
	} catch (error) {
		console.error('Error en registro:', error);
		return Response.json({ error: 'Error interno del servidor' }, { status: 500 });
	}
}
