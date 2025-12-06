'use client';

import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { FiEye, FiCode, FiStar, FiShoppingCart, FiUsers, FiTrendingUp } from 'react-icons/fi';

// V1 Navbars
import { Navbar1Minimalist } from '@/components/layout/Navbar1Minimalist';
import { Navbar2Modern } from '@/components/layout/Navbar2Modern';
import { Navbar3Professional } from '@/components/layout/Navbar3Professional';
import { Navbar4Ecommerce } from '@/components/layout/Navbar4Ecommerce';
import { Navbar5Landing } from '@/components/layout/Navbar5Landing';

// V2 Navbars
import NavbarV2_1_Elegant from '@/components/layout/NavbarV2_1_Elegant';
import NavbarV2_2_Premium from '@/components/layout/NavbarV2_2_Premium';
import NavbarV2_3_Boutique from '@/components/layout/NavbarV2_3_Boutique';
import NavbarV2_4_Hybrid from '@/components/layout/NavbarV2_4_Hybrid';
import NavbarV2_5_Minimal from '@/components/layout/NavbarV2_5_Minimal';

// Additional components
import BrandVariants from '@/components/layout/BrandVariants';
import ShopSubbarProposals from '@/components/layout/ShopSubbarProposals';

const navbarOptionsV1 = [
	// {
	// 	id: 'minimalist',
	// 	title: 'Navbar Minimalista',
	// 	description: 'Diseño limpio y elegante con mega menú horizontal',
	// 	component: Navbar1Minimalist,
	// 	features: [
	// 		'Mega menú horizontal con NavigationMenu',
	// 		'Diseño limpio y minimalista',
	// 		'Categorías organizadas visualmente',
	// 		'Hover effects suaves',
	// 		'Responsive design'
	// 	],
	// 	bestFor: 'Sitios web profesionales que buscan elegancia y simplicidad',
	// 	pros: ['Fácil navegación', 'Carga rápida', 'Aspecto profesional'],
	// 	cons: ['Menos funcionalidades ecommerce', 'Limitado para móviles'],
	// 	icon: FiEye,
	// 	color: 'bg-blue-500',
	// 	rating: 4.5,
	// 	status: 'descartada'
	// },
	// {
	// 	id: 'modern',
	// 	title: 'Navbar Moderno',
	// 	description: 'Sidebar desplegable con categorías visuales y acciones rápidas',
	// 	component: Navbar2Modern,
	// 	features: [
	// 		'Sidebar desplegable con Sheet',
	// 		'Categorías con iconos y badges',
	// 		'Acciones rápidas destacadas',
	// 		'Avatar de usuario integrado',
	// 		'Diseño moderno y atractivo'
	// 	],
	// 	bestFor: 'Aplicaciones web modernas con múltiples funcionalidades',
	// 	pros: ['Muy interactivo', 'Excelente UX', 'Móvil-first'],
	// 	cons: ['Más complejo', 'Requiere más recursos', 'Count del carrito se mueve'],
	// 	icon: FiTrendingUp,
	// 	color: 'bg-green-500',
	// 	rating: 4.8,
	// 	status: 'elementos-aprovechables'
	// },
	// {
	// 	id: 'professional',
	// 	title: 'Navbar Profesional',
	// 	description: 'Estructura corporativa con menús en cascada y información completa',
	// 	component: Navbar3Professional,
	// 	features: [
	// 		'Barra superior con información de contacto',
	// 		'Menús en cascada organizados',
	// 		'Sección de ofertas especiales',
	// 		'Diseño corporativo elegante',
	// 		'Información de empresa destacada'
	// 	],
	// 	bestFor: 'Empresas establecidas que buscan transmitir confianza y profesionalismo',
	// 	pros: ['Muy informativo', 'Aspecto corporativo', 'Completo'],
	// 	cons: ['Puede ser abrumador', 'Más espacio vertical'],
	// 	icon: FiUsers,
	// 	color: 'bg-purple-500',
	// 	rating: 4.3,
	// 	status: 'descartada'
	// },
	// {
	// 	id: 'ecommerce',
	// 	title: 'Navbar Ecommerce',
	// 	description: 'Optimizado para ventas con búsqueda integrada y carrito prominente',
	// 	component: Navbar4Ecommerce,
	// 	features: [
	// 		'Barra de búsqueda avanzada con sugerencias',
	// 		'Carrito de compras prominente',
	// 		'Lista de deseos integrada',
	// 		'Categorías optimizadas para ventas',
	// 		'Badges de promociones y ofertas'
	// 	],
	// 	bestFor: 'Tiendas online que priorizan las conversiones y ventas',
	// 	pros: ['Optimizado para ventas', 'Búsqueda avanzada', 'UX de ecommerce'],
	// 	cons: ['Muy funcional pero poco estética', 'Banner superior innecesario', '3 barras no estético'],
	// 	icon: FiShoppingCart,
	// 	color: 'bg-orange-500',
	// 	rating: 4.7,
	// 	status: 'utilidad-aprovechable'
	// },
	// {
	// 	id: 'landing',
	// 	title: 'Navbar Landing Page',
	// 	description: 'CTAs destacados y navegación fluida para conversión máxima',
	// 	component: Navbar5Landing,
	// 	features: [
	// 		'Múltiples CTAs estratégicamente ubicados',
	// 		'Barra de contacto superior',
	// 		'Testimonios integrados en menús',
	// 		'Diseño orientado a conversión',
	// 		'Elementos de confianza (ratings, reseñas)'
	// 	],
	// 	bestFor: 'Landing pages y sitios enfocados en generar leads y conversiones',
	// 	pros: ['Alto potencial de conversión', 'Elementos de confianza', 'CTAs efectivos'],
	// 	cons: ['Puede ser agresivo comercialmente', 'Menos sutil'],
	// 	icon: FiStar,
	// 	color: 'bg-yellow-500',
	// 	rating: 4.6,
	// 	status: 'descartada'
	// }
];

