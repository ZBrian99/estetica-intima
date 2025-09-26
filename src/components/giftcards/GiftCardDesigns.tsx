'use client'

import Tilt from 'react-parallax-tilt'
import { useState, useEffect } from 'react'
import { FaGift } from 'react-icons/fa'
import Image from 'next/image'

interface GiftCardDesignProps {
  design: 'design1' | 'design2' | 'design3'
  value?: string
  recipient?: string
  sender?: string
  message?: string
  code?: string
}

export function GiftCardDesign({ 
  design = 'design1', 
  value = '$50.000', 
  recipient = 'María', 
  sender = 'Ana',
  message = 'Disfruta de un momento especial para ti',
  code = 'INT2025X7K9'
}: GiftCardDesignProps) {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return (
      <div className="w-80 h-48 md:w-96 md:h-56 bg-gradient-to-br from-pink-400 to-purple-600 rounded-2xl animate-pulse" />
    )
  }
  // Configuraciones específicas para cada diseño
  const designConfigs = {
		design1: {
			gradient: 'bg-primary from-violet-500 via-purple-600 to-indigo-700',
			particles: 12,
			particleColor: 'bg-violet-300/40',
			size: 'w-80 h-48 md:w-96 md:h-56',
		},
		design2: {
			gradient: 'bg-rose-500 from-pink-400 via-rose-500 to-purple-600',
			particles: 15,
			particleColor: 'bg-pink-200/45',
			size: 'w-80 h-48 md:w-96 md:h-56',
		},
		design3: {
			gradient: 'bg-amber-400 from-yellow-400 via-amber-400 to-yellow-600',
			particles: 12,
			particleColor: 'bg-gradient-to-r from-yellow-300/60 to-amber-300/60',
			size: 'w-80 h-48 md:w-96 md:h-56',
		},
	};

  const config = designConfigs[design]

  // Diseño 2 con layout específico
  if (design === 'design2') {
    return (
			<div className='relative'>
				{/* Floating particles effect - más intenso */}
				<div className='absolute inset-0 overflow-hidden pointer-events-none'>
					{[...Array(config.particles)].map((_, i) => (
						<div
							key={i}
							className={`absolute w-2 h-2 ${config.particleColor} rounded-full animate-float`}
							style={{
								left: `${10 + i * 8}%`,
								top: `${5 + (i % 5) * 20}%`,
								animationDelay: `${i * 0.3}s`,
								animationDuration: `${2 + i * 0.2}s`,
							}}
						/>
					))}
					{/* Partículas adicionales más pequeñas */}
					{[...Array(8)].map((_, i) => (
						<div
							key={`small-${i}`}
							className='absolute w-1 h-1 bg-white/30 rounded-full animate-float'
							style={{
								left: `${20 + i * 10}%`,
								top: `${15 + (i % 3) * 25}%`,
								animationDelay: `${i * 0.5}s`,
								animationDuration: `${3 + i * 0.4}s`,
							}}
						/>
					))}
				</div>

				<Tilt
					className={config.size}
					tiltMaxAngleX={18}
					tiltMaxAngleY={18}
					perspective={1400}
					scale={1.05}
					transitionSpeed={800}
					gyroscope={true}
					glareEnable={true}
					glareMaxOpacity={0.35}
					glareColor='#ffffff'
					glarePosition='all'
					glareBorderRadius='16px'
					reset={true}
				>
					<div
						className={`relative w-full h-full bg-gradient-to-br ${config.gradient} rounded-2xl shadow-2xl overflow-hidden touch-manipulation`}
					>
						{/* Animated background pattern - más efectos */}
						<div className='absolute inset-0 opacity-30'>
							<div className='absolute top-0 left-0 w-full h-full bg-gradient-to-br from-white/50 to-transparent animate-shimmer' />
							<div className='absolute -top-1/2 -right-1/2 w-full h-full bg-gradient-to-bl from-white/30 to-transparent rounded-full animate-glow-pulse' />
							<div className='absolute top-1/4 left-1/4 w-1/2 h-1/2 bg-gradient-to-r from-transparent via-white/20 to-transparent rounded-full animate-float' />
							<div className='absolute bottom-0 right-0 w-3/4 h-3/4 bg-gradient-to-tl from-white/15 to-transparent animate-slide' />
						</div>

						{/* Content con layout específico */}
						<div className='relative z-10 p-4 md:p-6 h-full flex flex-col text-white'>
							{/* Header: Logo + Íntima a la izquierda, Gift icon a la derecha */}
							<div className='flex justify-between items-start mb-4'>
								<div className='flex items-center space-x-2 '>
									<div className='w-6 h-6 md:w-8 md:h-8  rounded-full flex items-center justify-center  '>
										<Image
											src='/logo-sin-fondo.webp'
											alt='Intima Estética'
											width={120}
											height={120}
											className='h-8 w-8 object-cover brightness-0 invert'
											priority
										/>
									</div>
									<span className='text-sm md:text-lg font-bold'>Íntima Estética</span>
								</div>
								<div className='flex items-center space-x-1'>
									<FaGift />

									<span className='text-xs md:text-sm font-medium'>Gift Card</span>
								</div>
							</div>

							{/* Contenido principal */}
							<div className='flex-1 flex flex-col justify-between'>
								{/* Sección inferior: Para/Nombre/Mensaje a la izquierda, Código a la derecha */}
								<div className='flex justify-end mt-auto items-end text-left'>
									<div className='flex-1'>
										<p className='text-xs md:text-sm text-white/90 '>Para</p>
										<p className='text-lg font-semibold  mb-1'>{recipient}</p>
										<p className='text-xs  text-white/85 text-left leading-relaxed max-w-48'>{message}</p>
									</div>
									<div className='text-right'>
										<p className='text-xs text-white/80 mb-1'>Código</p>
										<p className='text-xs md:text-sm font-mono font-bold bg-white/20 px-2 py-1 rounded backdrop-blur-sm'>
											{code}
										</p>
									</div>
								</div>
							</div>
						</div>

						{/* Efectos holográficos mejorados */}
						<div className='absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transform -skew-x-12 animate-slide opacity-0 hover:opacity-100 transition-opacity duration-1000' />
						<div className='absolute top-0 right-0 w-1/3 h-1/3 bg-gradient-to-bl from-white/15 to-transparent animate-glow-pulse' />

						{/* Elementos flotantes adicionales */}
						<div
							className='absolute top-3 right-8 w-2 h-2 bg-white/25 rounded-full animate-float'
							style={{ animationDelay: '0.5s' }}
						/>
						<div
							className='absolute bottom-6 left-8 w-3 h-3 bg-white/20 rounded-full animate-float'
							style={{ animationDelay: '1.5s' }}
						/>
						<div
							className='absolute top-1/2 left-2 w-1 h-1 bg-white/30 rounded-full animate-float'
							style={{ animationDelay: '2.5s' }}
						/>
					</div>
				</Tilt>

				{/* Glow effect mejorado */}
				<div
					className={`absolute inset-0 bg-gradient-to-br ${config.gradient} rounded-2xl blur-xl scale-110 -z-10 animate-glow-pulse opacity-40`}
				/>
			</div>
		);
  }

  // Diseño 3 - Estilo Visa Dorada Premium con Oro Real Brillante
   if (design === 'design3') {
     return (
				<div className='relative'>
					{/* Floating particles effect - oro brillante */}
					<div className='absolute inset-0 overflow-hidden pointer-events-none'>
						{[...Array(config.particles)].map((_, i) => (
							<div
								key={i}
								className={`absolute w-2 h-2 ${config.particleColor} rounded-full animate-float shadow-lg shadow-yellow-400/50`}
								style={{
									left: `${10 + i * 7}%`,
									top: `${10 + (i % 4) * 20}%`,
									animationDelay: `${i * 0.3}s`,
									animationDuration: `${2.5 + i * 0.2}s`,
								}}
							/>
						))}
						{/* Partículas doradas adicionales para más brillo */}
						{[...Array(8)].map((_, i) => (
							<div
								key={`extra-${i}`}
								className='absolute w-1 h-1 bg-yellow-300/70 rounded-full animate-float shadow-sm shadow-yellow-300/60'
								style={{
									left: `${15 + i * 9}%`,
									top: `${15 + (i % 3) * 25}%`,
									animationDelay: `${i * 0.4}s`,
									animationDuration: `${3 + i * 0.25}s`,
								}}
							/>
						))}
					</div>

					<Tilt
						className={config.size}
						tiltMaxAngleX={15}
						tiltMaxAngleY={15}
						perspective={1300}
						scale={1.05}
						transitionSpeed={500}
						gyroscope={true}
						glareEnable={true}
						glareMaxOpacity={0.4}
						glareColor='#ffd700'
						glarePosition='all'
						glareBorderRadius='16px'
						reset={true}
					>
						<div
							className={`relative w-full h-full bg-gradient-to-br ${config.gradient} rounded-2xl shadow-2xl shadow-yellow-500/30 overflow-hidden touch-manipulation`}
						>
							{/* Oro real background pattern */}
							<div className='absolute inset-0 opacity-20'>
								<div className='absolute top-0 left-0 w-full h-full bg-gradient-to-br from-yellow-300/40 to-transparent' />
								<div className='absolute bottom-0 right-0 w-2/3 h-2/3 bg-gradient-to-tl from-amber-300/30 to-transparent' />
								<div className='absolute top-1/2 left-1/2 w-1/2 h-1/2 bg-gradient-to-r from-yellow-400/25 to-amber-400/25 transform -translate-x-1/2 -translate-y-1/2 rounded-full blur-xl' />
							</div>

							{/* Efectos de brillo en loop continuo */}
							<div className='absolute inset-0'>
								{/* Shimmer effect principal */}
								<div className='absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent transform -skew-x-12 animate-shimmer' />

								{/* Resplandor dorado rotativo */}
								<div className='absolute top-1/2 left-1/2 w-32 h-1 bg-gradient-to-r from-transparent via-yellow-200/60 to-transparent transform -translate-x-1/2 -translate-y-4 animate-spin-slow' />

								{/* Ondas de brillo */}
								<div className='absolute inset-0 bg-gradient-to-r from-yellow-400/0 via-yellow-300/20 to-yellow-400/0 animate-wave' />

								{/* Pulso dorado */}
								<div className='absolute top-0 right-0 w-1/3 h-1/3 bg-gradient-to-bl from-yellow-300/30 to-transparent animate-pulse-glow' />
								<div
									className='absolute bottom-0 left-0 w-1/3 h-1/3 bg-gradient-to-tr from-amber-300/30 to-transparent animate-pulse-glow'
									style={{ animationDelay: '1s' }}
								/>
							</div>

							{/* Content */}
							<div className='relative z-10 p-6 h-full flex flex-col justify-between text-white'>
								{/* Header - Oro Premium */}
								<div className='flex justify-between items-start'>
									<div className='flex gap-2 items-center'>
										<div className='w-4 h-4 bg-gradient-to-r from-yellow-400 to-amber-400 rounded-md shadow-lg shadow-yellow-400/40'></div>
										<p className='text-yellow-50 text-sm font-light tracking-wide drop-shadow-sm'>ÍNTIMA PREMIUM</p>
									</div>
									<div className='text-right'>
										<div className='w-10 h-10 rounded-full flex justify-center  -translate-y-2.5'>
											<Image
												src='/logo-sin-fondo.webp'
												alt='Intima Estética'
												width={120}
												height={120}
												className='h-10 w-10 object-cover brightness-0 invert'
												priority
											/>
										</div>
									</div>
								</div>

								{/* Center content - Oro Brillante */}
								<div className='text-center'>
									<div className='mb-4'>
										<div className='text-3xl font-light text-yellow-50 mb-1 tracking-wider drop-shadow-lg'>{value}</div>
										<div className='w-16 h-px bg-gradient-to-r from-transparent via-yellow-300 to-transparent mx-auto shadow-sm'></div>
									</div>
									<p className='text-yellow-100/90 text-sm font-light drop-shadow-sm'>Gift Card Premium</p>
								</div>

								{/* Footer - Elegante */}
								<div className='flex justify-between items-end'>
									<div className='text-sm text-yellow-50/95 font-light text-left'>
										<p className='mb-1 drop-shadow-sm'>
											Para <span className='font-medium'>{recipient}</span>
										</p>
										<p className='drop-shadow-sm'>
											De <span className='font-medium'>{sender}</span>
										</p>
									</div>
									<div className='text-right text-sm text-yellow-50/95 font-light'>
										<p className='mb-1 drop-shadow-sm'>Código</p>
										<p className='font-mono text-yellow-200 tracking-wider drop-shadow-sm'>{code}</p>
									</div>
								</div>
							</div>

							{/* Efectos de brillo adicionales */}
							<div
								className='absolute top-2 right-2 w-2 h-2 bg-yellow-300/60 rounded-full animate-float shadow-lg shadow-yellow-300/50'
								style={{ animationDelay: '0.5s' }}
							/>
							<div
								className='absolute bottom-3 left-3 w-1.5 h-1.5 bg-amber-300/50 rounded-full animate-float shadow-md shadow-amber-300/40'
								style={{ animationDelay: '1.5s' }}
							/>
							<div
								className='absolute top-1/2 right-4 w-1 h-1 bg-yellow-400/70 rounded-full animate-float shadow-sm shadow-yellow-400/60'
								style={{ animationDelay: '2s' }}
							/>
						</div>
					</Tilt>

					{/* Glow exterior dorado intenso */}
					<div
						className={`absolute inset-0 bg-gradient-to-br ${config.gradient} rounded-2xl blur-xl scale-105 -z-10 animate-glow-pulse opacity-30`}
					/>

					{/* Anillo de resplandor exterior */}
					<div className='absolute inset-0 bg-gradient-to-br from-yellow-400/20 via-transparent to-amber-400/20 rounded-2xl blur-2xl scale-110 -z-20 animate-pulse-slow opacity-40' />
				</div>
			);
   }

  // Diseño 1 con efectos mejorados
  return (
		<div className='relative'>
			{/* Floating particles effect - más intenso */}
			<div className='absolute inset-0 overflow-hidden pointer-events-none'>
				{[...Array(config.particles)].map((_, i) => (
					<div
						key={i}
						className={`absolute w-2 h-2 ${config.particleColor} rounded-full animate-float`}
						style={{
							left: `${10 + i * 8}%`,
							top: `${5 + (i % 5) * 20}%`,
							animationDelay: `${i * 0.3}s`,
							animationDuration: `${2 + i * 0.2}s`,
						}}
					/>
				))}
				{/* Partículas adicionales más pequeñas */}
				{[...Array(6)].map((_, i) => (
					<div
						key={`small-${i}`}
						className='absolute w-1 h-1 bg-white/30 rounded-full animate-float'
						style={{
							left: `${25 + i * 12}%`,
							top: `${10 + (i % 3) * 30}%`,
							animationDelay: `${i * 0.6}s`,
							animationDuration: `${3.5 + i * 0.3}s`,
						}}
					/>
				))}
			</div>

			<Tilt
				className={config.size}
				tiltMaxAngleX={16}
				tiltMaxAngleY={16}
				perspective={1300}
				scale={1.04}
				transitionSpeed={900}
				gyroscope={true}
				glareEnable={true}
				glareMaxOpacity={0.32}
				glareColor='#ffffff'
				glarePosition='all'
				glareBorderRadius='16px'
				reset={true}
			>
				<div
					className={`relative w-full h-full bg-gradient-to-br ${config.gradient} rounded-2xl shadow-2xl overflow-hidden touch-manipulation`}
				>
					{/* Animated background pattern - más efectos */}
					<div className='absolute inset-0 opacity-28'>
						<div className='absolute top-0 left-0 w-full h-full bg-gradient-to-br from-white/45 to-transparent animate-shimmer' />
						<div className='absolute -top-1/2 -right-1/2 w-full h-full bg-gradient-to-bl from-white/28 to-transparent rounded-full animate-glow-pulse' />
						<div className='absolute top-1/4 left-1/4 w-1/2 h-1/2 bg-gradient-to-r from-transparent via-white/18 to-transparent rounded-full animate-float' />
						<div className='absolute bottom-0 right-0 w-2/3 h-2/3 bg-gradient-to-tl from-white/12 to-transparent animate-slide' />
					</div>

					{/* Content */}
					<div className='relative z-10 p-4 md:p-6 h-full flex flex-col justify-between text-white'>
						{/* Header */}
						<div className='flex justify-between items-start'>
							<div>
								<h3 className='text-base md:text-xl font-bold mb-1'>Gift Card</h3>
								<p className='text-white/85 text-xs md:text-sm'>Íntima Estética</p>
							</div>
							<div className='w-6 h-6 md:w-8 md:h-8  rounded-full flex items-center justify-center backdrop-blur-sm animate-glow-pulse'>
								<Image
									src='/logo-sin-fondo.webp'
									alt='Intima Estética'
									width={120}
									height={120}
									className='h-8 w-8 object-cover brightness-0 invert'
									priority
								/>
							</div>
						</div>

						{/* Center content */}
						<div className='text-center'>
							<div className='text-xl md:text-3xl font-bold mb-1 md:mb-2 animate-glow-pulse'>{value}</div>
							<p className='text-white/85 text-xs md:text-sm'>Valor del regalo</p>
						</div>

						{/* Footer */}
						<div className='flex justify-between items-end'>
							<div className='text-xs text-white/85 text-left'>
								<p>Para {recipient}</p>
								<p>De {sender}</p>
							</div>
							<div className='text-right text-xs text-white/85'>
								<p>Válida hasta</p>
								<p className='font-semibold'>31/12/2025</p>
							</div>
						</div>
					</div>

					{/* Efectos holográficos mejorados */}
					<div className='absolute inset-0 bg-gradient-to-r from-transparent via-white/18 to-transparent transform -skew-x-12 animate-slide opacity-0 hover:opacity-100 transition-opacity duration-1000' />
					<div className='absolute top-0 right-0 w-1/4 h-1/4 bg-gradient-to-bl from-white/12 to-transparent animate-glow-pulse' />

					{/* Elementos flotantes adicionales */}
					<div
						className='absolute top-2 right-2 w-3 h-3 bg-white/22 rounded-full animate-float'
						style={{ animationDelay: '1s' }}
					/>
					<div
						className='absolute bottom-4 left-4 w-2 h-2 bg-white/18 rounded-full animate-float'
						style={{ animationDelay: '2s' }}
					/>
					<div
						className='absolute top-1/3 right-1/4 w-1 h-1 bg-white/25 rounded-full animate-float'
						style={{ animationDelay: '3s' }}
					/>
				</div>
			</Tilt>

			{/* Glow effect mejorado */}
			<div
				className={`absolute inset-0 bg-gradient-to-br ${config.gradient} rounded-2xl blur-xl scale-110 -z-10 animate-glow-pulse opacity-35`}
			/>
		</div>
	);
}