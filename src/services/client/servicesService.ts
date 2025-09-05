import { getBaseUrl } from '@/lib/utils';
import { ServicesFiltersType, UrlServicesFiltersType } from '@/schemas/servicesSchema';
import { ServicesResponse } from '@/types/servicesTypes';

const filtersToQueryString = (filters?: ServicesFiltersType): string => {
	if (!filters) {
		return '';
	}

	const params = new URLSearchParams();

	Object.entries(filters).forEach(([key, value]) => {
		if (value !== undefined && value !== null) {
			if (Array.isArray(value)) {
				// Solo agregar arrays que no estén vacíos
				if (value.length > 0) {
					params.set(key, value.join(','));
				}
			} else {
				// Solo agregar strings que no estén vacíos
				const stringValue = String(value).trim();
				if (stringValue !== '') {
					params.set(key, stringValue);
				}
			}
		}
	});

	return params.toString();
};

export const fetchServices = async (filters?: ServicesFiltersType): Promise<ServicesResponse> => {
	try {
		const response = await fetch(`${getBaseUrl()}/api/services?${filtersToQueryString(filters)}`, {
			cache: 'force-cache',
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
