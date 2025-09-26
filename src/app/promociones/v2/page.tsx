'use client';
import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {
	Star,
	Clock,
	Calendar,
	Tag,
	Gift,
	Sparkles,
	Heart,
	Zap,
	Phone,
	MessageCircle,
	ArrowRight,
	CheckCircle,
	Percent,
	TrendingUp,
} from 'lucide-react';

interface Promocion {
	id: string;
	titulo: string;
	descripcion: string;
	descuentoOriginal: number;
	descuentoActual: number;
	precioOriginal: number;
	precioFinal: number;
	validoHasta: string;
	incluye: string[];
	condiciones: string[];
	imagen: string;
	colorFallback: string;
	destacada?: boolean;
	limitado?: boolean;
}

const PromocionesPage = () => {
	const [filtroActivo, setFiltroActivo] = useState<'todas' | 'destacadas' | 'limitadas'>('todas');

	// Promociones disponibles
	const promociones: Promocion[] = [
		{
			id: 'pase-libre-intima',
			titulo: 'Pase Libre Íntima',
			descripcion:
				'Acceso ilimitado a todos nuestros tratamientos durante 3 meses. La mejor forma de cuidar tu piel y cuerpo.',
			descuentoOriginal: 50,
			descuentoActual: 60,
			precioOriginal: 180000,
			precioFinal: 72000,
			validoHasta: '31 de Enero 2025',
			incluye: [
				'Depilación láser ilimitada',
				'Tratamientos faciales',
				'Radiofrecuencia corporal',
				'Limpieza de cutis profunda',
				'Consultas de seguimiento',
			],
			condiciones: [
				'Válido por 3 meses desde la compra',
				'No acumulable con otras promociones',
				'Requiere reserva previa',
				'Transferible a familiar directo',
			],
			imagen: '/images/promociones/pase-libre.jpg',
			colorFallback: '#ec4899',
			destacada: true,
			limitado: true,
		},
		{
			id: 'depilacion-verano',
			titulo: 'Depilación de Verano',
			descripcion:
				'Preparate para el verano con nuestra promoción especial en depilación láser para piernas completas.',
			descuentoOriginal: 30,
			descuentoActual: 40,
			precioOriginal: 45000,
			precioFinal: 27000,
			validoHasta: '15 de Febrero 2025',
			incluye: [
				'6 sesiones de láser',
				'Evaluación inicial gratuita',
				'Crema post-tratamiento',
				'Seguimiento personalizado',
			],
			condiciones: [
				'Válido para piernas completas',
				'Sesiones cada 4-6 semanas',
				'No válido en embarazo',
				'Consulta previa obligatoria',
			],
			imagen: '/images/promociones/depilacion-verano.jpg',
			colorFallback: '#06b6d4',
			destacada: true,
		},
		{
			id: 'facial-renovacion',
			titulo: 'Renovación Facial',
			descripcion: 'Tratamiento completo de renovación facial con las últimas tecnologías para una piel radiante.',
			descuentoOriginal: 25,
			descuentoActual: 35,
			precioOriginal: 28000,
			precioFinal: 18200,
			validoHasta: '28 de Febrero 2025',
			incluye: [
				'Limpieza profunda',
				'Peeling químico suave',
				'Hidratación intensiva',
				'Masaje facial relajante',
				'Productos para el hogar',
			],
			condiciones: [
				'Una sesión por persona',
				'Duración aproximada: 90 min',
				'No recomendado en acné activo',
				'Incluye consulta dermatológica',
			],
			imagen: '/images/promociones/facial-renovacion.jpg',
			colorFallback: '#8b5cf6',
		},
		{
			id: 'combo-novia',
			titulo: 'Combo Novia Perfecta',
			descripcion:
				'El paquete completo para lucir radiante en tu día especial. Incluye todos los tratamientos esenciales.',
			descuentoOriginal: 45,
			descuentoActual: 50,
			precioOriginal: 95000,
			precioFinal: 47500,
			validoHasta: '30 de Abril 2025',
			incluye: [
				'Depilación completa (6 sesiones)',
				'Tratamientos faciales (4 sesiones)',
				'Radiofrecuencia corporal',
				'Manicura y pedicura',
				'Asesoramiento personalizado',
			],
			condiciones: [
				'Válido por 6 meses',
				'Ideal comenzar 4 meses antes',
				'Incluye prueba de maquillaje',
				'Plan de tratamiento personalizado',
			],
			imagen: '/images/promociones/combo-novia.jpg',
			colorFallback: '#f59e0b',
			destacada: true,
			limitado: true,
		},
		{
			id: 'criolipolisis-express',
			titulo: 'Criolipólisis Express',
			descripcion: 'Elimina la grasa localizada de forma no invasiva con nuestra tecnología de última generación.',
			descuentoOriginal: 20,
			descuentoActual: 30,
			precioOriginal: 35000,
			precioFinal: 24500,
			validoHasta: '20 de Marzo 2025',
			incluye: [
				'Una sesión de criolipólisis',
				'Evaluación corporal completa',
				'Drenaje linfático post-tratamiento',
				'Plan nutricional básico',
			],
			condiciones: [
				'Una zona por sesión',
				'Resultados visibles en 2-3 meses',
				'No apto para embarazadas',
				'Evaluación médica previa',
			],
			imagen: '/images/promociones/criolipolisis.jpg',
			colorFallback: '#10b981',
		},
		{
			id: 'amigas-descuento',
			titulo: 'Descuento Amigas',
			descripcion: 'Vení con tu amiga y ambas obtienen un descuento especial en cualquier tratamiento.',
			descuentoOriginal: 15,
			descuentoActual: 25,
			precioOriginal: 0, // Variable según tratamiento
			precioFinal: 0, // Variable según tratamiento
			validoHasta: 'Válido todo el año',
			incluye: [
				'Descuento en cualquier tratamiento',
				'Válido para ambas personas',
				'Consulta gratuita',
				'Asesoramiento personalizado',
			],
			condiciones: [
				'Ambas deben ser nuevas clientas',
				'Tratamientos el mismo día',
				'No acumulable con otras promos',
				'Mínimo 2 sesiones por persona',
			],
			imagen: '/images/promociones/amigas.jpg',
			colorFallback: '#ef4444',
		},
	];

	// Filtrar promociones
	const promocionesFiltradas = promociones.filter((promo) => {
		if (filtroActivo === 'destacadas') return promo.destacada;
		if (filtroActivo === 'limitadas') return promo.limitado;
		return true;
	});

	const formatearPrecio = (precio: number) => {
		if (precio === 0) return 'Consultar';
		return new Intl.NumberFormat('es-AR', {
			style: 'currency',
			currency: 'ARS',
			minimumFractionDigits: 0,
		}).format(precio);
	};

	const abrirWhatsApp = (promocion: Promocion) => {
		const mensaje = encodeURIComponent(
			`¡Hola! Me interesa la promoción "${promocion.titulo}". ¿Podrían darme más información?`
		);
		window.open(`https://wa.me/5492235507949?text=${mensaje}`, '_blank');
	};

	return (
		<div className='min-h-screen bg-gray-50'>
			{/* Hero Section */}
			<section className='bg-gradient-to-r from-primary-500 to-purple-600 text-white py-16'>
				<div className='max-w-7xl mx-auto px-4 text-center'>
					<div className='inline-flex items-center justify-center w-16 h-16 bg-white/20 rounded-full mb-6'>
						<Gift className='w-8 h-8' />
					</div>
					<h1 className='text-4xl md:text-5xl font-bold mb-4'>Promociones Especiales</h1>
					<p className='text-xl text-primary-100 max-w-2xl mx-auto mb-8'>
						Descubrí nuestras ofertas exclusivas y aprovechá los mejores precios en tratamientos de estética integral
					</p>
					<div className='flex flex-col sm:flex-row gap-4 justify-center'>
						<button
							onClick={() => abrirWhatsApp(promociones[0])}
							className='inline-flex items-center px-8 py-4 bg-white text-primary-600 font-semibold rounded-full hover:bg-primary-50 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105'
						>
							<MessageCircle className='w-5 h-5 mr-2' />
							Consultar por WhatsApp
						</button>
						<Link
							href='/#contacto'
							className='inline-flex items-center px-8 py-4 bg-transparent border-2 border-white text-white font-semibold rounded-full hover:bg-white hover:text-primary-600 transition-all duration-300'
						>
							<Phone className='w-5 h-5 mr-2' />
							Reservar Turno
						</Link>
					</div>
				</div>
			</section>

			{/* Filters */}
			<section className='py-8'>
				<div className='max-w-7xl mx-auto px-4'>
					<div className='flex justify-center mb-8'>
						<div className='flex bg-white rounded-lg p-1 shadow-sm'>
							<button
								onClick={() => setFiltroActivo('todas')}
								className={`px-6 py-3 rounded-md text-sm font-medium transition-colors ${
									filtroActivo === 'todas' ? 'bg-primary-500 text-white shadow-sm' : 'text-gray-600 hover:text-gray-900'
								}`}
							>
								Todas las Promociones
							</button>
							<button
								onClick={() => setFiltroActivo('destacadas')}
								className={`px-6 py-3 rounded-md text-sm font-medium transition-colors ${
									filtroActivo === 'destacadas'
										? 'bg-primary-500 text-white shadow-sm'
										: 'text-gray-600 hover:text-gray-900'
								}`}
							>
								Destacadas
							</button>
							<button
								onClick={() => setFiltroActivo('limitadas')}
								className={`px-6 py-3 rounded-md text-sm font-medium transition-colors ${
									filtroActivo === 'limitadas'
										? 'bg-primary-500 text-white shadow-sm'
										: 'text-gray-600 hover:text-gray-900'
								}`}
							>
								Tiempo Limitado
							</button>
						</div>
					</div>
				</div>
			</section>

			{/* Promociones Grid */}
			<section className='pb-16'>
				<div className='max-w-7xl mx-auto px-4'>
					<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
						{promocionesFiltradas.map((promocion, index) => (
							<div
								key={promocion.id}
								className='rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden flex flex-col'
								style={{ animationDelay: `${index * 100}ms` }}
							>
								{/* Badges */}
								<div className='relative'>
									{/* Image */}
									<div
										className='h-48 flex items-center justify-center text-white font-bold text-lg'
										style={{ backgroundColor: promocion.colorFallback }}
									>
										<Sparkles className='w-12 h-12' />
									</div>

									{/* Badges */}
									<div className='absolute top-4 left-4 flex flex-col gap-2'>
										{promocion.destacada && (
											<span className='inline-flex items-center px-3 py-1 bg-yellow-500 text-white text-xs font-semibold rounded-full'>
												<Star className='w-3 h-3 mr-1' />
												Destacada
											</span>
										)}
										{promocion.limitado && (
											<span className='inline-flex items-center px-3 py-1 bg-red-500 text-white text-xs font-semibold rounded-full'>
												<Zap className='w-3 h-3 mr-1' />
												Limitada
											</span>
										)}
									</div>

									{/* Discount Badge */}
									<div className='absolute top-4 right-4'>
										<div className='bg-white text-primary-600 px-3 py-2 rounded-full font-bold text-lg shadow-lg'>
											-{promocion.descuentoActual}%
										</div>
									</div>
								</div>

								{/* Content */}
								<div className='p-6 flex flex-col h-full'>
									{/* Title and Description */}
									<h3 className='text-xl font-bold text-gray-900 mb-2'>{promocion.titulo}</h3>
									<p className='text-gray-600 text-sm mb-4 leading-relaxed'>{promocion.descripcion}</p>

									{/* Price */}
									{promocion.precioOriginal > 0 && (
										<div className='mb-4'>
											<div className='flex items-center gap-2 mb-1'>
												<span className='text-gray-400 line-through text-sm'>
													{formatearPrecio(promocion.precioOriginal)}
												</span>
												<span className='bg-green-100 text-green-800 px-2 py-1 rounded text-xs font-semibold'>
													Ahorrás {formatearPrecio(promocion.precioOriginal - promocion.precioFinal)}
												</span>
											</div>
											<div className='text-2xl font-bold text-primary-600'>{formatearPrecio(promocion.precioFinal)}</div>
										</div>
									)}

									{/* Validity */}
									<div className='flex items-center text-sm text-gray-500 mb-4'>
										<Calendar className='w-4 h-4 mr-2' />
										Válido hasta: {promocion.validoHasta}
									</div>

									{/* Includes */}
									<div className='mb-4'>
										<h4 className='font-semibold text-gray-900 mb-2 text-sm'>Incluye:</h4>
										<ul className='space-y-1'>
											{promocion.incluye.slice(0, 3).map((item, idx) => (
												<li key={idx} className='flex items-center text-sm text-gray-600'>
													<CheckCircle className='w-3 h-3 text-green-500 mr-2 flex-shrink-0' />
													{item}
												</li>
											))}
											{promocion.incluye.length > 3 && (
												<li className='text-sm text-gray-500 italic'>+{promocion.incluye.length - 3} beneficios más</li>
											)}
										</ul>
									</div>

									{/* CTA Button */}
									<button
										onClick={() => abrirWhatsApp(promocion)}
										className='w-full bg-gradient-to-r from-primary-500 to-rose-400 text-white font-semibold py-3 px-4 rounded-lg hover:from-primary-600 hover:to-rose-500 transition-all duration-300 flex items-center justify-center group mt-auto'
									>
										<MessageCircle className='w-4 h-4 mr-2' />
										Consultar Promoción
										<ArrowRight className='w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform' />
									</button>
								</div>
							</div>
						))}
					</div>
				</div>
			</section>

			{/* CTA Section */}
			<section className='bg-gradient-to-r from-purple-600 to-primary-500 text-white py-16'>
				<div className='max-w-4xl mx-auto px-4 text-center'>
					<div className='inline-flex items-center justify-center w-16 h-16 bg-white/20 rounded-full mb-6'>
						<Heart className='w-8 h-8' />
					</div>
					<h2 className='text-3xl md:text-4xl font-bold mb-4'>¿No Encontraste lo que Buscabas?</h2>
					<p className='text-xl text-purple-100 mb-8 max-w-2xl mx-auto'>
						Contactanos y armamos una promoción especial para vos. Tenemos opciones para todos los presupuestos.
					</p>
					<div className='flex flex-col sm:flex-row gap-4 justify-center'>
						<button
							onClick={() => abrirWhatsApp(promociones[0])}
							className='inline-flex items-center px-8 py-4 bg-white text-purple-600 font-semibold rounded-full hover:bg-purple-50 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105'
						>
							<MessageCircle className='w-5 h-5 mr-2' />
							Consulta Personalizada
						</button>
						<Link
							href='/'
							className='inline-flex items-center px-8 py-4 bg-transparent border-2 border-white text-white font-semibold rounded-full hover:bg-white hover:text-purple-600 transition-all duration-300'
						>
							<TrendingUp className='w-5 h-5 mr-2' />
							Ver Todos los Tratamientos
						</Link>
					</div>
				</div>
			</section>
		</div>
	);
};

export default PromocionesPage;
