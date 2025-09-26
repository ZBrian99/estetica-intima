'use client'

import { useState } from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Separator } from '@/components/ui/separator'
import NavbarV3_1_Hybrid from '@/components/layout/NavbarV3_1_Hybrid';
import NavbarV3_3_Modern from '@/components/layout/NavbarV3_3_Modern';
import NavbarV3_5_Minimal from '@/components/layout/NavbarV3_5_Minimal';
import NavbarV3_2_Premium from '@/components/layout/NavbarV3_2_Premium'
import NavbarV3_4_Boutique from '@/components/layout/NavbarV3_4_Boutique'

const navbarOptionsV3 = [
	{
		id: 'hybrid',
		name: 'Hybrid Optimizada',
		description: 'Mega-menú de tratamientos con estructura híbrida optimizada',
		component: NavbarV3_1_Hybrid,
		bestFor: 'Balance perfecto',
		rating: 4.8,
		features: [
			'Mega-menú categorizado',
			'Búsqueda integrada',
			'Menú "Más" expandible',
			'CTA prominente',
			'Carrito visible'
		],
		pros: [
			'Acceso directo a servicios clave',
			'Organización clara de tratamientos',
			'Espacio optimizado',
			'UX intuitiva'
		],
		cons: [
			'Un click extra para categorías',
			'Menú "Más" puede ocultar contenido'
		]
	},
	{
		id: 'premium',
		name: 'Premium Elegante',
		description: 'Diseño sofisticado con búsqueda prominente y navegación fluida',
		component: NavbarV3_2_Premium,
		bestFor: 'Imagen premium',
		rating: 4.6,
		features: [
			'Búsqueda prominente',
			'Animaciones elegantes',
			'Tipografía refinada',
			'Espaciado generoso',
			'Hover effects'
		],
		pros: [
			'Apariencia muy profesional',
			'Búsqueda destacada',
			'Experiencia premium',
			'Fácil navegación'
		],
		cons: [
			'Ocupa más espacio vertical',
			'Puede ser demasiado formal'
		]
	},
	{
		id: 'modern',
		name: 'Modern Interactive',
		description: 'Diseño moderno con micro-animaciones y mejor feedback visual',
		component: NavbarV3_3_Modern,
		bestFor: 'UX moderna',
		rating: 4.7,
		features: [
			'Micro-animaciones',
			'Feedback visual',
			'Estados interactivos',
			'Transiciones suaves',
			'Indicadores activos'
		],
		pros: [
			'Muy interactiva',
			'Feedback claro',
			'Diseño contemporáneo',
			'Buena usabilidad'
		],
		cons: [
			'Animaciones pueden distraer',
			'Más compleja de mantener'
		]
	},
	{
		id: 'boutique',
		name: 'Boutique Refinada',
		description: 'Estilo boutique con menú expandible y detalles cuidados',
		component: NavbarV3_4_Boutique,
		bestFor: 'Estilo boutique',
		rating: 4.4,
		features: [
			'Estilo refinado',
			'Menú expandible',
			'Detalles cuidados',
			'Colores suaves',
			'Tipografía elegante'
		],
		pros: [
			'Muy elegante',
			'Diferenciación clara',
			'Atención al detalle',
			'Personalidad única'
		],
		cons: [
			'Puede ser muy específica',
			'Menos funcional'
		]
	},
	{
		id: 'minimal',
		name: 'Minimal Funcional',
		description: 'Enfoque minimalista con máxima funcionalidad y claridad',
		component: NavbarV3_5_Minimal,
		bestFor: 'Simplicidad',
		rating: 4.5,
		features: [
			'Diseño limpio',
			'Máxima funcionalidad',
			'Carga rápida',
			'Fácil mantenimiento',
			'Accesibilidad'
		],
		pros: [
			'Muy rápida',
			'Fácil de usar',
			'Accesible',
			'Mantenimiento simple'
		],
		cons: [
			'Puede ser demasiado simple',
			'Menos personalidad'
		]
	}
]

