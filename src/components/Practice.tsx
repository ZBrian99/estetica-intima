import PracticeList from './PracticeList';
import { QueryClient, dehydrate, HydrationBoundary } from '@tanstack/react-query';
// import { getBaseUrl } from '@/lib/getBaseUrl';
import { fetchServices } from '@/services/client/servicesService';
interface PageProps {
	searchParams: { page: string; limit: string };
}
const Practice = async ({ searchParams }: PageProps) => {
	// Crear un QueryClient para el servidor
	const page = Number(searchParams.page || 1);
	const limit = Number(searchParams.limit || 10);

	const queryClient = new QueryClient({
		defaultOptions: {
			queries: {
				// Con SSR, queremos evitar refetch inmediato en el cliente
				staleTime: 60 * 1000, // 1 minuto
			},
		},
	});

	// Usar fetch de Next.js con caché en el servidor
	const servicesData = await fetchServices({ limit, page });

	// Poblar la caché de TanStack Query con los datos obtenidos
	queryClient.setQueryData(['services', { limit, page }], servicesData);
	// console.log('Datos obtenidos con fetch de Next.js y poblados en caché de TanStack Query');

	// Deshidratar el estado del query client para enviarlo al cliente
	const dehydratedState = dehydrate(queryClient);

	return (
		<HydrationBoundary state={dehydratedState}>
			<PracticeList />
		</HydrationBoundary>
	);
};

export default Practice;
