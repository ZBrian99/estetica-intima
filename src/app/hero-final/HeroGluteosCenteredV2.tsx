'use client';
import Image from 'next/image';
import Link from 'next/link';
import { HiMiniSignal, HiOutlineSparkles, HiSignal } from 'react-icons/hi2';
import { MdFitnessCenter, MdOutlineSpa } from 'react-icons/md';
import { RiPulseLine } from 'react-icons/ri';
import { FaInfo, FaInfoCircle, FaPlusCircle, FaSpa, FaWhatsapp } from 'react-icons/fa';
import { FaHeart, FaPlus } from 'react-icons/fa6';
import { FiZap } from 'react-icons/fi';

const items = [
	{ icon: FiZap, title: 'Mio Up', benefit: 'Activa y tonifica el músculo' },
	{ icon: MdOutlineSpa, title: 'Maderoterapia', benefit: 'Moldea y mejora la textura de la piel' },
	{ icon: HiMiniSignal, title: 'Alpha Synergy', benefit: 'Reafirma y estimula el colágeno' },
];

export default function HeroGluteosCenteredV2() {
	return (
		<section className='relative h-full flex flex-col justify-center items-center text-center px-6 pt-8 pb-10 text-white'>
			<div className='absolute inset-0 bg-pink-600 bg-gradient-to-r from-rose-600 via-pink-600 to-red-700 -z-10' />
			<Image
				src='https://image.pollinations.ai/prompt/fitness%20woman%20performing%20glute%20activation%20exercise%20fully%20clothed%20in%20gym%20professional%20wellness%20studio%20clean%20aesthetic%20warm%20tones%20non%20explicit%20realistic%20photography?width=1400&height=900&model=flux-realism&enhance=true&nologo=true&seed=74121'
				alt='Fondo combo glúteos'
				fill
				className='object-cover opacity-15 -z-10'
				priority
			/>

			<h2 className='text-[34px] md:text-6xl font-bold leading-tight font-outfit'>Combo Full Glúteos</h2>

			<p className='mt-4 text-base md:text-xl text-white/90'>
				Tratamiento super completo para levantar, tonificar y realzar la textura de la piel
			</p>

			{/* Items con icono, nombre y beneficio */}
			<div className='mt-8 grid grid-cols-1 sm:grid-cols-3 gap-4 w-full px-4 max-w-5xl'>
				{items.map(({ icon: Icon, title, benefit }) => (
					<div
						key={title}
						className='rounded-xl bg-white/20 px-4 py-4 md:py-8 flex flex-col items-center text-center gap-2'
					>
						<div className='flex sm:flex-col items-center text-center gap-2'>
							<Icon className='w-6 sm:w-7 h-6 sm:h-7' aria-hidden />
							<div className=' text-base sm:text-lg font-semibold'>{title}</div>
						</div>
						<div className=' text-sm sm:text-base text-white/90'>{benefit}</div>
					</div>
				))}
			</div>
			{/* <div className='mt-8 grid grid-cols-1 sm:grid-cols-3 gap-4 w-full max-w-4xl'>
				{items.map(({ icon: Icon, title, benefit }) => (
					<div key={title} className='rounded-2xl bg-white/20  px-5 py-6'>
						<div className='flex flex-col items-center text-center gap-2'>
							<Icon className='w-7 h-7' aria-hidden />
							<div className='font-semibold'>{title}</div>
							<div className='text-sm text-white/85'>{benefit}</div>
						</div>
					</div>
				))}
			</div> */}

			{/* CTAs */}
			<div className='mt-10 flex flex-col xs:flex-row items-center justify-center gap-4'>
				<Link
					href='/servicios?search=combo+glúteos'
					className='inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-white text-rose-900 font-semibold hover:bg-white/90'
				>
					<FaHeart className='w-5 h-5 text-rose-500' aria-hidden /> Reservar ahora
				</Link>
				<Link
					href='/servicios?type=COMBO&bodyParts=gluteos'
					className='hidden xs:inline-flex items-center gap-2 px-7 py-3.5 rounded-full border border-white text-white font-semibold hover:bg-white/10'
				>
					Ver más combos
				</Link>
			</div>
		</section>
	);
}
