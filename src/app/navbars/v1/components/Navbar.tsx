'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { FiSearch, FiShoppingBag, FiX, FiMoreHorizontal, FiGift, FiInfo, FiShield, FiArrowRight, FiScissors, FiHeart, FiStar, FiEye, FiPercent } from 'react-icons/fi';
import {
	NavigationMenu,
	NavigationMenuContent,
	NavigationMenuItem,
	NavigationMenuLink,
	NavigationMenuList,
	NavigationMenuTrigger,
	navigationMenuTriggerStyle,
} from '@/components/ui/navigation-menu';
import { DepilacionMenu } from './DepilacionMenu';
import { CorporalesMenu } from './CorporalesMenu';
import { FacialesMenu } from './FacialesMenu';
import { cn } from '@/lib/utils';
import BellezaMenu from './BellezaMenu';


export function Navbar() {
  const [searchOpen, setSearchOpen] = useState(false);
  const [cartOpen, setCartOpen] = useState(false);

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-md border-b border-border/50 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Brand/Logo */}
            <Link href="/" className="flex items-center space-x-3 hover:opacity-80 transition-all duration-300 hover:scale-105">
              <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-lg">E</span>
              </div>
              <div className="flex flex-col">
                <span className="text-lg font-bold text-foreground leading-tight">
                  Estética Íntima
                </span>
                <span className="text-xs text-muted-foreground leading-tight">
                  Belleza y bienestar
                </span>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center">
              <NavigationMenu viewport={false}>
                <NavigationMenuList>
                  <NavigationMenuItem>
                    <NavigationMenuTrigger className='flex items-center gap-2'>
                      <FiScissors className='w-4 h-4' />
                      Depilación
                    </NavigationMenuTrigger>
                    <DepilacionMenu />
                  </NavigationMenuItem>
                  <NavigationMenuItem>
                    <NavigationMenuTrigger className='flex items-center gap-2'>
                      <FiHeart className='w-4 h-4' />
                      Corporales
                    </NavigationMenuTrigger>
                    <CorporalesMenu />
                  </NavigationMenuItem>
                  <NavigationMenuItem>
                    <NavigationMenuTrigger className='flex items-center gap-2'>
                      <FiStar className='w-4 h-4' />
                      Faciales
                    </NavigationMenuTrigger>
                    <FacialesMenu />
                  </NavigationMenuItem>
                  <NavigationMenuItem>
                    <NavigationMenuTrigger className='flex items-center gap-2'>
                      <FiEye className='w-4 h-4' />
                      Belleza
                    </NavigationMenuTrigger>
                    <BellezaMenu />
                  </NavigationMenuItem>
                  <NavigationMenuItem>
                    <Link href="/promociones" legacyBehavior passHref>
                      <NavigationMenuLink className={cn(navigationMenuTriggerStyle(), 'flex items-center gap-2')}>
                        <FiPercent className='w-4 h-4' />
                        Promociones
                      </NavigationMenuLink>
                    </Link>
                  </NavigationMenuItem>
                  <NavigationMenuItem>
                    <Link href="/giftcards" legacyBehavior passHref>
                      <NavigationMenuLink className={cn(navigationMenuTriggerStyle(), 'flex items-center gap-2')}>
                        <FiGift className='w-4 h-4' />
                        Giftcards
                      </NavigationMenuLink>
                    </Link>
                  </NavigationMenuItem>
                  <NavigationMenuItem>
										<NavigationMenuTrigger className='group flex items-center space-x-1 text-foreground hover:text-primary transition-all duration-300 font-medium relative px-3 py-2 rounded-md hover:bg-primary/5'>
											<FiMoreHorizontal className='w-4 h-4 mr-1' />
											<span>Más</span>
											<span className='absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full'></span>
										</NavigationMenuTrigger>
										<NavigationMenuContent>
											<div className='grid w-[320px] md:w-[650px] gap-4 md:gap-8 p-4 md:p-8'>
												<div className='grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8'>
													{/* Servicios Adicionales */}
													<div className='space-y-4'>
														<h3 className='text-sm font-semibold text-primary border-b border-primary/20 pb-2'>
															<FiGift className='w-4 h-4 inline mr-2' />
															Servicios Adicionales
														</h3>
														<ul className='space-y-3'>
															{[
																{ name: 'Giftcards', href: '/giftcards' },
																{ name: 'Cursos', href: '/cursos' },
																{ name: 'Maquillaje para eventos', href: '/maquillaje-eventos' },
																{ name: 'Pase libre', href: '/pase-libre' },
																{ name: 'Promociones', href: '/promociones' }
															].map((item) => (
																<li key={item.name}>
																	<NavigationMenuLink asChild>
																		<Link
																			href={item.href}
																			className={cn(
																				'block select-none space-y-1 rounded-md p-2 leading-none no-underline outline-none transition-all duration-300',
																				'hover:bg-primary/10 hover:text-primary hover:translate-x-1 text-sm text-muted-foreground'
																			)}
																		>
																			{item.name}
																		</Link>
																	</NavigationMenuLink>
																</li>
															))}
														</ul>
													</div>

													{/* Información */}
													<div className='space-y-4'>
														<h3 className='text-sm font-semibold text-primary border-b border-primary/20 pb-2'>
															<FiInfo className='w-4 h-4 inline mr-2' />
															Información
														</h3>
														<ul className='space-y-3'>
															{[
																{ name: 'Nosotras', href: '/nosotros' },
																{ name: 'Galería', href: '/galeria' },
																{ name: 'Blog', href: '/blog' },
																{ name: 'Antes y Después', href: '/antes-despues' },
																{ name: 'Preguntas Frecuentes', href: '/faq' }
															].map((item) => (
																<li key={item.name}>
																	<NavigationMenuLink asChild>
																		<Link
																			href={item.href}
																			className={cn(
																				'block select-none space-y-1 rounded-md p-2 leading-none no-underline outline-none transition-all duration-300',
																				'hover:bg-primary/10 hover:text-primary hover:translate-x-1 text-sm text-muted-foreground'
																			)}
																		>
																			{item.name}
																		</Link>
																	</NavigationMenuLink>
																</li>
															))}
														</ul>
													</div>

													{/* Legal y Contacto */}
													<div className='space-y-4'>
														<h3 className='text-sm font-semibold text-primary border-b border-primary/20 pb-2'>
															<FiShield className='w-4 h-4 inline mr-2' />
															Legal y Contacto
														</h3>
														<ul className='space-y-3'>
															{[
																{ name: 'Contacto', href: '/contacto' },
																{ name: 'Políticas de cancelación', href: '/politicas' },
																{ name: 'Términos y condiciones', href: '/terminos' }
															].map((item) => (
																<li key={item.name}>
																	<NavigationMenuLink asChild>
																		<Link
																			href={item.href}
																			className={cn(
																				'block select-none space-y-1 rounded-md p-2 leading-none no-underline outline-none transition-all duration-300',
																				'hover:bg-primary/10 hover:text-primary hover:translate-x-1 text-sm text-muted-foreground'
																			)}
																		>
																			{item.name}
																		</Link>
																	</NavigationMenuLink>
																</li>
															))}
														</ul>
													</div>
												</div>

												{/* Ver todos link */}
												<div className='pt-4 border-t border-primary/20'>
													<NavigationMenuLink asChild>
														<Link
															href='/sitemap'
															className='inline-flex items-center text-primary hover:text-primary/80 font-medium transition-colors duration-200 group text-sm'
														>
															Ver todo el sitio
															<FiArrowRight className='ml-2 h-4 w-4 transition-transform duration-200 group-hover:translate-x-1' />
														</Link>
													</NavigationMenuLink>
												</div>
											</div>
										</NavigationMenuContent>
									</NavigationMenuItem>
                </NavigationMenuList>
              </NavigationMenu>
            </div>

            {/* Right Icons */}
            <div className="flex items-center space-x-4">
              <button
                onClick={() => setSearchOpen(true)}
                className="p-2 text-foreground hover:text-primary transition-all duration-300 hover:scale-110 hover:bg-primary/10 rounded-full"
                aria-label="Buscar"
              >
                <FiSearch className="w-5 h-5" />
              </button>
              
              <button
                onClick={() => setCartOpen(true)}
                className="p-2 text-foreground hover:text-primary transition-all duration-300 hover:scale-110 hover:bg-primary/10 rounded-full relative group"
                aria-label="Carrito"
              >
                <FiShoppingBag className="w-5 h-5" />
                <span className="absolute -top-1 -right-1 bg-primary text-primary-foreground text-xs rounded-full w-5 h-5 flex items-center justify-center transition-all duration-300 group-hover:scale-110">
                  0
                </span>
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Search Overlay */}
      {searchOpen && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-start justify-center pt-20 animate-in fade-in duration-300">
          <div className="bg-background rounded-xl shadow-2xl w-full max-w-2xl mx-4 animate-in slide-in-from-top-4 duration-300">
            <div className="p-6">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-semibold text-foreground">Buscar servicios</h2>
                <button
                  onClick={() => setSearchOpen(false)}
                  className="p-2 hover:bg-muted rounded-full transition-all duration-300 hover:scale-110 text-muted-foreground hover:text-foreground"
                >
                  <FiX className="w-6 h-6" />
                </button>
              </div>
              <div className="relative">
                <FiSearch className="absolute left-4 top-1/2 transform -translate-y-1/2 text-muted-foreground w-5 h-5" />
                <input
                  type="text"
                  placeholder="¿Qué tratamiento estás buscando?"
                  className="w-full pl-12 pr-4 py-4 border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300 bg-background text-foreground placeholder:text-muted-foreground"
                  autoFocus
                />
              </div>
              <div className="mt-4 text-sm text-muted-foreground">
                <p>Prueba buscar: depilación láser, limpieza facial, masajes...</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}