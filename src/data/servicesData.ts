import { GenderType } from '@/schemas/servicesSchema';

// Tipos para los datos de servicios
export interface BaseServiceData {
	name: string;
	basePrice: number;
	bodyParts: string[];
	duration: number;
	gender?: GenderType;
	imageUrl: string;
}

export interface ComboServiceData {
	name: string;
	basePrice: number;
	includedServices: string[];
	gender?: GenderType;
	imageUrl: string;
}

export interface PackServiceData {
	name: string;
	basePrice: number;
	sessions: number;
	includedServices: string[];
	gender?: GenderType;
	imageUrl: string;
}

// SERVICIOS INDIVIDUALES FEMENINOS
export const INDIVIDUAL_SERVICES_FEMALE: BaseServiceData[] = [
	// Depilación facial
	{
		name: 'Depilación Axila',
		basePrice: 6500,
		bodyParts: ['axilas'],
		duration: 30,
		imageUrl:
			'https://image.pollinations.ai/prompt/professional%20underarm%20laser%20treatment%2C%20clean%20medical%20spa%20environment%2C%20modern%20equipment%2C%20soft%20lighting%2C%20professional%20photography%2C%20high%20quality?width=1024&height=1024&model=flux-realism&enhance=true&nologo=true&private=true',
	},
	{
		name: 'Depilación Bozo',
		basePrice: 6000,
		bodyParts: ['rostro'],
		duration: 20,
		imageUrl:
			'https://image.pollinations.ai/prompt/professional%20facial%20hair%20removal%20upper%20lip%20treatment%2C%20clean%20medical%20spa%20environment%2C%20gentle%20laser%20procedure%2C%20soft%20lighting%2C%20professional%20photography%2C%20high%20quality?width=1024&height=1024&model=flux-realism&enhance=true&nologo=true&private=true',
	},
	{
		name: 'Depilación Mentón',
		basePrice: 6000,
		bodyParts: ['rostro'],
		duration: 20,
		imageUrl:
			'https://image.pollinations.ai/prompt/professional%20chin%20hair%20removal%20treatment%2C%20facial%20laser%20procedure%2C%20clean%20medical%20spa%2C%20modern%20equipment%2C%20soft%20lighting%2C%20professional%20photography%2C%20high%20quality?width=1024&height=1024&model=flux-realism&enhance=true&nologo=true&private=true',
	},
	{
		name: 'Depilación Rostro Completo',
		basePrice: 15000,
		bodyParts: ['rostro'],
		duration: 60,
		imageUrl:
			'https://image.pollinations.ai/prompt/professional%20complete%20facial%20hair%20removal%20treatment%2C%20full%20face%20laser%20procedure%2C%20clean%20medical%20spa%20environment%2C%20modern%20equipment%2C%20soft%20lighting%2C%20professional%20photography%2C%20high%20quality?width=1024&height=1024&model=flux-realism&enhance=true&nologo=true&private=true',
	},
	{
		name: 'Depilación Patilla',
		basePrice: 6000,
		bodyParts: ['rostro'],
		duration: 15,
		imageUrl:
			'https://image.pollinations.ai/prompt/professional%20sideburn%20hair%20removal%20treatment%2C%20facial%20laser%20procedure%2C%20clean%20medical%20spa%2C%20modern%20equipment%2C%20soft%20lighting%2C%20professional%20photography%2C%20high%20quality?width=1024&height=1024&model=flux-realism&enhance=true&nologo=true&private=true',
	},

	// Depilación íntima
	{
		name: 'Depilación Cavado Completo',
		basePrice: 9000,
		bodyParts: ['intimo'],
		duration: 45,
		imageUrl:
			'https://image.pollinations.ai/prompt/professional%20hair%20removal%20treatment%2C%20clean%20medical%20spa%20environment%2C%20modern%20laser%20equipment%2C%20soft%20lighting%2C%20professional%20photography%2C%20high%20quality?width=1024&height=1024&model=flux-realism&enhance=true&nologo=true&private=true',
	},
	{
		name: 'Depilación Cavado Bikini',
		basePrice: 8000,
		bodyParts: ['intimo'],
		duration: 30,
		imageUrl:
			'https://image.pollinations.ai/prompt/professional%20hair%20removal%20treatment%2C%20clean%20medical%20spa%20environment%2C%20modern%20laser%20equipment%2C%20soft%20lighting%2C%20professional%20photography%2C%20high%20quality?width=1024&height=1024&model=flux-realism&enhance=true&nologo=true&private=true',
	},
	{
		name: 'Depilación Tira de Cola',
		basePrice: 6000,
		bodyParts: ['intimo'],
		duration: 20,
		imageUrl:
			'https://image.pollinations.ai/prompt/professional%20hair%20removal%20treatment%2C%20clean%20medical%20spa%20environment%2C%20modern%20laser%20equipment%2C%20soft%20lighting%2C%20professional%20photography%2C%20high%20quality?width=1024&height=1024&model=flux-realism&enhance=true&nologo=true&private=true',
	},
	{
		name: 'Depilación Labios Cavado',
		basePrice: 6000,
		bodyParts: ['intimo'],
		duration: 15,
		imageUrl:
			'https://image.pollinations.ai/prompt/professional%20intimate%20area%20laser%20treatment%2C%20clean%20medical%20spa%20environment%2C%20modern%20equipment%2C%20soft%20lighting%2C%20professional%20photography%2C%20high%20quality?width=1024&height=1024&model=flux-realism&enhance=true&nologo=true&private=true',
	},

	// Depilación piernas
	{
		name: 'Depilación Pierna Alta',
		basePrice: 10000,
		bodyParts: ['piernas'],
		duration: 45,
		imageUrl:
			'https://image.pollinations.ai/prompt/professional%20upper%20leg%20hair%20removal%20treatment%2C%20laser%20procedure%2C%20clean%20medical%20spa%20environment%2C%20modern%20equipment%2C%20soft%20lighting%2C%20professional%20photography%2C%20high%20quality?width=1024&height=1024&model=flux-realism&enhance=true&nologo=true&private=true',
	},
	{
		name: 'Depilación Pierna Baja',
		basePrice: 10000,
		bodyParts: ['piernas'],
		duration: 45,
		imageUrl:
			'https://image.pollinations.ai/prompt/professional%20lower%20leg%20laser%20treatment%2C%20clean%20medical%20spa%20environment%2C%20modern%20equipment%2C%20soft%20lighting%2C%20professional%20photography%2C%20high%20quality?width=1024&height=1024&model=flux-realism&enhance=true&nologo=true&private=true',
	},
	{
		name: 'Depilación Pierna Completa',
		basePrice: 15000,
		bodyParts: ['piernas'],
		duration: 90,
		imageUrl:
			'https://image.pollinations.ai/prompt/professional%20complete%20leg%20laser%20treatment%2C%20clean%20medical%20spa%20environment%2C%20modern%20equipment%2C%20soft%20lighting%2C%20professional%20photography%2C%20high%20quality?width=1024&height=1024&model=flux-realism&enhance=true&nologo=true&private=true',
	},
	{
		name: 'Depilación Rodilla',
		basePrice: 6000,
		bodyParts: ['piernas'],
		duration: 15,
		imageUrl:
			'https://image.pollinations.ai/prompt/professional%20knee%20hair%20removal%20treatment%2C%20laser%20procedure%2C%20clean%20medical%20spa%20environment%2C%20modern%20equipment%2C%20soft%20lighting%2C%20professional%20photography%2C%20high%20quality?width=1024&height=1024&model=flux-realism&enhance=true&nologo=true&private=true',
	},

	// Depilación brazos y manos
	{
		name: 'Depilación Brazo Completo',
		basePrice: 9000,
		bodyParts: ['brazos'],
		duration: 60,
		imageUrl:
			'https://image.pollinations.ai/prompt/professional%20complete%20arm%20hair%20removal%20treatment%2C%20laser%20procedure%2C%20clean%20medical%20spa%20environment%2C%20modern%20equipment%2C%20soft%20lighting%2C%20professional%20photography%2C%20high%20quality?width=1024&height=1024&model=flux-realism&enhance=true&nologo=true&private=true',
	},
	{
		name: 'Depilación Medio Brazo',
		basePrice: 8000,
		bodyParts: ['brazos'],
		duration: 30,
		imageUrl:
			'https://image.pollinations.ai/prompt/professional%20forearm%20hair%20removal%20treatment%2C%20laser%20procedure%2C%20clean%20medical%20spa%20environment%2C%20modern%20equipment%2C%20soft%20lighting%2C%20professional%20photography%2C%20high%20quality?width=1024&height=1024&model=flux-realism&enhance=true&nologo=true&private=true',
	},
	{
		name: 'Depilación Mano',
		basePrice: 6000,
		bodyParts: ['manos'],
		duration: 15,
		imageUrl:
			'https://image.pollinations.ai/prompt/professional%20hand%20hair%20removal%20treatment%2C%20laser%20procedure%2C%20clean%20medical%20spa%20environment%2C%20modern%20equipment%2C%20soft%20lighting%2C%20professional%20photography%2C%20high%20quality?width=1024&height=1024&model=flux-realism&enhance=true&nologo=true&private=true',
	},

	// Depilación cuerpo
	{
		name: 'Depilación Cuello',
		basePrice: 6000,
		bodyParts: ['cuello'],
		duration: 20,
		imageUrl:
			'https://image.pollinations.ai/prompt/professional%20neck%20hair%20removal%20treatment%2C%20laser%20procedure%2C%20clean%20medical%20spa%20environment%2C%20modern%20equipment%2C%20soft%20lighting%2C%20professional%20photography%2C%20high%20quality?width=1024&height=1024&model=flux-realism&enhance=true&nologo=true&private=true',
	},
	{
		name: 'Depilación Espalda Superior',
		basePrice: 7500,
		bodyParts: ['espalda'],
		duration: 30,
		imageUrl:
			'https://image.pollinations.ai/prompt/professional%20upper%20back%20hair%20removal%20treatment%2C%20laser%20procedure%2C%20clean%20medical%20spa%20environment%2C%20modern%20equipment%2C%20soft%20lighting%2C%20professional%20photography%2C%20high%20quality?width=1024&height=1024&model=flux-realism&enhance=true&nologo=true&private=true',
	},
	{
		name: 'Depilación Espalda Completa',
		basePrice: 14000,
		bodyParts: ['espalda'],
		duration: 60,
		imageUrl:
			'https://image.pollinations.ai/prompt/professional%20complete%20back%20hair%20removal%20treatment%2C%20laser%20procedure%2C%20clean%20medical%20spa%20environment%2C%20modern%20equipment%2C%20soft%20lighting%2C%20professional%20photography%2C%20high%20quality?width=1024&height=1024&model=flux-realism&enhance=true&nologo=true&private=true',
	},
	{
		name: 'Depilación Cintura',
		basePrice: 7500,
		bodyParts: ['abdomen'],
		duration: 30,
		imageUrl:
			'https://image.pollinations.ai/prompt/professional%20waistline%20laser%20treatment%2C%20aesthetic%20clinic%20environment%2C%20modern%20equipment%2C%20soft%20lighting%2C%20professional%20photography%2C%20high%20quality?width=1024&height=1024&model=flux-realism&enhance=true&nologo=true&private=true',
	},
	{
		name: 'Depilación Abdomen',
		basePrice: 8500,
		bodyParts: ['abdomen'],
		duration: 30,
		imageUrl:
			'https://image.pollinations.ai/prompt/professional%20abdomen%20hair%20removal%20treatment%2C%20laser%20procedure%2C%20clean%20medical%20spa%20environment%2C%20modern%20equipment%2C%20soft%20lighting%2C%20professional%20photography%2C%20high%20quality?width=1024&height=1024&model=flux-realism&enhance=true&nologo=true&private=true',
	},
	{
		name: 'Depilación Línea Alba',
		basePrice: 6000,
		bodyParts: ['abdomen'],
		duration: 15,
		imageUrl:
			'https://image.pollinations.ai/prompt/professional%20linea%20alba%20hair%20removal%20treatment%2C%20laser%20procedure%2C%20clean%20medical%20spa%20environment%2C%20modern%20equipment%2C%20soft%20lighting%2C%20professional%20photography%2C%20high%20quality?width=1024&height=1024&model=flux-realism&enhance=true&nologo=true&private=true',
	},
	{
		name: 'Depilación Glúteos',
		basePrice: 9000,
		bodyParts: ['gluteos'],
		duration: 45,
		imageUrl:
			'https://image.pollinations.ai/prompt/professional%20body%20contouring%20treatment%2C%20aesthetic%20clinic%20environment%2C%20modern%20equipment%2C%20soft%20lighting%2C%20professional%20photography%2C%20high%20quality?width=1024&height=1024&model=flux-realism&enhance=true&nologo=true&private=true',
	},
	{
		name: 'Depilación Medio Glúteo',
		basePrice: 7500,
		bodyParts: ['gluteos'],
		duration: 30,
		imageUrl:
			'https://image.pollinations.ai/prompt/professional%20body%20treatment%2C%20aesthetic%20clinic%20environment%2C%20modern%20equipment%2C%20soft%20lighting%2C%20professional%20photography%2C%20high%20quality?width=1024&height=1024&model=flux-realism&enhance=true&nologo=true&private=true',
	},
	{
		name: 'Depilación Areola del Busto',
		basePrice: 6000,
		bodyParts: ['busto'],
		duration: 15,
		imageUrl:
			'https://image.pollinations.ai/prompt/professional%20hair%20removal%20treatment%2C%20laser%20procedure%2C%20clean%20medical%20spa%20environment%2C%20modern%20equipment%2C%20soft%20lighting%2C%20professional%20photography%2C%20high%20quality?width=1024&height=1024&model=flux-realism&enhance=true&nologo=true&private=true',
	},

	// Depilación pies
	{
		name: 'Depilación Empeine',
		basePrice: 6000,
		bodyParts: ['pies'],
		duration: 20,
		imageUrl:
			'https://image.pollinations.ai/prompt/professional%20foot%20instep%20hair%20removal%20treatment%2C%20laser%20procedure%2C%20clean%20medical%20spa%20environment%2C%20modern%20equipment%2C%20soft%20lighting%2C%20professional%20photography%2C%20high%20quality?width=1024&height=1024&model=flux-realism&enhance=true&nologo=true&private=true',
	},
	{
		name: 'Depilación Dedos de los Pies',
		basePrice: 6000,
		bodyParts: ['pies'],
		duration: 15,
		imageUrl:
			'https://image.pollinations.ai/prompt/professional%20toe%20hair%20removal%20treatment%2C%20laser%20procedure%2C%20clean%20medical%20spa%20environment%2C%20modern%20equipment%2C%20soft%20lighting%2C%20professional%20photography%2C%20high%20quality?width=1024&height=1024&model=flux-realism&enhance=true&nologo=true&private=true',
	},
];

