import Link from 'next/link';
import LogoutButton from './LogoutButton';
import { getAuth } from '@/lib/auth/getAuth';
import { use } from 'react';

export default async function AuthNav() {
	const { user, isAuth, isAdmin } = await getAuth(); // ✅ No redirecciona

	if (isAuth) {
		return (
			<>
				<li>
					<Link className='py-2 px-2 hover:bg-slate-700 rounded' href='/protected'>
						Área Protegida
					</Link>
				</li>
				<li>
					<Link className='py-2 px-2 hover:bg-slate-700 rounded' href='/admin'>
						Admin {isAdmin ? '✅' : '❌'}
					</Link>
				</li>

				<li className='flex items-center gap-2'>
					<span className='py-2 px-2 text-slate-300 text-sm'>
						{user?.name} {user?.role}
					</span>
					<LogoutButton />
				</li>
			</>
		);
	}

	return (
		<>
			<li>
				<Link className='py-2 px-2 hover:bg-slate-700 rounded' href='/login'>
					Login
				</Link>
			</li>
			<li>
				<Link className='py-2 px-2 hover:bg-slate-700 rounded' href='/register'>
					Register
				</Link>
			</li>
		</>
	);
}
