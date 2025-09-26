'use client';

import { useEffect, useRef, useState, useCallback } from 'react';
import { useRouter } from 'next/navigation';
import {
	CommandDialog,
	CommandEmpty,
	CommandGroup,
	CommandInput,
	CommandItem,
	CommandList,
} from '@/components/ui/command';
import { useIsSearchOpen, useSetSearchOpen } from '@/stores/uiStore';
import { useFiltersStore } from '@/stores/filtersStore';
import { filtersToUrlParams } from '@/lib/utils';

const SearchOverlay = () => {
	const router = useRouter();
	const isSearchOpen = useIsSearchOpen();
	const setSearchOpen = useSetSearchOpen();
	const { filters, setFilter } = useFiltersStore();
	const [query, setQuery] = useState<string>(filters.search ?? '');
	const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

	// Keep local query in sync when the dialog opens/closes
	useEffect(() => {
		if (isSearchOpen) {
			setQuery(filters.search ?? '');
		}
	}, [isSearchOpen, filters.search]);

	const applyAndNavigate = useCallback(
		(q: string) => {
			// Update store and navigate to /servicios with params
			setFilter('search', q);
			setFilter('page', 1);
			const params = filtersToUrlParams({ ...filters, search: q, page: 1 });
			router.push(`/servicios${params ? `?${params}` : ''}`);
			setSearchOpen(false);
		},
		[filters, router, setFilter, setSearchOpen]
	);

	// Debounced store update while typing (does not navigate)
	useEffect(() => {
		if (!isSearchOpen) return;
		if (timerRef.current) clearTimeout(timerRef.current);
		timerRef.current = setTimeout(() => {
			setFilter('search', query);
			setFilter('page', 1);
		}, 350);
		return () => {
			if (timerRef.current) clearTimeout(timerRef.current);
		};
	}, [query, isSearchOpen, setFilter]);

	return (
		<CommandDialog open={isSearchOpen} onOpenChange={(open) => setSearchOpen(open)} title='Buscar servicios' description='Buscá tratamientos o combos'>
			<CommandInput
				placeholder='Buscar servicios...'
				autoFocus
				value={query}
				onValueChange={(value) => setQuery(value)}
			/>
			<CommandList>
				<CommandEmpty>No encontramos resultados.</CommandEmpty>
				<CommandGroup heading='Acciones'>
					<CommandItem onSelect={() => applyAndNavigate(query)}>Buscar “{query}”</CommandItem>
					<CommandItem onSelect={() => { setQuery(''); applyAndNavigate(''); }}>Limpiar búsqueda</CommandItem>
				</CommandGroup>
			</CommandList>
		</CommandDialog>
	);
};

export default SearchOverlay;