'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import { FiPhone, FiMail, FiMapPin, FiStar, FiArrowRight, FiMenu, FiX, FiPlay } from 'react-icons/fi';
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

const mainServices = [
	{
		id: 'depilacion',
		label: 'Depilación Láser',
		icon: '✨',
		description: 'Tecnología de última generación para resultados permanentes',
		href: '/servicios/depilacion',
		image: '/services/depilacion.jpg',
		popular: true,
		pricing: 'Desde $15.000'
	},
	{
		id: 'corporales',
		label: 'Tratamientos Corporales',
		icon: '💪',
		description: 'Moldea tu figura con nuestros tratamientos especializados',
		href: '/servicios/corporales',
		image: '/services/corporales.jpg',
		popular: true,
		pricing: 'Desde $25.000'
	},
	{
		id: 'faciales',
		label: 'Tratamientos Faciales',
		icon: '🌟',
		description: 'Rejuvenece tu rostro con técnicas profesionales',
		href: '/servicios/faciales',
		image: '/services/faciales.jpg',
		popular: false,
		pricing: 'Desde $18.000'
	}
];

const testimonials = [
	{ name: 'María González', rating: 5, text: 'Excelente atención y resultados increíbles' },
	{ name: 'Ana Rodríguez', rating: 5, text: 'El mejor centro de estética de la zona' },
	{ name: 'Laura Martín', rating: 5, text: 'Profesionales y muy cuidadosos' }
];

const ctaButtons = [
	{
		label: 'Reservar Cita',
		href: '/reservar',
		variant: 'primary',
		icon: FiPhone,
		description: 'Agenda tu consulta gratuita'
	},
	{
		label: 'Ver Promociones',
		href: '/promociones',
		variant: 'secondary',
		icon: FiStar,
		description: 'Ofertas especiales del mes'
	},
	{
		label: 'Tour Virtual',
		href: '/tour',
		variant: 'outline',
		icon: FiPlay,
		description: 'Conoce nuestras instalaciones'
	}
];

