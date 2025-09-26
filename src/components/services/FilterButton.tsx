'use client';

import { Button } from '@/components/ui/button';
import { useToggleFilters } from '@/stores/uiStore';
import { useFiltersStore } from '@/stores/filtersStore';
import { useMemo } from 'react';
import { FaFilter } from 'react-icons/fa';

type Filters = ReturnType<typeof useFiltersStore.getState>['filters'];

function countActiveFilters(filters?: Filters) {
	if (!filters) return 0;
	let count = 0;
	for (const [key, value] of Object.entries(filters)) {
		if (key === 'page' || key === 'limit' || key === 'sort' || key === 'search') continue;
		if (value === undefined || value === null) continue;
		if (typeof value === 'string' && value.trim() === '') continue;
		if (Array.isArray(value) && value.length === 0) continue;
		if (typeof value === 'boolean' && value === false) continue;
		count++;
	}
	return count;
}

const FilterButton = () => {
	const toggleFilters = useToggleFilters();
	const filters = useFiltersStore((s) => s.filters);

	const activeCount = useMemo(() => countActiveFilters(filters), [filters]);

	return (
		<Button
			variant='ghost'
			onClick={() => toggleFilters()}
			className='h-9 rounded-full px-3 py-0 shadow-sm hover:shadow-md  inline-flex items-center gap-2'
		>
			<FaFilter className='h-4 w-4 text-purple-600' aria-hidden='true' />
			<span className='text-sm'>Filtros</span>
			{/* Counter bubble: always rendered to avoid layout shift */}
			<span
				className={
					'ml-1 inline-flex items-center justify-center rounded-full text-[11px] h-5 min-w-5 px-1 transition-colors ' +
					(activeCount > 0
						? 'bg-purple-600 text-white'
						: 'bg-transparent text-transparent opacity-0')
				}
				aria-hidden={activeCount === 0}
			>
				{activeCount > 0 ? activeCount : ''}
			</span>
		</Button>
	);
};

export default FilterButton;