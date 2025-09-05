import { requireAuth } from '@/lib/auth/utils';
import Link from 'next/link';

const ProtectedPage = async () => {
	const session = await requireAuth(); // ✅ Redirecciona automáticamente

	return (
		<>
			<h2 className='text-white'>Protected Page desde layout</h2>
			<Link className='text-blue-500' href='/protected/sub'>
				Sub Protected Page
			</Link>
		</>
	);
};
export default ProtectedPage;
