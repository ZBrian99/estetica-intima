"use client"
import Image from 'next/image'
import Link from 'next/link'
import { FaWhatsapp } from 'react-icons/fa'
import { FiStar } from 'react-icons/fi'

export default function GluteosCentered() {
  return (
    <section className="relative min-h-[calc(100svh-4rem)] flex items-center justify-center text-white">
      <div className="absolute inset-0 bg-gradient-to-br from-rose-600 via-fuchsia-600 to-pink-600" />
      <Image
        src="https://image.pollinations.ai/prompt/minimal%20fitness%20glutes%20studio%20pink%20fuchsia%20palette%20soft%20lighting?width=1400&height=900&model=flux-realism&nologo=true&seed=559"
        alt="Combo Full Glúteos"
        fill
        className="object-cover opacity-15"
      />

      <div className="relative z-10 container mx-auto px-6">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="font-outfit text-[42px] md:text-6xl font-bold leading-tight">Combo Full Glúteos</h2>
          <p className="mt-2 text-xl md:text-2xl font-medium text-white/90">3 tratamientos potentes · 1h 30m</p>
          <div className="mt-4 h-0.5 w-16 mx-auto rounded bg-white/60" />
          <p className="mt-4 text-base md:text-xl text-white/90">Levantamiento y tonificación con foco en resultados y confort.</p>

          {/* Tres beneficios más relevantes */}
          <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-4 w-full max-w-3xl">
            {[
              'Levantamiento y tono',
              'Mejora de firmeza',
              'Oxigenación y drenaje',
            ].map((item) => (
              <div key={item} className="bg-white/10 rounded-full px-5 py-3 text-base inline-flex items-center gap-2 justify-center">
                <FiStar className="w-4 h-4" aria-hidden /> {item}
              </div>
            ))}
          </div>

          {/* CTAs */}
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="#promo" className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-white text-pink-700 font-semibold hover:bg-white/90">Ver detalles</Link>
            <a href="https://wa.me/5490000000000" target="_blank" className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full border border-white text-white font-semibold hover:bg-white/10">
              <FaWhatsapp className="w-5 h-5" aria-hidden /> Reservar por WhatsApp
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}