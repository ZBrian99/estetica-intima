export default function Loading() {
	return (
		<div className='fixed inset-0 bg-white/95 backdrop-blur-sm z-50 flex justify-center items-center'>
			<div className='flex flex-col items-center gap-6'>
				{/* Logo animado */}
				<div className='relative'>
					<div className='w-16 h-16 bg-gradient-to-br  rounded-2xl flex items-center justify-center text-white font-bold text-xl animate-pulse'>
						<img src='/logo-text-sin-fondo.webp' alt='logo intima' />
					</div>
					{/* Anillo giratorio */}
					{/* <div className='absolute inset-0 border-4 border-transparent border-t-primary-500 rounded-2xl animate-spin'></div> */}
				</div>

				{/* Texto */}
				<div className='text-center'>
					<h2 className='text-xl font-semibold text-gray-900 mb-2'>Estética Íntima</h2>
					<p className='text-gray-600'>Cargando...</p>
				</div>

				{/* Barra de progreso animada */}
				<div className='w-48 h-1 bg-gray-200 rounded-full overflow-hidden'>
					<div className='h-full bg-gradient-to-r from-primary-500 to-primary-600 rounded-full animate-pulse'></div>
				</div>
			</div>
		</div>
	);
}
