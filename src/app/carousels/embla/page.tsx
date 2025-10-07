"use client"
import { useEffect, useState } from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay'
import styles from '../../../styles/carousel-demo.module.css'
import FpsMeter from '@/components/common/FpsMeter'

const items = [1, 2, 3, 4]

export default function EmblaDemoPage() {
  const [emblaRef, emblaApi] = useEmblaCarousel(
    { loop: true },
    [Autoplay({ delay: 2500, stopOnInteraction: false })]
  )
  const [selectedIndex, setSelectedIndex] = useState(0)
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([])

  useEffect(() => {
    if (!emblaApi) return
    setScrollSnaps(emblaApi.scrollSnapList())
    const onSelect = () => setSelectedIndex(emblaApi.selectedScrollSnap())
    emblaApi.on('select', onSelect)
    emblaApi.on('reInit', onSelect)
    onSelect()
  }, [emblaApi])

  return (
    <main className='px-4 py-6'>
      <h1 className='text-xl font-semibold mb-3'>Embla Carousel</h1>
      <div className={styles.container}>
        <FpsMeter />
        <div className={styles.embla} ref={emblaRef}>
          <div className={styles.emblaContainer}>
            {items.map((n) => (
              <div key={n} className={styles.emblaSlide}>
                <div className={styles.slideCard}>
                  <img
                    className={styles.slideImage}
                    src='/images/placeholder-service.webp'
                    alt={`Slide ${n}`}
                  />
                  <div className={styles.animatedLayer} />
                  <div className={styles.slideOverlay}>Slide {n}</div>
                  <div className={styles.progressBar}>
                    <div className={styles.progressInner} />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Controles */}
        <div className='mt-3 flex items-center justify-between'>
          <button
            className='rounded bg-gray-800 px-3 py-2 text-white'
            onClick={() => emblaApi?.scrollPrev()}
          >
            ◀ Prev
          </button>
          <button
            className='rounded bg-gray-800 px-3 py-2 text-white'
            onClick={() => emblaApi?.scrollNext()}
          >
            Next ▶
          </button>
        </div>

        {/* Dots */}
        <div className={styles.dots}>
          {scrollSnaps.map((_, i) => (
            <button
              key={i}
              className={`${styles.dot} ${i === selectedIndex ? styles.dotActive : ''}`}
              onClick={() => emblaApi?.scrollTo(i)}
              aria-label={`Ir al slide ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </main>
  )
}