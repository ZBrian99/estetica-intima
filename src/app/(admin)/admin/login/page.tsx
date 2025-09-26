"use client";
import { useState } from 'react';
import { LoginFormSchema } from '@/schemas/authSchemas';
import { useRouter } from 'next/navigation';
import { FiMail, FiLock } from 'react-icons/fi';

type FormState = {
  email: string;
  password: string;
};

export default function Page() {
  const [form, setForm] = useState<FormState>({ email: 'admin@example.com', password: '123456' });
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const router = useRouter();

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError(null);

    const parsed = LoginFormSchema.safeParse(form);
    if (!parsed.success) {
      const first = parsed.error.issues[0];
      setError(first?.message ?? 'Datos inválidos');
      return;
    }

    try {
      setLoading(true);
      const res = await fetch('/api/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        credentials: 'include',
        body: JSON.stringify({ email: form.email, password: form.password }),
      });

      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        const msg = (data?.message as string | undefined) ?? 'Credenciales inválidas';
        setError(msg);
        return;
      }

      // Cookie httpOnly seteada por Auth.js. Redirigimos al dashboard protegido.
        router.replace('/admin/dashboard');
        router.replace('/admin/dashboard/v2');
    } catch (err) {
      setError('Error de red. Intentá de nuevo.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="mx-auto max-w-md">
      <h1 className="text-2xl font-semibold mb-2">Panel de administración</h1>
      <p className="text-gray-600 mb-6">Accedé con tus credenciales.</p>
      <form onSubmit={onSubmit} className="space-y-4">
        <div>
          <label htmlFor="email" className="block text-sm font-medium">
            Email
          </label>
          <div className="mt-1 relative">
            <FiMail className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500 size-4" />
            <input
              id="email"
              type="email"
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              className="w-full rounded-md border pl-10 pr-3 py-2 outline-none focus:ring-2 focus:ring-violet-500"
              placeholder="tu@email.com"
              autoComplete="email"
              required
            />
          </div>
        </div>
        <div>
          <label htmlFor="password" className="block text-sm font-medium">
            Contraseña
          </label>
          <div className="mt-1 relative">
            <FiLock className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500 size-4" />
            <input
              id="password"
              type="password"
              value={form.password}
              onChange={(e) => setForm({ ...form, password: e.target.value })}
              className="w-full rounded-md border pl-10 pr-3 py-2 outline-none focus:ring-2 focus:ring-violet-500"
              placeholder="••••••••"
              autoComplete="current-password"
              required
            />
          </div>
        </div>
        {error && <p className="text-sm text-red-600">{error}</p>}
        <button
          type="submit"
          className="w-full rounded-md bg-violet-600 text-white py-2 font-medium hover:bg-violet-700 disabled:opacity-50"
          disabled={loading}
        >
          {loading ? 'Ingresando...' : 'Ingresar'}
        </button>
      </form>
    </div>
  );
}