// import type { Metadata } from 'next'
import { Inter, Outfit } from 'next/font/google'
import '@/styles/globals.css'
import { Metadata } from 'next'
import { Suspense } from 'react'
import Providers from './providers'
import Footer from '@/components/layout/Footer'
import LoadingSpinner from '@/components/common/LoadingSpinner'
import PageLoader from '@/components/common/PageLoader'
import ClientCartAndNav from '@/components/layout/ClientCartAndNav'
// import CartSheet from '@/components/services/CartSheet'

const inter = Inter({
  variable: '--font-inter-sans',
  subsets: ['latin'],
  display: 'swap',
})

const outfit = Outfit({
  variable: '--font-outfit-serif',
  subsets: ['latin'],
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Íntima - Centro de Estética',
  description: 'Centro de estética especializado en tratamientos corporales, faciales y depilación láser.',
}

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang='es' className={`font-sans ${inter.variable} ${outfit.variable}`}>
      <body>
        <Providers>
          <ClientCartAndNav />
          <Suspense fallback={<PageLoader />}>{children}</Suspense>
          {/* <Footer/> */}
        </Providers>
      </body>
    </html>
  )
}
