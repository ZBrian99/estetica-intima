import { filtersToUrlParams, getBaseUrl, shouldCache } from '@/lib/utils';
import { ServicesFiltersType } from '@/schemas/servicesSchema';
import { ServicesResponse } from '@/types/servicesTypes';

// se queda como cliente hasta descubrir como compartir cache con server con use server y al mismo tiempo evitar duplicar consultas

export const fetchServicesClient = async (filters?: ServicesFiltersType): Promise<ServicesResponse> => {
	try {
		const params = filtersToUrlParams(filters);
		const response = await fetch(`${getBaseUrl()}/api/services${params ? `?${params}` : ''}`);

		if (!response.ok) {
			throw new Error(`Error ${response.status}: ${response.statusText}`);
		}

		return await response.json();
	} catch (error) {
		console.error('Error fetching services: ', error);
		throw error;
	}
};

export const fetchServicesServer = async (filters?: ServicesFiltersType): Promise<ServicesResponse> => {
	try {
		const params = filtersToUrlParams(filters);
		const isCache = shouldCache(filters);
		const response = await fetch(`${getBaseUrl()}/api/services${params ? `?${params}` : ''}`, {
			cache: isCache ? 'force-cache' : 'no-store',
			next: isCache ? { tags: ['services'] } : undefined,
		});

		if (!response.ok) {
			throw new Error(`Error ${response.status}: ${response.statusText}`);
		}

		return await response.json();
	} catch (error) {
		console.error('Error fetching services: ', error);
		throw error;
	}
};
