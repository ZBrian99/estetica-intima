'use client';

import { useServices } from '@/hooks/useServices';
import ServicesList from './ServicesList';
import ServicesFilters from './ServicesFilters';
import { useFiltersStore } from '@/stores/filtersStore';
import GlobalPagination from '../GlobalPagination';
import LoadingSpinner from '../common/LoadingSpinner';
import EmptyState from '../common/EmptyState';

const ServicesClientWrapper = () => {
	const setFilters = useFiltersStore((state) => state.setFilters);
	const filters = useFiltersStore((state) => state.filters);
	const { services, pagination, isLoading, error } = useServices(filters);

	// useEffect(() => {
	// 	setFilters(initialFilters);
	// }, []);

	// useEffect(() => {
	// 	const url = new URL(window.location.href);

	// 	// Update URL params based on filters
	// 	Object.entries(filters).forEach(([key, value]) => {
	// 		if (value !== undefined && value !== '') {
	// 			if (Array.isArray(value)) {
	// 				// Handle array values like categories
	// 				value.forEach((v) => url.searchParams.append(key, v.toString()));
	// 			} else {
	// 				url.searchParams.set(key, value.toString());
	// 			}
	// 		}
	// 	});

	// 	// Shallow update - no causa re-render del servidor
	// 	window.history.replaceState({}, '', url.toString());
	// }, [filters]);

	const onPageChange = (number: number) => {
		setFilters({
			...filters,
			page: number,
		});

		window.scrollTo({
			top: 0,
			behavior: 'smooth',
		});
	};

	return (
		<div className='bg-primary-50 min-h-[calc(100vh-4rem)]'>
			{/* Filtros - Solo estos están fijos */}
			<div className='md:fixed md:left-0 md:top-16 md:w-64 md:h-[calc(100vh-4rem)] md:z-10 '>
				<ServicesFilters initialFormValues={filters} />
			</div>
			{/* Contenido principal - Scroll normal de la página */}
			<div className='md:ml-64 min-h-[calc(100vh-4rem)] flex flex-col p-4 xs:p-6 gap-4 xs:gap-6   '>
				{isLoading ? (
					<div className='flex items-center justify-center min-h-[400px]'>
						<LoadingSpinner size='lg' />
					</div>
				) : error ? (
					<EmptyState
						type='error'
						description={error.message || 'Hubo un problema al cargar los servicios. Por favor, intenta nuevamente.'}
						actionLabel='Reintentar'
						onAction={() => window.location.reload()}
						className='min-h-[400px]'
					/>
				) : services && services.length === 0 ? (
					<EmptyState type='no-results' className='min-h-[400px]' />
				) : (
					<>
						<ServicesList services={services} />
						{pagination && (
							<div className='mt-auto'>
								<GlobalPagination pagination={pagination} onPageChange={onPageChange} />
							</div>
						)}
					</>
				)}
			</div>
		</div>
	);
};
export default ServicesClientWrapper;
