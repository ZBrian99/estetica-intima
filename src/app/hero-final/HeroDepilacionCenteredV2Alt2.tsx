"use client"
import Image from 'next/image'
import Link from 'next/link'
import { FaWhatsapp, FaVenus, FaMars } from 'react-icons/fa'
import { FiCheck } from 'react-icons/fi'

export default function HeroDepilacionCenteredV2Alt2() {
  return (
    <section className="relative min-h-[calc(100svh-4rem)] inset-0 flex flex-col justify-center items-center text-center px-6 text-white">
      <div className="absolute inset-0 bg-gradient-to-r from-emerald-600 via-teal-600 to-cyan-700 -z-10" />
      <Image
        src="https://image.pollinations.ai/prompt/full%20body%20woman%20front%20and%20man%20back%20photographic%20fashion%20pose%20hairless%20smooth%20skin%20studio%20emerald%20teal%20cyan%20tones%20aesthetic?width=1400&height=900&model=flux-realism&nologo=true&seed=8812"
        alt="Mujer de frente y hombre de espalda"
        fill
        className="object-cover opacity-18 -z-10"
        priority
      />

      <h2 className="text-[34px] md:text-6xl font-bold leading-tight font-outfit">Depilación Definitiva</h2>
      {/* <p className="mt-1 text-xl md:text-2xl font-medium text-white/90">Tecnología láser de última generación para resultados permanentes</p> */}
      <p className="mt-4 md:mt-6 max-w-3xl text-base md:text-xl text-white/90">
        Menos vello, más tiempo para vos. Empezá hoy y disfrutá una piel suave y cuidada todo el año.
      </p>

      <div className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-3">
        {[
          'Seguro y personalizado',
          'Zonas para todo el cuerpo',
          'Profesionales certificados',
        ].map((b) => (
          <div key={b} className="inline-flex items-center justify-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20 text-white/90 text-sm">
            <FiCheck className="w-4 h-4" aria-hidden />
            {b}
          </div>
        ))}
      </div>

      <div className="mt-10 flex flex-col xs:flex-row items-center justify-center gap-4">
        <Link href="/servicios?tipo=depilacion&genero=mujer" className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-white text-rose-700 font-semibold hover:bg-white/90">
          <FaVenus className="w-5 h-5" aria-hidden /> Depilación Mujer
        </Link>
        <Link href="/servicios?tipo=depilacion&genero=hombre" className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-white text-blue-700 font-semibold hover:bg-white/90">
          <FaMars className="w-5 h-5" aria-hidden /> Depilación Hombre
        </Link>
        <Link href="/#contacto" className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full border border-white text-white font-semibold hover:bg-white/10">
          <FaWhatsapp className="w-5 h-5" aria-hidden /> Consultanos
        </Link>
      </div>
    </section>
  )
}