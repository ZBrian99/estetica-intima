'use client';

import Link from 'next/link';

export default function ComboGluteosV3() {
  return (
    <section className="relative min-h-[calc(100svh-4rem)] overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-red-600 via-fuchsia-600 to-rose-600" />
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-16 md:py-24 grid md:grid-cols-2 gap-8 items-center text-white">
        <div>
          <h1 className="text-4xl md:text-6xl font-bold">Combo Full Glúteos</h1>
          <div className="mt-4 grid grid-cols-2 gap-3 max-w-md">
            {['Tonificación', 'Lifting', 'Seguimiento', 'Plan personalizado'].map((f) => (
              <div key={f} className="px-3 py-2 rounded-lg bg-white/10 border border-white/20 text-sm">{f}</div>
            ))}
          </div>
          <div className="mt-8 flex gap-3 flex-wrap">
            <Link href="/promociones" className="px-6 py-3 rounded-lg bg-white text-gray-900 font-semibold">Ver promo</Link>
            <Link href="/contacto" className="px-6 py-3 rounded-lg border border-white/70 text-white">Agendar</Link>
          </div>
        </div>
        <div className="hidden md:block" />
      </div>
    </section>
  );
}