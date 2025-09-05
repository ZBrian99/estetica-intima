import { Search, AlertCircle, RefreshCw } from 'lucide-react';

interface EmptyStateProps {
	type?: 'no-results' | 'error' | 'empty';
	title?: string;
	description?: string;
	actionLabel?: string;
	onAction?: () => void;
	className?: string;
}

const EmptyState = ({
	type = 'empty',
	title,
	description,
	actionLabel,
	onAction,
	className = ''
}: EmptyStateProps) => {
	const getIcon = () => {
		switch (type) {
			case 'no-results':
				return <Search className='w-16 h-16 text-gray-400' />;
			case 'error':
				return <AlertCircle className='w-16 h-16 text-red-400' />;
			default:
				return <Search className='w-16 h-16 text-gray-400' />;
		}
	};

	const getDefaultContent = () => {
		switch (type) {
			case 'no-results':
				return {
					title: 'No se encontraron servicios',
					description: 'Intenta ajustar los filtros o buscar con otros términos.'
				};
			case 'error':
				return {
					title: 'Error al cargar servicios',
					description: 'Hubo un problema al cargar los servicios. Por favor, intenta nuevamente.'
				};
			default:
				return {
					title: 'No hay servicios disponibles',
					description: 'Aún no hay servicios para mostrar.'
				};
		}
	};

	const defaultContent = getDefaultContent();
	const finalTitle = title || defaultContent.title;
	const finalDescription = description || defaultContent.description;

	return (
		<div className={`flex flex-col items-center justify-center py-16 px-4 text-center ${className}`}>
			{/* Icono */}
			<div className='mb-6'>
				{getIcon()}
			</div>

			{/* Contenido */}
			<div className='max-w-md'>
				<h3 className='text-xl font-semibold text-gray-900 mb-2'>
					{finalTitle}
				</h3>
				<p className='text-gray-600 mb-6'>
					{finalDescription}
				</p>

				{/* Botón de acción */}
				{onAction && actionLabel && (
					<button
						onClick={onAction}
						className='inline-flex items-center gap-2 px-4 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors font-medium'
					>
						<RefreshCw className='w-4 h-4' />
						{actionLabel}
					</button>
				)}
			</div>
		</div>
	);
};

export default EmptyState;