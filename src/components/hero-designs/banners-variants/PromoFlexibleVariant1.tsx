'use client';

import Link from 'next/link';

export default function PromoFlexibleVariant1() {
  const windows = ['Sólo hoy', 'Esta semana', 'Esta fecha', 'Este mes', 'Estación'];
  return (
    <section className="relative min-h-[calc(100svh-4rem)] overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-gray-800 to-gray-700" />
      <img
        src="https://image.pollinations.ai/prompt/professional%20aesthetic%20clinic%20promo%20neutral%20dark%20tones%20clean%20modern%20design%20argentina%20realistic?width=1920&height=1080&model=flux-realism&enhance=true&nologo=true&seed=5101"
        alt="Promo flexible"
        className="absolute inset-0 w-full h-full object-cover opacity-10"
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 text-white">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold">Promoción Especial</h2>
            <p className="mt-3 text-lg">Descuento por tiempo limitado</p>
            <p className="mt-4 text-white/85 max-w-xl">Aplicable a servicio específico, combo, pack o categoría. Configurable como porcentaje o monto fijo.</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link href="/promociones" className="px-5 py-2.5 rounded-lg bg-white text-gray-900 font-semibold shadow-sm hover:bg-white/90">Ver condiciones</Link>
              <Link href="/servicios" className="px-5 py-2.5 rounded-lg border border-white/70 text-white hover:bg-white/10 font-semibold">Aplicar ahora</Link>
            </div>
          </div>
          <div className="rounded-2xl bg-white/10 border border-white/20 p-4">
            <div className="flex flex-wrap gap-2">
              {windows.map((w) => (
                <span key={w} className="px-3 py-1 rounded-full bg-white/10 border border-white/20 text-sm text-white/90">{w}</span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}