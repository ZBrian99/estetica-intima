'use client';

import Link from 'next/link';

export default function ComboGluteosVariant2() {
  return (
    <section className="relative min-h-[calc(100svh-4rem)] overflow-hidden">
      {/* Abstract shapes for safety */}
      <div className="absolute inset-0 bg-gradient-to-tr from-pink-700 via-fuchsia-700 to-rose-700" />
      <div className="absolute inset-y-0 left-0 w-1/3 bg-white/10" />
      <div className="absolute inset-y-0 right-0 w-1/5 bg-white/10" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 text-white">
        <div className="max-w-2xl">
          <h2 className="text-4xl md:text-6xl font-black">Glúteos Full</h2>
          <p className="mt-4 text-lg">Mio Up · Madero · Alpha</p>
          <p className="mt-3 text-white/85">Estructura de sesiones pensada para levantar y tonificar. Medimos, comparamos y ajustamos sin promesas vacías.</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link href="/promociones" className="px-5 py-2.5 rounded-full bg-white text-gray-900 font-semibold shadow-sm hover:bg-white/90">Ver promo</Link>
            <Link href="/contacto" className="px-5 py-2.5 rounded-full border border-white/70 text-white hover:bg-white/10 font-semibold">Agendar</Link>
          </div>
        </div>
      </div>
    </section>
  );
}