// SERVICIOS INDIVIDUALES MASCULINOS
export const INDIVIDUAL_SERVICES_MALE: BaseServiceData[] = [
	// Depilación facial masculina
	{
		name: 'Depilación Barba',
		basePrice: 14000,
		bodyParts: ['rostro'],
		duration: 60,
		gender: 'MALE',
		imageUrl:
			'https://image.pollinations.ai/prompt/professional%20male%20beard%20hair%20removal%20treatment%2C%20laser%20procedure%2C%20clean%20medical%20spa%20environment%2C%20modern%20equipment%2C%20soft%20lighting%2C%20professional%20photography%2C%20high%20quality?width=1024&height=1024&model=flux-realism&enhance=true&nologo=true&private=true',
	},
	{
		name: 'Depilación Nuca',
		basePrice: 6000,
		bodyParts: ['cuello'],
		duration: 20,
		gender: 'MALE',
		imageUrl:
			'https://image.pollinations.ai/prompt/professional%20male%20nape%20hair%20removal%20treatment%2C%20laser%20procedure%2C%20clean%20medical%20spa%20environment%2C%20modern%20equipment%2C%20soft%20lighting%2C%20professional%20photography%2C%20high%20quality?width=1024&height=1024&model=flux-realism&enhance=true&nologo=true&private=true',
	},
	{
		name: 'Depilación Cuello',
		basePrice: 6000,
		bodyParts: ['cuello'],
		duration: 20,
		gender: 'MALE',
		imageUrl:
			'https://image.pollinations.ai/prompt/professional%20male%20neck%20hair%20removal%20treatment%2C%20laser%20procedure%2C%20clean%20medical%20spa%20environment%2C%20modern%20equipment%2C%20soft%20lighting%2C%20professional%20photography%2C%20high%20quality?width=1024&height=1024&model=flux-realism&enhance=true&nologo=true&private=true',
	},

	// Depilación cuerpo masculino
	{
		name: 'Depilación Pecho',
		basePrice: 8000,
		bodyParts: ['pecho'],
		duration: 45,
		gender: 'MALE',
		imageUrl:
			'https://image.pollinations.ai/prompt/professional%20male%20torso%20hair%20removal%20treatment%2C%20laser%20procedure%2C%20clean%20medical%20spa%20environment%2C%20modern%20equipment%2C%20soft%20lighting%2C%20professional%20photography%2C%20high%20quality?width=1024&height=1024&model=flux-realism&enhance=true&nologo=true&private=true',
	},
	{
		name: 'Depilación Abdomen',
		basePrice: 8000,
		bodyParts: ['abdomen'],
		duration: 30,
		gender: 'MALE',
		imageUrl:
			'https://image.pollinations.ai/prompt/professional%20male%20abdomen%20hair%20removal%20treatment%2C%20laser%20procedure%2C%20clean%20medical%20spa%20environment%2C%20modern%20equipment%2C%20soft%20lighting%2C%20professional%20photography%2C%20high%20quality?width=1024&height=1024&model=flux-realism&enhance=true&nologo=true&private=true',
	},
	{
		name: 'Depilación Espalda Baja',
		basePrice: 7000,
		bodyParts: ['espalda'],
		duration: 30,
		gender: 'MALE',
		imageUrl:
			'https://image.pollinations.ai/prompt/professional%20male%20lower%20back%20hair%20removal%20treatment%2C%20laser%20procedure%2C%20clean%20medical%20spa%20environment%2C%20modern%20equipment%2C%20soft%20lighting%2C%20professional%20photography%2C%20high%20quality?width=1024&height=1024&model=flux-realism&enhance=true&nologo=true&private=true',
	},
	{
		name: 'Depilación Espalda Alta',
		basePrice: 7000,
		bodyParts: ['espalda'],
		duration: 30,
		gender: 'MALE',
		imageUrl:
			'https://image.pollinations.ai/prompt/professional%20male%20upper%20back%20hair%20removal%20treatment%2C%20laser%20procedure%2C%20clean%20medical%20spa%20environment%2C%20modern%20equipment%2C%20soft%20lighting%2C%20professional%20photography%2C%20high%20quality?width=1024&height=1024&model=flux-realism&enhance=true&nologo=true&private=true',
	},
	{
		name: 'Depilación Hombros',
		basePrice: 6500,
		bodyParts: ['hombros'],
		duration: 30,
		gender: 'MALE',
		imageUrl:
			'https://image.pollinations.ai/prompt/professional%20male%20shoulders%20hair%20removal%20treatment%2C%20laser%20procedure%2C%20clean%20medical%20spa%20environment%2C%20modern%20equipment%2C%20soft%20lighting%2C%20professional%20photography%2C%20high%20quality?width=1024&height=1024&model=flux-realism&enhance=true&nologo=true&private=true',
	},

	// Depilación brazos masculino
	{
		name: 'Depilación Brazos Completos',
		basePrice: 9000,
		bodyParts: ['brazos'],
		duration: 60,
		gender: 'MALE',
		imageUrl:
			'https://image.pollinations.ai/prompt/professional%20male%20complete%20arms%20hair%20removal%20treatment%2C%20laser%20procedure%2C%20clean%20medical%20spa%20environment%2C%20modern%20equipment%2C%20soft%20lighting%2C%20professional%20photography%2C%20high%20quality?width=1024&height=1024&model=flux-realism&enhance=true&nologo=true&private=true',
	},
	{
		name: 'Depilación Medio Brazo',
		basePrice: 7000,
		bodyParts: ['brazos'],
		duration: 30,
		gender: 'MALE',
		imageUrl:
			'https://image.pollinations.ai/prompt/professional%20male%20forearm%20hair%20removal%20treatment%2C%20laser%20procedure%2C%20clean%20medical%20spa%20environment%2C%20modern%20equipment%2C%20soft%20lighting%2C%20professional%20photography%2C%20high%20quality?width=1024&height=1024&model=flux-realism&enhance=true&nologo=true&private=true',
	},
	{
		name: 'Depilación Axilas',
		basePrice: 6500,
		bodyParts: ['axilas'],
		duration: 30,
		gender: 'MALE',
		imageUrl:
			'https://image.pollinations.ai/prompt/professional%20male%20underarm%20laser%20treatment%2C%20clean%20medical%20spa%20environment%2C%20modern%20equipment%2C%20soft%20lighting%2C%20professional%20photography%2C%20high%20quality?width=1024&height=1024&model=flux-realism&enhance=true&nologo=true&private=true',
	},
	{
		name: 'Depilación Manos',
		basePrice: 6000,
		bodyParts: ['manos'],
		duration: 15,
		gender: 'MALE',
		imageUrl:
			'https://image.pollinations.ai/prompt/professional%20male%20hands%20hair%20removal%20treatment%2C%20laser%20procedure%2C%20clean%20medical%20spa%20environment%2C%20modern%20equipment%2C%20soft%20lighting%2C%20professional%20photography%2C%20high%20quality?width=1024&height=1024&model=flux-realism&enhance=true&nologo=true&private=true',
	},

	// Depilación íntima masculina
	{
		name: 'Depilación Cavado Completo',
		basePrice: 10000,
		bodyParts: ['intimo'],
		duration: 45,
		gender: 'MALE',
		imageUrl:
			'https://image.pollinations.ai/prompt/professional%20male%20hair%20removal%20treatment%2C%20clean%20medical%20spa%20environment%2C%20modern%20laser%20equipment%2C%20soft%20lighting%2C%20professional%20photography%2C%20high%20quality?width=1024&height=1024&model=flux-realism&enhance=true&nologo=true&private=true',
	},
	{
		name: 'Depilación Tira',
		basePrice: 6000,
		bodyParts: ['intimo'],
		duration: 20,
		gender: 'MALE',
		imageUrl:
			'https://image.pollinations.ai/prompt/professional%20male%20hair%20removal%20treatment%2C%20clean%20medical%20spa%20environment%2C%20modern%20laser%20equipment%2C%20soft%20lighting%2C%20professional%20photography%2C%20high%20quality?width=1024&height=1024&model=flux-realism&enhance=true&nologo=true&private=true',
	},
	{
		name: 'Depilación Pelvis',
		basePrice: 7000,
		bodyParts: ['intimo'],
		duration: 30,
		gender: 'MALE',
		imageUrl:
			'https://image.pollinations.ai/prompt/professional%20male%20pelvis%20hair%20removal%20treatment%2C%20laser%20procedure%2C%20clean%20medical%20spa%20environment%2C%20modern%20equipment%2C%20soft%20lighting%2C%20professional%20photography%2C%20high%20quality?width=1024&height=1024&model=flux-realism&enhance=true&nologo=true&private=true',
	},
	{
		name: 'Depilación Glúteos',
		basePrice: 9500,
		bodyParts: ['gluteos'],
		duration: 45,
		gender: 'MALE',
		imageUrl:
			'https://image.pollinations.ai/prompt/professional%20male%20body%20contouring%20treatment%2C%20aesthetic%20clinic%20environment%2C%20modern%20equipment%2C%20soft%20lighting%2C%20professional%20photography%2C%20high%20quality?width=1024&height=1024&model=flux-realism&enhance=true&nologo=true&private=true',
	},

	// Depilación piernas masculino
	{
		name: 'Depilación Pierna Entera',
		basePrice: 15000,
		bodyParts: ['piernas'],
		duration: 90,
		gender: 'MALE',
		imageUrl:
			'https://image.pollinations.ai/prompt/professional%20male%20complete%20leg%20hair%20removal%20treatment%2C%20laser%20procedure%2C%20clean%20medical%20spa%20environment%2C%20modern%20equipment%2C%20soft%20lighting%2C%20professional%20photography%2C%20high%20quality?width=1024&height=1024&model=flux-realism&enhance=true&nologo=true&private=true',
	},
	{
		name: 'Depilación Media Pierna',
		basePrice: 9000,
		bodyParts: ['piernas'],
		duration: 45,
		gender: 'MALE',
		imageUrl:
			'https://image.pollinations.ai/prompt/professional%20male%20lower%20leg%20hair%20removal%20treatment%2C%20laser%20procedure%2C%20clean%20medical%20spa%20environment%2C%20modern%20equipment%2C%20soft%20lighting%2C%20professional%20photography%2C%20high%20quality?width=1024&height=1024&model=flux-realism&enhance=true&nologo=true&private=true',
	},

	// Depilación pies masculino
	{
		name: 'Depilación Empeine - Dedos del pie',
		basePrice: 6000,
		bodyParts: ['pies'],
		duration: 20,
		gender: 'MALE',
		imageUrl:
			'https://image.pollinations.ai/prompt/professional%20male%20foot%20instep%20toe%20hair%20removal%20treatment%2C%20laser%20procedure%2C%20clean%20medical%20spa%20environment%2C%20modern%20equipment%2C%20soft%20lighting%2C%20professional%20photography%2C%20high%20quality?width=1024&height=1024&model=flux-realism&enhance=true&nologo=true&private=true',
	},
];

