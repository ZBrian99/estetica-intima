'use client';
import { useState } from 'react';
import Image from 'next/image';
import { ChevronLeft, ChevronRight, Calendar, User, Award, Zap } from 'lucide-react';

interface TratamientoData {
	id: string;
	nombre: string;
	descripcion: string;
	fecha: string;
	sesiones: number;
	profesional: string;
	categoria: string;
	imagenAntes: string;
	imagenDespues: string;
	fallbackColor: string;
	resultados: string[];
}

const AntesYDespuesNoComparator = () => {
	const [currentIndex, setCurrentIndex] = useState(0);
	const [isComparing, setIsComparing] = useState<{ [key: string]: boolean }>({});
	const [sliderPosition, setSliderPosition] = useState<{ [key: string]: number }>({});

	// Datos hardcodeados de casos de éxito
	const tratamientosData: TratamientoData[] = [
		{
			id: 'depilacion-laser-piernas',
			nombre: 'Depilación Láser Piernas Completas',
			descripcion: 'Tratamiento completo de depilación láser en piernas con tecnología Diodo',
			fecha: '2024-03-15',
			sesiones: 6,
			profesional: 'Dra. María González',
			categoria: 'Depilación Definitiva',
			imagenAntes: 'https://image.pollinations.ai/prompt/professional%20medical%20spa%20laser%20hair%20removal%20before%20treatment%20clinical%20photography%20clean%20medical%20environment%20neutral%20background?width=400&height=600&model=flux-realism&enhance=true&nologo=true&seed=10001',
			imagenDespues: 'https://image.pollinations.ai/prompt/professional%20medical%20spa%20laser%20hair%20removal%20after%20treatment%20results%20clinical%20photography%20clean%20medical%20environment%20neutral%20background?width=400&height=600&model=flux-realism&enhance=true&nologo=true&seed=10002',
			fallbackColor: 'bg-primary-500',
			resultados: ['95% reducción del vello', 'Piel suave y sin irritación', 'Resultados duraderos']
		},
		{
			id: 'maderoterapia-abdomen',
			nombre: 'Maderoterapia Reductora Abdominal',
			descripcion: 'Tratamiento de maderoterapia para reducción de medidas y tonificación abdominal',
			fecha: '2024-02-20',
			sesiones: 8,
			profesional: 'Lic. Ana Martínez',
			categoria: 'Modelado Corporal',
			imagenAntes: 'https://image.pollinations.ai/prompt/professional%20medical%20spa%20body%20contouring%20before%20treatment%20clinical%20photography%20medical%20environment%20neutral%20background%20appropriate%20coverage?width=400&height=600&model=flux-realism&enhance=true&nologo=true&seed=20001',
			imagenDespues: 'https://image.pollinations.ai/prompt/professional%20medical%20spa%20body%20contouring%20after%20treatment%20results%20clinical%20photography%20medical%20environment%20neutral%20background%20appropriate%20coverage?width=400&height=600&model=flux-realism&enhance=true&nologo=true&seed=20002',
			fallbackColor: 'bg-purple-500',
			resultados: ['8cm menos de contorno', 'Piel más firme', 'Mejora en la textura']
		},
		{
			id: 'microblading-cejas',
			nombre: 'Microblading de Cejas',
			descripcion: 'Diseño y micropigmentación de cejas con técnica pelo a pelo',
			fecha: '2024-01-10',
			sesiones: 2,
			profesional: 'Esp. Laura Rodríguez',
			categoria: 'Micropigmentación',
			imagenAntes: 'https://image.pollinations.ai/prompt/professional%20beauty%20clinic%20eyebrow%20microblading%20before%20treatment%20close%20up%20clinical%20photography%20clean%20medical%20lighting%20neutral%20background?width=400&height=300&model=flux-realism&enhance=true&nologo=true&seed=30001',
			imagenDespues: 'https://image.pollinations.ai/prompt/professional%20beauty%20clinic%20eyebrow%20microblading%20after%20treatment%20results%20close%20up%20clinical%20photography%20clean%20medical%20lighting%20neutral%20background?width=400&height=300&model=flux-realism&enhance=true&nologo=true&seed=30002',
			fallbackColor: 'bg-rose-500',
			resultados: ['Cejas perfectamente definidas', 'Aspecto natural', 'Duración 12-18 meses']
		},
		{
			id: 'facial-antiage',
			nombre: 'Tratamiento Facial Anti-Age',
			descripcion: 'Protocolo completo de rejuvenecimiento facial con tecnología avanzada',
			fecha: '2024-04-05',
			sesiones: 4,
			profesional: 'Dra. Carmen Silva',
			categoria: 'Tratamientos Faciales',
			imagenAntes: 'https://image.pollinations.ai/prompt/professional%20medical%20spa%20facial%20anti%20aging%20treatment%20before%20clinical%20photography%20clean%20medical%20environment%20neutral%20background%20appropriate%20professional%20setting?width=400&height=500&model=flux-realism&enhance=true&nologo=true&seed=40001',
			imagenDespues: 'https://image.pollinations.ai/prompt/professional%20medical%20spa%20facial%20anti%20aging%20treatment%20after%20results%20clinical%20photography%20clean%20medical%20environment%20neutral%20background%20appropriate%20professional%20setting?width=400&height=500&model=flux-realism&enhance=true&nologo=true&seed=40002',
			fallbackColor: 'bg-emerald-500',
			resultados: ['Reducción de arrugas 70%', 'Piel más luminosa', 'Textura mejorada']
		},
		{
			id: 'depilacion-axilas',
			nombre: 'Depilación Láser Axilas',
			descripcion: 'Depilación definitiva en zona axilar con láser de última generación',
			fecha: '2024-03-01',
			sesiones: 5,
			profesional: 'Lic. Sofía López',
			categoria: 'Depilación Definitiva',
			imagenAntes: 'https://image.pollinations.ai/prompt/professional%20medical%20spa%20laser%20hair%20removal%20underarm%20before%20treatment%20clinical%20photography%20clean%20medical%20environment%20neutral%20background%20appropriate%20coverage?width=400&height=400&model=flux-realism&enhance=true&nologo=true&seed=50001',
			imagenDespues: 'https://image.pollinations.ai/prompt/professional%20medical%20spa%20laser%20hair%20removal%20underarm%20after%20treatment%20results%20clinical%20photography%20clean%20medical%20environment%20neutral%20background%20appropriate%20coverage?width=400&height=400&model=flux-realism&enhance=true&nologo=true&seed=50002',
			fallbackColor: 'bg-indigo-500',
			resultados: ['100% libre de vello', 'Sin irritación', 'Piel suave y uniforme']
		}
	];

	const nextSlide = () => {
		setCurrentIndex((prev) => (prev + 1) % tratamientosData.length);
	};

	const prevSlide = () => {
		setCurrentIndex((prev) => (prev - 1 + tratamientosData.length) % tratamientosData.length);
	};

	const toggleComparison = (id: string) => {
		setIsComparing(prev => ({ ...prev, [id]: !prev[id] }));
		if (!sliderPosition[id]) {
			setSliderPosition(prev => ({ ...prev, [id]: 50 }));
		}
	};

	const handleSliderChange = (id: string, value: number) => {
		setSliderPosition(prev => ({ ...prev, [id]: value }));
	};

	const currentTreatment = tratamientosData[currentIndex];

	return (
		<section className="py-16 bg-gradient-to-br from-gray-50 to-white">
			<div className="max-w-7xl mx-auto px-4">
				{/* Header */}
				<div className="text-center mb-12">
					<h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
						Antes y Después
					</h2>
					<p className="text-lg text-gray-600 max-w-2xl mx-auto">
						Resultados reales de nuestros clientes. Cada transformación cuenta una historia de confianza y profesionalismo
					</p>
				</div>

				{/* Main Carousel */}
				<div className="relative mb-12">
					{/* Navigation Buttons */}
					<button
						onClick={prevSlide}
						className="absolute left-2 top-1/2 -translate-y-1/2 z-20 p-3 bg-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 text-gray-600 hover:text-primary-600 "
					>
						<ChevronLeft className="w-6 h-6" />
					</button>
					<button
						onClick={nextSlide}
						className="absolute right-2 top-1/2 -translate-y-1/2 z-20 p-3 bg-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 text-gray-600 hover:text-primary-600 "
					>
						<ChevronRight className="w-6 h-6" />
					</button>

					{/* Main Content */}
					<div className="bg-white rounded-3xl shadow-xl overflow-hidden">
						<div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
							{/* Image Comparison */}
							<div className="relative">
								{isComparing[currentTreatment.id] ? (
									/* Comparison Slider */
									<div className="relative h-96 lg:h-full overflow-hidden">
										{/* Before Image */}
											<div className="absolute inset-0">
												<Image
													src={currentTreatment.imagenAntes}
													alt={`Antes - ${currentTreatment.nombre}`}
													fill
													sizes="(max-width: 768px) 100vw, 50vw"
													className="object-cover"
													onError={(e) => {
														const target = e.target as HTMLImageElement;
														target.style.display = 'none';
														const parent = target.parentElement;
														if (parent) {
															parent.className += ` ${currentTreatment.fallbackColor}`;
														}
													}}
												/>
											<div className="absolute top-4 left-4 bg-red-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
												Antes
											</div>
										</div>

										{/* After Image with Clip Path */}
											<div 
												className="absolute inset-0"
												style={{
													clipPath: `inset(0 ${100 - (sliderPosition[currentTreatment.id] || 50)}% 0 0)`
												}}
											>
												<Image
													src={currentTreatment.imagenDespues}
													alt={`Después - ${currentTreatment.nombre}`}
													fill
													sizes="(max-width: 768px) 100vw, 50vw"
													className="object-cover"
													onError={(e) => {
														const target = e.target as HTMLImageElement;
														target.style.display = 'none';
														const parent = target.parentElement;
													if (parent) {
														parent.className += ` ${currentTreatment.fallbackColor}`;
													}
												}}
											/>
											<div className="absolute top-4 right-4 bg-green-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
												Después
											</div>
										</div>

										{/* Slider Handle */}
										<div 
											className="absolute top-0 bottom-0 w-1 bg-white shadow-lg cursor-ew-resize z-10"
											style={{ left: `${sliderPosition[currentTreatment.id] || 50}%` }}
										>
											<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 bg-white rounded-full shadow-lg flex items-center justify-center">
												<div className="w-1 h-4 bg-gray-400 rounded"></div>
											</div>
										</div>

										{/* Slider Input */}
										<input
											type="range"
											min="0"
											max="100"
											value={sliderPosition[currentTreatment.id] || 50}
											onChange={(e) => handleSliderChange(currentTreatment.id, parseInt(e.target.value))}
											className="absolute inset-0 w-full h-full opacity-0 cursor-ew-resize z-20"
										/>
									</div>
								) : (
									/* Side by Side View */
									<div className="grid grid-cols-2 h-96 lg:h-full">
										{/* Before */}
										<div className="relative overflow-hidden">
											<Image
												src={currentTreatment.imagenAntes}
												alt={`Antes - ${currentTreatment.nombre}`}
												fill
												className="object-cover"
												onError={(e) => {
													const target = e.target as HTMLImageElement;
													target.style.display = 'none';
													const parent = target.parentElement;
													if (parent) {
														parent.className += ` ${currentTreatment.fallbackColor}`;
													}
												}}
											/>
											<div className="absolute top-4 left-4 bg-red-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
												Antes
											</div>
										</div>
										{/* After */}
										<div className="relative overflow-hidden">
											<Image
												src={currentTreatment.imagenDespues}
												alt={`Después - ${currentTreatment.nombre}`}
												fill
												className="object-cover"
												onError={(e) => {
													const target = e.target as HTMLImageElement;
													target.style.display = 'none';
													const parent = target.parentElement;
													if (parent) {
														parent.className += ` ${currentTreatment.fallbackColor}`;
													}
												}}
											/>
											<div className="absolute top-4 right-4 bg-green-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
												Después
											</div>
										</div>
									</div>
								)}

								{/* Comparison Toggle */}
								<button
									onClick={() => toggleComparison(currentTreatment.id)}
									className="absolute bottom-4 left-4 bg-white/90 text-gray-700 px-4 py-2 rounded-full text-sm font-medium hover:bg-white transition-all duration-300 shadow-lg z-30"
								>
									{isComparing[currentTreatment.id] ? 'Ver Separado' : 'Comparar'}
								</button>
							</div>

							{/* Treatment Info */}
							<div className="p-8 lg:p-12">
								{/* Category Badge */}
								<div className="inline-flex items-center px-3 py-1 bg-primary-100 text-primary-700 rounded-full text-sm font-medium mb-4">
									<Zap className="w-4 h-4 mr-2" />
									{currentTreatment.categoria}
								</div>

								{/* Title */}
								<h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4">
									{currentTreatment.nombre}
								</h3>

								{/* Description */}
								<p className="text-gray-600 mb-6 leading-relaxed">
									{currentTreatment.descripcion}
								</p>

								{/* Treatment Details */}
								<div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
									<div className="flex items-center text-gray-600">
										<Calendar className="w-5 h-5 mr-3 text-primary-500" />
										<div>
											<div className="text-sm text-gray-500">Fecha</div>
											<div className="font-medium">{new Date(currentTreatment.fecha).toLocaleDateString('es-AR')}</div>
										</div>
									</div>
									<div className="flex items-center text-gray-600">
										<Award className="w-5 h-5 mr-3 text-primary-500" />
										<div>
											<div className="text-sm text-gray-500">Sesiones</div>
											<div className="font-medium">{currentTreatment.sesiones}</div>
										</div>
									</div>
									<div className="flex items-center text-gray-600">
										<User className="w-5 h-5 mr-3 text-primary-500" />
										<div>
											<div className="text-sm text-gray-500">Profesional</div>
											<div className="font-medium">{currentTreatment.profesional}</div>
										</div>
									</div>
								</div>

								{/* Results */}
								<div className="mb-8">
									<h4 className="text-lg font-semibold text-gray-900 mb-3">Resultados Obtenidos</h4>
									<ul className="space-y-2">
										{currentTreatment.resultados.map((resultado, index) => (
											<li key={index} className="flex items-center text-gray-600">
												<div className="w-2 h-2 bg-primary-500 rounded-full mr-3"></div>
												{resultado}
											</li>
										))}
									</ul>
								</div>

								{/* CTA */}
								<button className="w-full bg-gradient-to-r from-primary-500 to-rose-400 text-white py-4 px-6 rounded-xl font-semibold hover:from-primary-600 hover:to-rose-500 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
									Quiero Este Tratamiento
								</button>
							</div>
						</div>
					</div>

					{/* Carousel Indicators */}
					<div className="flex justify-center mt-8 space-x-2">
						{tratamientosData.map((_, index) => (
							<button
								key={index}
								onClick={() => setCurrentIndex(index)}
								className={`w-3 h-3 rounded-full transition-all duration-300 ${
									index === currentIndex
										? 'bg-primary-500 w-8'
										: 'bg-gray-300 hover:bg-gray-400'
								}`}
							/>
						))}
					</div>
				</div>

				{/* Thumbnails Grid */}
				<div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
					{tratamientosData.map((tratamiento, index) => (
						<button
							key={tratamiento.id}
							onClick={() => setCurrentIndex(index)}
							className={`group relative overflow-hidden rounded-xl transition-all duration-300 ${
								index === currentIndex
									? 'ring-4 ring-primary-500 transform scale-105'
									: 'hover:transform hover:scale-105'
							}`}
						>
							<div className="aspect-square relative">
								<Image
									src={tratamiento.imagenDespues}
									alt={tratamiento.nombre}
									fill
									className="object-cover group-hover:scale-110 transition-transform duration-500"
									onError={(e) => {
										const target = e.target as HTMLImageElement;
										target.style.display = 'none';
										const parent = target.parentElement;
										if (parent) {
											parent.className += ` ${tratamiento.fallbackColor}`;
										}
									}}
								/>
								<div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
								<div className="absolute bottom-2 left-2 right-2 text-white text-xs font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300">
									{tratamiento.categoria}
								</div>
							</div>
						</button>
					))}
				</div>
			</div>
		</section>
	);
};

export default AntesYDespuesNoComparator;