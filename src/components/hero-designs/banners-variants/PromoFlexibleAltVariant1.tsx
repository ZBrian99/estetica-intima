'use client';

import Link from 'next/link';

export default function PromoFlexibleAltVariant1() {
  return (
    <section className="relative min-h-[calc(100svh-4rem)] overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-800 via-purple-700 to-fuchsia-700" />
      <img
        src="https://image.pollinations.ai/prompt/adaptable%20promo%20banner%20aesthetic%20clinic%20purple%20indigo%20tones%20clean%20argentina%20realistic?width=1920&height=1080&model=flux-realism&enhance=true&nologo=true&seed=5201"
        alt="Oferta Limitada"
        className="absolute inset-0 w-full h-full object-cover opacity-12"
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 text-white">
        <div className="max-w-2xl">
          <h2 className="text-4xl md:text-6xl font-black">Oferta Limitada</h2>
          <p className="mt-4 text-white/85">Adaptable a cualquier contenido: servicio, combo, pack o categoría. Definí el color y los textos según campaña.</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link href="/promociones" className="px-5 py-2.5 rounded-full bg-white text-gray-900 font-semibold shadow-sm hover:bg-white/90">Aprovechar descuento</Link>
            <Link href="/servicios" className="px-5 py-2.5 rounded-full border border-white/70 text-white hover:bg-white/10 font-semibold">Explorar servicios</Link>
          </div>
        </div>
      </div>
    </section>
  );
}