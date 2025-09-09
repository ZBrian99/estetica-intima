import Hero from '@/components/Hero';
import Categorias from '@/components/Categorias';
import Populares from '@/components/Populares';
// import AntesYDespues from '@/components/AntesYDespues';
import Testimonios from '@/components/Testimonios';
import PorQueElegirnos from '@/components/PorQueElegirnos';
import ContactoYUbicacion from '@/components/ContactoYUbicacion';
import Footer from '@/components/layout/Footer';

export default function HomePage() {
	return (
		<main className='min-h-screen'>
			<Hero />

			<Categorias />

			<Populares />

			{/* <AntesYDespues /> */}

			<PorQueElegirnos />

			<Testimonios />

			<ContactoYUbicacion />

			<Footer />
		</main>
	);
}
