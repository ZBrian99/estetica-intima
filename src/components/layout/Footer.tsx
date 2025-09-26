import Link from 'next/link';
import {
	MapPin,
	Phone,
	Mail,
	Clock,
	Instagram,
	Facebook,
	MessageCircle,
	Sparkles,
	Heart,
	Shield,
	Users,
	Award,
} from 'lucide-react';

const Footer = () => {
	return (
		<footer className='bg-gray-900 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white py-16'>
			<div className='max-w-7xl mx-auto px-4'>
				{/* Logo y descripción */}
				<div className='text-center mb-12'>
					<div className='flex items-center justify-center gap-2 mb-4'>
						<Sparkles className='text-primary-400' size={32} />
						<h3 className='text-3xl font-bold bg-primary-400 bg-gradient-to-r from-primary-400 to-pink-400 bg-clip-text text-transparent'>
							Íntima Estética Íntegral
						</h3>
					</div>
					<p className='text-gray-300 max-w-2xl mx-auto'>
						Tu centro de estética integral. Tecnología de vanguardia y profesionales especializados para realzar tu
						belleza natural.
					</p>
				</div>

				<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12'>
					{/* Servicios */}
					<div>
						<h4 className='font-semibold mb-6 text-lg flex items-center gap-2'>
							<Heart className='text-primary-400' size={20} />
							Servicios
						</h4>
						<ul className='space-y-3 text-sm'>
							<li>
								<Link
									href='/servicios?category=Depilación Definitiva'
									className='text-gray-300 hover:text-primary-400 transition-colors flex items-center gap-2'
								>
									<span className='w-1 h-1 bg-primary-400 rounded-full'></span>
									Depilación Definitiva
								</Link>
							</li>
							<li>
								<Link
									href='/servicios?category=Modelado Corporal'
									className='text-gray-300 hover:text-primary-400 transition-colors flex items-center gap-2'
								>
									<span className='w-1 h-1 bg-primary-400 rounded-full'></span>
									Modelado Corporal
								</Link>
							</li>
							<li>
								<Link
									href='/servicios?category=Belleza Total'
									className='text-gray-300 hover:text-primary-400 transition-colors flex items-center gap-2'
								>
									<span className='w-1 h-1 bg-primary-400 rounded-full'></span>
									Belleza Total
								</Link>
							</li>
							<li>
								<Link
									href='/servicios?category=Experiencias Únicas'
									className='text-gray-300 hover:text-primary-400 transition-colors flex items-center gap-2'
								>
									<span className='w-1 h-1 bg-primary-400 rounded-full'></span>
									Experiencias Únicas
								</Link>
							</li>
							<li>
								<Link
									href='/servicios'
									className='text-primary-400 hover:text-primary-300 transition-colors font-medium'
								>
									Ver todos los servicios →
								</Link>
							</li>
						</ul>
					</div>

					{/* Información */}
					<div>
						<h4 className='font-semibold mb-6 text-lg flex items-center gap-2'>
							<Users className='text-primary-400' size={20} />
							Información
						</h4>
						<ul className='space-y-3 text-sm'>
							<li>
								<Link
									href='/nosotros'
									className='text-gray-300 hover:text-primary-400 transition-colors flex items-center gap-2'
								>
									<span className='w-1 h-1 bg-primary-400 rounded-full'></span>
									Sobre Nosotros
								</Link>
							</li>
							<li>
								<Link
									href='/equipo'
									className='text-gray-300 hover:text-primary-400 transition-colors flex items-center gap-2'
								>
									<span className='w-1 h-1 bg-primary-400 rounded-full'></span>
									Nuestro Equipo
								</Link>
							</li>
							<li>
								<Link
									href='/tecnologia'
									className='text-gray-300 hover:text-primary-400 transition-colors flex items-center gap-2'
								>
									<span className='w-1 h-1 bg-primary-400 rounded-full'></span>
									Tecnología
								</Link>
							</li>
							<li>
								<Link
									href='/testimonios'
									className='text-gray-300 hover:text-primary-400 transition-colors flex items-center gap-2'
								>
									<span className='w-1 h-1 bg-primary-400 rounded-full'></span>
									Testimonios
								</Link>
							</li>
							<li>
								<Link
									href='/preguntas-frecuentes'
									className='text-gray-300 hover:text-primary-400 transition-colors flex items-center gap-2'
								>
									<span className='w-1 h-1 bg-primary-400 rounded-full'></span>
									Preguntas Frecuentes
								</Link>
							</li>
						</ul>
					</div>

					{/* Legal */}
					<div>
						<h4 className='font-semibold mb-6 text-lg flex items-center gap-2'>
							<Shield className='text-primary-400' size={20} />
							Legal
						</h4>
						<ul className='space-y-3 text-sm'>
							<li>
								<Link
									href='/terminos'
									className='text-gray-300 hover:text-primary-400 transition-colors flex items-center gap-2'
								>
									<span className='w-1 h-1 bg-primary-400 rounded-full'></span>
									Términos y Condiciones
								</Link>
							</li>
							<li>
								<Link
									href='/privacidad'
									className='text-gray-300 hover:text-primary-400 transition-colors flex items-center gap-2'
								>
									<span className='w-1 h-1 bg-primary-400 rounded-full'></span>
									Política de Privacidad
								</Link>
							</li>
							<li>
								<Link
									href='/cancelaciones'
									className='text-gray-300 hover:text-primary-400 transition-colors flex items-center gap-2'
								>
									<span className='w-1 h-1 bg-primary-400 rounded-full'></span>
									Política de Cancelaciones
								</Link>
							</li>
							<li>
								<Link
									href='/cookies'
									className='text-gray-300 hover:text-primary-400 transition-colors flex items-center gap-2'
								>
									<span className='w-1 h-1 bg-primary-400 rounded-full'></span>
									Política de Cookies
								</Link>
							</li>
						</ul>
					</div>

					{/* Contacto */}
					<div>
						<h4 className='font-semibold mb-6 text-lg flex items-center gap-2'>
							<Phone className='text-primary-400' size={20} />
							Contacto
						</h4>
						<div className='space-y-4 text-sm'>
							<div className='flex items-start gap-3'>
								<MessageCircle className='text-green-400 mt-0.5 flex-shrink-0' size={16} />
								<div>
									<p className='text-gray-300'>WhatsApp</p>
									<a
										href='https://wa.me/5492235507949'
										className='text-green-400 hover:text-green-300 transition-colors font-medium'
									>
										+54 9 223 550-7949
									</a>
								</div>
							</div>
							<div className='flex items-start gap-3'>
								<Mail className='text-primary-400 mt-0.5 flex-shrink-0' size={16} />
								<div>
									<p className='text-gray-300'>Email</p>
									<a
										href='mailto:info@intimamdq.com'
										className='text-primary-400 hover:text-primary-300 transition-colors'
									>
										info@intimamdq.com
									</a>
								</div>
							</div>
							<div className='flex items-start gap-3'>
								<MapPin className='text-red-400 mt-0.5 flex-shrink-0' size={16} />
								<div>
									<p className='text-gray-300'>Dirección</p>
									<p className='text-gray-200'>Castelli 3141, Mar del Plata</p>
									<p className='text-gray-400 text-xs'>Buenos Aires, Argentina</p>
								</div>
							</div>
							<div className='flex items-start gap-3'>
								<Clock className='text-yellow-400 mt-0.5 flex-shrink-0' size={16} />
								<div>
									<p className='text-gray-300'>Horarios</p>
									<p className='text-gray-200 text-xs'>Lun - Vie: 9:00 - 20:00</p>
									<p className='text-gray-200 text-xs'>Sáb: 9:00 - 18:00</p>
								</div>
							</div>
						</div>
					</div>
				</div>

				{/* Redes sociales y copyright */}
				<div className='border-t border-gray-700 pt-8'>
					<div className='flex flex-col md:flex-row justify-between items-center gap-6'>
						{/* Redes sociales */}
						<div className='flex items-center gap-4'>
							<span className='text-gray-300 text-sm'>Seguinos en:</span>
							<div className='flex gap-3'>
								<a
									href='https://instagram.com/intimamdq'
									target='_blank'
									rel='noopener noreferrer'
									className='bg-pink-500 bg-gradient-to-r from-pink-500 to-purple-500 p-2 rounded-lg hover:from-pink-600 hover:to-purple-600 transition-all transform hover:scale-105'
								>
									<Instagram size={18} className='text-white' />
								</a>
								<a
									href='https://facebook.com/intimamdq'
									target='_blank'
									rel='noopener noreferrer'
									className='bg-blue-600 p-2 rounded-lg hover:bg-blue-700 transition-all transform hover:scale-105'
								>
									<Facebook size={18} className='text-white' />
								</a>
								<a
									href='https://wa.me/5492235507949'
									target='_blank'
									rel='noopener noreferrer'
									className='bg-green-500 p-2 rounded-lg hover:bg-green-600 transition-all transform hover:scale-105'
								>
									<MessageCircle size={18} className='text-white' />
								</a>
							</div>
						</div>

						{/* Copyright y certificaciones */}
						<div className='text-center md:text-right'>
							{/* <div className='flex items-center justify-center md:justify-end gap-2 mb-2'>
								<Award className='text-yellow-400' size={16} />
								<span className='text-xs text-gray-400'>Centro Certificado</span>
							</div> */}
							<p className='text-xs text-gray-400'>
								© {new Date().getFullYear()} Íntima Estética. Todos los derechos reservados.
							</p>
							<p className='text-xs text-gray-500 mt-1'>Desarrollado con ❤️</p>
						</div>
					</div>
				</div>
			</div>
		</footer>
	);
};
export default Footer;
