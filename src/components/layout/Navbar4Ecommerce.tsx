'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import { FiShoppingCart, FiSearch, FiUser, FiHeart, FiMenu, FiX, FiFilter } from 'react-icons/fi';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import {
	NavigationMenu,
	NavigationMenuContent,
	NavigationMenuItem,
	NavigationMenuLink,
	NavigationMenuList,
	NavigationMenuTrigger,
} from '@/components/ui/navigation-menu';
import { Separator } from '@/components/ui/separator';
import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList } from '@/components/ui/command';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';

const categories = [
	{
		id: 'depilacion',
		label: 'Depilación Láser',
		icon: '✨',
		href: '/servicios?categoria=depilacion',
		subcategories: [
			{ label: 'Femenina', href: '/servicios?categoria=depilacion-femenina', popular: true },
			{ label: 'Masculina', href: '/servicios?categoria=depilacion-masculina', popular: true },
			{ label: 'Combos', href: '/servicios?categoria=combos-depilacion', popular: false },
		]
	},
	{
		id: 'corporales',
		label: 'Tratamientos Corporales',
		icon: '💪',
		href: '/servicios?categoria=tratamientos-corporales',
		subcategories: [
			{ label: 'Maderoterapia', href: '/servicios?categoria=maderoterapia', popular: true },
			{ label: 'Mio Up', href: '/servicios?categoria=mio-up', popular: true },
			{ label: 'Alpha Synergy', href: '/servicios?categoria=alpha-synergy', popular: false },
			{ label: 'Presoterapia', href: '/servicios?categoria=presoterapia', popular: false },
		]
	},
	{
		id: 'faciales',
		label: 'Tratamientos Faciales',
		icon: '🌟',
		href: '/servicios?categoria=tratamientos-faciales',
		subcategories: [
			{ label: 'Limpieza Facial', href: '/servicios?categoria=limpieza-facial', popular: true },
			{ label: 'Peeling', href: '/servicios?categoria=peeling', popular: false },
			{ label: 'Alpha Synergy Facial', href: '/servicios?categoria=alpha-synergy-facial', popular: false },
		]
	},
	{
		id: 'otros',
		label: 'Otros Servicios',
		icon: '💅',
		href: '/servicios?categoria=otros',
		subcategories: [
			{ label: 'Bronceado', href: '/servicios?categoria=bronceado', popular: false },
			{ label: 'Microblading', href: '/servicios?categoria=microblading', popular: true },
			{ label: 'Spa de Pies', href: '/servicios?categoria=spa-pies', popular: false },
		]
	}
];

const quickLinks = [
	{ label: 'Promociones', href: '/promociones', badge: 'Sale', color: 'bg-red-500' },
	{ label: 'Gift Cards', href: '/gift-cards', badge: 'Popular', color: 'bg-green-500' },
	{ label: 'Pase Libre', href: '/pase-libre', badge: 'VIP', color: 'bg-purple-500' },
];

const searchSuggestions = [
	'Depilación láser piernas',
	'Maderoterapia',
	'Limpieza facial',
	'Microblading cejas',
	'Bronceado natural',
	'Alpha Synergy',
	'Mio Up abdomen',
	'Peeling químico'
];

