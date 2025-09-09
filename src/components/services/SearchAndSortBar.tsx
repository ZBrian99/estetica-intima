'use client';

import { useFiltersStore } from '@/stores/filtersStore';
import { Input } from '@/components/ui/input';
import { useEffect, useState, useCallback, useRef } from 'react';
import { Search, SlidersHorizontal, ArrowUpDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
	Select,
	SelectContent,
	SelectGroup,
	SelectItem,
	SelectLabel,
	SelectTrigger,
	SelectValue,
} from '@/components/ui/select';
import { SortByFields, SortOrder } from '@/schemas/servicesSchema';

const sortOptions = [
	{ value: 'order-asc', label: 'Relevantes' },
	{ value: 'createdAt-desc', label: 'Más recientes' },
	{ value: 'price-asc', label: 'Precio (menor a mayor)' },
	{ value: 'price-desc', label: 'Precio (mayor a menor)' },
];

const SearchAndSortBar = () => {
	const filters = useFiltersStore((state) => state.filters);
	const setFilter = useFiltersStore((state) => state.setFilter);
	const [searchValue, setSearchValue] = useState(filters.search || '');
	const debounceRef = useRef<NodeJS.Timeout | null>(null);

	// Obtener el valor combinado de sortBy y sortOrder
	const getSortValue = () => {
		if (!filters.sortBy) return 'order-asc'; // Valor por defecto: relevantes
		return `${filters.sortBy}-${filters.sortOrder || 'asc'}`;
	};

	// Función debounced para aplicar filtros de búsqueda
	const debouncedSetSearch = useCallback(
		(value: string) => {
			if (debounceRef.current) {
				clearTimeout(debounceRef.current);
			}
			debounceRef.current = setTimeout(() => {
				setFilter('search', value);
			}, 300);
		},
		[setFilter]
	);

	// Manejar cambios en el input de búsqueda
	const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const value = e.target.value;
		setSearchValue(value);
		debouncedSetSearch(value);
	};

	// Manejar cambios en el ordenamiento
	const handleSortChange = (value: string) => {
		if (!value) return;

		const [sortBy, sortOrder] = value.split('-');

		setFilter('sortBy', sortBy as keyof typeof SortByFields.enum);
		setFilter('sortOrder', sortOrder as keyof typeof SortOrder.enum);
	};

	// Sincronizar con el store cuando cambie externamente
	useEffect(() => {
		setSearchValue(filters.search || '');
	}, [filters.search]);

	// Establecer ordenamiento por defecto si no hay ninguno seleccionado
	useEffect(() => {
		if (!filters.sortBy) {
			setFilter('sortBy', 'order');
			setFilter('sortOrder', 'asc');
		}
	}, [filters.sortBy, setFilter]);

	// Cleanup del timeout al desmontar el componente
	useEffect(() => {
		return () => {
			if (debounceRef.current) {
				clearTimeout(debounceRef.current);
			}
		};
	}, []);

	return (
		<div className={`flex flex-col md:flex-row gap-3 w-full`}>
			<div className='relative flex-grow'>
				<Search className='absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 h-4 w-4' />
				<Input
					type='text'
					placeholder={'Buscar servicios...'}
					value={searchValue}
					onChange={handleSearchChange}
					className='pl-10 bg-white/90 border-gray-200 text-gray-900 placeholder:text-gray-500 focus:border-primary-500 focus:ring-primary-500/20 focus:ring-2 h-10 rounded-full shadow-sm w-full'
				/>
			</div>

			<div className='flex-shrink-0 flex gap-2'>
				<Select value={getSortValue()} onValueChange={handleSortChange}>
					<SelectTrigger className='w-[180px] md:w-[220px] bg-white/90 border-gray-200 text-gray-900 h-10 rounded-full shadow-sm focus:border-primary-500 focus:ring-primary-500/20 focus:ring-2'>
						<SelectValue placeholder='Ordenar por' />
					</SelectTrigger>
					<SelectContent>
						<SelectGroup>
							<SelectLabel>Ordenar por</SelectLabel>
							{sortOptions.map((option) => (
								<SelectItem key={option.value} value={option.value}>
									{option.label}
								</SelectItem>
							))}
						</SelectGroup>
					</SelectContent>
				</Select>
			</div>
		</div>
	);
};

export default SearchAndSortBar;
