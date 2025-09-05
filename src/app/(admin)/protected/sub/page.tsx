import { auth } from '@/lib/auth/auth';
import Link from 'next/link';
import { redirect } from 'next/navigation';

const SubProtectedPage = async () => {
	const session = await auth();

	if (session?.user?.role !== 'ADMIN') {
		redirect('/protected');
	}

	return (
		<>
			<h2 className='text-white'>Sub Protected Page</h2>
			<Link className='text-blue-500' href='/protected'>
				Protected Page
			</Link>
		</>
	);
};
export default SubProtectedPage;
