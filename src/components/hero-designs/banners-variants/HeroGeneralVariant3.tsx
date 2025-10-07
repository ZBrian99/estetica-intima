'use client';

import Link from 'next/link';

export default function HeroGeneralVariant3() {
  return (
    <section className="relative min-h-[calc(100svh-4rem)] overflow-hidden">
      {/* Diagonal banner style */}
      <div className="absolute inset-0 bg-gradient-to-bl from-purple-900 via-violet-700 to-fuchsia-700" />
      <div className="absolute inset-y-0 -left-16 w-1/2 rotate-[-8deg] bg-white/10" />
      <div className="absolute inset-y-0 -right-24 w-1/3 rotate-[6deg] bg-white/10" />

      {/* Background image subtly blended */}
      <img
        src="https://image.pollinations.ai/prompt/modern%20aesthetic%20clinic%20reception%20area%20violet%20fuchsia%20tones%20clean%20elegant%20argentina%20photography?width=1920&height=1080&model=flux-realism&enhance=true&nologo=true&seed=1102"
        alt="Íntima recepción"
        className="absolute inset-0 w-full h-full object-cover opacity-15"
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="max-w-2xl text-white">
          <h1 className="text-4xl md:text-6xl font-black leading-tight">ÍNTIMA</h1>
          <p className="mt-3 text-lg md:text-xl text-white/90">Estética profesional en Mar del Plata</p>
          <p className="mt-4 text-white/85">
            Resultados medibles, tecnología real y trato cercano. Sin exageraciones. Cuidamos tu experiencia de principio a fin.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link href="/servicios" className="px-5 py-2.5 rounded-full bg-white text-gray-900 font-semibold shadow-sm hover:bg-white/90">Servicios</Link>
            <Link href="/contacto" className="px-5 py-2.5 rounded-full border border-white/70 text-white hover:bg-white/10 font-semibold">Turno</Link>
          </div>
        </div>
      </div>
    </section>
  );
}