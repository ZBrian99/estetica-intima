'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import { FiShoppingCart, FiMenu, FiX, FiStar, FiHeart, FiPhone } from 'react-icons/fi';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet';
import { Separator } from '@/components/ui/separator';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

const serviceCategories = [
	{
		id: 'depilacion',
		title: 'Depilación Láser',
		description: 'Eliminación permanente del vello',
		icon: '✨',
		color: 'bg-gradient-to-br from-purple-500 to-pink-500',
		href: '/servicios?categoria=depilacion',
		services: [
			'Depilación Femenina',
			'Depilación Masculina',
			'Combos Especiales',
			'Zonas Individuales'
		]
	},
	{
		id: 'corporales',
		title: 'Tratamientos Corporales',
		description: 'Modelado y tonificación',
		icon: '💪',
		color: 'bg-gradient-to-br from-blue-500 to-purple-500',
		href: '/servicios?categoria=tratamientos-corporales',
		services: [
			'Maderoterapia',
			'Mio Up',
			'Alpha Synergy',
			'Presoterapia'
		]
	},
	{
		id: 'faciales',
		title: 'Tratamientos Faciales',
		description: 'Cuidado y rejuvenecimiento',
		icon: '🌟',
		color: 'bg-gradient-to-br from-green-500 to-blue-500',
		href: '/servicios?categoria=tratamientos-faciales',
		services: [
			'Limpieza Facial',
			'Peeling Químico',
			'Alpha Synergy Facial',
			'Hollywood Peel'
		]
	},
	{
		id: 'otros',
		title: 'Belleza Integral',
		description: 'Servicios complementarios',
		icon: '💅',
		color: 'bg-gradient-to-br from-orange-500 to-red-500',
		href: '/servicios?categoria=otros',
		services: [
			'Bronceado Natural',
			'Microblading',
			'Spa de Pies',
			'Dermopigmentación'
		]
	}
];

const quickActions = [
	{ label: 'Promociones', href: '/promociones', icon: FiStar, badge: 'Hot' },
	{ label: 'Gift Cards', href: '/gift-cards', icon: FiHeart },
	{ label: 'Nosotras', href: '/nosotras', icon: null },
];

export function Navbar2Modern() {
	const [isOpen, setIsOpen] = useState(false);

	return (
		<header className="fixed top-0 inset-x-0 z-50 bg-white shadow-lg">
			<div className="max-w-7xl mx-auto px-4">
				<div className="h-16 flex items-center justify-between">
					{/* Logo */}
					<Link href="/" className="flex items-center gap-3 flex-shrink-0">
						<div className="relative">
							<Image
								src="/logo-sin-fondo.webp"
								alt="Intima Estética"
								width={45}
								height={45}
								className="h-11 w-11"
								priority
							/>
							<div className="absolute -bottom-1 -right-1 w-4 h-4 bg-purple-600 rounded-full flex items-center justify-center">
								<span className="text-white text-xs font-bold">✓</span>
							</div>
						</div>
						<div className="hidden sm:block">
							<div className="font-bold text-xl bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
								Intima Estética
							</div>
							<div className="text-xs text-gray-500 font-medium">Centro de Belleza Profesional</div>
						</div>
					</Link>

					{/* Desktop Quick Actions */}
					<div className="hidden lg:flex items-center gap-6">
						{quickActions.map((action) => (
							<Link
								key={action.href}
								href={action.href}
								className="flex items-center gap-2 px-3 py-2 text-sm font-medium text-gray-700 hover:text-purple-700 transition-colors group"
							>
								{action.icon && <action.icon className="h-4 w-4 group-hover:scale-110 transition-transform" />}
								{action.label}
								{action.badge && (
									<Badge className="bg-red-500 text-white text-xs animate-pulse">
										{action.badge}
									</Badge>
								)}
							</Link>
						))}
					</div>

					{/* Actions */}
					<div className="flex items-center gap-3">
						<Button variant="ghost" size="sm" className="relative hidden sm:flex">
							<FiShoppingCart className="h-5 w-5" />
							<Badge className="absolute -top-2 -right-2 h-5 w-5 flex items-center justify-center p-0 bg-purple-600 text-xs animate-bounce">
								0
							</Badge>
						</Button>

						<Button className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 hidden md:flex">
							<FiPhone className="h-4 w-4 mr-2" />
							Reservar
						</Button>

						{/* Menu Button */}
						<Sheet open={isOpen} onOpenChange={setIsOpen}>
							<SheetTrigger asChild>
								<Button variant="outline" size="sm" className="border-purple-200 hover:bg-purple-50">
									<FiMenu className="h-5 w-5" />
									<span className="ml-2 hidden sm:inline">Servicios</span>
								</Button>
							</SheetTrigger>
							<SheetContent side="right" className="w-96 p-0">
								<div className="h-full flex flex-col">
									<SheetHeader className="p-6 bg-gradient-to-r from-purple-600 to-pink-600 text-white">
										<SheetTitle className="text-white text-xl">Nuestros Servicios</SheetTitle>
										<p className="text-purple-100 text-sm">Descubre todos nuestros tratamientos</p>
									</SheetHeader>

									<div className="flex-1 overflow-y-auto p-6 space-y-6">
										{serviceCategories.map((category) => (
											<div key={category.id} className="space-y-3">
												<Link
													href={category.href}
													className="block group"
													onClick={() => setIsOpen(false)}
												>
													<div className={`${category.color} p-4 rounded-xl text-white group-hover:scale-105 transition-transform`}>
														<div className="flex items-center gap-3 mb-2">
															<span className="text-2xl">{category.icon}</span>
															<div>
																<h3 className="font-bold text-lg">{category.title}</h3>
																<p className="text-sm opacity-90">{category.description}</p>
															</div>
														</div>
													</div>
												</Link>

												<div className="grid grid-cols-2 gap-2 pl-4">
													{category.services.map((service) => (
														<Link
															key={service}
															href={`/servicios?categoria=${category.id}&servicio=${service.toLowerCase().replace(/\s+/g, '-')}`}
															className="text-sm text-gray-600 hover:text-purple-700 hover:bg-purple-50 p-2 rounded-md transition-colors"
															onClick={() => setIsOpen(false)}
														>
															{service}
														</Link>
													))}
												</div>
											</div>
										))}

										<Separator />

										<div className="space-y-3">
											<h4 className="font-semibold text-gray-900">Enlaces Rápidos</h4>
											<div className="space-y-2">
												<Link
													href="/contacto"
													className="flex items-center gap-2 text-sm text-gray-600 hover:text-purple-700 p-2 hover:bg-purple-50 rounded-md transition-colors"
													onClick={() => setIsOpen(false)}
												>
													<FiPhone className="h-4 w-4" />
													Contacto
												</Link>
												<Link
													href="/#antes-despues"
													className="flex items-center gap-2 text-sm text-gray-600 hover:text-purple-700 p-2 hover:bg-purple-50 rounded-md transition-colors"
													onClick={() => setIsOpen(false)}
												>
													<FiStar className="h-4 w-4" />
													Antes y Después
												</Link>
											</div>
										</div>
									</div>

									<div className="p-6 bg-gray-50 border-t">
										<Button 
											className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700"
											onClick={() => setIsOpen(false)}
										>
											<FiPhone className="h-4 w-4 mr-2" />
											Reservar Cita Ahora
										</Button>
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