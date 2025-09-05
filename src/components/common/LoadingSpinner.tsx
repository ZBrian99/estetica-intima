interface LoadingSpinnerProps {
	size?: 'sm' | 'md' | 'lg';
	text?: string;
	showLogo?: boolean;
	className?: string;
}

const LoadingSpinner = ({ 
	size = 'md', 
	text = 'Cargando...', 
	showLogo = false,
	className = '' 
}: LoadingSpinnerProps) => {
	const sizeClasses = {
		sm: 'w-6 h-6',
		md: 'w-8 h-8',
		lg: 'w-12 h-12'
	};

	const textSizeClasses = {
		sm: 'text-sm',
		md: 'text-base',
		lg: 'text-lg'
	};

	return (
		<div className={`flex flex-col items-center gap-4 ${className}`}>
			{showLogo ? (
				<div className='relative'>
					<div
						className={`${sizeClasses[size]} bg-gradient-to-br from-primary-500 to-primary-600 rounded-xl flex items-center justify-center text-white font-bold animate-pulse`}
					>
						<span className={size === 'sm' ? 'text-xs' : size === 'md' ? 'text-sm' : 'text-base'}>
							<img src='/logo-text-sin-fondo.webp' alt='logo intima' />
						</span>
					</div>
					<div
						className={`absolute inset-0 border-2 border-transparent border-t-primary-500 rounded-xl animate-spin`}
					></div>
				</div>
			) : (
				<div
					className={`${sizeClasses[size]} border-3 border-gray-200 border-t-primary-500 rounded-full animate-spin`}
				></div>
			)}

			{text && <p className={`text-gray-600 ${textSizeClasses[size]} font-medium`}>{text}</p>}
		</div>
	);
};

export default LoadingSpinner;