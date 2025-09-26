import { filtersToUrlParams, getBaseUrl, shouldCache } from '@/lib/utils';
import { ServicesFiltersType, type CreateServiceInput, type ServiceResponse, type UpdateServiceInput } from '@/schemas/servicesSchema';
import { ServicesResponse } from '@/types/servicesTypes';

// se queda como cliente hasta descubrir como compartir cache con server con use server y al mismo tiempo evitar duplicar consultas

export const fetchServicesClient = async (filters?: ServicesFiltersType): Promise<ServicesResponse> => {
  try {
    const params = filtersToUrlParams(filters);
    const response = await fetch(`${getBaseUrl()}/api/services${params ? `?${params}` : ''}`, {
      credentials: 'include',
    });

    if (!response.ok) {
      throw new Error(`Error ${response.status}: ${response.statusText}`);
    }

    return await response.json();
  } catch (error) {
    console.error('Error fetching services: ', error);
    throw error;
  }
};

export const fetchServicesServer = async (filters?: ServicesFiltersType): Promise<ServicesResponse> => {
  try {
    const params = filtersToUrlParams(filters);
    const isCache = shouldCache(filters);
    const response = await fetch(`${getBaseUrl()}/api/services${params ? `?${params}` : ''}`, {
      cache: isCache ? 'force-cache' : 'no-store',
      next: isCache ? { tags: ['services'] } : undefined,
      credentials: 'include',
    });

    if (!response.ok) {
      throw new Error(`Error ${response.status}: ${response.statusText}`);
    }

    return await response.json();
  } catch (error) {
    console.error('Error fetching services: ', error);
    throw error;
  }
};

export const createServiceClient = async (input: CreateServiceInput): Promise<ServiceResponse> => {
  try {
    const response = await fetch(`${getBaseUrl()}/api/services`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      credentials: 'include',
      body: JSON.stringify(input),
    });

    if (!response.ok) {
      throw new Error(`Error ${response.status}: ${response.statusText}`);
    }

    return await response.json();
  } catch (error) {
    console.error('Error creating service: ', error);
    throw error;
  }
};

export const deleteServiceClient = async (id: string): Promise<{ success: boolean }> => {
  try {
    const response = await fetch(`${getBaseUrl()}/api/services/${id}`, {
      method: 'DELETE',
      credentials: 'include',
    });

    if (!response.ok) {
      throw new Error(`Error ${response.status}: ${response.statusText}`);
    }

    return await response.json();
  } catch (error) {
    console.error('Error deleting service: ', error);
    throw error;
  }
};

// Actualización parcial de un servicio
export const updateServiceClient = async (
  id: string,
  input: Partial<UpdateServiceInput>
): Promise<ServiceResponse> => {
  try {
    const response = await fetch(`${getBaseUrl()}/api/services/${id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      credentials: 'include',
      body: JSON.stringify(input),
    });

    if (!response.ok) {
      throw new Error(`Error ${response.status}: ${response.statusText}`);
    }

    return await response.json();
  } catch (error) {
    console.error('Error updating service: ', error);
    throw error;
  }
};
