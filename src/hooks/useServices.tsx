'use client';

import { keepPreviousData, useQuery } from '@tanstack/react-query';
import { ServicesFiltersType } from '@/schemas/servicesSchema';
import { useEffect, useRef, useState } from 'react';
import { useFiltersStore } from '@/stores/filtersStore';
import { filtersToUrlParams } from '@/lib/utils';
import { fetchServicesClient } from '@/services/client/servicesService';

// TODO: Decidir si dejar todo aqui o separar en varios hooks

export function useServices(initialFilters: ServicesFiltersType) {
	const filters = useFiltersStore((state) => state.filters);
	const setFilters = useFiltersStore((state) => state.setFilters);
	const isFirstLoad = useRef(true);

	const { data, ...rest } = useQuery({
		queryKey: ['services', filters],
		queryFn: () => fetchServicesClient(filters),
		placeholderData: keepPreviousData,
		enabled: !isFirstLoad.current,
		staleTime: 1000 * 60 * 5,
	});

	useEffect(() => {
		if (isFirstLoad.current) {
			setFilters(initialFilters);
			isFirstLoad.current = false;
			return;
		}

		const params = filtersToUrlParams(filters);
		const newUrl = `${window.location.pathname}${params ? `?${params}` : ''}`;
		window.history.replaceState({ filters }, '', newUrl);
	}, [filters]);

	return {
		services: data?.data,
		pagination: data?.pagination,
		...rest,
	};
}
