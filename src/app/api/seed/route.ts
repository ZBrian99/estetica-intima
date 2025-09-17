import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
import { getAllIndividualServices, getAllComboServices, getAllPackServices } from '@/data/servicesData';
import { GenderType, ServiceType } from '@/schemas/servicesSchema';
import { BODY_PARTS, CATEGORIES, TAGS } from '@/lib/constants';

// Función para obtener elementos aleatorios de un array
function getRandomElements<T>(array: T[], count: number): T[] {
	const shuffled = [...array].sort(() => 0.5 - Math.random());
	return shuffled.slice(0, count);
}

// Función para generar precio aleatorio
function generateRandomPrice(): number {
	return Math.floor(Math.random() * (150000 - 5000 + 1)) + 5000;
}

// Función para generar duración aleatoria (15 en 15, máximo 150)
function generateRandomDuration(): number {
	const durations = [];
	for (let i = 15; i <= 150; i += 15) {
		durations.push(i);
	}
	return durations[Math.floor(Math.random() * durations.length)];
}

// Función para generar precio promocional aleatorio (10% a 90% del precio original)
function generatePromoPrice(basePrice: number): number {
	if (Math.random() > 0.3) return basePrice; // 30% de probabilidad de tener promo
	const discountPercent = Math.random() * 0.8 + 0.1; // 10% a 90%
	return Math.floor(basePrice * discountPercent);
}

// Función para generar partes del cuerpo aleatorias
function generateRandomBodyParts(): string[] {
	const count = Math.floor(Math.random() * 3) + 1; // 1 a 3 partes
	return getRandomElements(BODY_PARTS, count);
}

// Función para generar categorías aleatorias
function generateRandomCategories(): string[] {
	const count = Math.floor(Math.random() * 2) + 1; // 1 a 2 categorías
	return getRandomElements(CATEGORIES, count);
}

// Función para generar flags booleanos aleatorios para servicios
function generateServiceFlags() {
	return {
		isPopular: generateRandomBoolean(0.1),
		isFeatured: generateRandomBoolean(0.1),
		isNew: generateRandomBoolean(0.1),
	};
}

// Función para generar descripción genérica del servicio
function generateServiceDescription(
	serviceName: string,
	type: ServiceType,
	duration?: number,
	sessions?: number
): string {
	const descriptions = {
		INDIVIDUAL:
			'Servicio profesional de estética realizado por especialistas certificados con equipos de última generación.',
		COMBO:
			'Combo de servicios estéticos profesionales diseñado para brindarte una experiencia completa y resultados óptimos.',
		PACK: `Paquete de ${
			sessions || 4
		} sesiones que te permite obtener mejores resultados con un precio preferencial. Ideal para tratamientos que requieren continuidad.`,
	};

	let baseDescription = descriptions[type];

	// Agregar información de duración si está disponible
	if (duration && type === 'INDIVIDUAL') {
		baseDescription += ` Duración aproximada: ${duration} minutos.`;
	}

	return baseDescription;
}

// Función para generar género aleatorio
function generateRandomGender(): GenderType {
	const genders: GenderType[] = ['MALE', 'FEMALE', 'UNISEX'];
	return genders[Math.floor(Math.random() * genders.length)];
}

// Función para generar valores booleanos aleatorios
function generateRandomBoolean(probability: number = 0.3): boolean {
	return Math.random() < probability;
}

// Función para generar slug único
function generateSlug(name: string): string {
	const baseSlug = name
		.toLowerCase()
		.normalize('NFD')
		.replace(/[\u0300-\u036f]/g, '')
		.replace(/[^a-z0-9\s-]/g, '')
		.replace(/\s+/g, '-')
		.replace(/-+/g, '-')
		.trim()
		.replace(/^-+|-+$/g, '');

	// Agregar timestamp para garantizar unicidad
	const timestamp = Date.now().toString(36) + Math.random().toString(36).substr(2, 5);
	return `${baseSlug}-${timestamp}`;
}

// Función para generar rating aleatorio (mayoritariamente alto, algunos muy bajos)
function generateRandomRating(): number {
	const rand = Math.random();
	if (rand < 0.7) {
		// 70% de probabilidad de rating alto (4.0 - 5.0)
		return parseFloat((Math.random() * (5.0 - 4.0) + 4.0).toFixed(1));
	} else if (rand < 0.85) {
		// 15% de probabilidad de rating medio (2.5 - 3.9)
		return parseFloat((Math.random() * (3.9 - 2.5) + 2.5).toFixed(1));
	} else {
		// 15% de probabilidad de rating bajo (1.0 - 2.4)
		return parseFloat((Math.random() * (2.4 - 1.0) + 1.0).toFixed(1));
	}
}

// Función para generar reviewCount aleatorio
function generateRandomReviewCount(): number {
	const rand = Math.random();
	if (rand < 0.2) {
		// 20% de probabilidad de no tener reviews
		return 0;
	} else if (rand < 0.6) {
		// 40% de probabilidad de tener pocas reviews (1-10)
		return Math.floor(Math.random() * 10) + 1;
	} else {
		// 40% de probabilidad de tener más reviews (11-50)
		return Math.floor(Math.random() * 40) + 11;
	}
}

// Función para generar bookings aleatorios
function generateRandomBookings(): number {
	const rand = Math.random();
	if (rand < 0.2) {
		// 20% de probabilidad de no tener bookings
		return 0;
	} else if (rand < 0.6) {
		// 40% de probabilidad de tener pocas bookings (1-20)
		return Math.floor(Math.random() * 20) + 1;
	} else {
		// 40% de probabilidad de tener más bookings (21-100)
		return Math.floor(Math.random() * 80) + 21;
	}
}

