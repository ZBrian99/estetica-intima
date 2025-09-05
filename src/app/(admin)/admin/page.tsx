import { requireAdmin } from '@/lib/auth/utils';

export default async function AdminPage() {
	const session = await requireAdmin(); 

	return <div>Panel de Admin</div>;
}
