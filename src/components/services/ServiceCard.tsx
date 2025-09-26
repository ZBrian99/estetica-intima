'use client';

import Image from 'next/image';
import { useState } from 'react';
import {
	FaClock,
	FaStar,
	FaStarHalfAlt,
	FaUsers,
	FaTags,
	FaAward,
	FaRegStar,
	FaShoppingCart,
	FaCheck,
} from 'react-icons/fa';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { ServiceResponse } from '@/schemas/servicesSchema';
import { HiSparkles } from 'react-icons/hi2';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
import { calculateDiscount, formatPrice } from '@/lib/utils';
import { useCartStore } from '@/stores/cartStore';
import { useRouter } from 'next/navigation';
import { useSetCartOpen } from '@/stores/uiStore';

export function ServiceCard({ service }: { service: ServiceResponse }) {
	const addItem = useCartStore((state) => state.addItem);
	const setCartOpen = useSetCartOpen();
	const [added, setAdded] = useState(false);
	const router = useRouter();

	const handleAdd = () => {
		addItem(service);
		setCartOpen(true);
		setAdded(true);
		setTimeout(() => setAdded(false), 1000);
	};

	const renderStars = (rating: number) => {
		const stars = [];
		const fullStars = Math.floor(rating);
		const hasHalfStar = rating % 1 >= 0.5;

		for (let i = 0; i < fullStars; i++) {
			stars.push(<FaStar key={i} className='w-3.5 h-3.5 text-yellow-500' />);
		}

		if (hasHalfStar) {
			stars.push(<FaStarHalfAlt key='half' className='w-3.5 h-3.5 text-yellow-500' />);
		}

		const renderedStarsCount = fullStars + (hasHalfStar ? 1 : 0);
		const remainingStars = 5 - renderedStarsCount;
		for (let i = 0; i < remainingStars; i++) {
			stars.push(<FaRegStar key={`empty-${i}`} className='w-3.5 h-3.5 text-yellow-500' />);
		}

		return stars;
	};

	const hasPromo = !!service.hasPromo;
	const basePrice = service.basePrice;
	const currentPrice = hasPromo ? service.finalPrice : basePrice;
	const cashPrice = Math.round(currentPrice * 0.9);
	const savings = hasPromo ? Math.max(0, basePrice - (service.finalPrice ?? basePrice)) : 0;

	return (
		<Card
			key={service.id}
			className='group shadow-sm hover:shadow-md transition-all duration-300 bg-white rounded-xl flex flex-col cursor-pointer'
			onClick={() => router.push(`/servicios/${service.id}`)}
		>
			<div className='relative rounded-t-xl overflow-hidden'>
				<Image
					src={service.imageUrl || '/images/placeholder-service.webp'}
					alt={service.name}
					width={300}
					height={200}
					className='w-full h-32 sm:h-36 md:h-40 object-cover group-hover:scale-105 transition-transform duration-500'
				/>

				{/* Badge oferta */}
				{hasPromo && (
					<div className='absolute left-2 top-2 z-10'>
						<Badge className='bg-emerald-600 hover:bg-emerald-700 text-white border-0 text-xs px-2.5 py-1 rounded-full shadow'>
							<FaTags className='w-3 h-3 mr-1' /> {calculateDiscount(basePrice, currentPrice)}% OFF
						</Badge>
					</div>
				)}

				{/* Image overlay gradient */}
				<div className='absolute inset-0 overlay-t-soft opacity-0 group-hover:opacity-100 transition-opacity duration-300' />

				{/* Overlay cart button */}
				<button
					aria-label='Agregar al carrito'
					onClick={(e) => {
						e.stopPropagation();
						handleAdd();
					}}
					className='absolute bottom-2 right-2 z-10 inline-flex items-center justify-center h-9 w-9 rounded-full bg-primary-600 text-white shadow-lg hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-primary-400/60 active:scale-95 transition'
				>
					{added ? <FaCheck className='h-4 w-4 text-white' /> : <FaShoppingCart className='h-4 w-4 text-white' />}
				</button>
			</div>

			<CardContent className='p-3 md:p-4 flex flex-col flex-1'>
				<div className='flex flex-col gap-2 md:gap-2.5 mb-auto'>
					<h3 className='text-sm md:text-base font-semibold text-gray-900 line-clamp-2 group-hover:text-primary-700 transition-colors duration-200 leading-tight'>
						{service.name}
					</h3>

					{service.rating && service.rating > 4.8 ? (
						<div className='flex items-center justify-between gap-2 md:gap-3 overflow-hidden'>
							<div className='flex items-center gap-1'>
								<div className='flex items-center gap-px'>{renderStars(service.rating)}</div>
								<span className='text-xs text-gray-600 font-medium ml-1'>{service.rating}</span>
							</div>

							{/* <TooltipProvider>
								<Tooltip>
									<TooltipTrigger asChild>
										<div className='flex items-center gap-1 text-xs text-gray-600'>
											<FaUsers className='w-3.5 h-3.5 text-primary-500' />
											<span>{service.bookings || 0}</span>
										</div>
									</TooltipTrigger>
									<TooltipContent>
										<p>{service.bookings || 0} personas reservaron este servicio</p>
									</TooltipContent>
								</Tooltip>
							</TooltipProvider> */}
						</div>
					) : null}

					{/* Removed duration, sessions and zones for cleaner card */}
				</div>

				{/* Price block */}
				<div className='flex flex-col mt-2 gap-1.5'>
					<div className='flex items-baseline gap-2'>
						<span className='text-lg font-bold text-primary-700'> {formatPrice(currentPrice)}</span>
						{hasPromo && <span className='text-xs text-gray-500 line-through'> {formatPrice(basePrice)}</span>}
					</div>
					{/* <div className='flex flex-wrap items-center gap-x-2 gap-y-1 text-xs text-gray-500'>10% OFF en fectivo</div> */}
				</div>
			</CardContent>
		</Card>
	);
}
