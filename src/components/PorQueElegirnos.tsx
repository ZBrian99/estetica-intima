'use client';
import { useState } from 'react';
import {
	FaShieldAlt,
	FaAward,
	FaUsers,
	FaClock,
	FaHeart,
	FaStar,
	FaBolt,
	FaGraduationCap,
	FaMapMarkerAlt,
	FaHeadphones,
	FaChartLine,
	FaCheckCircle,
} from 'react-icons/fa';

interface Ventaja {
	id: string;
	titulo: string;
	descripcion: string;
	icon: React.ReactNode;
	color: string;
	gradient: string;
	fallbackBg: string;
	estadisticas?: {
		numero: string;
		texto: string;
	};
}

const PorQueElegirnos = () => {
	const [activeTab, setActiveTab] = useState<'ventajas' | 'certificaciones' | 'garantias'>('ventajas');

	// Ventajas principales
	const ventajas: Ventaja[] = [
		{
			id: 'tecnologia-avanzada',
			titulo: 'Tecnología de Última Generación',
			descripcion:
				'Equipos láser de última tecnología y tratamientos innovadores que garantizan los mejores resultados con máxima seguridad.',
			icon: <FaBolt className='w-8 h-8' />,
			color: 'text-blue-600',
			gradient: 'bg-blue-400 from-blue-500 to-cyan-400',
			fallbackBg: 'bg-blue-500',
			estadisticas: { numero: '100%', texto: 'Equipos Certificados' },
		},
		{
			id: 'atencion-personalizada',
			titulo: 'Atención 100% Personalizada',
			descripcion:
				'Cada tratamiento es diseñado específicamente para vos, considerando tus necesidades, tipo de piel y objetivos personales.',
			icon: <FaHeart className='w-8 h-8' />,
			color: 'text-primary-600',
			gradient: 'bg-primary-400 from-primary-500 to-rose-400',
			fallbackBg: 'bg-primary-500',
			estadisticas: { numero: '1:1', texto: 'Atención Personalizada' },
		},
		{
			id: 'ambiente-relajante',
			titulo: 'Ambiente Único y Relajante',
			descripcion:
				'Nuestro centro está diseñado para brindarte una experiencia de relajación total, con espacios cómodos y acogedores.',
			icon: <FaStar className='w-8 h-8' />,
			color: 'text-emerald-600',
			gradient: 'bg-emerald-400 from-emerald-500 to-teal-400',
			fallbackBg: 'bg-emerald-500',
			estadisticas: { numero: '5★', texto: 'Ambiente Calificado' },
		},
	];

	// Certificaciones
	const certificaciones = [
		{
			id: 'anmat',
			nombre: 'ANMAT',
			descripcion: 'Equipos aprobados por ANMAT',
			icon: <FaShieldAlt className='w-6 h-6' />,
		},
		{
			id: 'profesionales',
			nombre: 'Profesionales Matriculados',
			descripcion: 'Equipo con matrícula profesional',
			icon: <FaGraduationCap className='w-6 h-6' />,
		},
		{
			id: 'iso',
			nombre: 'Protocolos de Seguridad',
			descripcion: 'Cumplimiento de normas internacionales',
			icon: <FaCheckCircle className='w-6 h-6' />,
		},
	];

	// Garantías
	const garantias = [
		{
			id: 'satisfaccion',
			nombre: 'Satisfacción Garantizada',
			descripcion: 'Si no estás conforme, te devolvemos el dinero',
			icon: <FaHeart className='w-6 h-6' />,
		},
		{
			id: 'seguimiento',
			nombre: 'Seguimiento Post-Tratamiento',
			descripcion: 'Acompañamiento durante todo el proceso',
			icon: <FaHeadphones className='w-6 h-6' />,
		},
		{
			id: 'resultados',
			nombre: 'Resultados Visibles',
			descripcion: 'Resultados comprobables o repetimos el tratamiento',
			icon: <FaChartLine className='w-6 h-6' />,
		},
	];

	return (
		<section className='py-16 bg-white'>
			<div className='max-w-7xl mx-auto px-4'>
				{/* Header */}
				<div className='text-center mb-12'>
					<h2 className='text-3xl md:text-4xl font-bold text-gray-900 mb-4'>¿Por Qué Elegir Íntima?</h2>
					<p className='text-lg text-gray-600 max-w-2xl mx-auto mb-8'>
						Somos el centro de estética integral de confianza, comprometidos con tu bienestar y belleza
					</p>
				</div>

				{/* Content */}
				<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
					{ventajas.map((ventaja, index) => (
						<div
							key={ventaja.id}
							className='group relative bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 p-8 overflow-hidden'
							style={{ animationDelay: `${index * 100}ms` }}
						>
							{/* Background Gradient */}
							<div
								className={`absolute top-0 right-0 w-32 h-32 ${ventaja.fallbackBg} bg-gradient-to-br ${ventaja.gradient} opacity-10 rounded-full -mr-16 -mt-16 group-hover:opacity-20 transition-opacity duration-300`}
							/>

							{/* Icon */}
							<div className='flex gap-6'>
								<div
									className={`inline-flex items-center justify-center min-w-16 h-16 ${ventaja.fallbackBg} bg-gradient-to-br ${ventaja.gradient} rounded-2xl text-white mb-4 group-hover:scale-110 transition-transform duration-300`}
								>
									{ventaja.icon}
								</div>

								{/* Content */}
								<h3 className='text-xl font-bold text-gray-900 group-hover:text-primary-600 transition-colors duration-300'>
									{ventaja.titulo}
								</h3>
							</div>
							<p className='text-gray-600 leading-relaxed '>{ventaja.descripcion}</p>
						</div>
					))}
				</div>

				{/* Stats Section */}
				<div className='mt-16 rounded-2xl p-8 ring-1 ring-gray-200/60 bg-white shadow-sm'>
					<div className='text-center mb-8'>
						<h3 className='text-2xl md:text-3xl font-bold mb-2'>Números que nos respaldan</h3>
						<p className='text-gray-600 max-w-2xl mx-auto'>Nuestra trayectoria y resultados hablan por sí solos.</p>
					</div>
					<div className='grid grid-cols-2 md:grid-cols-4 gap-6'>
						<div className='text-center rounded-xl p-4 bg-primary-50'>
							<div className='text-3xl md:text-4xl font-extrabold text-primary-600 mb-1'>10+</div>
							<div className='text-gray-600 text-sm md:text-base'>Años de experiencia</div>
						</div>
						<div className='text-center rounded-xl p-4 bg-primary-50'>
							<div className='text-3xl md:text-4xl font-extrabold text-primary-600 mb-1'>600+</div>
							<div className='text-gray-600 text-sm md:text-base'>Clientas satisfechas</div>
						</div>
						<div className='text-center rounded-xl p-4 bg-primary-50'>
							<div className='text-3xl md:text-4xl font-extrabold text-primary-600 mb-1'>4.8</div>
							<div className='text-gray-600 text-sm md:text-base'>Calificación promedio</div>
						</div>
						<div className='text-center rounded-xl p-4 bg-primary-50'>
							<div className='text-3xl md:text-4xl font-extrabold text-primary-600 mb-1'>20+</div>
							<div className='text-gray-600 text-sm md:text-base'>Tratamientos disponibles</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default PorQueElegirnos;
