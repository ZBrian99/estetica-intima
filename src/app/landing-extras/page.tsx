import AntesYDespues from "@/components/AntesYDespues";
import AntesYDespuesNoComparator from "@/components/AntesYDespuesNoComparator";
import Populares from "@/components/Populares";
import PorQueElegirnos from "@/components/PorQueElegirnos";
import Testimonios from "@/components/Testimonios";
import ContactoYUbicacion from "@/components/ContactoYUbicacion";
import Footer from "@/components/layout/Footer";
import Link from "next/link";
import { FaWhatsapp, FaListUl } from "react-icons/fa";
import { Clock, Users } from "lucide-react";

export default function SectionsExtras() {
  return (
		<main className='min-h-screen bg-white'>
			{/* Secciones complementarias bajo Servicios Populares */}
			<div className='mx-auto max-w-7xl px-4 py-10 space-y-12'>
				{/* 1) Por qué elegirnos (con fallback agregado dentro del componente) */}
				<PorQueElegirnos />

				{/* 2) Números nos respaldan está incluido dentro del mismo componente con estilo mejorado */}

				{/* 3) Testimonios - mantener tal cual */}
				<section>
					<Testimonios />
				</section>

				{/* 4) CTA con 2 botones: WhatsApp y Ver servicios */}
				<section className='rounded-2xl bg-gradient-to-r bg-primary-50 p-8'>
					{/* CTA Section */}
					<div className='text-center mt-12'>
						<h3 className='text-2xl font-bold text-gray-900 mb-4'>¿Lista para Experimentar la Diferencia?</h3>
						<p className='text-gray-600 mb-6 max-w-2xl mx-auto'>
							Vení a conocer nuestro centro y descubrí por qué somos la elección preferida en Mar del Plata
						</p>
						<div className='flex flex-col sm:flex-row gap-4 justify-center'>
							<button className='inline-flex items-center px-8 py-4 bg-gradient-to-r from-primary-500 to-rose-400 text-white font-semibold rounded-full hover:from-primary-600 hover:to-rose-500 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105'>
								<Users className='w-5 h-5 mr-2' />
								Consultanos por whatsapp
							</button>
							<button className='inline-flex items-center px-8 py-4 bg-white text-gray-700 font-semibold rounded-full border-2 border-gray-200 hover:border-primary-300 hover:text-primary-600 transition-all duration-300 shadow-lg hover:shadow-xl'>
								<Clock className='w-5 h-5 mr-2' />
								Ver Servicios Disponibles
							</button>
						</div>
					</div>
				</section>

				{/* 5) Contacto y Ubicación: izquierda contacto, derecha mapa, horarios debajo del mapa */}
				<ContactoYUbicacion />
			</div>

			{/* Footer al final */}
			<Footer />
		</main>
	);
}