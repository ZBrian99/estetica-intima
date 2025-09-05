import LoadingSpinner from '@/components/common/LoadingSpinner';

export default function Loading() {
	return (
		<div className='fixed inset-0 bg-white/95 backdrop-blur-sm z-50 flex justify-center items-center'>
			<LoadingSpinner size='lg' />
		</div>
	);
}
