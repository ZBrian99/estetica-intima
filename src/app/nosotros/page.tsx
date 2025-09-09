import Link from 'next/link';
import { MapPin, Clock, Phone, Instagram, Facebook, Award, Users, Heart, Sparkles, Target, Eye, Gem, Star, Zap, Shield } from 'lucide-react';

export default function Nosotros() {
	return (
		<div className='min-h-screen bg-gray-50'>
			{/* Hero Section */}
			<section className='relative py-20 overflow-hidden'>
				<div className='absolute inset-0'>
					<img 
						src='https://image.pollinations.ai/prompt/luxury%20spa%20reception%20area%20with%20soft%20pink%20and%20white%20decor,%20cozy%20minimalist%20design,%20natural%20lighting,%20professional%20aesthetic%20clinic,%20high%20quality,%20realistic%20photography?width=1920&height=800&model=flux-realism&enhance=true&nologo=true'
						alt='Íntima MDQ Spa Background'
						className='w-full h-full object-cover'
					/>
					<div className='absolute inset-0 bg-gradient-to-r from-pink-100/90 to-purple-100/90'></div>
				</div>
				<div className='relative max-w-7xl mx-auto px-4 text-center'>
					<div className='flex items-center justify-center mb-6'>
						<Sparkles className='w-8 h-8 text-pink-600 mr-3' />
						<h1 className='text-4xl font-bold text-gray-900'>ÍNTIMA MDQ | ESTÉTICA INTEGRAL</h1>
						<Sparkles className='w-8 h-8 text-pink-600 ml-3' />
					</div>
					<p className='text-lg text-gray-600 max-w-3xl mx-auto mb-6'>
						Te acompañamos para que puedas verte y sentirte mejor, con todos nuestros tratamientos. 
						Estética unisex donde cuidamos tu piel, tu cuerpo y tu bienestar.
					</p>
					<div className='flex flex-wrap justify-center gap-6 text-sm text-gray-700'>
						<div className='flex items-center'>
							<MapPin className='w-4 h-4 mr-2 text-pink-600' />
							<span>Castelli 3141, Mar del Plata</span>
						</div>
						<div className='flex items-center'>
							<Phone className='w-4 h-4 mr-2 text-pink-600' />
							<span>+54 9 223 550-7949</span>
						</div>
						<div className='flex items-center'>
							<Clock className='w-4 h-4 mr-2 text-pink-600' />
							<span>Lunes a Viernes: 8:00 - 20:00</span>
						</div>
					</div>
				</div>
			</section>

			{/* Nuestra Historia */}
			<section className='py-16 max-w-7xl mx-auto px-4'>
				<div className='grid grid-cols-1 lg:grid-cols-2 gap-12 items-center'>
					<div>
						<div className='flex items-center mb-6'>
							<Heart className='w-8 h-8 text-pink-600 mr-3' />
							<h2 className='text-3xl font-bold'>NUESTRA HISTORIA</h2>
						</div>
						<p className='text-gray-600 mb-4'>
							En Íntima nos especializamos en estética integral, ofreciendo servicios tanto para mujeres como para hombres. 
							Nuestro centro se ha consolidado como referente en Mar del Plata, brindando tratamientos de depilación definitiva, 
							faciales, corporales, bronceado natural y masajes.
						</p>
						<p className='text-gray-600 mb-4'>
							Contamos con profesionales altamente capacitadas como Dani, Erica y Juli, quienes se mantienen en constante 
							actualización para ofrecer las últimas tecnologías y técnicas en estética. Nuestro compromiso es acompañarte 
							en tu proceso de transformación y bienestar.
						</p>
						<p className='text-gray-600'>
							Además de nuestros servicios, ofrecemos capacitaciones especializadas en Operadora Láser, Maderoterapia y 
							Aparatología Corporal, formando a nuevos profesionales con los más altos estándares de calidad.
						</p>
					</div>
					<div className='h-96 rounded-lg relative overflow-hidden'>
						<img 
							src='https://image.pollinations.ai/prompt/modern%20aesthetic%20spa%20clinic%20interior%20with%20pink%20and%20white%20decor,%20professional%20equipment,%20cozy,%20natural%20lighting,%20high%20quality,%20realistic%20photography?width=800&height=600&model=flux-realism&enhance=true&nologo=true' 
							alt='Centro de Estética Íntima MDQ' 
							className='w-full h-full object-cover'
						/>
						<div className='absolute inset-0 bg-gradient-to-br from-pink-500/20 to-purple-500/20'></div>
						<div className='absolute bottom-4 left-4 text-white'>
							<p className='text-lg font-semibold drop-shadow-lg'>Centro de Estética Integral</p>
							<p className='text-sm drop-shadow-lg'>Mar del Plata</p>
						</div>
					</div>
				</div>
			</section>

			{/* Nuestro Equipo */}
			<section className='bg-gray-100 py-16'>
				<div className='max-w-7xl mx-auto px-4'>
					<div className='flex items-center justify-center mb-12'>
						<Users className='w-8 h-8 text-pink-600 mr-3' />
						<h2 className='text-3xl font-bold text-center'>NUESTRO EQUIPO</h2>
					</div>
					<div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
						{[
							{ nombre: 'Dani', especialidad: 'Directora y Especialista en Depilación Láser' },
							{ nombre: 'Erica', especialidad: 'Especialista en Tratamientos Faciales' },
							{ nombre: 'Juli', especialidad: 'Especialista en Maderoterapia y Corporales' }
						].map((profesional, index) => {
							const imagePrompts = [
								'professional%20female%20aesthetician%20in%20white%20medical%20uniform,%20confident%20smile,%20modern%20spa%20background,%20professional%20portrait,%20high%20quality,%20realistic%20photography',
								'professional%20female%20facial%20specialist%20in%20medical%20uniform,%20gentle%20expression,%20clean%20spa%20environment,%20professional%20portrait,%20high%20quality,%20realistic%20photography',
								'professional%20female%20massage%20therapist%20in%20spa%20uniform,%20warm%20smile,%20wellness%20center%20background,%20professional%20portrait,%20high%20quality,%20realistic%20photography'
							];
							return (
								<div key={index} className='bg-white p-6 rounded-lg shadow-md text-center hover:shadow-lg transition-shadow'>
									<div className='w-32 h-32 rounded-full mx-auto mb-4 overflow-hidden'>
										<img 
											src={`https://image.pollinations.ai/prompt/${imagePrompts[index]}?width=300&height=300&model=flux-realism&enhance=true&nologo=true`}
											alt={`${profesional.nombre} - ${profesional.especialidad}`}
											className='w-full h-full object-cover'
										/>
									</div>
								<h3 className='text-xl font-semibold mb-2'>{profesional.nombre}</h3>
								<p className='text-pink-600 font-medium mb-3'>{profesional.especialidad}</p>
								<p className='text-gray-600 text-sm mb-4'>
									Profesional certificada con amplia experiencia en estética integral. 
									Comprometida con la excelencia y la satisfacción de nuestros clientes.
								</p>
								<div className='space-y-1 text-sm text-gray-500'>
									<div className='flex items-center justify-center'>
										<Award className='w-4 h-4 mr-2' />
										<span>Operadora Láser Certificada</span>
									</div>
									<div className='flex items-center justify-center'>
										<Zap className='w-4 h-4 mr-2' />
										<span>Especialista en Maderoterapia</span>
									</div>
									<div className='flex items-center justify-center'>
										<Shield className='w-4 h-4 mr-2' />
										<span>Aparatología Corporal</span>
									</div>
								</div>
								</div>
							);
						})}
					</div>
				</div>
			</section>

			{/* Nuestra Tecnología */}
			<section className='py-16 max-w-7xl mx-auto px-4'>
				<div className='flex items-center justify-center mb-12'>
					<Zap className='w-8 h-8 text-pink-600 mr-3' />
					<h2 className='text-3xl font-bold text-center'>NUESTRA TECNOLOGÍA</h2>
				</div>
				<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
					{[
						{ 
							nombre: 'Mio Up', 
							categoria: 'Modelado Corporal',
							descripcion: 'Pulsos magnéticos focalizados con 7 Teslas de energía electromagnética. 30.000 contracciones por sesión para tonificar músculos y modelar la figura.'
						},
						{ 
							nombre: 'Alpha Synergy', 
							categoria: 'Modelado Corporal',
							descripcion: 'Reduce circunferencia corporal, trata flacidez cutánea mejorando elasticidad y disminuye signos de celulitis. Trabaja con temperatura elevada 42°-43°.'
						},
						{ 
							nombre: 'Láser de Diodo', 
							categoria: 'Depilación Definitiva',
							descripcion: 'Tecnología avanzada para depilación definitiva tanto femenina como masculina. Resultados efectivos y duraderos en todas las zonas del cuerpo.'
						},
						{ 
							nombre: 'Presoterapia', 
							categoria: 'Drenaje Linfático',
							descripcion: 'Estimula la circulación y el drenaje linfático, reduce retención de líquidos y mejora la apariencia de la celulitis.'
						},
						{ 
							nombre: 'Vacumterapia', 
							categoria: 'Glúteos Push-Up',
							descripcion: 'Aumento y levantamiento del tejido muscular en glúteos. Ideal para levantar, trabajar y moldear la flacidez del glúteo.'
						},
						{ 
							nombre: 'Microdermoabrasión', 
							categoria: 'Tratamientos Faciales',
							descripcion: 'Punta de diamante para limpieza facial profunda. Atenúa manchas, líneas de expresión y mejora la textura de la piel.'
						}
					].map((equipo, index) => {
								const equipmentImages = [
									'modern%20electromagnetic%20muscle%20stimulation%20machine%20in%20medical%20spa,%20high-tech%20equipment,%20clean%20white%20background,%20professional%20medical%20device,%20realistic%20photography',
									'advanced%20body%20contouring%20machine%20with%20temperature%20control,%20modern%20aesthetic%20equipment,%20spa%20clinic%20setting,%20professional%20device,%20realistic%20photography',
									'professional%20laser%20hair%20removal%20machine,%20modern%20diode%20laser%20equipment,%20medical%20spa%20setting,%20high-tech%20device,%20realistic%20photography',
									'pressotherapy%20lymphatic%20drainage%20machine,%20modern%20medical%20equipment,%20spa%20clinic%20environment,%20professional%20device,%20realistic%20photography',
									'vacuum%20therapy%20buttock%20enhancement%20machine,%20modern%20aesthetic%20equipment,%20professional%20spa%20setting,%20medical%20device,%20realistic%20photography',
									'diamond%20microdermabrasion%20facial%20machine,%20modern%20skincare%20equipment,%20clean%20spa%20environment,%20professional%20device,%20realistic%20photography'
								];
								return (
									<div key={index} className='bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow'>
										<div className='h-32 rounded mb-4 overflow-hidden'>
											<img 
												src={`https://image.pollinations.ai/prompt/${equipmentImages[index]}?width=400&height=200&model=flux-realism&enhance=true&nologo=true`}
												alt={`${equipo.nombre} - ${equipo.categoria}`}
												className='w-full h-full object-cover'
											/>
										</div>
							<h3 className='text-lg font-semibold mb-2'>{equipo.nombre}</h3>
							<p className='text-pink-600 text-sm font-medium mb-2'>{equipo.categoria}</p>
							<p className='text-gray-600 text-sm'>{equipo.descripcion}</p>
									</div>
								);
							})}
					</div>
			</section>

			{/* Servicios Destacados */}
			<section className='bg-pink-50 py-16'>
				<div className='max-w-7xl mx-auto px-4 text-center'>
					<div className='flex items-center justify-center mb-12'>
						<Award className='w-8 h-8 text-pink-600 mr-3' />
						<h2 className='text-3xl font-bold'>SERVICIOS DESTACADOS</h2>
					</div>
					<div className='grid grid-cols-2 md:grid-cols-4 gap-6'>
						{[
							{ nombre: 'Depilación Definitiva', icono: Zap },
							{ nombre: 'Maderoterapia', icono: Heart },
							{ nombre: 'Tratamientos Faciales', icono: Sparkles },
							{ nombre: 'Bronceado Natural', icono: Star },
							{ nombre: 'Masajes Relajantes', icono: Heart },
							{ nombre: 'Microblading', icono: Eye },
							{ nombre: 'Beauty Nails', icono: Sparkles },
							{ nombre: 'Capacitaciones', icono: Award }
						].map((servicio, index) => {
							const serviceImages = [
								'professional%20laser%20hair%20removal%20treatment%20on%20legs,%20modern%20spa%20setting,%20clean%20and%20professional,%20realistic%20photography,%20high%20quality',
								'wooden%20massage%20therapy%20tools%20for%20maderoterapia,%20natural%20wood%20instruments,%20spa%20environment,%20professional%20treatment,%20realistic%20photography',
								'facial%20treatment%20with%20professional%20skincare,%20clean%20spa%20room,%20relaxing%20atmosphere,%20beauty%20therapy,%20realistic%20photography,%20high%20quality',
								'natural%20tanning%20treatment%20in%20modern%20spa,%20professional%20bronzing%20session,%20clean%20environment,%20beauty%20treatment,%20realistic%20photography',
								'relaxing%20massage%20therapy%20session,%20peaceful%20spa%20room,%20professional%20massage%20table,%20wellness%20treatment,%20realistic%20photography,%20high%20quality',
								'microblading%20eyebrow%20procedure,%20professional%20beauty%20treatment,%20precise%20technique,%20clean%20spa%20environment,%20realistic%20photography,%20high%20quality',
								'professional%20nail%20art%20and%20manicure%20service,%20beautiful%20nail%20design,%20clean%20salon%20setting,%20beauty%20treatment,%20realistic%20photography',
								'professional%20beauty%20training%20class,%20students%20learning%20aesthetic%20techniques,%20modern%20classroom,%20educational%20environment,%20realistic%20photography'
							];
							return (
								<div key={index} className='bg-white p-4 rounded-lg shadow hover:shadow-md transition-shadow'>
									<div className='h-16 rounded mb-3 overflow-hidden'>
										<img 
											src={`https://image.pollinations.ai/prompt/${serviceImages[index]}?width=200&height=120&model=flux-realism&enhance=true&nologo=true`}
											alt={servicio.nombre}
											className='w-full h-full object-cover'
										/>
									</div>
									<p className='text-sm text-gray-700 font-medium'>{servicio.nombre}</p>
								</div>
							);
						})}
					</div>
				</div>
			</section>

			{/* Misión, Visión, Valores */}
			<section className='py-16 max-w-7xl mx-auto px-4'>
				<div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
					<div className='text-center'>
						<div className='bg-pink-100 w-16 h-16 rounded-full mx-auto mb-4 flex items-center justify-center'>
							<Target className='w-8 h-8 text-pink-600' />
						</div>
						<h3 className='text-xl font-semibold mb-4'>MISIÓN</h3>
						<p className='text-gray-600'>
							Acompañarte para que puedas verte y sentirte mejor con todos nuestros tratamientos. 
							Brindamos servicios de estética integral con la más alta calidad y profesionalismo, 
							cuidando tu piel, tu cuerpo y tu bienestar.
						</p>
					</div>

					<div className='text-center'>
						<div className='bg-purple-100 w-16 h-16 rounded-full mx-auto mb-4 flex items-center justify-center'>
							<Eye className='w-8 h-8 text-purple-600' />
						</div>
						<h3 className='text-xl font-semibold mb-4'>VISIÓN</h3>
						<p className='text-gray-600'>
							Ser el centro de estética integral de referencia en Mar del Plata, 
							reconocido por la excelencia en nuestros servicios, la innovación tecnológica 
							y el compromiso con la satisfacción y bienestar de nuestros clientes.
						</p>
					</div>

					<div className='text-center'>
						<div className='bg-blue-100 w-16 h-16 rounded-full mx-auto mb-4 flex items-center justify-center'>
							<Gem className='w-8 h-8 text-blue-600' />
						</div>
						<h3 className='text-xl font-semibold mb-4'>VALORES</h3>
						<p className='text-gray-600'>
							Profesionalismo, calidad, confianza, innovación y compromiso. 
							Nos mantenemos en constante actualización para ofrecer las mejores 
							tecnologías y tratamientos, siempre con un trato personalizado y cálido.
						</p>
					</div>
				</div>
			</section>

			{/* CTA Final */}
			<section className='bg-gradient-to-r from-pink-500 to-purple-600 text-white py-16'>
				<div className='max-w-7xl mx-auto px-4 text-center'>
					<div className='flex items-center justify-center mb-4'>
						<Sparkles className='w-8 h-8 mr-3' />
						<h2 className='text-3xl font-bold'>¿LISTA PARA COMENZAR TU TRANSFORMACIÓN?</h2>
						<Sparkles className='w-8 h-8 ml-3' />
					</div>
					<p className='text-lg mb-8'>
						En Íntima MDQ te esperamos para brindarte la mejor experiencia en estética integral. 
						Nuestro equipo de profesionales está listo para acompañarte en tu proceso de bienestar y belleza.
					</p>
					<div className='flex flex-col sm:flex-row gap-4 justify-center'>
						<Link
							href='/contacto'
							className='bg-white text-pink-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors flex items-center justify-center'
						>
							<Phone className='w-5 h-5 mr-2' />
							Agendar Consulta
						</Link>
						<Link
							href='/servicios'
							className='border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-pink-600 transition-colors flex items-center justify-center'
						>
							<Heart className='w-5 h-5 mr-2' />
							Ver Servicios
						</Link>
					</div>
					<div className='mt-8 flex justify-center gap-6'>
						<a href='https://www.instagram.com/intimamdq/' target='_blank' rel='noopener noreferrer' className='text-white hover:text-pink-200 transition-colors'>
							<Instagram className='w-6 h-6' />
						</a>
						<a href='https://www.facebook.com/intimamdq' target='_blank' rel='noopener noreferrer' className='text-white hover:text-pink-200 transition-colors'>
							<Facebook className='w-6 h-6' />
						</a>
					</div>
				</div>
			</section>
		</div>
	);
}
