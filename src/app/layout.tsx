// import type { Metadata } from 'next';
import { Inter, Outfit, JetBrains_Mono } from 'next/font/google';
import './globals.css';
import { Metadata } from 'next';
import { Suspense } from 'react';
import Providers from './providers';
// import { FallBackLoader } from './(servicesOld)/serviciosOld/components/Extras';
import NavBar from '@/components/layout/NavBar';
import Footer from '@/components/layout/Footer';
import LoadingSpinner from '@/components/common/LoadingSpinner';
import PageLoader from '@/components/common/PageLoader';
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
					<NavBar />
          <Suspense fallback={<PageLoader />}>{children}</Suspense>
          {/* <Footer/> */}
				</Providers>
			</body>
		</html>
	);
}
