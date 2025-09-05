// import { getBaseUrl } from '@/lib/getBaseUrl';
// import { ServicesList } from './components/ServicesList';
// import { ServiceResponse } from '@/types/types';
// import { LimitSelect } from './components/LimitSelector';
// import { Pagination } from './components/Pagination';
import { dehydrate, HydrationBoundary, QueryClient } from '@tanstack/react-query';
import ServicesList from './components/ServicesList';
import { ServiceResponse } from '@/types/types';
import { fetchServices } from '@/services/client/servicesService';
// import { ServerResponse } from 'http';

interface ServicesPageProps {
	searchParams: Promise<{ [key: string]: string | undefined }>;
	// searchParams: Promise<{ [key: string]: string | undefined }>;
}
// export async function getStaticProps() {
// 	const queryClient = new QueryClient();

// 	await queryClient.prefetchQuery({
// 		queryKey: ['services'],
// 		queryFn: () => fetchServices(),
// 	});

// 	return {
// 		props: {
// 			dehydratedState: dehydrate(queryClient),
// 		},
// 	};
// }

// async function getServices(page = 1, limit = 10) {
// 	const res = await fetch(`${getBaseUrl()}/api/services?page=${page}&limit=${limit}`, {
// 		cache: 'force-cache',
// 	});
// 	if (!res.ok) throw new Error('Failed to fetch services');
// 	return res.json() as Promise<ServiceResponse>;
// }

// export async function getServerSideProps() {
// 	const services = await getServices();
// 	return { props: { services } };
// }

// export function Services(props: { services: ServiceResponse }) {
// 	const { data, isLoading } = useQuery({
// 		queryKey: ['services'],
// 		queryFn: () => getServices(),
// 		initialData: props.services,
// 	});

// 	if (isLoading) return <div>Loading...</div>;
// 	if (!data) return <div>Error loading services</div>;
// 	if (!data.data) return <div>Error loading services</div>;
// 	if (!data.pagination) return <div>Error loading services</div>;
// 	return (
// 		<div>
// 			<ul>
// 				{data?.data.map((service) => (
// 					<li key={service.id}>{service.name}</li>
// 				))}
// 			</ul>
// 		</div>
// 	);
// }

// export default async function ServicesPage() {
// };

// export async function generateStaticParams() {
// 	const pages = Array.from({ length: 6 }, (_, i) => ({
// 		page: String(i + 1),
// 	}));

// 	return pages;
// };
// export async function generateStaticParams() {
// 	return [{}, { page: '1' }, { page: '2' }, { page: '3' }, { page: '4' }, { page: '5' }, { page: '6' }];
// }

const ServicesPage = async ({ searchParams }: ServicesPageProps) => {
	const queryClient = new QueryClient();

	const params = await searchParams;
	const page = Number(params.page || 1);
	const limit = Number(params.limit || 10);
  console.log(`----- SERVER SSR LOADING -----`, page, limit);
	await queryClient.prefetchQuery({
		queryKey: ['services', { page, limit }],
		queryFn: () => fetchServices({ page, limit }),
	});
	return (
		<HydrationBoundary state={dehydrate(queryClient)}>
			<ServicesList params={{ page, limit }} />
		</HydrationBoundary>
	);
};
export default ServicesPage;

// export function Services(props: { services: ServiceResponse }) {
// 	const { data, isLoading } = useQuery({
// 		queryKey: ['services'],
// 		queryFn: () => getServices(),
// 		initialData: props.services,
// 	});

// 	if (isLoading) return <div>Loading...</div>;
// 	if (!data) return <div>Error loading services</div>;
// 	if (!data.data) return <div>Error loading services</div>;
// 	if (!data.pagination) return <div>Error loading services</div>;
// 	return (
// 		<div>
// 			<ul>
// 				{data?.data.map((service) => (
// 					<li key={service.id}>{service.name}</li>
// 				))}
// 			</ul>
// 		</div>
// 	);
// }

// export default async function ServicesPage({ searchParams }: ServicesPageProps) {
// const queryClient = new QueryClient();

// const params = await searchParams;
// const page = Number(params.page || 1);
// const limit = Number(params.limit || 10);

// --------------------------------------------------------------------------------------------------
// SOLUCION 0 EN BASEA MI CRITERIO

// const services = await getServices(page, limit);
// return { props: { services } };

// --------------------------------------------------------------------------------------------------
// SOLUCION 1 CON HIDRATACION

// await queryClient.prefetchQuery({
// 	queryKey: ['services'],
// 	queryFn: () => getServices(page, limit),
// });
// --------------------------------------------------------------------------------------------------

// const queryClient = createQueryClient();

// await queryClient.prefetchQuery({
// 	queryKey: ['services'],
// 	queryFn: () => fetchServices(),
// });
// const dehydratedState = dehydrate(queryClient);

// export default function ServicesPage({ searchParams }: ServicesPageProps) {
// 	const queryClient = createQueryClient();

// 	const params = await searchParams;
// 	const page = Number(params.page || 1);
// 	const limit = Number(params.limit || 10);

// 	const isStatic = limit === 10;
// 	console.log('-----STATIC------', isStatic);

// 	const response = isStatic
// 		? await fetch(`${getBaseUrl()}/api/services?page=${page}&limit=${limit}`, {
// 				cache: 'force-cache',
// 		  })
// 		: await fetch(`${getBaseUrl()}/api/services?page=${page}&limit=${limit}`, {
// 				cache: 'no-cache',
// 		  });
// 	const { data: services, pagination }: ServiceResponse = await response.json();

// 	const fetchServices = async ({ page, limit, cc }: { page: number; limit: number; cc: boolean }) => {
// 		const response = await fetch(`${getBaseUrl()}/api/services?page=${page}&limit=${limit}`, {
// 			cache: cc ? 'force-cache' : 'no-cache',
// 		});
// 		const data: Promise<ServiceResponse> = response.json();
// 		return data;
// 	};

// 	await queryClient.prefetchQuery({
// 		queryKey: ['services'],
// 		queryFn: async () => {
// 			const response = await fetch(`${getBaseUrl()}/api/services?page=${page}&limit=${limit}`, {
// 				cache: isStatic ? 'force-cache' : 'no-cache',
// 			});
// 			const data = await response.json();
// 			return data;
// 		},
// 	});
// return (
// <div>
// {/* <h1 className='mb-4 text-center'>Servicios</h1> */}
// <HydrationBoundary state={dehydratedState}>
// <ServicesList />
// {/* </HydrationBoundary> */}
// </div>
// );
// }
