import Image from 'next/image';
import { FaClock, FaStar, FaStarHalfAlt, FaUsers, FaTags, FaAward, FaHashtag, FaRegStar } from 'react-icons/fa';
import { MdSpa } from 'react-icons/md';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { ServiceResponse } from '@/schemas/servicesSchema';
import { HiSparkles } from 'react-icons/hi2';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
import { calculateDiscount, formatPrice } from '@/lib/utils';
import ServiceCardButton from './ServiceCardButton';

export function ServiceCard({ service }: { service: ServiceResponse }) {
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

	return (
		<Card
			key={service.id}
			className='group  border border-primary-100 shadow-sm hover:shadow-xl hover:border-primary-200 transition-all duration-300 bg-white rounded-xl flex flex-col'
		>
			<div className='relative rounded-t-xl overflow-hidden'>
				<Image
					src={service.imageUrl || '/images/placeholder-service.webp'}
					alt={service.name}
					width={300}
					height={200}
					className='w-full h-32 sm:h-36 md:h-40 object-cover group-hover:scale-105 transition-transform duration-500'
				/>

				{/* Image overlay gradient */}
				<div className='absolute inset-0  bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300' />

				{/* Top left - Status badge */}

				{service.hasPromo ? (
					<Badge className='absolute top-2 right-2 z-10 bg-red-600 text-white border-0 text-xs px-3 py-1.5 shadow-lg font-semibold rounded-full flex items-center gap-1'>
						<FaTags className='w-3 h-3' />
						{calculateDiscount(service.basePrice, service.finalPrice)}% OFF
					</Badge>
				) : (
					service.isNew && (
						<Badge className='absolute top-2 right-2 z-10 bg-emerald-600  text-white border-0 text-xs px-3 py-1.5 shadow-lg font-semibold rounded-full flex items-center gap-1'>
							<HiSparkles className='w-3 h-3' />
							Nuevo
						</Badge>
					)
				)}
				{/* {service.isFeatured && (
					<Badge className='text-primary-600 hover:bg-primary-700 border-0 text-xs px-3 py-1.5 shadow-lg font-semibold rounded-full flex items-center gap-1'>
						<FaAward className='absolute top-2 left-2 z-10 w-4 h-4 md:w-5 md:h-5 text-primary-500' />
					</Badge>
				)} */}

				{/* Top right - Favorites button */}
				{/* <button
								onClick={() => toggleFavorite(service.id)}
								className='absolute top-2 right-2 p-2 md:p-2.5 bg-white/95 hover:bg-white rounded-full shadow-lg transition-all duration-200 opacity-0 group-hover:opacity-100 hover:scale-110 z-10'
							>
								{favorites.has(service.id) ? (
									<FaHeart className='w-4 h-4 text-red-500' />
								) : (
									<FaRegHeart className='w-4 h-4 text-gray-600' />
								)}
							</button> */}
			</div>

			<CardContent className='p-3 md:p-4 flex flex-col flex-1 '>
				{/* <div className=' flex flex-col gap-2 md:gap-2.5'> */}
				<div className=' flex flex-col gap-2 md:gap-2.5   mb-auto'>
					{/* <div> */}
					<h3 className='text-sm md:text-base font-semibold text-gray-900 line-clamp-2 group-hover:text-primary-700 transition-colors duration-200 leading-tight  '>
						{service.name}
					</h3>
					{/* </div> */}
					{service.rating > 4.8 ? (
						<div className='flex items-center justify-between gap-2 md:gap-3 overflow-hidden '>
							<div className='flex items-center gap-1'>
								<div className='flex items-center gap-px'>{renderStars(service.rating)}</div>
								<span className='text-xs text-gray-600 font-medium ml-1'>{service.rating}</span>
							</div>

							<TooltipProvider>
								<Tooltip>
									<TooltipTrigger asChild>
										<div className='flex items-center gap-1 text-xs text-gray-600'>
											<FaUsers className='w-3.5 h-3.5 text-primary-500' />
											<span>{service.bookings || 0}</span>
										</div>
									</TooltipTrigger>
									<TooltipContent>
										<p>{service.bookings || 0} personas han reservado este servicio</p>
									</TooltipContent>
								</Tooltip>
							</TooltipProvider>
						</div>
					) : (
						service.tags.length > 0 && (
							<div className='flex gap-1 overflow-hidden'>
								{service.tags.slice(0, 2).map((tag, index) => (
									<span
										key={index}
										className='text-xs text-primary-600 bg-primary-50 px-1.5 rounded-md whitespace-nowrap'
									>
										{tag}
									</span>
								))}
							</div>
						)
					)}

					<div className='flex items-center gap-2 md:gap-3 text-xs w-full mt-0.5 overflow-hidden'>
						{service.type !== 'PACK' && service.duration && (
							<TooltipProvider>
								<Tooltip>
									<TooltipTrigger asChild>
										<div className='flex items-center gap-1  text-gray-600 '>
											<FaClock className='w-3 h-3 text-primary-500' />
											<span className=''>{service.duration}</span>
											<span className=' hidden us:inline '>min</span>
										</div>
									</TooltipTrigger>
									<TooltipContent>
										<p>Duración aproximada del tratamiento</p>
									</TooltipContent>
								</Tooltip>
							</TooltipProvider>
						)}
						{service.bodyParts && service.bodyParts.length > 0 && (
							<TooltipProvider>
								<Tooltip>
									<TooltipTrigger asChild>
										<div className='flex items-center gap-1 text-gray-600 '>
											<MdSpa className='w-3.5 h-3.5 text-primary-500' />
											<span className=''>{service.bodyParts.length}</span>
											<span className=' hidden us:inline '>{service.bodyParts.length > 1 ? 'zonas' : 'zona'}</span>
										</div>
									</TooltipTrigger>
									<TooltipContent>
										<p>Zonas incluidas: {service.bodyParts.join(', ')}</p>
									</TooltipContent>
								</Tooltip>
							</TooltipProvider>
						)}
						{service.type === 'PACK' && service.sessions > 1 && (
							<TooltipProvider>
								<Tooltip>
									<TooltipTrigger asChild>
										<div className='flex items-center gap-1 text-gray-600 '>
											<FaHashtag className='w-3 h-3 text-primary-500' />
											<span className=''>{service.sessions}</span>
											<span className=' hidden us:inline '>sesiones</span>
										</div>
									</TooltipTrigger>
									<TooltipContent>
										<p>Número de sesiones incluidas en el pack</p>
									</TooltipContent>
								</Tooltip>
							</TooltipProvider>
						)}
					</div>
				</div>

				<div className='flex gap-2 flex-col border-t border-gray-300  mt-3 pt-2'>
					{/* <div className='pt-3 border-t border-gray-100 mt-auto bg-orange-700/20'> */}
					{service.hasPromo ? (
						<div className='flex flex-col gap-2'>
							<div className='flex flex-col us:flex-row us:items-center us:gap-2'>
								<span className='text-lg lg:text-lg font-bold text-primary-600'>{formatPrice(service.finalPrice)}</span>
								<span className='text-xs md:text-sm text-gray-500 line-through'>{formatPrice(service.basePrice)}</span>
							</div>
							{/* <span className='text-xs text-emerald-600 font-medium mt-0.5 sm:mt-0 whitespace-nowrap'>
											{calculateDiscount(service.basePrice, service.finalPrice)}% OFF
										</span> */}
							{/* {service.hasPromo && (
											<Badge className='bg-emerald-600 hover:bg-emerald-700 text-white border-0 text-xs px-2.5 py-1 shadow-lg font-semibold rounded-full flex items-center gap-1'>
												<FaTags className='w-3 h-3' />
												{calculateDiscount(service.basePrice, service.finalPrice)}% OFF
											</Badge>
										)} */}
							{/* <div className='text-xs text-emerald-600 font-medium'>
											Ahorrás {formatPrice(service.basePrice - service.finalPrice)}
										</div>
										{service.type === 'PACK' && service.sessions > 1 && (
											<div className='text-xs text-gray-500'>
												{formatPrice(Math.round(service.finalPrice / service.sessions))} por sesión
											</div>
										)} */}
						</div>
					) : (
						<div className='space-y-1'>
							<span className='text-lg lg:text-lg font-bold text-primary-600'>{formatPrice(service.basePrice)}</span>
							{/* {service.type === 'PACK' && service.sessions > 1 && (
											<div className='text-xs text-gray-500'>
												{formatPrice(Math.round(service.basePrice / service.sessions))} por sesión
											</div>
										)} */}
						</div>
					)}

					{/* <div className='mt-3 space-y-2'> */}
					{/* <Button
										variant='outline'
										className='w-full border-primary-200 text-primary-600 hover:bg-primary-50 text-sm py-2 rounded-lg transition-colors duration-200 flex items-center justify-center gap-2 bg-transparent'
                    >
										<FaShoppingCart className='w-4 h-4' />
										Agregar al carrito
                    </Button> */}
					{/* </div> */}
				</div>

				<ServiceCardButton service={service}>Reservar</ServiceCardButton>
			</CardContent>
		</Card>
	);
}
