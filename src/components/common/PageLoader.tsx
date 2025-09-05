'use client';

import { cn } from '@/lib/utils';
import LoadingSpinner from './LoadingSpinner';

interface PageLoaderProps {
	message?: string;
	variant?: 'fullscreen' | 'container';
	className?: string;
}

const PageLoader = ({ 
	message = 'Cargando...', 
	variant = 'container',
	className 
}: PageLoaderProps) => {
	const containerClasses = {
		fullscreen: 'fixed inset-0 z-50 bg-white/80 backdrop-blur-sm',
		container: 'flex items-center justify-center min-h-[400px] w-full',
	};

	return (
		<div className={cn(containerClasses[variant], className)}>
			<div className='flex flex-col items-center gap-4 text-center'>
				{/* Logo animado */}
				<div className='relative'>
					<div className='w-16 h-16 bg-gradient-to-br from-primary-500 to-primary-600 rounded-2xl flex items-center justify-center text-white font-bold text-xl shadow-lg animate-pulse'>
						EI
					</div>
					{/* Anillo de carga alrededor del logo */}
					<div className='absolute inset-0 rounded-2xl border-2 border-primary-200 border-t-primary-500 animate-spin'></div>
				</div>

				{/* Texto de carga */}
				<div className='space-y-2'>
					<p className='text-lg font-medium text-gray-900'>{message}</p>
					<div className='flex items-center justify-center gap-1'>
						<div className='w-2 h-2 bg-primary-500 rounded-full animate-bounce [animation-delay:-0.3s]'></div>
						<div className='w-2 h-2 bg-primary-500 rounded-full animate-bounce [animation-delay:-0.15s]'></div>
						<div className='w-2 h-2 bg-primary-500 rounded-full animate-bounce'></div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default PageLoader;