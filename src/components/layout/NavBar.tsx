'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import {
	FiShoppingCart,
	FiMenu,
	FiSearch,
	FiZap,
	FiActivity,
	FiSmile,
	FiHeart,
	FiArrowRight,
	FiUnlock,
	FiImage,
	FiBook,
	FiUsers,
	FiHelpCircle,
	FiTag,
	FiGift,
  FiPlus,
} from 'react-icons/fi';

import {
	NavigationMenu,
	NavigationMenuContent,
	NavigationMenuItem,
	NavigationMenuLink,
	NavigationMenuList,
	NavigationMenuTrigger,
} from '@/components/ui/navigation-menu';
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet';
import { Button } from '@/components/ui/button';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { useSetCartOpen, useSetSearchOpen } from '@/stores/uiStore';
import { useCartStore } from '@/stores/cartStore';

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
	{ label: 'Gift Cards', href: '/giftcards' },
	{ label: 'Eventos Especiales', href: '/eventos-especiales' },
	{ label: 'Promociones', href: '/promociones' },
];

const moreItems: NavLinkItem[] = [
	{ label: 'Pase Libre', href: '/pase-libre' },
	{ label: 'Resultados', href: '/#resultados' },
	{ label: 'Cursos', href: '/cursos' },
	{ label: 'Nosotras', href: '/nosotras' },
	{ label: 'Preguntas Frecuentes', href: '/#faq' },
];

// Mobile navigation data
interface MobileSubItem {
	label: string;
	href: string;
}
interface MobileSubCategory {
	label: string;
	href: string;
	items: MobileSubItem[];
}
interface MobileCategory {
	key: string;
	label: string;
	subcategories: MobileSubCategory[];
}

const mobileCategories: MobileCategory[] = [
	{
		key: 'depilacion',
		label: 'Depilación',
		subcategories: [
			{
				label: 'Zonas populares',
				href: '/servicios?categoria=depilacion&sub=zonas-pequenas',
				items: [
					{ label: 'Glúteos completo', href: '/servicios?categoria=depilacion&item=menton' },
					{ label: 'Cavado completo', href: '/servicios?categoria=depilacion&item=cavado-completo' },
          { label: 'Espalda completa', href: '/servicios?categoria=depilacion&item=espalda-completa' },
          { label: 'Brazos completos', href: '/servicios?categoria=depilacion&item=brazos-completos' },
				],
			},
			{
				label: 'Combos',
				href: '/servicios?categoria=depilacion&sub=combos',
				items: [
					{ label: 'Pierna completa', href: '/servicios?categoria=depilacion&item=pierna-completa' },
					{ label: 'Rostro completo', href: '/servicios?categoria=depilacion&combo=rostro-completo' },
					{ label: 'Pierna + Glúteos', href: '/servicios?categoria=depilacion&combo=pierna-axilas' },
					{ label: 'Cavado + Axilas', href: '/servicios?categoria=depilacion&combo=cavado-axilas' },
				],
			},
		],
	},
	{
		key: 'corporales',
		label: 'Corporales',
		subcategories: [
			{
				label: 'Tratamientos',
				href: '/servicios?categoria=tratamientos-corporales',
				items: [
					{ label: 'Maderoterapia', href: '/servicios?categoria=tratamientos-corporales&item=maderoterapia' },
					{ label: 'Mio Up 1 zona', href: '/servicios?categoria=tratamientos-corporales&item=mio-up-1-zona' },
					{
						label: 'Alpha Synergy 1 zona',
						href: '/servicios?categoria=tratamientos-corporales&item=alpha-synergy-1-zona',
					},
					{ label: 'Presoterapia', href: '/servicios?categoria=tratamientos-corporales&item=presoterapia' },
				],
			},
			{
				label: 'Masajes',
				href: '/servicios?categoria=masajes',
				items: [
					{ label: 'Descontracturante', href: '/servicios?categoria=masajes&item=descontracturante' },
					{ label: 'Deportivo', href: '/servicios?categoria=masajes&item=deportivo' },
					{ label: 'Piedras Calientes', href: '/servicios?categoria=masajes&item=piedras-calientes' },
				],
			},
			{
				label: 'Combos',
				href: '/servicios?categoria=combos-corporales',
				items: [
					{ label: 'Madero + Mio Up', href: '/servicios?categoria=combos-corporales&combo=madero-mio' },
					{ label: 'Mio Up + Alpha', href: '/servicios?categoria=combos-corporales&combo=mio-alpha' },
				],
			},
		],
	},
	{
		key: 'faciales',
		label: 'Faciales',
		subcategories: [
			{
				label: 'Tratamientos',
				href: '/servicios?categoria=tratamientos-faciales',
				items: [
					{ label: 'Limpieza Facial', href: '/servicios?categoria=tratamientos-faciales&item=limpieza-facial' },
          { label: 'Peeling Quimico', href: '/servicios?categoria=tratamientos-faciales&item=peeling' },
          { label: 'Hollywood Peel', href: '/servicios?categoria=tratamientos-faciales&item=hollywood-peel' },
					{ label: 'Hidratación', href: '/servicios?categoria=tratamientos-faciales&item=hidratacion' },
					{ label: 'Dermopigmentación', href: '/servicios?categoria=tratamientos-faciales&item=dermopigmentacion' },
				],
			},
			{
				label: 'Combos',
				href: '/servicios?categoria=combos-faciales',
				items: [
					{
						label: 'Ultracavitación + Alpha Synergy',
						href: '/servicios?categoria=combos-faciales&combo=ultracavitacion-alpha',
					},
				],
			},
		],
	},
	{
		key: 'belleza',
		label: 'Belleza',
		subcategories: [
			{
				label: 'Cejas & Pestañas',
				href: '/servicios?categoria=cejas-pestanas',
				items: [
          { label: 'Microblading', href: '/servicios?categoria=cejas-pestanas&item=microblading' },
          { label: 'Extensiones', href: '/servicios?categoria=cejas-pestanas&item=extensiones' },
          { label: 'Lifting', href: '/servicios?categoria=cejas-pestanas&item=lifting' },
          { label: 'Perfilado', href: '/servicios?categoria=cejas-pestanas&item=perfilado' },
				],
			},
			{
				label: 'Manos & Pies',
				href: '/servicios?categoria=manos-pies',
				items: [
          { label: 'Pedicuria', href: '/servicios?categoria=manos-pies&item=pedicuria' },
          { label: 'Esmaltado Tradicional', href: '/servicios?categoria=manos-pies&item=esmaltado-tradicional' },
					{ label: 'Semipermanente', href: '/servicios?categoria=manos-pies&item=esmaltado-semipermanente' },
				],
			},
			{
				label: 'Combos',
				href: '/servicios?categoria=combos-belleza',
				items: [
					{ label: 'Lifting + Tinte', href: '/servicios?categoria=combos-belleza&combo=lifting-tinte' },
					{ label: 'Spa + Pedicuria', href: '/servicios?categoria=combos-belleza&combo=spa-pedicuria' },
					{ label: 'Pack 4 sesiones', href: '/servicios?categoria=combos-belleza&combo=pack-4-sesiones' },
				],
			},
		],
	},
];

