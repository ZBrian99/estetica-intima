import { requireAdminInAdminLayout } from '@/lib/auth/utils';

export default async function Layout({ children }: { children: React.ReactNode }) {
  await requireAdminInAdminLayout();
  return children;
}