'use client';

import Link from 'next/link';
import Image from 'next/image';
import { FiShoppingCart, FiSearch } from 'react-icons/fi';
import { Button } from '@/components/ui/button';
import TiendaButton from '../TiendaButton';
import { useSetCartOpen, useSetSearchOpen } from '@/stores/uiStore';
import { useCartStore } from '@/stores/cartStore';

export default function NavBar() {
  const setCartOpen = useSetCartOpen();
  const setSearchOpen = useSetSearchOpen();
  const cartCount = useCartStore((state) => state.items.reduce((acc, it) => acc + it.quantity, 0));

  return (
    <header className='fixed top-0 inset-x-0 z-50 bg-white border-b border-gray-200'>
      <div className='max-w-7xl mx-auto px-4'>
        <div className='h-16 flex items-center justify-between'>
          {/* Brand */}
          <Link href='/' className='flex items-center gap-2 flex-shrink-0'>
            <Image
              src='/logo-sin-fondo.webp'
              alt='Intima Estética'
              width={120}
              height={120}
              className='h-10 w-10'
              priority
            />
            <span className='font-semibold text-gray-900 text-lg hidden sm:block'>Intima Estética</span>
          </Link>

          {/* Right actions */}
          <div className='flex items-center gap-2'>
            <Button
              variant='ghost'
              size='sm'
              className='text-gray-700 hover:text-primary-700'
              onClick={() => setSearchOpen(true)}
              aria-label='Buscar'
            >
              <FiSearch className='h-5 w-5' />
              <span className='sr-only'>Buscar</span>
            </Button>

            <TiendaButton />

            <button
              aria-label='Carrito'
              onClick={() => setCartOpen(true)}
              className='relative inline-flex items-center justify-center rounded-md p-2 text-gray-700 hover:text-primary-700'
            >
              <FiShoppingCart className='h-5 w-5' />
              {cartCount > 0 && (
                <span className='absolute -top-1 -right-1 min-h-4 min-w-4 px-1 rounded-full bg-primary-600 text-white text-[10px] leading-4 text-center font-semibold'>
                  {cartCount}
                </span>
              )}
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
