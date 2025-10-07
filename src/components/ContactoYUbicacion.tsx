'use client';
import {
  FaMapMarkerAlt,
  FaPhone,
  FaEnvelope,
  FaClock,
  FaInstagram,
  FaFacebookF,
  FaWhatsapp,
  FaDirections,
  FaFacebook,
} from 'react-icons/fa';

const ContactoYUbicacion = () => {
  // Información de contacto
  const contactInfo = {
		direccion: {
			calle: 'Av. Independencia 2847',
			ciudad: 'Mar del Plata',
			provincia: 'Buenos Aires',
			codigoPostal: '7600',
		},
		telefono: {
			principal: '+54 223 550-7949',
			whatsapp: '+54 9 223 550-7949',
		},
		email: {
			principal: 'info@intimamdq.com.ar',
			consultas: 'consultas@intimamdq.com.ar',
		},
		redesSociales: {
      arroba: '@intimamdq',
			instagram: 'https://www.instagram.com/intimamdq',
			facebook: 'https://www.facebook.com/intimamdq',
		},
	} as const;

  // Horarios de atención
  const horarios = [
    { dia: 'Lunes a Viernes', horario: '9:00 - 19:00', disponible: true },
    { dia: 'Sábados', horario: '9:00 - 16:00', disponible: true },
  ] as const;

  const openWhatsApp = () => {
    const message = encodeURIComponent('¡Hola! Me gustaría obtener más información sobre los tratamientos de Íntima MDQ.');
    window.open(`https://wa.me/5492235507949?text=${message}`, '_blank');
  };

  const openGoogleMaps = () => {
    const address = encodeURIComponent(`${contactInfo.direccion.calle}, ${contactInfo.direccion.ciudad}, ${contactInfo.direccion.provincia}`);
    window.open(`https://www.google.com/maps/search/?api=1&query=${address}`, '_blank');
  };

  const mapEmbedUrl = 'https://www.google.com/maps?q=intima+castelli+3141,+Mar+del+Plata,+Buenos+Aires&output=embed';

  return (
		<section className='py-16 bg-white' id='contacto'>
			<div className='mx-auto max-w-7xl px-4'>
				{/* Header */}
				<div className='mb-10 text-center'>
					<h2 className='mb-2 text-3xl md:text-4xl font-bold text-gray-900'>Contacto y ubicación</h2>
					<p className='mx-auto max-w-2xl text-gray-600'>
						Estamos para ayudarte. Escribinos para agendar tu consulta o resolver cualquier duda.
					</p>
				</div>

				{/* Content */}
				<div className='grid grid-cols-1 gap-8 lg:grid-cols-2 '>
						{/* Columna izquierda: métodos de contacto */}
						<div className='space-y-6 h-full '>
							<div className='rounded-2xl bg-white p-6 shadow-sm ring-1 ring-gray-200/60'>
								<h3 className='mb-4 text-xl font-semibold text-gray-900'>Contacto directo</h3>
								<div className='space-y-3'>
									{/* Teléfono */}
									<a
										href={`tel:${contactInfo.telefono.principal.replace(/\s|\+/g, '')}`}
										className='flex items-center gap-3 rounded-lg p-3 hover:bg-gray-50'
									>
										<span className='inline-flex h-10 w-10 items-center justify-center rounded-lg bg-primary-100 text-primary-700'>
											<FaPhone />
										</span>
										<div>
											<p className='font-medium text-gray-900'>Teléfono</p>
											<p className='text-gray-600'>{contactInfo.telefono.principal}</p>
										</div>
									</a>

									{/* WhatsApp */}
									<button
										onClick={openWhatsApp}
										className='flex w-full items-center gap-3 rounded-lg p-3 hover:bg-gray-50'
									>
										<span className='inline-flex h-10 w-10 items-center justify-center rounded-lg bg-green-100 text-green-700'>
											<FaWhatsapp />
										</span>
										<div className='text-left'>
											<p className='font-medium text-gray-900'>WhatsApp</p>
											<p className='text-gray-600'>{contactInfo.telefono.whatsapp}</p>
										</div>
									</button>

									{/* Email */}
									<a
										href={`${contactInfo.redesSociales.instagram}`}
										className='flex items-center gap-3 rounded-lg p-3 hover:bg-gray-50'
									>
										<span className='inline-flex h-10 w-10 items-center justify-center rounded-lg bg-pink-100 text-pink-500'>
											<FaInstagram />
										</span>
										<div>
											<p className='font-medium text-gray-900'>Instagram</p>
											<p className='text-gray-600'>{contactInfo.redesSociales.arroba}</p>
										</div>
									</a>
									<a
										href={`${contactInfo.redesSociales.facebook}`}
										className='flex items-center gap-3 rounded-lg p-3 hover:bg-gray-50'
									>
										<span className='inline-flex h-10 w-10 items-center justify-center rounded-lg bg-blue-100 text-blue-700'>
											<FaFacebook />
										</span>
										<div>
											<p className='font-medium text-gray-900'>Facebook</p>
											<p className='text-gray-600'>{contactInfo.redesSociales.arroba}</p>
										</div>
									</a>

									{/* Dirección */}
									<button
										onClick={openGoogleMaps}
										className='flex w-full items-center gap-3 rounded-lg p-3 hover:bg-gray-50'
									>
										<span className='inline-flex h-10 w-10 items-center justify-center rounded-lg bg-orange-100 text-orange-500'>
											<FaMapMarkerAlt />
										</span>
										<div className='text-left'>
											<p className='font-medium text-gray-900'>Dirección</p>
											<p className='text-gray-600'>
												{contactInfo.direccion.calle}
												<br />
												{contactInfo.direccion.ciudad}, {contactInfo.direccion.provincia}
											</p>
										</div>
									</button>
								</div>
							</div>
						</div>

						{/* Columna derecha: mapa y horarios */}
						<div className='space-y-6'>
							<div className='overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-gray-200/60'>
								<div className='aspect-video w-full'>
									<iframe
										title='Ubicación Íntima MDQ'
										src={mapEmbedUrl}
										className='h-full w-full border-0'
										loading='lazy'
										referrerPolicy='no-referrer-when-downgrade'
									/>
								</div>
							</div>

							<div className='rounded-2xl bg-white p-6 shadow-sm ring-1 ring-gray-200/60'>
								<h3 className='mb-4 inline-flex items-center gap-2 text-lg font-semibold text-gray-900'>
									<FaClock className='text-primary' /> Horarios de atención
								</h3>
								<ul className='space-y-2'>
									{horarios.map((h) => (
										<li key={h.dia} className='flex items-center justify-between text-gray-700'>
											<span>{h.dia}</span>
											<span className={h.disponible ? 'text-gray-900' : 'text-gray-400'}>{h.horario}</span>
										</li>
									))}
								</ul>
							</div>
						</div>
				</div>
			</div>
		</section>
	);
};

export default ContactoYUbicacion;