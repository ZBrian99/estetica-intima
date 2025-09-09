'use client';
import Link from 'next/link';
import { useServices } from '@/hooks/useServices';
import LoadingSpinner from './common/LoadingSpinner';
import ServiceCard from './services/ServiceCard';

const Populares = () => {
	// Obtener los primeros 10 servicios del servidor
	const { services, isLoading, error } = useServices({ isFeatured: true });

	if (isLoading) {
		return (
			<section className='py-16 bg-white'>
				<div className='max-w-7xl mx-auto px-4'>
					<div className='text-center mb-12'>
						<h2 className='text-3xl md:text-4xl font-bold text-gray-900 mb-4'>Tratamientos Destacados</h2>
					</div>
					<div className='flex justify-center'>
						<LoadingSpinner />
					</div>
				</div>
			</section>
		);
	}

	if (error) {
		return (
			<section className='py-16 bg-white'>
				<div className='max-w-7xl mx-auto px-4'>
					<div className='text-center mb-12'>
						<h2 className='text-3xl md:text-4xl font-bold text-gray-900 mb-4'>Tratamientos Más Populares</h2>
					</div>
					<div className='text-center text-gray-600'>
						<p>Error al cargar los servicios. Intenta nuevamente más tarde.</p>
					</div>
				</div>
			</section>
		);
	}

	return (
		<section className='py-16 bg-white'>
			<div className='max-w-7xl mx-auto px-4'>
				{/* Header */}
				<div className='text-center mb-12'>
					<h2 className='text-3xl md:text-4xl font-bold text-gray-900 mb-4'>Tratamientos Más Populares</h2>
					<p className='text-lg text-gray-600 max-w-2xl mx-auto mb-8'>
						Descubrí los tratamientos favoritos de nuestros clientes, con resultados comprobados y la mejor tecnología
					</p>
				</div>

				{/* Services Grid */}
				<div className='grid us:grid-cols-2 sm:grid-cols-3 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-4'>
					{services?.slice(0, 8).map((service) => (
						<ServiceCard key={service.id} service={service} />
					))}
				</div>

				{/* CTA Section */}
				<div className='text-center mt-12'>
					<Link
						href='/servicios'
						className='inline-flex items-center px-8 py-4 bg-gradient-to-r from-purple-600 to-primary-600 text-white font-semibold rounded-full hover:from-purple-700 hover:to-primary-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105'
					>
						Ver Todos los Tratamientos
						<svg className='w-5 h-5 ml-2' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
							<path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M9 5l7 7-7 7' />
						</svg>
					</Link>
				</div>
			</div>
		</section>
	);
};

export default Populares;
