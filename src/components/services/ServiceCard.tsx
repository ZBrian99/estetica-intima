'use client';

import { useState } from 'react';
import { ServiceResponse } from '@/schemas/servicesSchema';
import { FaWhatsapp } from 'react-icons/fa';
import { HiFire, HiSparkles } from 'react-icons/hi2';
import { formatPrice } from '@/lib/utils';

const ServiceCard = ({ service }: { service: ServiceResponse }) => {
	const [isReserving, setIsReserving] = useState(false);

	const handleReserve = async (e: React.MouseEvent) => {
		e.stopPropagation();
		setIsReserving(true);
		// Simular reserva
		// await new Promise((resolve) => setTimeout(resolve, 1000));
		setIsReserving(false);
		// Aquí iría la lógica de WhatsApp
		const message = `Hola! Me interesa reservar el servicio: ${service.name}`;
		const whatsappUrl = `https://wa.me/5492235507949?text=${encodeURIComponent(message)}`;
		window.open(whatsappUrl, '_blank');
	};

	const handleServiceClick = () => {
		console.log(`Navegando al detalle del servicio: ${service.id}`);

		// En una app real: router.push(`/servicios/${service.id}`);
	};

	// Determinar si tiene precio promocional
	// const hasPromoPrice = service.promoPrice && service.promoPrice < service.price;

	return (
		<div className='bg-white rounded-xl border border-gray-200 overflow-hidden shadow-sm hover:border-gray-300 hover:shadow-lg transition-all duration-300 group cursor-pointer flex flex-col relative'>
			{/* Imagen del servicio */}
			<div className='relative h-32 sm:h-40 overflow-hidden'>
				{service.imageUrl ? (
					<img
						src={service.imageUrl}
						alt={service.name}
						className='w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-300'
						onError={(e) => {
							const target = e.target as HTMLImageElement;
							target.src = '/images/placeholder-service.webp';
						}}
					/>
				) : (
					<div className='w-full h-full bg-gradient-to-br from-primary-100 to-primary-200 flex items-center justify-center'>
						<span className='text-primary-600 text-sm font-medium'>Sin imagen</span>
					</div>
				)}

				{service.hasPromo ? (
					<div className='absolute top-3 left-3 bg-gradient-to-r from-red-500 to-red-600 text-white px-2.5 py-1 rounded-full text-xs font-bold shadow-lg'>
						{Math.round(((service.basePrice - service.finalPrice!) / service.basePrice) * 100)}% OFF
					</div>
				) : service.isPopular ? (
					<div className='absolute top-3 left-3 bg-gradient-to-r from-amber-400 via-orange-500 to-amber-600 bg-opacity-95 backdrop-blur-sm text-white px-2.5 py-1 rounded-full text-xs font-semibold flex items-center gap-1 shadow-lg'>
						<HiFire size={14} className='drop-shadow-sm' />
						Popular
					</div>
				) : service.isNew ? (
					<div className='absolute top-3 left-3 bg-gradient-to-r from-emerald-400 via-green-500 to-emerald-600 bg-opacity-95 backdrop-blur-sm text-white px-2.5 py-1 rounded-full text-xs font-semibold flex items-center gap-1 shadow-lg'>
						<HiSparkles size={14} className='drop-shadow-sm' />
						Nuevo
					</div>
				) : (
					''
				)}
			</div>

			{/* Contenido */}
			<div className='p-4 flex flex-col flex-grow space-y-3'>
				{/* Título */}
				<h3 className='font-semibold text-gray-900 line-clamp-2 text-sm sm:text-base leading-tight group-hover:text-primary-600 transition-colors'>
					{service.name}
				</h3>

				{/* Descripción */}
				{service.description && (
					<p className='text-xs sm:text-sm text-gray-600 line-clamp-2 leading-relaxed'>{service.description}</p>
				)}

				{/* Precio */}
				<div className='flex items-center gap-2 mt-auto'>
					{service.hasPromo ? (
						<div className='flex items-center gap-2'>
							<span className='text-lg sm:text-xl font-bold text-red-600'>{formatPrice(service.finalPrice!)}</span>
							<span className='text-sm text-gray-400 line-through'>{formatPrice(service.basePrice)}</span>
						</div>
					) : (
						<span className='text-lg sm:text-xl font-bold text-primary-600'>{formatPrice(service.basePrice)}</span>
					)}
				</div>

				{/* Botón de reservar */}
				<button
					onClick={handleReserve}
					disabled={isReserving}
					className='bg-primary-600 hover:bg-primary-700 disabled:bg-primary-400 text-white px-4 py-2.5 rounded-lg text-sm font-medium transition-colors disabled:cursor-not-allowed w-full flex items-center justify-center gap-2'
				>
					{isReserving ? (
						<div className='w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin'></div>
					) : (
						<>
							<FaWhatsapp size={16} />
							Reservar
						</>
					)}
				</button>
			</div>
		</div>
	);
};

export default ServiceCard;
