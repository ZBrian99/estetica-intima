import { z } from 'zod';

// Enums que coinciden con Prisma
export const ServiceType = z.enum(['INDIVIDUAL', 'COMBO', 'PACK']);
export const Gender = z.enum(['MALE', 'FEMALE', 'UNISEX']);
export const SortByFields = z.enum(['name', 'price', 'createdAt', 'order', 'type']);
export const SortOrder = z.enum(['asc', 'desc']);

// Schema base común para todos los servicios
const baseServiceSchema = z.object({
	name: z.string().min(1, 'El nombre es requerido'),
	description: z.string().optional(),
	slug: z.string().min(1, 'El slug es requerido'),
	price: z.number().positive('El precio debe ser positivo'),
	promoPrice: z.number().positive().optional(),
	duration: z.number().int().positive().optional(),
	sessions: z.number().int().positive().optional(),
	gender: Gender.default('UNISEX'),
	categories: z.array(z.string()).min(1, 'Debe tener al menos una categoría'),
	bodyParts: z.array(z.string()).default([]),
	tags: z.array(z.string()).default([]),
	includedServices: z.array(z.string()).default([]),
	imageUrl: z.url().optional(),
	images: z.array(z.url()).default([]),
	isActive: z.boolean().default(true),
	order: z.number().int().default(0),
	isFeatured: z.boolean().default(false),
	isPopular: z.boolean().default(false),
	isNew: z.boolean().default(false),
});

// Schemas específicos por tipo de servicio
export const individualServiceSchema = baseServiceSchema.extend({
	type: z.literal('INDIVIDUAL'),
	sessions: z.literal(null).optional(),
});

export const comboServiceSchema = baseServiceSchema.extend({
	type: z.literal('COMBO'),
	sessions: z.literal(null).optional(),
	includedServices: z.array(z.string()).min(2, 'Un combo debe incluir al menos 2 servicios'),
});

export const packServiceSchema = baseServiceSchema.extend({
	type: z.literal('PACK'),
	sessions: z.number().int().min(2, 'Un pack debe tener al menos 2 sesiones'),
	includedServices: z.array(z.string()).min(1, 'Un pack debe incluir al menos 1 servicio o combo'),
});

// Schema discriminado principal
export const serviceSchema = z.discriminatedUnion('type', [
	individualServiceSchema,
	comboServiceSchema,
	packServiceSchema,
]);

// Schemas para operaciones CRUD
export const createServiceSchema = serviceSchema;

export const updateServiceSchema = z
	.object({
		// Campos comunes opcionales
		name: z.string().min(1, 'El nombre es requerido').optional(),
		description: z.string().optional(),
		slug: z.string().min(1, 'El slug es requerido').optional(),
		price: z.number().positive('El precio debe ser positivo').optional(),
		promoPrice: z.number().positive().optional(),
		duration: z.number().int().positive().optional(),
		gender: Gender.optional(),
		categories: z.array(z.string()).min(1, 'Debe tener al menos una categoría').optional(),
		bodyParts: z.array(z.string()).optional(),
		tags: z.array(z.string()).optional(),
		imageUrl: z.url().optional(),
		images: z.array(z.url()).optional(),
		isActive: z.boolean().optional(),
		order: z.number().int().optional(),
		isFeatured: z.boolean().optional(),
		isPopular: z.boolean().optional(),
		isNew: z.boolean().optional(),
		// Campos específicos por tipo
		type: ServiceType.optional(),
		sessions: z.number().int().positive().optional(),
		includedServices: z.array(z.string()).optional(),
	})
	.refine(
		(data) => {
			const rest = data;
			return Object.keys(rest).length > 0;
		},
		{ message: 'Debes enviar al menos un campo para actualizar además del ID' }
	);

export const deleteServiceSchema = z.object({
	hard: z
		.string()
		.optional()
		.transform((val) => {
			if (val === undefined) return undefined;
			return val === 'true';
		}),
});

