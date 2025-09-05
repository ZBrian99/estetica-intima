'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { CreateService } from '@/schemas/serviceSchema';

export default function NewServicePage() {
	const [name, setName] = useState('');
	const [category, setCategory] = useState('Especial');
	const [price, setPrice] = useState(0);
	const router = useRouter();

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault();

		const data: CreateService = {
			name,
			price,
			category: 'CUIDADO',
		};

		await fetch('/api/services', {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify(data),
		});

		setName('');
		setCategory('CUIDADO');
		setPrice(0);
		router.push('/'); // volver al home
		router.refresh(); // refrescar datos del server
	};

	return (
		<form onSubmit={handleSubmit} style={{ padding: '2rem' }}>
			<input
				value={name}
				onChange={(e) => setName(e.target.value)}
				placeholder='Escribe un nombre'
				style={{ padding: '0.5rem', marginRight: '1rem' }}
			/>
			<input
				value={category}
				onChange={(e) => setCategory(e.target.value)}
				placeholder='Escribe una categoría'
				style={{ padding: '0.5rem', marginRight: '1rem' }}
			/>
			<input
				value={price}
				onChange={(e) => setPrice(Number(e.target.value))}
				placeholder='Escribe un precio'
				style={{ padding: '0.5rem', marginRight: '1rem' }}
			/>
			<button type='submit'>Crear</button>
		</form>
	);
}
