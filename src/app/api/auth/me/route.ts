import { auth } from '@/lib/auth/auth'
import { NextResponse } from 'next/server'

export async function GET() {
  try {
    // auth() verifica automáticamente el JWT de la cookie
    const session = await auth()
    
    if (!session?.user) {
      return NextResponse.json(
        { error: 'NOT_AUTHENTICATED', message: 'No autenticado' },
        { status: 401 }
      )
    }

    // Datos del usuario ya decodificados del JWT
    return NextResponse.json({
      user: {
        id: session.user.id,
        name: session.user.name,
        email: session.user.email,
        role: session.user.role,
      }
    })
  } catch (error) {
    return NextResponse.json(
      { error: 'INTERNAL_ERROR', message: 'Error interno del servidor' },
      { status: 500 }
    )
  }
}
