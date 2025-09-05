export interface PaginationMeta {
	currentPage: number;
	itemsPerPage: number;
	totalPages: number;
	totalItems: number;
	hasNextPage: boolean;
	hasPreviousPage: boolean;
}
export interface PaginatedResponse<T> {
	data: T[];
	pagination: PaginationMeta;
}
