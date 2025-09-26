'use client';
import { usePathname } from 'next/navigation';
import type { ReactNode } from 'react';

export default function AdminLayout({ children }: { children: ReactNode }) {
  const pathname = usePathname();

  const isLoginRoute = pathname?.startsWith('/admin/login');

  if (isLoginRoute) {
    return <div className="min-h-dvh bg-white text-gray-900 mx-auto max-w-6xl px-4 py-6">{children}</div>;
  }

  // Para rutas protegidas, solo renderizamos el children sin layout adicional
  // El dashboard v2 maneja su propio sidebar y layout
  return <div className="min-h-dvh bg-white text-gray-900">{children}</div>;
}