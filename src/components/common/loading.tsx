import LoadingSpinner from '@/components/common/LoadingSpinner';

export default function Loading() {
	return (
		<div className='flex items-center justify-center min-h-[calc(100vh-4rem)] bg-primary-50'>
			<LoadingSpinner />
		</div>
	);
}
