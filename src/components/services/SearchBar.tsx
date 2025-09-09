'use client';

import { useFiltersStore } from '@/stores/filtersStore';
import { Input } from '@/components/ui/input';
import { useEffect, useState, useCallback, useRef } from 'react';
import { Search } from 'lucide-react';

interface SearchBarProps {
	placeholder?: string;
}

const SearchBar = ({ placeholder = 'Buscar servicios...' }: SearchBarProps) => {
	const { filters, setFilter } = useFiltersStore();
	const [searchValue, setSearchValue] = useState(filters.search || '');
	const debounceRef = useRef<NodeJS.Timeout | null>(null);

	// Función debounced para aplicar filtros
	const debouncedSetSearch = useCallback(
		(value: string) => {
			if (debounceRef.current) {
				clearTimeout(debounceRef.current);
			}
			debounceRef.current = setTimeout(() => {
				setFilter('search', value);
			}, 300); // 300ms de delay para la navbar
		},
		[setFilter]
	);

	// Manejar cambios en el input
	const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const value = e.target.value;
		setSearchValue(value);
		debouncedSetSearch(value);
	};

	// Sincronizar con el store cuando cambie externamente
	useEffect(() => {
		setSearchValue(filters.search || '');
	}, [filters.search]);

	// Cleanup del timeout al desmontar el componente
	useEffect(() => {
		return () => {
			if (debounceRef.current) {
				clearTimeout(debounceRef.current);
			}
		};
	}, []);

	return (
		<div className={`relative grow`}>
			<Search className='absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 h-4 w-4' />
			<Input
				type='text'
				placeholder={placeholder}
				value={searchValue}
				onChange={handleSearchChange}
				className='pl-10 bg-white/90 border-gray-200 text-gray-900 placeholder:text-gray-500 focus:border-primary-500 focus:ring-primary-500/20 focus:ring-2 h-9 rounded-full shadow-sm'
			/>
		</div>
	);
};

export default SearchBar;
