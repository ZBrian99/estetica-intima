'use client'

import { motion } from 'framer-motion'

const steps = [
  {
    number: '01',
    title: 'Elegí tus servicios',
    description: 'Navegá por nuestro catálogo y agregá los tratamientos que querés regalar al carrito',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
      </svg>
    )
  },
  {
    number: '02',
    title: 'Seleccioná "Regalo"',
    description: 'En el carrito, activá la opción "Es un regalo" y completá los datos del destinatario',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7" />
      </svg>
    )
  },
  {
    number: '03',
    title: 'Personalizá tu mensaje',
    description: 'Escribí un mensaje especial que acompañará la gift card y elegí el diseño',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
      </svg>
    )
  },
  {
    number: '04',
    title: 'Completá el pago',
    description: 'Finalizá la compra de forma segura con tu método de pago preferido',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
      </svg>
    )
  },
  {
    number: '05',
    title: 'Compartí o enviá',
    description: 'Recibí la gift card por email al instante o compartila directamente desde la web',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.367 2.684 3 3 0 00-5.367-2.684z" />
      </svg>
    )
  }
]

const redemptionSteps = [
  {
    title: 'Recibir la gift card',
    description: 'El destinatario recibe la gift card con el código único y mensaje personalizado'
  },
  {
    title: 'Agendar cita',
    description: 'Contacta con nosotros para coordinar fecha y horario del tratamiento'
  },
  {
    title: 'Presentar código',
    description: 'Al momento de la cita, presenta el código de la gift card para canjearla'
  },
  {
    title: 'Disfrutar la experiencia',
    description: 'Relajate y disfrutá de tu tratamiento de belleza y bienestar'
  }
]

export function GiftCardProcess() {
  return (
    <div>
      {/* Purchase Process */}
      <div className="mb-20">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            ¿Cómo comprar una Gift Card?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            En solo 5 pasos simples tenés tu regalo listo para entregar
          </p>
        </div>

        <div className="relative">
          {/* Connection lines for desktop */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-pink-200 bg-gradient-to-r from-pink-200 via-purple-200 to-pink-200 transform -translate-y-1/2" />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-4">
            {steps.map((step, index) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="relative"
              >
                {/* Step number */}
                <div className="flex justify-center mb-6">
                  <div className="relative">
                    <div className="w-16 h-16 bg-pink-500 bg-gradient-to-br from-pink-500 to-purple-600 rounded-full flex items-center justify-center text-white font-bold text-lg shadow-lg">
                      {step.number}
                    </div>
                    <div className="absolute inset-0 bg-pink-500 bg-gradient-to-br from-pink-500 to-purple-600 rounded-full blur-lg opacity-30 scale-110" />
                  </div>
                </div>

                {/* Content */}
                <div className="text-center bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-pink-100 hover:border-pink-200 group">
                  <div className="flex justify-center mb-4">
                    <div className="w-12 h-12 bg-pink-50 rounded-xl flex items-center justify-center text-pink-600 group-hover:bg-pink-100 transition-colors duration-300">
                      {step.icon}
                    </div>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">
                    {step.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Redemption Process */}
      <div>
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            ¿Cómo usar la Gift Card?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Para el destinatario es súper fácil canjear su regalo
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {redemptionSteps.map((step, index) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="bg-pink-50 bg-gradient-to-br from-pink-50 to-purple-50 rounded-2xl p-6 h-full border border-pink-100 hover:border-pink-200 transition-all duration-300 group">
                <div className="flex items-center mb-4">
                  <div className="w-8 h-8 bg-pink-500 bg-gradient-to-br from-pink-500 to-purple-600 rounded-full flex items-center justify-center text-white font-bold text-sm mr-3">
                    {index + 1}
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900">
                    {step.title}
                  </h3>
                </div>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {step.description}
                </p>
              </div>
              
              {/* Arrow for desktop */}
              {index < redemptionSteps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-3 transform -translate-y-1/2 text-pink-300">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}