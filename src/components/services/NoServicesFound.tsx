import EmptyState from '../common/EmptyState';

interface NoServicesFoundProps {
	hasFilters?: boolean;
	onClearFilters?: () => void;
}

const NoServicesFound = ({ hasFilters = false, onClearFilters }: NoServicesFoundProps) => {
	if (hasFilters) {
		return (
			<EmptyState 
				type='no-results'
				title='No se encontraron servicios'
				description='No hay servicios que coincidan con los filtros aplicados. Intenta ajustar los criterios de búsqueda.'
				actionLabel='Limpiar filtros'
				onAction={onClearFilters}
				className='min-h-[400px]'
			/>
		);
	}

	return (
		<EmptyState 
			type='empty'
			title='No hay servicios disponibles'
			description='Aún no hay servicios registrados en el sistema.'
			className='min-h-[400px]'
		/>
	);
};

export default NoServicesFound;