import { z } from 'zod';

// Schema para Login
export const LoginFormSchema = z.object({
	email: z.email({ message: 'Por favor ingresa un email válido' }).trim().toLowerCase(),
	password: z.string().min(6, { message: 'La contraseña debe tener al menos 6 caracteres' }).trim(),
});

// Schema para Register con validación robusta
export const SignupFormSchema = z
	.object({
		name: z
			.string()
			.min(2, { message: 'El nombre debe tener al menos 2 caracteres' })
			.max(50, { message: 'El nombre no puede exceder 50 caracteres' })
			.regex(/^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+$/, { message: 'El nombre solo puede contener letras y espacios' })
			.trim(),
		email: z.string().email({ message: 'Por favor ingresa un email válido' }).trim().toLowerCase(),
		password: z
			.string()
			.min(8, { message: 'La contraseña debe tener al menos 8 caracteres' })
			.regex(/[a-zA-Z]/, { message: 'Debe contener al menos una letra' })
			.regex(/[0-9]/, { message: 'Debe contener al menos un número' })
			.regex(/[^a-zA-Z0-9]/, { message: 'Debe contener al menos un carácter especial' })
			.trim(),
		confirmPassword: z.string(),
	})
	.refine((data) => data.password === data.confirmPassword, {
		message: 'Las contraseñas no coinciden',
		path: ['confirmPassword'],
	});

// Tipos derivados de los schemas
export type LoginFormData = z.infer<typeof LoginFormSchema>;
export type SignupFormData = z.infer<typeof SignupFormSchema>;

// Tipo para el estado de los formularios
export type FormState =
	| {
			errors?: {
				name?: string[];
				email?: string[];
				password?: string[];
				confirmPassword?: string[];
			};
			message?: string;
	  }
	| undefined;
