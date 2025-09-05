'use client';

import EmptyState from '@/components/common/EmptyState';
import ErrorState from '@/components/common/ErrorState';
import LoadingSpinner from '@/components/common/LoadingSpinner';
import { ReactNode } from 'react';

interface UseQueryLoaderProps {
	isLoading: boolean;
	isError: boolean;
	error?: Error | null;
	data?: any;
	emptyCheck?: (data: any) => boolean;
	loadingComponent?: ReactNode;
	errorComponent?: ReactNode;
	emptyComponent?: ReactNode;
	children: ReactNode;
	// Configuraciones específicas
	loadingMessage?: string;
	errorTitle?: string;
	errorMessage?: string;
	emptyTitle?: string;
	emptyMessage?: string;
	onRetry?: () => void;
	variant?: 'default' | 'minimal';
}

const useQueryLoader = ({
	isLoading,
	isError,
	error,
	data,
	emptyCheck = (data) => !data || (Array.isArray(data) && data.length === 0),
	loadingComponent,
	errorComponent,
	emptyComponent,
	children,
	loadingMessage = 'Cargando...',
	errorTitle = 'Error al cargar los datos',
	errorMessage,
	emptyTitle = 'No hay datos disponibles',
	emptyMessage = 'No se encontraron elementos.',
	onRetry,
	variant = 'default'
}: UseQueryLoaderProps) => {
	// Estado de carga
	if (isLoading) {
		if (loadingComponent) {
			return loadingComponent;
		}

		if (variant === 'minimal') {
			return (
				<div className='flex items-center justify-center p-8'>
					<div className='flex items-center gap-3'>
						<LoadingSpinner size='sm' />
						<span className='text-sm text-gray-600'>{loadingMessage}</span>
					</div>
				</div>
			);
		}

		return (
			<div className='flex items-center justify-center min-h-[300px]'>
				<div className='text-center space-y-4'>
					<LoadingSpinner size='lg' />
					<p className='text-gray-600'>{loadingMessage}</p>
				</div>
			</div>
		);
	}

	// Estado de error
	if (isError) {
		if (errorComponent) {
			return errorComponent;
		}

		const finalErrorMessage = errorMessage || error?.message || 'Ha ocurrido un error inesperado.';

		return (
			<ErrorState
				title={errorTitle}
				message={finalErrorMessage}
				onRetry={onRetry}
				variant={variant}
				showRetry={!!onRetry}
			/>
		);
	}

	// Estado vacío
	if (data !== undefined && emptyCheck(data)) {
		if (emptyComponent) {
			return emptyComponent;
		}

		return (
			<EmptyState
				type='no-results'
				title={emptyTitle}
				description={emptyMessage}
			/>
		);
	}

	// Renderizar contenido
	return <>{children}</>;
};

export default useQueryLoader;