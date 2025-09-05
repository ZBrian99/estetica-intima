'use client';
import { useState } from 'react';
import Image from 'next/image';
import { Star, Quote, ChevronLeft, ChevronRight, Heart } from 'lucide-react';

interface Testimonio {
	id: string;
	nombre: string;
	edad: number;
	tratamiento: string;
	rating: number;
	comentario: string;
	fecha: string;
	avatar: string;
	fallbackColor: string;
	verificado: boolean;
	location: string;
}

const Testimonios = () => {
	const [currentIndex, setCurrentIndex] = useState(0);
	const [viewMode, setViewMode] = useState<'carousel' | 'grid'>('carousel');

	// Testimonios hardcodeados
	const testimonios: Testimonio[] = [
		{
			id: 'maria-gonzalez',
			nombre: 'María González',
			edad: 32,
			tratamiento: 'Depilación Láser Piernas Completas',
			rating: 5,
			comentario: 'Increíble resultado! Después de 6 sesiones mis piernas están completamente libres de vello. El equipo es súper profesional y el lugar es hermoso. Lo recomiendo 100%.',
			fecha: '2024-03-15',
			avatar: 'https://image.pollinations.ai/prompt/professional%20headshot%20woman%2032%20years%20old%20smiling%20happy%20client%20realistic%20photography?width=150&height=150&model=flux-realism&enhance=true&nologo=true&seed=11111',
			fallbackColor: 'bg-primary-500',
			verificado: true,
			location: 'Mar del Plata'
		},
		{
			id: 'sofia-martinez',
			nombre: 'Sofía Martínez',
			edad: 28,
			tratamiento: 'Microblading de Cejas',
			rating: 5,
			comentario: 'Mis cejas quedaron perfectas! Laura es una artista, el diseño es exactamente lo que quería. Ya no necesito maquillarme las cejas todos los días.',
			fecha: '2024-02-20',
			avatar: 'https://image.pollinations.ai/prompt/professional%20headshot%20woman%2028%20years%20old%20smiling%20satisfied%20client%20realistic%20photography?width=150&height=150&model=flux-realism&enhance=true&nologo=true&seed=22222',
			fallbackColor: 'bg-purple-500',
			verificado: true,
			location: 'Mar del Plata'
		},
		{
			id: 'ana-rodriguez',
			nombre: 'Ana Rodríguez',
			edad: 45,
			tratamiento: 'Maderoterapia Reductora',
			rating: 5,
			comentario: 'Bajé 12cm de contorno abdominal en 8 sesiones. Ana es muy profesional y me explicó todo el proceso. El ambiente es súper relajante.',
			fecha: '2024-01-10',
			avatar: 'https://image.pollinations.ai/prompt/professional%20headshot%20woman%2045%20years%20old%20confident%20smiling%20client%20realistic%20photography?width=150&height=150&model=flux-realism&enhance=true&nologo=true&seed=33333',
			fallbackColor: 'bg-emerald-500',
			verificado: true,
			location: 'Mar del Plata'
		},
		{
			id: 'carla-lopez',
			nombre: 'Carla López',
			edad: 35,
			tratamiento: 'Tratamiento Facial Anti-Age',
			rating: 5,
			comentario: 'Mi piel se ve 10 años más joven! Carmen es increíble, me asesoró perfectamente sobre qué tratamiento necesitaba. Los resultados superaron mis expectativas.',
			fecha: '2024-04-05',
			avatar: 'https://image.pollinations.ai/prompt/professional%20headshot%20woman%2035%20years%20old%20glowing%20skin%20happy%20client%20realistic%20photography?width=150&height=150&model=flux-realism&enhance=true&nologo=true&seed=44444',
			fallbackColor: 'bg-rose-500',
			verificado: true,
			location: 'Mar del Plata'
		},
		{
			id: 'lucia-fernandez',
			nombre: 'Lucía Fernández',
			edad: 26,
			tratamiento: 'Depilación Láser Axilas + Bikini',
			rating: 5,
			comentario: 'Excelente atención desde el primer día. El tratamiento fue súper efectivo y sin dolor. Ya estoy programando mi próxima zona!',
			fecha: '2024-03-01',
			avatar: 'https://image.pollinations.ai/prompt/professional%20headshot%20woman%2026%20years%20old%20young%20satisfied%20client%20realistic%20photography?width=150&height=150&model=flux-realism&enhance=true&nologo=true&seed=55555',
			fallbackColor: 'bg-indigo-500',
			verificado: true,
			location: 'Mar del Plata'
		},
		{
			id: 'valentina-garcia',
			nombre: 'Valentina García',
			edad: 29,
			tratamiento: 'Masaje Descontracturante',
			rating: 5,
			comentario: 'Increíble experiencia de relajación. Salí como nueva después del masaje. El ambiente es súper tranquilo y las profesionales son excelentes.',
			fecha: '2024-02-14',
			avatar: 'https://image.pollinations.ai/prompt/professional%20headshot%20woman%2029%20years%20old%20relaxed%20peaceful%20client%20realistic%20photography?width=150&height=150&model=flux-realism&enhance=true&nologo=true&seed=66666',
			fallbackColor: 'bg-amber-500',
			verificado: true,
			location: 'Mar del Plata'
		}
	];

	const itemsPerSlide = 3;
	const totalSlides = Math.ceil(testimonios.length / itemsPerSlide);

	const nextSlide = () => {
		setCurrentIndex((prev) => (prev + 1) % totalSlides);
	};

	const prevSlide = () => {
		setCurrentIndex((prev) => (prev - 1 + totalSlides) % totalSlides);
	};

	const getCurrentSlideItems = () => {
		const startIndex = currentIndex * itemsPerSlide;
		return testimonios.slice(startIndex, startIndex + itemsPerSlide);
	};

	const renderStars = (rating: number) => {
		return [...Array(5)].map((_, i) => (
			<Star
				key={i}
				className={`w-4 h-4 ${
					i < rating ? 'text-yellow-400 fill-current' : 'text-gray-300'
				}`}
			/>
		));
	};

	return (
		<section className="py-16 bg-gradient-to-br from-primary-50 to-purple-50">
			<div className="max-w-7xl mx-auto px-4">
				{/* Header */}
				<div className="text-center mb-12">
					<h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
						Lo Que Dicen Nuestras Clientas
					</h2>
					<p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8">
						Conocé las experiencias reales de quienes confiaron en nosotras para su transformación
					</p>

					{/* View Mode Toggle */}
					<div className="flex justify-center mb-8">
						<div className="flex bg-white rounded-lg p-1 shadow-sm border">
							<button
								onClick={() => setViewMode('carousel')}
								className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
									viewMode === 'carousel'
										? 'bg-primary-500 text-white'
										: 'text-gray-600 hover:text-gray-900'
								}`}
							>
								Carrusel
							</button>
							<button
								onClick={() => setViewMode('grid')}
								className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
									viewMode === 'grid'
										? 'bg-primary-500 text-white'
										: 'text-gray-600 hover:text-gray-900'
								}`}
							>
								Grilla
							</button>
						</div>
					</div>
				</div>

				{/* Content */}
				{viewMode === 'carousel' ? (
					/* Carousel View */
					<div className="relative">
						{/* Navigation Buttons */}
						<button
							onClick={prevSlide}
							className="absolute left-2 top-1/2 -translate-y-1/2 z-10 p-3 bg-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 text-gray-600 hover:text-primary-600 "
						>
							<ChevronLeft className="w-6 h-6" />
						</button>
						<button
							onClick={nextSlide}
							className="absolute right-2 top-1/2 -translate-y-1/2 z-10 p-3 bg-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 text-gray-600 hover:text-primary-600 "
						>
							<ChevronRight className="w-6 h-6" />
						</button>

						{/* Carousel Content */}
						<div className="overflow-hidden">
							<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
								{getCurrentSlideItems().map((testimonio) => (
									<div
										key={testimonio.id}
										className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 p-6 relative overflow-hidden"
									>
										{/* Quote Icon */}
										<div className="absolute top-4 right-4 text-primary-200">
											<Quote className="w-8 h-8" />
										</div>

										{/* Avatar and Info */}
											<div className="flex items-center mb-4">
												<div className="relative w-16 h-16 rounded-full overflow-hidden mr-4">
													<Image
														src={testimonio.avatar}
														alt={testimonio.nombre}
														fill
														sizes="64px"
														className="object-cover"
														onError={(e) => {
															const target = e.target as HTMLImageElement;
															target.style.display = 'none';
															const parent = target.parentElement;
															if (parent) {
															parent.className += ` ${testimonio.fallbackColor} flex items-center justify-center`;
															parent.innerHTML = `<span class="text-white font-bold text-lg">${testimonio.nombre.charAt(0)}</span>`;
														}
													}}
												/>
											</div>
											<div>
												<div className="flex items-center mb-1">
													<h4 className="font-semibold text-gray-900 mr-2">{testimonio.nombre}</h4>
													{testimonio.verificado && (
														<div className="bg-green-100 text-green-700 px-2 py-0.5 rounded-full text-xs font-medium whitespace-nowrap">
															✓ Verificado
														</div>
													)}
												</div>
												<p className="text-sm text-gray-500">{testimonio.edad} años • {testimonio.location}</p>
											</div>
										</div>

										{/* Rating */}
										<div className="flex items-center mb-3">
											{renderStars(testimonio.rating)}
											<span className="ml-2 text-sm text-gray-600 font-medium">
												{testimonio.rating}.0
											</span>
										</div>

										{/* Treatment */}
										<div className="mb-4">
											<span className="inline-block bg-primary-100 text-primary-700 px-3 py-1 rounded-full text-sm font-medium">
												{testimonio.tratamiento}
											</span>
										</div>

										{/* Comment */}
										<p className="text-gray-700 leading-relaxed mb-4 italic">
											"{testimonio.comentario}"
										</p>

										{/* Date */}
										<div className="text-xs text-gray-500">
											{new Date(testimonio.fecha).toLocaleDateString('es-AR', {
												year: 'numeric',
												month: 'long',
												day: 'numeric'
											})}
										</div>
									</div>
								))}
							</div>
						</div>

						{/* Carousel Indicators */}
						<div className="flex justify-center mt-8 space-x-2">
							{[...Array(totalSlides)].map((_, index) => (
								<button
									key={index}
									onClick={() => setCurrentIndex(index)}
									className={`w-3 h-3 rounded-full transition-all duration-300 ${
										index === currentIndex
											? 'bg-primary-500 w-8'
											: 'bg-gray-300 hover:bg-gray-400'
									}`}
								/>
							))}
						</div>
					</div>
				) : (
					/* Grid View */
					<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
						{testimonios.map((testimonio) => (
							<div
								key={testimonio.id}
								className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 p-6 relative overflow-hidden"
							>
								{/* Quote Icon */}
								<div className="absolute top-4 right-4 text-primary-200">
									<Quote className="w-8 h-8" />
								</div>

								{/* Avatar and Info */}
								<div className="flex items-center mb-4">
									<div className="relative w-16 h-16 rounded-full overflow-hidden mr-4">
										<Image
											src={testimonio.avatar}
											alt={testimonio.nombre}
											fill
											className="object-cover"
											onError={(e) => {
												const target = e.target as HTMLImageElement;
												target.style.display = 'none';
												const parent = target.parentElement;
												if (parent) {
													parent.className += ` ${testimonio.fallbackColor} flex items-center justify-center`;
													parent.innerHTML = `<span class="text-white font-bold text-lg">${testimonio.nombre.charAt(0)}</span>`;
												}
											}}
										/>
									</div>
									<div>
										<div className="flex items-center mb-1">
											<h4 className="font-semibold text-gray-900 mr-2">{testimonio.nombre}</h4>
											{testimonio.verificado && (
												<div className="bg-green-100 text-green-700 px-2 py-0.5 rounded-full text-xs font-medium">
													✓ Verificado
												</div>
											)}
										</div>
										<p className="text-sm text-gray-500">{testimonio.edad} años • {testimonio.location}</p>
									</div>
								</div>

								{/* Rating */}
								<div className="flex items-center mb-3">
									{renderStars(testimonio.rating)}
									<span className="ml-2 text-sm text-gray-600 font-medium">
										{testimonio.rating}.0
									</span>
								</div>

								{/* Treatment */}
								<div className="mb-4">
									<span className="inline-block bg-primary-100 text-primary-700 px-3 py-1 rounded-full text-sm font-medium">
										{testimonio.tratamiento}
									</span>
								</div>

								{/* Comment */}
								<p className="text-gray-700 leading-relaxed mb-4 italic">
									"{testimonio.comentario}"
								</p>

								{/* Date */}
								<div className="text-xs text-gray-500">
									{new Date(testimonio.fecha).toLocaleDateString('es-AR', {
										year: 'numeric',
										month: 'long',
										day: 'numeric'
									})}
								</div>
							</div>
						))}
					</div>
				)}

				{/* Stats Section */}
				<div className="mt-16 bg-white rounded-2xl shadow-lg p-8">
					<div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
						<div>
							<div className="text-3xl font-bold text-primary-600 mb-2">500+</div>
							<div className="text-gray-600">Clientas Satisfechas</div>
						</div>
						<div>
							<div className="text-3xl font-bold text-primary-600 mb-2">4.9</div>
							<div className="text-gray-600">Calificación Promedio</div>
						</div>
						<div>
							<div className="text-3xl font-bold text-primary-600 mb-2">98%</div>
							<div className="text-gray-600">Recomendación</div>
						</div>
						<div>
							<div className="text-3xl font-bold text-primary-600 mb-2">3+</div>
							<div className="text-gray-600">Años de Experiencia</div>
						</div>
					</div>
				</div>

				{/* CTA Section */}
				<div className="text-center mt-12">
					<h3 className="text-2xl font-bold text-gray-900 mb-4">
						¿Querés ser la próxima en compartir tu experiencia?
					</h3>
					<p className="text-gray-600 mb-6">
						Reservá tu consulta gratuita y comenzá tu transformación hoy mismo
					</p>
					<button className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-primary-500 to-rose-400 text-white font-semibold rounded-full hover:from-primary-600 hover:to-rose-500 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105">
						<Heart className="w-5 h-5 mr-2" />
						Reservar Consulta Gratuita
					</button>
				</div>
			</div>
		</section>
	);
};

export default Testimonios;