// COMBOS FEMENINOS
export const COMBO_SERVICES_FEMALE: ComboServiceData[] = [
	{
		name: 'Combo Depilación Pierna Entera + Cavado + Tira + Axilas',
		basePrice: 21000,
		includedServices: ['Pierna Completa', 'Cavado Completo', 'Tira de Cola', 'Axila'],
		imageUrl:
			'https://image.pollinations.ai/prompt/professional%20female%20complete%20legs%20underarm%20hair%20removal%20combo%20treatment%2C%20laser%20procedure%2C%20clean%20medical%20spa%20environment%2C%20modern%20equipment%2C%20soft%20lighting%2C%20professional%20photography%2C%20high%20quality?width=1024&height=1024&model=flux-realism&enhance=true&nologo=true&private=true',
	},
	{
		name: 'Combo Depilación Pierna + Cavado + Tira + Axilas + Bozo',
		basePrice: 22500,
		includedServices: ['Pierna Completa', 'Cavado Completo', 'Tira de Cola', 'Axila', 'Bozo'],
		imageUrl:
			'https://image.pollinations.ai/prompt/professional%20female%20complete%20legs%20facial%20underarm%20hair%20removal%20combo%20treatment%2C%20laser%20procedure%2C%20clean%20medical%20spa%20environment%2C%20modern%20equipment%2C%20soft%20lighting%2C%20professional%20photography%2C%20high%20quality?width=1024&height=1024&model=flux-realism&enhance=true&nologo=true&private=true',
	},
	{
		name: 'Combo Depilación Media Pierna + Cavado + Tira + Axilas',
		basePrice: 20000,
		includedServices: ['Pierna Baja', 'Cavado Completo', 'Tira de Cola', 'Axila'],
		imageUrl:
			'https://image.pollinations.ai/prompt/professional%20female%20lower%20legs%20underarm%20hair%20removal%20combo%20treatment%2C%20laser%20procedure%2C%20clean%20medical%20spa%20environment%2C%20modern%20equipment%2C%20soft%20lighting%2C%20professional%20photography%2C%20high%20quality?width=1024&height=1024&model=flux-realism&enhance=true&nologo=true&private=true',
	},
	{
		name: 'Combo Depilación Media Pierna + Cavado + Tira + Axilas + Bozo',
		basePrice: 21000,
		includedServices: ['Pierna Baja', 'Cavado Completo', 'Tira de Cola', 'Axila', 'Bozo'],
		imageUrl:
			'https://image.pollinations.ai/prompt/professional%20female%20lower%20legs%20facial%20underarm%20hair%20removal%20combo%20treatment%2C%20laser%20procedure%2C%20clean%20medical%20spa%20environment%2C%20modern%20equipment%2C%20soft%20lighting%2C%20professional%20photography%2C%20high%20quality?width=1024&height=1024&model=flux-realism&enhance=true&nologo=true&private=true',
	},
	{
		name: 'Combo Depilación Cavado + Tira + Axila',
		basePrice: 17000,
		includedServices: ['Cavado Completo', 'Tira de Cola', 'Axila'],
		imageUrl:
			'https://image.pollinations.ai/prompt/professional%20laser%20treatment%20combo%2C%20clean%20medical%20spa%20environment%2C%20modern%20equipment%2C%20soft%20lighting%2C%20professional%20photography%2C%20high%20quality?width=1024&height=1024&model=flux-realism&enhance=true&nologo=true&private=true',
	},
	{
		name: 'Combo Depilación Pierna + Cavado + Tira',
		basePrice: 19500,
		includedServices: ['Pierna Completa', 'Cavado Completo', 'Tira de Cola'],
		imageUrl:
			'https://image.pollinations.ai/prompt/professional%20female%20complete%20legs%20hair%20removal%20combo%20treatment%2C%20laser%20procedure%2C%20clean%20medical%20spa%20environment%2C%20modern%20equipment%2C%20soft%20lighting%2C%20professional%20photography%2C%20high%20quality?width=1024&height=1024&model=flux-realism&enhance=true&nologo=true&private=true',
	},
	{
		name: 'Combo Depilación Pierna + Axilas',
		basePrice: 19500,
		includedServices: ['Pierna Completa', 'Axila'],
		imageUrl:
			'https://image.pollinations.ai/prompt/professional%20female%20complete%20legs%20underarm%20hair%20removal%20combo%20treatment%2C%20laser%20procedure%2C%20clean%20medical%20spa%20environment%2C%20modern%20equipment%2C%20soft%20lighting%2C%20professional%20photography%2C%20high%20quality?width=1024&height=1024&model=flux-realism&enhance=true&nologo=true&private=true',
	},
	{
		name: 'Combo Depilación Media Pierna + Axilas',
		basePrice: 18000,
		includedServices: ['Pierna Baja', 'Axila'],
		imageUrl:
			'https://image.pollinations.ai/prompt/professional%20female%20lower%20legs%20underarm%20hair%20removal%20combo%20treatment%2C%20laser%20procedure%2C%20clean%20medical%20spa%20environment%2C%20modern%20equipment%2C%20soft%20lighting%2C%20professional%20photography%2C%20high%20quality?width=1024&height=1024&model=flux-realism&enhance=true&nologo=true&private=true',
	},
	{
		name: 'Combo Depilación Media Pierna + Cavado + Tira',
		basePrice: 19500,
		includedServices: ['Pierna Baja', 'Cavado Completo', 'Tira de Cola'],
		imageUrl:
			'https://image.pollinations.ai/prompt/professional%20female%20lower%20legs%20hair%20removal%20combo%20treatment%2C%20laser%20procedure%2C%20clean%20medical%20spa%20environment%2C%20modern%20equipment%2C%20soft%20lighting%2C%20professional%20photography%2C%20high%20quality?width=1024&height=1024&model=flux-realism&enhance=true&nologo=true&private=true',
	},
	{
		name: 'Combo Depilación Bozo + Mentón',
		basePrice: 12000,
		includedServices: ['Bozo', 'Mentón'],
		imageUrl:
			'https://image.pollinations.ai/prompt/professional%20female%20upper%20lip%20chin%20facial%20hair%20removal%20combo%20treatment%2C%20laser%20procedure%2C%20clean%20medical%20spa%20environment%2C%20modern%20equipment%2C%20soft%20lighting%2C%20professional%20photography%2C%20high%20quality?width=1024&height=1024&model=flux-realism&enhance=true&nologo=true&private=true',
	},
	{
		name: 'Combo Depilación Axila + Bozo',
		basePrice: 14000,
		includedServices: ['Axila', 'Bozo'],
		imageUrl:
			'https://image.pollinations.ai/prompt/professional%20female%20underarm%20upper%20lip%20hair%20removal%20combo%20treatment%2C%20laser%20procedure%2C%20clean%20medical%20spa%20environment%2C%20modern%20equipment%2C%20soft%20lighting%2C%20professional%20photography%2C%20high%20quality?width=1024&height=1024&model=flux-realism&enhance=true&nologo=true&private=true',
	},
];

