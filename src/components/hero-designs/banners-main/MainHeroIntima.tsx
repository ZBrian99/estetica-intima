'use client';

import Link from 'next/link';

export default function MainHeroIntima() {
  const whatsappHref = '/#contacto';
  return (
    <section className="relative min-h-[calc(100svh-4rem)] overflow-hidden">
      {/* Fondo con gradiente violeta más vibrante e imagen mezclada */}
      <div className="absolute inset-0 bg-gradient-to-br from-violet-800 via-fuchsia-700 to-purple-800" />
      <img
        src="https://image.pollinations.ai/prompt/aesthetic%20clinic%20hero%20banner%20professional%20studio%20lighting%20violet%20purple%20tones%20elegant%20clean%20argentina%20ui%20design?width=1920&height=1080&model=flux-realism&enhance=true&nologo=true&seed=9241"
        alt="Fondo estética"
        className="absolute inset-0 w-full h-full object-cover opacity-20"
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 text-white text-center">
        {/* Icono / logo arriba */}
        <div className="mx-auto mb-6 w-16 h-16 rounded-full bg-white/15 border border-white/30 flex items-center justify-center">
          <img src="/logo-sin-fondo.webp" alt="Íntima" className="w-10 h-10 object-contain" />
        </div>

        <h1 className="text-6xl md:text-8xl font-extrabold tracking-tight">Íntima</h1>
        <p className="mt-3 text-xl md:text-2xl font-semibold text-white/95">Centro de estética integral</p>
        <p className="mt-4 max-w-2xl mx-auto text-lg md:text-xl text-white/85">Cuidado profesional, tecnología avanzada y resultados visibles.</p>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <Link href={whatsappHref} className="px-7 py-3.5 rounded-full bg-white text-gray-900 font-semibold shadow hover:bg-white/90 inline-flex items-center gap-2">
            <i className="fa-brands fa-whatsapp" />
            Reservar por WhatsApp
          </Link>
          <Link href="/servicios" className="px-7 py-3.5 rounded-full border border-white/80 text-white hover:bg-white/10 font-semibold inline-flex items-center gap-2">
            <i className="fa-solid fa-spa" />
            Ver servicios
          </Link>
        </div>
      </div>
    </section>
  );
}