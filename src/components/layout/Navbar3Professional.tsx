'use client';

import Link from 'next/link';
import Image from 'next/image';
import { FiShoppingCart, FiPhone, FiMail, FiMapPin, FiClock, FiChevronDown } from 'react-icons/fi';
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
import { Card, CardContent } from '@/components/ui/card';

const treatmentCategories = [
	{
		label: 'Depilación Láser',
		href: '/servicios?categoria=depilacion',
		description: 'Tecnología de última generación para eliminación permanente del vello',
		image: '/images/depilacion-preview.jpg',
		featured: true,
		items: [
			{ 
				label: 'Depilación Femenina', 
				href: '/servicios?categoria=depilacion-femenina',
				description: 'Zonas específicas para mujeres'
			},
			{ 
				label: 'Depilación Masculina', 
				href: '/servicios?categoria=depilacion-masculina',
				description: 'Tratamientos especializados para hombres'
			},
			{ 
				label: 'Combos Especiales', 
				href: '/servicios?categoria=combos-depilacion',
				description: 'Paquetes con descuentos especiales'
			},
		],
	},
	{
		label: 'Tratamientos Corporales',
		href: '/servicios?categoria=tratamientos-corporales',
		description: 'Modelado, tonificación y rejuvenecimiento corporal',
		image: '/images/corporales-preview.jpg',
		featured: true,
		items: [
			{ 
				label: 'Maderoterapia', 
				href: '/servicios?categoria=maderoterapia',
				description: 'Masaje con instrumentos de madera'
			},
			{ 
				label: 'Mio Up', 
				href: '/servicios?categoria=mio-up',
				description: 'Electroestimulación muscular'
			},
			{ 
				label: 'Alpha Synergy', 
				href: '/servicios?categoria=alpha-synergy',
				description: 'Radiofrecuencia y ultrasonido'
			},
			{ 
				label: 'Presoterapia', 
				href: '/servicios?categoria=presoterapia',
				description: 'Drenaje linfático automático'
			},
		],
	},
	{
		label: 'Tratamientos Faciales',
		href: '/servicios?categoria=tratamientos-faciales',
		description: 'Cuidado profesional para el rostro',
		image: '/images/faciales-preview.jpg',
		featured: false,
		items: [
			{ 
				label: 'Limpieza Facial Profunda', 
				href: '/servicios?categoria=limpieza-facial',
				description: 'Purificación completa de la piel'
			},
			{ 
				label: 'Peeling Químico', 
				href: '/servicios?categoria=peeling',
				description: 'Renovación celular profunda'
			},
			{ 
				label: 'Alpha Synergy Facial', 
				href: '/servicios?categoria=alpha-synergy-facial',
				description: 'Rejuvenecimiento con tecnología'
			},
		],
	},
	{
		label: 'Otros Servicios',
		href: '/servicios?categoria=otros',
		description: 'Servicios complementarios de belleza',
		image: '/images/otros-preview.jpg',
		featured: false,
		items: [
			{ 
				label: 'Bronceado Natural', 
				href: '/servicios?categoria=bronceado',
				description: 'Color dorado sin sol'
			},
			{ 
				label: 'Microblading', 
				href: '/servicios?categoria=microblading',
				description: 'Diseño de cejas perfecto'
			},
			{ 
				label: 'Spa de Pies', 
				href: '/servicios?categoria=spa-pies',
				description: 'Cuidado integral de pies'
			},
		],
	},
];

const companyInfo = [
	{ label: 'Nosotras', href: '/nosotras' },
	{ label: 'Antes y Después', href: '/#antes-despues' },
	{ label: 'Testimonios', href: '/#testimonios' },
	{ label: 'Blog', href: '/blog' },
];

const specialOffers = [
	{ label: 'Promociones', href: '/promociones', badge: 'Nuevo' },
	{ label: 'Gift Cards', href: '/gift-cards' },
	{ label: 'Pase Libre', href: '/pase-libre' },
];

