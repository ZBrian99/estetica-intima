'use client';

import Link from 'next/link';

export default function ComboGluteosVariant3() {
  const inclusions = ['Mio Up', 'Maderoterapia', 'Alpha Synergy'];
  return (
    <section className="relative min-h-[calc(100svh-4rem)] overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-rose-600 via-fuchsia-600 to-red-600" />
      <img
        src="https://image.pollinations.ai/prompt/aesthetic%20clinic%20equipment%20body%20toning%20program%20non%20explicit%20clean%20design%20pink%20fuchsia%20argentina?width=1920&height=1080&model=flux-realism&enhance=true&nologo=true&seed=4103"
        alt="Programa de glúteos"
        className="absolute inset-0 w-full h-full object-cover opacity-10"
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 text-white">
        <div className="grid md:grid-cols-3 gap-6 items-start">
          <div className="md:col-span-2">
            <h2 className="text-4xl md:text-6xl font-extrabold">Combo Full Glúteos</h2>
            <p className="mt-4 text-white/90 max-w-xl">Pack recomendado con seguimiento y mediciones. Diseño modernizado para comunicar sin exagerar.</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link href="/promociones" className="px-5 py-2.5 rounded-lg bg-white text-gray-900 font-semibold shadow-sm hover:bg-white/90">Ver promo</Link>
              <Link href="/contacto" className="px-5 py-2.5 rounded-lg border border-white/70 text-white hover:bg-white/10 font-semibold">Agendar</Link>
            </div>
          </div>
          <div className="rounded-2xl bg-white/10 border border-white/20 p-4">
            <div className="grid grid-cols-1 gap-2">
              {inclusions.map((inc) => (
                <div key={inc} className="px-3 py-2 rounded-lg bg-white/10 border border-white/20 text-sm text-white/90">{inc}</div>
              ))}
            </div>
            <div className="mt-3 text-xs text-white/80">No explícito. Comunicación honesta y clara.</div>
          </div>
        </div>
      </div>
    </section>
  );
}