// Schema para filtros (usado internamente)
export const serviceFiltersSchema = z
	.object({
		page: z.number().int().min(1).optional(),
		// page: z.number().int().min(1).optional().default(1),
		// limit: z.number().int().min(1).max(100).optional().default(10),
		search: z.string().optional(),
		type: ServiceType.optional(),
		categories: z.array(z.string()).optional(),
		bodyParts: z.array(z.string()).optional(),
		tags: z.array(z.string()).optional(),
		gender: Gender.optional(),
		minPrice: z.number().min(0).optional(),
		maxPrice: z.number().min(0).optional(),
		hasPromo: z.boolean().optional(),
		isActive: z.boolean().optional(),
		isFeatured: z.boolean().optional(),
		isPopular: z.boolean().optional(),
		isNew: z.boolean().optional(),
		sortBy: SortByFields.optional(),
		sortOrder: SortOrder.optional(),
		// sortBy: SortByFields.optional().default('createdAt'),
		// sortOrder: SortOrder.optional().default('desc'),
	})
	.refine(
		(data) => {
			if (data.minPrice !== undefined && data.maxPrice !== undefined) {
				return data.minPrice <= data.maxPrice;
			}
			return true;
		},
		{
			message: 'El precio mínimo debe ser menor o igual al máximo',
			path: ['minPrice'],
		}
	);

// Schema simplificado para URL params
export const urlServiceFiltersSchema = z
	.object({
		page: z.coerce.number().int().min(1).default(1),
		// limit: z.coerce.number().int().min(1).max(100).default(10),
		search: z.string().optional(),
		type: ServiceType.optional(),
		categories: z
			.string()
			.optional()
			.transform((val) => (val ? val.split(',') : undefined)),
		bodyParts: z
			.string()
			.optional()
			.transform((val) => (val ? val.split(',') : undefined)),
		tags: z
			.string()
			.optional()
			.transform((val) => (val ? val.split(',') : undefined)),
		gender: Gender.optional(),
		minPrice: z.coerce.number().min(0).optional(),
		maxPrice: z.coerce.number().min(0).optional(),
		hasPromo: z
			.string()
			.optional()
			.transform((val) => {
				if (val === undefined) return undefined;
				return val === 'true';
			}),
		isActive: z
			.string()
			.optional()
			.transform((val) => {
				if (val === undefined) return undefined;
				return val === 'true';
			}),
		isFeatured: z
			.string()
			.optional()
			.transform((val) => {
				if (val === undefined) return undefined;
				return val === 'true';
			}),
		isPopular: z
			.string()
			.optional()
			.transform((val) => {
				if (val === undefined) return undefined;
				return val === 'true';
			}),
		isNew: z
			.string()
			.optional()
			.transform((val) => {
				if (val === undefined) return undefined;
				return val === 'true';
			}),
		sortBy: SortByFields.default('createdAt'),
		sortOrder: SortOrder.default('asc'),
	})
	.refine(
		(data) => {
			if (data.minPrice !== undefined && data.maxPrice !== undefined) {
				return data.minPrice <= data.maxPrice;
			}
			return true;
		},
		{
			message: 'El precio mínimo debe ser menor o igual al máximo',
			path: ['minPrice'],
		}
	);

// Tipos TypeScript inferidos
export type ServiceInput = z.infer<typeof serviceSchema>;
export type ServiceType = z.infer<typeof ServiceType>;
export type GenderType = z.infer<typeof Gender>;
export type CreateServiceInput = z.infer<typeof createServiceSchema>;
export type UpdateServiceInput = z.infer<typeof updateServiceSchema>;
export type DeleteServiceInput = z.infer<typeof deleteServiceSchema>;
export type ServicesFiltersType = z.infer<typeof serviceFiltersSchema>;
export type UrlServicesFiltersType = z.infer<typeof urlServiceFiltersSchema>;

export type ServiceResponse = ServiceInput & {
	id: string;
	createdAt: Date;
	updatedAt: Date;
};
