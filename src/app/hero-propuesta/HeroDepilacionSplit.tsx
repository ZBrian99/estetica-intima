"use client"
import Image from 'next/image'
import Link from 'next/link'
import { FaWhatsapp, FaVenus, FaMars } from 'react-icons/fa'
import { FiCheck } from 'react-icons/fi'

export default function DepilacionSplit() {
  return (
    <section className="relative min-h-[calc(100svh-4rem)] flex items-center text-white">
      {/* Gradiente base + velo de color global para cohesión */}
      <div className="absolute inset-0 bg-gradient-to-br from-emerald-900 via-teal-800 to-cyan-700" />

      <div className="relative z-10 container mx-auto px-6 py-16 w-full">
        {/* Cabecera general */}
        <div className="text-center mb-10">
          <h2 className="font-outfit text-[42px] md:text-6xl font-bold leading-tight">Depilación Láser Definitiva</h2>
          <p className="mt-2 text-xl md:text-2xl font-medium text-white/90">Tecnología de última generación para resultados permanentes</p>
        </div>

        {/* Split Mujer / Hombre */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Panel Mujer */}
          <div className="group relative rounded-3xl overflow-hidden">
            {/* Imagen enfocada en cuerpo */}
            <div className="relative h-56 sm:h-72 md:h-96">
              <Image
                src="https://image.pollinations.ai/prompt/aesthetic%20female%20body%20depilation%20studio%20emerald%20teal%20cyan%20tones%20soft%20light%20no%20face%20focus%20on%20legs%20arms?width=1200&height=900&model=flux-realism&nologo=true&seed=1201"
                alt="Depilación mujer"
                fill
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-emerald-900/60 via-emerald-800/30 to-transparent" />
            </div>
            {/* Tarjeta de contenido */}
            <div className="relative -mt-10 mx-4 sm:mx-6 rounded-2xl bg-white/10 backdrop-opacity-0 p-6 sm:p-8">
              <div className="inline-flex items-center gap-2 text-sm text-white/90">
                <FaVenus className="w-4 h-4" aria-hidden /> Mujer
              </div>
              <h3 className="mt-2 font-outfit text-[28px] md:text-[32px] font-semibold">Menos vello, más tiempo para vos</h3>
              <p className="mt-2 text-white/90">Sin cera, sin maquinita, sin rutinas tediosas. Empezá hoy y llegá al verano divina.</p>
              <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm text-white/90">
                <div className="inline-flex items-center gap-2"><FiCheck className="w-4 h-4" /> Piernas suaves todo el año</div>
                <div className="inline-flex items-center gap-2"><FiCheck className="w-4 h-4" /> Resultados desde las primeras sesiones</div>
                <div className="inline-flex items-center gap-2"><FiCheck className="w-4 h-4" /> Tratamiento seguro y personalizado</div>
                <div className="inline-flex items-center gap-2"><FiCheck className="w-4 h-4" /> Sesiones rápidas y confortables</div>
              </div>
            </div>
          </div>

          {/* Panel Hombre */}
          <div className="group relative rounded-3xl overflow-hidden">
            {/* Imagen enfocada en cuerpo */}
            <div className="relative h-56 sm:h-72 md:h-96">
              <Image
                src="https://image.pollinations.ai/prompt/aesthetic%20male%20body%20depilation%20studio%20teal%20cyan%20tones%20soft%20light%20no%20face%20focus%20on%20back%20chest%20arms?width=1200&height=900&model=flux-realism&nologo=true&seed=1207"
                alt="Depilación hombre"
                fill
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-cyan-900/60 via-teal-800/30 to-transparent" />
            </div>
            {/* Tarjeta de contenido */}
            <div className="relative -mt-10 mx-4 sm:mx-6 rounded-2xl bg-white/10 backdrop-opacity-0 p-6 sm:p-8">
              <div className="inline-flex items-center gap-2 text-sm text-white/90">
                <FaMars className="w-4 h-4" aria-hidden /> Hombre
              </div>
              <h3 className="mt-2 font-outfit text-[28px] md:text-[32px] font-semibold">Bienestar, comodidad y cuidado personal</h3>
              <p className="mt-2 text-white/90">Menos irritación y mejor higiene diaria. Priorizarte también es cuidarte.</p>
              <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm text-white/90">
                <div className="inline-flex items-center gap-2"><FiCheck className="w-4 h-4" /> Reduce sudoración y malos olores</div>
                <div className="inline-flex items-center gap-2"><FiCheck className="w-4 h-4" /> Evita irritaciones y foliculitis</div>
                <div className="inline-flex items-center gap-2"><FiCheck className="w-4 h-4" /> Mejora la higiene diaria</div>
                <div className="inline-flex items-center gap-2"><FiCheck className="w-4 h-4" /> Realza la definición muscular</div>
              </div>
            </div>
          </div>
        </div>

        {/* CTA única aplicable a ambos */}
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link href="#consulta" className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-white text-emerald-900 font-semibold hover:bg-white/90">Consulta gratuita</Link>
          <a href="https://wa.me/5490000000000" target="_blank" className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full border border-white text-white font-semibold hover:bg-white/10">
            <FaWhatsapp className="w-5 h-5" aria-hidden /> Contáctanos
          </a>
        </div>
      </div>
    </section>
  )
}