export default function NavbarV3Comparison() {
	const [selectedNavbar, setSelectedNavbar] = useState<string | null>(null)

	return (
		<div className="min-h-screen bg-gradient-to-br from-violet-50 via-white to-rose-50">
			{/* Header */}
			<div className="bg-white border-b border-gray-200 sticky top-0 z-50">
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
					<div className="text-center">
						<h1 className="text-4xl font-bold text-gray-900 mb-2">
							Navbar V3 - Estructura Híbrida
						</h1>
						<p className="text-lg text-gray-600 max-w-3xl mx-auto">
							Nuevas variantes con mega-menú de tratamientos, búsqueda integrada y menú "Más" optimizado
						</p>
						<div className="flex items-center justify-center gap-4 mt-4">
							<Badge variant="secondary">5 Variantes</Badge>
							<Badge variant="outline">Estructura Híbrida</Badge>
							<Badge variant="outline">Mega-menú</Badge>
						</div>
					</div>
				</div>
			</div>

			{/* Navbar Previews */}
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
				<div className="space-y-20">
					{navbarOptionsV3.map((navbar) => (
						<Card key={navbar.id} className='mb-[50rem]'>
							<CardHeader className="bg-gray-50 border-b">
								<div className="flex items-center justify-between">
									<div>
										<CardTitle className="text-xl font-semibold text-gray-900">
											{navbar.name}
										</CardTitle>
										<CardDescription className="text-gray-600 mt-1">
											{navbar.description}
										</CardDescription>
									</div>
									<div className="flex items-center gap-3">
										<div className="flex items-center gap-1">
											<span className="text-yellow-500">★</span>
											<span className="text-sm font-medium">{navbar.rating}</span>
										</div>
										<Badge variant="outline">{navbar.bestFor}</Badge>
									</div>
								</div>
							</CardHeader>

							<CardContent className="p-0">
								{/* Navbar Preview */}
								<div className="bg-white border-b">
									<navbar.component />
								</div>

								{/* Features and Details */}
								<div className="p-6">
									<div className="grid md:grid-cols-3 gap-6">
										{/* Features */}
										<div>
											<h4 className="font-semibold text-gray-900 mb-3">Características</h4>
											<ul className="space-y-2">
												{navbar.features.map((feature, index) => (
													<li key={index} className="flex items-center gap-2 text-sm text-gray-600">
														<div className="w-1.5 h-1.5 bg-violet-500 rounded-full" />
														{feature}
													</li>
												))}
											</ul>
										</div>

										{/* Pros */}
										<div>
											<h4 className="font-semibold text-green-700 mb-3">Ventajas</h4>
											<ul className="space-y-2">
												{navbar.pros.map((pro, index) => (
													<li key={index} className="flex items-center gap-2 text-sm text-green-600">
														<div className="w-1.5 h-1.5 bg-green-500 rounded-full" />
														{pro}
													</li>
												))}
											</ul>
										</div>

										{/* Cons */}
										<div>
											<h4 className="font-semibold text-red-700 mb-3">Desventajas</h4>
											<ul className="space-y-2">
												{navbar.cons.map((con, index) => (
													<li key={index} className="flex items-center gap-2 text-sm text-red-600">
														<div className="w-1.5 h-1.5 bg-red-500 rounded-full" />
														{con}
													</li>
												))}
											</ul>
										</div>
									</div>
								</div>
							</CardContent>
						</Card>
					))}
				</div>

				{/* Comparison Table */}
				<div className="mt-12">
					<Card>
						<CardHeader>
							<CardTitle>Comparación Rápida</CardTitle>
							<CardDescription>
								Comparación lado a lado de las características principales
							</CardDescription>
						</CardHeader>
						<CardContent>
							<div className="overflow-x-auto">
								<table className="w-full">
									<thead>
										<tr className="border-b">
											<th className="text-left py-3 px-4 font-semibold">Navbar</th>
											<th className="text-center py-3 px-4 font-semibold">Rating</th>
											<th className="text-center py-3 px-4 font-semibold">Mejor Para</th>
											<th className="text-center py-3 px-4 font-semibold">Complejidad</th>
											<th className="text-center py-3 px-4 font-semibold">Recomendación</th>
										</tr>
									</thead>
									<tbody>
										{navbarOptionsV3.map((navbar) => (
											<tr key={navbar.id} className="border-b hover:bg-gray-50">
												<td className="py-3 px-4">
													<div>
														<div className="font-medium text-gray-900">{navbar.name}</div>
														<div className="text-sm text-gray-500">{navbar.description}</div>
													</div>
												</td>
												<td className="text-center py-3 px-4">
													<div className="flex items-center justify-center gap-1">
														<span className="text-yellow-500">★</span>
														<span className="font-medium">{navbar.rating}</span>
													</div>
												</td>
												<td className="text-center py-3 px-4">
													<Badge variant="outline">{navbar.bestFor}</Badge>
												</td>
												<td className="text-center py-3 px-4">
													<Badge variant={navbar.id === 'minimal' ? 'secondary' : navbar.id === 'modern' ? 'destructive' : 'default'}>
														{navbar.id === 'minimal' ? 'Baja' : navbar.id === 'modern' ? 'Alta' : 'Media'}
													</Badge>
												</td>
												<td className="text-center py-3 px-4">
													{navbar.id === 'hybrid' ? (
														<Badge variant="default">⭐ Recomendada</Badge>
													) : navbar.rating >= 4.6 ? (
														<Badge variant="secondary">Muy Buena</Badge>
													) : (
														<Badge variant="outline">Buena</Badge>
													)}
												</td>
											</tr>
										))}
									</tbody>
								</table>
							</div>
						</CardContent>
					</Card>
				</div>
			</div>
		</div>
	)
}