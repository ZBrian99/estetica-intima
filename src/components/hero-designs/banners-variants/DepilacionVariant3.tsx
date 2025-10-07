'use client';

import Link from 'next/link';

export default function DepilacionVariant3() {
  return (
    <section className="relative min-h-[calc(100svh-4rem)] overflow-hidden">
      {/* Right image emphasis */}
      <div className="absolute inset-0 bg-gradient-to-br from-emerald-800 via-teal-700 to-sky-700" />
      <div className="absolute right-0 top-0 bottom-0 w-1/2">
        <img
          src="https://image.pollinations.ai/prompt/laser%20hair%20removal%20treatment%20professional%20clinic%20safe%20non%20explicit%20green%20cyan%20tones%20argentina?width=1200&height=900&model=flux-realism&enhance=true&nologo=true&seed=2103"
          alt="Tratamiento láser"
          className="w-full h-full object-cover opacity-25"
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="max-w-xl text-white">
          <h2 className="text-4xl md:text-5xl font-bold">Definitiva y Segura</h2>
          <p className="mt-4 text-white/85">Zonas desde precios accesibles, combos para optimizar tiempo y resultados. Consultá por evaluación inicial sin compromiso.</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link href="/servicios?tipo=depilacion&genero=mujer" className="px-5 py-2.5 rounded-lg bg-white text-gray-900 font-semibold shadow-sm hover:bg-white/90">Mujer</Link>
            <Link href="/servicios?tipo=depilacion&genero=hombre" className="px-5 py-2.5 rounded-lg border border-white/70 text-white hover:bg-white/10 font-semibold">Hombre</Link>
            <Link href="/contacto" className="px-5 py-2.5 rounded-lg bg-white/10 border border-white/20 text-white hover:bg-white/20 font-semibold">Consultar</Link>
          </div>
        </div>
      </div>
    </section>
  );
}