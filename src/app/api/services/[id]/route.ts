import { isAdmin, requireAdminAPI } from '@/lib/auth/utils';
import { handleApiError } from '@/lib/handleApiError';
import { prisma } from '@/lib/prisma';
import { updateServiceSchema } from '@/schemas/servicesSchema';
import { deleteService, getServiceById, parseBody, updateService } from '@/services/api/servicesService';
import { NextResponse } from 'next/server';

export const GET = async (req: Request, { params }: { params: Promise<{ id: string }> }) => {
	try {
		const admin = await isAdmin();

		const { id } = await params;
		const response = await getServiceById(id, admin);

		return NextResponse.json(response);
	} catch (error) {
		return handleApiError(error);
	}
};
// export const POST = async (req: Request) => {
// 	try {
// 		const { error } = await requireAdminAPI();

// 		if (error) {
// 			return error;
// 		}

// 		const validatedBody = await parseBody(req, createServiceSchema);

// 		const response = await createService(validatedBody);

// 		return NextResponse.json(response);
// 	} catch (error) {
// 		return handleApiError(error);
// 	}
// };
export const PATCH = async (req: Request, { params }: { params: Promise<{ id: string }> }) => {
	try {
		const { error } = await requireAdminAPI();
		if (error) {
			return error;
		}

		const validatedBody = await parseBody(req, updateServiceSchema);

		const { id } = await params;

		const service = await updateService(id, validatedBody);

		return NextResponse.json(service);
	} catch (error) {
		return handleApiError(error);
	}
};

export const DELETE = async (req: Request, { params }: { params: Promise<{ id: string }> }) => {
	try {
		const { error } = await requireAdminAPI();
		if (error) {
			return error;
		}
		const { id } = await params;
		const service = await deleteService(req, id);

		return NextResponse.json(service);
	} catch (error) {
		return handleApiError(error);
	}
};
