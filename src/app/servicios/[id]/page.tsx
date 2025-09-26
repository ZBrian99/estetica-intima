import { prisma } from '@/lib/prisma';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { getSelectFields, buildSort } from '@/services/api/servicesService';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ServiceResponse } from '@/schemas/servicesSchema';
import CleanServiceCard from '@/components/services/CleanServiceCard';
import ServiceActions from '@/components/services/ServiceActions';
import { FaStar, FaClock, FaVenus, FaMars, FaTag } from 'react-icons/fa6';

function formatCurrency(value: number) {
	return new Intl.NumberFormat('es-AR', { style: 'currency', currency: 'ARS', maximumFractionDigits: 0 }).format(value);
}

export default async function ServiceDetailByIdPage({ params }: { params: Promise<{ id: string }> }) {
	const select = getSelectFields(false);

	const { id } = await params;
	// Usamos findFirst para permitir combinar id + isActive de manera segura
	const service = (await prisma.service.findFirst({
		where: { id, isActive: true },
		select,
	})) as ServiceResponse | null;

	if (!service) {
		return notFound();
	}

	const recommended = (await prisma.service.findMany({
		where: {
			isActive: true,
			id: { not: service.id },
			categories: { hasSome: service.categories },
		},
		select,
		orderBy: buildSort('relevance'),
		take: 8,
	})) as ServiceResponse[];

	const hasPromo = !!service.hasPromo;
	const discountPct = hasPromo ? Math.round(((service.basePrice - service.finalPrice) / service.basePrice) * 100) : 0;

	return (
		<div className='min-h-[calc(100vh-4rem)]'>
			{/* Hero */}
			<section className='bg-gradient-to-b from-purple-50 to-white'>
				<div className='max-w-6xl mx-auto px-4 md:px-6 py-6 md:py-10'>
					<nav className='text-sm mb-4 text-gray-600'>
						<Link href='/servicios' className='hover:text-primary-700'>
							Servicios
						</Link>
						<span className='mx-2 text-gray-400'>/</span>
						<span className='text-gray-700'>{service.name}</span>
					</nav>

					<div className='grid md:grid-cols-2 gap-6 md:gap-8 items-start'>
						<div className='relative rounded-2xl overflow-hidden bg-white shadow-sm border'>
							{service.imageUrl ? (
								<Image
									src={service.imageUrl}
									alt={service.name}
									width={800}
									height={600}
									className='w-full h-auto object-cover max-w-full'
									priority
								/>
							) : (
								<div className='aspect-[4/3] grid place-items-center text-gray-400'>Sin imagen</div>
							)}
						</div>

						<div>
							<h1 className='text-2xl md:text-3xl font-bold text-gray-900 mb-1'>{service.name}</h1>
							<div className='flex flex-wrap items-center gap-3 mb-4'>
								{(service.rating ?? 0) > 0 && (
									<span className='inline-flex items-center text-gray-700'>
										<FaStar className='h-4 w-4 text-amber-500 mr-1' />
										<span className='font-medium'>{service.rating?.toFixed(1)}</span>
										<span className='ml-2 text-gray-500'>({service.reviewCount} reseñas)</span>
									</span>
								)}
								{service.duration && (
									<span className='inline-flex items-center text-gray-600'>
										<FaClock className='h-4 w-4 text-gray-500 mr-1' />
										{service.duration} min
									</span>
								)}
								<span className='inline-flex items-center text-gray-600'>
									{service.gender === 'FEMALE' ? (
										<FaVenus className='h-4 w-4 text-pink-600 mr-1' />
									) : service.gender === 'MALE' ? (
										<FaMars className='h-4 w-4 text-sky-600 mr-1' />
									) : null}
									{service.gender === 'UNISEX' ? 'Unisex' : service.gender === 'FEMALE' ? 'Mujer' : 'Hombre'}
								</span>
							</div>

							{/* Price */}
							<div className='mb-4'>
								<div className='flex items-end gap-3'>
									<span className='text-2xl md:text-3xl font-bold text-gray-900'>
										{formatCurrency(service.finalPrice)}
									</span>
									{hasPromo && (
										<span className='text-lg text-gray-500 line-through'>{formatCurrency(service.basePrice)}</span>
									)}
									{hasPromo && (
										<Badge className='rounded-full bg-rose-100/60 text-rose-700 border border-rose-300'>
											<FaTag className='h-3.5 w-3.5 mr-1' /> -{discountPct}%
										</Badge>
									)}
								</div>
								<p className='mt-1 text-sm text-gray-600'>
									Precio en efectivo 10% OFF: {formatCurrency(Math.round(service.finalPrice * 0.9))}
								</p>
							</div>

							{/* Actions */}
							<ServiceActions service={service} />

							{/* Description */}
							{service.description && (
								<div className='mt-6'>
									<h2 className='text-lg font-semibold text-gray-900 mb-2'>Descripción</h2>
									<p className='text-gray-700 leading-relaxed'>{service.description}</p>
								</div>
							)}

							{/* Meta badges */}
							<div className='mt-6 space-y-3'>
								<div className='flex flex-wrap gap-2'>
									{service.categories.map((c) => (
										<Badge key={c} variant='outline' className='rounded-full text-gray-700 border-gray-200'>
											{c}
										</Badge>
									))}
								</div>
								{service.bodyParts.length > 0 && (
									<div className='flex flex-wrap gap-2'>
										{service.bodyParts.map((b) => (
											<Badge key={b} variant='outline' className='rounded-full text-gray-700 border-gray-200'>
												{b}
											</Badge>
										))}
									</div>
								)}
								{service.tags.length > 0 && (
									<div className='flex flex-wrap gap-2'>
										{service.tags.map((t) => (
											<Badge key={t} variant='outline' className='rounded-full text-gray-700 border-gray-200'>
												{t}
											</Badge>
										))}
									</div>
								)}
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* Recommended */}
			{recommended.length > 0 && (
				<section className='py-10'>
					<div className='max-w-6xl mx-auto px-4 md:px-6'>
						<h2 className='text-xl md:text-2xl font-semibold text-gray-900 mb-4'>Te puede interesar</h2>
						<div className='grid us:grid-cols-2 md:grid-cols-2lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-3 md:gap-4 lg:gap-6'>
							{recommended.map((s) => (
								<CleanServiceCard key={s.id} service={s} />
							))}
						</div>
					</div>
				</section>
			)}
		</div>
	);
}

export const revalidate = 60;
