'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Input } from '@/components/ui/input'
import { FiSearch, FiShoppingCart, FiChevronDown, FiMenu, FiX } from 'react-icons/fi'
import { HiSparkles } from 'react-icons/hi'
import { BiGift } from 'react-icons/bi'
import { MdEventNote, MdSchool } from 'react-icons/md'
import { RiVipCrown2Line } from 'react-icons/ri'

const treatmentCategories = [
	{
		id: 'facial',
		name: 'Tratamientos Faciales',
		icon: '✨',
		services: [
			{ name: 'Limpieza Profunda', price: '$45', popular: true },
			{ name: 'Hidratación Intensiva', price: '$55' },
			{ name: 'Anti-edad Premium', price: '$75', premium: true },
			{ name: 'Peeling Químico', price: '$65' },
			{ name: 'Radiofrecuencia', price: '$85' },
			{ name: 'Microdermoabrasión', price: '$60' }
		]
	},
	{
		id: 'corporal',
		name: 'Tratamientos Corporales',
		icon: '💆‍♀️',
		services: [
			{ name: 'Masaje Relajante', price: '$50' },
			{ name: 'Drenaje Linfático', price: '$60', popular: true },
			{ name: 'Tratamiento Reductivo', price: '$70' },
			{ name: 'Exfoliación Corporal', price: '$45' },
			{ name: 'Envolturas', price: '$55' },
			{ name: 'Presoterapia', price: '$65' }
		]
	},
	{
		id: 'depilacion',
		name: 'Depilación',
		icon: '🪒',
		services: [
			{ name: 'Depilación Láser', price: '$80', popular: true },
			{ name: 'Cera Española', price: '$25' },
			{ name: 'Depilación Definitiva', price: '$120', premium: true },
			{ name: 'Zona Bikini', price: '$35' },
			{ name: 'Piernas Completas', price: '$45' },
			{ name: 'Axilas', price: '$20' }
		]
	},
	{
		id: 'estetica',
		name: 'Estética Avanzada',
		icon: '💎',
		services: [
			{ name: 'Botox', price: '$200', premium: true },
			{ name: 'Ácido Hialurónico', price: '$180', premium: true },
			{ name: 'Plasma Rico', price: '$150' },
			{ name: 'Mesoterapia', price: '$120' },
			{ name: 'Hilos Tensores', price: '$250', premium: true },
			{ name: 'Criolipolisis', price: '$300', popular: true }
		]
	}
]

const moreMenuItems = [
	{ name: 'Promociones', href: '/promociones', icon: HiSparkles, badge: 'Nuevo' },
	{ name: 'Pase Libre', href: '/pase-libre', icon: RiVipCrown2Line, badge: '2hs' },
	{ name: 'Cursos', href: '/cursos', icon: MdSchool },
	{ name: 'Preguntas Frecuentes', href: '/faq', icon: null },
	{ name: 'Antes y Después', href: '/antes-despues', icon: null }
]

