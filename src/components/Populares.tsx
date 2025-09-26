import Link from 'next/link';
// import { useServices } from '@/hooks/useServices';
// import LoadingSpinner from './common/LoadingSpinner';
import { ServiceCard } from './services/ServiceCard';
import { ServiceResponse } from '@/schemas/servicesSchema';
import { buildSort, getSelectFields } from '@/services/api/servicesService';
import { prisma } from '@/lib/prisma';
import CleanServiceCard from './services/CleanServiceCard';

// Forzar renderizado dinámico en el servidor (SSR) y sin caché para evitar SSG en build
export const revalidate = 0;
export const dynamic = 'force-dynamic';

const Populares = async () => {
	const select = getSelectFields(false);

	// SSR directo con Prisma evitando llamadas a la API interna
	const response = await prisma.service.findMany({
		select,
		skip: 0,
		take: 10,
		where: { isActive: true, rating: { gte: 1 } },
		orderBy: buildSort('relevance'),
	});

	const services = response as unknown as ServiceResponse[];
	return (
		<section className='py-16 bg-primary-50'>
			<div className='max-w-7xl mx-auto px-4'>
				{/* Header */}
				<div className='text-center mb-12'>
					<h2 className='text-3xl md:text-4xl font-bold text-gray-900 mb-2'>Los más populares</h2>
					<p className='text-sm md:text-base text-gray-600 max-w-2xl mx-auto mb-6'>
						Tratamientos elegidos por nuestras clientas
					</p>
				</div>

				{/* Services Grid */}
				<div className='grid us:grid-cols-2 sm:grid-cols-3 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-4'>
					{services.slice(0, 8).map((service) => (
						<CleanServiceCard key={service.id} service={service} />
					))}
				</div>

				{/* CTA Section */}
				<div className='text-center mt-12'>
					<Link
						href='/servicios'
						className='inline-flex items-center px-8 py-4 bg-gradient-to-r from-purple-600 to-primary-600 text-white font-semibold rounded-full hover:from-purple-700 hover:to-primary-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105'
					>
						Ver todos los tratamientos
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
