'use client';
import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Zap, Sparkles, Heart, Star, Scissors, Palette } from 'lucide-react';

type LayoutType = '4-row' | '4-grid' | '6-3x2';

const Categorias = () => {
	const [layout, setLayout] = useState<LayoutType>('6-3x2');
	const [categoryCount, setCategoryCount] = useState<4 | 6>(6);

	// 4 categorías principales
	const categorias4 = [
		{
			id: 'depilacion-definitiva',
			nombre: 'Depilación Definitiva',
			descripcion: 'Tecnología láser de última generación para hombres y mujeres',
			href: '/servicios?category=depilacion',
			icon: <Zap className="w-8 h-8" />,
			gradient: 'from-primary-500 to-rose-400',
			image: 'https://image.pollinations.ai/prompt/laser%20hair%20removal%20treatment%20modern%20aesthetic%20clinic%20professional%20equipment%20realistic%20photography?width=400&height=300&model=flux-realism&enhance=true&nologo=true&seed=12345',
			fallback: 'bg-primary-500'
		},
		{
			id: 'modelado-corporal',
			nombre: 'Modelado Corporal',
			descripcion: 'Maderoterapia, tecnología avanzada y tratamientos reductores',
			href: '/servicios?category=corporal',
			icon: <Sparkles className="w-8 h-8" />,
			gradient: 'from-purple-500 to-indigo-400',
			image: 'https://image.pollinations.ai/prompt/body%20contouring%20treatment%20maderoterapia%20wooden%20tools%20spa%20aesthetic%20clinic%20realistic%20photography?width=400&height=300&model=flux-realism&enhance=true&nologo=true&seed=23456',
			fallback: 'bg-purple-500'
		},
		{
			id: 'belleza-total',
			nombre: 'Belleza Total',
			descripcion: 'Tratamientos faciales, cejas, microblading y cuidado de uñas',
			href: '/servicios?category=facial',
			icon: <Heart className="w-8 h-8" />,
			gradient: 'from-emerald-500 to-teal-400',
			image: 'https://image.pollinations.ai/prompt/facial%20treatment%20beauty%20spa%20microblading%20eyebrows%20professional%20aesthetic%20clinic%20realistic%20photography?width=400&height=300&model=flux-realism&enhance=true&nologo=true&seed=34567',
			fallback: 'bg-emerald-500'
		},
		{
			id: 'experiencias-unicas',
			nombre: 'Experiencias Únicas',
			descripcion: 'Masajes, spa de pies, bronceado natural y pase libre',
			href: '/servicios?category=spa',
			icon: <Star className="w-8 h-8" />,
			gradient: 'from-amber-500 to-orange-400',
			image: 'https://image.pollinations.ai/prompt/relaxing%20spa%20massage%20stones%20peaceful%20atmosphere%20wellness%20center%20realistic%20photography?width=400&height=300&model=flux-realism&enhance=true&nologo=true&seed=45678',
			fallback: 'bg-amber-500'
		}
	];

	// 6 categorías más específicas
	const categorias6 = [
		{
			id: 'depilacion-laser',
			nombre: 'Depilación Láser',
			descripcion: 'Depilación definitiva para todas las zonas del cuerpo',
			href: '/servicios?category=depilacion',
			icon: <Zap className="w-6 h-6" />,
			gradient: 'from-primary-500 to-rose-400',
			image: 'https://image.pollinations.ai/prompt/laser%20hair%20removal%20equipment%20modern%20clinic%20professional%20treatment?width=300&height=200&model=flux-realism&enhance=true&nologo=true&seed=11111',
			fallback: 'bg-primary-500'
		},
		{
			id: 'tratamientos-corporales',
			nombre: 'Tratamientos Corporales',
			descripcion: 'Maderoterapia, Mio Up, Alpha Synergy y más',
			href: '/servicios?category=corporal',
			icon: <Sparkles className="w-6 h-6" />,
			gradient: 'from-purple-500 to-indigo-400',
			image: 'https://image.pollinations.ai/prompt/body%20treatment%20maderoterapia%20wooden%20massage%20tools%20spa%20clinic?width=300&height=200&model=flux-realism&enhance=true&nologo=true&seed=22222',
			fallback: 'bg-purple-500'
		},
		{
			id: 'tratamientos-faciales',
			nombre: 'Tratamientos Faciales',
			descripcion: 'Limpieza profunda, Alpha Facial, Dermaplaning',
			href: '/servicios?category=facial',
			icon: <Heart className="w-6 h-6" />,
			gradient: 'from-emerald-500 to-teal-400',
			image: 'https://image.pollinations.ai/prompt/facial%20treatment%20diamond%20tip%20microdermabrasion%20professional%20skincare%20clinic?width=300&height=200&model=flux-realism&enhance=true&nologo=true&seed=33333',
			fallback: 'bg-emerald-500'
		},
		{
			id: 'cejas-micropigmentacion',
			nombre: 'Cejas y Micropigmentación',
			descripcion: 'Microblading, diseño de cejas y dermopigmentación',
			href: '/servicios?category=cejas',
			icon: <Scissors className="w-6 h-6" />,
			gradient: 'from-rose-500 to-primary-400',
			image: 'https://image.pollinations.ai/prompt/microblading%20eyebrow%20treatment%20professional%20beauty%20salon%20precise%20technique?width=300&height=200&model=flux-realism&enhance=true&nologo=true&seed=44444',
			fallback: 'bg-rose-500'
		},
		{
			id: 'unas-belleza',
			nombre: 'Uñas y Belleza',
			descripcion: 'Manicura, pedicura, esmaltado semipermanente',
			href: '/servicios?category=unas',
			icon: <Palette className="w-6 h-6" />,
			gradient: 'from-violet-500 to-purple-400',
			image: 'https://image.pollinations.ai/prompt/professional%20manicure%20nail%20art%20beauty%20salon%20elegant%20hands%20care?width=300&height=200&model=flux-realism&enhance=true&nologo=true&seed=55555',
			fallback: 'bg-violet-500'
		},
		{
			id: 'masajes-relajacion',
			nombre: 'Masajes y Relajación',
			descripcion: 'Masajes terapéuticos, descontracturantes y relajantes',
			href: '/servicios?category=masajes',
			icon: <Star className="w-6 h-6" />,
			gradient: 'from-amber-500 to-orange-400',
			image: 'https://image.pollinations.ai/prompt/relaxing%20massage%20therapy%20spa%20stones%20peaceful%20wellness%20center?width=300&height=200&model=flux-realism&enhance=true&nologo=true&seed=66666',
			fallback: 'bg-amber-500'
		}
	];

	const categorias = categoryCount === 4 ? categorias4 : categorias6;

	const getGridClasses = () => {
		if (categoryCount === 4) {
			return layout === '4-row'
				? 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6'
				: 'grid grid-cols-1 md:grid-cols-2 gap-6';
		}
		return 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6';
	};

	return (
		<section className="py-16 bg-gray-50">
			<div className="max-w-7xl mx-auto px-4">
				{/* Header */}
				<div className="text-center mb-12">
					<h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
						Nuestros Servicios
					</h2>
					<p className="text-lg text-gray-600 max-w-2xl mx-auto">
						Descubrí nuestra amplia gama de tratamientos de estética integral diseñados para realzar tu belleza natural
					</p>
				</div>

				{/* Layout Controls */}
				<div className="flex flex-wrap justify-center gap-4 mb-8">
					{/* Category Count Toggle */}
					{/* <div className="flex bg-white rounded-lg p-1 shadow-sm border">
						<button
							onClick={() => setCategoryCount(4)}
							className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
								categoryCount === 4
									? 'bg-primary-500 text-white'
									: 'text-gray-600 hover:text-gray-900'
							}`}
						>
							4 Categorías
						</button>
						<button
							onClick={() => setCategoryCount(6)}
							className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
								categoryCount === 6
									? 'bg-primary-500 text-white'
									: 'text-gray-600 hover:text-gray-900'
							}`}
						>
							6 Categorías
						</button>
					</div> */}

					{/* Layout Toggle for 4 categories */}
					{categoryCount === 4 && (
						<div className="flex bg-white rounded-lg p-1 shadow-sm border">
							<button
								onClick={() => setLayout('4-row')}
								className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
									layout === '4-row'
										? 'bg-purple-500 text-white'
										: 'text-gray-600 hover:text-gray-900'
								}`}
							>
								Fila
							</button>
							<button
								onClick={() => setLayout('4-grid')}
								className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
									layout === '4-grid'
										? 'bg-purple-500 text-white'
										: 'text-gray-600 hover:text-gray-900'
								}`}
							>
								Grilla
							</button>
						</div>
					)}
				</div>

				{/* Categories Grid */}
				<div className={getGridClasses()}>
					{categorias.map((categoria) => (
						<Link
							key={categoria.id}
							href={categoria.href}
							className="group relative overflow-hidden rounded-2xl bg-white shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
						>
							{/* Image Container */}
							<div className="relative h-48 overflow-hidden">
								<Image
									src={categoria.image}
									alt={categoria.nombre}
									fill
									className="object-cover group-hover:scale-110 transition-transform duration-500"
									onError={(e) => {
										const target = e.target as HTMLImageElement;
										target.style.display = 'none';
										const parent = target.parentElement;
										if (parent) {
											parent.className += ` ${categoria.fallback}`;
										}
									}}
								/>
								{/* Gradient Overlay */}
								<div className={`absolute inset-0 bg-gradient-to-t ${categoria.gradient} opacity-60 group-hover:opacity-70 transition-opacity duration-300`} />
								
								{/* Icon */}
								<div className="absolute top-4 right-4 p-3 bg-white/20 rounded-full text-white">
									{categoria.icon}
								</div>
							</div>

							{/* Content */}
							<div className="p-6">
								<h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-primary-600 transition-colors duration-300">
									{categoria.nombre}
								</h3>
								<p className="text-gray-600 text-sm leading-relaxed">
									{categoria.descripcion}
								</p>
								
								{/* CTA */}
								<div className="mt-4 flex items-center text-primary-600 font-medium text-sm group-hover:text-primary-700 transition-colors duration-300">
									<span>Ver servicios</span>
									<svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
										<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
									</svg>
								</div>
							</div>
						</Link>
					))}
				</div>

				{/* CTA Section */}
				<div className="text-center mt-12">
					<Link
						href="/servicios"
						className="inline-flex items-center px-8 py-4 bg-primary-600 text-white font-semibold rounded-full hover:bg-primary-700 transition-colors duration-300 shadow-lg hover:shadow-xl"
					>
						Ver Todos los Servicios
						<svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
							<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
						</svg>
					</Link>
				</div>
			</div>
		</section>
	);
};

export default Categorias;