export default function NavbarV3_1_Hybrid() {
	const [isTreatmentsOpen, setIsTreatmentsOpen] = useState(false)
	const [isMoreOpen, setIsMoreOpen] = useState(false)
	const [isSearchOpen, setIsSearchOpen] = useState(false)
	const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
	const [cartCount] = useState(3)

	return (
		<nav className="bg-white border-b border-gray-200 sticky top-0 z-50">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<div className="flex items-center justify-between h-16">
					{/* Logo */}
					<div className="flex-shrink-0">
						<Link href="/" className="flex items-center">
							<Image
								src="/logo-text-sin-fondo.webp"
								alt="Íntima Estética"
								width={140}
								height={40}
								className="h-8 w-auto"
							/>
						</Link>
					</div>

					{/* Desktop Navigation */}
					<div className="hidden lg:flex items-center space-x-8">
						{/* Treatments Mega Menu */}
						<div className="relative">
							<button
								onClick={() => setIsTreatmentsOpen(!isTreatmentsOpen)}
								className="flex items-center gap-1 text-gray-700 hover:text-violet-600 font-medium transition-colors"
							>
								Tratamientos
								<FiChevronDown className={`w-4 h-4 transition-transform ${isTreatmentsOpen ? 'rotate-180' : ''}`} />
							</button>

							{/* Mega Menu Dropdown */}
							{isTreatmentsOpen && (
								<div className="absolute top-full left-0 mt-2 w-[800px] bg-white rounded-lg shadow-xl border border-gray-200 p-6">
									<div className="grid grid-cols-2 gap-6">
										{treatmentCategories.map((category) => (
											<div key={category.id} className="space-y-3">
												<div className="flex items-center gap-2 pb-2 border-b border-gray-100">
													<span className="text-lg">{category.icon}</span>
													<h3 className="font-semibold text-gray-900">{category.name}</h3>
												</div>
												<div className="space-y-2">
													{category.services.map((service, index) => (
														<Link
															key={index}
															href={`/servicios/${category.id}/${service.name.toLowerCase().replace(/\s+/g, '-')}`}
															className="flex items-center justify-between p-2 rounded-md hover:bg-violet-50 group transition-colors"
														>
															<div className="flex items-center gap-2">
																<span className="text-sm text-gray-700 group-hover:text-violet-600">
																	{service.name}
																</span>
																{service.popular && <Badge className="text-xs bg-green-500">Popular</Badge>}
																{service.premium && <Badge className="text-xs bg-purple-500">Premium</Badge>}
															</div>
															<span className="text-xs text-violet-600 font-medium">{service.price}</span>
														</Link>
													))}
												</div>
											</div>
										))}
									</div>
									<div className="mt-6 pt-4 border-t border-gray-100 text-center">
										<Link
											href="/servicios"
											className="text-violet-600 hover:text-violet-700 font-medium text-sm"
										>
											Ver todos los servicios →
										</Link>
									</div>
								</div>
							)}
						</div>

						{/* Gift Cards */}
						<Link
							href="/gift-cards"
							className="flex items-center gap-1 text-gray-700 hover:text-violet-600 font-medium transition-colors"
						>
							<BiGift className="w-4 h-4" />
							Gift Cards
						</Link>

						{/* Eventos Especiales */}
						<Link
							href="/eventos"
							className="flex items-center gap-1 text-gray-700 hover:text-violet-600 font-medium transition-colors"
						>
							<MdEventNote className="w-4 h-4" />
							Eventos
						</Link>

						{/* Nosotras */}
						<Link
							href="/nosotros"
							className="text-gray-700 hover:text-violet-600 font-medium transition-colors"
						>
							Nosotras
						</Link>

						{/* More Menu */}
						<div className="relative">
							<button
								onClick={() => setIsMoreOpen(!isMoreOpen)}
								className="flex items-center gap-1 text-gray-700 hover:text-violet-600 font-medium transition-colors"
							>
								Más
								<FiChevronDown className={`w-4 h-4 transition-transform ${isMoreOpen ? 'rotate-180' : ''}`} />
							</button>

							{isMoreOpen && (
								<div className="absolute top-full right-0 mt-2 w-64 bg-white rounded-lg shadow-xl border border-gray-200 py-2">
									{moreMenuItems.map((item, index) => (
										<Link
											key={index}
											href={item.href}
											className="flex items-center justify-between px-4 py-2 text-gray-700 hover:bg-violet-50 hover:text-violet-600 transition-colors"
										>
											<div className="flex items-center gap-2">
												{item.icon && <item.icon className="w-4 h-4" />}
												<span className="text-sm">{item.name}</span>
											</div>
											{item.badge && (
												<Badge className="text-xs bg-violet-500">{item.badge}</Badge>
											)}
										</Link>
									))}
								</div>
							)}
						</div>
					</div>

					{/* Right Side Actions */}
					<div className="flex items-center space-x-4">
						{/* Search */}
						<div className="relative">
							{isSearchOpen ? (
								<div className="flex items-center gap-2">
									<Input
										type="text"
										placeholder="Buscar tratamientos..."
										className="w-64 h-9"
										autoFocus
									/>
									<button
										onClick={() => setIsSearchOpen(false)}
										className="p-2 text-gray-400 hover:text-gray-600"
									>
										<FiX className="w-4 h-4" />
									</button>
								</div>
							) : (
								<button
									onClick={() => setIsSearchOpen(true)}
									className="p-2 text-gray-400 hover:text-gray-600 transition-colors"
								>
									<FiSearch className="w-5 h-5" />
								</button>
							)}
						</div>

						{/* Cart */}
						<Link href="/carrito" className="relative p-2 text-gray-400 hover:text-gray-600 transition-colors">
							<FiShoppingCart className="w-5 h-5" />
							{cartCount > 0 && (
								<span className="absolute -top-1 -right-1 bg-violet-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
									{cartCount}
								</span>
							)}
						</Link>

						{/* CTA Button */}
						<Button className="bg-violet-600 hover:bg-violet-700 text-white px-6">
							Reservar Cita
						</Button>

						{/* Mobile Menu Button */}
						<button
							onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
							className="lg:hidden p-2 text-gray-400 hover:text-gray-600"
						>
							<FiMenu className="w-5 h-5" />
						</button>
					</div>
				</div>
			</div>

			{/* Mobile Menu */}
			{isMobileMenuOpen && (
				<div className="lg:hidden border-t border-gray-200 bg-white">
					<div className="px-4 py-4 space-y-4">
						{/* Mobile Search */}
						<div className="relative">
							<Input
								type="text"
								placeholder="Buscar tratamientos..."
								className="w-full pl-10"
							/>
							<FiSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
						</div>

						{/* Mobile Navigation Links */}
						<div className="space-y-2">
							<Link href="/servicios" className="block py-2 text-gray-700 font-medium">
								Tratamientos
							</Link>
							<Link href="/gift-cards" className="block py-2 text-gray-700">
								Gift Cards
							</Link>
							<Link href="/eventos" className="block py-2 text-gray-700">
								Eventos Especiales
							</Link>
							<Link href="/nosotros" className="block py-2 text-gray-700">
								Nosotras
							</Link>
							{moreMenuItems.map((item, index) => (
								<Link key={index} href={item.href} className="block py-2 text-gray-700">
									{item.name}
								</Link>
							))}
						</div>

						{/* Mobile CTA */}
						<Button className="w-full bg-violet-600 hover:bg-violet-700 text-white">
							Reservar Cita
						</Button>
					</div>
				</div>
			)}
		</nav>
	)
}