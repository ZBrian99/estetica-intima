'use client';
import { useState } from 'react';
import { 
	MapPin, 
	Phone, 
	Mail, 
	Clock, 
	Instagram, 
	Facebook, 
	MessageCircle,
	Navigation,
	Calendar,
	User,
	Send,
	CheckCircle
} from 'lucide-react';

interface ContactForm {
	nombre: string;
	email: string;
	telefono: string;
	mensaje: string;
	servicio: string;
}

const ContactoYUbicacion = () => {
	const [activeTab, setActiveTab] = useState<'contacto' | 'ubicacion' | 'horarios'>('contacto');
	const [formData, setFormData] = useState<ContactForm>({
		nombre: '',
		email: '',
		telefono: '',
		mensaje: '',
		servicio: ''
	});
	const [isSubmitting, setIsSubmitting] = useState(false);
	const [isSubmitted, setIsSubmitted] = useState(false);

	// Información de contacto
	const contactInfo = {
		direccion: {
			calle: 'Av. Independencia 2847',
			ciudad: 'Mar del Plata',
			provincia: 'Buenos Aires',
			codigoPostal: '7600'
		},
		telefono: {
			principal: '+54 223 550-7949',
			whatsapp: '+54 9 223 550-7949'
		},
		email: {
			principal: 'info@intimamdq.com.ar',
			consultas: 'consultas@intimamdq.com.ar'
		},
		redesSociales: {
			instagram: '@intimamdq',
			facebook: 'Íntima MDQ Centro de Estética'
		}
	};

	// Horarios de atención
	const horarios = [
		{ dia: 'Lunes a Viernes', horario: '9:00 - 19:00', disponible: true },
		{ dia: 'Sábados', horario: '9:00 - 16:00', disponible: true },
		{ dia: 'Domingos', horario: 'Cerrado', disponible: false }
	];

	// Servicios para el formulario
	const servicios = [
		'Depilación Láser',
		'Tratamientos Faciales',
		'Tratamientos Corporales',
		'Radiofrecuencia',
		'Criolipólisis',
		'Consulta General',
		'Otro'
	];

	const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
		const { name, value } = e.target;
		setFormData(prev => ({ ...prev, [name]: value }));
	};

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault();
		setIsSubmitting(true);
		
		// Simular envío del formulario
		await new Promise(resolve => setTimeout(resolve, 2000));
		
		setIsSubmitting(false);
		setIsSubmitted(true);
		
		// Reset form after 3 seconds
		setTimeout(() => {
			setIsSubmitted(false);
			setFormData({ nombre: '', email: '', telefono: '', mensaje: '', servicio: '' });
		}, 3000);
	};

	const openWhatsApp = () => {
		const message = encodeURIComponent('¡Hola! Me gustaría obtener más información sobre los tratamientos de Íntima MDQ.');
		window.open(`https://wa.me/5492235507949?text=${message}`, '_blank');
	};

	const openGoogleMaps = () => {
		const address = encodeURIComponent(`${contactInfo.direccion.calle}, ${contactInfo.direccion.ciudad}, ${contactInfo.direccion.provincia}`);
		window.open(`https://www.google.com/maps/search/?api=1&query=${address}`, '_blank');
	};

	return (
		<section className="py-16 bg-gray-50">
			<div className="max-w-7xl mx-auto px-4">
				{/* Header */}
				<div className="text-center mb-12">
					<h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
						Contacto y Ubicación
					</h2>
					<p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8">
						Estamos aquí para ayudarte. Contactanos para agendar tu consulta o resolver cualquier duda
					</p>

					{/* Tab Navigation */}
					<div className="flex justify-center mb-8">
						<div className="flex bg-white rounded-lg p-1 shadow-sm">
							<button
								onClick={() => setActiveTab('contacto')}
								className={`px-6 py-3 rounded-md text-sm font-medium transition-colors ${
									activeTab === 'contacto'
										? 'bg-primary-500 text-white shadow-sm'
										: 'text-gray-600 hover:text-gray-900'
								}`}
							>
								Contacto
							</button>
							<button
								onClick={() => setActiveTab('ubicacion')}
								className={`px-6 py-3 rounded-md text-sm font-medium transition-colors ${
									activeTab === 'ubicacion'
										? 'bg-primary-500 text-white shadow-sm'
										: 'text-gray-600 hover:text-gray-900'
								}`}
							>
								Ubicación
							</button>
							<button
								onClick={() => setActiveTab('horarios')}
								className={`px-6 py-3 rounded-md text-sm font-medium transition-colors ${
									activeTab === 'horarios'
										? 'bg-primary-500 text-white shadow-sm'
										: 'text-gray-600 hover:text-gray-900'
								}`}
							>
								Horarios
							</button>
						</div>
					</div>
				</div>

				{/* Content */}
				<div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
					{/* Left Column - Contact Form */}
					{activeTab === 'contacto' && (
						<div className="bg-white rounded-2xl shadow-lg p-8">
							<h3 className="text-2xl font-bold text-gray-900 mb-6">
								Envianos un Mensaje
							</h3>

							{!isSubmitted ? (
								<form onSubmit={handleSubmit} className="space-y-6">
									<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
										<div>
											<label className="block text-sm font-medium text-gray-700 mb-2">
												Nombre Completo
											</label>
											<input
												type="text"
												name="nombre"
												value={formData.nombre}
												onChange={handleInputChange}
												required
												className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors"
												placeholder="Tu nombre"
											/>
										</div>
										<div>
											<label className="block text-sm font-medium text-gray-700 mb-2">
												Teléfono
											</label>
											<input
												type="tel"
												name="telefono"
												value={formData.telefono}
												onChange={handleInputChange}
												required
												className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors"
												placeholder="Tu teléfono"
											/>
										</div>
									</div>

									<div>
										<label className="block text-sm font-medium text-gray-700 mb-2">
											Email
										</label>
										<input
											type="email"
											name="email"
											value={formData.email}
											onChange={handleInputChange}
											required
											className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors"
											placeholder="tu@email.com"
										/>
									</div>

									<div>
										<label className="block text-sm font-medium text-gray-700 mb-2">
											Servicio de Interés
										</label>
										<select
											name="servicio"
											value={formData.servicio}
											onChange={handleInputChange}
											required
											className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors"
										>
											<option value="">Selecciona un servicio</option>
											{servicios.map(servicio => (
												<option key={servicio} value={servicio}>{servicio}</option>
											))}
										</select>
									</div>

									<div>
										<label className="block text-sm font-medium text-gray-700 mb-2">
											Mensaje
										</label>
										<textarea
											name="mensaje"
											value={formData.mensaje}
											onChange={handleInputChange}
											rows={4}
											required
											className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors resize-none"
											placeholder="Contanos sobre tu consulta o el tratamiento que te interesa..."
										/>
									</div>

									<button
										type="submit"
										disabled={isSubmitting}
										className="w-full bg-gradient-to-r from-primary-500 to-rose-400 text-white font-semibold py-4 px-6 rounded-lg hover:from-primary-600 hover:to-rose-500 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
									>
										{isSubmitting ? (
											<>
												<div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
												Enviando...
											</>
										) : (
											<>
												<Send className="w-5 h-5 mr-2" />
												Enviar Mensaje
											</>
										)}
									</button>
								</form>
							) : (
								<div className="text-center py-12">
									<div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 rounded-full mb-4">
										<CheckCircle className="w-8 h-8 text-green-600" />
									</div>
									<h4 className="text-xl font-bold text-gray-900 mb-2">
										¡Mensaje Enviado!
									</h4>
									<p className="text-gray-600">
										Gracias por contactarnos. Te responderemos a la brevedad.
									</p>
								</div>
							)}
						</div>
					)}

					{/* Right Column - Contact Info */}
					<div className="space-y-6">
						{/* Quick Contact */}
						<div className="bg-white rounded-2xl shadow-lg p-8">
							<h3 className="text-2xl font-bold text-gray-900 mb-6">
								Contacto Directo
							</h3>

							<div className="space-y-4">
								{/* Phone */}
								<div className="flex items-center p-4 bg-blue-50 rounded-lg hover:bg-blue-100 transition-colors cursor-pointer">
									<div className="flex items-center justify-center w-12 h-12 bg-blue-500 rounded-lg text-white mr-4">
										<Phone className="w-6 h-6" />
									</div>
									<div>
										<p className="font-semibold text-gray-900">Teléfono</p>
										<p className="text-gray-600">{contactInfo.telefono.principal}</p>
									</div>
								</div>

								{/* WhatsApp */}
								<div 
									onClick={openWhatsApp}
									className="flex items-center p-4 bg-green-50 rounded-lg hover:bg-green-100 transition-colors cursor-pointer"
								>
									<div className="flex items-center justify-center w-12 h-12 bg-green-500 rounded-lg text-white mr-4">
										<MessageCircle className="w-6 h-6" />
									</div>
									<div>
										<p className="font-semibold text-gray-900">WhatsApp</p>
										<p className="text-gray-600">{contactInfo.telefono.whatsapp}</p>
									</div>
								</div>

								{/* Email */}
								<div className="flex items-center p-4 bg-purple-50 rounded-lg hover:bg-purple-100 transition-colors cursor-pointer">
									<div className="flex items-center justify-center w-12 h-12 bg-purple-500 rounded-lg text-white mr-4">
										<Mail className="w-6 h-6" />
									</div>
									<div>
										<p className="font-semibold text-gray-900">Email</p>
										<p className="text-gray-600">{contactInfo.email.principal}</p>
									</div>
								</div>

								{/* Location */}
								<div 
									onClick={openGoogleMaps}
									className="flex items-center p-4 bg-red-50 rounded-lg hover:bg-red-100 transition-colors cursor-pointer"
								>
									<div className="flex items-center justify-center w-12 h-12 bg-red-500 rounded-lg text-white mr-4">
										<MapPin className="w-6 h-6" />
									</div>
									<div>
										<p className="font-semibold text-gray-900">Dirección</p>
										<p className="text-gray-600">
											{contactInfo.direccion.calle}<br />
											{contactInfo.direccion.ciudad}, {contactInfo.direccion.provincia}
										</p>
									</div>
								</div>
							</div>
						</div>

						{/* Social Media */}
						<div className="bg-white rounded-2xl shadow-lg p-8">
							<h3 className="text-xl font-bold text-gray-900 mb-4">
								Seguinos en Redes
							</h3>
							<div className="flex space-x-4">
								<a 
									href="#" 
									className="flex items-center justify-center w-12 h-12 bg-gradient-to-r from-purple-500 to-primary-500 rounded-lg text-white hover:from-purple-600 hover:to-primary-600 transition-all duration-300 transform hover:scale-110"
								>
									<Instagram className="w-6 h-6" />
								</a>
								<a 
									href="#" 
									className="flex items-center justify-center w-12 h-12 bg-blue-600 rounded-lg text-white hover:bg-blue-700 transition-all duration-300 transform hover:scale-110"
								>
									<Facebook className="w-6 h-6" />
								</a>
							</div>
							<div className="mt-4 text-sm text-gray-600">
								<p>Instagram: {contactInfo.redesSociales.instagram}</p>
								<p>Facebook: {contactInfo.redesSociales.facebook}</p>
							</div>
						</div>
					</div>

					{/* Location Tab */}
					{activeTab === 'ubicacion' && (
						<div className="lg:col-span-2">
							<div className="bg-white rounded-2xl shadow-lg p-8">
								<h3 className="text-2xl font-bold text-gray-900 mb-6">
									Nuestra Ubicación
								</h3>

								<div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
									{/* Map Placeholder */}
									<div className="bg-gray-100 rounded-lg h-64 lg:h-80 flex items-center justify-center">
										<div className="text-center">
											<MapPin className="w-12 h-12 text-gray-400 mx-auto mb-2" />
											<p className="text-gray-500">Mapa Interactivo</p>
											<button 
												onClick={openGoogleMaps}
												className="mt-2 inline-flex items-center px-4 py-2 bg-primary-500 text-white rounded-lg hover:bg-primary-600 transition-colors"
											>
												<Navigation className="w-4 h-4 mr-2" />
												Ver en Google Maps
											</button>
										</div>
									</div>

									{/* Location Details */}
									<div className="space-y-6">
										<div>
											<h4 className="text-lg font-semibold text-gray-900 mb-3">Dirección Completa</h4>
											<div className="space-y-2 text-gray-600">
												<p>{contactInfo.direccion.calle}</p>
												<p>{contactInfo.direccion.ciudad}, {contactInfo.direccion.provincia}</p>
												<p>CP: {contactInfo.direccion.codigoPostal}</p>
											</div>
										</div>

										<div>
											<h4 className="text-lg font-semibold text-gray-900 mb-3">Cómo Llegar</h4>
											<div className="space-y-2 text-gray-600">
												<p>• En auto: Estacionamiento disponible en la zona</p>
												<p>• En transporte público: Líneas 511, 512, 513</p>
												<p>• A pie: Zona céntrica de fácil acceso</p>
											</div>
										</div>

										<div>
											<h4 className="text-lg font-semibold text-gray-900 mb-3">Referencias</h4>
											<div className="space-y-2 text-gray-600">
												<p>• Cerca del Shopping Los Gallegos</p>
												<p>• A 3 cuadras de Plaza Mitre</p>
												<p>• Frente a la parada de colectivos</p>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					)}

					{/* Horarios Tab */}
					{activeTab === 'horarios' && (
						<div className="lg:col-span-2">
							<div className="bg-white rounded-2xl shadow-lg p-8">
								<h3 className="text-2xl font-bold text-gray-900 mb-6">
									Horarios de Atención
								</h3>

								<div className="grid grid-cols-1 md:grid-cols-2 gap-8">
									{/* Schedule */}
									<div className="space-y-4">
										{horarios.map((horario, index) => (
											<div 
												key={index}
												className={`flex items-center justify-between p-4 rounded-lg ${
													horario.disponible 
														? 'bg-green-50 border border-green-200' 
														: 'bg-gray-50 border border-gray-200'
												}`}
											>
												<div className="flex items-center">
													<Clock className={`w-5 h-5 mr-3 ${
														horario.disponible ? 'text-green-600' : 'text-gray-400'
													}`} />
													<span className="font-medium text-gray-900">{horario.dia}</span>
												</div>
												<span className={`font-semibold ${
													horario.disponible ? 'text-green-600' : 'text-gray-500'
												}`}>
													{horario.horario}
												</span>
											</div>
										))}
									</div>

									{/* Appointment Info */}
									<div className="bg-gradient-to-br from-primary-50 to-purple-50 rounded-lg p-6">
										<h4 className="text-lg font-semibold text-gray-900 mb-4">
											Reserva tu Turno
										</h4>
										<div className="space-y-3 text-gray-600 mb-6">
											<p>• Turnos disponibles de lunes a sábado</p>
											<p>• Consulta gratuita para nuevas clientas</p>
											<p>• Confirmación por WhatsApp</p>
											<p>• Recordatorio 24hs antes</p>
										</div>
										<button 
											onClick={openWhatsApp}
											className="w-full bg-gradient-to-r from-primary-500 to-purple-500 text-white font-semibold py-3 px-4 rounded-lg hover:from-primary-600 hover:to-purple-600 transition-all duration-300 flex items-center justify-center"
										>
											<Calendar className="w-5 h-5 mr-2" />
											Reservar por WhatsApp
										</button>
									</div>
								</div>
							</div>
						</div>
					)}
				</div>
			</div>
		</section>
	);
};

export default ContactoYUbicacion;