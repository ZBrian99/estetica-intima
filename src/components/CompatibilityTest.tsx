'use client';

import { useEffect, useState } from 'react';

interface DeviceInfo {
	userAgent: string;
	platform: string;
	language: string;
	screenResolution: string;
	viewportSize: string;
	colorDepth: number;
	pixelRatio: number;
	touchSupport: boolean;
	cookiesEnabled: boolean;
	onlineStatus: boolean;
}

const CompatibilityTest = () => {
	const [deviceInfo, setDeviceInfo] = useState<DeviceInfo | null>(null);

	useEffect(() => {
		const getDeviceInfo = (): DeviceInfo => {
			return {
				userAgent: navigator.userAgent,
				platform: navigator.platform,
				language: navigator.language,
				screenResolution: `${screen.width}x${screen.height}`,
				viewportSize: `${window.innerWidth}x${window.innerHeight}`,
				colorDepth: screen.colorDepth,
				pixelRatio: window.devicePixelRatio,
				touchSupport: 'ontouchstart' in window,
				cookiesEnabled: navigator.cookieEnabled,
				onlineStatus: navigator.onLine,
			};
		};

		setDeviceInfo(getDeviceInfo());

		const handleResize = () => {
			setDeviceInfo((prev) =>
				prev
					? {
							...prev,
							viewportSize: `${window.innerWidth}x${window.innerHeight}`,
					  }
					: null
			);
		};

		const handleOnlineStatus = () => {
			setDeviceInfo((prev) =>
				prev
					? {
							...prev,
							onlineStatus: navigator.onLine,
					  }
					: null
			);
		};

		window.addEventListener('resize', handleResize);
		window.addEventListener('online', handleOnlineStatus);
		window.addEventListener('offline', handleOnlineStatus);

		return () => {
			window.removeEventListener('resize', handleResize);
			window.removeEventListener('online', handleOnlineStatus);
			window.removeEventListener('offline', handleOnlineStatus);
		};
	}, []);

	const colorPalette = [
		{ name: 'Primary 50', value: '#f8f5ff', var: '--color-primary-50' },
		{ name: 'Primary 100', value: '#f0e9ff', var: '--color-primary-100' },
		{ name: 'Primary 200', value: '#e1d4ff', var: '--color-primary-200' },
		{ name: 'Primary 300', value: '#c9b3ff', var: '--color-primary-300' },
		{ name: 'Primary 400', value: '#a885ff', var: '--color-primary-400' },
		{ name: 'Primary 500', value: '#7c2bc6', var: '--color-primary-500' },
		{ name: 'Primary 600', value: '#6b23a8', var: '--color-primary-600' },
		{ name: 'Primary 700', value: '#5a1c8a', var: '--color-primary-700' },
		{ name: 'Primary 800', value: '#48156c', var: '--color-primary-800' },
		{ name: 'Primary 900', value: '#360e4e', var: '--color-primary-900' },
	];

	const grayPalette = [
		{ name: 'Gray 50', value: '#fafafa', var: '--color-gray-50' },
		{ name: 'Gray 100', value: '#f5f5f5', var: '--color-gray-100' },
		{ name: 'Gray 200', value: '#eeeeee', var: '--color-gray-200' },
		{ name: 'Gray 300', value: '#e0e0e0', var: '--color-gray-300' },
		{ name: 'Gray 400', value: '#bdbdbd', var: '--color-gray-400' },
		{ name: 'Gray 500', value: '#9e9e9e', var: '--color-gray-500' },
		{ name: 'Gray 600', value: '#757575', var: '--color-gray-600' },
		{ name: 'Gray 700', value: '#616161', var: '--color-gray-700' },
		{ name: 'Gray 800', value: '#424242', var: '--color-gray-800' },
		{ name: 'Gray 900', value: '#212121', var: '--color-gray-900' },
	];

	// Componente para las líneas de transparencia que sobresalen del contenedor
	const TransparencyLines = () => (
		<>
			<div className='absolute -top-4 -bottom-4 w-full flex justify-center gap-2'>
				<div className='h-full w-5 bg-black z-0'></div>
				<div className='h-full w-5 bg-gradient-to-b from-red-500 via-green-500 to-blue-500 border border-orange-500 z-0'></div>
				<div className='h-full w-5 bg-white border border-gray-500 z-0'></div>
				<div className='h-full w-5 bg-primary-500 z-0'></div>
			</div>
		</>
	);

	return (
		<div className='w-full  '>
			<div className='container mx-auto py-8 px-4 max-w-7xl'>
				<div className='text-center mb-12'>
					<h1 className='text-4xl font-bold text-gray-900 mb-4'>Prueba de Compatibilidad Gradientes CSS</h1>
				</div>

				{/* Pruebas de Gradientes */}
				<section className='mb-16'>

					{/* Colores planos */}
					<div className='mb-12'>
						<h3 className='text-xl font-semibold text-gray-800 mb-6'>Colores Planos</h3>
						<div className='grid grid-cols-1 sm:grid-cols-2 gap-4'>
							<div className='relative'>
								<TransparencyLines />
								<div className='test-box bg-primary relative z-10'>Color Plano Tailwind</div>
							</div>
							<div className='relative'>
								<TransparencyLines />
								<div className='test-box bg-primary/70 relative z-10'>Color con Transparencia Tailwind</div>
							</div>
						</div>
					</div>

					{/* Gradientes sin transparencia */}
					<div className='mb-12'>
						<h3 className='text-xl font-semibold text-gray-800 mb-6'>Gradientes Sin Transparencia</h3>
						<div className='grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-5 xl:grid-cols-4 gap-4'>
							{/* Sin fallback */}
							<div className='relative'>
								<TransparencyLines />
								<div className='test-box bg-gradient-to-br from-blue-500 to-purple-600 relative z-10'>
									Gradient Tailwind Base
								</div>
							</div>
							<div className='relative'>
								<TransparencyLines />
								<div className='test-box gradient-no-alpha-css-image relative z-10'>Gradient CSS Image</div>
							</div>
							<div className='relative'>
								<TransparencyLines />
								<div className='test-box gradient-no-alpha-css-background relative z-10'>Gradient CSS Background</div>
							</div>
							<div className='relative'>
								<TransparencyLines />
								<div className='test-box gradient-no-alpha-util-image relative z-10'>Gradient Utility Image</div>
							</div>
							<div className='relative'>
								<TransparencyLines />
								<div className='test-box gradient-no-alpha-util-background relative z-10'>
									Gradient Utility Background
								</div>
							</div>

							{/* Con fallback */}
							<div className='relative'>
								<TransparencyLines />
								<div className='test-box bg-red-500 bg-gradient-to-br from-blue-500 to-purple-600 relative z-10'>
									Gradient Tailwind con Fallback
								</div>
							</div>
							<div className='relative'>
								<TransparencyLines />
								<div className='test-box gradient-no-alpha-fallback-css-image-color relative z-10'>
									Gradient CSS Image + Color
								</div>
							</div>
							<div className='relative'>
								<TransparencyLines />
								<div className='test-box gradient-no-alpha-fallback-css-background relative z-10'>
									Gradient CSS Background Fallback
								</div>
							</div>
							<div className='relative'>
								<TransparencyLines />
								<div className='test-box gradient-no-alpha-fallback-css-background-double relative z-10'>
									Gradient CSS Background Doble
								</div>
							</div>
							<div className='relative'>
								<TransparencyLines />
								<div className='test-box gradient-no-alpha-fallback-util-image-color relative z-10'>
									Gradient Utility Image + Color
								</div>
							</div>
							<div className='relative'>
								<TransparencyLines />
								<div className='test-box gradient-no-alpha-fallback-util-background relative z-10'>
									Gradient Utility Background Fallback
								</div>
							</div>
							<div className='relative'>
								<TransparencyLines />
								<div className='test-box gradient-no-alpha-fallback-util-background-double relative z-10'>
									Gradient Utility Background Doble
								</div>
							</div>
						</div>
					</div>

					{/* Gradientes con transparencia */}
					<div className='mb-12'>
						<h3 className='text-xl font-semibold text-gray-800 mb-6'>Gradientes Con Transparencia</h3>
						<div className='grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-5 xl:grid-cols-4 gap-4'>
							{/* Sin fallback */}
							<div className='relative'>
								<TransparencyLines />
								<div className='test-box bg-gradient-to-br from-blue-500/80 to-purple-600/60 relative z-10'>
									Gradient Transparencia Tailwind
								</div>
							</div>
							<div className='relative'>
								<TransparencyLines />
								<div className='test-box gradient-alpha-css-image relative z-10'>Gradient Alpha CSS Image</div>
							</div>
							<div className='relative'>
								<TransparencyLines />
								<div className='test-box gradient-alpha-css-background relative z-10'>
									Gradient Alpha CSS Background
								</div>
							</div>
							<div className='relative'>
								<TransparencyLines />
								<div className='test-box gradient-alpha-util-image relative z-10'>Gradient Alpha Utility Image</div>
							</div>
							<div className='relative'>
								<TransparencyLines />
								<div className='test-box gradient-alpha-util-background relative z-10'>
									Gradient Alpha Utility Background
								</div>
							</div>

							{/* Con fallback */}
							<div className='relative'>
								<TransparencyLines />
								<div className='test-box bg-red-500 bg-gradient-to-br from-blue-500/80 to-purple-600/60 relative z-10'>
									Gradient Alpha Tailwind Fallback
								</div>
							</div>
							<div className='relative'>
								<TransparencyLines />
								<div className='test-box gradient-alpha-fallback-css-image-color relative z-10'>
									Gradient Alpha CSS Image + Color
								</div>
							</div>
							<div className='relative'>
								<TransparencyLines />
								<div className='test-box gradient-alpha-fallback-css-background relative z-10'>
									Gradient Alpha CSS Background Fallback
								</div>
							</div>
							<div className='relative'>
								<TransparencyLines />
								<div className='test-box gradient-alpha-fallback-css-background-double relative z-10'>
									Gradient Alpha CSS Background Doble
								</div>
							</div>
							<div className='relative'>
								<TransparencyLines />
								<div className='test-box gradient-alpha-fallback-util-image-color relative z-10'>
									Gradient Alpha Utility Image + Color
								</div>
							</div>
							<div className='relative'>
								<TransparencyLines />
								<div className='test-box gradient-alpha-fallback-util-background relative z-10'>
									Gradient Alpha Utility Background Fallback
								</div>
							</div>
							<div className='relative'>
								<TransparencyLines />
								<div className='test-box gradient-alpha-fallback-util-background-double relative z-10'>
									Gradient Alpha Utility Background Doble
								</div>
							</div>
						</div>
					</div>
				</section>

				{/* Tipografías */}
				<section className='mb-16'>
					<h2 className='text-3xl font-bold text-gray-900 mb-8 text-center'>Tipografías del Proyecto</h2>
					<div className='grid grid-cols-1 gap-8'>
						<div className='bg-white rounded-lg p-6 shadow-lg'>
							<h3 className='text-xl font-semibold text-gray-800 mb-4'>Outfit (Serif)</h3>
							<div className='space-y-3'>
								<p className='font-serif text-xs'>Extra Small - 12px - Lorem ipsum dolor sit amet</p>
								<p className='font-serif text-sm'>Small - 14px - Lorem ipsum dolor sit amet consectetur</p>
								<p className='font-serif text-base'>Base - 16px - Lorem ipsum dolor sit amet consectetur adipiscing</p>
								<p className='font-serif text-lg'>
									Large - 18px - Lorem ipsum dolor sit amet consectetur adipiscing elit
								</p>
								<p className='font-serif text-xl'>
									Extra Large - 20px - Lorem ipsum dolor sit amet consectetur adipiscing elit sed
								</p>
								<p className='font-serif text-2xl'>
									2XL - 24px - Lorem ipsum dolor sit amet consectetur adipiscing elit sed do
								</p>
								<p className='font-serif text-3xl'>
									3XL - 30px - Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod
								</p>
							</div>
							<div className='mt-4 space-y-2'>
								<p className='font-serif font-thin'>
									Thin 100 - Lorem ipsum dolor sit amet consectetur adipiscing elit
								</p>
								<p className='font-serif font-light'>
									Light 300 - Lorem ipsum dolor sit amet consectetur adipiscing elit
								</p>
								<p className='font-serif font-normal'>
									Regular 400 - Lorem ipsum dolor sit amet consectetur adipiscing elit
								</p>
								<p className='font-serif font-medium'>
									Medium 500 - Lorem ipsum dolor sit amet consectetur adipiscing elit
								</p>
								<p className='font-serif font-semibold'>
									Semibold 600 - Lorem ipsum dolor sit amet consectetur adipiscing elit
								</p>
								<p className='font-serif font-bold'>
									Bold 700 - Lorem ipsum dolor sit amet consectetur adipiscing elit
								</p>
								<p className='font-serif font-extrabold'>
									Extra Bold 800 - Lorem ipsum dolor sit amet consectetur adipiscing elit
								</p>
								<p className='font-serif font-black'>
									Black 900 - Lorem ipsum dolor sit amet consectetur adipiscing elit
								</p>
							</div>
						</div>
						<div className='bg-white rounded-lg p-6 shadow-lg'>
							<h3 className='text-xl font-semibold text-gray-800 mb-4'>Inter (Sans-serif)</h3>
							<div className='space-y-3'>
								<p className='font-sans text-xs'>Extra Small - 12px - Lorem ipsum dolor sit amet</p>
								<p className='font-sans text-sm'>Small - 14px - Lorem ipsum dolor sit amet consectetur</p>
								<p className='font-sans text-base'>Base - 16px - Lorem ipsum dolor sit amet consectetur adipiscing</p>
								<p className='font-sans text-lg'>
									Large - 18px - Lorem ipsum dolor sit amet consectetur adipiscing elit
								</p>
								<p className='font-sans text-xl'>
									Extra Large - 20px - Lorem ipsum dolor sit amet consectetur adipiscing elit sed
								</p>
								<p className='font-sans text-2xl'>
									2XL - 24px - Lorem ipsum dolor sit amet consectetur adipiscing elit sed do
								</p>
								<p className='font-sans text-3xl'>
									3XL - 30px - Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod
								</p>
							</div>
							<div className='mt-4 space-y-2'>
								<p className='font-sans font-thin'>Thin 100 - Lorem ipsum dolor sit amet consectetur adipiscing elit</p>
								<p className='font-sans font-light'>
									Light 300 - Lorem ipsum dolor sit amet consectetur adipiscing elit
								</p>
								<p className='font-sans font-normal'>
									Regular 400 - Lorem ipsum dolor sit amet consectetur adipiscing elit
								</p>
								<p className='font-sans font-medium'>
									Medium 500 - Lorem ipsum dolor sit amet consectetur adipiscing elit
								</p>
								<p className='font-sans font-semibold'>
									Semibold 600 - Lorem ipsum dolor sit amet consectetur adipiscing elit
								</p>
								<p className='font-sans font-bold'>Bold 700 - Lorem ipsum dolor sit amet consectetur adipiscing elit</p>
								<p className='font-sans font-extrabold'>
									Extra Bold 800 - Lorem ipsum dolor sit amet consectetur adipiscing elit
								</p>
								<p className='font-sans font-black'>
									Black 900 - Lorem ipsum dolor sit amet consectetur adipiscing elit
								</p>
							</div>
						</div>
					</div>
				</section>

				{/* Paleta de Colores */}
				<section className='mb-16'>
					<h2 className='text-3xl font-bold text-gray-900 mb-8 text-center'>Paleta de Colores</h2>
					<div className='grid grid-cols-1 lg:grid-cols-2 gap-8'>
						<div className='bg-white rounded-lg p-6 shadow-lg'>
							<h3 className='text-xl font-semibold text-gray-800 mb-4'>Colores Primarios</h3>
							<div className='grid grid-cols-2 gap-3'>
								{colorPalette.map((color) => (
									<div key={color.name} className='flex items-center space-x-3'>
										<div
											className='w-12 h-12 rounded-lg shadow-md border border-gray-200'
											style={{ backgroundColor: color.value }}
										></div>
										<div>
											<p className='font-medium text-sm text-gray-900'>{color.name}</p>
											<p className='text-xs text-gray-600 font-mono'>{color.value}</p>
											<p className='text-xs text-gray-500 font-mono'>{color.var}</p>
										</div>
									</div>
								))}
							</div>
						</div>

						<div className='bg-white rounded-lg p-6 shadow-lg'>
							<h3 className='text-xl font-semibold text-gray-800 mb-4'>Escala de Grises</h3>
							<div className='grid grid-cols-2 gap-3'>
								{grayPalette.map((color) => (
									<div key={color.name} className='flex items-center space-x-3'>
										<div
											className='w-12 h-12 rounded-lg shadow-md border border-gray-200'
											style={{ backgroundColor: color.value }}
										></div>
										<div>
											<p className='font-medium text-sm text-gray-900'>{color.name}</p>
											<p className='text-xs text-gray-600 font-mono'>{color.value}</p>
											<p className='text-xs text-gray-500 font-mono'>{color.var}</p>
										</div>
									</div>
								))}
							</div>
						</div>
					</div>
				</section>

				{/* Información del Dispositivo */}
				<section className='mb-16'>
					<h2 className='text-3xl font-bold text-gray-900 mb-8 text-center'>Información del Dispositivo</h2>
					{deviceInfo && (
						<div className='bg-white rounded-lg p-6 shadow-lg'>
							<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
								<div>
									<h3 className='font-semibold text-gray-800 mb-2'>Navegador</h3>
									<p className='text-sm text-gray-600 break-all'>{deviceInfo.userAgent}</p>
								</div>
								<div>
									<h3 className='font-semibold text-gray-800 mb-2'>Plataforma</h3>
									<p className='text-sm text-gray-600'>{deviceInfo.platform}</p>
								</div>
								<div>
									<h3 className='font-semibold text-gray-800 mb-2'>Idioma</h3>
									<p className='text-sm text-gray-600'>{deviceInfo.language}</p>
								</div>
								<div>
									<h3 className='font-semibold text-gray-800 mb-2'>Resolución de Pantalla</h3>
									<p className='text-sm text-gray-600'>{deviceInfo.screenResolution}</p>
								</div>
								<div>
									<h3 className='font-semibold text-gray-800 mb-2'>Tamaño del Viewport</h3>
									<p className='text-sm text-gray-600'>{deviceInfo.viewportSize}</p>
								</div>
								<div>
									<h3 className='font-semibold text-gray-800 mb-2'>Profundidad de Color</h3>
									<p className='text-sm text-gray-600'>{deviceInfo.colorDepth} bits</p>
								</div>
								<div>
									<h3 className='font-semibold text-gray-800 mb-2'>Pixel Ratio</h3>
									<p className='text-sm text-gray-600'>{deviceInfo.pixelRatio}x</p>
								</div>
								<div>
									<h3 className='font-semibold text-gray-800 mb-2'>Soporte Táctil</h3>
									<p className='text-sm text-gray-600'>{deviceInfo.touchSupport ? '✅ Sí' : '❌ No'}</p>
								</div>
								<div>
									<h3 className='font-semibold text-gray-800 mb-2'>Cookies Habilitadas</h3>
									<p className='text-sm text-gray-600'>{deviceInfo.cookiesEnabled ? '✅ Sí' : '❌ No'}</p>
								</div>
								<div>
									<h3 className='font-semibold text-gray-800 mb-2'>Estado de Conexión</h3>
									<p className='text-sm text-gray-600'>{deviceInfo.onlineStatus ? '🟢 En línea' : '🔴 Sin conexión'}</p>
								</div>
							</div>
						</div>
					)}
				</section>
			</div>
		</div>
	);
};

export default CompatibilityTest;
