'use client';

import { keepPreviousData, useQuery } from '@tanstack/react-query';
import { ServicesFiltersType } from '@/schemas/servicesSchema';
import { fetchServices } from '@/services/client/servicesService';
import { useEffect, useState } from 'react';
import { useFiltersStore } from '@/stores/filtersStore';
// TODO: Decidir si dejar todo aqui o separar en varios hooks
export function useServices(initialFilters: ServicesFiltersType) {
	const filters = useFiltersStore((state) => state.filters);
	const setFilters = useFiltersStore((state) => state.setFilters);
	const [isFirstLoad, setIsFirstLoad] = useState(true);

	const { data, ...rest } = useQuery({
		queryKey: ['services', isFirstLoad ? initialFilters : filters],
		queryFn: () => fetchServices(isFirstLoad ? initialFilters : filters),

		placeholderData: keepPreviousData,
		staleTime: 1000 * 60 * 5,
	});

	useEffect(() => {
		if (isFirstLoad) {
			setFilters(initialFilters);
			setIsFirstLoad(false);
			return;
		}
		const params = new URLSearchParams();

		Object.entries(filters).forEach(([key, value]) => {
			if (value !== undefined && value !== null && value !== '' && value !== false) {
				if (Array.isArray(value)) {
					params.set(key, value.filter((v) => v !== undefined && v !== null && v !== '').join(','));
				} else {
					params.set(key, value.toString());
				}
			}
		});
		const newUrl = `${window.location.pathname}${params.toString() ? `?${params}` : ''}`;
		console.log(newUrl);
		window.history.replaceState({}, '', newUrl);
	}, [filters]);

	return {
		services: data?.data,
		pagination: data?.pagination,
		...rest,
	};
}
