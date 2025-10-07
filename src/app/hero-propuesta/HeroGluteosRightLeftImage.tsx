"use client"
import Image from 'next/image'
import Link from 'next/link'
import { FaWhatsapp } from 'react-icons/fa'

export default function GluteosRightLeftImage() {
  return (
    <section className="relative min-h-[calc(100svh-4rem)] flex items-center text-white">
      <div className="absolute inset-0 bg-gradient-to-bl from-fuchsia-700 via-pink-700 to-rose-700" />
      <Image
        src="https://image.pollinations.ai/prompt/minimal%20portrait%20athletic%20woman%20glutes%20fitness%20pink%20fuchsia%20palette%20soft%20studio%20light?width=1400&height=900&model=flux-realism&nologo=true&seed=807"
        alt="Combo Glúteos"
        fill
        className="object-cover opacity-15"
      />

      <div className="relative z-10 container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          {/* Imagen a la izquierda */}
          <div className="order-2 md:order-1 h-80 md:h-[420px]">
            <Image
              src="https://image.pollinations.ai/prompt/glutes%20fitness%20close%20minimal%20pink%20fuchsia%20palette?width=800&height=600&model=flux-realism&nologo=true&seed=919"
              alt="Imagen glúteos"
              fill
              className="object-cover rounded-2xl opacity-10"
            />
          </div>
          {/* Texto a la derecha */}
          <div className="order-1 md:order-2 text-right">
            <h2 className="font-outfit text-[42px] md:text-6xl font-bold leading-tight">Combo Full Glúteos</h2>
            <p className="mt-2 text-xl md:text-2xl font-medium text-white/90">Resultados visibles y confort en cada sesión.</p>
            <div className="mt-4 ml-auto h-0.5 w-16 rounded bg-white/60" />
            <p className="mt-4 text-base md:text-xl text-white/90">Protocolo pensado para tonificar y perfilar con seguridad.</p>
            <div className="mt-10 flex flex-wrap justify-end gap-4">
              <Link href="#promo" className="px-7 py-3.5 rounded-full bg-white text-pink-700 font-semibold hover:bg-white/90">Ver detalles</Link>
              <a href="https://wa.me/5490000000000" target="_blank" className="px-7 py-3.5 rounded-full border border-white text-white font-semibold inline-flex items-center gap-2 hover:bg-white/10">
                <FaWhatsapp className="w-5 h-5" aria-hidden /> WhatsApp
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}