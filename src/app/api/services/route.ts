import { handleApiError } from '@/lib/handleApiError';
import { createService, getPaginatedServices, parseBody, parseQueryParams } from '@/services/api/servicesService';
import { NextResponse } from 'next/server';
import { isAdmin, requireAdminAPI } from '@/lib/auth/utils';
import { createServiceSchema, urlServiceFiltersSchema } from '@/schemas/servicesSchema';

export const GET = async (req: Request) => {
	try {
		const admin = await isAdmin();

		const validatedFilters = parseQueryParams(req, urlServiceFiltersSchema);
		const response = await getPaginatedServices(validatedFilters, admin);
		return NextResponse.json(response);
	} catch (error) {
		return handleApiError(error);
	}
};

export const POST = async (req: Request) => {
	try {
		const { error } = await requireAdminAPI();

		if (error) {
			return error;
		}

		const validatedBody = await parseBody(req, createServiceSchema);

		const response = await createService(validatedBody);

		return NextResponse.json(response);
	} catch (error) {
		return handleApiError(error);
	}
};
