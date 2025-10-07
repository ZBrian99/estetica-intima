'use client';
import Image from 'next/image';
import Link from 'next/link';
import { FaWhatsapp, FaVenus, FaMars } from 'react-icons/fa';
import { FiCheck, FiZap } from 'react-icons/fi';
import { HiOutlineSparkles } from 'react-icons/hi2';
import { RiShieldCheckLine } from 'react-icons/ri';
import { MdAccessTime } from 'react-icons/md';

export default function HeroDepilacionCenteredV2() {
	return (
		<section className='relative h-full flex flex-col justify-center items-center text-center px-6 pt-8 pb-10 text-white'>
			<div className='absolute inset-0 bg-teal-600 bg-gradient-to-r from-emerald-600 via-teal-600 to-cyan-700 -z-10' />
			<Image
				src='https://image.pollinations.ai/prompt/professional%20laser%20hair%20removal%20woman%20arm%20treatment%20modern%20aesthetic%20clinic%20emerald%20teal%20cyan%20tones%20soft%20lighting%20realistic%20photography?width=1400&height=900&model=flux-realism&enhance=true&nologo=true&seed=9102'
				alt='Fondo depilación'
				fill
				className='object-cover opacity-20 -z-10'
				priority
			/>

			<h2 className='text-[34px] md:text-6xl font-bold leading-tight font-outfit'>Depilación Definitiva</h2>
			{/* <p className="mt-1 text-xl md:text-2xl font-medium text-white/90">Tecnología láser de última generación para resultados permanentes</p> */}

			<p className='mt-4 text-base md:text-xl text-white/90'>
				Decile adiós al vello y dale la bienvenida a una piel suave todo el año
			</p>
			<p className='text-base md:text-xl text-white/90 hidden sm:block'>
				Tratamiento seguro y efectivo con resultados visibles desde la primera sesión
			</p>

			{/* Beneficios generales con ícono */}
			<div className='mt-6 hidden us:grid grid-cols-1 us:grid-cols-2 lg:grid-cols-4 gap-4 w-fit mb-4'>
				{[
					{ icon: HiOutlineSparkles, label: 'Piel suave al tacto' },
					{ icon: FiZap, label: 'Sesiones rápidas' },
					{ icon: RiShieldCheckLine, label: 'Sin más irritación' },
					{ icon: MdAccessTime, label: 'Resultados duraderos' },
				].map(({ icon: Icon, label }) => (
					<div
						key={label}
						className='inline-flex flex-col md:flex-row items-center justify-center gap-2 px-4 py-4 w-full rounded-lg bg-white/20 text-white us:max-w-30 xs:max-w-none'
					>
						<Icon className='w-5 h-5' aria-hidden />
						<span>{label}</span>
					</div>
				))}
			</div>

			{/* CTAs: Mujer / Hombre / Contacto */}
			<div className='mt-6 flex flex-col sm:flex-row items-center justify-center gap-4'>
				<Link
					href='/servicios?categories=depilacion&gender=FEMALE'
					className='inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full bg-white text-teal-900  font-semibold hover:bg-white/90'
				>
					<FaVenus className='w-5 h-5 text-emerald-600' aria-hidden />
					Depilación Femenina
				</Link>
				<Link
					href='/servicios?categories=depilacion&gender=MALE'
					className='inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full bg-white text-teal-900   font-semibold hover:bg-white/90 '
				>
					<FaMars className='w-5 h-5 text-cyan-700' aria-hidden />
					Depilación Masculina
				</Link>
			</div>
			{/* <Link
				href='/#contacto'
				className='mt-4 inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full border border-white text-white font-semibold hover:bg-white/10 w-64'
			>
				<FaWhatsapp className='w-5 h-5' aria-hidden /> Consultanos
			</Link> */}
		</section>
	);
}
