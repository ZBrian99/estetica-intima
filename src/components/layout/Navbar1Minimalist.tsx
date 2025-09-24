'use client';

import Link from 'next/link';
import Image from 'next/image';
import { FiShoppingCart, FiSearch, FiPhone } from 'react-icons/fi';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import {
	NavigationMenu,
	NavigationMenuContent,
	NavigationMenuItem,
	NavigationMenuLink,
	NavigationMenuList,
	NavigationMenuTrigger,
} from '@/components/ui/navigation-menu';
import { Separator } from '@/components/ui/separator';

const treatmentCategories = [
	{
		label: 'Depilación Láser',
		href: '/servicios?categoria=depilacion',
		description: 'Eliminación permanente del vello',
		icon: '✨',
		items: [
			{ label: 'Depilación Femenina', href: '/servicios?categoria=depilacion-femenina' },
			{ label: 'Depilación Masculina', href: '/servicios?categoria=depilacion-masculina' },
			{ label: 'Combos Especiales', href: '/servicios?categoria=combos-depilacion' },
		],
	},
	{
		label: 'Tratamientos Corporales',
		href: '/servicios?categoria=tratamientos-corporales',
		description: 'Modelado y tonificación',
		icon: '💪',
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
		description: 'Cuidado y rejuvenecimiento',
		icon: '🌟',
		items: [
			{ label: 'Limpieza Facial Profunda', href: '/servicios?categoria=limpieza-facial' },
			{ label: 'Peeling Químico', href: '/servicios?categoria=peeling' },
			{ label: 'Alpha Synergy Facial', href: '/servicios?categoria=alpha-synergy-facial' },
			{ label: 'Hollywood Peel', href: '/servicios?categoria=hollywood-peel' },
		],
	},
	{
		label: 'Otros Servicios',
		href: '/servicios?categoria=otros',
		description: 'Belleza integral',
		icon: '💅',
		items: [
			{ label: 'Bronceado Natural', href: '/servicios?categoria=bronceado' },
			{ label: 'Microblading', href: '/servicios?categoria=microblading' },
			{ label: 'Spa de Pies', href: '/servicios?categoria=spa-pies' },
			{ label: 'Dermopigmentación', href: '/servicios?categoria=dermopigmentacion' },
		],
	},
];

const quickLinks = [
	{ label: 'Promociones', href: '/promociones', badge: 'Nuevo' },
	{ label: 'Gift Cards', href: '/gift-cards' },
	{ label: 'Nosotras', href: '/nosotras' },
	{ label: 'Contacto', href: '/#contacto' },
];

export function Navbar1Minimalist() {
	return (
		<header className="fixed top-0 inset-x-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-100">
			<div className="max-w-7xl mx-auto px-4">
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
							<div className="text-xs text-purple-600 font-medium">Centro de Belleza</div>
						</div>
					</Link>

					{/* Navigation Menu */}
					<div className="hidden lg:flex items-center">
						<div className="relative">
							<NavigationMenu viewport={false}>
								<NavigationMenuList className="gap-1">
									<NavigationMenuItem>
										<NavigationMenuTrigger className="h-10 px-4 py-2 text-sm font-medium text-gray-700 hover:text-purple-700 data-[state=open]:text-purple-700">
											Servicios
										</NavigationMenuTrigger>
										<NavigationMenuContent>
											<div className="w-[800px] p-6">
												<div className="grid grid-cols-2 gap-6">
													{treatmentCategories.map((category) => (
														<div key={category.label} className="space-y-3">
															<NavigationMenuLink asChild>
																<Link
																	href={category.href}
																	className="group block p-3 rounded-lg hover:bg-purple-50 transition-colors"
																>
																	<div className="flex items-center gap-3 mb-2">
																		<span className="text-2xl">{category.icon}</span>
																		<div>
																			<div className="font-semibold text-gray-900 group-hover:text-purple-700">
																				{category.label}
																			</div>
																			<div className="text-sm text-gray-500">
																				{category.description}
																			</div>
																		</div>
																	</div>
																</Link>
															</NavigationMenuLink>
															<div className="grid grid-cols-1 gap-1 pl-6">
																{category.items.map((item) => (
																	<NavigationMenuLink key={item.href} asChild>
																		<Link
																			href={item.href}
																			className="block px-3 py-2 text-sm text-gray-600 hover:text-purple-700 hover:bg-purple-50 rounded-md transition-colors"
																		>
																			{item.label}
																		</Link>
																	</NavigationMenuLink>
																))}
															</div>
														</div>
													))}
												</div>
												<Separator className="my-4" />
												<div className="flex items-center justify-between">
													<div className="text-sm text-gray-500">¿Necesitas ayuda para elegir?</div>
													<Button size="sm" className="bg-purple-600 hover:bg-purple-700">
														<FiPhone className="h-4 w-4 mr-2" />
														Consulta Gratis
													</Button>
												</div>
											</div>
										</NavigationMenuContent>
									</NavigationMenuItem>

									{quickLinks.map((link) => (
										<NavigationMenuItem key={link.href}>
											<NavigationMenuLink asChild>
												<Link
													href={link.href}
													className="flex items-center gap-2 h-10 px-4 py-2 text-sm font-medium text-gray-700 hover:text-purple-700 transition-colors"
												>
													{link.label}
													{link.badge && (
														<Badge variant="secondary" className="bg-purple-100 text-purple-700 text-xs">
															{link.badge}
														</Badge>
													)}
												</Link>
											</NavigationMenuLink>
										</NavigationMenuItem>
									))}
								</NavigationMenuList>
							</NavigationMenu>
						</div>
					</div>

					{/* Actions */}
					<div className="flex items-center gap-2">
						<Button variant="ghost" size="sm" className="hidden md:flex">
							<FiSearch className="h-4 w-4" />
						</Button>
						<Button variant="ghost" size="sm" className="relative">
							<FiShoppingCart className="h-4 w-4" />
							<Badge className="absolute -top-2 -right-2 h-5 w-5 flex items-center justify-center p-0 bg-purple-600 text-xs">
								0
							</Badge>
						</Button>
						<Button className="bg-purple-600 hover:bg-purple-700 hidden sm:flex">
							Reservar Cita
						</Button>
					</div>
				</div>
			</div>
		</header>
	);
}