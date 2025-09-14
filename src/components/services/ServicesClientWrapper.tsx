'use client';

import { useServices } from '@/hooks/useServices';
import ServicesList from './ServicesList';
import ServicesFilters from './ServicesFilters';
import { useFiltersStore } from '@/stores/filtersStore';
import GlobalPagination from '../GlobalPagination';
import LoadingSpinner from '../common/LoadingSpinner';
import { ServicesFiltersType } from '@/schemas/servicesSchema';
import { useEffect, useLayoutEffect, useRef, useState } from 'react';
import { useSearchParams } from 'next/navigation';
import { useFiltersSync } from '@/hooks/useFiltersSync';
import LoadingTopBar from '../common/LoadingTopBar';
// import SearchAndSortBar from './SearchAndSortBar';
// TODO: Mejorar logica, limpiar y reordenar componentes
const ServicesClientWrapper = ({ initialFilters }: { initialFilters: ServicesFiltersType }) => {
	const setFilter = useFiltersStore((state) => state.setFilter);
	// const [isFirstLoad2, setIsFirstLoad2] = useState(true);
	const { services, pagination, isLoading, error, isFetching } = useServices(initialFilters);
	// const { services, pagination, isLoading, error } = useServices(isFirstLoad2 ? initialFilters : filters);

	// useEffect(() => {
		// 	// console.log('initialFilters', initialFilters)
		// setFilters(initialFilters);
		// setIsFirstLoad2(false);
	// }, []);

	// useFiltersSync(initialFilters);

	// useEffect(() => {
	// 	const url = new URL(window.location.href);
	// 	// url.search = '';
	// 	// console.log(url);
	// 	// Update URL params based on filters
	// 	Object.entries(filters).forEach(([key, value]) => {
	// 		// if (value !== undefined && value !== null && value !== '' && value !== false) {
	// 			// if (Array.isArray(value)) {
	// 				// Handle array values like categories
	// 				// value
	// 					// .filter((v) => v !== undefined && v !== null && v !== '')
	// 					// .forEach((v) => url.searchParams.append(key, v.toString()));
	// 			// } else {
	// 				url.searchParams.set(key, value.toString());
	// 			// }
	// 		// }
	// 	});

	// 	// Shallow update - no causa re-render del servidor
	// 	window.history.replaceState({}, '', url.toString());
	// }, [filters]);

	const onPageChange = (number: number) => {
		setFilter(
			// ...filters,
			'page',
			number
		);

		window.scrollTo({
			top: 0,
			behavior: 'smooth',
		});
	};

	return (
		<main className='bg-primary-50 min-h-[calc(100vh-4rem)] flex flex-col gap-6  pb-26 md:pb-4 md:ml-64'>
			{/* {!isFirstLoad2 && <ServicesFilters initialFormValues={filters} />} */}
			<ServicesFilters initialFormValues={initialFilters} />
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
					{isFetching && (
						<div className='fixed top-0 left-0 right-0   z-50'>
							<LoadingTopBar />
						</div>
					)}
					<ServicesList services={services} />
					{pagination && <GlobalPagination pagination={pagination} onPageChange={onPageChange} />}
				</>
			)}
		</main>
	);
};
export default ServicesClientWrapper;
