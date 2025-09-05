'use client';

import { ServiceResponse } from '@/types/types';
import { keepPreviousData, useQuery } from '@tanstack/react-query';
import { LimitSelect } from './LimitSelector';
import { Pagination } from './Pagination';
import { useFiltersStore } from '../hooks/filtersStore';
import { useEffect, useState } from 'react';
import { IsFetchingComponent, IsLoaderComponent } from './Extras';
import { useRouter, useSearchParams } from 'next/navigation';
import { getServiciosAction } from '@/actions/services';

// import { useQuery } from '@tanstack/react-query';
// import { LimitSelect } from './LimitSelector';
// import { Pagination } from './Pagination';
// import { fetchServicesCLIENTE } from '../lib/fetchServices';

interface ServicesListProps {
	params: {
		page: number;
		limit: number;
	};
}
// si hay initial data es por que son paginas ya con cache del servidor que no tiene sentido solicitar con usequery haciendo otro fetch, por lo que se debe gestionar de otra manera
export const ServicesList = ({ params }: ServicesListProps) => {
	// export const ServicesList = ({ initialData }: { initialData: ServiceResponse }) => {
	// const filters = useFiltersStore((state) => state.filters);
	const [filters, setFilters] = useState<{
		page: number;
		limit: number;
	}>(params);
  const router = useRouter();
	const searchParams = useSearchParams();
	// const { data, isLoading } = useQuery({
	// 	queryKey: ['services', filters],
	// 	queryFn: () => fetchServicesCLIENTE(filters),
	//   initialData,
	//   staleTime: 100,

	// });

	const { data, isLoading, isFetching } = useQuery({
		queryKey: ['services', filters],
		queryFn: () => getServiciosAction(filters),


		// placeholderData: keepPreviousData,
	});

	useEffect(() => {
		console.log('Filtros actualziados: ', filters);
	}, [filters]);
	const handlePageChange = (page: number) => {
		console.log(page);
		setFilters({
			...filters,
			page,
    });
    

    const url = new URL(window.location.href);
		url.searchParams.set('page', page.toString());
		url.searchParams.set('limit', filters.limit.toString());

		// Shallow update - no causa re-render del servidor
		window.history.replaceState({}, '', url.toString());
		// const params = new URLSearchParams(searchParams.toString());
		// Object.entries({ ...filters, page }).forEach(([k, v]) => {
		// 	params.set(k, String(v));
		// });

		// router.replace(`?${params.toString()}`);
	};

	const handleLimitChange = (limit: number) => {
		console.log(limit);
		setFilters({
			...filters,
			limit,
			page: 1,
		});

		// Actualizar URL sin causar SSR
			
	const url = new URL(window.location.href);
	url.searchParams.set('limit', limit.toString());
	url.searchParams.set('page', '1');

	window.history.replaceState({}, '', url.toString());
		// const params = new URLSearchParams(searchParams.toString());
		// params.set('limit', limit.toString());
		// params.set('page', '1');
		// router.replace(`?${params.toString()}`);
	};

	if (isLoading) return <IsLoaderComponent />;

	if (!data) return <div>Error loading services</div>;
	if (!data.data) return <div>Error loading services</div>;
	if (!data.pagination) return <div>Error loading services</div>;
	return (
		<div className='container mx-auto gap-4 flex flex-col'>
			<ul className='grid grid-cols-4 gap-4'>
				{data.data.map((service) => (
					<li key={service.id} className='bg-slate-700 min-h-24 p-4 rounded-md flex justify-center items-center'>
						<span>{service.name}</span>
					</li>
				))}
				{/* {isFetching && <IsFetchingComponent />} */}
			</ul>
			<div className='flex justify-between items-center gap-4'>
				<LimitSelect handleLimitChange={handleLimitChange} />

				{data.pagination && <Pagination totalPages={data.pagination.totalPages} handlePageChange={handlePageChange} />}
			</div>
		</div>
	);

	// const { data, isLoading } = useQuery({ queryKey: ['services'], queryFn: () => fetchServicesCLIENTE() });
	// if (isLoading) return <div>Loading...</div>;
	// if (!data) return <div>Error</div>;
	// if (!data.data) return <div>Error</div>;
	// if (!data.pagination) return <div>Error</div>;

	// return (
	// <>
	{
		/* <div>SERVICES</div> */
	}
	{
		/* <LimitSelect />
			<ul className='grid grid-cols-4 gap-4'>
				{data.data &&
					data.data.map((service) => (
						<li key={service.id} className='bg-slate-700 min-h-24 p-4 rounded-md flex justify-center items-center'>
							<span>{service.name}</span>
						</li>
					))}
			</ul>
			<div className='flex justify-between items-center m-4'>
				{data.pagination && <Pagination totalPages={data.pagination.totalPages} />}
			</div> */
	}
	// </>
	// );
};
export default ServicesList;
