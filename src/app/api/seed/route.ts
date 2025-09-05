import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
import { ServiceType, Gender } from '@prisma/client';

// Función para normalizar strings (minúsculas y sin tildes)
function normalizeString(str: string): string {
  return str
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '');
}

// Función para normalizar arrays de strings
function normalizeStringArray(arr: string[]): string[] {
  return arr.map(normalizeString);
}

// Datos base extraídos del YAML
const INDIVIDUAL_SERVICES = [
  { name: 'Axila', price: 6500, bodyParts: ['axilas'], duration: 30 },
  { name: 'Bozo', price: 6000, bodyParts: ['rostro'], duration: 20 },
  { name: 'Mentón', price: 6000, bodyParts: ['rostro'], duration: 20 },
  { name: 'Rostro Completo', price: 15000, bodyParts: ['rostro'], duration: 60 },
  { name: 'Patilla', price: 6000, bodyParts: ['rostro'], duration: 15 },
  { name: 'Cavado Completo', price: 9000, bodyParts: ['intimo'], duration: 45 },
  { name: 'Cavado Bikini', price: 8000, bodyParts: ['intimo'], duration: 30 },
  { name: 'Tira de Cola', price: 6000, bodyParts: ['intimo'], duration: 20 },
  { name: 'Labios Cavado', price: 6000, bodyParts: ['intimo'], duration: 15 },
  { name: 'Pierna Alta', price: 10000, bodyParts: ['piernas'], duration: 45 },
  { name: 'Pierna Baja', price: 10000, bodyParts: ['piernas'], duration: 45 },
  { name: 'Pierna Completa', price: 15000, bodyParts: ['piernas'], duration: 90 },
  { name: 'Brazo Completo', price: 9000, bodyParts: ['brazos'], duration: 60 },
  { name: 'Medio Brazo', price: 8000, bodyParts: ['brazos'], duration: 30 },
  { name: 'Cuello', price: 6000, bodyParts: ['cuello'], duration: 20 },
  { name: 'Rodilla', price: 6000, bodyParts: ['piernas'], duration: 15 },
  { name: 'Espalda Superior', price: 7500, bodyParts: ['espalda'], duration: 30 },
  { name: 'Cintura', price: 7500, bodyParts: ['abdomen'], duration: 30 },
  { name: 'Espalda Completa', price: 14000, bodyParts: ['espalda'], duration: 60 },
  { name: 'Abdomen', price: 8500, bodyParts: ['abdomen'], duration: 30 },
  { name: 'Glúteos', price: 9000, bodyParts: ['gluteos'], duration: 45 },
  { name: 'Medio Glúteo', price: 7500, bodyParts: ['gluteos'], duration: 30 },
  { name: 'Areola del Busto', price: 6000, bodyParts: ['busto'], duration: 15 },
  { name: 'Mano', price: 6000, bodyParts: ['manos'], duration: 15 },
  { name: 'Línea Alba', price: 6000, bodyParts: ['abdomen'], duration: 15 },
  { name: 'Pecho', price: 8000, bodyParts: ['pecho'], duration: 45, gender: 'MALE' },
  { name: 'Barba', price: 14000, bodyParts: ['rostro'], duration: 60, gender: 'MALE' },
  { name: 'Nuca', price: 6000, bodyParts: ['cuello'], duration: 20, gender: 'MALE' },
  { name: 'Hombros', price: 6500, bodyParts: ['hombros'], duration: 30, gender: 'MALE' },
  { name: 'Empeine', price: 6000, bodyParts: ['pies'], duration: 20 },
  { name: 'Dedos de los Pies', price: 6000, bodyParts: ['pies'], duration: 15 },
  { name: 'Pelvis', price: 7000, bodyParts: ['intimo'], duration: 30, gender: 'MALE' }
];

