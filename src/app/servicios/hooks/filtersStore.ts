'use client';

import { create } from 'zustand';

export type Filters = {
	page: number;
	// limit: number;
	sort?: string;
	category?: string;
	[key: string]: string | number | undefined;
};

type FiltersState = {
	filters: Filters;
	setFilter: (key: string, value?: string | number) => void;
	setFilters: (newFilters: Partial<Filters>) => void;
	initFilters: (initialFilters: Partial<Filters>) => void;
};

export const useFiltersStore = create<FiltersState>((set, get) => ({
	filters: { page: 1, limit: 10 },

	setFilter: (key, value) => {
		set((state) => {
			const updated = { ...state.filters };
			if (value === undefined || value === '') delete updated[key];
			else updated[key] = value;
			return { filters: updated };
		});
	},

	setFilters: (newFilters) => {
		set((state) => ({ filters: { ...state.filters, ...newFilters } }));
	},

	initFilters: (initialFilters) => {
		set({ filters: { ...get().filters, ...initialFilters } });
	},
}));
