'use client';

import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { useFiltersStore } from '@/stores/filtersStore';
import { SORT_OPTIONS } from '@/lib/constants';
import { FaSortAmountDown } from 'react-icons/fa';
import { SortType } from '@/schemas/servicesSchema';

const ServicesSortFilter = () => {
	const sort = useFiltersStore((s) => s.filters.sort);
	const setFilter = useFiltersStore((s) => s.setFilter);

	return (
		<div className='flex items-center gap-2'>
			<Select value={sort ?? undefined} onValueChange={(v) => setFilter('sort', v as SortType)} >
				<SelectTrigger className='h-9 w-[190px] rounded-full px-3 py-0 shadow-sm hover:shadow-md border-none ' >
					<div className='inline-flex items-center gap-2'>
						<FaSortAmountDown className='h-4 w-4 text-sky-600' aria-hidden='true' />
						<SelectValue placeholder='Ordenar por'/>
					</div>
				</SelectTrigger>
				<SelectContent className='bg-white'>
					{SORT_OPTIONS.map((opt) => (
						<SelectItem key={opt.value} value={opt.value}>
							{opt.label}
						</SelectItem>
					))}
				</SelectContent>
			</Select>
		</div>
	);
};

export default ServicesSortFilter;
