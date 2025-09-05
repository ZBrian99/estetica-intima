import { ServicesFiltersType } from '@/schemas/servicesSchema';
import { create } from 'zustand';

const initialFilters: ServicesFiltersType = {};

type FiltersState = {
	// Solo estado de filtros
	filters: ServicesFiltersType;
	// Solo acciones de filtros
	setFilter: <K extends keyof ServicesFiltersType>(key: K, value: ServicesFiltersType[K]) => void;
	setFilters: (filters: Partial<ServicesFiltersType>) => void;
	clearFilters: () => void;
	resetToDefaults: () => void;
};


export const useFiltersStore = create<FiltersState>()((set, get) => ({
	filters: initialFilters,

	setFilter: (key, value) => {
		set((state) => ({
			filters: {
				...state.filters,
				[key]: value,
				// Reset página cuando cambien filtros (excepto paginación y orden)
				// ...(key !== 'page' && key !== 'sortBy' && key !== 'sortOrder' ? { page: 1 } : {}),
			},
		}));
	},

	setFilters: (newFilters) => {
		set((state) => ({
			filters: {
				...state.filters,
				...newFilters,
			},
		}));
	},

	clearFilters: () => {
		set({ filters: {} });
	},

	resetToDefaults: () => {
		set({ filters: { ...initialFilters } });
	},
}));

// Selectores optimizados
export const useFilters = () => useFiltersStore((state) => state.filters);
export const useFiltersActions = () =>
	useFiltersStore((state) => ({
		setFilter: state.setFilter,
		setFilters: state.setFilters,
		clearFilters: state.clearFilters,
		resetToDefaults: state.resetToDefaults,
	}));
