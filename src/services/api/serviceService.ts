import { ZodType } from 'zod';
import { prisma } from '@/lib/prisma';
import { Prisma } from '@prisma/client';
import { deleteServiceSchema, UrlServicesFiltersType } from '@/schemas/servicesSchema';
import { API_GLOBAL_LIMIT } from '@/lib/constants';

export const parseQueryParams = <T>(req: Request, schema: ZodType<T>) => {
	const { searchParams } = new URL(req.url);

	const rawFilters = Object.fromEntries(searchParams.entries());
	const parsedFilters = schema.parse(rawFilters);

	return parsedFilters;
};

export const parseBody = async <T>(req: Request, schema: ZodType<T>) => {
	const body = await req.json();
	const parseBody = schema.parse(body);
	return parseBody;
};
// TODO: verficar todos los filtros
export const buildServiceFilters = (filters: UrlServicesFiltersType, isAdmin: boolean) => {
	const {
		type,
		gender,
		categories,
		bodyParts,
		tags,
		minPrice,
		maxPrice,
		hasPromo,
		isActive,
		isFeatured,
		isNew,
		isPopular,
		search,
	} = filters;

	const baseWhere: Prisma.ServiceWhereInput = {
		// Solo aplicar isActive si se proporciona, sino usar true por defecto
		isActive: true,
		...(type && { type }),
		...(gender && gender !== 'UNISEX' && { gender: { in: [gender, 'UNISEX'] } }),
		...(categories?.length && { categories: { hasEvery: categories } }),
		...(bodyParts?.length && { bodyParts: { hasEvery: bodyParts } }),
		// Filtro específico por tags
		...(tags?.length && { tags: { hasEvery: tags } }),
		...(minPrice && { price: { gte: minPrice } }),
		...(maxPrice && { price: { lte: maxPrice } }),
		// Filtro para servicios en promoción (que tengan promoPrice)
		...(hasPromo !== undefined && {
			promoPrice: hasPromo ? { not: null } : null,
		}),
		...(isFeatured !== undefined && { isFeatured }),
		...(isNew !== undefined && { isNew }),
		...(isPopular !== undefined && { isPopular }),
		...(search && {
			OR: [
				{ name: { contains: search, mode: 'insensitive' } },
				{ description: { contains: search, mode: 'insensitive' } },
				{ categories: { has: search } },
				{ bodyParts: { has: search } },
				{ tags: { has: search } },
			],
		}),
	};
	if (isAdmin) {
		return {
			...baseWhere,
			...(isActive !== undefined && { isActive }),
		};
	}

	return baseWhere;
};

export const getSelectFields = (isAdmin: boolean) => {
	const baseFields = {
		id: true,
		name: true,
		description: true,
		price: true,
		categories: true,
		bodyParts: true,
		tags: true,
		type: true,
		gender: true,
		promoPrice: true,
		isFeatured: true,
		isNew: true,
		isPopular: true,
		imageUrl: true,
		isActive: true,
		createdAt: true,
	};

	if (isAdmin) {
		return {
			...baseFields,
			updatedAt: true,
		};
	}
	return baseFields;
};

export const buildPagination = (currentPage: number, itemsPerPage: number, totalItems: number) => {
	return {
		currentPage,
		itemsPerPage,
		totalItems,
		totalPages: Math.ceil(totalItems / itemsPerPage),
		hasNextPage: currentPage < Math.ceil(totalItems / itemsPerPage),
		hasPreviousPage: currentPage > 1,
	};
};
// TODO: solucionar sort
export const getPaginatedServices = async (filters: UrlServicesFiltersType, isAdmin: boolean) => {
	const { sortBy, sortOrder, page } = filters;

	const where = buildServiceFilters(filters, isAdmin);

	const select = getSelectFields(isAdmin);

	const [services, totalCount] = await Promise.all([
		prisma.service.findMany({
			where,
			select,
			skip: (page - 1) * API_GLOBAL_LIMIT,
			take: API_GLOBAL_LIMIT,
			// orderBy: {
			// 	[sortBy as string]: sortOrder,
			// },
		}),
		prisma.service.count({
			where,
		}),
	]);

	const pagination = buildPagination(page, API_GLOBAL_LIMIT, totalCount);

	return {
		data: services,
		pagination,
	};
};

export const getServiceById = async (id: string, isAdmin: boolean) => {
	const service = await prisma.service.findUniqueOrThrow({
		where: {
			id,
			...(!isAdmin && { isActive: true }),
		},
		select: getSelectFields(isAdmin),
	});

	return service;
};

export const createService = async (data: Prisma.ServiceCreateInput) => {
	const service = await prisma.service.create({
		data,
		select: getSelectFields(true),
	});

	return service;
};

export const updateService = async (id: string, data: Prisma.ServiceUpdateInput) => {
	const service = await prisma.service.update({
		where: {
			id,
		},
		data,
		select: getSelectFields(true),
	});

	return service;
};

export const deleteService = async (req: Request, id: string) => {
	const { hard } = parseQueryParams(req, deleteServiceSchema);

	if (hard) {
		const service = await prisma.service.delete({
			where: {
				id,
			},
			select: getSelectFields(true),
		});
		return service;
	} else {
		const service = await prisma.service.update({
			where: {
				id,
			},
			select: getSelectFields(true),
			data: {
				isActive: false,
			},
		});
		return service;
	}
};
