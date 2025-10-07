'use client';

import Link from 'next/link';

export default function ComboGluteosVariant1() {
  return (
    <section className="relative min-h-[calc(100svh-4rem)] overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-rose-700 via-fuchsia-700 to-red-600" />
      {/* Safe equipment imagery (non-explicit) */}
      <img
        src="https://image.pollinations.ai/prompt/aesthetic%20clinic%20body%20contouring%20equipment%20modern%20clean%20pink%20fuchsia%20tones%20argentina%20non%20explicit%20photography?width=1920&height=1080&model=flux-realism&enhance=true&nologo=true&seed=4101"
        alt="Equipos corporales"
        className="absolute inset-0 w-full h-full object-cover opacity-12"
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-white">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-extrabold">Combo Full Glúteos</h2>
            <p className="mt-3 text-lg">Mio Up + Maderoterapia + Alpha Synergy</p>
            <p className="mt-4 text-white/90 max-w-xl">Programa intensivo con seguimiento y mediciones objetivas. Resultados visibles sin exageraciones.</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link href="/promociones" className="px-5 py-2.5 rounded-lg bg-white text-gray-900 font-semibold shadow-sm hover:bg-white/90">Ver promo</Link>
              <Link href="/contacto" className="px-5 py-2.5 rounded-lg border border-white/70 text-white hover:bg-white/10 font-semibold">Agendar</Link>
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