interface NavbarOption {
  id: string;
  title: string;
  description: string;
  component: React.ComponentType;
  features: string[];
  pros?: string[];
  cons?: string[];
  icon: React.ComponentType<{ className?: string }>;
  color: string;
  rating: number;
  status?: 'descartada' | 'elementos-aprovechables' | 'utilidad-aprovechable' | string;
  bestFor?: string;
}

const navbarOptionsV2: NavbarOption[] = [
	{
		id: 'elegant',
		title: 'Navbar Elegante V2',
		description: 'Diseño elegante con menús hover categorizados y espaciado optimizado',
		component: NavbarV2_1_Elegant,
		features: [
			'Menús hover categorizados',
			'Espaciado optimizado',
			'Iconos en nav items',
			'Promociones destacadas',
			'Animaciones suaves',
		],
		bestFor: 'Sitios estéticos que priorizan la elegancia y profesionalismo',
		pros: ['Navegación intuitiva', 'Diseño estético-profesional', 'Animaciones suaves', 'Responsive'],
		cons: ['Requiere hover para acceder a submenús', 'Más complejo en móviles'],
		icon: FiEye,
		color: 'bg-violet-500',
		rating: 4.7,
	},
	{
		id: 'premium',
		title: 'Navbar Premium V2',
		description: 'Estilo premium con brand moderno inspirado en gradientes',
		component: NavbarV2_2_Premium,
		features: [
			'Brand con gradiente',
			'Menús categorizados',
			'Promociones integradas',
			'Quick actions',
			'Diseño moderno',
		],
		bestFor: 'Marcas premium que buscan destacar visualmente',
		pros: ['Diseño moderno y atractivo', 'Excelente organización', 'Promociones visibles', 'UX optimizada'],
		cons: ['Puede ser visualmente intenso', 'Requiere buen contraste'],
		icon: FiStar,
		color: 'bg-gradient-to-r from-purple-500 to-pink-500',
		rating: 4.8,
	},
	{
		id: 'boutique',
		title: 'Navbar Boutique V2',
		description: 'Estilo boutique compacto-elegante con categorías bien distribuidas',
		component: NavbarV2_3_Boutique,
		features: [
			'Diseño compacto',
			'Categorías signature/body/face',
			'Sin espaciado excesivo',
			'Elegante y limpio',
			'Optimizado para móviles',
		],
		bestFor: 'Boutiques y centros estéticos pequeños-medianos',
		pros: ['Muy compacto', 'Elegante', 'Fácil navegación', 'Perfecto para móviles'],
		cons: ['Menos espacio para promociones', 'Limitado en funcionalidades'],
		icon: FiUsers,
		color: 'bg-rose-500',
		rating: 4.5,
	},
	{
		id: 'hybrid',
		title: 'Navbar Híbrido V2',
		description: 'Diseño híbrido estético-funcional con elementos destacados',
		component: NavbarV2_4_Hybrid,
		features: [
			'Balance estético-funcional',
			'Promociones integradas',
			'Múltiples categorías',
			'Quick actions completas',
			'Funcionalidad completa',
		],
		bestFor: 'Centros estéticos grandes con múltiples servicios',
		pros: ['Muy completo', 'Balance perfecto', 'Promociones destacadas', 'Funcionalidad completa'],
		cons: ['Puede ser complejo', 'Requiere más espacio'],
		icon: FiShoppingCart,
		color: 'bg-indigo-500',
		rating: 4.9,
	},
	{
		id: 'minimal-premium',
		title: 'Navbar Minimalista Premium V2',
		description: 'Minimalista-premium con navegación intuitiva y categorías optimizadas',
		component: NavbarV2_5_Minimal,
		features: [
			'Navegación intuitiva',
			'Categorías laser/corporal/facial',
			'Beneficios integrados',
			'Quick actions esenciales',
			'Diseño limpio premium',
		],
		bestFor: 'Centros estéticos que priorizan simplicidad premium',
		pros: ['Muy intuitivo', 'Diseño limpio premium', 'Navegación clara', 'Optimizado'],
		cons: ['Menos opciones de personalización', 'Limitado en promociones'],
		icon: FiTrendingUp,
		color: 'bg-emerald-500',
		rating: 4.6,
	},
];

