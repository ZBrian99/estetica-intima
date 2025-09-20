import Link from 'next/link';
import { categories } from '@/data/categoriesData';
import CategoryTile from './CategoryTile';

const Categorias = () => {
	return (
		<section className='px-4 py-16 bg-primary-50'>
			<div className='max-w-7xl mx-auto'>
				<div className='text-center mb-8 md:mb-10'>
					<h2 className='text-3xl md:text-4xl font-bold text-gray-900 mb-2 md:mb-3'>Descubre nuestros tratamientos.</h2>
					<p className='text-sm md:text-base text-gray-600 max-w-3xl mx-auto'>
						Explora nuestras categorías y encuentra el tratamiento perfecto para ti.
					</p>
				</div>
				<div className='grid grid-cols-1 us:grid-cols-6 sm:grid-cols-24 gap-3 md:gap-4 lg:gap-6 min-h-[60rem] sm:min-h-[30rem] md:min-h-[35rem] lg:min-h-[40rem]'>
					{categories.map((cat) => (
						<CategoryTile key={cat.id} category={cat} />
					))}
				</div>

				<div className='text-center mt-10'>
					<Link
						href='/servicios'
						className='inline-flex items-center px-6 py-3 md:px-8 md:py-4 bg-primary-600 text-white font-semibold rounded-full hover:bg-primary-700 transition-colors duration-200 shadow-lg hover:shadow-xl'
					>
						Ver todos los servicios
						<svg className='w-5 h-5 ml-2' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
							<path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M9 5l7 7-7 7' />
						</svg>
					</Link>
				</div>
			</div>
		</section>
	);
};

export default Categorias;