export function Navbar5Landing() {
	const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

	return (
		<>
			{/* Top Contact Bar */}
			<div className="bg-gradient-to-r from-purple-600 to-purple-800 text-white py-2">
				<div className="max-w-7xl mx-auto px-4">
					<div className="flex items-center justify-between text-sm">
						<div className="flex items-center gap-6">
							<div className="flex items-center gap-2">
								<FiPhone className="h-4 w-4" />
								<span>+54 11 1234-5678</span>
							</div>
							<div className="hidden md:flex items-center gap-2">
								<FiMail className="h-4 w-4" />
								<span>info@intimaestetica.com</span>
							</div>
							<div className="hidden lg:flex items-center gap-2">
								<FiMapPin className="h-4 w-4" />
								<span>Av. Corrientes 1234, CABA</span>
							</div>
						</div>
						<div className="flex items-center gap-4">
							<div className="flex items-center gap-1">
								{[...Array(5)].map((_, i) => (
									<FiStar key={i} className="h-3 w-3 fill-yellow-400 text-yellow-400" />
								))}
								<span className="ml-1 text-xs">4.9/5 (127 reseñas)</span>
							</div>
						</div>
					</div>
				</div>
			</div>

			{/* Main Header */}
			<header className="bg-white shadow-lg sticky top-0 z-50">
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
								<div className="font-bold text-xl text-gray-900">Intima Estética</div>
								<div className="text-sm text-purple-600 font-medium">Centro de Belleza Profesional</div>
							</div>
						</Link>

						{/* Navigation Menu */}
						<div className="hidden lg:flex items-center">
							<div className="relative">
								<NavigationMenu viewport={false}>
									<NavigationMenuList className="gap-2">
										<NavigationMenuItem>
											<NavigationMenuTrigger className="h-12 px-6 text-base font-medium text-gray-700 hover:text-purple-700 data-[state=open]:text-purple-700 data-[state=open]:bg-purple-50">
												Nuestros Servicios
											</NavigationMenuTrigger>
											<NavigationMenuContent>
												<div className="w-[800px] p-8">
													<div className="mb-6">
														<h3 className="text-2xl font-bold text-gray-900 mb-2">Tratamientos Profesionales</h3>
														<p className="text-gray-600">Descubre nuestros servicios de alta calidad con tecnología de vanguardia</p>
													</div>

													<div className="grid grid-cols-3 gap-6">
														{mainServices.map((service) => (
															<NavigationMenuLink key={service.id} asChild>
																<Link href={service.href}>
																	<Card className="h-full hover:shadow-lg transition-all duration-300 hover:scale-105 group cursor-pointer">
																		<CardContent className="p-6">
																			<div className="text-center space-y-4">
																				<div className="text-4xl mb-3">{service.icon}</div>
																				<div>
																					<h4 className="font-bold text-lg text-gray-900 group-hover:text-purple-700 transition-colors">
																						{service.label}
																						{service.popular && (
																							<Badge className="ml-2 bg-green-500 text-white text-xs">Popular</Badge>
																						)}
																					</h4>
																					<p className="text-sm text-gray-600 mt-2">{service.description}</p>
																					<div className="text-purple-600 font-semibold mt-3">{service.pricing}</div>
																				</div>
																				<div className="flex items-center justify-center text-purple-600 group-hover:text-purple-700">
																					<span className="text-sm font-medium">Ver más</span>
																					<FiArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
																				</div>
																			</div>
																		</CardContent>
																	</Card>
																</Link>
															</NavigationMenuLink>
														))}
													</div>

													<Separator className="my-6" />

													<div className="flex items-center justify-between">
														<div>
															<h4 className="font-semibold text-gray-900">¿Necesitas asesoramiento?</h4>
															<p className="text-sm text-gray-600">Nuestros especialistas te ayudan a elegir</p>
														</div>
														<Button className="bg-purple-600 hover:bg-purple-700">
															Consulta Gratuita
														</Button>
													</div>
												</div>
											</NavigationMenuContent>
										</NavigationMenuItem>

										<NavigationMenuItem>
											<NavigationMenuTrigger className="h-12 px-6 text-base font-medium text-gray-700 hover:text-purple-700 data-[state=open]:text-purple-700 data-[state=open]:bg-purple-50">
												Nosotros
											</NavigationMenuTrigger>
											<NavigationMenuContent>
												<div className="w-[600px] p-8">
													<div className="grid grid-cols-2 gap-8">
														<div className="space-y-6">
															<div>
																<h3 className="text-xl font-bold text-gray-900 mb-4">Conoce Intima Estética</h3>
																<div className="space-y-3">
																	<NavigationMenuLink asChild>
																		<Link href="/nosotros" className="block p-3 rounded-lg hover:bg-purple-50 transition-colors">
																			<div className="font-medium text-gray-900">Nuestra Historia</div>
																			<div className="text-sm text-gray-600">15 años de experiencia</div>
																		</Link>
																	</NavigationMenuLink>
																	<NavigationMenuLink asChild>
																		<Link href="/equipo" className="block p-3 rounded-lg hover:bg-purple-50 transition-colors">
																			<div className="font-medium text-gray-900">Nuestro Equipo</div>
																			<div className="text-sm text-gray-600">Profesionales certificados</div>
																		</Link>
																	</NavigationMenuLink>
																	<NavigationMenuLink asChild>
																		<Link href="/instalaciones" className="block p-3 rounded-lg hover:bg-purple-50 transition-colors">
																			<div className="font-medium text-gray-900">Instalaciones</div>
																			<div className="text-sm text-gray-600">Tecnología de vanguardia</div>
																		</Link>
																	</NavigationMenuLink>
																</div>
															</div>
														</div>

														<div className="space-y-6">
															<div>
																<h4 className="font-semibold text-gray-900 mb-4">Lo que dicen nuestros clientes</h4>
																<div className="space-y-4">
																	{testimonials.map((testimonial, index) => (
																		<div key={index} className="p-3 bg-gray-50 rounded-lg">
																			<div className="flex items-center gap-1 mb-2">
																				{[...Array(testimonial.rating)].map((_, i) => (
																					<FiStar key={i} className="h-3 w-3 fill-yellow-400 text-yellow-400" />
																				))}
																			</div>
																			<p className="text-sm text-gray-600 mb-1">"{testimonial.text}"</p>
																			<p className="text-xs font-medium text-gray-900">- {testimonial.name}</p>
																		</div>
																	))}
																</div>
															</div>
														</div>
													</div>
												</div>
											</NavigationMenuContent>
										</NavigationMenuItem>

										<NavigationMenuItem>
											<NavigationMenuLink asChild>
												<Link href="/promociones" className="h-12 px-6 flex items-center text-base font-medium text-gray-700 hover:text-purple-700 transition-colors">
													Promociones
													<Badge className="ml-2 bg-red-500 text-white text-xs animate-pulse">Hot</Badge>
												</Link>
											</NavigationMenuLink>
										</NavigationMenuItem>

										<NavigationMenuItem>
											<NavigationMenuLink asChild>
												<Link href="/contacto" className="h-12 px-6 flex items-center text-base font-medium text-gray-700 hover:text-purple-700 transition-colors">
													Contacto
												</Link>
											</NavigationMenuLink>
										</NavigationMenuItem>
									</NavigationMenuList>
								</NavigationMenu>
							</div>
						</div>

						{/* CTA Buttons */}
						<div className="flex items-center gap-3">
							{ctaButtons.map((cta, index) => {
								const Icon = cta.icon;
								if (cta.variant === 'primary') {
									return (
										<Button
											key={index}
											asChild
											size="lg"
											className="bg-purple-600 hover:bg-purple-700 text-white shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 hidden lg:flex"
										>
											<Link href={cta.href} className="flex items-center gap-2">
												<Icon className="h-5 w-5" />
												<div className="text-left">
													<div className="font-semibold">{cta.label}</div>
													<div className="text-xs opacity-90">{cta.description}</div>
												</div>
											</Link>
										</Button>
									);
								} else if (cta.variant === 'secondary') {
									return (
										<Button
											key={index}
											asChild
											variant="secondary"
											size="lg"
											className="bg-gradient-to-r from-yellow-400 to-orange-500 hover:from-yellow-500 hover:to-orange-600 text-white border-0 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 hidden md:flex"
										>
											<Link href={cta.href} className="flex items-center gap-2">
												<Icon className="h-5 w-5" />
												<div className="text-left">
													<div className="font-semibold">{cta.label}</div>
													<div className="text-xs opacity-90">{cta.description}</div>
												</div>
											</Link>
										</Button>
									);
								} else {
									return (
										<Button
											key={index}
											asChild
											variant="outline"
											size="lg"
											className="border-purple-600 text-purple-600 hover:bg-purple-600 hover:text-white transition-all duration-300 transform hover:scale-105 hidden xl:flex"
										>
											<Link href={cta.href} className="flex items-center gap-2">
												<Icon className="h-5 w-5" />
												<div className="text-left">
													<div className="font-semibold">{cta.label}</div>
													<div className="text-xs opacity-75">{cta.description}</div>
												</div>
											</Link>
										</Button>
									);
								}
							})}

							{/* Mobile Menu Button */}
							<Button
								variant="ghost"
								size="sm"
								className="lg:hidden"
								onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
							>
								{mobileMenuOpen ? <FiX className="h-6 w-6" /> : <FiMenu className="h-6 w-6" />}
							</Button>
						</div>
					</div>
				</div>
			</header>

			{/* Mobile Menu */}
			{mobileMenuOpen && (
				<div className="lg:hidden bg-white border-b border-gray-200 shadow-lg">
					<div className="max-w-7xl mx-auto px-4 py-6">
						<div className="space-y-4">
							<Link href="/servicios" className="block py-3 text-lg font-medium text-gray-700 hover:text-purple-700 transition-colors">
								Nuestros Servicios
							</Link>
							<Link href="/nosotros" className="block py-3 text-lg font-medium text-gray-700 hover:text-purple-700 transition-colors">
								Nosotros
							</Link>
							<Link href="/promociones" className="block py-3 text-lg font-medium text-gray-700 hover:text-purple-700 transition-colors">
								Promociones
							</Link>
							<Link href="/contacto" className="block py-3 text-lg font-medium text-gray-700 hover:text-purple-700 transition-colors">
								Contacto
							</Link>
							<Separator className="my-4" />
							<div className="space-y-3">
								<Button asChild size="lg" className="w-full bg-purple-600 hover:bg-purple-700">
									<Link href="/reservar" className="flex items-center justify-center gap-2">
										<FiPhone className="h-5 w-5" />
										Reservar Cita
									</Link>
								</Button>
								<Button asChild variant="outline" size="lg" className="w-full border-purple-600 text-purple-600">
									<Link href="/promociones" className="flex items-center justify-center gap-2">
										<FiStar className="h-5 w-5" />
										Ver Promociones
									</Link>
								</Button>
							</div>
						</div>
					</div>
				</div>
			)}
		</>
	);
}