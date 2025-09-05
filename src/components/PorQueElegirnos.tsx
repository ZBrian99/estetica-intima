'use client';
import { useState } from 'react';
import { 
	Shield, 
	Award, 
	Users, 
	Clock, 
	Heart, 
	Star, 
	Zap, 
	GraduationCap,
	MapPin,
	Headphones,
	TrendingUp,
	CheckCircle
} from 'lucide-react';

interface Ventaja {
	id: string;
	titulo: string;
	descripcion: string;
	icon: React.ReactNode;
	color: string;
	gradient: string;
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
			descripcion: 'Equipos láser de última tecnología y tratamientos innovadores que garantizan los mejores resultados con máxima seguridad.',
			icon: <Zap className="w-8 h-8" />,
			color: 'text-blue-600',
			gradient: 'from-blue-500 to-cyan-400',
			estadisticas: { numero: '100%', texto: 'Equipos Certificados' }
		},
		{
			id: 'profesionales-certificados',
			titulo: 'Profesionales Certificados',
			descripcion: 'Nuestro equipo está formado por especialistas certificados con años de experiencia en estética integral y medicina estética.',
			icon: <GraduationCap className="w-8 h-8" />,
			color: 'text-purple-600',
			gradient: 'from-purple-500 to-primary-400',
			estadisticas: { numero: '5+', texto: 'Años de Experiencia' }
		},
		{
			id: 'atencion-personalizada',
			titulo: 'Atención 100% Personalizada',
			descripcion: 'Cada tratamiento es diseñado específicamente para vos, considerando tus necesidades, tipo de piel y objetivos personales.',
			icon: <Heart className="w-8 h-8" />,
			color: 'text-primary-600',
			gradient: 'from-primary-500 to-rose-400',
			estadisticas: { numero: '1:1', texto: 'Atención Personalizada' }
		},
		{
			id: 'resultados-garantizados',
			titulo: 'Resultados Comprobados',
			descripcion: 'Más del 98% de nuestras clientas están satisfechas con los resultados obtenidos y nos recomiendan a sus amigas.',
			icon: <Award className="w-8 h-8" />,
			color: 'text-yellow-600',
			gradient: 'from-yellow-500 to-orange-400',
			estadisticas: { numero: '98%', texto: 'Satisfacción Garantizada' }
		},
		{
			id: 'ambiente-relajante',
			titulo: 'Ambiente Único y Relajante',
			descripcion: 'Nuestro centro está diseñado para brindarte una experiencia de relajación total, con espacios cómodos y acogedores.',
			icon: <Star className="w-8 h-8" />,
			color: 'text-emerald-600',
			gradient: 'from-emerald-500 to-teal-400',
			estadisticas: { numero: '5★', texto: 'Ambiente Calificado' }
		},
		{
			id: 'ubicacion-centrica',
			titulo: 'Ubicación Céntrica',
			descripcion: 'Estamos ubicados en el corazón de Mar del Plata, con fácil acceso y estacionamiento disponible para tu comodidad.',
			icon: <MapPin className="w-8 h-8" />,
			color: 'text-red-600',
			gradient: 'from-red-500 to-primary-400',
			estadisticas: { numero: 'Centro', texto: 'Mar del Plata' }
		}
	];

	// Certificaciones
	const certificaciones = [
		{
			id: 'anmat',
			nombre: 'ANMAT',
			descripcion: 'Equipos aprobados por ANMAT',
			icon: <Shield className="w-6 h-6" />
		},
		{
			id: 'profesionales',
			nombre: 'Profesionales Matriculados',
			descripcion: 'Equipo con matrícula profesional',
			icon: <GraduationCap className="w-6 h-6" />
		},
		{
			id: 'iso',
			nombre: 'Protocolos de Seguridad',
			descripcion: 'Cumplimiento de normas internacionales',
			icon: <CheckCircle className="w-6 h-6" />
		}
	];

	// Garantías
	const garantias = [
		{
			id: 'satisfaccion',
			nombre: 'Satisfacción Garantizada',
			descripcion: 'Si no estás conforme, te devolvemos el dinero',
			icon: <Heart className="w-6 h-6" />
		},
		{
			id: 'seguimiento',
			nombre: 'Seguimiento Post-Tratamiento',
			descripcion: 'Acompañamiento durante todo el proceso',
			icon: <Headphones className="w-6 h-6" />
		},
		{
			id: 'resultados',
			nombre: 'Resultados Visibles',
			descripcion: 'Resultados comprobables o repetimos el tratamiento',
			icon: <TrendingUp className="w-6 h-6" />
		}
	];

	return (
		<section className="py-16 bg-white">
			<div className="max-w-7xl mx-auto px-4">
				{/* Header */}
				<div className="text-center mb-12">
					<h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
						¿Por Qué Elegir Íntima MDQ?
					</h2>
					<p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8">
						Somos el centro de estética integral de confianza en Mar del Plata, comprometidos con tu bienestar y belleza
					</p>

					{/* Tab Navigation */}
					<div className="flex justify-center mb-8">
						<div className="flex bg-gray-100 rounded-lg p-1">
							<button
								onClick={() => setActiveTab('ventajas')}
								className={`px-6 py-3 rounded-md text-sm font-medium transition-colors ${
									activeTab === 'ventajas'
										? 'bg-white text-primary-600 shadow-sm'
										: 'text-gray-600 hover:text-gray-900'
								}`}
							>
								Nuestras Ventajas
							</button>
							<button
								onClick={() => setActiveTab('certificaciones')}
								className={`px-6 py-3 rounded-md text-sm font-medium transition-colors ${
									activeTab === 'certificaciones'
										? 'bg-white text-primary-600 shadow-sm'
										: 'text-gray-600 hover:text-gray-900'
								}`}
							>
								Certificaciones
							</button>
							<button
								onClick={() => setActiveTab('garantias')}
								className={`px-6 py-3 rounded-md text-sm font-medium transition-colors ${
									activeTab === 'garantias'
										? 'bg-white text-primary-600 shadow-sm'
										: 'text-gray-600 hover:text-gray-900'
								}`}
							>
								Garantías
							</button>
						</div>
					</div>
				</div>

				{/* Content */}
				{activeTab === 'ventajas' && (
					<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
						{ventajas.map((ventaja, index) => (
							<div
								key={ventaja.id}
								className="group relative bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 p-8 overflow-hidden"
								style={{ animationDelay: `${index * 100}ms` }}
							>
								{/* Background Gradient */}
								<div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${ventaja.gradient} opacity-10 rounded-full -mr-16 -mt-16 group-hover:opacity-20 transition-opacity duration-300`} />

								{/* Icon */}
								<div className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br ${ventaja.gradient} rounded-2xl text-white mb-6 group-hover:scale-110 transition-transform duration-300`}>
									{ventaja.icon}
								</div>

								{/* Content */}
								<h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-primary-600 transition-colors duration-300">
									{ventaja.titulo}
								</h3>
								<p className="text-gray-600 leading-relaxed mb-6">
									{ventaja.descripcion}
								</p>

								{/* Statistics */}
								{ventaja.estadisticas && (
									<div className="flex items-center justify-between pt-4 border-t border-gray-100">
										<div className="text-center">
											<div className={`text-2xl font-bold ${ventaja.color}`}>
												{ventaja.estadisticas.numero}
											</div>
											<div className="text-sm text-gray-500">
												{ventaja.estadisticas.texto}
											</div>
										</div>
										<div className={`w-8 h-8 bg-gradient-to-br ${ventaja.gradient} rounded-full flex items-center justify-center`}>
											<CheckCircle className="w-5 h-5 text-white" />
										</div>
									</div>
								)}
							</div>
						))}
					</div>
				)}

				{activeTab === 'certificaciones' && (
					<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
						{certificaciones.map((cert, index) => (
							<div
								key={cert.id}
								className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-8 text-center hover:shadow-lg transition-all duration-300"
								style={{ animationDelay: `${index * 150}ms` }}
							>
								<div className="inline-flex items-center justify-center w-16 h-16 bg-blue-500 rounded-2xl text-white mb-6">
									{cert.icon}
								</div>
								<h3 className="text-xl font-bold text-gray-900 mb-3">{cert.nombre}</h3>
								<p className="text-gray-600">{cert.descripcion}</p>
							</div>
						))}
					</div>
				)}

				{activeTab === 'garantias' && (
					<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
						{garantias.map((garantia, index) => (
							<div
								key={garantia.id}
								className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-8 text-center hover:shadow-lg transition-all duration-300"
								style={{ animationDelay: `${index * 150}ms` }}
							>
								<div className="inline-flex items-center justify-center w-16 h-16 bg-green-500 rounded-2xl text-white mb-6">
									{garantia.icon}
								</div>
								<h3 className="text-xl font-bold text-gray-900 mb-3">{garantia.nombre}</h3>
								<p className="text-gray-600">{garantia.descripcion}</p>
							</div>
						))}
					</div>
				)}

				{/* Stats Section */}
				<div className="mt-16 bg-gradient-to-r from-primary-500 to-purple-600 rounded-3xl p-8 md:p-12 text-white">
					<div className="text-center mb-8">
						<h3 className="text-2xl md:text-3xl font-bold mb-4">
							Números Que Nos Respaldan
						</h3>
						<p className="text-primary-100 max-w-2xl mx-auto">
							Nuestra trayectoria y resultados hablan por sí solos
						</p>
					</div>

					<div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
						<div>
							<div className="text-3xl md:text-4xl font-bold mb-2">500+</div>
							<div className="text-primary-100">Clientas Atendidas</div>
						</div>
						<div>
							<div className="text-3xl md:text-4xl font-bold mb-2">98%</div>
							<div className="text-primary-100">Satisfacción</div>
						</div>
						<div>
							<div className="text-3xl md:text-4xl font-bold mb-2">5+</div>
							<div className="text-primary-100">Años de Experiencia</div>
						</div>
						<div>
							<div className="text-3xl md:text-4xl font-bold mb-2">15+</div>
							<div className="text-primary-100">Tratamientos Disponibles</div>
						</div>
					</div>
				</div>

				{/* CTA Section */}
				<div className="text-center mt-12">
					<h3 className="text-2xl font-bold text-gray-900 mb-4">
						¿Lista para Experimentar la Diferencia?
					</h3>
					<p className="text-gray-600 mb-6 max-w-2xl mx-auto">
						Vení a conocer nuestro centro y descubrí por qué somos la elección preferida en Mar del Plata
					</p>
					<div className="flex flex-col sm:flex-row gap-4 justify-center">
						<button className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-primary-500 to-rose-400 text-white font-semibold rounded-full hover:from-primary-600 hover:to-rose-500 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105">
							<Users className="w-5 h-5 mr-2" />
							Reservar Consulta Gratuita
						</button>
						<button className="inline-flex items-center px-8 py-4 bg-white text-gray-700 font-semibold rounded-full border-2 border-gray-200 hover:border-primary-300 hover:text-primary-600 transition-all duration-300 shadow-lg hover:shadow-xl">
							<Clock className="w-5 h-5 mr-2" />
							Ver Horarios Disponibles
						</button>
					</div>
				</div>
			</div>
		</section>
	);
};

export default PorQueElegirnos;