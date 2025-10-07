"use client"
import Image from 'next/image'
import Link from 'next/link'
import { FaWhatsapp } from 'react-icons/fa'

export default function DepilacionLeftTextRightImage() {
  return (
    <section className="relative min-h-[calc(100svh-4rem)] flex items-center text-white">
      <div className="absolute inset-0 bg-gradient-to-tr from-emerald-900 via-teal-800 to-cyan-700" />
      <Image
        src="https://image.pollinations.ai/prompt/depilation%20laser%20studio%20device%20hand%20close%20emerald%20cyan%20blue%20palette%20minimal?width=1400&height=900&model=flux-realism&nologo=true&seed=517"
        alt="Depilación definitiva"
        fill
        className="object-cover opacity-20"
      />

      <div className="relative z-10 container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div>
            <h2 className="font-outfit text-[42px] md:text-6xl font-bold leading-tight">Depilación definitiva</h2>
            <p className="mt-2 text-xl md:text-2xl font-medium text-white/90">Tu piel, libre de vello con precisión y confort.</p>
            <div className="mt-4 h-0.5 w-16 rounded bg-white/60" />
            <p className="mt-4 text-base md:text-xl text-white/90">Diodo de última generación con parámetros personalizados.</p>

            <div className="mt-10 flex flex-wrap gap-4">
              <Link href="#zonas" className="px-7 py-3.5 rounded-full bg-white text-emerald-900 font-semibold hover:bg-white/90">Ver zonas</Link>
              <a href="https://wa.me/5490000000000" target="_blank" className="px-7 py-3.5 rounded-full border border-white text-white font-semibold inline-flex items-center gap-2 hover:bg-white/10">
                <FaWhatsapp className="w-5 h-5" aria-hidden /> WhatsApp
              </a>
            </div>
          </div>
          <div className="relative h-80 md:h-[420px]">
            <Image
              src="https://image.pollinations.ai/prompt/minimal%20portrait%20woman%20smooth%20skin%20emerald%20cyan%20blue%20background%20soft%20light?width=800&height=600&model=flux-realism&nologo=true&seed=911"
              alt="Imagen depilación"
              fill
              className="object-cover rounded-2xl opacity-90"
            />
          </div>
        </div>
      </div>
    </section>
  )
}