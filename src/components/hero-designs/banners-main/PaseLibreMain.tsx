'use client';

import Link from 'next/link';

const items = [
  { name: 'Radiofrecuencia', benefit: 'Lifting', icon: 'fa-solid fa-bolt' },
  { name: 'Masaje', benefit: 'Relaja', icon: 'fa-solid fa-hand-sparkles' },
  { name: 'Electro', benefit: 'Tonifica', icon: 'fa-solid fa-dumbbell' },
  { name: 'Vacuum', benefit: 'Moldea', icon: 'fa-solid fa-wind' },
  { name: 'Drenaje', benefit: 'Reduce', icon: 'fa-solid fa-droplet' },
  { name: 'Crioterapia', benefit: 'Define', icon: 'fa-regular fa-snowflake' },
  { name: 'Ultracavitación', benefit: 'Contorno', icon: 'fa-solid fa-wave-square' },
  { name: 'Presoterapia', benefit: 'Circulación', icon: 'fa-solid fa-heart-pulse' },
];

export default function PaseLibreMain() {
  const whatsappHref = '/#contacto';
  return (
    <section className="relative min-h-[calc(100svh-4rem)] overflow-hidden">
      {/* Fondo dorado/amarillo/naranja */}
      <div className="absolute inset-0 bg-gradient-to-br from-amber-800 via-yellow-700 to-orange-700" />
      <img
        src="https://image.pollinations.ai/prompt/aesthetic%20clinic%20promo%20gold%20amber%20yellow%20orange%20hero%20banner%20clean%20professional%20argentina?width=1920&height=1080&model=flux-realism&enhance=true&nologo=true&seed=9521"
        alt="Pase Libre"
        className="absolute inset-0 w-full h-full object-cover opacity-15"
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 text-white text-center">
        {/* Icono de categoría */}
        <div className="mx-auto mb-6 w-16 h-16 rounded-full bg-white/15 border border-white/30 flex items-center justify-center">
          <i className="fa-solid fa-ticket text-2xl" />
        </div>

        <h2 className="text-5xl md:text-7xl font-extrabold">¡Llegó el Pase Libre a Íntima!</h2>
        <p className="mt-3 text-white/95 text-xl">Dos horas para vos</p>
        <p className="mt-2 max-w-2xl mx-auto text-white/85 text-lg">Elegí tratamientos según tu objetivo y viví la experiencia.</p>

        {/* Lista de 8 ítems con icono, nombre y beneficio */}
        <div className="mt-10 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-5">
          {items.map((it) => (
            <div key={it.name} className="rounded-2xl border border-white/25 bg-white/10 p-5">
              <div className="w-14 h-14 mx-auto rounded-full bg-white/20 flex items-center justify-center text-2xl">
                <i className={it.icon} />
              </div>
              <div className="mt-3 font-semibold text-lg">{it.name}</div>
              <div className="text-white/85 text-sm">{it.benefit}</div>
            </div>
          ))}
        </div>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <Link href={whatsappHref} className="px-7 py-3.5 rounded-full bg-white text-gray-900 font-semibold shadow hover:bg-white/90 inline-flex items-center gap-2">
            <i className="fa-brands fa-whatsapp" />
            Reservar por WhatsApp
          </Link>
          <Link href="/promociones" className="px-7 py-3.5 rounded-full border border-white/80 text-white hover:bg-white/10 font-semibold inline-flex items-center gap-2">
            <i className="fa-solid fa-ticket" />
            Ver detalles
          </Link>
        </div>
      </div>
    </section>
  );
}