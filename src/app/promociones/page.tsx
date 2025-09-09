import Link from 'next/link';
import { Gift, Percent, Users, Sparkles, Heart, Calendar, Phone, MessageCircle, Sun, Snowflake, Instagram, Facebook, Star, Clock, Zap, DollarSign, CheckCircle, AlertCircle } from 'lucide-react';

export default function Promociones() {
	return (
		<div className='min-h-screen bg-gray-50'>
			{/* Hero Section */}
			<section className='relative bg-gradient-to-r from-pink-100 to-purple-100 py-20 overflow-hidden'>
				<img
					src='https://image.pollinations.ai/prompt/luxury-spa-promotion-banner-aesthetic-clinic-special-offers-modern-elegant-design?width=1200&height=400&model=flux-realism&enhance=true&nologo=true'
					alt='Promociones Íntima MDQ'
					className='absolute inset-0 w-full h-full object-cover opacity-20'
				/>
				<div className='relative max-w-7xl mx-auto px-4 text-center'>
					<h1 className='text-4xl font-bold text-gray-900 mb-4'>PROMOCIONES Y OFERTAS ESPECIALES</h1>
					<p className='text-lg text-gray-600'>
						Descubrí nuestras promociones exclusivas y ahorrá en tus tratamientos favoritos
					</p>
					<div className='flex items-center justify-center gap-2 mt-4 text-pink-600'>
						<Percent className='w-5 h-5' />
						<span className='font-semibold'>Descuentos especiales todo el año</span>
					</div>
				</div>
			</section>

			{/* Promoción Destacada - Pase Libre */}
			<section className='py-16 max-w-7xl mx-auto px-4'>
				<div className='relative bg-gradient-to-r from-pink-500 to-purple-600 rounded-2xl p-8 text-white mb-12 overflow-hidden'>
					<img
						src='https://image.pollinations.ai/prompt/spa-pass-multiple-treatments-luxury-wellness-center-promotional-banner?width=800&height=300&model=flux-realism&enhance=true&nologo=true'
						alt='Pase Libre Íntima'
						className='absolute inset-0 w-full h-full object-cover opacity-20'
					/>
					<div className='relative z-10'>
						{/* Header */}
						<div className='text-center mb-12'>
							<div className='inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm rounded-full px-6 py-2 mb-4'>
								<Star className='w-5 h-5 text-yellow-300' />
								<span className='text-sm font-semibold'>PROMOCIÓN EXCLUSIVA</span>
								<Star className='w-5 h-5 text-yellow-300' />
							</div>
							<h2 className='text-4xl md:text-5xl font-bold mb-4'>PASE LIBRE ÍNTIMA</h2>
							<p className='text-xl md:text-2xl mb-2'>Dos horas de tratamiento por día... A tu ritmo, a tu elección</p>
							<p className='text-lg opacity-90'>La mejor inversión en tu belleza y bienestar</p>
						</div>

						{/* Precio Destacado */}
						<div className='text-center mb-12'>
							<div className='inline-block bg-white/25 backdrop-blur-sm rounded-xl p-6 border-2 border-yellow-400'>
								<div className='bg-gradient-to-r from-yellow-400 to-orange-400 text-black px-4 py-1 rounded-full text-sm font-bold mb-4 flex items-center gap-2'>
									<Zap className='w-4 h-4' />
									PRECIO ESPECIAL
									<Zap className='w-4 h-4' />
								</div>
								<div className='mb-2'>
									<span className='text-5xl font-bold'>$25.000</span>
								</div>
								<div className='bg-green-500 text-white px-3 py-1 rounded-full text-sm font-bold mb-2 flex items-center gap-2'>
									<DollarSign className='w-4 h-4' />
									AHORRÁS MÁS DEL 40%
								</div>
								<p className='text-sm opacity-90'>Valor individual: $45.000+</p>
							</div>
						</div>

						{/* Beneficios y Condiciones */}
						<div className='grid md:grid-cols-2 gap-8 mb-10'>
							{/* Incluye */}
							<div className='bg-white/15 backdrop-blur-sm rounded-xl p-6'>
								<h3 className='text-2xl font-bold mb-6 flex items-center gap-2'>
									<Gift className='w-6 h-6 text-yellow-300' />
									¿Qué incluye?
								</h3>
								<div className='space-y-3'>
									<div className='flex items-center gap-3'>
										<CheckCircle className='w-5 h-5 text-yellow-300' />
										<span>Mio Up - Tonificación muscular</span>
									</div>
									<div className='flex items-center gap-3'>
										<CheckCircle className='w-5 h-5 text-yellow-300' />
										<span>Alpha Synergy - Reducción de grasa</span>
									</div>
									<div className='flex items-center gap-3'>
										<CheckCircle className='w-5 h-5 text-yellow-300' />
										<span>PushUp - Levantamiento de glúteos</span>
									</div>
									<div className='flex items-center gap-3'>
										<CheckCircle className='w-5 h-5 text-yellow-300' />
										<span>Presoterapia - Drenaje linfático</span>
									</div>
									<div className='flex items-center gap-3'>
										<CheckCircle className='w-5 h-5 text-yellow-300' />
										<span>Mantas térmicas - Relajación</span>
									</div>
									<div className='flex items-center gap-3'>
										<CheckCircle className='w-5 h-5 text-yellow-300' />
										<span>LipoLED - Reducción localizada</span>
									</div>
									<div className='flex items-center gap-3'>
										<CheckCircle className='w-5 h-5 text-yellow-300' />
										<span>Limpieza facial completa</span>
									</div>
								</div>
							</div>

							{/* Condiciones */}
							<div className='bg-white/15 backdrop-blur-sm rounded-xl p-6'>
								<h3 className='text-2xl font-bold mb-6 flex items-center gap-2'>
									<Calendar className='w-6 h-6 text-blue-300' />
									Condiciones
								</h3>
								<div className='space-y-4'>
									<div className='flex items-start gap-3'>
										<Clock className='w-5 h-5 text-blue-300 mt-1' />
										<div>
											<p className='font-semibold'>2 horas por día</p>
											<p className='text-sm opacity-80'>Máximo tiempo de tratamiento diario</p>
										</div>
									</div>
									<div className='flex items-start gap-3'>
										<Users className='w-5 h-5 text-blue-300 mt-1' />
										<div>
											<p className='font-semibold'>Según disponibilidad</p>
											<p className='text-sm opacity-80'>Sujeto a horarios del centro</p>
										</div>
									</div>
									<div className='flex items-start gap-3'>
										<Calendar className='w-5 h-5 text-blue-300 mt-1' />
										<div>
											<p className='font-semibold'>Con turno previo</p>
											<p className='text-sm opacity-80'>Reserva con 24hs de anticipación</p>
										</div>
									</div>
									<div className='flex items-start gap-3'>
										<AlertCircle className='w-5 h-5 text-blue-300 mt-1' />
										<div>
											<p className='font-semibold'>Válido por 30 días</p>
											<p className='text-sm opacity-80'>Desde la fecha de compra</p>
										</div>
									</div>
								</div>
							</div>
						</div>

						{/* CTA */}
						<div className='text-center'>
							<div className='inline-flex flex-col sm:flex-row gap-4'>
								<button className='bg-gradient-to-r from-yellow-400 to-orange-400 text-black px-8 py-4 rounded-xl font-bold text-lg hover:from-yellow-300 hover:to-orange-300 transition-all duration-300 transform hover:scale-105 shadow-lg flex items-center gap-2'>
									<Zap className='w-5 h-5' />
									¡Quiero mi Pase Libre!
								</button>
								<button className='bg-white/20 backdrop-blur-sm border-2 border-white text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-white/30 transition-all duration-300 flex items-center gap-2 whitespace-nowrap'>
									<MessageCircle className='w-5 h-5' />
									Más Info por WhatsApp
								</button>
							</div>
							<div className='flex items-center justify-center gap-2 text-sm opacity-80 mt-4'>
								<AlertCircle className='w-4 h-4 text-red-300' />
								<span>Oferta limitada - Solo los primeros 50 pases</span>
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* Promociones Activas */}
			<section className='py-16 max-w-7xl mx-auto px-4'>
				<h2 className='text-3xl font-bold text-center mb-12'>PROMOCIONES ACTIVAS</h2>
				<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
					{/* Promoción 1 - Depilación Femenina */}
					<div className='bg-white rounded-lg shadow-md overflow-hidden'>
						<div className='relative h-48'>
							<img
								src='https://image.pollinations.ai/prompt/laser-hair-removal-woman-legs-professional-aesthetic-clinic-modern-equipment?width=400&height=200&model=flux-realism&enhance=true&nologo=true'
								alt='Depilación Láser Femenina'
								className='w-full h-full object-cover'
							/>
							<div className='absolute top-4 right-4 bg-pink-500 text-white px-3 py-1 rounded-full text-sm font-bold'>
								DESDE $6.000
							</div>
						</div>
						<div className='p-6'>
							<h4 className='font-semibold mb-3 flex items-center gap-2'>
								<Sparkles className='w-5 h-5 text-pink-500' />
								Depilación Definitiva Femenina
							</h4>
							<p className='text-gray-600 text-sm mb-4'>
								Combos especiales con descuentos increíbles. Efectivo o transferencia.
							</p>
							<ul className='text-sm text-gray-600 mb-4 space-y-1'>
								<li>• Pierna entera + cavado + axilas: $21.000</li>
								<li>• Rostro completo: $15.000</li>
								<li>• Zonas individuales desde $6.000</li>
							</ul>
							<button className='w-full bg-pink-500 mt-6 text-white py-2 px-4 rounded-lg hover:bg-pink-600 transition-colors'>
								Ver Promociones
							</button>
						</div>
					</div>

					{/* Promoción 2 - Maderoterapia */}
					<div className='bg-white rounded-lg shadow-md overflow-hidden'>
						<div className='relative h-48'>
							<img
								src='https://image.pollinations.ai/prompt/wood-therapy-maderoterapia-massage-wooden-tools-body-contouring-spa-treatment?width=400&height=200&model=flux-realism&enhance=true&nologo=true'
								alt='Maderoterapia'
								className='w-full h-full object-cover'
							/>
							<div className='absolute top-4 right-4 bg-orange-500 text-white px-3 py-1 rounded-full text-sm font-bold'>
								PACK 4: $79.000
							</div>
						</div>
						<div className='p-6'>
							<h4 className='font-semibold mb-3 flex items-center gap-2'>
								<Heart className='w-5 h-5 text-orange-500' />
								Maderoterapia 30'
							</h4>
							<p className='text-gray-600 text-sm mb-4'>
								Técnica ancestral para reducir celulitis, tonificar y relajar.
							</p>
							<ul className='text-sm text-gray-600 mb-4 space-y-1'>
								<li>• Sesión individual: $21.000</li>
								<li>• Pack 4 sesiones: $79.000</li>
								<li>• Estimula circulación</li>
								<li>• Reduce retención de líquidos</li>
							</ul>
							<button className='w-full bg-orange-500 text-white py-2 px-4 rounded-lg hover:bg-orange-600 transition-colors'>
								Reservar Turno
							</button>
						</div>
					</div>

					{/* Promoción 3 - Microblading */}
					<div className='bg-white rounded-lg shadow-md overflow-hidden'>
						<div className='relative h-48'>
							<img
								src='https://image.pollinations.ai/prompt/microblading-eyebrow-treatment-professional-beauty-salon-precise-technique?width=400&height=200&model=flux-realism&enhance=true&nologo=true'
								alt='Microblading'
								className='w-full h-full object-cover'
							/>
							<div className='absolute top-4 right-4 bg-purple-500 text-white px-3 py-1 rounded-full text-sm font-bold'>
								PROMO $100.000
							</div>
						</div>
						<div className='p-6'>
							<h4 className='font-semibold mb-3 flex items-center gap-2'>
								<Sparkles className='w-5 h-5 text-purple-500' />
								Microblading Cejas
							</h4>
							<p className='text-gray-600 text-sm mb-4'>
								Mirada impactante con cejas perfectas. Técnica semipermanente.
							</p>
							<ul className='text-sm text-gray-600 mb-4 space-y-1'>
								<li>• Primera sesión: $100.000 (promo)</li>
								<li>• Retoque al mes: $80.000</li>
								<li>• Duración: 1.5 a 2 años</li>
								<li>• Reserva con 20% del valor</li>
							</ul>
							<button className='w-full bg-purple-500 text-white py-2 px-4 rounded-lg hover:bg-purple-600 transition-colors'>
								Consultar Disponibilidad
							</button>
						</div>
					</div>

					{/* Promoción 4 - Alpha Synergy */}
					<div className='bg-white rounded-lg shadow-md overflow-hidden'>
						<div className='relative h-48'>
							<img
								src='https://image.pollinations.ai/prompt/alpha-synergy-body-treatment-radiofrequency-aesthetic-technology-modern-clinic?width=400&height=200&model=flux-realism&enhance=true&nologo=true'
								alt='Alpha Synergy'
								className='w-full h-full object-cover'
							/>
							<div className='absolute top-4 right-4 bg-blue-500 text-white px-3 py-1 rounded-full text-sm font-bold'>
								3x2 PROMO
							</div>
						</div>
						<div className='p-6'>
							<h4 className='font-semibold mb-3 flex items-center gap-2'>
								<Sparkles className='w-5 h-5 text-blue-500' />
								Alpha Synergy Corporal
							</h4>
							<p className='text-gray-600 text-sm mb-4'>
								Reducí circunferencia, tratá flacidez y celulitis con tecnología avanzada.
							</p>
							<ul className='text-sm text-gray-600 mb-4 space-y-1'>
								<li>• 1 Zona: $15.000</li>
								<li>• 2 Zonas: $25.000</li>
								<li>• Promo Jueves/Viernes: 3x2</li>
								<li>• Temperatura 42°-43°</li>
							</ul>
							<button className='w-full bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition-colors'>
								Agendar Sesión
							</button>
						</div>
					</div>

					{/* Promoción 5 - Beauty Nails */}
					<div className='bg-white rounded-lg shadow-md overflow-hidden'>
						<div className='relative h-48'>
							<img
								src='https://image.pollinations.ai/prompt/nail-art-manicure-pedicure-beauty-salon-professional-nail-care-elegant-hands?width=400&height=200&model=flux-realism&enhance=true&nologo=true'
								alt='Beauty Nails'
								className='w-full h-full object-cover'
							/>
							<div className='absolute top-4 right-4 bg-pink-500 text-white px-3 py-1 rounded-full text-sm font-bold'>
								COMBO $20.000
							</div>
						</div>
						<div className='p-6'>
							<h4 className='font-semibold mb-3 flex items-center gap-2'>
								<Heart className='w-5 h-5 text-pink-500' />
								Beauty Nails
							</h4>
							<p className='text-gray-600 text-sm mb-4'>
								Embellecé tus manos y pies con nuestros tratamientos profesionales.
							</p>
							<ul className='text-sm text-gray-600 mb-4 space-y-1'>
								<li>• Esmaltado semipermanente: $10.000</li>
								<li>• Capping Polygel: $14.500</li>
								<li>• Combo manos + pies: $20.000</li>
								<li>• Spa de pies incluido</li>
							</ul>
							<button className='w-full bg-pink-500 text-white py-2 px-4 rounded-lg hover:bg-pink-600 transition-colors'>
								Reservar Cita
							</button>
						</div>
					</div>

					{/* Promoción 6 - Combo Glúteos */}
					<div className='bg-white rounded-lg shadow-md overflow-hidden'>
						<div className='relative h-48'>
							<img
								src='https://image.pollinations.ai/prompt/buttocks-enhancement-vacuum-therapy-mio-up-aesthetic-treatment-professional-clinic?width=400&height=200&model=flux-realism&enhance=true&nologo=true'
								alt='Combo Glúteos'
								className='w-full h-full object-cover'
							/>
							<div className='absolute top-4 right-4 bg-red-500 text-white px-3 py-1 rounded-full text-sm font-bold'>
								PACK $140.000
							</div>
						</div>
						<div className='p-6'>
							<h4 className='font-semibold mb-3 flex items-center gap-2'>
								<Gift className='w-5 h-5 text-red-500' />
								Combo Glúteos Completo
							</h4>
							<p className='text-gray-600 text-sm mb-4'>
								Tratamiento súper completo para tonificar y reafirmar desde la primera sesión.
							</p>
							<ul className='text-sm text-gray-600 mb-4 space-y-1'>
								<li>• Mio Up + Maderoterapia + Alpha</li>
								<li>• Sesión: $38.000</li>
								<li>• Pack 4 sesiones: $140.000</li>
								<li>• Duración: 1h 30min</li>
							</ul>
							<button className='w-full bg-red-500 text-white py-2 px-4 rounded-lg hover:bg-red-600 transition-colors'>
								Empezar Ahora
							</button>
						</div>
					</div>
				</div>
			</section>

			{/* Promociones por Temporada */}
			<section className='bg-gray-100 py-16'>
				<div className='max-w-7xl mx-auto px-4'>
					<h2 className='text-3xl font-bold text-center mb-12'>PROMOCIONES ESTACIONALES</h2>
					<div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
						{/* Verano */}
						<div className='relative bg-white rounded-lg shadow-md p-8 overflow-hidden'>
							<img
								src='https://image.pollinations.ai/prompt/summer-beauty-treatments-tanning-depilation-beach-ready-aesthetic-clinic?width=600&height=400&model=flux-realism&enhance=true&nologo=true'
								alt='Especial Verano'
								className='absolute inset-0 w-full h-full object-cover opacity-10'
							/>
							<div className='relative z-10'>
								<div className='text-center mb-6'>
									<span className='text-4xl mb-4 block'>☀️</span>
									<h3 className='text-xl font-bold'>VERANO 2025</h3>
									<p className='text-gray-600'>Preparate para la temporada</p>
								</div>
								<ul className='space-y-3 text-sm'>
									<li className='flex items-center'>
										<span className='text-green-500 mr-2'>✓</span>
										Depilación definitiva - 30% OFF
									</li>
									<li className='flex items-center'>
										<span className='text-green-500 mr-2'>✓</span>
										Tratamientos reductivos intensivos
									</li>
									<li className='flex items-center'>
										<span className='text-green-500 mr-2'>✓</span>
										Paquetes de bronceado y cuidado
									</li>
								</ul>
								<button className='w-full mt-6 bg-orange-500 text-white py-2 px-4 rounded-lg hover:bg-orange-600 transition-colors'>
									Ver Promociones de Verano
								</button>
							</div>
						</div>

						{/* Invierno */}
						<div className='relative bg-white rounded-lg shadow-md p-8 overflow-hidden'>
							<img
								src='https://image.pollinations.ai/prompt/winter-skincare-hydration-anti-aging-facial-treatments-cozy-spa-atmosphere?width=600&height=400&model=flux-realism&enhance=true&nologo=true'
								alt='Especial Invierno'
								className='absolute inset-0 w-full h-full object-cover opacity-10'
							/>
							<div className='relative z-10'>
								<div className='text-center mb-6'>
									<span className='text-4xl mb-4 block'>❄️</span>
									<h3 className='text-xl font-bold'>INVIERNO 2025</h3>
									<p className='text-gray-600'>Cuidate durante el frío</p>
								</div>
								<ul className='space-y-3 text-sm'>
									<li className='flex items-center'>
										<span className='text-green-500 mr-2'>✓</span>
										Tratamientos faciales hidratantes
									</li>
									<li className='flex items-center'>
										<span className='text-green-500 mr-2'>✓</span>
										Paquetes de relajación y bienestar
									</li>
									<li className='flex items-center'>
										<span className='text-green-500 mr-2'>✓</span>
										Preparación para la próxima temporada
									</li>
								</ul>
								<button className='w-full mt-6 bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition-colors'>
									Ver Promociones de Invierno
								</button>
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* CTA Final */}
			<section className='relative bg-gradient-to-r from-pink-500 to-purple-600 py-16 overflow-hidden'>
				<img
					src='https://image.pollinations.ai/prompt/luxury-spa-promotion-call-to-action-elegant-beauty-salon-contact-us?width=800&height=400&model=flux-realism&enhance=true&nologo=true'
					alt='Contactanos'
					className='absolute inset-0 w-full h-full object-cover opacity-10'
				/>
				<div className='relative z-10 max-w-4xl mx-auto px-4 text-center text-white'>
					<h2 className='text-3xl font-bold mb-4'>¿Tenés dudas sobre nuestras promociones?</h2>
					<p className='text-lg mb-8'>
						Contactanos por WhatsApp y te asesoramos para que elijas la mejor opción para vos.
					</p>
					<div className='flex flex-col sm:flex-row gap-4 justify-center mb-6'>
						<a
							href='https://wa.me/5492236698045'
							target='_blank'
							rel='noopener noreferrer'
							className='bg-green-500 text-white px-8 py-3 rounded-lg hover:bg-green-600 font-semibold transition-colors flex items-center gap-2 justify-center'
						>
							<MessageCircle className='w-5 h-5' />
							Consultar por WhatsApp
						</a>
						<a
							href='tel:+5492236698045'
							className='bg-white text-pink-600 px-8 py-3 rounded-lg hover:bg-gray-100 font-semibold transition-colors flex items-center gap-2 justify-center'
						>
							<Phone className='w-5 h-5' />
							Llamar Ahora
						</a>
					</div>
					<div className='flex justify-center gap-4'>
						<Calendar className='w-6 h-6 text-white/80' />
						<span className='text-white/80'>Horarios: Lun a Vie 9-20hs | Sáb 9-17hs</span>
					</div>
				</div>
			</section>
		</div>
	);
}