const COMBO_SERVICES = [
  { name: 'Pierna Entera + Cavado + Tira + Axilas', price: 21000, includedServices: ['Pierna Completa', 'Cavado Completo', 'Tira de Cola', 'Axila'] },
  { name: 'Pierna + Cavado + Tira + Axilas + Bozo', price: 22500, includedServices: ['Pierna Completa', 'Cavado Completo', 'Tira de Cola', 'Axila', 'Bozo'] },
  { name: 'Bozo + Mentón', price: 12000, includedServices: ['Bozo', 'Mentón'] },
  { name: 'Media Pierna + Cavado + Tira + Axilas', price: 20000, includedServices: ['Pierna Baja', 'Cavado Completo', 'Tira de Cola', 'Axila'] },
  { name: 'Cavado + Tira + Axila', price: 17000, includedServices: ['Cavado Completo', 'Tira de Cola', 'Axila'] },
  { name: 'Axila + Bozo', price: 14000, includedServices: ['Axila', 'Bozo'] },
  { name: 'Pierna + Axilas', price: 19500, includedServices: ['Pierna Completa', 'Axila'] },
  { name: 'Media Pierna + Axilas', price: 18000, includedServices: ['Pierna Baja', 'Axila'] },
  { name: 'Pecho + Abdomen', price: 13000, includedServices: ['Pecho', 'Abdomen'], gender: 'MALE' },
  { name: 'Espalda Completa', price: 13000, includedServices: ['Espalda Superior', 'Espalda Baja'], gender: 'MALE' },
  { name: 'Boxer Completo', price: 16500, includedServices: ['Cavado Completo', 'Tira de Cola', 'Glúteos'], gender: 'MALE' },
  { name: 'Pecho + Espalda', price: 17500, includedServices: ['Pecho', 'Espalda Completa'], gender: 'MALE' },
  { name: 'Piernas + Cavado + Tira', price: 19000, includedServices: ['Pierna Completa', 'Cavado Completo', 'Tira de Cola'], gender: 'MALE' },
  { name: 'Brazos + Axilas', price: 15000, includedServices: ['Brazo Completo', 'Axila'], gender: 'MALE' },
  { name: 'Barba + Cuello', price: 13000, includedServices: ['Barba', 'Cuello'], gender: 'MALE' }
];

const PACK_SERVICES = [
  { name: 'Pack 4 Maderoterapia', price: 79000, sessions: 4, includedServices: ['Maderoterapia'] },
  { name: 'Pack 4 Mio Up', price: 40000, sessions: 4, includedServices: ['Mio Up'] },
  { name: 'Pack 4 Alpha Synergy', price: 57000, sessions: 4, includedServices: ['Alpha Synergy'] },
  { name: 'Pack 4 Vacuum + Mio Up', price: 56000, sessions: 4, includedServices: ['Vacuum Therapy', 'Mio Up'] },
  { name: 'Pack 4 Madero + Alpha', price: 99000, sessions: 4, includedServices: ['Maderoterapia', 'Alpha Synergy'] },
  { name: 'Pack 4 Alpha + Mio Up', price: 89000, sessions: 4, includedServices: ['Alpha Synergy', 'Mio Up'] },
  { name: 'Pack 4 Combo Glúteos', price: 140000, sessions: 4, includedServices: ['Mio Up', 'Maderoterapia', 'Alpha Synergy'] }
];

const CATEGORIES = ['depilacion', 'tratamientos corporales', 'faciales', 'masajes', 'estetica'];

const TAGS = ['popular', 'nuevo', 'promocion', 'verano', 'invierno', 'destacado', 'oferta'];

function generateSlug(name: string): string {
  return name
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/[^a-z0-9\s-]/g, '')
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-')
    .trim();
}

function getRandomElements<T>(array: T[], count: number): T[] {
  const shuffled = [...array].sort(() => 0.5 - Math.random());
  return shuffled.slice(0, count);
}

