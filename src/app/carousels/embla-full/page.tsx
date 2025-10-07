"use client"
import { useCallback, useEffect, useRef, useState } from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay'
import styles from '../../../styles/embla-full.module.css'
import FpsMeter from '@/components/common/FpsMeter'

type Promo = {
  title: string
  desc: string
  cta: string
  img: string
}

const promos: Promo[] = [
  {
    title: 'Depilación Láser 50% OFF',
    desc: 'Primera sesión con tecnología de última generación. Resultados seguros y efectivos.',
    cta: 'Ver Promo',
    img:
      'https://image.pollinations.ai/prompt/woman%20laser%20hair%20removal%20treatment,%20professional%20medical%20spa,%20realistic%20photography,%20high%20quality,%20soft%20lighting,%20clean%20composition?model=flux-realism&enhance=true&nologo=true&width=1920&height=1080',
  },
  {
    title: 'Limpieza Facial Premium -20%',
    desc: 'Rutina completa: exfoliación, extracción suave y hidratación profunda.',
    cta: 'Reservar',
    img:
      'https://image.pollinations.ai/prompt/woman%20receiving%20premium%20facial%20cleaning%20treatment,%20modern%20clinic,%20photorealistic,%20soft%20lighting,%20high%20quality?model=flux-realism&enhance=true&nologo=true&width=1920&height=1080',
  },
  {
    title: 'Reafirmante Corporal -30%',
    desc: 'Tratamiento no invasivo para mejorar firmeza y textura de la piel.',
    cta: 'Conocer más',
    img:
      'https://image.pollinations.ai/prompt/body%20firming%20treatment%20in%20spa,%20professional,%20clean%20environment,%20realistic%20photography,%20soft%20lighting?model=flux-realism&enhance=true&nologo=true&width=1920&height=1080',
  },
  {
    title: 'Combo Belleza Integral -15%',
    desc: 'Incluye limpieza facial, masaje relajante y cuidado de manos.',
    cta: 'Aprovechar',
    img:
      'https://image.pollinations.ai/prompt/spa%20beauty%20combo,%20facial%20cleaning,%20relaxing%20massage,%20hands%20care,%20modern%20clinic,%20photorealistic?model=flux-realism&enhance=true&nologo=true&width=1920&height=1080',
  },
]

// Autoplay optimizado: usa timeout y se pausa en interacción/hover
const autoplay = Autoplay({ delay: 2500, stopOnMouseEnter: true, stopOnInteraction: false })

export default function EmblaFullDemoPage() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: 'start' }, [autoplay])

  // Minimizar re-renders: el índice activo se actualiza con rAF throttle
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

  // Helpers
  const scrollTo = (index: number) => emblaApi?.scrollTo(index)
  const prev = () => emblaApi?.scrollPrev()
  const next = () => emblaApi?.scrollNext()

  return (
    <main className={styles.container}>
      <FpsMeter />
      <div className={styles.embla} ref={emblaRef}>
        <div className={styles.emblaContainer}>
          {promos.map((p, i) => (
            <div className={styles.emblaSlide} key={i}>
              <img
                className={styles.bg}
                src={p.img}
                alt={p.title}
                decoding='async'
                loading={i === 0 ? 'eager' : 'lazy'}
                fetchPriority={i === 0 ? 'high' : 'auto'}
              />
              <div className={styles.shade} />
              <div className={styles.content}>
                <div>
                  <div className={styles.title}>{p.title}</div>
                  <div className={styles.desc}>{p.desc}</div>
                  <button className={styles.cta} onClick={() => alert(`${p.cta}: ${p.title}`)}>
                    {p.cta} →
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Controles */}
      <div className={styles.controls}>
        <button aria-label='Anterior' className={styles.arrow} onClick={prev}>
          ◀
        </button>
        <button aria-label='Siguiente' className={styles.arrow} onClick={next}>
          ▶
        </button>
      </div>

      {/* Dots */}
      <div className={styles.dots}>
        {promos.map((_, i) => (
          <button
            key={i}
            aria-label={`Ir al slide ${i + 1}`}
            className={`${styles.dot} ${i === selectedIndex ? styles.dotActive : ''}`}
            onClick={() => scrollTo(i)}
          />
        ))}
      </div>
    </main>
  )
}