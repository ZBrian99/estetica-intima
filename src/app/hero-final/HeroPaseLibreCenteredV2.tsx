'use client';
import Image from 'next/image';
import Link from 'next/link';
import { HiMiniSignal, HiOutlineSparkles } from 'react-icons/hi2';
import { MdFitnessCenter, MdAir, MdCleaningServices, MdOutlineLightMode } from 'react-icons/md';
import { RiFireLine, RiPulseLine } from 'react-icons/ri';
import { GiMuscleUp } from 'react-icons/gi';
import { TbTemperature } from 'react-icons/tb';
import { FaFire, FaLightbulb, FaSearch, FaWhatsapp } from 'react-icons/fa';
import { FaCrown, FaRegFaceGrinBeam } from 'react-icons/fa6';
import { FiZap } from 'react-icons/fi';

const items = [
	{ icon: FiZap, label: 'Mio Up' },
	{ icon: HiMiniSignal, label: 'Alpha Synergy' },
	{ icon: RiPulseLine, label: 'PushUp' },
	{ icon: RiFireLine, label: 'Presoterapia' },
	{ icon: MdOutlineLightMode, label: 'LipoLED' },
	{ icon: FaRegFaceGrinBeam, label: 'Limpieza facial' },
];

export default function HeroPaseLibreCenteredV2() {
	return (
		<section className='relative h-full flex flex-col justify-center items-center text-center px-6 pt-8 pb-10 text-white'>
			<div className='absolute inset-0 bg-yellow-600  bg-gradient-to-r from-amber-600 via-yellow-600 to-orange-600 -z-10' />
			<Image
				src='https://image.pollinations.ai/prompt/modern%20wellness%20center%20combo%20treatments%20devices%20and%20facial%20care%20warm%20amber%20orange%20tones%20clean%20minimal%20studio%20realistic%20photography?width=1400&height=900&model=flux-realism&enhance=true&nologo=true&seed=73511'
				alt='Fondo pase libre'
				fill
				className='object-cover opacity-15 -z-10'
				priority
			/>

			<h2 className='text-[34px] md:text-6xl font-bold leading-tight font-outfit'>¡Llegó el Pase Libre!</h2>

			<p className='mt-4 text-base md:text-xl  text-white/90 px-2'>
				Dos horas de tratamiento solo para vos, a tu ritmo, a tu eleccion
			</p>

			{/* Items centrados con icono */}
			<div className='mt-8 grid grid-cols-2 sm:grid-cols-3 gap-3 md:gap-4 px-4 w-full max-w-lg'>
				{items.map(({ icon: Icon, label }) => (
					<div
						key={label}
						className='flex flex-col items-center justify-center gap-2 rounded-2xl bg-white/20 px-4 py-4'
					>
						<Icon className='w-6 h-6' aria-hidden />
						<span className='text-white/90 font-medium'>{label}</span>
					</div>
				))}
			</div>

			{/* CTAs */}
			<div className='mt-10 flex flex-col xs:flex-row items-center justify-center gap-4'>
				<Link
					href='/servicios'
					className='inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-white text-amber-800 font-semibold hover:bg-white/90'
				>
					<FaCrown className='w-5 h-5 text-amber-500' aria-hidden /> Quiero mi pase
				</Link>
				<Link
					href='/#contacto'
					className='hidden xs:inline-flex items-center gap-2 px-7 py-3.5 rounded-full border border-white text-white font-semibold hover:bg-white/10'
				>
					Ver detalles
				</Link>
			</div>
		</section>
	);
}