// Función para generar tags aleatorias
function generateRandomTags(): string[] {
	const count = Math.floor(Math.random() * 3) + 1; // 1 a 3 tags
	return getRandomElements(TAGS, count);
}

export async function GET(request: NextRequest) {
	try {
		// Obtener todos los servicios de la data
		const individualServices = getAllIndividualServices();
		const comboServices = getAllComboServices();
		const packServices = getAllPackServices();

		console.log('📊 Datos obtenidos:');
		console.log(`- Servicios individuales: ${individualServices.length}`);
		console.log(`- Servicios combo: ${comboServices.length}`);
		console.log(`- Servicios pack: ${packServices.length}`);

		const allServices = [];

		// Procesar servicios individuales
		for (const service of individualServices) {
			const basePrice = generateRandomPrice();
			const finalPrice = generatePromoPrice(basePrice);
			const duration = generateRandomDuration();
			const bodyParts = generateRandomBodyParts();
			const categories = generateRandomCategories();
			const gender = generateRandomGender();
			const description = generateServiceDescription(service.name, 'INDIVIDUAL', duration);
			const flags = generateServiceFlags();
			const rating = generateRandomRating();
			const reviewCount = generateRandomReviewCount();
			const bookings = generateRandomBookings();
			const tags = generateRandomTags();

			const serviceData = {
				name: service.name,
				slug: generateSlug(service.name),
				description,
				basePrice,
				finalPrice,
				hasPromo: finalPrice < basePrice,
				duration,
				type: 'INDIVIDUAL' as ServiceType,
				gender,
				bodyParts,
				categories,
				tags,
				imageUrl: service.imageUrl,
				...flags,
				isActive: true,
				rating: reviewCount > 0 ? rating : 0,
				reviewCount,
				bookings,
			};

			allServices.push(serviceData);
		}

		// Procesar servicios combo
		for (const combo of comboServices) {
			const basePrice = generateRandomPrice();
			const finalPrice = generatePromoPrice(basePrice);
			const duration = generateRandomDuration();
			const bodyParts = generateRandomBodyParts();
			const categories = generateRandomCategories();
			const gender = generateRandomGender();
			const description = generateServiceDescription(combo.name, 'COMBO');
			const flags = generateServiceFlags();
			const rating = generateRandomRating();
			const reviewCount = generateRandomReviewCount();
			const bookings = generateRandomBookings();
			const tags = generateRandomTags();

			const comboData = {
				name: combo.name,
				slug: generateSlug(combo.name),
				description,
				basePrice,
				finalPrice,
				hasPromo: finalPrice < basePrice,
				duration,
				type: 'COMBO' as ServiceType,
				gender,
				bodyParts,
				categories,
				tags,
				imageUrl: combo.imageUrl,
				includedServices: combo.includedServices,
				...flags,
				isActive: true,
				rating: reviewCount > 0 ? rating : 0,
				reviewCount,
				bookings,
			};

			allServices.push(comboData);
		}

		// Procesar servicios pack
		for (const pack of packServices) {
			const basePrice = generateRandomPrice();
			const finalPrice = generatePromoPrice(basePrice);
			const duration = generateRandomDuration();
			const bodyParts = generateRandomBodyParts();
			const categories = generateRandomCategories();
			const gender = generateRandomGender();
			const description = generateServiceDescription(pack.name, 'PACK', undefined, pack.sessions);
			const flags = generateServiceFlags();
			const rating = generateRandomRating();
			const reviewCount = generateRandomReviewCount();
			const bookings = generateRandomBookings();
			const tags = generateRandomTags();

			const packData = {
				name: pack.name,
				slug: generateSlug(pack.name),
				description,
				basePrice,
				finalPrice,
				hasPromo: finalPrice < basePrice,
				duration,
				type: 'PACK' as ServiceType,
				gender,
				bodyParts,
				categories,
				tags,
				imageUrl: pack.imageUrl,
				includedServices: pack.includedServices,
				sessions: pack.sessions,
				...flags,
				isActive: true,
				rating: reviewCount > 0 ? rating : 0,
				reviewCount,
				bookings,
			};

			allServices.push(packData);
		}

		console.log(`🎯 Total de servicios a crear: ${allServices.length}`);

		// Desordenar el array de servicios para que no queden agrupados por tipo
		const shuffledServices = [...allServices].sort(() => Math.random() - 0.5);

		// Crear servicios en la base de datos
		const createdServices = await prisma.service.createMany({
			data: shuffledServices,
			skipDuplicates: true,
		});

		console.log(`✅ Servicios creados exitosamente: ${createdServices.count}`);

		return NextResponse.json({
			success: true,
			message: `Se crearon ${createdServices.count} servicios exitosamente`,
			data: {
				total: createdServices.count,
				individual: individualServices.length,
				combo: comboServices.length,
				pack: packServices.length,
			},
		});
	} catch (error) {
		console.error('❌ Error al crear servicios:', error);
		return NextResponse.json(
			{
				success: false,
				message: 'Error al crear servicios',
				error: error instanceof Error ? error.message : 'Error desconocido',
			},
			{ status: 500 }
		);
	}
}

// Endpoint para limpiar todos los servicios (útil para testing)
export async function DELETE() {
	try {
		const deleted = await prisma.service.deleteMany({});
		return NextResponse.json({
			message: `Se eliminaron ${deleted.count} servicios`,
			count: deleted.count,
		});
	} catch (error) {
		console.error('Error eliminando servicios:', error);
		return NextResponse.json({ error: 'Error interno del servidor' }, { status: 500 });
	}
}
