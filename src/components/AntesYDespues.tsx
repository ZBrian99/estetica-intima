'use client';
import { useState, useRef } from 'react';
import Image from 'next/image';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Calendar, Clock, User, ArrowRight } from 'lucide-react';
import { ReactCompareSlider, ReactCompareSliderImage } from 'react-compare-slider';

// Datos de ejemplo para los tratamientos
const tratamientosData = [
	{
		id: 1,
		nombre: 'Depilación Láser Piernas',
		descripcion:
			'Depilación definitiva con láser de diodo en piernas completas. Resultados visibles desde la primera sesión.',
		fecha: 'Marzo 2025',
		sesiones: '6 sesiones',
		profesional: 'Dra. Erica',
		imagenAntes:
			'https://image.pollinations.ai/prompt/woman%20legs%20with%20hair%20before%20laser%20treatment%20professional%20medical%20spa%20realistic%20photography?width=800&height=600&model=flux-realism&enhance=true&nologo=true',
		imagenDespues:
			'https://image.pollinations.ai/prompt/woman%20smooth%20hairless%20legs%20after%20laser%20treatment%20professional%20result%20realistic%20photography?width=800&height=600&model=flux-realism&enhance=true&nologo=true',
		categoria: 'Depilación Definitiva',
	},
	{
		id: 2,
		nombre: 'Tratamiento Facial Rejuvenecedor',
		descripcion: 'Tratamiento con radiofrecuencia y plasma rico en plaquetas para rejuvenecer la piel del rostro.',
		fecha: 'Febrero 2025',
		sesiones: '4 sesiones',
		profesional: 'Juli',
		imagenAntes:
			'https://image.pollinations.ai/prompt/woman%20face%20with%20wrinkles%20aging%20skin%20before%20facial%20rejuvenation%20treatment%20realistic%20photography?width=800&height=600&model=flux-realism&enhance=true&nologo=true',
		imagenDespues:
			'https://image.pollinations.ai/prompt/woman%20youthful%20smooth%20face%20after%20rejuvenation%20treatment%20glowing%20skin%20realistic%20photography?width=800&height=600&model=flux-realism&enhance=true&nologo=true',
		categoria: 'Rejuvenecimiento Facial',
	},
	{
		id: 3,
		nombre: 'Limpieza Facial Profunda',
		descripcion: 'Limpieza facial con microdermoabrasión y punta de diamante. Piel renovada y luminosa.',
		fecha: 'Abril 2025',
		sesiones: '1 sesión',
		profesional: 'Dani',
		imagenAntes:
			'https://image.pollinations.ai/prompt/woman%20face%20with%20acne%20blackheads%20before%20facial%20treatment%20professional%20spa%20realistic%20photography?width=800&height=600&model=flux-realism&enhance=true&nologo=true',
		imagenDespues:
			'https://image.pollinations.ai/prompt/woman%20clear%20glowing%20skin%20face%20after%20facial%20treatment%20professional%20result%20realistic%20photography?width=800&height=600&model=flux-realism&enhance=true&nologo=true',
		categoria: 'Belleza Total',
	},
	{
		id: 4,
		nombre: 'Microblading Cejas',
		descripcion: 'Maquillaje semipermanente para cejas con técnica de microblading. Cejas perfectamente definidas.',
		fecha: 'Enero 2025',
		sesiones: '2 sesiones',
		profesional: 'Erica',
		imagenAntes:
			'https://image.pollinations.ai/prompt/woman%20sparse%20thin%20eyebrows%20before%20microblading%20treatment%20professional%20spa%20realistic%20photography?width=800&height=600&model=flux-realism&enhance=true&nologo=true',
		imagenDespues:
			'https://image.pollinations.ai/prompt/woman%20perfect%20defined%20eyebrows%20after%20microblading%20treatment%20professional%20result%20realistic%20photography?width=800&height=600&model=flux-realism&enhance=true&nologo=true',
		categoria: 'Belleza Total',
	},
	{
		id: 5,
		nombre: 'Lifting de Pestañas',
		descripcion: 'Tratamiento de lifting y tinte de pestañas para una mirada más intensa y definida.',
		fecha: 'Enero 2025',
		sesiones: '1 sesión',
		profesional: 'Ana',
		imagenAntes:
			'https://image.pollinations.ai/prompt/close-up-woman-eyes-straight-short-eyelashes-before-lash-lift-treatment-realistic-photography?width=400&height=400&seed=505',
		imagenDespues:
			'https://image.pollinations.ai/prompt/close-up-woman-eyes-long-curved-lifted-eyelashes-after-lash-lift-treatment-realistic-photography?width=400&height=400&seed=505',
		categoria: 'Belleza Facial',
	},
	{
		id: 7,
		nombre: 'Hidratación Facial Profunda',
		descripcion: 'Tratamiento intensivo de hidratación con ácido hialurónico para rostro luminoso.',
		fecha: 'Febrero 2025',
		sesiones: '3 sesiones',
		profesional: 'Dani',
		imagenAntes:
			'https://image.pollinations.ai/prompt/rostro-femenino-piel-seca-deshidratada-opaca-antes-hidratacion-facial?width=400&height=400&seed=70',
		imagenDespues:
			'https://image.pollinations.ai/prompt/rostro-femenino-piel-hidratada-luminosa-radiante-despues-tratamiento-acido-hialuronico?width=400&height=400&seed=70',
		categoria: 'Belleza Facial',
	},
	{
		id: 8,
		nombre: 'Microblading Cejas',
		descripcion: 'Micropigmentación de cejas con técnica pelo a pelo para un resultado natural.',
		fecha: 'Marzo 2025',
		sesiones: '1 sesión',
		profesional: 'Juli',
		imagenAntes:
			'https://image.pollinations.ai/prompt/mujer-con-cejas-despobladas-sin-maquillaje-rostro-natural-antes-microblading?width=400&height=400&seed=80',
		imagenDespues:
			'https://image.pollinations.ai/prompt/mujer-con-cejas-perfectas-microblading-definidas-naturales-despues-tratamiento?width=400&height=400&seed=80',
		categoria: 'Belleza Facial',
	},
	{
		id: 6,
		nombre: 'Depilación Masculina Espalda',
		descripcion: 'Depilación láser definitiva en espalda completa. Resultados duraderos y piel suave.',
		fecha: 'Marzo 2025',
		sesiones: '5 sesiones',
		profesional: 'Dani',
		imagenAntes:
			'https://image.pollinations.ai/prompt/man%20back%20with%20hair%20before%20laser%20treatment%20professional%20medical%20spa%20realistic%20photography?width=800&height=600&model=flux-realism&enhance=true&nologo=true',
		imagenDespues:
			'https://image.pollinations.ai/prompt/man%20smooth%20hairless%20back%20after%20laser%20treatment%20professional%20result%20realistic%20photography?width=800&height=600&model=flux-realism&enhance=true&nologo=true',
		categoria: 'Depilación Definitiva',
	},
];

