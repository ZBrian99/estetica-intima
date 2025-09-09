'use client';

import { debounce } from '@/lib/utils';
import { useState, useEffect, useCallback } from 'react';

// Hook temporal para los breakpoints
// TODO: Buscar alternativa para breakpoints en stado global optimizado

export const useMediaQuery = (delay = 200) => {
	const [breakpoints, setBreakpoints] = useState({ isMobile: true, isTablet: false, isDesktop: false });

	const getMatches = useCallback(() => {
		if (typeof window === 'undefined') {
			return { isMobile: true, isTablet: false, isDesktop: false };
		}

		const width = window.innerWidth;
		return {
			isMobile: width < 480,
			isTablet: width >= 480 && width < 1024,
			isDesktop: width >= 1024,
		};
	}, []);

	useEffect(() => {
		setBreakpoints(getMatches());

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

		window.addEventListener('resize', handleResize);
		return () => window.removeEventListener('resize', handleResize);
	}, [delay]);

	return breakpoints;
};
