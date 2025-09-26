import Hero from '@/components/Hero';
import Categorias from '@/components/Categorias';
import Populares from '@/components/Populares';
// import AntesYDespues from '@/components/AntesYDespues';
import Testimonios from '@/components/Testimonios';
import PorQueElegirnos from '@/components/PorQueElegirnos';
import ContactoYUbicacion from '@/components/ContactoYUbicacion';
import Footer from '@/components/layout/Footer';
import AntesYDespues from '@/components/AntesYDespues';
import { FaClock, FaWhatsapp } from 'react-icons/fa';

export default function HomePage() {
	return (
		<main className='min-h-screen'>
			<Hero />
			<Categorias />
			<AntesYDespues />
			<Populares />
			<PorQueElegirnos />
			<Testimonios />
			{/* 4) CTA con 2 botones: WhatsApp y Ver servicios */}
			<ContactoYUbicacion />
			<section className='   p-8 py-20 pb-32'>
				{/* CTA Section */}
				<div className='text-center'>
					<h3 className='text-2xl font-bold text-gray-900 mb-4'>¿Lista para Experimentar la Diferencia?</h3>
					<p className='text-gray-600 mb-6 max-w-2xl mx-auto'>
						Vení a conocer nuestro centro y descubrí por qué somos la elección preferida en Mar del Plata
					</p>
					<div className='flex flex-col sm:flex-row gap-4 justify-center'>
						<button className='inline-flex items-center px-8 py-4 bg-gradient-to-r from-primary-500 to-rose-400 text-white font-semibold rounded-full hover:from-primary-600 hover:to-rose-500 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105'>
							<FaWhatsapp className='w-5 h-5 mr-2' />
							Consultanos por whatsapp
						</button>
						<button className='inline-flex items-center px-8 py-4 bg-white text-gray-700 font-semibold rounded-full border-2 border-gray-200 hover:border-primary-300 hover:text-primary-600 transition-all duration-300 shadow-lg hover:shadow-xl'>
							<FaClock className='w-5 h-5 mr-2' />
							Ver Servicios Disponibles
						</button>
					</div>
				</div>
			</section>
			<Footer />
		</main>
	);
}