export function Navbar4Ecommerce() {
	const [searchOpen, setSearchOpen] = useState(false);
	const [searchQuery, setSearchQuery] = useState('');
	const [cartCount] = useState(3);
	const [wishlistCount] = useState(5);

	return (
		<header className="fixed top-0 inset-x-0 z-50 bg-white border-b border-gray-200 shadow-sm">
			<div className="max-w-7xl mx-auto px-4">
				{/* Top Bar */}
				<div className="h-10 flex items-center justify-between text-sm border-b border-gray-100">
					<div className="flex items-center gap-4">
						<span className="text-gray-600">📞 Consultas: +54 11 1234-5678</span>
						<Separator orientation="vertical" className="h-4" />
						<span className="text-gray-600">🚚 Envío gratis en compras +$50.000</span>
					</div>
					<div className="flex items-center gap-4">
						<Link href="/cuenta" className="text-gray-600 hover:text-purple-700 transition-colors">
							Mi Cuenta
						</Link>
						<Link href="/ayuda" className="text-gray-600 hover:text-purple-700 transition-colors">
							Ayuda
						</Link>
					</div>
				</div>

				{/* Main Header */}
				<div className="h-16 flex items-center justify-between">
					{/* Logo */}
					<Link href="/" className="flex items-center gap-3 flex-shrink-0">
						<Image
							src="/logo-sin-fondo.webp"
							alt="Intima Estética"
							width={40}
							height={40}
							className="h-10 w-10"
							priority
						/>
						<div className="hidden sm:block">
							<div className="font-bold text-lg text-gray-900">Intima Estética</div>
							<div className="text-xs text-purple-600 font-medium">Tienda Online</div>
						</div>
					</Link>

					{/* Search Bar */}
					<div className="flex-1 max-w-2xl mx-8 hidden md:block">
						<Popover open={searchOpen} onOpenChange={setSearchOpen}>
							<PopoverTrigger asChild>
								<div className="relative">
									<Input
										placeholder="Buscar servicios, tratamientos..."
										value={searchQuery}
										onChange={(e) => setSearchQuery(e.target.value)}
										className="pl-10 pr-12 h-10 border-2 border-gray-200 focus:border-purple-500 rounded-full"
									/>
									<FiSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
									<Button 
										size="sm" 
										className="absolute right-1 top-1/2 transform -translate-y-1/2 h-8 w-8 p-0 bg-purple-600 hover:bg-purple-700 rounded-full"
									>
										<FiSearch className="h-4 w-4" />
									</Button>
								</div>
							</PopoverTrigger>
							<PopoverContent className="w-[600px] p-0" align="start">
								<Command>
									<CommandInput placeholder="Buscar servicios..." />
									<CommandList>
										<CommandEmpty>No se encontraron resultados.</CommandEmpty>
										<CommandGroup heading="Sugerencias populares">
											{searchSuggestions.map((suggestion) => (
												<CommandItem key={suggestion} className="cursor-pointer">
													<FiSearch className="mr-2 h-4 w-4" />
													{suggestion}
												</CommandItem>
											))}
										</CommandGroup>
										<CommandGroup heading="Categorías">
											{categories.map((category) => (
												<CommandItem key={category.id} className="cursor-pointer">
													<span className="mr-2">{category.icon}</span>
													{category.label}
												</CommandItem>
											))}
										</CommandGroup>
									</CommandList>
								</Command>
							</PopoverContent>
						</Popover>
					</div>

					{/* User Actions */}
					<div className="flex items-center gap-2">
						{/* Mobile Search */}
						<Button variant="ghost" size="sm" className="md:hidden">
							<FiSearch className="h-5 w-5" />
						</Button>

						{/* User Account */}
						<Button variant="ghost" size="sm" className="hidden sm:flex flex-col items-center gap-1 h-12 px-3">
							<FiUser className="h-5 w-5" />
							<span className="text-xs">Cuenta</span>
						</Button>

						{/* Wishlist */}
						<Button variant="ghost" size="sm" className="relative hidden sm:flex flex-col items-center gap-1 h-12 px-3">
							<FiHeart className="h-5 w-5" />
							<span className="text-xs">Favoritos</span>
							{wishlistCount > 0 && (
								<Badge className="absolute -top-1 -right-1 h-5 w-5 flex items-center justify-center p-0 bg-red-500 text-xs">
									{wishlistCount}
								</Badge>
							)}
						</Button>

						{/* Shopping Cart */}
						<Button variant="ghost" size="sm" className="relative flex flex-col items-center gap-1 h-12 px-3 hover:bg-purple-50">
							<FiShoppingCart className="h-5 w-5" />
							<span className="text-xs hidden sm:block">Carrito</span>
							{cartCount > 0 && (
								<Badge className="absolute -top-1 -right-1 h-6 w-6 flex items-center justify-center p-0 bg-purple-600 text-xs animate-pulse">
									{cartCount}
								</Badge>
							)}
						</Button>

						{/* CTA Button */}
						<Button className="bg-purple-600 hover:bg-purple-700 ml-2 hidden lg:flex">
							Reservar Cita
						</Button>
					</div>
				</div>

				{/* Navigation Menu */}
				<div className="h-12 border-t border-gray-100">
					<div className="flex items-center justify-between h-full">
						{/* Categories Navigation */}
						<div className="hidden lg:flex items-center">
							<div className="relative">
								<NavigationMenu viewport={false}>
									<NavigationMenuList className="gap-1">
										{categories.map((category) => (
											<NavigationMenuItem key={category.id}>
												<NavigationMenuTrigger className="h-10 px-4 text-sm font-medium text-gray-700 hover:text-purple-700 data-[state=open]:text-purple-700 data-[state=open]:bg-purple-50">
													<span className="mr-2">{category.icon}</span>
													{category.label}
												</NavigationMenuTrigger>
												<NavigationMenuContent>
													<div className="w-[400px] p-6">
														<div className="space-y-4">
															<div>
																<NavigationMenuLink asChild>
																	<Link
																		href={category.href}
																		className="block p-3 rounded-lg bg-purple-50 hover:bg-purple-100 transition-colors group"
																	>
																		<div className="flex items-center gap-3">
																			<span className="text-2xl">{category.icon}</span>
																			<div>
																				<div className="font-semibold text-gray-900 group-hover:text-purple-700">
																					Ver todos los {category.label}
																				</div>
																				<div className="text-sm text-gray-600">
																					Explora toda la categoría
																				</div>
																			</div>
																		</div>
																	</Link>
																</NavigationMenuLink>
															</div>

															<Separator />

															<div className="space-y-2">
																<h4 className="font-medium text-gray-900 text-sm">Servicios Populares</h4>
																{category.subcategories.filter(sub => sub.popular).map((subcategory) => (
																	<NavigationMenuLink key={subcategory.href} asChild>
																		<Link
																			href={subcategory.href}
																			className="flex items-center justify-between p-2 text-sm text-gray-600 hover:text-purple-700 hover:bg-purple-50 rounded transition-colors"
																		>
																			{subcategory.label}
																			<Badge variant="secondary" className="text-xs bg-green-100 text-green-700">
																				Popular
																			</Badge>
																		</Link>
																	</NavigationMenuLink>
																))}
															</div>

															<div className="space-y-2">
																<h4 className="font-medium text-gray-900 text-sm">Otros Servicios</h4>
																{category.subcategories.filter(sub => !sub.popular).map((subcategory) => (
																	<NavigationMenuLink key={subcategory.href} asChild>
																		<Link
																			href={subcategory.href}
																			className="block p-2 text-sm text-gray-600 hover:text-purple-700 hover:bg-purple-50 rounded transition-colors"
																		>
																			{subcategory.label}
																		</Link>
																	</NavigationMenuLink>
																))}
															</div>
														</div>
													</div>
												</NavigationMenuContent>
											</NavigationMenuItem>
										))}
									</NavigationMenuList>
								</NavigationMenu>
							</div>
						</div>

						{/* Quick Links */}
						<div className="flex items-center gap-4">
							{quickLinks.map((link) => (
								<Link
									key={link.href}
									href={link.href}
									className="flex items-center gap-2 px-3 py-2 text-sm font-medium text-gray-700 hover:text-purple-700 transition-colors group"
								>
									{link.label}
									<Badge className={`${link.color} text-white text-xs group-hover:scale-110 transition-transform`}>
										{link.badge}
									</Badge>
								</Link>
							))}

							{/* Mobile Menu */}
							<Button variant="ghost" size="sm" className="lg:hidden">
								<FiMenu className="h-5 w-5" />
								<span className="ml-2">Menú</span>
							</Button>
						</div>
					</div>
				</div>
			</div>
		</header>
	);
}