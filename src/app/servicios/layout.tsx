import { ReactNode } from 'react';
import { FiltersInitializer } from './components/FiltersInitializer';
import SSRLoader from './components/SSRLoader';

export default function ServicesLayout({ children }: { children: ReactNode }) {
	return (
		<>
			<SSRLoader />
			<FiltersInitializer />
			{children}
		</>
	);
}
