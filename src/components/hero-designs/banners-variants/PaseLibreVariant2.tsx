'use client';

import Link from 'next/link';

export default function PaseLibreVariant2() {
  return (
    <section className="relative min-h-[calc(100svh-4rem)] overflow-hidden">
      {/* Ticket-style stripe */}
      <div className="absolute inset-0 bg-gradient-to-tr from-yellow-600 via-amber-500 to-orange-600" />
      <div className="absolute inset-x-0 top-1/3 h-24 bg-white/10" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 text-white">
        <div className="max-w-3xl">
          <h2 className="text-4xl md:text-6xl font-extrabold">Pase Libre</h2>
          <p className="mt-4 text-lg">2 horas · Vos elegís</p>
          <p className="mt-3 text-white/85 max-w-xl">Combiná tratamientos en una misma visita. Ideal para organizarte sin perder calidad.</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link href="/promociones" className="px-5 py-2.5 rounded-lg bg-white text-gray-900 font-semibold shadow-sm hover:bg-white/90">Ver detalles</Link>
            <Link href="/contacto" className="px-5 py-2.5 rounded-lg border border-white/70 text-white hover:bg-white/10 font-semibold">Reservar</Link>
          </div>
        </div>
      </div>
    </section>
  );
}