const navbarOptions = [navbarOptionsV2];

export default function NavbarComparison() {
	const [selectedNavbar, setSelectedNavbar] = useState<string | null>(null);

  const renderNavbarSection = (title: string, description: string, navbars: NavbarOption[], sectionId: string) => (
		<div className='space-y-8' id={sectionId}>
			<div className='text-center'>
				<h2 className='text-2xl font-bold text-gray-900 mb-2'>{title}</h2>
				<p className='text-gray-600'>{description}</p>
			</div>

			{navbars.map((navbar) => (
				<Card key={navbar.id} className=''>
					<div className='p-6'>
						<div className='flex items-center justify-between mb-4'>
							<div className='flex items-center space-x-3'>
								<div className={`w-10 h-10 rounded-lg ${navbar.color} flex items-center justify-center`}>
									<navbar.icon className='w-5 h-5 text-white' />
								</div>
								<div>
									<h3 className='text-xl font-semibold text-gray-900'>{navbar.title}</h3>
									<p className='text-gray-600'>{navbar.description}</p>
								</div>
							</div>
							<div className='flex items-center space-x-2'>
								<div className='flex items-center space-x-1'>
									<FiStar className='w-4 h-4 text-yellow-500 fill-current' />
									<span className='text-sm font-medium'>{navbar.rating}</span>
								</div>
								{'status' in navbar && navbar.status && (
									<Badge
										variant={
											navbar.status === 'descartada'
												? 'destructive'
												: navbar.status === 'elementos-aprovechables'
												? 'secondary'
												: 'default'
										}
									>
										{navbar.status === 'descartada'
											? 'Descartada'
											: navbar.status === 'elementos-aprovechables'
											? 'Elementos Aprovechables'
											: navbar.status === 'utilidad-aprovechable'
											? 'Utilidad Aprovechable'
											: navbar.status}
									</Badge>
								)}
								<Badge variant='outline'>{navbar.bestFor}</Badge>
							</div>
						</div>

						{/* Navbar Preview */}
						<div className='border-t bg-gray-50'>
							<navbar.component />
						</div>

						{/* Features and Details */}
						<div className='p-6 border-t'>
							<div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
								<div>
									<h4 className='font-medium text-gray-900 mb-2'>Características</h4>
									<ul className='text-sm text-gray-600 space-y-1'>
										{navbar.features.map((feature: string, index: number) => (
											<li key={index} className='flex items-center space-x-2'>
												<div className='w-1.5 h-1.5 bg-violet-500 rounded-full'></div>
												<span>{feature}</span>
											</li>
										))}
									</ul>
								</div>

								<div>
									<h4 className='font-medium text-green-700 mb-2'>Ventajas</h4>
                  <ul className='text-sm text-gray-600 space-y-1'>
                    {(navbar.pros ?? []).map((pro: string, index: number) => (
                      <li key={index} className='flex items-center space-x-2'>
                        <div className='w-1.5 h-1.5 bg-green-500 rounded-full'></div>
                        <span>{pro}</span>
                      </li>
                    ))}
                  </ul>
								</div>

								<div>
									<h4 className='font-medium text-red-700 mb-2'>Desventajas</h4>
                  <ul className='text-sm text-gray-600 space-y-1'>
                    {(navbar.cons ?? []).map((con: string, index: number) => (
                      <li key={index} className='flex items-center space-x-2'>
                        <div className='w-1.5 h-1.5 bg-red-500 rounded-full'></div>
                        <span>{con}</span>
                      </li>
                    ))}
                  </ul>
								</div>
							</div>
						</div>
					</div>
				</Card>
			))}
		</div>
	);

	return (
		<div className='min-h-screen bg-gray-50'>
			{/* Header */}
			<div className='bg-white border-b'>
				<div className='container mx-auto px-4 py-8'>
					<h1 className='text-3xl font-bold text-gray-900 mb-2'>Comparación Completa de Navbars</h1>
					<p className='text-gray-600'>
						Explora diferentes estilos de navegación, variantes de brand y propuestas para tu sitio web
					</p>

					{/* Navigation Links */}
					<div className='flex flex-wrap gap-4 mt-6'>
						<Button
							variant='outline'
							size='sm'
							onClick={() => document.getElementById('navbars-v1')?.scrollIntoView({ behavior: 'smooth' })}
						>
							Navbars V1 (Originales)
						</Button>
						<Button
							variant='outline'
							size='sm'
							onClick={() => document.getElementById('navbars-v2')?.scrollIntoView({ behavior: 'smooth' })}
						>
							Navbars V2 (Nuevas)
						</Button>
						<Button
							variant='outline'
							size='sm'
							onClick={() => document.getElementById('brand-variants')?.scrollIntoView({ behavior: 'smooth' })}
						>
							Variantes de Brand
						</Button>
						<Button
							variant='outline'
							size='sm'
							onClick={() => document.getElementById('shop-subbar')?.scrollIntoView({ behavior: 'smooth' })}
						>
							Propuestas Subbar Tienda
						</Button>
						<Button
							variant='outline'
							size='sm'
							onClick={() => document.getElementById('comparison-table')?.scrollIntoView({ behavior: 'smooth' })}
						>
							Tabla Comparativa
						</Button>
					</div>
				</div>
			</div>

			<div className='container mx-auto px-4 py-8 space-y-16'>
				{/* Navbars V1 Section */}
				

				<Separator className='my-16' />

				{/* Navbars V2 Section */}
				{renderNavbarSection(
					'Navbars V2 - Nuevas Propuestas',
					'5 nuevas navbars basadas en el feedback detallado del usuario',
					navbarOptionsV2,
					'navbars-v2'
				)}

				<Separator className='my-16' />

				{/* Brand Variants Section */}
				<div id='brand-variants'>
					<BrandVariants />
				</div>

				<Separator className='my-16' />

				{/* Shop Subbar Proposals Section */}
				<div id='shop-subbar'>
					<ShopSubbarProposals />
				</div>

				<Separator className='my-16' />

				{/* Comparison Table */}
				<div id='comparison-table'>
					<Card className='p-6'>
						<h2 className='text-2xl font-bold text-gray-900 mb-6'>Tabla Comparativa Completa</h2>
						<div className='overflow-x-auto'>
							<table className='w-full'>
								<thead>
									<tr className='border-b'>
										<th className='text-left py-3 px-4 font-medium text-gray-900'>Navbar</th>
										<th className='text-center py-3 px-4 font-medium text-gray-900'>Versión</th>
										<th className='text-center py-3 px-4 font-medium text-gray-900'>Rating</th>
										<th className='text-center py-3 px-4 font-medium text-gray-900'>Estado</th>
										<th className='text-center py-3 px-4 font-medium text-gray-900'>Estética</th>
										<th className='text-center py-3 px-4 font-medium text-gray-900'>Funcionalidad</th>
										<th className='text-left py-3 px-4 font-medium text-gray-900'>Mejor para</th>
									</tr>
								</thead>
								<tbody>
									{navbarOptionsV2.map((navbar) => (
										<tr key={navbar.id} className='border-b hover:bg-gray-50'>
											<td className='py-3 px-4'>
												<div className='flex items-center space-x-3'>
													<div className={`w-8 h-8 rounded ${navbar.color} flex items-center justify-center`}>
														<navbar.icon className='w-4 h-4 text-white' />
													</div>
													<span className='font-medium'>{navbar.title}</span>
												</div>
											</td>
											<td className='text-center py-3 px-4'>
												<Badge variant={navbarOptionsV2.includes(navbar) ? 'default' : 'secondary'}>
													{navbarOptionsV2.includes(navbar) ? 'V2' : 'V1'}
												</Badge>
											</td>
											<td className='text-center py-3 px-4'>
												<div className='flex items-center justify-center space-x-1'>
													<FiStar className='w-4 h-4 text-yellow-500 fill-current' />
													<span>{navbar.rating}</span>
												</div>
											</td>
											<td className='text-center py-3 px-4'>
												{'status' in navbar && navbar.status ? (
													<Badge variant={navbar.status === 'descartada' ? 'destructive' : 'secondary'}>
														{navbar.status === 'descartada' ? 'Descartada' : 'Aprovechable'}
													</Badge>
												) : (
													<Badge variant='default'>Nueva</Badge>
												)}
											</td>
											<td className='text-center py-3 px-4'>
												<Badge variant={navbar.rating > 4.6 ? 'default' : 'secondary'}>
													{navbar.rating > 4.6 ? 'Excelente' : navbar.rating > 4.3 ? 'Buena' : 'Regular'}
												</Badge>
											</td>
											<td className='text-center py-3 px-4'>
												<Badge
													variant={
														navbar.id.includes('ecommerce') || navbar.id.includes('hybrid') ? 'default' : 'secondary'
													}
												>
													{navbar.id.includes('ecommerce') || navbar.id.includes('hybrid')
														? 'Alta'
														: navbar.id.includes('premium') || navbar.id.includes('elegant')
														? 'Media-Alta'
														: 'Media'}
												</Badge>
											</td>
											<td className='py-3 px-4 text-sm text-gray-600'>{navbar.bestFor}</td>
										</tr>
									))}
								</tbody>
							</table>
						</div>
					</Card>
				</div>

				{/* Final Recommendations */}
				<Card className='p-6 bg-violet-50 border-violet-200'>
					<h2 className='text-xl font-bold text-violet-900 mb-4'>Recomendaciones Finales</h2>
					<div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
						<div>
							<h3 className='font-semibold text-violet-800 mb-2'>Para Centro Estético Premium</h3>
							<p className='text-violet-700 text-sm mb-2'>
								Recomiendo la <strong>Navbar Híbrido V2</strong> por su balance perfecto entre estética y funcionalidad,
								con menús categorizados y promociones integradas.
							</p>
							<Badge className='bg-indigo-500'>Mejor opción general</Badge>
						</div>
						<div>
							<h3 className='font-semibold text-violet-800 mb-2'>Para Tienda Online</h3>
							<p className='text-violet-700 text-sm mb-2'>
								Para la sección de tienda, combina la <strong>Navbar Premium V2</strong> con la
								<strong>Subbar Compacta</strong> o <strong>Enfoque Híbrido</strong>.
							</p>
							<Badge className='bg-purple-500'>Combinación recomendada</Badge>
						</div>
					</div>
				</Card>
			</div>
		</div>
	);
}
