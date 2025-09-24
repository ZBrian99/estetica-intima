'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import { FiShoppingCart, FiMenu, FiX } from 'react-icons/fi';
import { IoChevronDown } from 'react-icons/io5';

import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuTrigger,
	DropdownMenuSeparator,
} from '@/components/ui/dropdown-menu';
import {
	NavigationMenu,
	NavigationMenuContent,
	NavigationMenuItem,
	NavigationMenuLink,
	NavigationMenuList,
	NavigationMenuTrigger,
} from '@/components/ui/navigation-menu';
import {
	Sheet,
	SheetContent,
	SheetHeader,
	SheetTitle,
	SheetTrigger,
} from '@/components/ui/sheet';
import { Button } from '@/components/ui/button';
import TiendaButton from '../TiendaButton';

interface NavLinkItem {
	label: string;
	href: string;
	isExternal?: boolean;
}

const treatmentCategories = [
	{
		label: 'Depilación Láser',
		href: '/servicios?categoria=depilacion',
		items: [
			{ label: 'Depilación Femenina', href: '/servicios?categoria=depilacion-femenina' },
			{ label: 'Depilación Masculina', href: '/servicios?categoria=depilacion-masculina' },
			{ label: 'Combos Depilación', href: '/servicios?categoria=combos-depilacion' },
		],
	},
	{
		label: 'Tratamientos Corporales',
		href: '/servicios?categoria=tratamientos-corporales',
		items: [
			{ label: 'Maderoterapia', href: '/servicios?categoria=maderoterapia' },
			{ label: 'Mio Up', href: '/servicios?categoria=mio-up' },
			{ label: 'Alpha Synergy', href: '/servicios?categoria=alpha-synergy' },
			{ label: 'Presoterapia', href: '/servicios?categoria=presoterapia' },
		],
	},
	{
		label: 'Tratamientos Faciales',
		href: '/servicios?categoria=tratamientos-faciales',
		items: [
			{ label: 'Limpieza Facial', href: '/servicios?categoria=limpieza-facial' },
			{ label: 'Peeling', href: '/servicios?categoria=peeling' },
			{ label: 'Hidratación', href: '/servicios?categoria=hidratacion' },
		],
	},
	{
		label: 'Otros Servicios',
		href: '/servicios?categoria=otros',
		items: [
			{ label: 'Bronceado', href: '/servicios?categoria=bronceado' },
			{ label: 'Pestañas & Cejas', href: '/servicios?categoria=microblading' },
			{ label: 'Manos & Pies', href: '/servicios?categoria=estetica-integral' },
		],
	},
];

const highlightedItems: NavLinkItem[] = [
	{ label: 'Gift Cards', href: '/gift-cards' },
	{ label: 'Eventos Especiales', href: '/eventos-especiales' },
	{ label: 'Promociones', href: '/promociones' },
];

const moreItems: NavLinkItem[] = [
  { label: 'Pase Libre', href: '/pase-libre' },
	{ label: 'Antes y Después', href: '/#antes-despues' },
  { label: 'Cursos', href: '/cursos' },
	{ label: 'Nosotras', href: '/nosotras' },
	{ label: 'Contacto', href: '/#contacto' },
	{ label: 'Preguntas Frecuentes', href: '/#faq' },
];