export default function NavBar() {
  const setCartOpen = useSetCartOpen();
  const [isOpen, setIsOpen] = useState(false);
  const setSearchOpen = useSetSearchOpen();
  const cartCount = useCartStore((state) => state.items.reduce((acc, it) => acc + it.quantity, 0));

	return (
		<header className='fixed top-0 inset-x-0 z-50 bg-gradient-to-b from-white to-gray-50 border-b border-gray-200/70'>
			<div className='max-w-7xl mx-auto px-4'>
				<div className='h-16 flex items-center justify-between'>
					{/* Brand - Izquierda */}
					<Link href='/' className='flex items-center gap-3 flex-shrink-0'>
						<Image
							src='/logo-sin-fondo.webp'
							alt='Intima Estética'
							width={120}
							height={120}
							className='h-12 w-12'
							priority
						/>
						<div className='flex flex-col leading-tight'>
							<span className='text-lg font-semibold text-gray-900'>Intima</span>
							<span className='text-xs  text-primary-600'>Centro de estética integral</span>
						</div>
					</Link>

					{/* Desktop Navigation - Derecha */}
					<div className='hidden lg:flex items-center gap-1 '>
						{/* Menús (Desktop): categorías + links directos + Más */}
						<NavigationMenu viewport={false}>
							<NavigationMenuList>
								{(['depilacion', 'corporales', 'faciales', 'belleza'] as const).map((key) => {
									const cat = mobileCategories.find((c) => c.key === key);
									if (!cat) return null;
									return (
										<NavigationMenuItem key={key}>
											<NavigationMenuTrigger className='px-3 py-2 text-sm font-medium text-gray-800 hover:text-primary'>
												<span className='inline-flex items-center gap-2'>
													{key === 'depilacion' && <FiZap className='h-4 w-4  ' />}
													<span>{cat.label}</span>
												</span>
											</NavigationMenuTrigger>
											<NavigationMenuContent
												className={`absolute ${
													key === 'belleza' ? '-translate-x-1/3 2xl:translate-x-0' : ''
												} p-4 rounded-xl bg-gradient-to-b from-white to-gray-50 shadow-md ring-1 ring-gray-200/60`}
											>
												<div
													className={`grid w-max gap-6 sm:grid-cols-2 ${
														key === 'faciales' || key === 'depilacion' ? 'lg:grid-cols-2' : 'lg:grid-cols-3'
													}`}
												>
													{cat.subcategories.map((sub) => (
														<div key={sub.label} className='space-y-1 max-w-40'>
															<NavigationMenuLink asChild className='rounded-none'>
																<Link
																	href={sub.href}
																	className='block p-2 font-medium text-gray-900 no-underline outline-none transition-colors hover:bg-primary/5 hover:text-primary focus:bg-primary/5 focus:text-primary'
																>
																	{sub.label}
																</Link>
															</NavigationMenuLink>
															<div className='pl-4 space-y-1'>
																{sub.items.map((item) => (
																	<NavigationMenuLink key={item.href} asChild>
																		<Link
																			href={item.href}
																			className='block rounded-md p-2 text-sm text-gray-700 no-underline outline-none transition-colors hover:bg-primary/5 hover:text-primary focus:bg-primary/5 focus:text-primary'
																		>
																			{item.label}
																		</Link>
																	</NavigationMenuLink>
																))}
															</div>
														</div>
													))}
													<div className='col-span-full border-t mt-2 pt-2'>
														<Link
															href={`/servicios?categoria=${cat.key}`}
															className='inline-flex items-center gap-1  px-3 py-2 text-primary bg-white/60 hover:bg-primary/10 w-full'
														>
															Ver todos
															<FiArrowRight className='h-4 w-4' />
														</Link>
													</div>
												</div>
											</NavigationMenuContent>
										</NavigationMenuItem>
									);
								})}

								{/* Links directos como NavigationMenuLink */}
								<NavigationMenuItem>
									<NavigationMenuLink asChild>
										<Link
											href='/promociones'
											className='px-3 py-2 text-sm font-medium text-gray-800 hover:text-primary transition-colors inline-flex items-center gap-2 flex-row  '
										>
											<FiTag className='h-4 w-4' />
											Promos
										</Link>
									</NavigationMenuLink>
								</NavigationMenuItem>
								<NavigationMenuItem>
									<NavigationMenuLink asChild>
										<Link
											href='/gift-cards'
											className='px-3 py-2 text-sm font-medium text-gray-800 hover:text-primary transition-colors inline-flex items-center gap-2 flex-row'
										>
											<FiGift className='h-4 w-4 ' />
											Gift Cards
										</Link>
									</NavigationMenuLink>
								</NavigationMenuItem>

								{/* Menú Más como NavigationMenu de una columna */}
								<NavigationMenuItem>
									<NavigationMenuTrigger className='px-3 py-2 text-sm font-medium text-gray-700 hover:text-primary-700 inline-flex items-center gap-2 flex-row'>
										Más
									</NavigationMenuTrigger>
									<NavigationMenuContent className='absolute -translate-x-1/3 xl:translate-x-0 p-4 rounded-xl bg-white shadow-md ring-1 ring-gray-200/60'>
										<div className='w-max'>
											<div className='flex flex-col gap-2'>
												{moreItems.map((item) => (
													<NavigationMenuLink key={item.href} asChild>
														<Link
															href={item.href}
															className='inline-flex rounded-full  bg-white px-3 py-1.5 text-sm text-gray-700 no-underline outline-none transition-colors hover:border-primary hover:text-primary'
														>
															{item.label}
														</Link>
													</NavigationMenuLink>
												))}
											</div>
										</div>
									</NavigationMenuContent>
								</NavigationMenuItem>
							</NavigationMenuList>
						</NavigationMenu>
					</div>

					<div className='flex items-center gap-1 ml-auto  lg:ml-0'>
						{/* Carrito */}
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
						<button
							aria-label='Carrito'
							onClick={() => setCartOpen(true)}
							className='relative inline-flex items-center justify-center rounded-md p-2 text-gray-700 hover:text-primary-700'
						>
							<FiShoppingCart className='h-4 w-4' />
							{cartCount > 0 && (
								<span className='absolute -top-1 -right-1 min-h-4 min-w-4 px-1 rounded-full bg-primary-600 text-white text-[10px] leading-4 text-center font-semibold'>
									{cartCount}
								</span>
							)}
						</button>
					</div>

					{/* Mobile Navigation */}
					<div className='flex  lg:hidden items-center gap-2 ml-2'>
						{/* <Button variant='ghost' size='sm' className='p-2'>
							<FiSearch className='h-5 w-5' />
						</Button> */}
						{/* <Button variant='ghost' size='sm' className='p-2'>
							<FiShoppingCart className='h-5 w-5' />
						</Button> */}
						<Sheet open={isOpen} onOpenChange={setIsOpen}>
							<SheetTrigger asChild>
								<Button variant='ghost' size='sm' className='p-2'>
									<FiMenu className='h-6 w-6' />
								</Button>
							</SheetTrigger>
							<SheetContent side='right' className='w-[85vw] sm:w-96 bg-gradient-to-b from-white to-gray-50'>
								<div className='flex h-full flex-col'>
									<SheetHeader className='h-16 flex justify-center p-4'>
										<SheetTitle className='text-xl font-semibold'>Menú</SheetTitle>
									</SheetHeader>

									{/* Scrollable content */}
									<div className='flex-1 overflow-y-auto px-4 border-t mt-[.5px]'>
										{/* Categorías (acordeones) */}
										<Accordion type='multiple'>
											{mobileCategories.map((cat) => (
												<AccordionItem key={cat.key} value={cat.key} className='border-none'>
													<AccordionTrigger className='py-3 pr-2 text-base font-medium text-gray-900 hover:no-underline'>
														<span className='pl-2 inline-flex items-center gap-2'>{cat.label}</span>
													</AccordionTrigger>
													<AccordionContent className='pb-3'>
														<div className='space-y-3'>
															{cat.subcategories.map((sub) => (
																<div key={sub.label}>
																	<Link
																		href={sub.href}
																		onClick={() => setIsOpen(false)}
																		className='block rounded-md py-2 pl-4 pr-2 text-gray-900 font-medium hover:bg-gray-50 hover:text-primary'
																	>
																		{sub.label}
																	</Link>
																	<div className='pl-2'>
																		{sub.items.map((item) => (
																			<Link
																				key={item.href}
																				href={item.href}
																				onClick={() => setIsOpen(false)}
																				className='block rounded-md py-1.5 pl-6 pr-2 text-gray-700 hover:bg-gray-50 hover:text-primary'
																			>
																				{item.label}
																			</Link>
																		))}
																	</div>
																</div>
															))}
															<Link
																href={`/servicios?categoria=${cat.key}`}
																onClick={() => setIsOpen(false)}
																className='inline-flex items-center gap-1 border-none pt-2 pl-4 pr-2 text-primary font-medium hover:bg-primary/10 w-full'
															>
																Ver todos
																<FiArrowRight className='h-4 w-4' />
															</Link>
														</div>
													</AccordionContent>
												</AccordionItem>
											))}
										</Accordion>

										{/* Ítems directos, mismo diseño que top-level */}
										<div className=''>
											<Link
												href='/promociones'
												className='block rounded-md py-3 pl-2 pr-2 text-base font-medium text-gray-900 hover:bg-gray-50'
												onClick={() => setIsOpen(false)}
											>
												Promociones
											</Link>
											<Link
												href='/gift-cards'
												className='block rounded-md py-3 pl-2 pr-2 text-base font-medium text-gray-900 hover:bg-gray-50'
												onClick={() => setIsOpen(false)}
											>
												Gift Cards
											</Link>
											{moreItems.map((item) => (
												<Link
													key={item.href}
													href={item.href}
													className='block rounded-md py-3 pl-2 pr-2 text-base font-medium text-gray-900 hover:bg-gray-50'
													onClick={() => setIsOpen(false)}
												>
													{item.label}
												</Link>
											))}
										</div>
									</div>

									{/* CTAs sticky bottom */}
									<div className='sticky bottom-0 border-t bg-white p-4 space-y-2'>
										<Link
											href='/#turnos'
											onClick={() => setIsOpen(false)}
											className='inline-flex w-full items-center justify-center rounded-xl bg-primary px-4 py-3 text-white font-medium'
										>
											Contáctanos por WhatsApp
										</Link>
									</div>
								</div>
							</SheetContent>
						</Sheet>
					</div>
				</div>
			</div>
		</header>
	);
}

