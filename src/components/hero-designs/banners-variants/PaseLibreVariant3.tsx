'use client';

import Link from 'next/link';

export default function PaseLibreVariant3() {
  return (
    <section className="relative min-h-[calc(100svh-4rem)] overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-amber-400 via-yellow-500 to-orange-600" />
      <img
        src="https://image.pollinations.ai/prompt/spa%20promotion%20pass%20gold%20yellow%20clean%20design%20argentina%20realistic%20non%20explicit?width=1920&height=1080&model=flux-realism&enhance=true&nologo=true&seed=3103"
        alt="Pase Libre promo"
        className="absolute inset-0 w-full h-full object-cover opacity-10"
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 text-white">
        <div className="grid md:grid-cols-3 gap-6 items-end">
          <div className="md:col-span-2">
            <h2 className="text-4xl md:text-6xl font-black">2 horas a elección</h2>
            <p className="mt-4 text-white/90 max-w-xl">Armá tu combinación ideal entre tratamientos destacados. Diseño pensado para decisiones rápidas y claras.</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link href="/promociones" className="px-5 py-2.5 rounded-full bg-white text-gray-900 font-semibold shadow-sm hover:bg-white/90">Ver detalles</Link>
              <Link href="/contacto" className="px-5 py-2.5 rounded-full border border-white/70 text-white hover:bg-white/10 font-semibold">Reservar</Link>
            </div>
          </div>
          <div className="hidden md:block">
            <div className="rounded-2xl bg-white/10 border border-white/20 h-48" />
          </div>
        </div>
      </div>
    </section>
  );
}