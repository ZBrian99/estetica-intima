interface LoadingSpinnerProps {
	size?: 'sm' | 'md' | 'lg';
	className?: string;
}

const LoadingSpinner = ({ 
	size = 'md', 
	className = '' 
}: LoadingSpinnerProps) => {
	const sizeClasses = {
		sm: 'w-6 h-6',
		md: 'w-8 h-8',
		lg: 'w-12 h-12'
	};

	return (
		<div className={`flex items-center justify-center ${className}`}>
			<div
				className={`${sizeClasses[size]} border-3 border-gray-200 border-t-primary-500 rounded-full animate-spin`}
			></div>
		</div>
	);
};

export default LoadingSpinner;