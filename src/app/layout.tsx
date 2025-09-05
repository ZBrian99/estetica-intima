// import type { Metadata } from 'next';
import { Inter, Outfit, JetBrains_Mono } from 'next/font/google';
import './globals.css';
// import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
// import Link from 'next/link';
import { Metadata } from 'next';
import Link from 'next/link';
import { Suspense } from 'react';
import Providers from './providers';
import { FallBackLoader } from './servicios/components/Extras';
import AuthNav from '@/components/layout/AuthNav';
// import { useState } from 'react';

const inter = Inter({
	variable: '--font-inter-sans',
	subsets: ['latin'],
	display: 'swap',
});

const outfit = Outfit({
	variable: '--font-outfit-serif',
	subsets: ['latin'],
	display: 'swap',
});

const jetbrainsMono = JetBrains_Mono({
	variable: '--font-jetbrains-mono',
	subsets: ['latin'],
	display: 'swap',
});

export const metadata: Metadata = {
	title: 'Íntima - Centro de Estética',
	description: 'Centro de estética especializado en tratamientos corporales, faciales y depilación láser.',
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang='es' className={`${inter.variable} ${outfit.variable} ${jetbrainsMono.variable}`}>
			<body>
				<Providers>
					<nav className='bg-slate-800 h-16 px-4 text-white fixed z-40 top-0 left-0 right-0'>
						<ul className=' flex gap-2 h-full justify-end items-center'>
							<li>
								<Link className='py-2 px-2 hover:bg-slate-700 rounded' href='/'>
									Inicio
								</Link>
							</li>
							<li>
								<Link className='py-2 px-2 hover:bg-slate-700 rounded' href='/servicios'>
									Servicios
								</Link>
							</li>
							<AuthNav />
						</ul>
					</nav>
					<Suspense fallback={<FallBackLoader />}>
						{children}
					</Suspense>
				</Providers>
			</body>
		</html>
	);
}
