import { signOut } from '@/lib/auth/auth';
import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    // Auth.js maneja automáticamente la eliminación de cookies
    await signOut({ redirect: false });
    
    return NextResponse.json({
      success: true,
      message: 'Logout exitoso'
    });
  } catch (error) {
    console.error('Error en logout:', error);
    return NextResponse.json(
      { 
        error: 'LOGOUT_FAILED', 
        message: 'Error al cerrar sesión' 
      },
      { status: 500 }
    );
  }
}