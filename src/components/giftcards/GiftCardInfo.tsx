'use client'

import { motion } from 'framer-motion'

const features = [
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7" />
      </svg>
    ),
    title: 'Personalizable',
    description: 'Agregá un mensaje personal y elegí el diseño que más te guste'
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
      </svg>
    ),
    title: 'Segura',
    description: 'Código único de seguridad para garantizar que solo la persona indicada pueda usarla'
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3a2 2 0 012-2h4a2 2 0 012 2v4m-6 0V6a2 2 0 012-2h4a2 2 0 012 2v1m-6 0h6m-6 0l-2 9a2 2 0 002 2h8a2 2 0 002-2l-2-9m-8 0V9a2 2 0 012-2h4a2 2 0 012 2v0" />
      </svg>
    ),
    title: 'Flexible',
    description: 'Válida para cualquier servicio de nuestro catálogo, sin restricciones'
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
      </svg>
    ),
    title: 'Sin Vencimiento',
    description: 'Nuestras gift cards tienen validez extendida de 12 meses desde la compra'
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
    title: 'Entrega Digital',
    description: 'Recibila al instante por email o compartila directamente desde la web'
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
      </svg>
    ),
    title: 'Regalo Perfecto',
    description: 'Ideal para cumpleaños, aniversarios, día de la madre o cualquier ocasión especial'
  }
]

export function GiftCardInfo() {
  return (
		<div>
			<div className='text-center mb-16'>
				<h2 className='text-3xl md:text-4xl font-bold text-gray-900 mb-6'>¿Por qué elegir nuestras Gift Cards?</h2>
				<p className='text-xl text-gray-600 max-w-3xl mx-auto'>
					Más que un regalo, es una experiencia única de belleza y bienestar que recordará para siempre
				</p>
			</div>

			<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
				{features.map((feature, index) => (
					<motion.div
						key={feature.title}
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.5, delay: index * 0.1 }}
						viewport={{ once: true }}
						className='bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-pink-100 hover:border-pink-200 group'
					>
						<div className='flex items-center mb-4'>
							<div className='w-12 h-12  bg-pink-500  bg-gradient-to-br from-pink-500 to-purple-600 rounded-xl flex items-center justify-center text-white group-hover:scale-110 transition-transform duration-300'>
								{feature.icon}
							</div>
							<h3 className='text-xl font-semibold text-gray-900 ml-4'>{feature.title}</h3>
						</div>
						<p className='text-gray-600 leading-relaxed'>{feature.description}</p>
					</motion.div>
				))}
			</div>
		</div>
	);
}