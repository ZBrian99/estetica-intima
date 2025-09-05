'use client';
import { useCallback, useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ChevronLeft, ChevronRight, Gift, Star, Sparkles } from 'lucide-react';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';

// Componente para los indicadores
interface EmblaIndicatorsProps {
	emblaApi: any;
	slides: any[];
	scrollTo: (index: number) => void;
	currentSlide: number;
}

const EmblaIndicators = ({ emblaApi, slides, scrollTo, currentSlide }: EmblaIndicatorsProps) => {
	return (
		<div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex space-x-3">
			{slides.map((_, index) => (
				<button
					key={index}
					onClick={() => scrollTo(index)}
					className={`w-3 h-3 rounded-full transition-all duration-300 ${
						index === currentSlide
							? 'bg-white scale-125 shadow-lg'
							: 'bg-white/50 hover:bg-white/70'
					}`}
					aria-label={`Ir al slide ${index + 1}`}
				/>
			))}
		</div>
	);
};

const Hero = () => {
	const [emblaRef, emblaApi] = useEmblaCarousel(
		{ loop: true, align: 'start' },
		[Autoplay({ delay: 8000, stopOnInteraction: false })]
	);
	const [currentSlide, setCurrentSlide] = useState(0);

	const slides = [
		{
			id: 1,
			type: 'brand',
			title: 'Íntima MDQ',
			subtitle: 'Centro de Estética Integral',
			description: 'Tecnología de última generación para tu belleza y bienestar',
			primaryCta: 'Conocer Servicios',
			primaryHref: '/servicios',
			secondaryCta: 'Reservar Ahora',
			secondaryHref: '/contacto',
			icon: <Sparkles className="w-8 h-8" />,
			background: 'bg-gradient-to-br from-primary-600 via-primary-500 to-rose-400',
			image: 'https://image.pollinations.ai/prompt/modern%20luxury%20spa%20interior%20with%20soft%20lighting%20professional%20aesthetic%20clinic%20clean%20minimalist%20design?width=1200&height=800&model=flux-realism&enhance=true&nologo=true&seed=12345',
			fallbackColor: 'bg-primary-500'
		},
		{
			id: 2,
			type: 'promo',
			title: '¡Promoción Especial!',
			subtitle: 'Depilación Definitiva',
			description: 'Pierna completa + Cavado + Axilas + Bozo por solo $22,500',
			primaryCta: 'Ver Promoción',
			primaryHref: '/promociones',
			secondaryCta: 'Reservar Ahora',
			secondaryHref: '/contacto',
			icon: <Gift className="w-8 h-8" />,
			background: 'bg-gradient-to-br from-pink-600 via-pink-500 to-indigo-400',
			image: 'https://image.pollinations.ai/prompt/woman%20receiving%20laser%20hair%20removal%20treatment%20professional%20medical%20spa%20realistic%20photography%20high%20quality%20soft%20lighting%20clean%20composition?width=1200&height=800&model=flux-realism&enhance=true&nologo=true&seed=67890',
			fallbackColor: 'bg-pink-500'
		},
		{
			id: 3,
			type: 'treatment',
			title: 'Tratamientos Corporales',
			subtitle: 'Maderoterapia + Alpha Synergy',
			description: 'Reduce medidas y modela tu figura con tecnología avanzada',
			primaryCta: 'Ver Tratamientos',
			primaryHref: '/servicios',
			secondaryCta: 'Agendar Sesión',
			secondaryHref: '/contacto',
			icon: <Star className="w-8 h-8" />,
			background: 'bg-gradient-to-br from-emerald-600 via-teal-500 to-cyan-400',
			image: 'https://image.pollinations.ai/prompt/woman%20receiving%20body%20contouring%20treatment%20modern%20spa%20equipment%20professional%20aesthetic%20clinic%20realistic%20photography%20soft%20lighting?width=1200&height=800&model=flux-realism&enhance=true&nologo=true&seed=54321',
			fallbackColor: 'bg-emerald-500'
		}
	];

	// Embla carousel controls
	const scrollPrev = useCallback(() => {
		if (emblaApi) emblaApi.scrollPrev();
	}, [emblaApi]);

	const scrollNext = useCallback(() => {
		if (emblaApi) emblaApi.scrollNext();
	}, [emblaApi]);

	const scrollTo = useCallback((index: number) => {
		if (emblaApi) emblaApi.scrollTo(index);
	}, [emblaApi]);

	// Track current slide
	useEffect(() => {
		if (!emblaApi) return;

		const onSelect = () => {
			setCurrentSlide(emblaApi.selectedScrollSnap());
		};

		emblaApi.on('select', onSelect);
		onSelect();

		return () => {
			emblaApi.off('select', onSelect);
		};
	}, [emblaApi]);

	const currentSlideData = slides[currentSlide];

	return (
		<section className="relative h-screen overflow-hidden">
			{/* Embla Carousel Container */}
			<div className="embla h-full" ref={emblaRef}>
				<div className="embla__container h-full flex">
					{slides.map((slide, index) => (
						<div key={slide.id} className="embla__slide flex-[0_0_100%] min-w-0 relative">
							{/* Background Image */}
							<div className="absolute inset-0">
								<Image
									src={slide.image}
									alt={slide.title}
									fill
									sizes="100vw"
									className="object-cover transition-opacity duration-1000"
									priority={index === 0}
									onError={(e) => {
										const target = e.target as HTMLImageElement;
										target.style.display = 'none';
										const parent = target.parentElement;
										if (parent) {
											parent.className += ` ${slide.fallbackColor}`;
										}
									}}
								/>
								{/* Overlay */}
								<div className={`absolute inset-0 ${slide.background} opacity-80`} />
							</div>

							{/* Content */}
							<div className="relative z-10 h-full flex items-center justify-center text-center px-4">
								<div className="max-w-4xl mx-auto text-white">
									{/* Icon */}
									<div className="flex justify-center mb-6">
										<div className="p-4 bg-white/20 rounded-full backdrop-blur-sm">
											{slide.icon}
										</div>
									</div>

									{/* Title */}
									<h1 className="text-5xl md:text-7xl font-bold mb-4 animate-fade-in">
										{slide.title}
									</h1>

									{/* Subtitle */}
									<h2 className="text-2xl md:text-3xl font-light mb-6 animate-fade-in-delay-1">
										{slide.subtitle}
									</h2>

									{/* Description */}
									<p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto animate-fade-in-delay-2">
										{slide.description}
									</p>

									{/* CTAs */}
									<div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-delay-3">
										<Link
											href={slide.primaryHref}
											className="px-8 py-4 bg-white text-gray-900 font-semibold rounded-full hover:bg-gray-100 transition-colors duration-300 shadow-lg"
										>
											{slide.primaryCta}
										</Link>
										<Link
											href={slide.secondaryHref}
											className="px-8 py-4 border-2 border-white text-white font-semibold rounded-full hover:bg-white hover:text-gray-900 transition-colors duration-300"
										>
											{slide.secondaryCta}
										</Link>
									</div>
								</div>
							</div>
						</div>
					))}
				</div>
			</div>

			{/* Navigation Arrows */}
			<button
				onClick={scrollPrev}
				className="absolute left-4 top-1/2 -translate-y-1/2 z-20 p-3 bg-white/20 backdrop-blur-sm rounded-full text-white hover:bg-white/30 transition-colors duration-300"
				aria-label="Slide anterior"
			>
				<ChevronLeft className="w-6 h-6" />
			</button>

			<button
				onClick={scrollNext}
				className="absolute right-4 top-1/2 -translate-y-1/2 z-20 p-3 bg-white/20 backdrop-blur-sm rounded-full text-white hover:bg-white/30 transition-colors duration-300"
				aria-label="Slide siguiente"
			>
				<ChevronRight className="w-6 h-6" />
			</button>

			{/* Slide Indicators */}
			<EmblaIndicators emblaApi={emblaApi} slides={slides} scrollTo={scrollTo} currentSlide={currentSlide} />
		</section>
	);
};

export default Hero;