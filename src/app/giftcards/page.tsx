import { Metadata } from 'next'
import { GiftCardPreview } from '@/components/giftcards/GiftCardPreview'
import { GiftCardInfo } from '@/components/giftcards/GiftCardInfo'
import { GiftCardProcess } from '@/components/giftcards/GiftCardProcess'

export const metadata: Metadata = {
  title: 'Gift Cards - Íntima Estética',
  description: 'Regala experiencias únicas de belleza y bienestar. Nuestras gift cards son el regalo perfecto para esa persona especial.',
  keywords: ['gift card', 'regalo', 'belleza', 'estética', 'spa', 'tratamientos'],
}

export default function GiftCardsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-white to-purple-50">
      {/* Hero Section */}
      <section className="relative overflow-hidden pt-20 pb-16 px-4">
        <div className="absolute inset-0 bg-gradient-to-r from-pink-100/20 to-purple-100/20" />
        <div className="relative max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent mb-6">
              Gift Cards
            </h1>
            <p className="text-xl md:text-2xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
              El regalo perfecto para esa persona especial. 
              
            </p>
          </div>

          {/* Gift Card Preview */}
          <div className="flex justify-center mb-16">
            <GiftCardPreview />
          </div>
        </div>
      </section>

      {/* Information Section */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <GiftCardInfo />
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 px-4 bg-white/50">
        <div className="max-w-6xl mx-auto">
          <GiftCardProcess />
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-pink-600 to-purple-600">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            ¿Lista para regalar belleza?
          </h2>
          <p className="text-xl text-pink-100 mb-8 max-w-2xl mx-auto">
            Agregá cualquier servicio al carrito y elegí la opción "Regalo" para crear tu gift card personalizada
          </p>
          <a
            href="/servicios"
            className="inline-flex items-center px-8 py-4 bg-white text-pink-600 font-semibold rounded-full hover:bg-pink-50 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
          >
            Explorar Servicios
            <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>
      </section>
    </div>
  )
}