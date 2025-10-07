"use client"
import Image from 'next/image'
import Link from 'next/link'
import { FaWhatsapp } from 'react-icons/fa'
import { FiCheck } from 'react-icons/fi'

export default function DepilacionLeftAligned() {
  return (
    <section className="relative min-h-[calc(100svh-4rem)] flex items-center text-white">
      <div className="absolute inset-0 bg-gradient-to-r from-emerald-900 via-teal-800 to-cyan-700" />
      <Image
        src="https://image.pollinations.ai/prompt/clean%20depilation%20device%20setup%20soft%20studio%20light%20emerald%20teal%20cyan%20tones?width=1400&height=900&model=flux-realism&nologo=true&seed=411"
        alt="Depilación definitiva"
        fill
        className="object-cover opacity-15"
      />

      <div className="relative z-10 container mx-auto px-6">
        <div className="max-w-2xl">
          <h2 className="font-outfit text-[42px] md:text-6xl font-bold leading-tight">Depilación definitiva</h2>
          <p className="mt-2 text-xl md:text-2xl font-medium text-white/90">Seguro, preciso y apto para todos los fototipos.</p>
          <div className="mt-4 h-0.5 w-16 rounded bg-white/60" />
          <p className="mt-4 text-base md:text-xl text-white/90">Tecnología de diodo y protocolos pensados para tu confort, con parámetros personalizados.</p>

          <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm">
            <div className="inline-flex items-center gap-2"><FiCheck className="w-4 h-4" aria-hidden /> Sesiones rápidas</div>
            <div className="inline-flex items-center gap-2"><FiCheck className="w-4 h-4" aria-hidden /> Resultados visibles</div>
            <div className="inline-flex items-center gap-2"><FiCheck className="w-4 h-4" aria-hidden /> Confort térmico</div>
            <div className="inline-flex items-center gap-2"><FiCheck className="w-4 h-4" aria-hidden /> Apto todo fototipo</div>
          </div>

          <div className="mt-10 flex flex-wrap gap-4">
            <Link href="#zonas" className="px-7 py-3.5 rounded-full bg-white text-emerald-900 font-semibold hover:bg-white/90">Ver zonas</Link>
            <Link href="#mas-info" className="px-7 py-3.5 rounded-full bg-white/10 text-white font-semibold hover:bg-white/15">Más info</Link>
            <a href="https://wa.me/5490000000000" target="_blank" className="px-7 py-3.5 rounded-full border border-white text-white font-semibold inline-flex items-center gap-2 hover:bg-white/10">
              <FaWhatsapp className="w-5 h-5" aria-hidden /> WhatsApp
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}