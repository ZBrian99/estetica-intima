"use client"
import Image from 'next/image'
import Link from 'next/link'
import { FaWhatsapp, FaVenus, FaMars } from 'react-icons/fa'
import { FiCheck } from 'react-icons/fi'

export default function DepilacionCentered() {
  return (
    <section className="relative min-h-[calc(100svh-4rem)] flex items-center justify-center text-white">
      {/* Fondo: emerald/teal/cyan + imagen fundida */}
      <div className="absolute inset-0 bg-gradient-to-br from-emerald-900 via-teal-800 to-cyan-700" />
      <Image
        src="https://image.pollinations.ai/prompt/modern%20aesthetic%20depilation%20studio%20soft%20light%20emerald%20teal%20cyan%20palette%20clean%20minimal?width=1400&height=900&model=flux-realism&nologo=true&seed=223"
        alt="Depilación definitiva"
        fill
        className="object-cover opacity-20"
        priority
      />

      {/* Contenido centrado */}
      <div className="relative z-10 container mx-auto px-6">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="font-outfit text-[42px] md:text-6xl font-bold leading-tight">Depilación definitiva</h2>
          <p className="mt-2 text-xl md:text-2xl font-medium text-white/90">Seguro, preciso y apto para todos los fototipos.</p>
          <div className="mt-4 h-0.5 w-16 mx-auto rounded bg-white/60" />
          <p className="mt-4 text-base md:text-xl text-white/90">Decile adiós al vello y dale la bienvenida a una piel suave todo el año. Práctica, segura y con resultados visibles desde las primeras sesiones.</p>

          {/* Selector de género */}
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <button className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white/10 text-white hover:bg-white/15 transition">
              <FaVenus className="w-4 h-4" aria-hidden /> Mujer
            </button>
            <button className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white/10 text-white hover:bg-white/15 transition">
              <FaMars className="w-4 h-4" aria-hidden /> Hombre
            </button>
          </div>

          {/* Beneficios */}
          <div className="mt-6 flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm text-white/90">
            <div className="inline-flex items-center gap-2"><FiCheck className="w-4 h-4" aria-hidden /> Sesiones rápidas</div>
            <div className="inline-flex items-center gap-2"><FiCheck className="w-4 h-4" aria-hidden /> Confort térmico</div>
            <div className="inline-flex items-center gap-2"><FiCheck className="w-4 h-4" aria-hidden /> Apto todo fototipo</div>
          </div>

          {/* CTAs */}
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="#zonas" className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-white text-emerald-900 font-semibold hover:bg-white/90">Ver zonas</Link>
            <a href="https://wa.me/5490000000000" target="_blank" className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full border border-white text-white font-semibold hover:bg-white/10">
              <FaWhatsapp className="w-5 h-5" aria-hidden /> Reservar por WhatsApp
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}