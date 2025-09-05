'use client';

import { useRouter, useSearchParams } from 'next/navigation';
import { useFiltersStore } from '../hooks/filtersStore';
import { useEffect, useTransition } from 'react';
import { useShallow } from 'zustand/shallow';
import { useUiStore } from '../hooks/uiStore';

export const LimitSelect = ({ handleLimitChange }: { handleLimitChange: (limit: number) => void }) => {
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

	const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
		// startTransition(() => {
		const newLimit = Number(e.target.value);

		// Actualizamos estado
		setFilter('limit', newLimit);
		setFilter('page', 1);

		// Actualizamos URL preservando otros params
		// const params = new URLSearchParams(searchParams.toString());
		// params.set('limit', newLimit.toString());
		// params.set('page', '1');
		// router.replace(`?${params.toString()}`);
		// });
	};

	return (
		<>
			{/* {isPending && <div className='fixed top-0 left-0 w-full h-1.5 bg-blue-900 z-50 animate-loading-bar'></div>} */}
			<select
				value={filters.limit}
				onChange={(e) => {
					// handleChange(e);
					handleLimitChange(Number(e.target.value));
				}}
			>
				<option value={5}>5</option>
				<option value={10}>10</option>
				<option value={15}>15</option>
				<option value={20}>20</option>
			</select>
		</>
	);
};
