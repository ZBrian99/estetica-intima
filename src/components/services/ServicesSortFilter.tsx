'use client';

import { useFiltersStore } from '@/stores/filtersStore';
import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { memo, useEffect, useState } from 'react';
import { SORT_OPTIONS } from '@/data/servicesData';
import { SortType } from '@/schemas/servicesSchema';

const ServicesSortFilter = ({ initialSort = 'relevance' }: { initialSort?: SortType }) => {
	const setFilter = useFiltersStore((state) => state.setFilter);
	const sort = useFiltersStore((state) => state.filters.sort);
	const [isFirstLoad, setIsFirstLoad] = useState(true);

	useEffect(() => {
		setIsFirstLoad(false);
		setFilter('sort', initialSort);
	}, []);

	return (
		<div className='flex items-center '>
			<span className='text-gray-800 text-sm'>Ordenar por:</span>
			<Select
				value={isFirstLoad ? undefined : sort ? sort : initialSort}
				onValueChange={(value: SortType) => setFilter('sort', value)}
			>
				<SelectTrigger className=' border-none focus:border-none  focus:outline-none outline-none selection:outline-none text-sm font-medium focus-visible:outline-none focus-visible:border-none focus-visible:shadow-none focus-visible:ring-0 text-gray-700 hover:text-primary shadow-none pr-0 py-0'>
					<SelectValue placeholder={SORT_OPTIONS.find((option) => option.value === initialSort)?.label} />
				</SelectTrigger>
				<SelectContent>
					<SelectGroup>
						{SORT_OPTIONS.map((option) => (
							<SelectItem key={option.value} value={option.value} className='focus:bg-primary-100 cursor-pointer '>
								{option.label}
							</SelectItem>
						))}
					</SelectGroup>
				</SelectContent>
			</Select>
		</div>
	);
};

export default memo(ServicesSortFilter);
