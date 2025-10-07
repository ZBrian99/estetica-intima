"use client"
import Image from 'next/image'
import Link from 'next/link'
import { FaWhatsapp } from 'react-icons/fa'
import { FiStar } from 'react-icons/fi'

export default function GluteosLeftRightBenefits() {
  return (
    <section className="relative min-h-[calc(100svh-4rem)] flex items-center text-white">
      <div className="absolute inset-0 bg-gradient-to-r from-rose-700 via-fuchsia-700 to-pink-700" />
      <Image
        src="https://image.pollinations.ai/prompt/glutes%20fitness%20studio%20equipment%20pink%20fuchsia%20palette%20minimal%20soft%20light?width=1400&height=900&model=flux-realism&nologo=true&seed=623"
        alt="Combo Glúteos"
        fill
        className="object-cover opacity-15"
      />

      <div className="relative z-10 container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
          <div>
            <h2 className="font-outfit text-[42px] md:text-6xl font-bold leading-tight">Combo Full Glúteos</h2>
            <p className="mt-2 text-xl md:text-2xl font-medium text-white/90">Potencia, levantamiento y firmeza.</p>
            <div className="mt-4 h-0.5 w-16 rounded bg-white/60" />
            <p className="mt-4 text-base md:text-xl text-white/90">Tres técnicas combinadas, enfocadas en resultados visibles desde la primera sesión.</p>

            <div className="mt-10 flex flex-wrap gap-4">
              <Link href="#promo" className="px-7 py-3.5 rounded-full bg-white text-pink-700 font-semibold hover:bg-white/90">Ver detalles</Link>
              <a href="https://wa.me/5490000000000" target="_blank" className="px-7 py-3.5 rounded-full border border-white text-white font-semibold inline-flex items-center gap-2 hover:bg-white/10">
                <FaWhatsapp className="w-5 h-5" aria-hidden /> WhatsApp
              </a>
            </div>
          </div>

          {/* Beneficios a la derecha */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              'Levantamiento y tono',
              'Mejora de firmeza',
              'Oxigenación y drenaje',
              'Perfilado y contorno',
            ].map((item) => (
              <div key={item} className="bg-white/10 rounded-full px-5 py-3 text-base inline-flex items-center gap-2">
                <FiStar className="w-4 h-4" aria-hidden /> {item}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}