
import { ServiceResponse } from '@/schemas/servicesSchema';
import CleanServiceCard from './CleanServiceCard';

const ServicesList = ({ services }: { services?: ServiceResponse[] }) => {
	return (
		<div className='grid us:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5  gap-3 md:gap-4 lg:gap-6 px-4 md:p-6 pb-6 max-w-[100rem] '>
			{services?.map((service) => (
				<CleanServiceCard key={service.id} service={service} />
			))}
		</div>
	);
};
export default ServicesList;
