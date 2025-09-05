import { z } from 'zod';
import { NextResponse } from 'next/server';
import { Prisma } from '@prisma/client';

export const handleApiError = (error: unknown) => {
	// Manejo de errores de validación Zod
	if (error instanceof z.ZodError) {
		return NextResponse.json(
			{
				status: 'validation_error',
				errors: error.issues.map((issue) => ({
					path: issue.path.join('.'),
					message: issue.message,
				})),
			},
			{ status: 400 }
		);
	}

	// Manejo de errores conocidos de Prisma
	if (
		error instanceof Prisma.PrismaClientKnownRequestError ||
		(error && typeof error === 'object' && 'code' in error && 'meta' in error)
	) {
		const prismaError = error as Prisma.PrismaClientKnownRequestError;

		switch (prismaError.code) {
			case 'P2002': {
				// Violación de restricción única
				const target = prismaError.meta?.target as string[] | undefined;
				const field = target?.[0] || 'campo';
				const fieldName = field === 'name' ? 'nombre' : field;

				return NextResponse.json(
					{
						status: 'conflict',
						message: `Ya existe un servicio con este ${fieldName}`,
						field: field,
					},
					{ status: 409 }
				);
			}
			case 'P2025':
				return NextResponse.json(
					{
						status: 'not_found',
						message: 'Servicio no encontrado',
					},
					{ status: 404 }
				);
			default:
				// Log solo errores no manejados para debugging
				console.error('Error de Prisma no manejado:', {
					code: prismaError.code,
					message: prismaError.message,
					meta: prismaError.meta,
				});
				return NextResponse.json(
					{
						status: 'database_error',
						message: 'Error en la base de datos',
					},
					{ status: 500 }
				);
		}
	}

	// Errores inesperados
	console.error('Error inesperado en API:', error);
	return NextResponse.json(
		{
			status: 'internal_error',
			message: 'Error interno del servidor',
		},
		{ status: 500 }
	);
};
