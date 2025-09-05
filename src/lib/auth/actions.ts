'use server'

import { signIn, signOut } from '@/lib/auth/auth'
import { AuthError } from 'next-auth'
import { redirect } from 'next/navigation'
import bcrypt from 'bcryptjs'
import { prisma } from '@/lib/prisma'
import { LoginFormSchema, SignupFormSchema, FormState } from '@/schemas/authSchemas'

// Server Action para Login con useActionState
export async function loginAction(prevState: FormState, formData: FormData): Promise<FormState> {
  const validatedFields = LoginFormSchema.safeParse({
    email: formData.get('email'),
    password: formData.get('password')
  })

  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
      message: 'Datos inválidos. Por favor revisa los campos.'
    }
  }

  const { email, password } = validatedFields.data

  try {
    const result = await signIn('credentials', {
      email,
      password,
      redirect: false
    })

    if (result?.error) {
      return {
        message: 'Credenciales inválidas. Verifica tu email y contraseña.'
      }
    }

    // Obtener el usuario para determinar redirección
    const user = await prisma.user.findUnique({
      where: { email },
      select: { role: true }
    })

    // Redirección basada en rol
    if (user?.role === 'ADMIN') {
      redirect('/admin')
    } else {
      redirect('/protected')
    }
  } catch (error) {
    if (error instanceof AuthError) {
      switch (error.type) {
        case 'CredentialsSignin':
          return { message: 'Credenciales inválidas' }
        default:
          return { message: 'Error de autenticación' }
      }
    }
    // Re-lanzar errores de redirección
    throw error
  }
}

// Server Action para Register con useActionState
export async function registerAction(prevState: FormState, formData: FormData): Promise<FormState> {
  const validatedFields = SignupFormSchema.safeParse({
    name: formData.get('name'),
    email: formData.get('email'),
    password: formData.get('password'),
    confirmPassword: formData.get('confirmPassword')
  })

  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
      message: 'Datos inválidos. Por favor revisa los campos.'
    }
  }

  const { name, email, password } = validatedFields.data

  try {
    // Verificar si el usuario ya existe
    const existingUser = await prisma.user.findUnique({
      where: { email }
    })

    if (existingUser) {
      return {
        message: 'Ya existe una cuenta con este email'
      }
    }

    // Hashear contraseña
    const hashedPassword = await bcrypt.hash(password, 12)

    // Crear usuario
    await prisma.user.create({
      data: {
        name,
        email,
        password: hashedPassword,
        role: 'USER'
      }
    })

    // Auto-login después del registro
    await signIn('credentials', {
      email,
      password,
      redirect: false
    })
  } catch (error) {
    console.error('Error en registro:', error)
    return {
      message: 'Error al crear la cuenta. Intenta nuevamente.'
    }
  }

  redirect('/protected')
}

// Server Action para Logout
export async function logoutAction(): Promise<void> {
  await signOut({ redirectTo: '/' })
}