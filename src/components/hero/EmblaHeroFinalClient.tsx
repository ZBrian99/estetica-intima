"use client"
import { useCallback, useEffect, useRef, useState } from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay'
import FpsMeter from '@/components/common/FpsMeter'

type Promo = {
  title: string
  subtitle: string
  phrase: string
  ctaPrimary: string
  ctaSecondary: string
  img: string
}

const autoplay = Autoplay({ delay: 3000, stopOnMouseEnter: true, stopOnInteraction: false })

export default function EmblaHeroFinalClient({ promos }: { promos: Promo[] }) {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: 'start' }, [autoplay])
  const [selectedIndex, setSelectedIndex] = useState(0)
  const rafId = useRef<number | null>(null)

  const onSelect = useCallback(() => {
    if (!emblaApi) return
    if (rafId.current) cancelAnimationFrame(rafId.current)
    rafId.current = requestAnimationFrame(() => {
      setSelectedIndex(emblaApi.selectedScrollSnap())
    })
  }, [emblaApi])

  useEffect(() => {
    if (!emblaApi) return
    emblaApi.on('select', onSelect)
    emblaApi.on('reInit', onSelect)
    onSelect()
    return () => {
      if (rafId.current) cancelAnimationFrame(rafId.current)
    }
  }, [emblaApi, onSelect])

  const prev = () => emblaApi?.scrollPrev()
  const next = () => emblaApi?.scrollNext()
  const scrollTo = (i: number) => emblaApi?.scrollTo(i)

  return (
    <section className="relative w-screen h-[calc(100svh-4rem)] min-h-[calc(100vh-4rem)] overflow-hidden bg-slate-900">
      <FpsMeter />

      <div className="overflow-hidden h-full" ref={emblaRef}>
        <div className="flex h-full">
          {promos.map((p, i) => (
            <div key={i} className="relative flex-[0_0_100%] w-screen h-full will-change-transform">
              <img
                className="absolute inset-0 w-full h-full object-cover  z-0"
                src={p.img}
                alt={p.title}
                decoding="async"
                loading={i === 0 ? 'eager' : 'lazy'}
                fetchPriority={i === 0 ? 'high' : 'auto'}
              />
              <div className="absolute inset-0 bg-gradient-to-br from-primary-800/50 via-primary-800/70 to-primary-800/90" />

              <div className="relative z-10 grid place-items-center h-full text-white">
                <div className="mx-6 sm:mx-10 max-w-[820px] text-center">
                  <h2 className="text-3xl md:text-5xl font-bold tracking-tight">{p.title}</h2>
                  <p className="mt-2 text-base md:text-lg opacity-90">{p.subtitle}</p>
                  <p className="mt-1 text-sm md:text-base opacity-80">{p.phrase}</p>

                  <div className="mt-4 flex items-center justify-center gap-3">
                    <button
                      className="inline-flex items-center rounded-full bg-cyan-300 text-slate-900 font-semibold px-4 py-2 transition-transform hover:scale-[1.03] focus:outline-none focus:ring-2 focus:ring-cyan-300"
                      onClick={() => alert(`${p.ctaPrimary}: ${p.title}`)}
                    >
                      {p.ctaPrimary}
                    </button>
                    <button
                      className="inline-flex items-center rounded-full border border-white/60 text-white font-semibold px-4 py-2 transition-colors hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-white/50"
                      onClick={() => alert(`${p.ctaSecondary}: ${p.title}`)}
                    >
                      {p.ctaSecondary}
                    </button>
                  </div>
                </div>
              </div>

            </div>
          ))}
        </div>
      </div>

      {/* Dots fijos sobre la imagen (no se mueven con el carrusel) */}
      <div className="pointer-events-auto absolute left-1/2 -translate-x-1/2 bottom-3 z-20 flex gap-2">
        {promos.map((_, di) => (
          <button
            key={di}
            aria-label={`Ir al slide ${di + 1}`}
            className={`h-2.5 w-2.5 rounded-full ${selectedIndex === di ? 'bg-cyan-300' : 'bg-white/60'}`}
            onClick={() => scrollTo(di)}
          />
        ))}
      </div>

      {/* Arrows */}
      <div className="absolute inset-0 flex items-center justify-between pointer-events-none">
        <button
          aria-label="Anterior"
          className="pointer-events-auto grid place-items-center w-11 h-11 rounded-full bg-white/70 text-slate-900 ml-3"
          onClick={prev}
        >
          {'<'}
        </button>
        <button
          aria-label="Siguiente"
          className="pointer-events-auto grid place-items-center w-11 h-11 rounded-full bg-white/70 text-slate-900 mr-3"
          onClick={next}
        >
          {'>'}
        </button>
      </div>
    </section>
  )
}