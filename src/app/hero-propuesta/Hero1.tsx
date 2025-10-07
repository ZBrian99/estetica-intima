import Image from 'next/image';
import Link from 'next/link';
import { FaWhatsapp } from 'react-icons/fa';
import { HiSparkles } from 'react-icons/hi2';

export default function Hero1() {
	return (
		<div className='relative h-full flex flex-col justify-center items-center text-center px-6 pt-8 pb-10 bg-primary-600 bg-gradient-to-br from-primary-800 via-primary-600 to-fuchsia-500 z-10 '>
			<Image
				src='https://image.pollinations.ai/prompt/modern%20luxury%20spa%20interior%20with%20soft%20lighting%20professional%20aesthetic%20clinic%20clean%20minimalist%20design?width=1200&height=800&model=flux-realism&enhance=true&nologo=true&seed=12345'
				alt='Fondo estética'
				fill
				className='object-cover opacity-20 -z-10'
				priority
			/>

			<h1 className='text-5xl md:text-[68px] font-bold  text-white leading-tight font-outfit'>ÍNTIMA</h1>
			<p className='mt-1 text-2xl md:text-3xl font-medium leading-tight text-white/90'>Centro de Estética Integral</p>

			{/* <p className='mt-4 md:mt-6 text-base md:text-xl text-white/90'>
				Tecnología de última generación para cuidar tu piel, tu cuerpo y tu bienestar
			</p> */}
			<p className='mt-4 md:mt-5 text-base md:text-xl text-white/90 max-w-2xl'>
				Cuidamos tu piel, tu cuerpo y tu bienestar con tecnología de última generación
			</p>
			{/* <p className='mt-4 md:mt-6 text-base md:text-xl text-white/90 max-w-2xl'>
				Cuidamos tu piel, tu cuerpo y tu bienestar con tecnología de última generación y atencion personalizada
			</p> */}
			{/* <p className='mt-1 text-base md:text-xl text-white/90 hidden sm:block '>
				Resultados visibles desde la primera sesión
			</p> */}

			<div className='mt-8 flex flex-col xs:flex-row items-center justify-center gap-4'>
				<Link
					href='/servicios'
					className='inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-white text-primary-900 font-semibold  hover:bg-white/90'
				>
					<HiSparkles className='w-5 h-5 text-primary-500' />
					Ver Tratamientos
				</Link>
				<Link
					href='/#contacto'
					className='inline-flex items-center gap-2 px-7 py-3.5 rounded-full border border-white text-white font-semibold hover:bg-white/10'
				>
					<FaWhatsapp className='w-5 h-5' />
					Contáctanos
				</Link>
			</div>
		</div>
	);
}