// COMBOS MASCULINOS
export const COMBO_SERVICES_MALE: ComboServiceData[] = [
	{
		name: 'Combo Depilación Pecho + Abdomen',
		basePrice: 13000,
		includedServices: ['Pecho', 'Abdomen'],
		gender: 'MALE',
		imageUrl:
			'https://image.pollinations.ai/prompt/professional%20male%20torso%20abdomen%20hair%20removal%20combo%20treatment%2C%20laser%20procedure%2C%20clean%20medical%20spa%20environment%2C%20modern%20equipment%2C%20soft%20lighting%2C%20professional%20photography%2C%20high%20quality?width=1024&height=1024&model=flux-realism&enhance=true&nologo=true&private=true',
	},
	{
		name: 'Combo Depilación Espalda Completa',
		basePrice: 13000,
		includedServices: ['Espalda Alta', 'Espalda Baja'],
		gender: 'MALE',
		imageUrl:
			'https://image.pollinations.ai/prompt/professional%20male%20complete%20back%20hair%20removal%20combo%20treatment%2C%20laser%20procedure%2C%20clean%20medical%20spa%20environment%2C%20modern%20equipment%2C%20soft%20lighting%2C%20professional%20photography%2C%20high%20quality?width=1024&height=1024&model=flux-realism&enhance=true&nologo=true&private=true',
	},
	{
		name: 'Combo Depilación Boxer Completo',
		basePrice: 16500,
		includedServices: ['Cavado Completo', 'Tira', 'Glúteos'],
		gender: 'MALE',
		imageUrl:
			'https://image.pollinations.ai/prompt/professional%20male%20complete%20boxer%20hair%20removal%20combo%20treatment%2C%20clean%20medical%20spa%20environment%2C%20modern%20laser%20equipment%2C%20soft%20lighting%2C%20professional%20photography%2C%20high%20quality?width=1024&height=1024&model=flux-realism&enhance=true&nologo=true&private=true',
	},
	{
		name: 'Combo Depilación Pecho + Espalda Completa',
		basePrice: 17500,
		includedServices: ['Pecho', 'Espalda Alta', 'Espalda Baja'],
		gender: 'MALE',
		imageUrl:
			'https://image.pollinations.ai/prompt/professional%20male%20torso%20complete%20back%20hair%20removal%20combo%20treatment%2C%20laser%20procedure%2C%20clean%20medical%20spa%20environment%2C%20modern%20equipment%2C%20soft%20lighting%2C%20professional%20photography%2C%20high%20quality?width=1024&height=1024&model=flux-realism&enhance=true&nologo=true&private=true',
	},
	{
		name: 'Combo Depilación Espalda Completa + Pecho + Abdomen + Hombros + Axilas',
		basePrice: 27500,
		includedServices: ['Espalda Alta', 'Espalda Baja', 'Pecho', 'Abdomen', 'Hombros', 'Axilas'],
		gender: 'MALE',
		imageUrl:
			'https://image.pollinations.ai/prompt/professional%20male%20complete%20upper%20body%20hair%20removal%20combo%20treatment%2C%20laser%20procedure%2C%20clean%20medical%20spa%20environment%2C%20modern%20equipment%2C%20soft%20lighting%2C%20professional%20photography%2C%20high%20quality?width=1024&height=1024&model=flux-realism&enhance=true&nologo=true&private=true',
	},
	{
		name: 'Combo Depilación Espalda Completa + Hombros',
		basePrice: 17500,
		includedServices: ['Espalda Alta', 'Espalda Baja', 'Hombros'],
		gender: 'MALE',
		imageUrl:
			'https://image.pollinations.ai/prompt/professional%20male%20complete%20back%20shoulders%20hair%20removal%20combo%20treatment%2C%20laser%20procedure%2C%20clean%20medical%20spa%20environment%2C%20modern%20equipment%2C%20soft%20lighting%2C%20professional%20photography%2C%20high%20quality?width=1024&height=1024&model=flux-realism&enhance=true&nologo=true&private=true',
	},
	{
		name: 'Combo Depilación Piernas + Cavado + Tira',
		basePrice: 19000,
		includedServices: ['Pierna Entera', 'Cavado Completo', 'Tira'],
		gender: 'MALE',
		imageUrl:
			'https://image.pollinations.ai/prompt/professional%20male%20complete%20legs%20hair%20removal%20combo%20treatment%2C%20laser%20procedure%2C%20clean%20medical%20spa%20environment%2C%20modern%20equipment%2C%20soft%20lighting%2C%20professional%20photography%2C%20high%20quality?width=1024&height=1024&model=flux-realism&enhance=true&nologo=true&private=true',
	},
	{
		name: 'Combo Depilación Piernas + Pecho + Abdomen',
		basePrice: 22000,
		includedServices: ['Pierna Entera', 'Pecho', 'Abdomen'],
		gender: 'MALE',
		imageUrl:
			'https://image.pollinations.ai/prompt/professional%20male%20legs%20torso%20abdomen%20hair%20removal%20combo%20treatment%2C%20laser%20procedure%2C%20clean%20medical%20spa%20environment%2C%20modern%20equipment%2C%20soft%20lighting%2C%20professional%20photography%2C%20high%20quality?width=1024&height=1024&model=flux-realism&enhance=true&nologo=true&private=true',
	},
	{
		name: 'Combo Depilación Piernas + Pecho + Abdomen + Hombros',
		basePrice: 26000,
		includedServices: ['Pierna Entera', 'Pecho', 'Abdomen', 'Hombros'],
		gender: 'MALE',
		imageUrl:
			'https://image.pollinations.ai/prompt/professional%20male%20legs%20torso%20abdomen%20shoulders%20hair%20removal%20combo%20treatment%2C%20laser%20procedure%2C%20clean%20medical%20spa%20environment%2C%20modern%20equipment%2C%20soft%20lighting%2C%20professional%20photography%2C%20high%20quality?width=1024&height=1024&model=flux-realism&enhance=true&nologo=true&private=true',
	},
	{
		name: 'Combo Depilación Espalda Completa + Abdomen + Hombros',
		basePrice: 20000,
		includedServices: ['Espalda Alta', 'Espalda Baja', 'Abdomen', 'Hombros'],
		gender: 'MALE',
		imageUrl:
			'https://image.pollinations.ai/prompt/professional%20male%20complete%20back%20abdomen%20shoulders%20hair%20removal%20combo%20treatment%2C%20laser%20procedure%2C%20clean%20medical%20spa%20environment%2C%20modern%20equipment%2C%20soft%20lighting%2C%20professional%20photography%2C%20high%20quality?width=1024&height=1024&model=flux-realism&enhance=true&nologo=true&private=true',
	},
	{
		name: 'Combo Depilación Espalda Completa + Pecho + Hombros',
		basePrice: 20000,
		includedServices: ['Espalda Alta', 'Espalda Baja', 'Pecho', 'Hombros'],
		gender: 'MALE',
		imageUrl:
			'https://image.pollinations.ai/prompt/professional%20male%20complete%20back%20torso%20shoulders%20hair%20removal%20combo%20treatment%2C%20laser%20procedure%2C%20clean%20medical%20spa%20environment%2C%20modern%20equipment%2C%20soft%20lighting%2C%20professional%20photography%2C%20high%20quality?width=1024&height=1024&model=flux-realism&enhance=true&nologo=true&private=true',
	},
	{
		name: 'Combo Depilación Piernas + Espalda Completa',
		basePrice: 22000,
		includedServices: ['Pierna Entera', 'Espalda Alta', 'Espalda Baja'],
		gender: 'MALE',
		imageUrl:
			'https://image.pollinations.ai/prompt/professional%20male%20complete%20legs%20back%20hair%20removal%20combo%20treatment%2C%20laser%20procedure%2C%20clean%20medical%20spa%20environment%2C%20modern%20equipment%2C%20soft%20lighting%2C%20professional%20photography%2C%20high%20quality?width=1024&height=1024&model=flux-realism&enhance=true&nologo=true&private=true',
	},
	{
		name: 'Combo Depilación Piernas + Glúteos',
		basePrice: 19000,
		includedServices: ['Pierna Entera', 'Glúteos'],
		gender: 'MALE',
		imageUrl:
			'https://image.pollinations.ai/prompt/professional%20male%20complete%20legs%20glutes%20hair%20removal%20combo%20treatment%2C%20laser%20procedure%2C%20clean%20medical%20spa%20environment%2C%20modern%20equipment%2C%20soft%20lighting%2C%20professional%20photography%2C%20high%20quality?width=1024&height=1024&model=flux-realism&enhance=true&nologo=true&private=true',
	},
	{
		name: 'Combo Depilación Piernas + Glúteos + Cavado',
		basePrice: 25000,
		includedServices: ['Pierna Entera', 'Glúteos', 'Cavado Completo'],
		gender: 'MALE',
		imageUrl:
			'https://image.pollinations.ai/prompt/professional%20male%20complete%20legs%20glutes%20hair%20removal%20combo%20treatment%2C%20laser%20procedure%2C%20clean%20medical%20spa%20environment%2C%20modern%20equipment%2C%20soft%20lighting%2C%20professional%20photography%2C%20high%20quality?width=1024&height=1024&model=flux-realism&enhance=true&nologo=true&private=true',
	},
	{
		name: 'Combo Depilación Piernas + Espalda + Pecho + Abdomen',
		basePrice: 27000,
		includedServices: ['Pierna Entera', 'Espalda Alta', 'Espalda Baja', 'Pecho', 'Abdomen'],
		gender: 'MALE',
		imageUrl:
			'https://image.pollinations.ai/prompt/professional%20male%20complete%20body%20hair%20removal%20combo%20treatment%2C%20laser%20procedure%2C%20clean%20medical%20spa%20environment%2C%20modern%20equipment%2C%20soft%20lighting%2C%20professional%20photography%2C%20high%20quality?width=1024&height=1024&model=flux-realism&enhance=true&nologo=true&private=true',
	},
	{
		name: 'Combo Depilación Piernas + Espalda + Pecho + Abdomen + Cavado',
		basePrice: 30000,
		includedServices: ['Pierna Entera', 'Espalda Alta', 'Espalda Baja', 'Pecho', 'Abdomen', 'Cavado Completo'],
		gender: 'MALE',
		imageUrl:
			'https://image.pollinations.ai/prompt/professional%20male%20complete%20body%20hair%20removal%20combo%20treatment%2C%20laser%20procedure%2C%20clean%20medical%20spa%20environment%2C%20modern%20equipment%2C%20soft%20lighting%2C%20professional%20photography%2C%20high%20quality?width=1024&height=1024&model=flux-realism&enhance=true&nologo=true&private=true',
	},
	{
		name: 'Combo Depilación Piernas + Glúteos + Cavado + Espalda Baja',
		basePrice: 28000,
		includedServices: ['Pierna Entera', 'Glúteos', 'Cavado Completo', 'Espalda Baja'],
		gender: 'MALE',
		imageUrl:
			'https://image.pollinations.ai/prompt/professional%20male%20legss%20glutes%20lower%20back%20har%20removal%20combo%20treatment%2C%20laser%20procedure%2C%20clean%20medical%20spa%20environment%2C%20modern%20equipment%2C%20soft%20lighting%2C%20professional%20photography%2C%20high%20quality?width=1024&height=1024&model=flux-realism&enhance=true&nologo=true&private=true',
	},
	{
		name: 'Combo Depilación Piernas + Cavado + Axilas + Glúteos',
		basePrice: 28000,
		includedServices: ['Pierna Entera', 'Cavado Completo', 'Axilas', 'Glúteos'],
		gender: 'MALE',
		imageUrl:
			'https://image.pollinations.ai/prompt/professional%20male%20legs%20underarm%20glutes%20hair%20removal%20combo%20treatment%2C%20laser%20procedure%2C%20clean%20medical%20spa%20environment%2C%20modern%20equipment%2C%20soft%20lighting%2C%20professional%20photography%2C%20high%20quality?width=1024&height=1024&model=flux-realism&enhance=true&nologo=true&private=true',
	},
	{
		name: 'Combo Depilación Espalda Completa + Axilas + Cuello',
		basePrice: 23000,
		includedServices: ['Espalda Alta', 'Espalda Baja', 'Axilas', 'Cuello'],
		gender: 'MALE',
		imageUrl:
			'https://image.pollinations.ai/prompt/professional%20male%20complete%20back%20underarm%20neck%20hair%20removal%20combo%20treatment%2C%20laser%20procedure%2C%20clean%20medical%20spa%20environment%2C%20modern%20equipment%2C%20soft%20lighting%2C%20professional%20photography%2C%20high%20quality?width=1024&height=1024&model=flux-realism&enhance=true&nologo=true&private=true',
	},
	{
		name: 'Combo Depilación Brazos + Axilas',
		basePrice: 15000,
		includedServices: ['Brazos Completos', 'Axilas'],
		gender: 'MALE',
		imageUrl:
			'https://image.pollinations.ai/prompt/professional%20male%20complete%20arms%20underarm%20hair%20removal%20combo%20treatment%2C%20laser%20procedure%2C%20clean%20medical%20spa%20environment%2C%20modern%20equipment%2C%20soft%20lighting%2C%20professional%20photography%2C%20high%20quality?width=1024&height=1024&model=flux-realism&enhance=true&nologo=true&private=true',
	},
	{
		name: 'Combo Depilación Barba + Cuello',
		basePrice: 13000,
		includedServices: ['Barba', 'Cuello'],
		gender: 'MALE',
		imageUrl:
			'https://image.pollinations.ai/prompt/professional%20male%20beard%20neck%20hair%20removal%20combo%20treatment%2C%20laser%20procedure%2C%20clean%20medical%20spa%20environment%2C%20modern%20equipment%2C%20soft%20lighting%2C%20professional%20photography%2C%20high%20quality?width=1024&height=1024&model=flux-realism&enhance=true&nologo=true&private=true',
	},
	{
		name: 'Combo Depilación Barba + Cuello + Nuca',
		basePrice: 18000,
		includedServices: ['Barba', 'Cuello', 'Nuca'],
		gender: 'MALE',
		imageUrl:
			'https://image.pollinations.ai/prompt/professional%20male%20beard%20neck%20nape%20hair%20removal%20combo%20treatment%2C%20laser%20procedure%2C%20clean%20medical%20spa%20environment%2C%20modern%20equipment%2C%20soft%20lighting%2C%20professional%20photography%2C%20high%20quality?width=1024&height=1024&model=flux-realism&enhance=true&nologo=true&private=true',
	},
	{
		name: 'Combo Depilación Pecho + Abdomen + Pelvis',
		basePrice: 19000,
		includedServices: ['Pecho', 'Abdomen', 'Pelvis'],
		gender: 'MALE',
		imageUrl:
			'https://image.pollinations.ai/prompt/professional%20male%20torso%20abdomen%20pelvis%20hair%20removal%20combo%20treatment%2C%20laser%20procedure%2C%20clean%20medical%20spa%20environment%2C%20modern%20equipment%2C%20soft%20lighting%2C%20professional%20photography%2C%20high%20quality?width=1024&height=1024&model=flux-realism&enhance=true&nologo=true&private=true',
	},
	{
		name: 'Combo Depilación Full Cuerpo Completo Masculina',
		basePrice: 158000,
		includedServices: [
			'Pecho',
			'Abdomen',
			'Cintura',
			'Espalda Alta',
			'Axilas',
			'Hombros',
			'Brazos Completos',
			'Pierna Entera',
			'Cavado Completo',
			'Tira',
			'Glúteos',
			'Empeine - Dedos del pie',
		],
		gender: 'MALE',
		imageUrl:
			'https://image.pollinations.ai/prompt/professional%20male%20complete%20full%20body%20hair%20removal%20combo%20treatment%2C%20laser%20procedure%2C%20clean%20medical%20spa%20environment%2C%20modern%20equipment%2C%20soft%20lighting%2C%20professional%20photography%2C%20high%20quality?width=1024&height=1024&model=flux-realism&enhance=true&nologo=true&private=true',
	},
	{
		name: 'Combo Depilación Premium Completa Femenina',
		basePrice: 145000,
		includedServices: [
			'Pierna Completa',
			'Cavado Completo',
			'Tira de Cola',
			'Axila',
			'Bozo',
			'Rostro Completo',
			'Brazo Completo',
			'Espalda Completa',
		],
		imageUrl:
			'https://image.pollinations.ai/prompt/professional%20female%20premium%20complete%20hair%20removal%20combo%20treatment%2C%20laser%20procedure%2C%20clean%20medical%20spa%20environment%2C%20modern%20equipment%2C%20soft%20lighting%2C%20professional%20photography%2C%20high%20quality?width=1024&height=1024&model=flux-realism&enhance=true&nologo=true&private=true',
	},
];

