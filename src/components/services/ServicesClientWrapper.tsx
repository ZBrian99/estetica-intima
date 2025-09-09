'use client';

import { useServices } from '@/hooks/useServices';
import ServicesList from './ServicesList';
import ServicesFilters from './ServicesFilters';
import { useFiltersStore } from '@/stores/filtersStore';
import GlobalPagination from '../GlobalPagination';
import LoadingSpinner from '../common/LoadingSpinner';
// import LoadingTopBar from '../common/LoadingTopBar';
// import SearchAndSortBar from './SearchAndSortBar';

const ServicesClientWrapper = () => {
	const setFilters = useFiltersStore((state) => state.setFilters);
	const filters = useFiltersStore((state) => state.filters);
	const { services, pagination, isLoading, error, isFetching } = useServices(filters);

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
		<main className='bg-primary-50 min-h-[calc(100vh-4rem)] flex flex-col gap-6  pb-26 md:pb-4 md:ml-64'>
			<ServicesFilters initialFormValues={filters} />
			{/* <div className='px-4 pt-6'>
				<SearchAndSortBar />
			</div> */}
			{isLoading ? (
				<div className='flex justify-center items-center grow'>
					<LoadingSpinner />
				</div>
			) : error ? (
				<div className='flex justify-center items-center grow'>
					<h1>Ocurrió un error</h1>
				</div>
			) : services && services.length === 0 ? (
				<div className='flex justify-center items-center grow'>
					<h1>No se encontraron servicios</h1>
				</div>
			) : (
				<>
					{/* {isFetching && (
						<div className='fixed top-0 left-0 right-0   z-50'>
							<LoadingTopBar />
						</div>
					)} */}
					<ServicesList services={services} />
					{pagination && <GlobalPagination pagination={pagination} onPageChange={onPageChange} />}
				</>
			)}
		</main>
	);
};
export default ServicesClientWrapper;
