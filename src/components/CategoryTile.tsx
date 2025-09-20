import Image from 'next/image';
import { CategoryData } from '@/data/categoriesData';
import Link from 'next/link';

const CategoryTile = ({ category }: { category: CategoryData }) => {
	const href = `/servicios?categories=${category.slug}`;
	const isPrimary = category.variant === 'primary';

	const imageUrl = category.image?.url ?? '/images/placeholder-service.webp';
	const imageAlt = category.image?.alt ?? category.title;

	// queda pendiente añadir descripcion, cta y hover animacion, y responsive con la info adaptada a mobile

	return (
		<Link
			key={category.id}
			href={href}
			className={`group relative overflow-hidden rounded-2xl shadow-md hover:shadow-lg transition-transform duration-300   will-change-transform hover:-translate-y-0.5 hover:scale-[1.02] w-full ${category.className}`}
		>
			<div className='absolute inset-0 '>
				<Image
					src={imageUrl}
					alt={imageAlt}
					priority
					fill
					sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
					className='object-cover w-full h-full'
				/>
				<div className='absolute inset-0 bg-gradient-to-t from-black/60 via-black/25 to-transparent ' />
			</div>

			<div className='relative flex flex-col h-full w-full p-4 justify-end text-white'>
				<h3 className='text-base sm:text-base md:text-lg lg:text-xl us:whitespace-nowrap font-semibold'>
					{category.title}
				</h3>
				{category.subtitle && (
					<p className='text-xs md:text-sm text-gray-300 mt-1  us:whitespace-nowrap'>{category.subtitle}</p>
				)}
			</div>
		</Link>
	);
};

export default CategoryTile;
