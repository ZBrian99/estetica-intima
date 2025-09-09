import LoadingSpinner from '@/components/common/LoadingSpinner';

export default function Loading() {
	return (
		<div className='fixed inset-0 bg-white z-50 flex justify-center items-center'>
			<LoadingSpinner />
		</div>
	);
}
