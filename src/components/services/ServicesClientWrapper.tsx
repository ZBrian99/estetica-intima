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
import FilterButton from './FilterButton';
import PillsBar from './PillsBar';
import { Button } from '@/components/ui/button';
import { FaBroom } from 'react-icons/fa';

// TODO: Mejorar logica, limpiar y reordenar componentes
// TODO: Pasar todo lo posible a ssr para seo

const ServicesClientWrapper = ({ initialFilters }: { initialFilters: ServicesFiltersType }) => {
	const setFilter = useFiltersStore((state) => state.setFilter);
	const clearFilters = useFiltersStore((s) => s.clearFilters);
	const { services, pagination, isLoading, error, isFetching } = useServices(initialFilters);

	const onPageChange = (number: number) => {
		setFilter('page', number);

		window.scrollTo({
			top: 0,
			behavior: 'smooth',
		});
	};

	return (
		<main className='min-h-[calc(100vh-4rem)] flex flex-col  pb-4 overflow-x-hidden'>
			{/* Header preview */}

			<div className='py-4 px-4 lg:px-6 md:ml-auto mt-[1px] w-full'>
				{/* Filtros y sort fijos + pills scroll interno */}
				<div className='flex flex-col md:flex-row gap-4'>
					<div className='flex items-center justify-between md:flex-row md:justify-end gap-3 flex-shrink-0'>
						<FilterButton />
						<ServicesSortFilter />
						{/* <Button
							variant='ghost'
							onClick={() => clearFilters()}
							className='h-9 px-3 rounded-lg text-muted-foreground hover:text-primary-700 hover:bg-primary-50 ml-auto'
						>
							<FaBroom className='h-4 w-4' aria-hidden='true' />
							<span className='text-sm'>Limpiar</span>
						</Button> */}
					</div>
					<div className='flex-1 min-w-0'>
						<div className='overflow-x-auto [scrollbar-width:none] [&::-webkit-scrollbar]:hidden -mx-2 px-2'>
							<PillsBar />
						</div>
					</div>
				</div>

				{/* Sheet de filtros montado globalmente */}
				<ServicesFilters initialFormValues={initialFilters} />
			</div>
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