function generateRandomService(type: ServiceType, index: number) {
  let baseService;
  let serviceData;
  
  // Generar duración en saltos de 15 minutos (15, 30, 45, 60, 75, 90, 105, 120, 135, 150)
  const generateDuration = () => (Math.floor(Math.random() * 10) + 1) * 15;
  
  // Solo 5-10% de servicios tendrán order específico
  const generateOrder = () => Math.random() < 0.075 ? Math.floor(Math.random() * 100) + 1 : 0;
  
  // Generar género con distribución más realista
  const generateGender = (baseGender?: string): Gender => {
    if (baseGender) return baseGender as Gender;
    const rand = Math.random();
    if (rand < 0.4) return 'FEMALE';
    if (rand < 0.7) return 'UNISEX';
    return 'MALE';
  };

  switch (type) {
    case 'INDIVIDUAL':
      baseService = INDIVIDUAL_SERVICES[Math.floor(Math.random() * INDIVIDUAL_SERVICES.length)];
      serviceData = {
				type,
				name: baseService.name,
				slug: generateSlug(`${baseService.name}-${index}`),
				price: baseService.price,
				promoPrice: undefined as number | undefined,
				duration: generateDuration(),
				sessions: null,
				gender: generateGender((baseService as any).gender),
				categories: normalizeStringArray(getRandomElements(CATEGORIES, Math.floor(Math.random() * 2) + 1)),
				bodyParts: normalizeStringArray(baseService.bodyParts),
				tags: normalizeStringArray(getRandomElements(TAGS, Math.floor(Math.random() * 3))),
				includedServices: [],
				isActive: true,
				order: generateOrder(),
				isFeatured: Math.random() > 0.8,
				isPopular: Math.random() > 0.7,
				isNew: Math.random() > 0.9,
			};
      break;

    case 'COMBO':
      baseService = COMBO_SERVICES[Math.floor(Math.random() * COMBO_SERVICES.length)];
      serviceData = {
				type,
				name: baseService.name,
				slug: generateSlug(`${baseService.name}-${index}`),
				price: baseService.price,
				promoPrice: undefined as number | undefined,
				duration: generateDuration(),
				sessions: null,
				gender: generateGender((baseService as any).gender),
				categories: normalizeStringArray(getRandomElements(CATEGORIES, Math.floor(Math.random() * 2) + 1)),
				bodyParts: normalizeStringArray(getRandomElements(
					['piernas', 'axilas', 'rostro', 'intimo', 'brazos', 'espalda'],
					Math.floor(Math.random() * 3) + 2
				)),
				tags: normalizeStringArray(getRandomElements(TAGS, Math.floor(Math.random() * 3))),
				includedServices: baseService.includedServices,
				isActive: true,
				order: generateOrder(),
				isFeatured: Math.random() > 0.8,
				isPopular: Math.random() > 0.7,
				isNew: Math.random() > 0.9,
			};
      break;

    case 'PACK':
      baseService = PACK_SERVICES[Math.floor(Math.random() * PACK_SERVICES.length)];
      // Generar sesiones variables para packs (2, 3, 4, 5, 6, 8, 10, 12)
      const possibleSessions = [2, 3, 4, 5, 6, 8, 10, 12];
      const randomSessions = possibleSessions[Math.floor(Math.random() * possibleSessions.length)];
      
      serviceData = {
        type,
        name: baseService.name,
        slug: generateSlug(`${baseService.name}-${index}`),
        price: baseService.price,
        promoPrice: undefined as number | undefined,
        duration: generateDuration(),
        sessions: randomSessions,
        gender: generateGender(),
        categories: normalizeStringArray(getRandomElements(CATEGORIES, Math.floor(Math.random() * 2) + 1)),
        bodyParts: normalizeStringArray(getRandomElements(['abdomen', 'gluteos', 'piernas', 'brazos', 'espalda'], Math.floor(Math.random() * 3) + 1)),
        tags: normalizeStringArray(getRandomElements(TAGS, Math.floor(Math.random() * 3))),
        includedServices: baseService.includedServices,
        isActive: true,
        order: generateOrder(),
        isFeatured: Math.random() > 0.8,
        isPopular: Math.random() > 0.7,
        isNew: Math.random() > 0.9
      };
      break;
  }

  // Agregar precio promocional aleatoriamente
  if (Math.random() > 0.7) {
    serviceData.promoPrice = Math.floor(serviceData.price * 0.8);
  }

  return serviceData;
}

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const count = parseInt(searchParams.get('count') || '10');
    
    if (count > 100) {
      return NextResponse.json({ error: 'Máximo 100 servicios por vez' }, { status: 400 });
    }

    const services = [];
    const serviceTypes: ServiceType[] = ['INDIVIDUAL', 'COMBO', 'PACK'];

    for (let i = 0; i < count; i++) {
      const randomType = serviceTypes[Math.floor(Math.random() * serviceTypes.length)];
      const service = generateRandomService(randomType, i + 1);
      services.push(service);
    }

    // Crear servicios en la base de datos
    const createdServices = await prisma.service.createMany({
      data: services,
      skipDuplicates: true
    });

    return NextResponse.json({
      message: `Se crearon ${createdServices.count} servicios exitosamente`,
      count: createdServices.count,
      services: services.map(s => ({ name: s.name, type: s.type, price: s.price }))
    });

  } catch (error) {
    console.error('Error creando servicios:', error);
    return NextResponse.json(
      { error: 'Error interno del servidor' },
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
      count: deleted.count
    });
  } catch (error) {
    console.error('Error eliminando servicios:', error);
    return NextResponse.json(
      { error: 'Error interno del servidor' },
      { status: 500 }
    );
  }
}