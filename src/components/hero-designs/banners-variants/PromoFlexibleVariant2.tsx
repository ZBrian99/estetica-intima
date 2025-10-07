'use client';

import Link from 'next/link';

export default function PromoFlexibleVariant2() {
  return (
    <section className="relative min-h-[calc(100svh-4rem)] overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-tr from-indigo-900 via-blue-900 to-slate-900" />
      <div className="absolute inset-x-0 top-1/4 h-20 bg-white/10" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 text-white">
        <div className="max-w-2xl">
          <h2 className="text-4xl md:text-6xl font-black">Descuento Activo</h2>
          <p className="mt-4 text-white/85">Configuración adaptable: porcentaje o monto fijo. Aplica a servicios, combos, packs o categorías.</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link href="/promociones" className="px-5 py-2.5 rounded-full bg-white text-gray-900 font-semibold shadow-sm hover:bg-white/90">Ver condiciones</Link>
            <Link href="/servicios" className="px-5 py-2.5 rounded-full border border-white/70 text-white hover:bg-white/10 font-semibold">Aplicar ahora</Link>
          </div>
        </div>
      </div>
    </section>
  );
}