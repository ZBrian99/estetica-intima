'use client';

import Link from 'next/link';

export default function PromoFlexibleAltVariant2() {
  return (
    <section className="relative min-h-[calc(100svh-4rem)] overflow-hidden">
      {/* Diagonal accent */}
      <div className="absolute inset-0 bg-gradient-to-tl from-fuchsia-800 via-violet-700 to-indigo-700" />
      <div className="absolute inset-y-0 -left-16 w-1/2 rotate-[-6deg] bg-white/10" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 text-white">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h2 className="text-3xl md:text-5xl font-extrabold">Promo Adaptable</h2>
            <p className="mt-3 text-white/85 max-w-xl">Listo para cualquier tipo de contenido con ajustes de color y copy según campaña.</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link href="/promociones" className="px-5 py-2.5 rounded-lg bg-white text-gray-900 font-semibold shadow-sm hover:bg-white/90">Ver Promo</Link>
              <Link href="/servicios" className="px-5 py-2.5 rounded-lg border border-white/70 text-white hover:bg-white/10 font-semibold">Ver Servicios</Link>
            </div>
          </div>
          <div className="hidden md:block">
            <div className="rounded-2xl bg-white/10 border border-white/20 h-72" />
          </div>
        </div>
      </div>
    </section>
  );
}