import { ServicesFiltersType } from '@/schemas/servicesSchema';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
	return twMerge(clsx(inputs));
}

export const debounce = <T extends (...args: Parameters<T>) => ReturnType<T>>(callback: T, delay: number) => {
	let timeoutId: ReturnType<typeof setTimeout>;

	return (...args: Parameters<T>) => {
		if (timeoutId) {
			clearTimeout(timeoutId);
		}

		timeoutId = setTimeout(() => {
			callback(...args);
		}, delay);
	};
};

export const getBaseUrl = () => {
	if (typeof window !== 'undefined') {
		return '';
	}
	return process.env.BASE_URL || 'http://localhost:3000';
};

export const formatPrice = (price: number) => {
	return new Intl.NumberFormat('es-AR', {
		style: 'currency',
		currency: 'ARS',
		minimumFractionDigits: 0,
		maximumFractionDigits: 0,
	}).format(price);
};

export const calculateDiscount = (basePrice: number, finalPrice: number) => {
	return Math.round(((basePrice - finalPrice) / basePrice) * 100);
};

export const filtersToUrlParams = (filters?: ServicesFiltersType) => {
	if (!filters) {
		return '';
	}

	const params = new URLSearchParams();

	for (const [key, value] of Object.entries(filters)) {
		if (value == null || value === '') continue;

		if (Array.isArray(value)) {
			if (value.length === 0) continue;

			const validItems = value.filter((item) => item != null && item !== '');

			if (validItems.length > 0) {
				params.set(key, validItems.join(','));
			}
		} else if (typeof value === 'number') {
			params.set(key, value.toString());
		} else if (typeof value === 'boolean') {
			if (value === true) {
				params.set(key, 'true');
			}
		} else if (typeof value === 'string') {
			const cleanValue = value.trim();
			if (cleanValue !== '') {
				params.set(key, cleanValue);
			}
		}
	}

	return params.toString();
};

export const shouldCache = (filters?: ServicesFiltersType) => {
	if (
		!filters ||
		!filters.page ||
		filters.search ||
		filters.bodyParts ||
		filters.tags ||
		filters.minPrice !== undefined ||
		filters.maxPrice !== undefined ||
		filters.sort
	) {
		return false;
	}

	let filtersCount = 0;

	if (filters.categories) {
		if (
			filters.categories.length > 1 ||
			(filters.categories[0] !== 'depilacion' &&
				filters.categories[0] !== 'maderoterapia' &&
				filters.categories[0] !== 'mio-up')
		) {
			return false;
		}

		filtersCount++;
	}

	if (filters.gender) filtersCount += 2;
	if (filters.type) filtersCount += 2;
	if (filters.isFeatured) filtersCount += 2;
	if (filters.isPopular) filtersCount += 2;
	if (filters.isNew) filtersCount += 2;
	if (filters.hasPromo) filtersCount += 2;

	if (filtersCount > 0 && filters.page > 1) return false;

	return filtersCount < 4;
};
