'use client';

import Link from 'next/link';

export default function DepilacionVariant2() {
  return (
    <section className="relative min-h-[calc(100svh-4rem)] overflow-hidden">
      {/* Cover style with centered content */}
      <div className="absolute inset-0 bg-gradient-to-tl from-teal-800 via-emerald-700 to-cyan-700" />
      <img
        src="https://image.pollinations.ai/prompt/diode%20laser%20hair%20removal%20device%20professional%20clinic%20green%20cyan%20tones%20argentina%20clean%20photography%20non%20explicit?width=1920&height=1080&model=flux-realism&enhance=true&nologo=true&seed=2102"
        alt="Láser de diodo"
        className="absolute inset-0 w-full h-full object-cover opacity-10"
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 text-center text-white">
        <h2 className="text-4xl md:text-6xl font-extrabold">Depilación Láser</h2>
        <p className="mt-4 max-w-2xl mx-auto text-white/85">Sesiones seguras, efectivas y seguimiento. Opciones para mujer y hombre. Combiná zonas y ahorrá con nuestros combos.</p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <Link href="/servicios?tipo=depilacion&genero=mujer" className="px-5 py-2.5 rounded-lg bg-white text-gray-900 font-semibold shadow-sm hover:bg-white/90">Mujer</Link>
          <Link href="/servicios?tipo=depilacion&genero=hombre" className="px-5 py-2.5 rounded-lg border border-white/70 text-white hover:bg-white/10 font-semibold">Hombre</Link>
          <Link href="/promociones" className="px-5 py-2.5 rounded-lg bg-white/10 border border-white/20 text-white hover:bg-white/20 font-semibold">Combos</Link>
        </div>
      </div>
    </section>
  );
}