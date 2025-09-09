'use client';
import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { 
	Phone, 
	Mail, 
	MapPin, 
	Clock, 
	Instagram, 
	Facebook,
	MessageCircle,
	Heart,
	Star,
	Award,
	Users,
	Calendar,
	Shield,
	Sparkles,
	Target,
	Eye,
	TrendingUp,
	CheckCircle,
	GraduationCap,
} from 'lucide-react';

const NosotrosPage = () => {
	const [activeTab, setActiveTab] = useState<'historia' | 'equipo' | 'valores'>('historia');

	// Datos del equipo
	const equipoData = [
		{
			id: 1,
			nombre: 'Dra. María González',
			cargo: 'Directora Médica',
			especialidad: 'Dermatología Estética',
			experiencia: '15 años',
			certificaciones: ['Dermatología', 'Medicina Estética', 'Láser Terapéutico'],
			descripcion: 'Especialista en tratamientos de rejuvenecimiento y medicina estética con más de 15 años de experiencia.',
			imagen: '/images/equipo/dra-maria.jpg',
			colorFallback: '#ec4899'
		},
		{
			id: 2,
			nombre: 'Lic. Ana Rodríguez',
			cargo: 'Cosmiatra Profesional',
			especialidad: 'Tratamientos Faciales',
			experiencia: '10 años',
			certificaciones: ['Cosmetología', 'Radiofrecuencia', 'Microdermoabrasión'],
			descripcion: 'Experta en cuidado facial y tratamientos de rejuvenecimiento no invasivos.',
			imagen: '/images/equipo/lic-ana.jpg',
			colorFallback: '#8b5cf6'
		},
		{
			id: 3,
			nombre: 'Téc. Laura Martínez',
			cargo: 'Especialista en Depilación',
			especialidad: 'Depilación Láser',
			experiencia: '8 años',
			certificaciones: ['Depilación Láser', 'Fotodepilación', 'Cuidado Post-Tratamiento'],
			descripcion: 'Técnica especializada en depilación láser con certificación internacional.',
			imagen: '/images/equipo/tec-laura.jpg',
			colorFallback: '#06b6d4'
		}
	];

	// Valores y principios
	const valoresData = [
		{
			icono: Heart,
			titulo: 'Cuidado Personalizado',
			descripcion: 'Cada cliente es único y merece un tratamiento personalizado según sus necesidades específicas.',
			color: '#ec4899'
		},
		{
			icono: Shield,
			titulo: 'Seguridad Primero',
			descripcion: 'Utilizamos equipos de última generación y seguimos protocolos estrictos de seguridad e higiene.',
			color: '#10b981'
		},
		{
			icono: GraduationCap,
			titulo: 'Formación Continua',
			descripcion: 'Nuestro equipo se capacita constantemente en las últimas técnicas y tecnologías del sector.',
			color: '#f59e0b'
		},
		{
			icono: Sparkles,
			titulo: 'Resultados Naturales',
			descripcion: 'Buscamos realzar tu belleza natural con resultados armoniosos y de aspecto natural.',
			color: '#8b5cf6'
		},
		{
			icono: Users,
			titulo: 'Ambiente Cálido',
			descripcion: 'Creamos un ambiente relajado y acogedor donde te sientas cómoda y confiada.',
			color: '#06b6d4'
		},
		{
			icono: Award,
			titulo: 'Excelencia',
			descripcion: 'Nos comprometemos a brindar servicios de la más alta calidad con estándares internacionales.',
			color: '#ef4444'
		}
	];

	// Estadísticas
	const estadisticas = [
		{ numero: '2500+', texto: 'Clientes Satisfechas', icono: Users },
		{ numero: '8+', texto: 'Años de Experiencia', icono: Calendar },
		{ numero: '15+', texto: 'Tratamientos Disponibles', icono: Sparkles },
		{ numero: '98%', texto: 'Satisfacción del Cliente', icono: Star }
	];

	const abrirWhatsApp = () => {
		const mensaje = encodeURIComponent(
			'¡Hola! Me gustaría conocer más sobre Íntima MDQ y sus tratamientos. ¿Podrían brindarme más información?'
		);
		window.open(`https://wa.me/5492235507949?text=${mensaje}`, '_blank');
	};

	return (
		<div className="min-h-screen bg-gray-50">
			{/* Hero Section */}
			<section className="bg-gradient-to-r from-purple-600 to-primary-500 text-white py-16">
				<div className="max-w-7xl mx-auto px-4">
					<div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
						{/* Content */}
						<div>
							<div className="inline-flex items-center justify-center w-16 h-16 bg-white/20 rounded-full mb-6">
								<Heart className="w-8 h-8" />
							</div>
							<h1 className="text-4xl md:text-5xl font-bold mb-6">
								Conocé Íntima MDQ
							</h1>
							<p className="text-xl text-purple-100 mb-8 leading-relaxed">
								Somos un centro de estética integral especializado en realzar tu belleza natural con los más altos estándares de calidad y profesionalismo.
							</p>
							<div className="flex flex-col sm:flex-row gap-4">
								<button 
									onClick={abrirWhatsApp}
									className="inline-flex items-center px-8 py-4 bg-white text-purple-600 font-semibold rounded-full hover:bg-purple-50 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
								>
									<MessageCircle className="w-5 h-5 mr-2" />
									Conocenos Mejor
								</button>
								<Link 
									href="/#contacto"
									className="inline-flex items-center px-8 py-4 bg-transparent border-2 border-white text-white font-semibold rounded-full hover:bg-white hover:text-purple-600 transition-all duration-300"
								>
									<Phone className="w-5 h-5 mr-2" />
									Reservar Consulta
								</Link>
							</div>
						</div>

						{/* Contact Info */}
						<div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8">
							<h3 className="text-2xl font-bold mb-6">Información de Contacto</h3>
							<div className="space-y-4">
								<div className="flex items-center">
									<Phone className="w-5 h-5 mr-3 text-purple-200" />
									<div>
										<p className="font-semibold">Teléfono</p>
										<p className="text-purple-100">(0223) 550-7949</p>
									</div>
								</div>
								<div className="flex items-center">
									<MessageCircle className="w-5 h-5 mr-3 text-purple-200" />
									<div>
										<p className="font-semibold">WhatsApp</p>
										<p className="text-purple-100">(0223) 550-7949</p>
									</div>
								</div>
								<div className="flex items-center">
									<Mail className="w-5 h-5 mr-3 text-purple-200" />
									<div>
										<p className="font-semibold">Email</p>
										<p className="text-purple-100">info@intimamdq.com</p>
									</div>
								</div>
								<div className="flex items-start">
									<MapPin className="w-5 h-5 mr-3 text-purple-200 mt-1" />
									<div>
										<p className="font-semibold">Dirección</p>
										<p className="text-purple-100">Av. Constitución 1234<br />Mar del Plata, Buenos Aires</p>
									</div>
								</div>
								<div className="flex items-start">
									<Clock className="w-5 h-5 mr-3 text-purple-200 mt-1" />
									<div>
										<p className="font-semibold">Horarios</p>
										<p className="text-purple-100">
											Lun a Vie: 9:00 - 20:00<br />
											Sáb: 9:00 - 17:00
										</p>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* Estadísticas */}
			<section className="py-16 bg-white">
				<div className="max-w-7xl mx-auto px-4">
					<div className="grid grid-cols-2 md:grid-cols-4 gap-8">
						{estadisticas.map((stat, index) => {
							const IconComponent = stat.icono;
							return (
								<div key={index} className="text-center">
									<div className="inline-flex items-center justify-center w-16 h-16 bg-primary-100 text-primary-600 rounded-full mb-4">
										<IconComponent className="w-8 h-8" />
									</div>
									<div className="text-3xl font-bold text-gray-900 mb-2">{stat.numero}</div>
									<div className="text-gray-600">{stat.texto}</div>
								</div>
							);
						})}
					</div>
				</div>
			</section>

			{/* Tabs Navigation */}
			<section className="py-16">
				<div className="max-w-7xl mx-auto px-4">
					{/* Tab Buttons */}
					<div className="flex justify-center mb-12">
						<div className="flex bg-white rounded-lg p-1 shadow-lg">
							<button
								onClick={() => setActiveTab('historia')}
								className={`px-8 py-4 rounded-md text-sm font-medium transition-all duration-300 ${
									activeTab === 'historia'
										? 'bg-primary-500 text-white shadow-lg transform scale-105'
										: 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
								}`}
							>
								Nuestra Historia
							</button>
							<button
								onClick={() => setActiveTab('equipo')}
								className={`px-8 py-4 rounded-md text-sm font-medium transition-all duration-300 ${
									activeTab === 'equipo'
										? 'bg-primary-500 text-white shadow-lg transform scale-105'
										: 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
								}`}
							>
								Nuestro Equipo
							</button>
							<button
								onClick={() => setActiveTab('valores')}
								className={`px-8 py-4 rounded-md text-sm font-medium transition-all duration-300 ${
									activeTab === 'valores'
										? 'bg-primary-500 text-white shadow-lg transform scale-105'
										: 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
								}`}
							>
								Nuestros Valores
							</button>
						</div>
					</div>

					{/* Tab Content */}
					<div className="min-h-[500px]">
						{/* Historia Tab */}
						{activeTab === 'historia' && (
							<div className="bg-white rounded-2xl shadow-lg p-8 md:p-12 animate-fade-in">
								<div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
									<div>
										<div className="inline-flex items-center justify-center w-16 h-16 bg-primary-100 text-primary-600 rounded-full mb-6">
											<Target className="w-8 h-8" />
										</div>
										<h2 className="text-3xl font-bold text-gray-900 mb-6">
											Nuestra Historia
										</h2>
										<div className="space-y-4 text-gray-600 leading-relaxed">
											<p>
												Íntima MDQ nació en 2016 con la visión de crear un espacio donde cada mujer pudiera sentirse cómoda, segura y confiada mientras cuida su belleza y bienestar.
											</p>
											<p>
												Comenzamos como un pequeño centro especializado en depilación láser, pero rápidamente nos expandimos para ofrecer una gama completa de tratamientos de estética integral, siempre manteniendo nuestro compromiso con la excelencia y la atención personalizada.
											</p>
											<p>
												Hoy, después de más de 8 años en el mercado, nos enorgullece ser uno de los centros de estética más reconocidos de Mar del Plata, con más de 2500 clientas que confían en nosotros para cuidar su belleza.
											</p>
										</div>
									</div>
									<div className="relative">
										<div 
											className="h-96 rounded-2xl flex items-center justify-center text-white font-bold text-2xl"
											style={{ backgroundColor: '#ec4899' }}
										>
											<div className="text-center">
												<Heart className="w-16 h-16 mx-auto mb-4" />
												<p>Íntima MDQ</p>
												<p className="text-lg font-normal">Desde 2016</p>
											</div>
										</div>
									</div>
								</div>

								{/* Misión y Visión */}
								<div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
									<div className="bg-gradient-to-br from-primary-50 to-purple-50 p-8 rounded-2xl">
										<div className="inline-flex items-center justify-center w-12 h-12 bg-primary-500 text-white rounded-full mb-4">
											<Eye className="w-6 h-6" />
										</div>
										<h3 className="text-xl font-bold text-gray-900 mb-4">Nuestra Visión</h3>
										<p className="text-gray-600 leading-relaxed">
											Ser el centro de estética integral de referencia en Mar del Plata, reconocido por la excelencia en nuestros tratamientos y la calidez en nuestro servicio.
										</p>
									</div>
									<div className="bg-gradient-to-br from-purple-50 to-primary-50 p-8 rounded-2xl">
										<div className="inline-flex items-center justify-center w-12 h-12 bg-purple-500 text-white rounded-full mb-4">
											<Target className="w-6 h-6" />
										</div>
										<h3 className="text-xl font-bold text-gray-900 mb-4">Nuestra Misión</h3>
										<p className="text-gray-600 leading-relaxed">
											Brindar tratamientos de estética integral de la más alta calidad, utilizando tecnología de vanguardia y un enfoque personalizado para realzar la belleza natural de cada cliente.
										</p>
									</div>
								</div>
							</div>
						)}

						{/* Equipo Tab */}
						{activeTab === 'equipo' && (
							<div className="animate-fade-in">
								<div className="text-center mb-12">
									<h2 className="text-3xl font-bold text-gray-900 mb-4">
										Nuestro Equipo Profesional
									</h2>
									<p className="text-gray-600 max-w-2xl mx-auto">
										Conocé a las profesionales que hacen posible que cada tratamiento sea una experiencia única y satisfactoria.
									</p>
								</div>

								<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
									{equipoData.map((miembro, index) => (
										<div
											key={miembro.id}
											className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden"
											style={{ animationDelay: `${index * 150}ms` }}
										>
											{/* Photo */}
											<div 
												className="h-64 flex items-center justify-center text-white font-bold text-lg"
												style={{ backgroundColor: miembro.colorFallback }}
											>
												<Users className="w-16 h-16" />
											</div>

											{/* Info */}
											<div className="p-6">
												<h3 className="text-xl font-bold text-gray-900 mb-1">
													{miembro.nombre}
												</h3>
												<p className="text-primary-600 font-semibold mb-2">
													{miembro.cargo}
												</p>
												<p className="text-gray-600 text-sm mb-4">
													{miembro.descripcion}
												</p>

												{/* Especialidad y Experiencia */}
												<div className="flex items-center justify-between mb-4 text-sm">
													<div className="flex items-center text-gray-500">
														<Sparkles className="w-4 h-4 mr-1" />
														{miembro.especialidad}
													</div>
													<div className="flex items-center text-gray-500">
														<Calendar className="w-4 h-4 mr-1" />
														{miembro.experiencia}
													</div>
												</div>

												{/* Certificaciones */}
												<div className="mb-4">
													<h4 className="font-semibold text-gray-900 mb-2 text-sm flex items-center">
														{/* <Certificate className="w-4 h-4 mr-1" /> */}
														Certificaciones:
													</h4>
													<div className="flex flex-wrap gap-1">
														{miembro.certificaciones.map((cert, idx) => (
															<span 
																key={idx}
																className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs"
															>
																{cert}
															</span>
														))}
													</div>
												</div>
											</div>
										</div>
									))}
								</div>
							</div>
						)}

						{/* Valores Tab */}
						{activeTab === 'valores' && (
							<div className="animate-fade-in">
								<div className="text-center mb-12">
									<h2 className="text-3xl font-bold text-gray-900 mb-4">
										Nuestros Valores y Principios
									</h2>
									<p className="text-gray-600 max-w-2xl mx-auto">
										Estos son los pilares fundamentales que guían nuestro trabajo diario y definen la experiencia que ofrecemos a nuestras clientas.
									</p>
								</div>

								<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
									{valoresData.map((valor, index) => {
										const IconComponent = valor.icono;
										return (
											<div
												key={index}
												className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 p-8 text-center"
												style={{ animationDelay: `${index * 100}ms` }}
											>
												<div 
													className="inline-flex items-center justify-center w-16 h-16 rounded-full mb-6 text-white"
													style={{ backgroundColor: valor.color }}
												>
													<IconComponent className="w-8 h-8" />
												</div>
												<h3 className="text-xl font-bold text-gray-900 mb-4">
													{valor.titulo}
												</h3>
												<p className="text-gray-600 leading-relaxed">
													{valor.descripcion}
												</p>
											</div>
										);
									})}
								</div>
							</div>
						)}
					</div>
				</div>
			</section>

			{/* CTA Section */}
			<section className="bg-gradient-to-r from-primary-500 to-purple-600 text-white py-16">
				<div className="max-w-4xl mx-auto px-4 text-center">
					<div className="inline-flex items-center justify-center w-16 h-16 bg-white/20 rounded-full mb-6">
						<TrendingUp className="w-8 h-8" />
					</div>
					<h2 className="text-3xl md:text-4xl font-bold mb-4">
						¿Lista para Comenzar tu Transformación?
					</h2>
					<p className="text-xl text-primary-100 mb-8 max-w-2xl mx-auto">
						Reservá tu consulta gratuita y descubrí cómo podemos ayudarte a alcanzar tus objetivos de belleza y bienestar.
					</p>
					<div className="flex flex-col sm:flex-row gap-4 justify-center">
						<button 
							onClick={abrirWhatsApp}
							className="inline-flex items-center px-8 py-4 bg-white text-primary-600 font-semibold rounded-full hover:bg-primary-50 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
						>
							<MessageCircle className="w-5 h-5 mr-2" />
							Consulta Gratuita
						</button>
						<Link 
							href="/promociones"
							className="inline-flex items-center px-8 py-4 bg-transparent border-2 border-white text-white font-semibold rounded-full hover:bg-white hover:text-primary-600 transition-all duration-300"
						>
							<Sparkles className="w-5 h-5 mr-2" />
							Ver Promociones
						</Link>
					</div>
				</div>
			</section>
		</div>
	);
};

export default NosotrosPage;