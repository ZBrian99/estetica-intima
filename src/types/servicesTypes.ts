import { ServiceResponse } from '@/schemas/servicesSchema';
import { PaginatedResponse } from './commonTypes';

export type ServicesResponse = PaginatedResponse<ServiceResponse>;
