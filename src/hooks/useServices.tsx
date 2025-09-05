import { useQuery } from '@tanstack/react-query';
import { fetchServices } from '@/services/client/servicesService';
import { Service, ServiceResponse } from '@/types/types';
import { useState } from 'react';

interface UseServicesProps {
	initialData?: ServiceResponse;
	params?: {
		page?: number;
		limit?: number;
	};
}

export function useServices({ params, initialData }: UseServicesProps) {
	const [initialParams] = useState(params);
	const hasParamsChanged = JSON.stringify(params) !== JSON.stringify(initialParams);

	console.log('initialData?', !!initialData);
	const { data, ...rest } = useQuery({
		queryKey: ['services', { page: params?.page, limit: params?.limit }],
		queryFn: () => fetchServices(params),
		initialData,
		staleTime: 1000 * 60 * 5, // 5 minutos
		enabled: hasParamsChanged || !initialData,
	});

	return {
		services: data?.data,
		pagination: data?.pagination,
		...rest,
	};
}
