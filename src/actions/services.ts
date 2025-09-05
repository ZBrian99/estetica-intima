// // actions/servicios.js
// 'use server'; // ¡Importante! Marca el archivo como un módulo de servidor

// import { Filters } from '@/app/servicios/hooks/filtersStore';
// import { getBaseUrl } from '@/lib/utils';
// import { ServicesResponse } from '@/types/servicesTypes';

// export async function getServiciosAction(filters?: Filters) {
// 	// unstable_cache implementarlo para hacer la consulta directa y ahorrar un fetch entre medio
// 	const params = new URLSearchParams();
// 	params.append('page', filters?.page?.toString() || '1');
// 	params.append('limit', filters?.limit?.toString() || '10');
// 	console.log('----- SERVER ACTION FETCHING -----', filters?.page, filters?.limit);

// 	const response = await fetch(`${getBaseUrl()}/api/services?${params.toString()}`, {
// 		next: {
// 			revalidate: 20,
// 		},
// 	});
// 	if (!response.ok) {
// 		throw new Error('Network response was not ok');
// 	}

// 	const data: ServicesResponse = await response.json();
// 	return data;
// }
