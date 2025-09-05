'use client';

import { cn } from '@/lib/utils';
import LoadingSpinner from './LoadingSpinner';

interface PageLoaderProps {
	variant?: 'fullscreen' | 'container';
	className?: string;
}

const PageLoader = ({ 
	variant = 'container',
	className 
}: PageLoaderProps) => {
	const containerClasses = {
		fullscreen: 'fixed inset-0 z-50 bg-white/80 backdrop-blur-sm',
		container: 'flex items-center justify-center min-h-[400px] w-full',
	};

	return (
		<div className={cn(containerClasses[variant], className)}>
			<LoadingSpinner size="lg" />
		</div>
	);
};

export default PageLoader;