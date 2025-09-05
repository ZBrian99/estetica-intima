// import { Filters } from '@/app/(servicesOld)/serviciosOld/hooks/filtersStore';
// import { getBaseUrl } from '@/lib/utils';
// import { ServicesResponse } from '@/types/servicesTypes';

// export interface ServiceParams {
// 	page?: number;
// 	limit?: number;
// }
// // 	const cacheConfig = isStaticPage
// // 		? { cache: 'force-cache' as const } // Cache permanente para páginas 1-6
// // 		: { next: { revalidate: 10 } };
// export const fetchServices = async (filters?: ServiceParams) => {
// 	const params = new URLSearchParams();
// 	params.append('page', filters?.page?.toString() || '1');
// 	params.append('limit', filters?.limit?.toString() || '10');
// 	console.log('----- SERVICE SSR FETCHING -----', filters?.page, filters?.limit);

// 	const response = await fetch(`${getBaseUrl()}/api/services?${params.toString()}`, {
// 		next: {
// 			revalidate: 30,
// 		},
// 	});
// 	if (!response.ok) {
// 		throw new Error('Network response was not ok');
// 	}

// 	const data: ServicesResponse = await response.json();
// 	return data;
// };
// export const fetchServicesCLIENTE = async (filters?: Filters) => {
// 	const params = new URLSearchParams();
// 	params.append('page', filters?.page?.toString() || '1');
// 	params.append('limit', filters?.limit?.toString() || '10');
// 	params.append('client', 'true');

// 	const response = await fetch(`${getBaseUrl()}/api/services?${params.toString()}`, {
// 		next: {
// 			revalidate: 10,
// 		},
// 	});
// 	if (!response.ok) {
// 		throw new Error('Network response was not ok');
// 	}

// 	const data: ServicesResponse = await response.json();
// 	return data;
// };



// // Old
// export const oldFetchServices = async ({ page = 1, limit = 10 }: ServiceParams = {}): Promise<ServicesResponse> => {
// 	const url = new URL(`${getBaseUrl()}/api/servicios`);
// 	url.searchParams.set('page', String(page));
// 	url.searchParams.set('limit', String(limit));

// 	const isFiltered = limit !== 10;
// 	console.log('isFiltered', isFiltered);
// 	const res = await fetch(url.toString(), {
// 		cache: isFiltered ? 'no-store' : 'force-cache',
// 		next: isFiltered ? { revalidate: 10 } : undefined,
// 	});

// 	if (!res.ok) throw new Error(`Error ${res.status}: ${res.statusText}`);

// 	return res.json() as Promise<ServicesResponse>;
// };
