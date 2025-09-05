import { auth } from './auth'

interface User {
  id: string
  name: string
  email: string
  role: string
}

interface AuthState {
  user: User | null
  isAuth: boolean
  isAdmin: boolean
  isUser: boolean
}

// Solo para componentes que necesitan información completa del usuario
export async function getAuth(): Promise<AuthState> {
  try {
    const session = await auth()

    if (!session?.user) {
      return {
        user: null,
        isAuth: false,
        isAdmin: false,
        isUser: false
      }
    }

    const user: User = {
      id: session.user.id,
      email: session.user.email,
      name: session.user.name,
      role: session.user.role
    }

    return {
      user,
      isAuth: true,
      isAdmin: user.role === 'ADMIN',
      isUser: user.role === 'USER'
    }
  } catch (error) {
    console.error('Error getting auth:', error)
    return {
      user: null,
      isAuth: false,
      isAdmin: false,
      isUser: false
    }
  }
}
