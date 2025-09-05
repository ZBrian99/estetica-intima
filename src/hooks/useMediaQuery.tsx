'use client'

import { debounce } from '@/lib/utils';
import { useState, useEffect, useCallback } from 'react';

type Breakpoints = {
	isMobile: boolean;
	isTablet: boolean;
	isDesktop: boolean;
};

export const useMediaQuery = (delay = 200): Breakpoints => {
	const getMatches = useCallback((): Breakpoints => {
		if (typeof window === 'undefined') {
			return {
				isMobile: false,
				isTablet: false,
				isDesktop: true,
			};
		}

		const width = window.innerWidth;
		return {
			isMobile: width < 480,
			isTablet: width >= 480 && width < 1024,
			isDesktop: width >= 1024,
		};
	}, []);

	const [breakpoints, setBreakpoints] = useState<Breakpoints>(getMatches);

	useEffect(() => {
		const handleResize = debounce(() => {
			const newBreakpoints = getMatches();
			setBreakpoints((prev) =>
				prev.isMobile !== newBreakpoints.isMobile ||
				prev.isTablet !== newBreakpoints.isTablet ||
				prev.isDesktop !== newBreakpoints.isDesktop
					? newBreakpoints
					: prev
			);
		}, delay);

		if (typeof window !== 'undefined') {
			window.addEventListener('resize', handleResize);
			return () => window.removeEventListener('resize', handleResize);
		}
	}, [delay, getMatches]);

	return breakpoints;
};
