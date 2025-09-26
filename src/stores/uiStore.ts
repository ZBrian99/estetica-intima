'use client';
import { create } from 'zustand';

type UIState = {
	// Estados de UI
	isFiltersOpen: boolean;
	isSidebarOpen: boolean;
	isSearchOpen: boolean;
	isCartOpen: boolean;
	// Acciones de UI
	toggleFilters: () => void;
	setFiltersOpen: (open: boolean) => void;
	toggleSidebar: () => void;
	setSidebarOpen: (open: boolean) => void;
	toggleSearch: () => void;
	setSearchOpen: (open: boolean) => void;
	toggleCart: () => void;
	setCartOpen: (open: boolean) => void;
	// Utilidades
	closeAllPanels: () => void;
};

export const useUIStore = create<UIState>()((set) => ({
	// Estado inicial
	isFiltersOpen: false,
	isSidebarOpen: false,
	isSearchOpen: false,
	isCartOpen: false,

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

	// Acciones de carrito
	toggleCart: () => {
		set((state) => ({ isCartOpen: !state.isCartOpen }));
	},

	setCartOpen: (open) => {
		set({ isCartOpen: open });
	},

	// Utilidades
	closeAllPanels: () => {
		set({
			isFiltersOpen: false,
			isSidebarOpen: false,
			isSearchOpen: false,
			isCartOpen: false,
		});
	},
}));

// Selectores compuestos (sin shallow por ahora)
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

export const useCartUI = () =>
	useUIStore((state) => ({
		isCartOpen: state.isCartOpen,
		toggleCart: state.toggleCart,
		setCartOpen: state.setCartOpen,
	}));

// Selectores primitivos para evitar cambios de identidad de objetos
export const useCartOpen = () => useUIStore((state) => state.isCartOpen);
export const useSetCartOpen = () => useUIStore((state) => state.setCartOpen);

export const useIsSearchOpen = () => useUIStore((state) => state.isSearchOpen);
export const useSetSearchOpen = () => useUIStore((state) => state.setSearchOpen);

export const useIsFiltersOpen = () => useUIStore((state) => state.isFiltersOpen);
export const useSetFiltersOpen = () => useUIStore((state) => state.setFiltersOpen);
export const useToggleFilters = () => useUIStore((state) => state.toggleFilters);
