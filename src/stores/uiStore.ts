import { create } from 'zustand';
import { devtools } from 'zustand/middleware';

type UIState = {
	// Estados de UI
	isFiltersOpen: boolean;
	isSidebarOpen: boolean;
	isSearchOpen: boolean;
	// Acciones de UI
	toggleFilters: () => void;
	setFiltersOpen: (open: boolean) => void;
	toggleSidebar: () => void;
	setSidebarOpen: (open: boolean) => void;
	toggleSearch: () => void;
	setSearchOpen: (open: boolean) => void;
	// Utilidades
	closeAllPanels: () => void;
};

export const useUIStore = create<UIState>()((set) => ({
	// Estado inicial
	isFiltersOpen: false,
	isSidebarOpen: false,
	isSearchOpen: false,

	// Acciones de filtros
	toggleFilters: () => {
		set((state) => ({ isFiltersOpen: !state.isFiltersOpen }));
	},

	setFiltersOpen: (open) => {
		set({ isFiltersOpen: open });
	},

	// Acciones de sidebar
	toggleSidebar: () => {
		set((state) => ({ isSidebarOpen: !state.isSidebarOpen }));
	},

	setSidebarOpen: (open) => {
		set({ isSidebarOpen: open });
	},

	// Acciones de búsqueda
	toggleSearch: () => {
		set((state) => ({ isSearchOpen: !state.isSearchOpen }));
	},

	setSearchOpen: (open) => {
		set({ isSearchOpen: open });
	},

	// Utilidades
	closeAllPanels: () => {
		set({
			isFiltersOpen: false,
			isSidebarOpen: false,
			isSearchOpen: false,
		});
	},
}));

// Selectores optimizados
export const useFiltersUI = () =>
	useUIStore((state) => ({
		isFiltersOpen: state.isFiltersOpen,
		toggleFilters: state.toggleFilters,
		setFiltersOpen: state.setFiltersOpen,
	}));

export const useSidebarUI = () =>
	useUIStore((state) => ({
		isSidebarOpen: state.isSidebarOpen,
		toggleSidebar: state.toggleSidebar,
		setSidebarOpen: state.setSidebarOpen,
	}));

export const useSearchUI = () =>
	useUIStore((state) => ({
		isSearchOpen: state.isSearchOpen,
		toggleSearch: state.toggleSearch,
		setSearchOpen: state.setSearchOpen,
	}));
