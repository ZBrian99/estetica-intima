'use client';

import Link from 'next/link';
import { Sun } from 'lucide-react';

export default function DepilacionVariant1() {
  return (
    <section className="relative min-h-[calc(100svh-4rem)] overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-emerald-700 via-cyan-700 to-sky-700" />
      <img
        src="https://image.pollinations.ai/prompt/professional%20diode%20laser%20hair%20removal%20clinic%20clean%20green%20cyan%20tones%20argentina%20non%20explicit%20equipment%20photography?width=1920&height=1080&model=flux-realism&enhance=true&nologo=true&seed=2101"
        alt="Depilación láser"
        className="absolute inset-0 w-full h-full object-cover opacity-15"
      />
      <div className="absolute inset-0 bg-black/5" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="text-white">
            <div className="flex items-center gap-2 text-white/90"><Sun className="h-6 w-6" /><span className="text-sm font-semibold uppercase">Depilación Definitiva</span></div>
            <h2 className="mt-3 text-4xl md:text-5xl font-bold">Láser de Diodo</h2>
            <p className="mt-4 text-white/85 max-w-xl">Planes por zonas y combos integrales. Seguridad, eficacia y seguimiento personalizado. Opciones para mujer y hombre.</p>
            <div className="mt-8 grid grid-cols-2 gap-3 max-w-md">
              <Link href="/servicios?tipo=depilacion&genero=mujer" className="px-5 py-3 rounded-lg bg-white text-gray-900 font-semibold text-center shadow-sm hover:bg-white/90">Mujer</Link>
              <Link href="/servicios?tipo=depilacion&genero=hombre" className="px-5 py-3 rounded-lg border border-white/70 text-white text-center hover:bg-white/10 font-semibold">Hombre</Link>
            </div>
            <div className="mt-6 flex flex-wrap gap-2">
              {['Zonas', 'Combos', 'Packs', 'Cuidados'].map((chip) => (
                <span key={chip} className="px-3 py-1 rounded-full bg-white/10 text-white/90 text-sm border border-white/20">{chip}</span>
              ))}
            </div>
          </div>
          <div className="hidden md:block">
            <div className="h-72 lg:h-80 w-full rounded-2xl bg-white/10 border border-white/20" />
          </div>
        </div>
      </div>
    </section>
  );
}