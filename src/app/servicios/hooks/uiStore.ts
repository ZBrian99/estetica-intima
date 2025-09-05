'use client';

import { create } from 'zustand';

type UIState = {
	isPending: boolean;
	setIsPending: (isPending: boolean) => void;
};

export const useUiStore = create<UIState>((set, get) => ({
	isPending: false,
	setIsPending: (isPending) => set({ isPending }),
}));
