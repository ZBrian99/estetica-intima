'use client';

import { useSearchParams } from 'next/navigation';
import { useEffect } from 'react';
import { useFiltersStore } from '../hooks/filtersStore';

export const FiltersInitializer = () => {
	const searchParams = useSearchParams();
	const initFilters = useFiltersStore((state) => state.initFilters);

	useEffect(() => {
		const params: Record<string, string | number> = {};
		searchParams.forEach((value, key) => {
			const num = Number(value);
			params[key] = !isNaN(num) ? num : value;
		});
		initFilters(params);
	}, [searchParams, initFilters]);

	return null;
};
