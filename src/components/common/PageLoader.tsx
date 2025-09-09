'use client';

import { cn } from '@/lib/utils';
import LoadingSpinner from './LoadingSpinner';

interface PageLoaderProps {
	variant?: 'fullscreen' | 'container';
	className?: string;
}

const PageLoader = ({ variant = 'container', className }: PageLoaderProps) => {
	const containerClasses = {
		fullscreen: 'fixed inset-0 flex items-center justify-center z-50 bg-white/10 backdrop-blur-sm',
		container: 'flex items-center justify-center min-h-[calc(100vh-4rem)] w-full',
	};

	return (
		<div className={cn(containerClasses[variant], className)}>
			<LoadingSpinner />
		</div>
	);
};

export default PageLoader;
