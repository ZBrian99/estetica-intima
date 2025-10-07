'use client';

import Link from 'next/link';

export default function PromoFlexibleVariant3() {
  return (
    <section className="relative min-h-[calc(100svh-4rem)] overflow-hidden">
      {/* Minimalist with bordered panel */}
      <div className="absolute inset-0 bg-gradient-to-bl from-zinc-900 via-neutral-800 to-stone-800" />
      <div className="absolute inset-0 flex items-center">
        <div className="mx-auto max-w-5xl w-full px-4">
          <div className="rounded-3xl border border-white/20 bg-white/5 p-8">
            <div className="text-white">
              <h2 className="text-3xl md:text-5xl font-extrabold">Promo Adaptable</h2>
              <p className="mt-3 text-white/85 max-w-xl">Se ajusta a servicio, combo, pack o categoría. Configurable como % o fijo y con ventana temporal.</p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Link href="/promociones" className="px-5 py-2.5 rounded-lg bg-white text-gray-900 font-semibold shadow-sm hover:bg-white/90">Ver condiciones</Link>
                <Link href="/servicios" className="px-5 py-2.5 rounded-lg border border-white/70 text-white hover:bg-white/10 font-semibold">Aplicar ahora</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}