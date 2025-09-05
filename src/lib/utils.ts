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