// TRATAMIENTOS CORPORALES
export const BODY_TREATMENTS: BaseServiceData[] = [
	// Maderoterapia
	{
		name: 'Maderoterapia',
		basePrice: 21000,
		bodyParts: ['abdomen', 'gluteos', 'piernas'],
		duration: 30,
		imageUrl:
			'https://image.pollinations.ai/prompt/professional%20wood%20therapy%20maderoterapia%20treatment%2C%20aesthetic%20clinic%20environment%2C%20wooden%20tools%2C%20modern%20equipment%2C%20soft%20lighting%2C%20professional%20photography%2C%20high%20quality?width=1024&height=1024&model=flux-realism&enhance=true&nologo=true&private=true',
	},
	{
		name: 'Maderoterapia + Presoterapia',
		basePrice: 26500,
		bodyParts: ['abdomen', 'gluteos', 'piernas'],
		duration: 80,
		imageUrl:
			'https://image.pollinations.ai/prompt/professional%20wood%20therapy%20pressotherapy%20combo%20treatment%2C%20aesthetic%20clinic%20environment%2C%20modern%20equipment%2C%20soft%20lighting%2C%20professional%20photography%2C%20high%20quality?width=1024&height=1024&model=flux-realism&enhance=true&nologo=true&private=true',
	},

	// Mio Up
	{
		name: 'Mio Up 1 Zona',
		basePrice: 10800,
		bodyParts: ['abdomen'],
		duration: 30,
		imageUrl:
			'https://image.pollinations.ai/prompt/professional%20mio%20up%20muscle%20stimulation%20treatment%2C%20aesthetic%20clinic%20environment%2C%20modern%20equipment%2C%20soft%20lighting%2C%20professional%20photography%2C%20high%20quality?width=1024&height=1024&model=flux-realism&enhance=true&nologo=true&private=true',
	},
	{
		name: 'Mio Up 2 Zonas',
		basePrice: 20500,
		bodyParts: ['abdomen', 'gluteos'],
		duration: 45,
		imageUrl:
			'https://image.pollinations.ai/prompt/professional%20mio%20up%20dual%20zone%20muscle%20stimulation%20treatment%2C%20aesthetic%20clinic%20environment%2C%20modern%20equipment%2C%20soft%20lighting%2C%20professional%20photography%2C%20high%20quality?width=1024&height=1024&model=flux-realism&enhance=true&nologo=true&private=true',
	},

	// Alpha Synergy
	{
		name: 'Alpha Synergy 1 Zona',
		basePrice: 15000,
		bodyParts: ['abdomen'],
		duration: 20,
		imageUrl:
			'https://image.pollinations.ai/prompt/professional%20alpha%20synergy%20body%20contori%20treatment%2C%20aesthetic%20clinic%20environment%2C%20modern%20equipment%2C%20soft%20lighting%2C%20professional%20photography%2C%20high%20quality?width=1024&height=1024&model=flux-realism&enhance=true&nologo=true&private=true',
	},
	{
		name: 'Alpha Synergy 2 Zonas',
		basePrice: 25000,
		bodyParts: ['abdomen', 'gluteos'],
		duration: 40,
		imageUrl:
			'https://image.pollinations.ai/prompt/professional%20alpha%20synergy%20dual%20zone%20body%20contourin%20treatment%2C%20aesthetic%20clinic%20environment%2C%20modern%20equipment%2C%20soft%20lighting%2C%20professional%20photography%2C%20high%20quality?width=1024&height=1024&model=flux-realism&enhance=true&nologo=true&private=true',
	},

	// Vacuum Therapy
	{
		name: 'Vacuum Therapy Glúteos',
		basePrice: 10000,
		bodyParts: ['gluteos'],
		duration: 30,
		imageUrl:
			'https://image.pollinations.ai/prompt/professional%20vacuum%20therapy%20glutes%20treatment%2C%20aesthetic%20clinic%20environment%2C%20modern%20equipment%2C%20soft%20lighting%2C%20professional%20photography%2C%20high%20quality?width=1024&height=1024&model=flux-realism&enhance=true&nologo=true&private=true',
	},

	// Combos corporales
	{
		name: 'Mio Up + Maderoterapia',
		basePrice: 26000,
		bodyParts: ['abdomen', 'gluteos'],
		duration: 60,
		imageUrl:
			'https://image.pollinations.ai/prompt/professional%20mio%20up%20wood%20therapy%20combo%20treatment%2C%20aesthetic%20clinic%20environment%2C%20modern%20equipment%2C%20soft%20lighting%2C%20professional%20photography%2C%20high%20quality?width=1024&height=1024&model=flux-realism&enhance=true&nologo=true&private=true',
	},
	{
		name: 'Madero + Alpha Synergy',
		basePrice: 26500,
		bodyParts: ['abdomen', 'gluteos'],
		duration: 60,
		imageUrl:
			'https://image.pollinations.ai/prompt/professional%20wood%20therapy%20alpha%20synergy%20combo%20treatment%2C%20aesthetic%20clinic%20environment%2C%20modern%20equipment%2C%20soft%20lighting%2C%20professional%20photography%2C%20high%20quality?width=1024&height=1024&model=flux-realism&enhance=true&nologo=true&private=true',
	},
	{
		name: 'Alpha + Mio Up',
		basePrice: 24000,
		bodyParts: ['abdomen', 'gluteos'],
		duration: 50,
		imageUrl:
			'https://image.pollinations.ai/prompt/professional%20alpha%20synergy%20mio%20up%20combo%20treatment%2C%20aesthetic%20clinic%20environment%2C%20modern%20equipment%2C%20soft%20lighting%2C%20professional%20photography%2C%20high%20quality?width=1024&height=1024&model=flux-realism&enhance=true&nologo=true&private=true',
	},
	{
		name: 'Vacuum + Mio Up',
		basePrice: 15000,
		bodyParts: ['gluteos'],
		duration: 60,
		imageUrl:
			'https://image.pollinations.ai/prompt/professional%20vacuum%20therapy%20mio%20up%20combo%20treatment%2C%20aesthetic%20clinic%20environment%2C%20modern%20equipment%2C%20soft%20lighting%2C%20professional%20photography%2C%20high%20quality?width=1024&height=1024&model=flux-realism&enhance=true&nologo=true&private=true',
	},
	{
		name: 'Combo Glúteos Completo',
		basePrice: 38000,
		bodyParts: ['gluteos'],
		duration: 90,
		imageUrl:
			'https://image.pollinations.ai/prompt/professional%20body%20contouring%20combo%20treatment%2C%20aesthetic%20clinic%20environment%2C%20modern%20equipmen%2C%20soft%20lighting%2C%20professional%20photography%2C%20high%20quality?width=1024&height=1024&model=flux-realism&enhance=true&nologo=true&private=true',
	},
	{
		name: 'Tratamiento Corporal VIP Completo',
		basePrice: 125000,
		bodyParts: ['abdomen', 'gluteos', 'piernas', 'espalda'],
		duration: 150,
		imageUrl:
			'https://image.pollinations.ai/prompt/luxury%20VIP%20wellness%20treatment%2C%20premium%20aesthetic%20clinic%20environment%2C%20modern%20equipment%2C%20soft%20lighting%2C%20professional%20photography%2C%20high%20quality?width=1024&height=1024&model=flux-realism&enhance=true&nologo=true&private=true',
	},
];

