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
			fecha: '2025-03-15',
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
			fecha: '2025-02-20',
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
			fecha: '2025-01-10',
			avatar: 'https://image.pollinations.ai/prompt/professional%20headshot%20woman%2045%20years%20old%20confident%20smiling%20client%20realistic%20photography?width=150&height=150&model=flux-realism&enhance=true&nologo=true&seed=33333',
			fallbackColor: 'bg-emerald-500',
			verificado: true,
			location: 'Mar del Plata'
		},
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
		<section className='py-16'>
			<div className='max-w-7xl mx-auto px-4'>
				{/* Header */}
				<div className='text-center mb-12'>
					<h2 className='text-3xl md:text-4xl font-bold text-gray-900 mb-4'>Lo Que Dicen Nuestras Clientas</h2>
					<p className='text-lg text-gray-600 max-w-2xl mx-auto mb-8'>
						Conocé las experiencias reales de quienes confiaron en nosotras para su transformación
					</p>
				</div>

				<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
					{testimonios.map((testimonio) => (
						<div
							key={testimonio.id}
							className='bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 p-6 relative overflow-hidden'
						>
							{/* Quote Icon */}
							<div className='absolute top-4 right-4 text-primary-200'>
								<Quote className='w-8 h-8' />
							</div>

							{/* Avatar and Info */}
							<div className='flex items-center mb-4'>
								<div className='relative w-16 h-16 rounded-full overflow-hidden mr-4'>
									<Image
										src={testimonio.avatar}
										alt={testimonio.nombre}
										fill
										className='object-cover'
										onError={(e) => {
											const target = e.target as HTMLImageElement;
											target.style.display = 'none';
											const parent = target.parentElement;
											if (parent) {
												parent.className += ` ${testimonio.fallbackColor} flex items-center justify-center`;
												parent.innerHTML = `<span class="text-white font-bold text-lg">${testimonio.nombre.charAt(
													0
												)}</span>`;
											}
										}}
									/>
								</div>
								<div>
									<div className='flex items-center mb-1'>
										<h4 className='font-semibold text-gray-900 mr-2'>{testimonio.nombre}</h4>
									</div>
									
									<div className='flex items-center mt-1'>
										{renderStars(testimonio.rating)}
										<span className='ml-2 text-sm text-gray-600 font-medium'>{testimonio.rating}.0</span>
									</div>
								</div>
							</div>

							{/* Rating */}
							{/* <div className='flex items-center mb-3'>
								{renderStars(testimonio.rating)}
								<span className='ml-2 text-sm text-gray-600 font-medium'>{testimonio.rating}.0</span>
							</div> */}

							{/* Treatment */}
							<div className='mb-4 '>
								<span className='inline-block bg-primary-100 text-primary-700 px-3 py-1 rounded-full text-sm font-medium'>
									{testimonio.tratamiento}
								</span>
							</div>

							{/* Comment */}
							<p className='text-gray-700 leading-relaxed mb-4 italic'>"{testimonio.comentario}"</p>

							{/* Date */}
							<div className='text-xs text-gray-500'>
								{new Date(testimonio.fecha).toLocaleDateString('es-AR', {
									year: 'numeric',
									month: 'long',
									day: 'numeric',
								})}
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	);
};

export default Testimonios;