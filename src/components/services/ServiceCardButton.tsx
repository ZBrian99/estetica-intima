'use client';

import { MouseEvent, ReactNode } from 'react';
import { Button } from '../ui/button';
import { FaWhatsapp } from 'react-icons/fa';
import { ServiceResponse } from '@/schemas/servicesSchema';

const ServiceCardButton = ({ service, children }: { service: ServiceResponse; children: ReactNode }) => {
	const handleClick = (e: MouseEvent) => {
		e.stopPropagation();
		const message = `Hola! Me interesa reservar el servicio: ${service.name}`;
		const whatsappUrl = `https://wa.me/5492235507949?text=${encodeURIComponent(message)}`;
		window.open(whatsappUrl, '_blank');
	};

	return (
		<Button
			onClick={handleClick}
			className='w-full bg-primary-600 hover:bg-primary-700 text-white text-sm py-2 rounded-lg transition-colors duration-200 flex items-center justify-center gap-2 mt-3'
		>
			<FaWhatsapp className='w-4 h-4' />
			{children}
		</Button>
	);
};
export default ServiceCardButton;
