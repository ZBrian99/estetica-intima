import { NextRequest, NextResponse } from 'next/server'
import { signIn } from '@/lib/auth/auth'
import { z } from 'zod'

const loginSchema = z.object({
  email: z.string().email('Email inválido'),
  password: z.string().min(6, 'La contraseña debe tener al menos 6 caracteres')
})

export async function POST(request: NextRequest) {
  try {
    // Validar Content-Type
    if (!request.headers.get('content-type')?.includes('application/json')) {
      return NextResponse.json(
        { error: 'INVALID_CONTENT_TYPE', message: 'Content-Type debe ser application/json' },
        { status: 400 }
      )
    }

    // Parsear y validar datos
    const body = await request.json()
    const validatedData = loginSchema.parse(body)

    // Auth.js maneja todo: JWT, cookies, sesión
    const result = await signIn('credentials', {
      email: validatedData.email,
      password: validatedData.password,
      redirect: false
    })

    if (result?.error) {
      // Errores específicos desde authConfig.ts
      switch (result.error) {
        case 'USER_NOT_FOUND':
          return NextResponse.json(
            { error: 'USER_NOT_FOUND', message: 'Usuario no encontrado' },
            { status: 404 }
          )
        case 'INVALID_PASSWORD':
          return NextResponse.json(
            { error: 'INVALID_PASSWORD', message: 'Contraseña incorrecta' },
            { status: 401 }
          )
        default:
          return NextResponse.json(
            { error: 'LOGIN_FAILED', message: 'Error en el login' },
            { status: 401 }
          )
      }
    }

    // Auth.js ya creó la cookie httpOnly automáticamente
    return NextResponse.json({
      success: true,
      message: 'Login exitoso',
      user: result?.user // Datos del usuario desde el JWT
    })

  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { 
          error: 'VALIDATION_ERROR', 
          message: 'Datos inválidos',
          details: error.issues
        },
        { status: 400 }
      )
    }

    return NextResponse.json(
      { error: 'INTERNAL_ERROR', message: 'Error interno del servidor' },
      { status: 500 }
    )
  }
}
