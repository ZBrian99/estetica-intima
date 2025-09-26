'use client';
import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';
import { ServiceResponse } from '@/schemas/servicesSchema';

export type CartItem = {
  serviceId: string;
  name: string;
  slug: string;
  imageUrl?: string;
  price: number; // effective price to charge per unit
  originalPrice?: number; // base price for display when promo
  promo?: boolean; // true if the service had promo when added
  quantity: number;
};

type CartState = {
  items: CartItem[];
  addItem: (service: ServiceResponse, quantity?: number) => void;
  removeItem: (serviceId: string) => void;
  clear: () => void;
  increaseQuantity: (serviceId: string) => void;
  decreaseQuantity: (serviceId: string) => void;
  total: () => number;
};

export const useCartStore = create<CartState>()(
  persist(
    (set, get) => ({
      items: [],
      addItem: (service, quantity = 1) => {
        const effectivePrice = service.hasPromo ? service.finalPrice : service.basePrice;
        const basePrice = service.basePrice;
        const promo = !!service.hasPromo;
        set((state) => {
          const exists = state.items.find((it) => it.serviceId === service.id);
          if (exists) {
            return {
              items: state.items.map((it) =>
                it.serviceId === service.id ? { ...it, quantity: it.quantity + quantity } : it
              ),
            };
          }
          const newItem: CartItem = {
            serviceId: service.id,
            name: service.name,
            slug: service.slug,
            imageUrl: service.imageUrl,
            price: effectivePrice,
            originalPrice: basePrice,
            promo,
            quantity,
          };
          return { items: [...state.items, newItem] };
        });
      },
      removeItem: (serviceId) => {
        set((state) => ({ items: state.items.filter((it) => it.serviceId !== serviceId) }));
      },
      clear: () => set({ items: [] }),
      increaseQuantity: (serviceId) => {
        set((state) => ({
          items: state.items.map((it) => (it.serviceId === serviceId ? { ...it, quantity: it.quantity + 1 } : it)),
        }));
      },
      decreaseQuantity: (serviceId) => {
        set((state) => ({
          items: state.items
            .map((it) => (it.serviceId === serviceId ? { ...it, quantity: Math.max(1, it.quantity - 1) } : it))
            .filter((it) => it.quantity > 0),
        }));
      },
      total: () => {
        const { items } = get();
        return items.reduce((acc, it) => acc + it.price * it.quantity, 0);
      },
    }),
    {
      name: 'cart-store',
      storage: typeof window !== 'undefined' ? createJSONStorage(() => localStorage) : undefined,
      partialize: (state) => ({ items: state.items }),
    }
  )
);