import { redirect } from 'next/navigation';
import { auth } from '@/lib/auth/auth';
import RegisterForm from './RegisterForm';

export default async function RegisterPage() {
	// Verificar si ya está autenticado
	const session = await auth();
	if (session) {
		if (session.user?.role === 'ADMIN') {
			redirect('/admin');
		} else {
			redirect('/protected');
		}
	}

	return (
		<div className='min-h-screen flex items-center justify-center  py-12 px-4 sm:px-6 lg:px-8'>
			<div className='max-w-md w-full space-y-8'>
				<div>
					<h2 className='mt-6 text-center text-3xl font-extrabold '>Crea tu cuenta</h2>
				</div>
				<RegisterForm />
			</div>
		</div>
	);
}