// TRATAMIENTOS FACIALES
export const FACIAL_TREATMENTS: BaseServiceData[] = [
	{
		name: 'Limpieza Facial Profunda',
		basePrice: 25000,
		bodyParts: ['rostro'],
		duration: 60,
		imageUrl:
			'https://image.pollinations.ai/prompt/professional%20deep%20facial%20cleansing%20treatment%2C%20aesthetic%20clinic%20environment%2C%20modern%20equipment%2C%20soft%20lighting%2C%20professional%20photography%2C%20high%20quality?width=1024&height=1024&model=flux-realism&enhance=true&nologo=true&private=true',
	},
	{
		name: 'Alpha Facial',
		basePrice: 25500,
		bodyParts: ['rostro', 'cuello'],
		duration: 60,
		imageUrl:
			'https://image.pollinations.ai/prompt/professional%20alpha%20facial%20treatment%2C%20aesthetic%20clinic%20environment%2C%20modern%20equipment%2C%20soft%20lighting%2C%20professional%20photography%2C%20high%20quality?width=1024&height=1024&model=flux-realism&enhance=true&nologo=true&private=true',
	},
	{
		name: 'Peeling Químico',
		basePrice: 30000,
		bodyParts: ['rostro'],
		duration: 45,
		imageUrl:
			'https://image.pollinations.ai/prompt/professional%20chemical%20peeling%20facial%20treatment%2C%20aesthetic%20clinic%20environment%2C%20modern%20equipment%2C%20soft%20lighting%2C%20professional%20photography%2C%20high%20quality?width=1024&height=1024&model=flux-realism&enhance=true&nologo=true&private=true',
	},
	{
		name: 'Dermaplaning',
		basePrice: 25000,
		bodyParts: ['rostro'],
		duration: 45,
		imageUrl:
			'https://image.pollinations.ai/prompt/professional%20dermaplaning%20facial%20treatment%2C%20aesthetic%20clinic%20environment%2C%20modern%20equipment%2C%20soft%20lighting%2C%20professional%20photography%2C%20high%20quality?width=1024&height=1024&model=flux-realism&enhance=true&nologo=true&private=true',
	},
	{
		name: 'Microblading',
		basePrice: 140000,
		bodyParts: ['rostro'],
		duration: 120,
		imageUrl:
			'https://image.pollinations.ai/prompt/professional%20microblading%20eyebrow%20treatment%2C%20aesthetic%20clinic%20environment%2C%20modern%20equipment%2C%20soft%20lighting%2C%20professional%20photography%2C%20high%20quality?width=1024&height=1024&model=flux-realism&enhance=true&nologo=true&private=true',
	},
	{
		name: 'Dermopigmentación Labial',
		basePrice: 130000,
		bodyParts: ['rostro'],
		duration: 90,
		imageUrl:
			'https://image.pollinations.ai/prompt/professional%20lip%20dermopigmentation%20treatment%2C%20aesthetic%20clinic%20environment%2C%20modern%20equipment%2C%20soft%20lighting%2C%20professional%20photography%2C%20high%20quality?width=1024&height=1024&model=flux-realism&enhance=true&nologo=true&private=true',
	},
	{
		name: 'Tratamiento Facial Premium Anti-Edad',
		basePrice: 125000,
		bodyParts: ['rostro', 'cuello'],
		duration: 90,
		imageUrl:
			'https://image.pollinations.ai/prompt/professional%20premium%20anti%20aging%20facial%20treatment%2C%20luxury%20aesthetic%20clinic%20environment%2C%20modern%20equipment%2C%20soft%20lighting%2C%20professional%20photography%2C%20high%20quality?width=1024&height=1024&model=flux-realism&enhance=true&nologo=true&private=true',
	},
];

