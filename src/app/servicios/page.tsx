import ServicesClientWrapper from '@/components/services/ServicesClientWrapper';
import { urlServiceFiltersSchema } from '@/schemas/servicesSchema';
import { fetchServicesServer } from '@/services/client/servicesService';
import { dehydrate, HydrationBoundary, QueryClient } from '@tanstack/react-query';

interface ServicesPageProps {
	// params: Promise<{ [key: string]: string | string[] }>;
	searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}

const ServicesPage = async ({ searchParams }: ServicesPageProps) => {
	const queryClient = new QueryClient();

	// const resolvedParams = await params;
	const resolvedSearchParams = await searchParams;

	const validateParams = urlServiceFiltersSchema.parse(resolvedSearchParams);

	await queryClient.prefetchQuery({
		queryKey: ['services', validateParams],
		queryFn: () => fetchServicesServer(validateParams),
	});

	return (
		<HydrationBoundary state={dehydrate(queryClient)}>
			<ServicesClientWrapper initialFilters={validateParams} />
		</HydrationBoundary>
	);
};
export default ServicesPage;
