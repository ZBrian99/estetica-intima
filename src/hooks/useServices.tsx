'use client';

import { keepPreviousData, useQuery } from '@tanstack/react-query';
import { ServicesFiltersType } from '@/schemas/servicesSchema';
import { fetchServices } from '@/services/client/servicesService';
import { useEffect } from 'react';

export function useServices(filters: ServicesFiltersType) {
	const { data, ...rest } = useQuery({
		queryKey: ['services', filters],
		queryFn: () => fetchServices(filters),
		// placeholderData: keepPreviousData,
		staleTime: 1000 * 60 * 5,
	});

	// useEffect(() => {
	// 	window.scrollTo({
	// 		top: 0,
	// 		behavior: 'smooth',
	// 	});
	// }, [data]);

	return {
		services: data?.data,
		pagination: data?.pagination,
		...rest,
	};
}
