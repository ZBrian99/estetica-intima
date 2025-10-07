'use client';
import { useCallback, useEffect, useRef, useState } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';

import Hero1 from '@/app/hero-propuesta/Hero1';
import HeroDepilacionCenteredV2 from '@/app/hero-final/HeroDepilacionCenteredV2';
import HeroPaseLibreCenteredV2 from '@/app/hero-final/HeroPaseLibreCenteredV2';
import HeroGluteosCenteredV2 from '@/app/hero-final/HeroGluteosCenteredV2';
import { FaAngleLeft, FaAngleRight } from 'react-icons/fa6';

export default function NewHeroSection() {
	const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: 'start' }, [
		Autoplay({ delay: 6000, stopOnMouseEnter: true, stopOnInteraction: false }),
	]);
	const [selectedIndex, setSelectedIndex] = useState(0);
	const rafId = useRef<number | null>(null);

	const onSelect = useCallback(() => {
		if (!emblaApi) return;
		if (rafId.current) cancelAnimationFrame(rafId.current);
		rafId.current = requestAnimationFrame(() => {
			setSelectedIndex(emblaApi.selectedScrollSnap());
		});
	}, [emblaApi]);

	useEffect(() => {
		if (!emblaApi) return;
		emblaApi.on('select', onSelect);
		emblaApi.on('reInit', onSelect);
		onSelect();
		return () => {
			if (rafId.current) cancelAnimationFrame(rafId.current);
		};
	}, [emblaApi, onSelect]);

	const prev = () => emblaApi?.scrollPrev();
	const next = () => emblaApi?.scrollNext();
	const scrollTo = (i: number) => emblaApi?.scrollTo(i);

	const slides = [
		<Hero1 key='hero1' />,
		<HeroDepilacionCenteredV2 key='depilacion' />,
		<HeroPaseLibreCenteredV2 key='pase-libre' />,
		<HeroGluteosCenteredV2 key='gluteos' />,
	];

	return (
		<section className='relative w-full min-h-[calc(100svh-4rem)] overflow-hidden'>
			<div className='overflow-hidden h-full w-full' ref={emblaRef}>
				<div className='flex min-h-[calc(100svh-4rem)]'>
					{slides.map((slide, i) => (
						<div key={i} className='relative flex-[0_0_100%] w-full will-change-transform'>
							{/* <div className='absolute inset-0 -z-10 bg-orange-700' /> */}
							<div className='relative z-10 h-full bg-orange-900'>{slide}</div>
						</div>
					))}
				</div>
			</div>

			{/* Dots */}
			<div className=' absolute left-1/2 -translate-x-1/2 bottom-4 z-20 flex gap-2'>
				{slides.map((_, di) => (
					<button
						key={di}
						aria-label={`Ir al slide ${di + 1}`}
						className={`h-2.5 w-2.5 rounded-full ${selectedIndex === di ? 'bg-white' : 'bg-white/60'}`}
						onClick={() => scrollTo(di)}
					/>
				))}
			</div>

			{/* Arrows */}
			<button
				aria-label='Anterior'
				className='  absolute top-0 bottom-0 left-0 flex justify-center items-center w-10 h-full'
				onClick={prev}
			>
				<FaAngleLeft className='w-5 h-5 text-white' />
			</button>
			<button
				aria-label='Siguiente'
				className='  absolute top-0 bottom-0 right-0 flex justify-center items-center w-10 h-full'
				onClick={next}
			>
				<FaAngleRight className='w-5 h-5 text-white' />
			</button>
		</section>
	);
}
