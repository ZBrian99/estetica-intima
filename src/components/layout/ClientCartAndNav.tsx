'use client';

import dynamic from 'next/dynamic';

const NavBar = dynamic(() => import('./NavBar'), { ssr: false });
const CartSheet = dynamic(() => import('@/components/services/CartSheet'), { ssr: false });
const SearchOverlay = dynamic(() => import('@/components/services/SearchOverlay'), { ssr: false });

export default function ClientCartAndNav() {
  return (
    <>
      <NavBar />
      <CartSheet />
      <SearchOverlay />
    </>
  );
}