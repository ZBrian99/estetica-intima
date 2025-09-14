import { ServicesFiltersType } from '@/schemas/servicesSchema';
import { create } from 'zustand';

const initialFilters: ServicesFiltersType = {
	page: 1,
};

type FiltersState = {
	filters: ServicesFiltersType;
	setFilter: <K extends keyof ServicesFiltersType>(key: K, value: ServicesFiltersType[K]) => void;
	setFilters: (filters: Partial<ServicesFiltersType>) => void;
	clearFilters: () => void;
};

export const useFiltersStore = create<FiltersState>()((set, get) => ({
	filters: initialFilters,

	setFilter: (key, value) => {
		set((state) => ({
			filters: {
				...state.filters,
				[key]: value,
				// ...(key !== 'page' ? { page: 1 } : {}),
			},
		}));
	},

	setFilters: (newFilters) => {
		set((state) => ({
			filters: {
				// ...state.filters,
				...newFilters,
				// page: 1,
			},
		}));
	},

	clearFilters: () => {
		set({ filters: { ...initialFilters } });
	},
}));

export const useFilters = () => useFiltersStore((state) => state.filters);
export const useFiltersActions = () =>
	useFiltersStore((state) => ({
		setFilter: state.setFilter,
		setFilters: state.setFilters,
		clearFilters: state.clearFilters,
	}));
