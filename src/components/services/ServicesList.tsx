import ServiceCard from './ServiceCard';
import { ServiceResponse } from '@/schemas/servicesSchema';

const ServicesList = ({ services }: { services?: ServiceResponse[] }) => {
	return (
		<div className='grid us:grid-cols-2 sm:grid-cols-3 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5  gap-4 px-4  pb-6'>
			{services?.map((service) => (
				<ServiceCard key={service.id} service={service} />
			))}
		</div>
	);
};
export default ServicesList;
