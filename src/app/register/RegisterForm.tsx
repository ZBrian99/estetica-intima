'use client'

import { useActionState } from 'react'
import { useFormStatus } from 'react-dom'
import { registerAction } from '@/lib/auth/actions'

function SubmitButton() {
  const { pending } = useFormStatus()
  return (
    <button
      type="submit"
      disabled={pending}
      className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 disabled:opacity-50 disabled:cursor-not-allowed"
    >
      {pending ? 'Creando cuenta...' : 'Crear cuenta'}
    </button>
  )
}

export default function RegisterForm() {
  const [state, formAction, pending] = useActionState(registerAction, undefined)

  return (
    <form className="mt-8 space-y-6" action={formAction}>
      <div className="space-y-4">
        <div>
          <label htmlFor="name" className="block text-sm font-medium">
            Nombre completo
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            className="mt-1 appearance-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            placeholder="Tu nombre completo"
          />
          {state?.errors?.name && (
            <p className="text-red-500 text-xs mt-1">{state.errors.name[0]}</p>
          )}
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-medium">
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            className="mt-1 appearance-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            placeholder="tu@email.com"
          />
          {state?.errors?.email && (
            <p className="text-red-500 text-xs mt-1">{state.errors.email[0]}</p>
          )}
        </div>

        <div>
          <label htmlFor="password" className="block text-sm font-medium">
            Contraseña
          </label>
          <input
            id="password"
            name="password"
            type="password"
            required
            className="mt-1 appearance-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            placeholder="Mínimo 8 caracteres"
          />
          {state?.errors?.password && (
            <p className="text-red-500 text-xs mt-1">{state.errors.password[0]}</p>
          )}
        </div>

        <div>
          <label htmlFor="confirmPassword" className="block text-sm font-medium">
            Confirmar contraseña
          </label>
          <input
            id="confirmPassword"
            name="confirmPassword"
            type="password"
            required
            className="mt-1 appearance-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            placeholder="Repite tu contraseña"
          />
          {state?.errors?.confirmPassword && (
            <p className="text-red-500 text-xs mt-1">{state.errors.confirmPassword[0]}</p>
          )}
        </div>
      </div>

      {state?.message && (
        <div className="text-red-500 text-sm text-center">{state.message}</div>
      )}

      <div>
        <SubmitButton />
      </div>
    </form>
  )
}
