'use client';

import Link from 'next/link';

export default function PaseLibreVariant1() {
  const items = ['Mio Up', 'Alpha Synergy', 'Presoterapia', 'Faciales', 'Radiofrecuencia', 'Drenaje', 'Crio/Termo'];
  return (
    <section className="relative min-h-[calc(100svh-4rem)] overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-amber-500 via-yellow-500 to-orange-500" />
      <img
        src="https://image.pollinations.ai/prompt/wellness%20pass%20promotion%20aesthetic%20clinic%20gold%20yellow%20orange%20tones%20modern%20design%20argentina%20realistic?width=1920&height=1080&model=flux-realism&enhance=true&nologo=true&seed=3101"
        alt="Pase Libre"
        className="absolute inset-0 w-full h-full object-cover opacity-15"
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid md:grid-cols-2 gap-8 items-center text-white">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold">Pase Libre Íntima</h2>
            <p className="mt-3 text-lg">2 horas a elección · Armá tu rutina</p>
            <p className="mt-4 text-white/90 max-w-xl">Elegí entre tratamientos destacados y organizá tu tiempo con libertad y ahorro. Ideal para agenda flexible.</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link href="/promociones" className="px-5 py-2.5 rounded-lg bg-white text-gray-900 font-semibold shadow-sm hover:bg-white/90">Ver detalles</Link>
              <Link href="/contacto" className="px-5 py-2.5 rounded-lg border border-white/70 text-white hover:bg-white/10 font-semibold">Reservar</Link>
            </div>
          </div>
          <div>
            <div className="rounded-2xl bg-white/10 border border-white/20 p-4">
              <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
                {items.map((it) => (
                  <div key={it} className="px-3 py-2 rounded-lg bg-white/10 border border-white/20 text-sm text-white/90 text-center">{it}</div>
                ))}
              </div>
              <div className="mt-3 text-xs text-white/80">Si por diseño conviene, ajustamos a 6 u 8 ítems.</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}