// MASAJES
export const MASSAGE_SERVICES: BaseServiceData[] = [
	{
		name: 'Masaje Descontracturante 50min',
		basePrice: 28500,
		bodyParts: ['espalda', 'cuello'],
		duration: 50,
		imageUrl:
			'https://image.pollinations.ai/prompt/professional%20therapeutic%20massage%20treatment%2C%20relaxing%20spa%20environment%2C%20modern%20equipment%2C%20soft%20lighting%2C%20professional%20photography%2C%20high%20quality?width=1024&height=1024&model=flux-realism&enhance=true&nologo=true&private=true',
	},
	{
		name: 'Masaje Descontracturante 30min',
		basePrice: 22500,
		bodyParts: ['espalda', 'cuello'],
		duration: 30,
		imageUrl:
			'https://image.pollinations.ai/prompt/professional%20short%20therapeutic%20massage%20treatment%2C%20relaxing%20spa%20environment%2C%20modern%20equipment%2C%20soft%20lighting%2C%20professional%20photography%2C%20high%20quality?width=1024&height=1024&model=flux-realism&enhance=true&nologo=true&private=true',
	},
	{
		name: 'Masaje Deportivo',
		basePrice: 24500,
		bodyParts: ['piernas', 'brazos'],
		duration: 30,
		imageUrl:
			'https://image.pollinations.ai/prompt/professional%20sports%20massage%20treatment%2C%20athletic%20spa%20environment%2C%20modern%20equipment%2C%20soft%20lighting%2C%20professional%20photography%2C%20high%20quality?width=1024&height=1024&model=flux-realism&enhance=true&nologo=true&private=true',
	},
	{
		name: 'Piedras Calientes',
		basePrice: 32500,
		bodyParts: ['espalda', 'piernas'],
		duration: 50,
		imageUrl:
			'https://image.pollinations.ai/prompt/professional%20hot%20stone%20massage%20treatment%2C%20relaxing%20spa%20environment%2C%20heated%20stones%2C%20soft%20lighting%2C%20professional%20photography%2C%20high%20quality?width=1024&height=1024&model=flux-realism&enhance=true&nologo=true&private=true',
	},
	{
		name: 'Reflexología',
		basePrice: 28500,
		bodyParts: ['pies'],
		duration: 50,
		imageUrl:
			'https://image.pollinations.ai/prompt/professional%20reflexology%20foot%20massage%20treatment%2C%20relaxing%20spa%20environment%2C%20modern%20equipment%2C%20soft%20lighting%2C%20professional%20photography%2C%20high%20quality?width=1024&height=1024&model=flux-realism&enhance=true&nologo=true&private=true',
	},
	{
		name: 'Drenaje Linfático',
		basePrice: 32500,
		bodyParts: ['piernas', 'abdomen'],
		duration: 60,
		imageUrl:
			'https://image.pollinations.ai/prompt/professional%20lymphatic%20drainage%20massage%20treatment%2C%20therapeutic%20spa%20environment%2C%20modern%20equipment%2C%20soft%20lighting%2C%20professional%20photography%2C%20high%20quality?width=1024&height=1024&model=flux-realism&enhance=true&nologo=true&private=true',
	},
];

// OTROS SERVICIOS
export const OTHER_SERVICES: BaseServiceData[] = [
	{
		name: 'Bronceado Natural',
		basePrice: 27000,
		bodyParts: ['cuerpo'],
		duration: 45,
		imageUrl:
			'https://image.pollinations.ai/prompt/professional%20natural%20tanning%20treatment%2C%20aesthetic%20clinic%20environment%2C%20modern%20equipment%2C%20soft%20lighting%2C%20professional%20photography%2C%20high%20quality?width=1024&height=1024&model=flux-realism&enhance=true&nologo=true&private=true',
	},
];

