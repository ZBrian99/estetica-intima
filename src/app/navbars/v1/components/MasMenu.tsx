'use client';

import React from 'react';
import Link from 'next/link';
import {
	NavigationMenu,
	NavigationMenuContent,
	NavigationMenuItem,
	NavigationMenuLink,
	NavigationMenuList,
	NavigationMenuTrigger,
} from '@/components/ui/navigation-menu';
import { cn } from '@/lib/utils';
import { ChevronDownIcon } from 'lucide-react';

const serviciosAdicionales = [
	{ name: 'Giftcards', href: '/giftcards' },
	{ name: 'Cursos', href: '/cursos' },
	{ name: 'Maquillaje para eventos', href: '/maquillaje-eventos' },
	{ name: 'Pase libre', href: '/pase-libre' },
	{ name: 'Promociones', href: '/promociones' }
];

const informacion = [
	{ name: 'Nosotras', href: '/nosotros' },
	{ name: 'Galería', href: '/galeria' },
	{ name: 'Blog', href: '/blog' },
	{ name: 'Antes y Después', href: '/antes-despues' },
	{ name: 'Preguntas Frecuentes', href: '/faq' }
];

const legal = [
	{ name: 'Contacto', href: '/contacto' },
	{ name: 'Políticas de cancelación', href: '/politicas' },
	{ name: 'Términos y condiciones', href: '/terminos' }
];

const MasMenu = () => {
	return (
		<NavigationMenu>
			<NavigationMenuList>
				<NavigationMenuItem>
					<NavigationMenuTrigger className='group flex items-center space-x-1 text-foreground hover:text-primary transition-all duration-300 font-medium relative px-3 py-2 rounded-md hover:bg-primary/5'>
						<span>Más</span>
						<ChevronDownIcon className='w-4 h-4 transition-all duration-300 group-data-[state=open]:rotate-180' />
						<span className='absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full'></span>
					</NavigationMenuTrigger>
					<NavigationMenuContent>
						<div className='grid w-[320px] md:w-[650px] gap-4 md:gap-8 p-4 md:p-8'>
							<div className='grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8'>
								{/* Servicios Adicionales */}
								<div className='space-y-4'>
									<h3 className='text-sm font-semibold text-primary border-b border-primary/20 pb-2'>
										Servicios Adicionales
									</h3>
									<ul className='space-y-3'>
										{serviciosAdicionales.map((item) => (
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
									<h3 className='text-sm font-semibold text-primary border-b border-primary/20 pb-2'>Información</h3>
									<ul className='space-y-3'>
										{informacion.map((item) => (
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
										Legal y Contacto
									</h3>
									<ul className='space-y-3'>
										{legal.map((item) => (
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
									{/* Ver todos link */}
									<div className='pt-4 border-t border-primary/20'>
										<NavigationMenuLink asChild>
											<Link
												href='/sitemap'
												className='inline-flex items-center text-primary hover:text-primary/80 font-medium transition-colors duration-200 group text-sm'
											>
												Ver todo el sitio
												<svg
													className='ml-2 h-4 w-4 transition-transform duration-200 group-hover:translate-x-1'
													fill='none'
													stroke='currentColor'
													viewBox='0 0 24 24'
												>
													<path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M9 5l7 7-7 7' />
												</svg>
											</Link>
										</NavigationMenuLink>
									</div>
								</div>
							</div>
						</div>
					</NavigationMenuContent>
				</NavigationMenuItem>
			</NavigationMenuList>
		</NavigationMenu>
	);
};

export { MasMenu };