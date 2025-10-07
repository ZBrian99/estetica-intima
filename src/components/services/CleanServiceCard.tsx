'use client';

import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ServiceResponse } from '@/schemas/servicesSchema';
import { useCartStore } from '@/stores/cartStore';
import { useSetCartOpen } from '@/stores/uiStore';
import { formatPrice, calculateDiscount } from '@/lib/utils';
import { FaShoppingCart, FaCheck, FaStar, FaRegStar, FaStarHalfAlt, FaUsers } from 'react-icons/fa';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '../ui/tooltip';
import { FiShoppingCart } from 'react-icons/fi';

export default function CleanServiceCard({ service }: { service: ServiceResponse }) {
	const router = useRouter();
	const addItem = useCartStore((s) => s.addItem);
	const setCartOpen = useSetCartOpen();
	const [added, setAdded] = useState(false);

	const hasPromo = !!service.hasPromo;
	const basePrice = service.basePrice;
	const currentPrice = hasPromo ? service.finalPrice : basePrice;
	const cashPrice = Math.round(currentPrice * 0.9);
	const discountPct = hasPromo ? calculateDiscount(basePrice, currentPrice) : 0;
	const hasRating = (service.rating ?? 0) > 3.5;
	const roundedRating = Math.round(service.rating ?? 0);

	const toDetails = () => router.push(`/servicios/${service.id}`);
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
	const handleAdd = (e?: React.MouseEvent) => {
		if (e) e.stopPropagation();
		addItem(service);
		setCartOpen(true);
		setAdded(true);
		setTimeout(() => setAdded(false), 900);
	};

	return (
		<Card
			className='group rounded-2xl shadow-sm md:shadow-md  bg-white hover:shadow-lg transition-all duration-300 overflow-hidden cursor-pointer pb-2'
			onClick={toDetails}
		>
			{/* Media */}
			<div className='relative '>
				<Image
					src={service.imageUrl || '/images/placeholder-service.webp'}
					alt={service.name}
					width={480}
					height={360}
					className='w-full h-36 xs:h-48 lg:h-52 object-cover'
				/>

				{/* Add-to-cart floating button */}
				<Button
					variant='ghost'
					className='absolute ml:hidden bottom-3 right-3 h-10 w-10 rounded-xl p-0 grid place-items-center bg-primary-500 hover:bg-primary-600 shadow-xl'
					onClick={handleAdd}
					aria-label='Agregar al carrito'
				>
					{added ? <FaCheck className='h-4 w-4 text-white' /> : <FiShoppingCart className='h-4 w-4 text-white' />}
				</Button>

				{/* <Button
					variant='default'
					className='absolute bottom-3 right-3 h-10 w-10 rounded-full p-0 grid place-items-center bg-primary-600 hover:bg-primary-700 shadow-xl'
					onClick={handleAdd}
					aria-label='Agregar al carrito'
				>
					{added ? <FaCheck className='h-4 w-4 text-white' /> : <FaShoppingCart className='h-4 w-4 text-white' />}
				</Button> */}
			</div>

			<CardContent className='p-3.5 md:p-4 flex flex-col h-full'>
				{/* Title */}
				<h3 className='text-sm md:text-base font-semibold text-gray-900 line-clamp-2 group-hover:text-primary-700 transition-colors'>
					{service.name}
				</h3>

				{/* Rating (hidden if no reviews) */}

				{hasRating ? (
					<div className='flex items-center mt-1.5  justify-between gap-2 md:gap-3 overflow-hidden'>
						<div className='flex items-center gap-1'>
							<div className='flex items-center gap-1'>{renderStars(service.rating)}</div>
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
				<div className='px-0 flex justify-between items-end mt-auto'>
					{/* Price row */}
					<div>
						<div className=' flex items-baseline gap-2 mt-auto'>
							<span className='mt-2  text-lg xs:text-xl font-bold text-primary-500'>{formatPrice(currentPrice)}</span>
							{hasPromo && (
								<>
									<span className='mt-2 text-xs sm:text-sm text-gray-500 line-through'>{formatPrice(basePrice)}</span>
								</>
							)}
						</div>

						{/* Cash hint */}
						{/* <div className='mt-1 text-xs md:text-sm text-emerald-700 flex w-full justify-between items-end'>
							Efectivo {formatPrice(cashPrice)}
						</div> */}
					</div>
					<Button
						variant='default'
						className=' bottom-3 hidden ml:grid right-3 h-10 w-10 rounded-xl p-0  place-items-center bg-primary-500 hover:bg-primary-600 shadow-xl'
						onClick={handleAdd}
						aria-label='Agregar al carrito'
					>
						{added ? <FaCheck className='h-4 w-4 text-white' /> : <FiShoppingCart className='h-4 w-4 text-white' />}
					</Button>
				</div>
			</CardContent>
		</Card>
	);
}
