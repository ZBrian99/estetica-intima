'use client';

import Link from 'next/link';

export default function HeroGeneralVariant1() {
  return (
    <section className="relative min-h-[calc(100svh-4rem)] overflow-hidden">
      {/* Background gradient + image blend */}
      <div className="absolute inset-0 bg-gradient-to-br from-violet-800 via-violet-600 to-fuchsia-600" />
      <img
        src="https://image.pollinations.ai/prompt/argentina%20modern%20aesthetic%20clinic%20luxury%20interior%20violet%20and%20white%20tones%20clean%20design%20soft%20lighting%20photography?width=1920&height=1080&model=flux-realism&enhance=true&nologo=true&seed=1101"
        alt="Íntima Spa"
        className="absolute inset-0 w-full h-full object-cover opacity-20"
      />

      {/* Content split layout */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid md:grid-cols-2 items-center gap-8">
          <div className="text-white">
            <span className="inline-block text-sm font-semibold tracking-wider uppercase text-white/80">Centro profesional</span>
            <h1 className="mt-3 text-4xl md:text-6xl font-bold leading-tight">ÍNTIMA Estética Integral</h1>
            <p className="mt-4 text-white/90 text-lg max-w-xl">
              Tecnología de última generación y atención humana. Tratamientos corporales, faciales y depilación láser con enfoque realista y resultados medibles.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link href="/servicios" className="px-5 py-2.5 rounded-lg bg-white text-gray-900 font-semibold shadow-sm hover:bg-white/90">Conocer servicios</Link>
              <Link href="/contacto" className="px-5 py-2.5 rounded-lg border border-white/70 text-white hover:bg-white/10 font-semibold">Reservar turno</Link>
            </div>
            <div className="mt-6 flex flex-wrap gap-2">
              {['Depilación láser', 'Corporales', 'Faciales', 'Promos'].map((chip) => (
                <span key={chip} className="px-3 py-1 rounded-full bg-white/10 text-white/90 text-sm border border-white/20">{chip}</span>
              ))}
            </div>
          </div>
          <div className="hidden md:block">
            <div className="relative h-72 lg:h-80 w-full rounded-2xl bg-white/10 border border-white/20">
              <div className="absolute -top-6 -left-6 h-24 w-24 rounded-xl bg-fuchsia-500/60" />
              <div className="absolute -bottom-6 -right-6 h-16 w-16 rounded-lg bg-violet-400/60" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}