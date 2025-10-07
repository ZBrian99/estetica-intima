'use client';

import Link from 'next/link';

export default function HeroGeneralVariant2() {
  return (
    <section className="relative min-h-[calc(100svh-4rem)] overflow-hidden">
      {/* Bold gradient background */}
      <div className="absolute inset-0 bg-gradient-to-tr from-fuchsia-700 via-violet-700 to-purple-900" />
      {/* Subtle pattern using layered boxes */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-10 left-10 h-24 w-24 rounded-xl bg-white/10" />
        <div className="absolute bottom-16 right-16 h-32 w-32 rounded-2xl bg-white/10" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center text-white">
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight">ÍNTIMA</h1>
          <p className="mt-3 text-lg md:text-xl text-white/90">Estética Integral · Mar del Plata</p>
          <p className="mt-4 max-w-2xl mx-auto text-white/85">
            Depilación láser, tratamientos corporales y cuidado facial con tecnología de punta y trato humano. Resultados que se ven y se sienten.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Link href="/servicios" className="px-5 py-2.5 rounded-lg bg-white text-gray-900 font-semibold shadow-sm hover:bg-white/90">Ver servicios</Link>
            <Link href="/contacto" className="px-5 py-2.5 rounded-lg border border-white/70 text-white hover:bg-white/10 font-semibold">Sacar turno</Link>
          </div>

          {/* Feature cards row */}
          <div className="mt-10 grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { t: 'Depilación Láser', d: 'Planes por zonas y combos' },
              { t: 'Corporales', d: 'Tonificación y remodelado' },
              { t: 'Faciales', d: 'Cuidado integral de la piel' },
              { t: 'Promociones', d: 'Descuentos reales por tiempo' },
            ].map((item, idx) => (
              <div key={idx} className="rounded-xl bg-white/10 border border-white/20 p-4 text-left">
                <div className="text-sm text-white/80">{item.t}</div>
                <div className="text-xs text-white/70">{item.d}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}