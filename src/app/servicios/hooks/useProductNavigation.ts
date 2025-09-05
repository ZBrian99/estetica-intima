// hooks/useProductNavigation.ts
'use client';
import { useTransition } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';

export function useProductNavigation() {
	const [isPending, startTransition] = useTransition();
	const router = useRouter();
	const searchParams = useSearchParams();

	const navigate = (updates: Record<string, string | null>) => {
		startTransition(() => {
			const params = new URLSearchParams(searchParams);

			Object.entries(updates).forEach(([key, value]) => {
				if (value === null) {
					params.delete(key);
				} else {
					params.set(key, value);
				}
			});

			router.push(`/products?${params.toString()}`);
		});
	};

	const updateFilters = (category: string) => {
		navigate({ category, page: null }); // Reset page when filtering
	};

	const updatePage = (page: number) => {
		navigate({ page: page.toString() });
	};

	return {
		isPending,
		updateFilters,
		updatePage,
		navigate,
	};
}
