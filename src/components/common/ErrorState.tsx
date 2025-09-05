'use client';

import { AlertTriangle, RefreshCw, Home } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

interface ErrorStateProps {
	title?: string;
	message?: string;
	showRetry?: boolean;
	showHome?: boolean;
	onRetry?: () => void;
	onGoHome?: () => void;
	variant?: 'default' | 'minimal';
	className?: string;
}

const ErrorState = ({
	title = 'Algo salió mal',
	message = 'Ha ocurrido un error inesperado. Por favor, intenta nuevamente.',
	showRetry = true,
	showHome = false,
	onRetry,
	onGoHome,
	variant = 'default',
	className
}: ErrorStateProps) => {
	const handleRetry = () => {
		if (onRetry) {
			onRetry();
		} else {
			window.location.reload();
		}
	};

	const handleGoHome = () => {
		if (onGoHome) {
			onGoHome();
		} else {
			window.location.href = '/';
		}
	};

	if (variant === 'minimal') {
		return (
			<div className={cn('flex items-center justify-center p-8 text-center', className)}>
				<div className='space-y-3'>
					<div className='flex justify-center'>
						<div className='w-12 h-12 bg-red-100 rounded-full flex items-center justify-center'>
							<AlertTriangle className='w-6 h-6 text-red-600' />
						</div>
					</div>
					<div>
						<p className='text-red-600 font-medium text-sm'>{title}</p>
						<p className='text-gray-600 text-xs mt-1'>{message}</p>
					</div>
					{showRetry && (
						<Button
							variant='outline'
							size='sm'
							onClick={handleRetry}
							className='text-xs'
						>
							<RefreshCw className='w-3 h-3 mr-1' />
							Reintentar
						</Button>
					)}
				</div>
			</div>
		);
	}

	return (
		<div className={cn('flex items-center justify-center min-h-[400px] p-8', className)}>
			<div className='text-center max-w-md mx-auto'>
				{/* Icono de error */}
				<div className='flex justify-center mb-6'>
					<div className='w-20 h-20 bg-red-100 rounded-full flex items-center justify-center'>
						<AlertTriangle className='w-10 h-10 text-red-600' />
					</div>
				</div>

				{/* Contenido del error */}
				<div className='space-y-4'>
					<div>
						<h3 className='text-xl font-semibold text-gray-900 mb-2'>{title}</h3>
						<p className='text-gray-600 leading-relaxed'>{message}</p>
					</div>

					{/* Botones de acción */}
					<div className='flex flex-col sm:flex-row gap-3 justify-center'>
						{showRetry && (
							<Button
								variant='default'
								onClick={handleRetry}
								className='flex items-center gap-2'
							>
								<RefreshCw className='w-4 h-4' />
								Reintentar
							</Button>
						)}
						{showHome && (
							<Button
								variant='outline'
								onClick={handleGoHome}
								className='flex items-center gap-2'
							>
								<Home className='w-4 h-4' />
								Volver al inicio
							</Button>
						)}
					</div>
				</div>
			</div>
		</div>
	);
};

export default ErrorState;