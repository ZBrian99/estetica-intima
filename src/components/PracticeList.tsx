'use client';

import { useEffect, useState } from 'react';
import { fetchServices } from '@/services/client/servicesService';
import { useQuery, useQueryClient } from '@tanstack/react-query';
import { useRouter, useSearchParams } from 'next/navigation';

const PracticeList = () => {
	const router = useRouter();
	const searchParams = useSearchParams();

	const page = Number(searchParams.get('page') || 1);
	const limit = Number(searchParams.get('limit') || 10);

	const [filters, setFilters] = useState<{
		page: number;
		limit: number;
	}>({ page, limit });
	const queryClient = useQueryClient();

	const { data, isLoading, isFetching } = useQuery({
		queryKey: ['services', filters],
		queryFn: () => fetchServices(filters),
		// Los datos ya están hidratados desde el servidor para limit=10
		// Para otros límites, se hará fetch normalmente
		staleTime: 600 * 1000, // 1 minuto - mismo que en el servidor
	});
	const handleInvalidate = () => {
		queryClient.invalidateQueries({ queryKey: ['services'] });
	};


	// const num = usePruebaStore((s) => s.num);
	// const { num, increaseNum, resetNum } = usePruebaStore(
	// 	useShallow((s) => ({
	// 		num: s.num,
	// 		increaseNum: s.increaseNum,
	// 		resetNum: s.resetNum,
	// 	}))
	// );

	// const increaseNum = usePruebaStore((s) => s.increaseNum);

	// if (isLoading)
	// 	return (
	// 		<div>
	// 			<h1>Loading...</h1>
	// 		</div>
	// 	);

	// if (error)
	// 	return (
	// 		<div>
	// 			<h1>Error</h1>
	// 		</div>
	// 	);

	// if (!services || services.length === 0)
	// 	return (
	// 		<div>
	// 			<h1>No se encontraron servicios</h1>
	// 		</div>
	// 	);

	return (
		<div className='w-full max-w-7xl mx-auto p-4'>
			{/* <Filters /> */}
			<input
				type='number'
				placeholder='Pagina'
				min={1}
				max={100}
				value={filters?.page || ''}
				onChange={(e) => setFilters((prev) => ({ ...prev, page: Number(e.target.value) }))}
				className='border rounded p-2'
			/>
			<input
				type='number'
				placeholder='Items por pagina'
				min={1}
				max={100}
				value={filters?.limit || ''}
				onChange={(e) => setFilters((prev) => ({ ...prev, limit: Number(e.target.value) }))}
				className='border rounded p-2'
			/>
			<button onClick={handleInvalidate} className='border rounded p-2'>
				Invalidate Services
			</button>
			<div className='grid us:grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4'>
				{isLoading || isFetching ? (
					<div>Loading...</div>
				) : (
					data?.data &&
					data.data.map((item) => (
						<div
							key={item.id}
							className='h-60 bg-gray-700 border rounded-xl overflow-hidden flex justify-center items-center'
						>
							{item.name}
						</div>
					))
				)}
			</div>
			{/* {pagination && <GlobalPagination pagination={pagination} onPageChange={() => {}} />} */}
		</div>
	);
};
export default PracticeList;
