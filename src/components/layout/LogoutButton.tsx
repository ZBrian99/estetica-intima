'use client';

import { logoutAction } from '@/lib/auth/actions';
import { useFormStatus } from 'react-dom';

function LogoutSubmitButton() {
	const { pending } = useFormStatus();
	return (
		<button
			type="submit"
			disabled={pending}
			className="py-2 px-3 bg-red-600 hover:bg-red-700 disabled:bg-red-400 rounded text-white text-sm transition-colors"
		>
			{pending ? 'Cerrando...' : 'Logout'}
		</button>
	);
}

export default function LogoutButton() {
	return (
		<form action={logoutAction}>
			<LogoutSubmitButton />
		</form>
	);
}