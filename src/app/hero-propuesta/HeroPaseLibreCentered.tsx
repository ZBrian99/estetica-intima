"use client"
import Image from 'next/image'
import Link from 'next/link'
import { FaWhatsapp } from 'react-icons/fa'
import { FiCheck } from 'react-icons/fi'

export default function PaseLibreCentered() {
  const items = [
    'Mio Up',
    'Alpha Synergy',
    'PushUp',
    'Presoterapia',
    'Mantas térmicas',
    'LipoLED',
    'Limpieza facial',
  ]

  return (
    <section className="relative min-h-[calc(100svh-4rem)] flex items-center justify-center text-white">
      <div className="absolute inset-0 bg-gradient-to-br from-amber-600 via-yellow-600 to-orange-600" />
      <Image
        src="https://image.pollinations.ai/prompt/aesthetic%20spa%20pase%20libre%20menu%20soft%20studio%20light%20golden%20amber%20orange%20palette%20clean%20design?width=1400&height=900&model=flux-realism&nologo=true&seed=731"
        alt="Pase Libre"
        fill
        className="object-cover opacity-15"
      />

      <div className="relative z-10 container mx-auto px-6">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="font-outfit text-[42px] md:text-6xl font-bold leading-tight">¡Llegó el Pase Libre a Íntima!</h2>
          <p className="mt-2 text-xl md:text-2xl font-medium text-white/90">Dos horas de tratamiento solo para vos</p>
          <div className="mt-4 h-0.5 w-16 mx-auto rounded bg-white/60" />
          <p className="mt-4 text-base md:text-xl text-white/90">A tu ritmo, a tu elección. Elegí lo que tu cuerpo necesita ese día.</p>

          <div className="mt-8 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 text-sm">
            {items.map((item) => (
              <div key={item} className="inline-flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full">
                <FiCheck className="w-4 h-4" aria-hidden /> {item}
              </div>
            ))}
          </div>

          {/* Precio y CTAs */}
          <div className="mt-8 text-white/90">Todo por solo <span className="font-semibold text-white">$25.000</span></div>

          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="#detalles" className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-white text-amber-700 font-semibold hover:bg-white/90">Ver detalles</Link>
            <a href="https://wa.me/5490000000000" target="_blank" className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full border border-white text-white font-semibold hover:bg-white/10">
              <FaWhatsapp className="w-5 h-5" aria-hidden /> Reservar por WhatsApp
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}