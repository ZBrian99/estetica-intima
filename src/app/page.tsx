import { getBaseUrl } from '@/lib/utils';
import { ServiceResponse } from '@/types/types';
import Link from 'next/link';

const getServices = async (): Promise<ServiceResponse> => {
	const res = await fetch(`${getBaseUrl()}/api/services`, {
		cache: 'no-store', // evita cache en server
	});
	return res.json();
};

export default async function Page() {
	const { data: services } = await getServices();

	if (!services) {
		return <div>Error al cargar servicios</div>;
	}
	return (
		<main style={{ padding: '2rem' }}>
			<h1>Lista de servicios</h1>
			<ul>
				{services.map((s) => (
					<li key={s.id}>{s.name}</li>
				))}
			</ul>

			<Link href='/new'>➕ Crear un nuevo servicio</Link>
		</main>
	);
}