const AntesYDespues = () => {
	const [tratamientoSeleccionado, setTratamientoSeleccionado] = useState(tratamientosData[0]);
	const comparadorRef = useRef<HTMLDivElement>(null);

	const handleTratamientoSelect = (tratamiento: (typeof tratamientosData)[0]) => {
		setTratamientoSeleccionado(tratamiento);

		// Scroll al comparador en mobile
		if (window.innerWidth < 1024 && comparadorRef.current) {
			comparadorRef.current.scrollIntoView({
				behavior: 'smooth',
				block: 'start',
			});
		}
	};

	return (
		<section className='py-16 bg-gradient-to-br from-primary-50 to-white'>
			<div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
				{/* Header */}
				<div className='text-center mb-8'>
					<h2 className='text-3xl font-bold text-black mb-2'>Resultados Reales</h2>
					<p className='text-gray-700 max-w-2xl mx-auto'>Transformaciones que hablan por sí solas</p>
				</div>

				{/* Layout Principal */}
				<div className='grid grid-cols-1 lg:grid-cols-5 gap-4 lg:gap-6'>
					{/* Comparador de Imágenes Principal - 3 columnas en desktop */}
					<div ref={comparadorRef} className='lg:col-span-3'>
						<div className='bg-white rounded-2xl shadow-lg p-6'>
							{/* Header del tratamiento */}
							<div className='mb-6'>
								<div className=' hidden sm:flex items-center justify-between mb-3'>
									<Badge className='bg-primary-100 text-primary-800'>{tratamientoSeleccionado.categoria}</Badge>
									<div className='flex items-center gap-4 text-xs text-gray-600'>
										<div className='flex items-center gap-1'>
											<Calendar className='w-3 h-3 text-primary-500' />
											<span>{tratamientoSeleccionado.fecha}</span>
										</div>
										<div className='flex items-center gap-1'>
											<Clock className='w-3 h-3 text-primary-500' />
											<span>{tratamientoSeleccionado.sesiones}</span>
										</div>
										<div className='flex items-center gap-1'>
											<User className='w-3 h-3 text-primary-500' />
											<span>{tratamientoSeleccionado.profesional}</span>
										</div>
									</div>
								</div>
								<h3 className='text-2xl font-bold text-black mb-3'>{tratamientoSeleccionado.nombre}</h3>
								<p className='text-sm text-gray-700 leading-relaxed'>{tratamientoSeleccionado.descripcion}</p>
							</div>

							{/* Comparador con mejor relación de aspecto */}
							<div className='w-full h-64 md:h-80 lg:h-96 rounded-xl overflow-hidden mb-6 relative'>
								<ReactCompareSlider
									itemOne={
										<ReactCompareSliderImage
											src={tratamientoSeleccionado.imagenAntes}
											alt={`${tratamientoSeleccionado.nombre} - Antes`}
										/>
									}
									itemTwo={
										<ReactCompareSliderImage
											src={tratamientoSeleccionado.imagenDespues}
											alt={`${tratamientoSeleccionado.nombre} - Después`}
										/>
									}
									position={50}
									style={{
										display: 'flex',
										width: '100%',
										height: '100%',
									}}
								/>

								{/* Etiquetas Antes y Después superpuestas */}
								<div className='absolute top-4 left-4 z-10'>
									<span className='bg-black/70 text-white px-3 py-1 rounded-full text-sm font-semibold'>Antes</span>
								</div>
								<div className='absolute top-4 right-4 z-10'>
									<span className='bg-black/70 text-white px-3 py-1 rounded-full text-sm font-semibold'>Después</span>
								</div>

								{/* Texto instructivo centrado */}
								<div className='absolute bottom-4 left-1/2 transform -translate-x-1/2 z-10'>
									<p className='bg-black/70 text-white px-4 py-2 rounded-full text-xs whitespace-nowrap text-center'>
										Deslizá para comparar los resultados
									</p>
								</div>
							</div>

							{/* CTA debajo del comparador */}
							<Button className='w-full bg-primary-600 hover:bg-primary-700 text-lg py-3'>
								Quiero estos resultados
								<ArrowRight className='w-5 h-5 ml-2' />
							</Button>
						</div>
					</div>

					{/* Panel lateral con grid 2x4 en desktop, 2x2 en mobile */}
					<div className='lg:col-span-2 bg-white rounded-2xl shadow-lg p-3 lg:p-4'>
						<h4 className='text-base lg:text-lg font-semibold text-gray-900 mb-3 lg:mb-4'>Otros Resultados</h4>
						<div className='grid grid-cols-2 gap-2 lg:gap-3'>
							{tratamientosData.map((tratamiento) => (
								<Card
									key={tratamiento.id}
									className={` cursor-pointer transition-all duration-200 hover:shadow-md overflow-hidden group ${
										tratamientoSeleccionado.id === tratamiento.id
											? 'ring-2 ring-primary-500 shadow-md'
											: 'hover:ring-1 hover:ring-gray-300'
									} p-0`}
									onClick={() => handleTratamientoSelect(tratamiento)}
								>
									<CardContent className='p-0 '>
										<div className='grid grid-cols-2 h-24 lg:h-32 relative'>
											<div className='relative overflow-hidden'>
												<Image
													src={tratamiento.imagenAntes}
													alt={`${tratamiento.nombre} - Antes`}
													fill
													className='object-cover  transition-transform group-hover:scale-105'
													sizes='(max-width: 768px) 25vw, 15vw'
												/>
											</div>
											<div className='relative overflow-hidden'>
												<Image
													src={tratamiento.imagenDespues}
													alt={`${tratamiento.nombre} - Después`}
													fill
													className='object-cover  transition-transform group-hover:scale-105'
													sizes='(max-width: 768px) 25vw, 15vw'
												/>
											</div>
											{/* Overlay con nombre en hover */}
											<div className='absolute inset-0 bg-black/0 group-hover:bg-black/70 transition-all duration-200 flex items-center justify-center'>
												<span className='text-white text-xs font-medium opacity-0 group-hover:opacity-100 transition-opacity text-center px-1 lg:px-2'>
													{tratamiento.nombre}
												</span>
											</div>
										</div>
									</CardContent>
								</Card>
							))}
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default AntesYDespues;