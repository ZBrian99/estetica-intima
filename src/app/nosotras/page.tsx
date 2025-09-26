import Link from 'next/link';
import { MapPin, Clock, Phone, Users, Heart, Sparkles, Target, Zap, Eye, Gem, Instagram, Facebook } from 'lucide-react';
import { FaCrown, FaRocket, FaSpa, FaLeaf, FaGraduationCap, FaPhone, FaSun, FaTint, FaHandSparkles, FaHeart, FaStar } from 'react-icons/fa';


// data que tengo
// Eli - Emprendedora, Esteticista, Técnica en Depilación Láser, Maderoterapeuta, Capacitadora (es la dueña) 
// Bren  - Recepcionista (atiende, turno todo eso)
// Naty - Operadora Láser, Esteticista, Maderoterapeuta
// Dani - Cosmetóloga, Esteticista, Maderoterapeuta
// Dai - Técnica en Micropigmentación de labios
// Xime - Esteticista, Cosmetóloga, Maderoterapeuta.
// Maru - Manicura
//  las imagenes se llaman igual que el nombre .webp
export default function Nosotros() {
	return (
		<div className='min-h-screen bg-gray-50'>
			{/* Hero Section */}
			<section className='relative py-20 overflow-hidden'>
				<div className='absolute inset-0'>
					<img 
						src='https://image.pollinations.ai/prompt/luxury%20spa%20reception%20area%20with%20soft%20violet%20and%20white%20decor,%20cozy%20minimalist%20design,%20natural%20lighting,%20professional%20aesthetic%20clinic,%20high%20quality,%20realistic%20photography?width=1920&height=800&model=flux-realism&enhance=true&nologo=true'
						alt='Íntima Spa Background'
						className='w-full h-full object-cover'
					/>
					<div className='absolute inset-0 bg-gradient-to-r from-violet-100/90 to-fuchsia-100/90'></div>
				</div>
				<div className='relative max-w-7xl mx-auto px-4 text-center'>
					<div className='flex items-center justify-center mb-6'>
						<Sparkles className='w-8 h-8 text-violet-600 mr-3' />
						<h1 className='text-4xl font-bold text-gray-900'>ÍNTIMA ESTÉTICA INTEGRAL</h1>
						<Sparkles className='w-8 h-8 text-violet-600 ml-3' />
					</div>
					<p className='text-lg text-gray-600 max-w-3xl mx-auto mb-6'>
						Te acompañamos para que puedas verte y sentirte mejor, con todos nuestros tratamientos. 
						Estética unisex donde cuidamos tu piel, tu cuerpo y tu bienestar.
					</p>
					<div className='flex flex-wrap justify-center gap-6 text-sm text-gray-700'>
						<div className='flex items-center'>
							<MapPin className='w-4 h-4 mr-2 text-violet-600' />
							<span>Castelli 3141, Mar del Plata</span>
						</div>
						<div className='flex items-center'>
							<Phone className='w-4 h-4 mr-2 text-violet-600' />
							<span>+54 9 223 550-7949</span>
						</div>
						<div className='flex items-center'>
							<Clock className='w-4 h-4 mr-2 text-violet-600' />
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
							<Heart className='w-8 h-8 text-violet-600 mr-3' />
							<h2 className='text-3xl font-bold'>NUESTRA HISTORIA</h2>
						</div>
						<p className='text-gray-600 mb-4'>
							En Íntima nos especializamos en estética integral, ofreciendo servicios tanto para mujeres como para hombres. 
							Nuestro centro se ha consolidado como referente en Mar del Plata, brindando tratamientos de depilación definitiva, 
							faciales, corporales, bronceado natural y masajes.
						</p>
						<p className='text-gray-600 mb-4'>
							Nuestro equipo está en crecimiento y se capacita de forma constante para ofrecer las últimas tecnologías y técnicas en estética.
							Nos enfocamos en acompañarte con atención cercana y resultados reales.
						</p>
						<p className='text-gray-600'>
							Además de nuestros servicios, ofrecemos capacitaciones especializadas en Operadora Láser, Maderoterapia y 
							Aparatología Corporal, formando a nuevos profesionales con los más altos estándares de calidad.
						</p>
					</div>
					<div className='h-96 rounded-lg relative overflow-hidden'>
						<img 
							src='https://image.pollinations.ai/prompt/modern%20aesthetic%20spa%20clinic%20interior%20with%20violet%20and%20white%20decor,%20professional%20equipment,%20cozy,%20natural%20lighting,%20high%20quality,%20realistic%20photography?width=800&height=600&model=flux-realism&enhance=true&nologo=true' 
							alt='Centro de Estética Íntima' 
							className='w-full h-full object-cover'
						/>
						<div className='absolute inset-0 bg-gradient-to-br from-violet-500/20 to-fuchsia-500/20'></div>
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
						<Users className='w-8 h-8 text-violet-600 mr-3' />
						<h2 className='text-3xl font-bold text-center'>NUESTRO EQUIPO</h2>
					</div>
					{/* Team members (solo roles con ícono) */}
					{(() => {
						type Role =
							| 'Dueña'
							| 'Emprendedora'
							| 'Esteticista'
							| 'Técnica en Depilación Láser'
							| 'Maderoterapeuta'
							| 'Capacitadora'
							| 'Recepcionista'
							| 'Operadora Láser'
							| 'Cosmetóloga'
							| 'Técnica en Micropigmentación de labios'
							| 'Manicura';

						type TeamMember = { name: string; roles: readonly Role[]; tagline: string };

						const teamMembers: readonly TeamMember[] = [
							{ name: 'Eli', roles: ['Dueña', 'Emprendedora', 'Esteticista', 'Técnica en Depilación Láser', 'Maderoterapeuta', 'Capacitadora'], tagline: 'Lidera con visión y actúa con amor' },
							{ name: 'Bren', roles: ['Recepcionista'], tagline: 'Si llamás, agenda; si escribís, responde.' },
							{ name: 'Naty', roles: ['Operadora Láser', 'Esteticista', 'Maderoterapeuta'], tagline: 'Hace que el láser y la madero trabajen a tu favor.' },
							{ name: 'Dani', roles: ['Cosmetóloga', 'Esteticista', 'Maderoterapeuta'], tagline: 'Ve una piel y ya tiene el plan.' },
							{ name: 'Dai', roles: ['Técnica en Micropigmentación de labios'], tagline: 'Labios definidos, sonrisa asegurada.' },
							{ name: 'Xime', roles: ['Esteticista', 'Cosmetóloga', 'Maderoterapeuta'], tagline: 'Detalle fino, resultados que se notan.' },
							{ name: 'Maru', roles: ['Manicura'], tagline: 'Uñas lindas, día mejor.' },
						];

						const roleIcon = (role: Role) => {
							switch (role) {
								case 'Dueña':
									return <FaCrown className='h-3.5 w-3.5 text-violet-600' />;
								case 'Emprendedora':
									return <FaRocket className='h-3.5 w-3.5 text-violet-600' />;
								case 'Esteticista':
									return <FaSpa className='h-3.5 w-3.5 text-violet-600' />;
								case 'Técnica en Depilación Láser':
								case 'Operadora Láser':
									return <FaSun className='h-3.5 w-3.5 text-violet-600' />;
								case 'Maderoterapeuta':
									return <FaLeaf className='h-3.5 w-3.5 text-violet-600' />;
								case 'Capacitadora':
									return <FaGraduationCap className='h-3.5 w-3.5 text-violet-600' />;
								case 'Recepcionista':
									return <FaPhone className='h-3.5 w-3.5 text-violet-600' />;
								case 'Cosmetóloga':
									return <FaHandSparkles className='h-3.5 w-3.5 text-violet-600' />;
								case 'Técnica en Micropigmentación de labios':
									return <FaTint className='h-3.5 w-3.5 text-violet-600' />;
								case 'Manicura':
									return <FaStar className='h-3.5 w-3.5 text-violet-600' />;
								default:
									return <FaSpa className='h-3.5 w-3.5 text-violet-600' />;
							}
						};

						return (
							<div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8'>
								{teamMembers.map((member) => (
									<div
										key={member.name}
										className='group relative rounded-2xl bg-white p-6 shadow-md ring-1 ring-gray-200/60 transition-all hover:-translate-y-1 hover:shadow-lg h-full flex flex-col text-center overflow-hidden'
									>
										<div className='absolute inset-x-0 top-0 h-1.5 bg-gradient-to-r from-violet-500 via-fuchsia-400 to-indigo-500 rounded-t-2xl' />
										<div className='relative mx-auto mb-5 h-28 w-28 overflow-hidden rounded-full ring-4 ring-violet-600/50'>
											<img
												src={`/team/${member.name}.webp`}
												alt={`${member.name}`}
												className='h-full w-full object-cover'
											/>
											<div className='absolute inset-0 ring-1 ring-black/5 rounded-full' />
										</div>
										<h3 className='mb-2 text-xl font-semibold text-violet-700'>{member.name}</h3>
										<p className='mb-3 text-sm text-violet-600'>{member.tagline}</p>
										<div className='mb-2 flex flex-wrap justify-center gap-2'>
											{member.roles.map((role, i) => (
												<span
													key={i}
													className='inline-flex items-center gap-2 rounded-full border border-violet-200 bg-violet-50 px-3 py-1 text-xs text-violet-700'
												>
													{roleIcon(role)}
													{role}
												</span>
											))}
										</div>
										<div className='mt-auto flex items-center justify-center gap-3 text-violet-600'>
											<FaHeart className='h-4 w-4 opacity-70 mt-4' />
											<span className='text-xs text-gray-500 mt-4 '>Íntima</span>
										</div>
									</div>
								))}
							</div>
						);
					})()}
				</div>
			</section>

			{/* Nuestra Tecnología */}
			<section className='py-16 max-w-7xl mx-auto px-4'>
				<div className='flex items-center justify-center mb-12'>
					<Zap className='w-8 h-8 text-violet-600 mr-3' />
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
							<p className='text-violet-600 text-sm font-medium mb-2'>{equipo.categoria}</p>
							<p className='text-gray-600 text-sm'>{equipo.descripcion}</p>
									</div>
								);
							})}
					</div>
			</section>

		

			{/* Misión, Visión, Valores */}
			<section className='py-16 max-w-7xl mx-auto px-4'>
				<div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
					<div className='text-center'>
						<div className='bg-violet-100 w-16 h-16 rounded-full mx-auto mb-4 flex items-center justify-center'>
							<Target className='w-8 h-8 text-violet-600' />
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
						<div className='bg-indigo-100 w-16 h-16 rounded-full mx-auto mb-4 flex items-center justify-center'>
							<Gem className='w-8 h-8 text-indigo-600' />
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
			<section className='bg-gradient-to-r from-violet-600 to-fuchsia-600 text-white py-16'>
				<div className='max-w-7xl mx-auto px-4 text-center'>
					<div className='flex items-center justify-center mb-4'>
						<Sparkles className='w-8 h-8 mr-3 text-white/90' />
						<h2 className='text-3xl font-bold'>¿LISTA PARA COMENZAR TU TRANSFORMACIÓN?</h2>
						<Sparkles className='w-8 h-8 ml-3 text-white/90' />
					</div>
					<p className='text-lg mb-8'>
						En Íntima te esperamos para brindarte la mejor experiencia en estética integral. 
						Nuestro equipo de profesionales está listo para acompañarte en tu proceso de bienestar y belleza.
					</p>
					<div className='flex flex-col sm:flex-row gap-4 justify-center'>
						<Link
							href='/contacto'
							className='bg-white text-violet-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors flex items-center justify-center'
						>
							<Phone className='w-5 h-5 mr-2' />
							Agendar Consulta
						</Link>
						<Link
							href='/servicios'
							className='border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-violet-600 transition-colors flex items-center justify-center'
						>
							<Heart className='w-5 h-5 mr-2' />
							Ver Servicios
						</Link>
					</div>
					<div className='mt-8 flex justify-center gap-6'>
						<a href='https://www.instagram.com/intimamdq/' target='_blank' rel='noopener noreferrer' className='text-white hover:text-violet-200 transition-colors'>
							<Instagram className='w-6 h-6' />
						</a>
						<a href='https://www.facebook.com/intimamdq' target='_blank' rel='noopener noreferrer' className='text-white hover:text-violet-200 transition-colors'>
							<Facebook className='w-6 h-6' />
						</a>
					</div>
				</div>
			</section>
		</div>
	);
}
