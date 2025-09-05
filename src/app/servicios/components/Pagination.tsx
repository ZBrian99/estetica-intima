'use client';

import { useRouter, useSearchParams } from 'next/navigation';
import { useFiltersStore } from '../hooks/filtersStore';
import { useEffect, useTransition } from 'react';
import { useUiStore } from '../hooks/uiStore';
import { useShallow } from 'zustand/shallow';
import Link from 'next/link';

export const Pagination = ({
	totalPages,
	handlePageChange,
}: {
	totalPages: number;
	handlePageChange: (page: number) => void;
}) => {
	const router = useRouter();
	const searchParams = useSearchParams();
	const { filters, setFilter } = useFiltersStore(
		useShallow((state) => ({
			filters: state.filters,
			setFilter: state.setFilter,
		}))
	);
	const setIsPending = useUiStore((state) => state.setIsPending);

	const [isPending, startTransition] = useTransition();

	useEffect(() => {
		setIsPending(isPending);
	}, [isPending]);

	const goToPage = (page: number) => {
		// startTransition(() => {
		setFilter('page', page);

		// const params = new URLSearchParams(searchParams.toString());
		// Object.entries({ ...filters, page }).forEach(([k, v]) => {
		// 	params.set(k, String(v));
		// });

		// router.replace(`?${params.toString()}`);
		// });
	};

	return (
		<>
			{/* {isPending && <div className='fixed top-0 left-0 w-full h-1.5 bg-blue-900 z-50 animate-loading-bar-fade '></div>} */}

			<div className='flex gap-2'>
				{Array.from({ length: totalPages }, (_, i) => (
					<button key={i} onClick={() => handlePageChange(i + 1)}>
						{i + 1}
					</button>
				))}
			</div>
		</>
	);
};
