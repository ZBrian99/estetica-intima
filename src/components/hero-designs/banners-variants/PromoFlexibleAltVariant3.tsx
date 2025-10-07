'use client';

import Link from 'next/link';

export default function PromoFlexibleAltVariant3() {
  return (
    <section className="relative min-h-[calc(100svh-4rem)] overflow-hidden">
      {/* Panel layout */}
      <div className="absolute inset-0 bg-gradient-to-b from-purple-900 via-fuchsia-800 to-rose-800" />
      <div className="absolute inset-0 flex items-center">
        <div className="mx-auto max-w-6xl w-full px-4">
          <div className="grid md:grid-cols-2 gap-6">
            <div className="rounded-3xl border border-white/20 bg-white/5 p-8 text-white">
              <h2 className="text-3xl md:text-5xl font-extrabold">Oferta Limitada</h2>
              <p className="mt-3 text-white/85">Descuento adaptable (porcentaje o fijo). Válido por día, semana, fecha, mes o estación.</p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Link href="/promociones" className="px-5 py-2.5 rounded-lg bg-white text-gray-900 font-semibold shadow-sm hover:bg-white/90">Aprovechar</Link>
                <Link href="/servicios" className="px-5 py-2.5 rounded-lg border border-white/70 text-white hover:bg-white/10 font-semibold">Servicios</Link>
              </div>
            </div>
            <div className="hidden md:block rounded-3xl border border-white/20 bg-white/5" />
          </div>
        </div>
      </div>
    </section>
  );
}