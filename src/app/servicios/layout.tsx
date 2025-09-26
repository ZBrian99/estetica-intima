import PromoBanner from '@/components/layout/PromoBanner';

export default function ServicesLayout({ children }: Readonly<{ children: React.ReactNode }>) {
	return (
		<>
			<PromoBanner />
			{children}
		</>
	);
}
