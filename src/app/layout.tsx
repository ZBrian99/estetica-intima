// import type { Metadata } from 'next';
import '@/styles/globals.css';
import { Metadata } from 'next';
import { Suspense } from 'react';
import Providers from './providers';
import Footer from '@/components/layout/Footer';
import LoadingSpinner from '@/components/common/LoadingSpinner';
import PageLoader from '@/components/common/PageLoader';
import NavBar from '@/components/layout/NavBar';

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
		<html lang='es' className={`font-sans`}>
		{/* <html lang='es' className={`font-sans ${inter.variable} ${outfit.variable}`}> */}
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