// PACKS DE TRATAMIENTOS
export const PACK_SERVICES: PackServiceData[] = [
	// Packs Maderoterapia
	{
		name: 'Pack 4 Maderoterapia',
		basePrice: 79000,
		sessions: 4,
		includedServices: ['Maderoterapia'],
		imageUrl:
			'https://image.pollinations.ai/prompt/professional%20maderoterapia%20wood%20therapy%20package%2C%20aesthetic%20clinic%20environment%2C%20wooden%20tools%2C%20modern%20equipment%2C%20soft%20lighting%2C%20professional%20photography%2C%20high%20quality?width=1024&height=1024&model=flux-realism&enhance=true&nologo=true&private=true',
	},
	{
		name: 'Pack 4 Maderoterapia + Presoterapia',
		basePrice: 98000,
		sessions: 4,
		includedServices: ['Maderoterapia + Presoterapia'],
		imageUrl:
			'https://image.pollinations.ai/prompt/professional%20maderoterapia%20and%20pressotherapy%20package%2C%20aesthetic%20clinic%20environment%2C%20wooden%20tools%20and%20pressure%20equipment%2C%20modern%20spa%2C%20soft%20lighting%2C%20professional%20photography%2C%20high%20quality?width=1024&height=1024&model=flux-realism&enhance=true&nologo=true&private=true',
	},

	// Packs Mio Up
	{
		name: 'Pack 4 Mio Up 1 Zona',
		basePrice: 40000,
		sessions: 4,
		includedServices: ['Mio Up 1 Zona'],
		imageUrl:
			'https://image.pollinations.ai/prompt/professional%20mio%20up%20muscle%20stimulation%20package%2C%20aesthetic%20clinic%20environment%2C%20modern%20equipment%2C%20soft%20lighting%2C%20professional%20photography%2C%20high%20quality?width=1024&height=1024&model=flux-realism&enhance=true&nologo=true&private=true',
	},
	{
		name: 'Pack 4 Mio Up 2 Zonas',
		basePrice: 78000,
		sessions: 4,
		includedServices: ['Mio Up 2 Zonas'],
		imageUrl:
			'https://image.pollinations.ai/prompt/professional%20mio%20up%20muscle%20stimulation%20two%20zones%20package%2C%20aesthetic%20clinic%20environment%2C%20modern%20equipment%2C%20soft%20lighting%2C%20professional%20photography%2C%20high%20quality?width=1024&height=1024&model=flux-realism&enhance=true&nologo=true&private=true',
	},

	// Packs Alpha Synergy
	{
		name: 'Pack 4 Alpha Synergy 1 Zona',
		basePrice: 57000,
		sessions: 4,
		includedServices: ['Alpha Synergy 1 Zona'],
		imageUrl:
			'https://image.pollinations.ai/prompt/professional%20alpha%20synergy%20radiofreuec%20package%2C%20aesthetic%20clinic%20environment%2C%20modern%20equipment%2C%20soft%20lighting%2C%20professional%20photography%2C%20high%20quality?width=1024&height=1024&model=flux-realism&enhance=true&nologo=true&private=true',
	},
	{
		name: 'Pack 4 Alpha Synergy 2 Zonas',
		basePrice: 89000,
		sessions: 4,
		includedServices: ['Alpha Synergy 2 Zonas'],
		imageUrl:
			'https://image.pollinations.ai/prompt/professional%20alpha%20synergy%20radiofrequency%20two%20zones%20package%2C%20aesthetic%20clinic%20environment%2C%20modern%20equipment%2C%20soft%20lighting%2C%20professional%20photography%2C%20high%20quality?width=1024&height=1024&model=flux-realism&enhance=true&nologo=true&private=true',
	},

	// Packs Vacuum
	{
		name: 'Pack 4 Vacuum Glúteos',
		basePrice: 38000,
		sessions: 4,
		includedServices: ['Vacuum Therapy Glúteos'],
		imageUrl:
			'https://image.pollinations.ai/prompt/professional%20vacuum%20therapy%20glutes%20package%2C%20aesthetic%20clinic%20environment%2C%20modern%20equipment%2C%20soft%20lighting%2C%20professional%20photography%2C%20high%20quality?width=1024&height=1024&model=flux-realism&enhance=true&nologo=true&private=true',
	},

	// Packs Combos
	{
		name: 'Pack 4 Vacuum + Mio Up',
		basePrice: 56000,
		sessions: 4,
		includedServices: ['Vacuum + Mio Up'],
		imageUrl:
			'https://image.pollinations.ai/prompt/professional%20vacuum%20therapy%20and%20mio%20up%20combo%20package%2C%20aesthetic%20clinic%20environment%2C%20modern%20equipment%2C%20soft%20lighting%2C%20professional%20photography%2C%20high%20quality?width=1024&height=1024&model=flux-realism&enhance=true&nologo=true&private=true',
	},
	{
		name: 'Pack 4 Madero + Alpha',
		basePrice: 99000,
		sessions: 4,
		includedServices: ['Madero + Alpha Synergy'],
		imageUrl:
			'https://image.pollinations.ai/prompt/professional%20maderoterapia%20and%20alpha%20synergy%20combo%20package%2C%20aesthetic%20clinic%20environment%2C%20wooden%20tools%20and%20modern%20equipment%2C%20soft%20lighting%2C%20professional%20photography%2C%20high%20quality?width=1024&height=1024&model=flux-realism&enhance=true&nologo=true&private=true',
	},
	{
		name: 'Pack 4 Alpha + Mio Up',
		basePrice: 89000,
		sessions: 4,
		includedServices: ['Alpha + Mio Up'],
		imageUrl:
			'https://image.pollinations.ai/prompt/professional%20alpha%20synergy%20and%20mio%20up%20combo%20package%2C%20aesthetic%20clinic%20environment%2C%20modern%20equipment%2C%20soft%20lighting%2C%20professional%20photography%2C%20high%20quality?width=1024&height=1024&model=flux-realism&enhance=true&nologo=true&private=true',
	},
	{
		name: 'Pack 4 Mio Up + Maderoterapia',
		basePrice: 96000,
		sessions: 4,
		includedServices: ['Mio Up + Maderoterapia'],
		imageUrl:
			'https://image.pollinations.ai/prompt/professional%20mio%20up%20and%20maderoterapia%20combo%20package%2C%20aesthetic%20clinic%20environment%2C%20modern%20and%20wooden%20equipment%2C%20soft%20lighting%2C%20professional%20photography%2C%20high%20quality?width=1024&height=1024&model=flux-realism&enhance=true&nologo=true&private=true',
	},
	{
		name: 'Pack 4 Combo Glúteos',
		basePrice: 140000,
		sessions: 4,
		includedServices: ['Combo Glúteos Completo'],
		imageUrl:
			'https://image.pollinations.ai/prompt/professional%20glutes%20complete%20combo%20package%2C%20aesthetic%20clinic%20environment%2C%20modern%20equipment%2C%20soft%20lighting%2C%20professional%20photography%2C%20high%20quality?width=1024&height=1024&model=flux-realism&enhance=true&nologo=true&private=true',
	},
	{
		name: 'Pack 6 Tratamiento Corporal Premium',
		basePrice: 185000,
		sessions: 6,
		includedServices: ['Maderoterapia + Presoterapia', 'Alpha Synergy 2 Zonas'],
		imageUrl:
			'https://image.pollinations.ai/prompt/premium%20wellness%20treatment%20package%2C%20luxury%20aesthetic%20clinic%20environment%2C%20modern%20equipment%2C%20soft%20lighting%2C%20professional%20photography%2C%20high%20quality?width=1024&height=1024&model=flux-realism&enhance=true&nologo=true&private=true',
	},
	{
		name: 'Pack 8 Depilación Completa Premium',
		basePrice: 220000,
		sessions: 8,
		includedServices: ['Combo Premium Depilación Completa Femenina'],
		imageUrl:
			'https://image.pollinations.ai/prompt/professional%20premium%20complete%20hair%20removal%20package%2C%20laser%20procedure%2C%20luxury%20medical%20spa%20environment%2C%20modern%20equipment%2C%20soft%20lighting%2C%20professional%20photography%2C%20high%20quality?width=1024&height=1024&model=flux-realism&enhance=true&nologo=true&private=true',
	},

	// Packs Faciales
	{
		name: 'Pack 4 Alpha Facial',
		basePrice: 95000,
		sessions: 4,
		includedServices: ['Alpha Facial'],
		imageUrl:
			'https://image.pollinations.ai/prompt/professional%20alpha%20facial%20radiofrequency%20package%2C%20luxury%20aesthetic%20clinic%20environment%2C%20modern%20equipment%2C%20soft%20lighting%2C%20professional%20photography%2C%20high%20quality?width=1024&height=1024&model=flux-realism&enhance=true&nologo=true&private=true',
	},
	{
		name: 'Pack 6 Peeling Químico',
		basePrice: 170000,
		sessions: 6,
		includedServices: ['Peeling Químico'],
		imageUrl:
			'https://image.pollinations.ai/prompt/professional%20chemical%20peeling%20package%2C%20luxury%20aesthetic%20clinic%20environment%2C%20modern%20equipment%2C%20soft%20lighting%2C%20professional%20photography%2C%20high%20quality?width=1024&height=1024&model=flux-realism&enhance=true&nologo=true&private=true',
	},
	{
		name: 'Pack 4 Microblading + Retoque',
		basePrice: 195000,
		sessions: 4,
		includedServices: ['Microblading'],
		imageUrl:
			'https://image.pollinations.ai/prompt/professional%20microblading%20eyebrows%20package%2C%20luxury%20aesthetic%20clinic%20environment%2C%20modern%20equipment%2C%20soft%20lighting%2C%20professional%20photography%2C%20high%20quality?width=1024&height=1024&model=flux-realism&enhance=true&nologo=true&private=true',
	},
	{
		name: 'Pack 10 Tratamiento Facial Anti-Edad Premium',
		basePrice: 350000,
		sessions: 10,
		includedServices: ['Tratamiento Facial Premium Anti-Edad'],
		imageUrl:
			'https://image.pollinations.ai/prompt/professional%20premium%20anti%20aging%20facial%20treatment%20package%2C%20luxury%20aesthetic%20clinic%20environment%2C%20modern%20equipment%2C%20soft%20lighting%2C%20professional%20photography%2C%20high%20quality?width=1024&height=1024&model=flux-realism&enhance=true&nologo=true&private=true',
	},
];

// FUNCIÓN PARA OBTENER TODOS LOS SERVICIOS INDIVIDUALES
export function getAllIndividualServices(): BaseServiceData[] {
	return [
		...INDIVIDUAL_SERVICES_FEMALE,
		...INDIVIDUAL_SERVICES_MALE,
		...BODY_TREATMENTS,
		...FACIAL_TREATMENTS,
		...MASSAGE_SERVICES,
		...OTHER_SERVICES,
	];
}

// FUNCIÓN PARA OBTENER TODOS LOS COMBOS
export function getAllComboServices(): ComboServiceData[] {
	return [...COMBO_SERVICES_FEMALE, ...COMBO_SERVICES_MALE];
}

// FUNCIÓN PARA OBTENER TODOS LOS PACKS
export function getAllPackServices(): PackServiceData[] {
	return PACK_SERVICES;
}

// FUNCIÓN PARA OBTENER SERVICIOS POR GÉNERO
export function getServicesByGender(gender: GenderType): BaseServiceData[] {
	const allServices = getAllIndividualServices();
	return allServices.filter((service) => !service.gender || service.gender === gender || service.gender === 'UNISEX');
}

// FUNCIÓN PARA OBTENER SERVICIOS POR CATEGORÍA
export function getServicesByCategory(category: string): BaseServiceData[] {
	const allServices = getAllIndividualServices();

	switch (category) {
		case 'depilacion':
		case 'depilacion-femenina':
			return INDIVIDUAL_SERVICES_FEMALE;
		case 'depilacion-masculina':
			return INDIVIDUAL_SERVICES_MALE;
		case 'tratamientos-corporales':
			return BODY_TREATMENTS;
		case 'tratamientos-faciales':
			return FACIAL_TREATMENTS;
		case 'masajes':
			return MASSAGE_SERVICES;
		default:
			return allServices;
	}
}
