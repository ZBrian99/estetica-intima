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
		color: 'from-pink-500 to-rose-500',
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
		color: 'from-violet-500 to-purple-500',
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
		color: 'from-emerald-500 to-teal-500',
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
		color: 'from-amber-500 to-orange-500',
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
	{ name: 'Promociones', href: '/promociones', icon: HiSparkles, badge: 'Nuevo', color: 'text-pink-600' },
	{ name: 'Pase Libre', href: '/pase-libre', icon: RiVipCrown2Line, badge: '2hs', color: 'text-purple-600' },
	{ name: 'Cursos', href: '/cursos', icon: MdSchool, color: 'text-blue-600' },
	{ name: 'Preguntas Frecuentes', href: '/faq', icon: null, color: 'text-gray-600' },
	{ name: 'Antes y Después', href: '/antes-despues', icon: null, color: 'text-gray-600' }
]

export default function NavbarV3_2_Premium() {
	const [isTreatmentsOpen, setIsTreatmentsOpen] = useState(false)
	const [isMoreOpen, setIsMoreOpen] = useState(false)
	const [isSearchFocused, setIsSearchFocused] = useState(false)
	const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
	const [cartCount] = useState(3)

	return (
		<nav className="bg-white/95 backdrop-blur-md border-b border-gray-200/50 sticky top-0 z-50 shadow-sm">
			{/* Top Bar with Search */}
			<div className="bg-gradient-to-r from-violet-50 to-rose-50 border-b border-gray-100">
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
					<div className="flex items-center justify-center">
						<div className="relative max-w-md w-full">
							<Input
								type="text"
								placeholder="¿Qué tratamiento buscás?"
								className={`w-full pl-12 pr-4 py-3 bg-white/80 border-2 transition-all duration-300 ${
									isSearchFocused 
										? 'border-violet-300 shadow-lg shadow-violet-100 bg-white' 
										: 'border-gray-200 hover:border-violet-200'
								}`}
								onFocus={() => setIsSearchFocused(true)}
								onBlur={() => setIsSearchFocused(false)}
							/>
							<FiSearch className={`absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 transition-colors ${
								isSearchFocused ? 'text-violet-500' : 'text-gray-400'
							}`} />
						</div>
					</div>
				</div>
			</div>

			{/* Main Navigation */}
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<div className="flex items-center justify-between h-20">
					{/* Logo */}
					<div className="flex-shrink-0">
						<Link href="/" className="flex items-center group">
							<Image
								src="/logo-text-sin-fondo.webp"
								alt="Íntima Estética"
								width={160}
								height={45}
								className="h-10 w-auto transition-transform group-hover:scale-105"
							/>
						</Link>
					</div>

					{/* Desktop Navigation */}
					<div className="hidden lg:flex items-center space-x-10">
						{/* Treatments Mega Menu */}
						<div className="relative">
							<button
								onClick={() => setIsTreatmentsOpen(!isTreatmentsOpen)}
								className="flex items-center gap-2 text-gray-700 hover:text-violet-600 font-semibold text-lg transition-all duration-300 group"
							>
								Tratamientos
								<FiChevronDown className={`w-4 h-4 transition-all duration-300 group-hover:text-violet-500 ${
									isTreatmentsOpen ? 'rotate-180 text-violet-500' : ''
								}`} />
							</button>

							{/* Premium Mega Menu */}
							{isTreatmentsOpen && (
								<div className="absolute top-full left-0 mt-4 w-[900px] bg-white rounded-2xl shadow-2xl border border-gray-100 overflow-hidden animate-in slide-in-from-top-2 duration-300">
									<div className="p-8">
										<div className="grid grid-cols-2 gap-8">
											{treatmentCategories.map((category) => (
												<div key={category.id} className="space-y-4">
													<div className="flex items-center gap-3 pb-3 border-b border-gray-100">
														<div className={`w-10 h-10 rounded-full bg-gradient-to-r ${category.color} flex items-center justify-center text-white text-lg shadow-lg`}>
															{category.icon}
														</div>
														<h3 className="font-bold text-gray-900 text-lg">{category.name}</h3>
													</div>
													<div className="space-y-3">
														{category.services.map((service, index) => (
															<Link
																key={index}
																href={`/servicios/${category.id}/${service.name.toLowerCase().replace(/\s+/g, '-')}`}
																className="flex items-center justify-between p-3 rounded-xl hover:bg-gradient-to-r hover:from-violet-50 hover:to-rose-50 group transition-all duration-300 border border-transparent hover:border-violet-100"
															>
																<div className="flex items-center gap-3">
																	<span className="text-gray-700 group-hover:text-violet-700 font-medium transition-colors">
																		{service.name}
																	</span>
																	{service.popular && <Badge className="text-xs bg-gradient-to-r from-green-500 to-emerald-500 text-white border-0">Popular</Badge>}
																	{service.premium && <Badge className="text-xs bg-gradient-to-r from-purple-500 to-pink-500 text-white border-0">Premium</Badge>}
																</div>
																<span className="text-violet-600 font-bold text-sm">{service.price}</span>
															</Link>
														))}
													</div>
												</div>
											))}
										</div>
										<div className="mt-8 pt-6 border-t border-gray-100 text-center">
											<Link
												href="/servicios"
												className="inline-flex items-center gap-2 bg-gradient-to-r from-violet-600 to-rose-600 text-white px-6 py-3 rounded-full font-semibold hover:shadow-lg transition-all duration-300 hover:scale-105"
											>
												Ver todos los servicios
												<span className="text-lg">→</span>
											</Link>
										</div>
									</div>
								</div>
							)}
						</div>

						{/* Gift Cards */}
						<Link
							href="/gift-cards"
							className="flex items-center gap-2 text-gray-700 hover:text-violet-600 font-semibold text-lg transition-all duration-300 group"
						>
							<BiGift className="w-5 h-5 group-hover:scale-110 transition-transform" />
							Gift Cards
						</Link>

						{/* Eventos Especiales */}
						<Link
							href="/eventos"
							className="flex items-center gap-2 text-gray-700 hover:text-violet-600 font-semibold text-lg transition-all duration-300 group"
						>
							<MdEventNote className="w-5 h-5 group-hover:scale-110 transition-transform" />
							Eventos
						</Link>

						{/* Nosotras */}
						<Link
							href="/nosotros"
							className="text-gray-700 hover:text-violet-600 font-semibold text-lg transition-all duration-300"
						>
							Nosotras
						</Link>

						{/* More Menu */}
						<div className="relative">
							<button
								onClick={() => setIsMoreOpen(!isMoreOpen)}
								className="flex items-center gap-2 text-gray-700 hover:text-violet-600 font-semibold text-lg transition-all duration-300 group"
							>
								Más
								<FiChevronDown className={`w-4 h-4 transition-all duration-300 group-hover:text-violet-500 ${
									isMoreOpen ? 'rotate-180 text-violet-500' : ''
								}`} />
							</button>

							{isMoreOpen && (
								<div className="absolute top-full right-0 mt-4 w-72 bg-white rounded-2xl shadow-2xl border border-gray-100 overflow-hidden animate-in slide-in-from-top-2 duration-300">
									<div className="p-4">
										{moreMenuItems.map((item, index) => (
											<Link
												key={index}
												href={item.href}
												className="flex items-center justify-between p-3 rounded-xl hover:bg-gradient-to-r hover:from-violet-50 hover:to-rose-50 transition-all duration-300 group"
											>
												<div className="flex items-center gap-3">
													{item.icon && <item.icon className={`w-5 h-5 ${item.color} group-hover:scale-110 transition-transform`} />}
													<span className="font-medium text-gray-700 group-hover:text-violet-700">{item.name}</span>
												</div>
												{item.badge && (
													<Badge className="text-xs bg-gradient-to-r from-violet-500 to-pink-500 text-white border-0">{item.badge}</Badge>
												)}
											</Link>
										))}
									</div>
								</div>
							)}
						</div>
					</div>

					{/* Right Side Actions */}
					<div className="flex items-center space-x-6">
						{/* Cart */}
						<Link href="/carrito" className="relative p-3 text-gray-400 hover:text-violet-600 transition-all duration-300 group">
							<FiShoppingCart className="w-6 h-6 group-hover:scale-110 transition-transform" />
							{cartCount > 0 && (
								<span className="absolute -top-1 -right-1 bg-gradient-to-r from-violet-500 to-pink-500 text-white text-xs rounded-full w-6 h-6 flex items-center justify-center font-bold shadow-lg">
									{cartCount}
								</span>
							)}
						</Link>

						{/* CTA Button */}
						<Button className="bg-gradient-to-r from-violet-600 to-rose-600 hover:from-violet-700 hover:to-rose-700 text-white px-8 py-3 text-lg font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
							Reservar Cita
						</Button>

						{/* Mobile Menu Button */}
						<button
							onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
							className="lg:hidden p-3 text-gray-400 hover:text-violet-600 transition-colors"
						>
							<FiMenu className="w-6 h-6" />
						</button>
					</div>
				</div>
			</div>

			{/* Mobile Menu */}
			{isMobileMenuOpen && (
				<div className="lg:hidden border-t border-gray-200 bg-white/95 backdrop-blur-md">
					<div className="px-4 py-6 space-y-6">
						{/* Mobile Navigation Links */}
						<div className="space-y-4">
							<Link href="/servicios" className="block py-3 text-gray-700 font-semibold text-lg border-b border-gray-100">
								Tratamientos
							</Link>
							<Link href="/gift-cards" className="block py-3 text-gray-700 font-medium">
								Gift Cards
							</Link>
							<Link href="/eventos" className="block py-3 text-gray-700 font-medium">
								Eventos Especiales
							</Link>
							<Link href="/nosotros" className="block py-3 text-gray-700 font-medium">
								Nosotras
							</Link>
							{moreMenuItems.map((item, index) => (
								<Link key={index} href={item.href} className="block py-3 text-gray-700 font-medium">
									{item.name}
								</Link>
							))}
						</div>

						{/* Mobile CTA */}
						<Button className="w-full bg-gradient-to-r from-violet-600 to-rose-600 hover:from-violet-700 hover:to-rose-700 text-white py-4 text-lg font-semibold rounded-full shadow-lg">
							Reservar Cita
						</Button>
					</div>
				</div>
			)}
		</nav>
	)
}