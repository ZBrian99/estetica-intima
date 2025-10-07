'use client';

import Link from 'next/link';

const combos = [
  { name: 'EMS+ Intensivo', benefit: 'Tonifica', icon: 'fa-solid fa-dumbbell' },
  { name: 'RF Focalizada', benefit: 'Lifting', icon: 'fa-solid fa-tower-broadcast' },
  { name: 'Vacuum Sculpt', benefit: 'Moldea', icon: 'fa-solid fa-bullseye' },
];

export default function ComboGluteosMain() {
  const whatsappHref = '/#contacto';
  return (
    <section className="relative min-h-[calc(100svh-4rem)] overflow-hidden">
      {/* Fondo rosado/fucsia con imagen segura */}
      <div className="absolute inset-0 bg-gradient-to-br from-rose-800 via-fuchsia-700 to-pink-700" />
      <img
        src="https://image.pollinations.ai/prompt/aesthetic%20clinic%20body%20contouring%20equipment%20hero%20banner%20safe%20fuchsia%20rose%20pink%20tones%20clean%20professional%20argentina?width=1920&height=1080&model=flux-realism&enhance=true&nologo=true&seed=9742"
        alt="Combo Full Glúteos"
        className="absolute inset-0 w-full h-full object-cover opacity-15"
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 text-white">
        {/* Icono categoría */}
        <div className="mx-auto md:mx-0 mb-6 w-16 h-16 rounded-full bg-white/15 border border-white/30 flex items-center justify-center">
          <i className="fa-solid fa-bullseye text-2xl" />
        </div>

        <div className="text-center md:text-left">
          <h2 className="text-5xl md:text-7xl font-extrabold">Combo Full Glúteos</h2>
          <p className="mt-3 text-white/95 text-xl">3 tratamientos potentes · 1h 30m</p>
          <p className="mt-3 max-w-2xl text-white/85 text-lg">Levantamiento y tonificación segura, con enfoque en resultados y confort.</p>
        </div>

        {/* Lista de ítems, diseño distinto al de Pase Libre */}
        <div className="mt-10 grid sm:grid-cols-3 gap-5">
          {combos.map((c) => (
            <div key={c.name} className="rounded-2xl border border-white/25 bg-white/10 p-6">
              <div className="w-14 h-14 rounded-full bg-white/20 flex items-center justify-center text-2xl">
                <i className={c.icon} />
              </div>
              <div className="mt-4 font-semibold text-lg">{c.name}</div>
              <div className="text-white/85 text-sm">{c.benefit}</div>
            </div>
          ))}
        </div>

        <div className="mt-12 flex flex-wrap gap-4">
          <Link href={whatsappHref} className="px-7 py-3.5 rounded-full bg-white text-gray-900 font-semibold shadow hover:bg-white/90 inline-flex items-center gap-2">
            <i className="fa-brands fa-whatsapp" />
            Agendar ahora
          </Link>
          <Link href="/promociones" className="px-7 py-3.5 rounded-full border border-white/80 text-white hover:bg-white/10 font-semibold inline-flex items-center gap-2">
            <i className="fa-solid fa-tags" />
            Ver promo
          </Link>
        </div>
      </div>
    </section>
  );
}