export function Navbar3Professional() {
	return (
		<>
			{/* Top Bar */}
			<div className="bg-purple-900 text-white text-sm">
				<div className="max-w-7xl mx-auto px-4">
					<div className="h-10 flex items-center justify-between">
						<div className="flex items-center gap-6">
							<div className="flex items-center gap-2">
								<FiPhone className="h-3 w-3" />
								<span>+54 11 1234-5678</span>
							</div>
							<div className="flex items-center gap-2">
								<FiMail className="h-3 w-3" />
								<span>info@intimaestetica.com</span>
							</div>
						</div>
						<div className="flex items-center gap-6">
							<div className="flex items-center gap-2">
								<FiClock className="h-3 w-3" />
								<span>Lun-Vie 9:00-20:00</span>
							</div>
							<div className="flex items-center gap-2">
								<FiMapPin className="h-3 w-3" />
								<span>Buenos Aires, Argentina</span>
							</div>
						</div>
					</div>
				</div>
			</div>

			{/* Main Header */}
			<header className="fixed top-10 inset-x-0 z-50 bg-white border-b border-gray-200 shadow-sm">
				<div className="max-w-7xl mx-auto px-4">
					<div className="h-20 flex items-center justify-between">
						{/* Logo */}
						<Link href="/" className="flex items-center gap-4 flex-shrink-0">
							<Image
								src="/logo-sin-fondo.webp"
								alt="Intima Estética"
								width={50}
								height={50}
								className="h-12 w-12"
								priority
							/>
							<div>
								<div className="font-bold text-2xl text-gray-900">Intima Estética</div>
								<div className="text-sm text-purple-600 font-medium">Centro de Belleza Profesional</div>
							</div>
						</Link>

						{/* Navigation Menu */}
						<div className="hidden lg:flex items-center">
							<div className="relative">
								<NavigationMenu viewport={false}>
									<NavigationMenuList className="gap-2">
										{/* Servicios Menu */}
										<NavigationMenuItem>
											<NavigationMenuTrigger className="h-12 px-6 text-base font-medium text-gray-700 hover:text-purple-700 data-[state=open]:text-purple-700 data-[state=open]:bg-purple-50">
												Servicios
											</NavigationMenuTrigger>
											<NavigationMenuContent>
												<div className="w-[900px] p-8">
													<div className="grid grid-cols-3 gap-8">
														{/* Featured Services */}
														<div className="col-span-2 space-y-6">
															<h3 className="text-lg font-semibold text-gray-900 mb-4">Servicios Destacados</h3>
															{treatmentCategories.filter(cat => cat.featured).map((category) => (
																<Card key={category.label} className="group hover:shadow-lg transition-all duration-300">
																	<CardContent className="p-4">
																		<NavigationMenuLink asChild>
																			<Link href={category.href} className="block">
																				<div className="flex items-start gap-4">
																					<div className="w-16 h-16 bg-purple-100 rounded-lg flex items-center justify-center group-hover:bg-purple-200 transition-colors">
																						<span className="text-2xl">✨</span>
																					</div>
																					<div className="flex-1">
																						<h4 className="font-semibold text-gray-900 group-hover:text-purple-700 transition-colors">
																							{category.label}
																						</h4>
																						<p className="text-sm text-gray-600 mt-1">
																							{category.description}
																						</p>
																						<div className="flex flex-wrap gap-2 mt-3">
																							{category.items.slice(0, 2).map((item) => (
																								<Badge key={item.href} variant="secondary" className="text-xs">
																									{item.label}
																								</Badge>
																							))}
																						</div>
																					</div>
																				</div>
																			</Link>
																		</NavigationMenuLink>
																	</CardContent>
																</Card>
															))}
														</div>

														{/* All Services */}
														<div className="space-y-4">
															<h3 className="text-lg font-semibold text-gray-900">Todos los Servicios</h3>
															{treatmentCategories.map((category) => (
																<div key={category.label} className="space-y-2">
																	<NavigationMenuLink asChild>
																		<Link
																			href={category.href}
																			className="block font-medium text-gray-900 hover:text-purple-700 transition-colors"
																		>
																			{category.label}
																		</Link>
																	</NavigationMenuLink>
																	{category.items.map((item) => (
																		<NavigationMenuLink key={item.href} asChild>
																			<Link
																				href={item.href}
																				className="block pl-4 py-1 text-sm text-gray-600 hover:text-purple-700 hover:bg-purple-50 rounded transition-colors"
																			>
																				{item.label}
																			</Link>
																		</NavigationMenuLink>
																	))}
																</div>
															))}
														</div>
													</div>

													<Separator className="my-6" />
													<div className="flex items-center justify-between">
														<div className="text-sm text-gray-500">
															¿No encuentras lo que buscas? Contáctanos para asesoramiento personalizado.
														</div>
														<Button size="sm" className="bg-purple-600 hover:bg-purple-700">
															Consulta Gratuita
														</Button>
													</div>
												</div>
											</NavigationMenuContent>
										</NavigationMenuItem>

										{/* Empresa Menu */}
										<NavigationMenuItem>
											<NavigationMenuTrigger className="h-12 px-6 text-base font-medium text-gray-700 hover:text-purple-700 data-[state=open]:text-purple-700 data-[state=open]:bg-purple-50">
												Empresa
											</NavigationMenuTrigger>
											<NavigationMenuContent>
												<div className="w-[400px] p-6">
													<div className="space-y-3">
														{companyInfo.map((item) => (
															<NavigationMenuLink key={item.href} asChild>
																<Link
																	href={item.href}
																	className="block p-3 rounded-lg hover:bg-purple-50 transition-colors"
																>
																	<div className="font-medium text-gray-900 hover:text-purple-700">
																		{item.label}
																	</div>
																</Link>
															</NavigationMenuLink>
														))}
													</div>
												</div>
											</NavigationMenuContent>
										</NavigationMenuItem>

										{/* Ofertas Menu */}
										<NavigationMenuItem>
											<NavigationMenuTrigger className="h-12 px-6 text-base font-medium text-gray-700 hover:text-purple-700 data-[state=open]:text-purple-700 data-[state=open]:bg-purple-50">
												Ofertas
											</NavigationMenuTrigger>
											<NavigationMenuContent>
												<div className="w-[350px] p-6">
													<div className="space-y-3">
														{specialOffers.map((item) => (
															<NavigationMenuLink key={item.href} asChild>
																<Link
																	href={item.href}
																	className="flex items-center justify-between p-3 rounded-lg hover:bg-purple-50 transition-colors group"
																>
																	<div className="font-medium text-gray-900 group-hover:text-purple-700">
																		{item.label}
																	</div>
																	{item.badge && (
																		<Badge className="bg-red-500 text-white text-xs">
																			{item.badge}
																		</Badge>
																	)}
																</Link>
															</NavigationMenuLink>
														))}
													</div>
												</div>
											</NavigationMenuContent>
										</NavigationMenuItem>

										{/* Contacto Link */}
										<NavigationMenuItem>
											<NavigationMenuLink asChild>
												<Link
													href="/#contacto"
													className="h-12 px-6 flex items-center text-base font-medium text-gray-700 hover:text-purple-700 transition-colors"
												>
													Contacto
												</Link>
											</NavigationMenuLink>
										</NavigationMenuItem>
								</NavigationMenuList>
							</NavigationMenu>
						</div>
					</div>

					{/* Actions */}
					<div className="flex items-center gap-4">
						<Button variant="ghost" size="sm" className="relative hidden sm:flex">
							<FiShoppingCart className="h-5 w-5" />
							<Badge className="absolute -top-2 -right-2 h-5 w-5 flex items-center justify-center p-0 bg-purple-600 text-xs">
								0
							</Badge>
						</Button>

						<Button className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-2 h-12">
							<FiPhone className="h-4 w-4 mr-2" />
							Reservar Cita
						</Button>
					</div>
				</div>
			</div>
		</header>
	</>
	);
}