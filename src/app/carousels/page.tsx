import Link from 'next/link'

export const dynamic = 'force-static'

export default function CarouselsIndexPage() {
  const demos = [
    { href: '/carousels/embla', name: 'Embla Carousel' },
    { href: '/carousels/keen-slider', name: 'Keen Slider' },
    { href: '/carousels/swiper', name: 'Swiper' },
    { href: '/carousels/splide', name: 'Splide' },
    { href: '/carousels/react-slick', name: 'React Slick' },
    { href: '/carousels/flickity', name: 'Flickity' },
  ]

  return (
    <main className='mx-auto max-w-3xl px-4 py-8'>
      <h1 className='text-2xl font-semibold'>Demos de Carruseles</h1>
      <p className='mt-2 text-sm text-muted-foreground'>
        Objetivo: 4 ítems, flechas laterales, puntitos centrados, soporte touch y autoplay.
      </p>

      <section className='mt-6'>
        <h2 className='text-lg font-medium'>Ranking sugerido (mejor → peor)</h2>
        <ol className='list-decimal ml-5 mt-2 space-y-1'>
          <li>Embla Carousel — liviano, control total, gran rendimiento en Next/SSR.</li>
          <li>Keen Slider — muy performante, API robusta, buen soporte táctil.</li>
          <li>Swiper — súper completo, algo pesado; cuidado con SSR/hidratación.</li>
          <li>Splide — estable y simple, buen equilibrio de funciones.</li>
          <li>React Slick — legado, funciona pero menos óptimo en SSR y rendimiento.</li>
          <li>Flickity — antiguo; React no nativo. Suele ser lo menos recomendable.</li>
        </ol>
        <p className='mt-3 text-sm text-muted-foreground'>
          Extra opcional: Nuka Carousel o una implementación headless con Embla + componentes propios.
        </p>
      </section>

      <section className='mt-8'>
        <h2 className='text-lg font-medium'>Ver demos</h2>
        <ul className='mt-2 grid grid-cols-1 gap-2 sm:grid-cols-2'>
          {demos.map((d) => (
            <li key={d.href}>
              <Link className='underline hover:no-underline' href={d.href}>
                {d.name}
              </Link>
            </li>
          ))}
        </ul>
      </section>
    </main>
  )
}