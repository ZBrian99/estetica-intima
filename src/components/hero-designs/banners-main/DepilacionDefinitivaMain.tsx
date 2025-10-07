'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function DepilacionDefinitivaMain() {
  const [gender, setGender] = useState<'mujer' | 'hombre'>('mujer');
  const whatsappHref = '/#contacto';
  return (
    <section className="relative min-h-[calc(100svh-4rem)] overflow-hidden">
      {/* Fondo con gradiente teal/emerald más vivo e imagen */}
      <div className="absolute inset-0 bg-gradient-to-br from-teal-800 via-emerald-700 to-cyan-700" />
      <img
        src="https://image.pollinations.ai/prompt/aesthetic%20clinic%20laser%20hair%20removal%20hero%20banner%20clean%20modern%20teal%20emerald%20cyan%20tones%20professional%20argentina?width=1920&height=1080&model=flux-realism&enhance=true&nologo=true&seed=9355"
        alt="Depilación definitiva"
        className="absolute inset-0 w-full h-full object-cover opacity-20"
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 text-white">
        {/* Icono categoría */}
        <div className="mb-6 w-16 h-16 rounded-full bg-white/15 border border-white/30 flex items-center justify-center">
          <i className="fa-solid fa-wand-magic-sparkles text-2xl" />
        </div>

        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-5xl md:text-7xl font-extrabold">Depilación definitiva</h2>
            <p className="mt-4 text-white/90 text-xl max-w-xl">Seguro, preciso y apto para todos los fototipos.</p>

            {/* Selector de género estilizado */}
            <div className="mt-6 inline-flex rounded-full border border-white/40 bg-white/10 overflow-hidden">
              {(['mujer','hombre'] as const).map((g) => (
                <button
                  key={g}
                  onClick={() => setGender(g)}
                  aria-pressed={gender === g}
                  className={`px-6 py-3 text-base md:text-lg font-semibold transition inline-flex items-center gap-2 ${gender === g ? 'bg-white text-gray-900' : 'text-white hover:bg-white/15'}`}
                >
                  <i className={`fa-solid ${g === 'mujer' ? 'fa-venus' : 'fa-mars'}`} />
                  {g === 'mujer' ? 'Mujer' : 'Hombre'}
                </button>
              ))}
            </div>

            <div className="mt-10 flex flex-wrap gap-4">
              <Link href={whatsappHref} className="px-7 py-3.5 rounded-full bg-white text-gray-900 font-semibold shadow-sm hover:bg-white/90 inline-flex items-center gap-2">
                <i className="fa-brands fa-whatsapp" />
                Reservar consulta
              </Link>
              <Link href="/servicios" className="px-7 py-3.5 rounded-full border border-white/80 text-white hover:bg-white/10 font-semibold inline-flex items-center gap-2">
                <i className="fa-solid fa-list-ul" />
                Ver zonas
              </Link>
            </div>
          </div>

          {/* Panel de acento a la derecha */}
          <div className="hidden md:block">
            <div className="rounded-3xl border border-white/25 bg-white/10 p-6 h-80 flex items-center justify-center">
              <div className="grid grid-cols-3 gap-4 w-full max-w-md">
                {Array.from({ length: 6 }).map((_, i) => (
                  <div key={i} className="aspect-square rounded-xl bg-white/15 border border-white/25 flex items-center justify-center">
                    <i className="fa-solid fa-sparkles text-xl text-white/90" />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}