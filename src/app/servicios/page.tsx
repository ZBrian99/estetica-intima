import ServicesClientWrapper from '@/components/services/ServicesClientWrapper';
import { urlServiceFiltersSchema } from '@/schemas/servicesSchema';
import { fetchServices } from '@/services/client/servicesService';
import { dehydrate, HydrationBoundary, QueryClient } from '@tanstack/react-query';

interface ServicesPageProps {
	params: Promise<{ [key: string]: string | string[] }>;
	searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}

const ServicesPage = async ({ params, searchParams }: ServicesPageProps) => {
	const queryClient = new QueryClient();

	const resolvedParams = await params;
	const resolvedSearchParams = await searchParams;

	// console.log('Route params:', resolvedParams);
	// Si la URL es /servicios/facial/limpieza
	// resolvedParams = { categoria: 'facial', subcategoria: 'limpieza' }

	// console.log('Search params:', resolvedSearchParams);
	// Si la URL es /servicios/facial/limpieza?page=2&limit=10
	// resolvedSearchParams = { page: '2', limit: '10' }

	// const validateParams = urlServiceFiltersSchema.parse({ ...resolvedSearchParams, ...resolvedParams });

	await queryClient.prefetchQuery({
		queryKey: ['services', {}],
    queryFn: () => fetchServices({}),
	});
	// await queryClient.prefetchQuery({
	// 	queryKey: ['services', validateParams],
	// 	queryFn: () => fetchServices(validateParams),
	// });

	return (
		<HydrationBoundary state={dehydrate(queryClient)}>
			<ServicesClientWrapper />
			{/* <ServicesClientWrapper initialFilters={validateParams} /> */}
		</HydrationBoundary>
	);
};
export default ServicesPage;