export default function NavBar() {
	const [isOpen, setIsOpen] = useState(false);

	return (
		<header className='fixed top-0 inset-x-0 z-50 bg-white border-b border-gray-200'>
			<div className='max-w-7xl mx-auto px-4'>
				<div className='h-16 flex items-center justify-between'>
					{/* Brand - Izquierda */}
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

					{/* Desktop Navigation - Derecha */}
					<div className='hidden lg:flex items-center gap-1'>
						{/* Menú Tratamientos con NavigationMenu */}
						<NavigationMenu>
							<NavigationMenuList>
								<NavigationMenuItem>
									<NavigationMenuTrigger className='px-3 py-2 text-sm font-medium text-gray-700 hover:text-primary-700'>
										Tratamientos
									</NavigationMenuTrigger>
									<NavigationMenuContent>
										<div className='grid w-[600px] gap-3 p-6 md:grid-cols-2'>
											{treatmentCategories.map((category) => (
												<div key={category.label} className='space-y-2'>
													<NavigationMenuLink asChild>
														<Link
															href={category.href}
															className='block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground'
														>
															<div className='text-sm font-medium leading-none text-gray-900'>
																{category.label}
															</div>
														</Link>
													</NavigationMenuLink>
													<div className='space-y-1'>
														{category.items.map((item) => (
															<NavigationMenuLink key={item.href} asChild>
																<Link
																	href={item.href}
																	className='block select-none rounded-md p-2 pl-4 text-sm leading-none text-gray-600 no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground'
																>
																	{item.label}
																</Link>
															</NavigationMenuLink>
														))}
													</div>
												</div>
											))}
										</div>
									</NavigationMenuContent>
								</NavigationMenuItem>
							</NavigationMenuList>
						</NavigationMenu>

						{/* Items Destacados */}
						{highlightedItems.map((item) => (
							<Link
								key={item.href}
								href={item.href}
								className='px-3 py-2 text-sm font-medium text-gray-700 hover:text-primary-700 transition-colors'
							>
								{item.label}
							</Link>
						))}

						{/* Menú Más */}
						<DropdownMenu>
							<DropdownMenuTrigger asChild>
								<Button variant='ghost' className='px-3 py-2 text-sm font-medium text-gray-700 hover:text-primary-700'>
									Más
									<IoChevronDown className='ml-1 h-4 w-4' />
								</Button>
							</DropdownMenuTrigger>
							<DropdownMenuContent>
								{moreItems.map((item) => (
									<DropdownMenuItem key={item.href} asChild>
										<Link href={item.href}>{item.label}</Link>
									</DropdownMenuItem>
								))}
							</DropdownMenuContent>
						</DropdownMenu>
					</div>

					{/* Botón Tienda */}
					<div className='hidden lg:flex items-center gap-1'>
						<TiendaButton />

						{/* Carrito */}
						<Button variant='ghost' size='sm' className='p-2'>
							<FiShoppingCart className='h-5 w-5' />
						</Button>
					</div>

					{/* Mobile Navigation */}
					{/* <div className='flex lg:hidden items-center gap-2'>
						<TiendaButton />
						<Button variant='ghost' size='sm' className='p-2'>
							<FiShoppingCart className='h-5 w-5' />
						</Button>
						<Sheet open={isOpen} onOpenChange={setIsOpen}>
							<SheetTrigger asChild>
								<Button variant='ghost' size='sm' className='p-2'>
									<FiMenu className='h-6 w-6' />
								</Button>
							</SheetTrigger>
							<SheetContent side='right' className='w-80'>
								<SheetHeader>
									<SheetTitle>Menú</SheetTitle>
								</SheetHeader>
								<div className='mt-6 space-y-4'>
                  
									<div className='space-y-2'>
										<h3 className='font-semibold text-gray-900 text-lg'>Tratamientos</h3>
										{treatmentCategories.map((category) => (
											<div key={category.label} className='space-y-1'>
												<Link
													href={category.href}
													className='block py-2 text-gray-900 font-medium hover:text-primary-700'
													onClick={() => setIsOpen(false)}
												>
													{category.label}
												</Link>
												{category.items.map((item) => (
													<Link
														key={item.href}
														href={item.href}
														className='block py-1 pl-4 text-gray-600 hover:text-primary-700'
														onClick={() => setIsOpen(false)}
													>
														{item.label}
													</Link>
												))}
											</div>
										))}
									</div>

									<div className='space-y-2 border-t pt-4'>
										{highlightedItems.map((item) => (
											<Link
												key={item.href}
												href={item.href}
												className='block py-2 text-gray-900 font-medium hover:text-primary-700'
												onClick={() => setIsOpen(false)}
											>
												{item.label}
											</Link>
										))}
									</div>

									<div className='space-y-2 border-t pt-4'>
										{moreItems.map((item) => (
											<Link
												key={item.href}
												href={item.href}
												className='block py-2 text-gray-600 hover:text-primary-700'
												onClick={() => setIsOpen(false)}
											>
												{item.label}
											</Link>
										))}
									</div>
								</div>
							</SheetContent>
						</Sheet>
					</div> */}
				</div>
			</div>
		</header>
	);
}
