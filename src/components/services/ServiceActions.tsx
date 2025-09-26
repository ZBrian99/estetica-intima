'use client';

import { Button } from '@/components/ui/button';
import { ServiceResponse } from '@/schemas/servicesSchema';
import { useCartStore } from '@/stores/cartStore';
import { useSetCartOpen } from '@/stores/uiStore';
import { useState } from 'react';
import { FaWhatsapp, FaCartPlus } from 'react-icons/fa6';

export default function ServiceActions({ service }: { service: ServiceResponse }) {
	const setCartOpen = useSetCartOpen();
	const addItem = useCartStore((s) => s.addItem);
	const [added, setAdded] = useState(false);

  
	const handleAdd = () => {
		addItem(service);
		setCartOpen(true);
		setAdded(true);
		setTimeout(() => setAdded(false), 2000);
	};


	return (
		<div className='flex items-center gap-3'>
			<Button
				onClick={handleAdd}
				className='rounded-full h-10 px-5 bg-primary-600 bg-gradient-to-r from-primary-600 to-purple-600 text-white hover:from-primary-700 hover:to-purple-700'
			>
				<FaCartPlus className='h-4 w-4 mr-2' /> {added ? 'Agregado!' : 'Agregar al carrito'}
			</Button>
			<Button
				variant='outline'
				className='rounded-full h-10 px-5 text-green-700 border-green-200 hover:bg-green-50'
				asChild
			>
				<a
					href={`https://wa.me/5491141414141?text=${encodeURIComponent(
						'Hola! Me interesa el servicio: ' + service.name
					)}`}
					target='_blank'
					rel='noopener noreferrer'
				>
					<FaWhatsapp className='h-4 w-4 mr-2' /> Reservar por WhatsApp
				</a>
			</Button>
		</div>
	);
}
