'use client';

import { useServices } from '@/hooks/useServices';
import ServicesList from './ServicesList';
import ServicesFilters from './ServicesFilters';
import { useFiltersStore } from '@/stores/filtersStore';
import GlobalPagination from '../GlobalPagination';
import LoadingSpinner from '../common/LoadingSpinner';
import { ServicesFiltersType } from '@/schemas/servicesSchema';
import LoadingTopBar from '../common/LoadingTopBar';
import ServicesSortFilter from './ServicesSortFilter';

// TODO: Mejorar logica, limpiar y reordenar componentes
// TODO: Pasar todo lo posible a ssr para seo

const ServicesClientWrapper = ({ initialFilters }: { initialFilters: ServicesFiltersType }) => {
	const setFilter = useFiltersStore((state) => state.setFilter);
	const { services, pagination, isLoading, error, isFetching } = useServices(initialFilters);

	const onPageChange = (number: number) => {
		setFilter('page', number);

		window.scrollTo({
			top: 0,
			behavior: 'smooth',
		});
	};

	return (
		<main className='bg-primary-50 min-h-[calc(100vh-4rem)] flex flex-col  pb-4 md:ml-64'>
			{/* {!isFirstLoad2 && <ServicesFilters initialFormValues={filters} />} */}
			<div className='py-4 flex px-4 md:ml-auto justify-between items-center mt-[1px] gap-2 flex-wrap us:flex-nowrap'>
				<ServicesFilters initialFormValues={initialFilters} />
				<ServicesSortFilter initialSort={initialFilters.sort ?? 'relevance'} />
			</div>
			{/* <div className='px-4 pt-6'>
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
