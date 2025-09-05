export interface PaginationMeta {
	currentPage: number;
	itemsPerPage: number;
	totalPages: number;
	totalItems: number;
	hasNextPage: boolean;
	hasPreviousPage: boolean;
}

export type ServiceCategory =
	| 'depilacion-femenina'
	| 'depilacion-masculina'
	| 'tratamientos-corporales'
	| 'masajes'
	| 'tratamientos-faciales';

export type ServiceType = 'individual' | 'combo' | 'pack';
export type PaymentMethod = 'efectivo' | 'transferencia' | 'mercadopago';

export interface Service {
	id: string;
	name: string;
	description: string;
	price: number;
	category: ServiceCategory;
	type: ServiceType;
	duration?: number;
	images?: string[];
	zones?: string[];
	available?: boolean;
	sessions?: number;
	discountCash?: number;
	createAt: Date;
}

export interface PaginatedResponse<T> {
	data: T[];
	pagination: PaginationMeta;
}

export type ServiceResponse = PaginatedResponse<Service>;

// export interface Combo {
// 	id: string;
// 	name: string;
//   serviceIds: string[];
//   type: ServiceType;
// 	price: number;
// 	description: string;
// 	discountPercentage: number;
// 	discountCash?: number;
// 	createAt: Date;
// }

// export interface Pack {
// 	id: string;
// 	serviceId: string;
// 	sessions: number;
// 	price: number;
// 	discountPercentage: number;
// }

export interface CartItem {
	service: Service;
	quantity: number;
	addedAt: Date;
}

export interface Filters {
	search: string;
	category: ServiceCategory | 'all';
	priceRange: [number, number];
	serviceType: ServiceType | 'all';
	sortBy: 'name' | 'price' | 'duration' | 'createAt';
  sortOrder: 'asc' | 'desc';
}

export interface ReservationForm {
	name: string;
	email: string;
	phone: string;
	paymentMethod: PaymentMethod;
	notes?: string;
}
