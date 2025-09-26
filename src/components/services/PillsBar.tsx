'use client';

import { Badge } from '@/components/ui/badge';
import { useFiltersStore } from '@/stores/filtersStore';
import { useEffect, useMemo, useRef, useState } from 'react';
import { cn } from '@/lib/utils';
import { GenderType, ServiceType } from '@/schemas/servicesSchema';
import { FaFire, FaStar, FaGift, FaTag, FaVenus, FaMars, FaSpa, FaBolt, FaLeaf,  FaClock, FaPiggyBank,  FaFaceSmile, FaHandSparkles, FaChevronLeft, FaChevronRight } from 'react-icons/fa6';
import { HiSparkles } from 'react-icons/hi2';
import { FaSmile } from 'react-icons/fa';

// Curated pills data with color scheme and mapping to filters
// Each pill can map to: boolean flag, type, gender, category, bodyPart, tag

type PillKind = 'flag' | 'type' | 'gender' | 'category' | 'bodyPart' | 'tag';
interface PillItem {
	id: string;
	label: string;
	icon: React.ComponentType<{ className?: string }>;
	kind: PillKind;
	value?: string; // for type/gender/category/bodyPart/tag
	colors: {
		bg: string;
		text: string;
		border: string;
	};
}

const PILLS: PillItem[] = [
	{ id: 'popular', label: 'Más Populares', icon: FaFire, kind: 'flag', colors: { bg: 'bg-purple-100/60', text: 'text-purple-700', border: 'border-purple-300' } },
	{ id: 'featured', label: 'Destacados', icon: FaStar, kind: 'flag', colors: { bg: 'bg-amber-100/60', text: 'text-amber-700', border: 'border-amber-300' } },
	{ id: 'promo', label: 'Ofertas', icon: FaTag, kind: 'flag', colors: { bg: 'bg-rose-100/60', text: 'text-rose-700', border: 'border-rose-300' } },
	{ id: 'combo', label: 'Combos', icon: FaGift, kind: 'type', value: 'COMBO', colors: { bg: 'bg-fuchsia-100/60', text: 'text-fuchsia-700', border: 'border-fuchsia-300' } },
	{ id: 'pack', label: 'Packs', icon: FaGift, kind: 'type', value: 'PACK', colors: { bg: 'bg-violet-100/60', text: 'text-violet-700', border: 'border-violet-300' } },
	{ id: 'new', label: 'Nuevos', icon: HiSparkles as any, kind: 'flag', colors: { bg: 'bg-emerald-100/60', text: 'text-emerald-700', border: 'border-emerald-300' } },
	{ id: 'female', label: 'Mujer', icon: FaVenus, kind: 'gender', value: 'FEMALE', colors: { bg: 'bg-pink-100/60', text: 'text-pink-700', border: 'border-pink-300' } },
	{ id: 'male', label: 'Hombre', icon: FaMars, kind: 'gender', value: 'MALE', colors: { bg: 'bg-sky-100/60', text: 'text-sky-700', border: 'border-sky-300' } },
	{ id: 'corporales', label: 'Corporales', icon: FaSpa, kind: 'category', value: 'tratamientos-corporales', colors: { bg: 'bg-teal-100/60', text: 'text-teal-700', border: 'border-teal-300' } },
	{ id: 'faciales', label: 'Faciales', icon: FaSmile, kind: 'category', value: 'tratamientos-faciales', colors: { bg: 'bg-amber-100/60', text: 'text-amber-700', border: 'border-amber-300' } },
	{ id: 'depilacion', label: 'Depilación', icon: FaHandSparkles, kind: 'category', value: 'depilacion', colors: { bg: 'bg-red-100/60', text: 'text-red-700', border: 'border-red-300' } },
	{ id: 'gluteos', label: 'Glúteos', icon: FaBolt, kind: 'bodyPart', value: 'gluteos', colors: { bg: 'bg-indigo-100/60', text: 'text-indigo-700', border: 'border-indigo-300' } },
	{ id: 'piernas', label: 'Piernas', icon: FaLeaf, kind: 'bodyPart', value: 'piernas', colors: { bg: 'bg-lime-100/60', text: 'text-lime-700', border: 'border-lime-300' } },
	{ id: 'rapidos', label: 'Rápidos', icon: FaClock, kind: 'tag', value: 'express', colors: { bg: 'bg-slate-100/60', text: 'text-slate-700', border: 'border-slate-300' } },
	{ id: 'economicos', label: 'Económicos', icon: FaPiggyBank, kind: 'tag', value: 'popular', colors: { bg: 'bg-green-100/60', text: 'text-green-700', border: 'border-green-300' } },
];

const PillsBar = () => {
	const filters = useFiltersStore((s) => s.filters);
	const setFilter = useFiltersStore((s) => s.setFilter);

	const activeSets = useMemo(() => ({
		categories: new Set(filters?.categories ?? []),
		bodyParts: new Set(filters?.bodyParts ?? []),
		tags: new Set(filters?.tags ?? []),
		gender: filters?.gender ?? null,
		type: filters?.type ?? null,
		flags: {
			isPopular: !!filters?.isPopular,
			isFeatured: !!filters?.isFeatured,
			hasPromo: !!filters?.hasPromo,
			isNew: !!filters?.isNew,
		},
	}), [filters]);

	const togglePill = (pill: PillItem) => {
		switch (pill.kind) {
			case 'flag': {
				const map: Record<string, keyof typeof activeSets.flags> = {
					popular: 'isPopular',
					featured: 'isFeatured',
					promo: 'hasPromo',
					new: 'isNew',
				};
				const key = map[pill.id];
				if (!key) return;
				const current = activeSets.flags[key];
				setFilter(key as any, !current);
				break;
			}
			case 'type': {
				setFilter('type', filters?.type === (pill.value as ServiceType) ? null : (pill.value as ServiceType));
				break;
			}
			case 'gender': {
				setFilter('gender', filters?.gender === (pill.value as GenderType) ? null : (pill.value as GenderType));
				break;
			}
			case 'category': {
				const current = new Set<string>(filters?.categories ?? []);
				if (current.has(pill.value!)) current.delete(pill.value!);
				else current.add(pill.value!);
				setFilter('categories', Array.from(current));
				break;
			}
			case 'bodyPart': {
				const current = new Set<string>(filters?.bodyParts ?? []);
				if (current.has(pill.value!)) current.delete(pill.value!);
				else current.add(pill.value!);
				setFilter('bodyParts', Array.from(current));
				break;
			}
			case 'tag': {
				const current = new Set<string>(filters?.tags ?? []);
				if (current.has(pill.value!)) current.delete(pill.value!);
				else current.add(pill.value!);
				setFilter('tags', Array.from(current));
				break;
			}
		}
		setFilter('page', 1);
	};

	// Horizontal scroll controls
	const scrollerRef = useRef<HTMLDivElement | null>(null);
	const [canLeft, setCanLeft] = useState(false);
	const [canRight, setCanRight] = useState(false);

	const updateNav = () => {
		const el = scrollerRef.current;
		if (!el) return;
		setCanLeft(el.scrollLeft > 0);
		setCanRight(el.scrollLeft + el.clientWidth < el.scrollWidth - 1);
	};

	useEffect(() => {
		updateNav();
		const el = scrollerRef.current;
		if (!el) return;
		const onScroll = () => updateNav();
		el.addEventListener('scroll', onScroll, { passive: true });
		const onResize = () => updateNav();
		window.addEventListener('resize', onResize);
		return () => {
			el.removeEventListener('scroll', onScroll);
			window.removeEventListener('resize', onResize);
		};
	}, []);

	const scrollByAmount = (dir: 'left' | 'right') => {
		const el = scrollerRef.current;
		if (!el) return;
		const amount = Math.round(el.clientWidth * 0.7);
		el.scrollBy({ left: dir === 'left' ? -amount : amount, behavior: 'smooth' });
	};

	return (
		<div className='relative w-full overflow-hidden'>
			{/* fading edges */}
			{canLeft && (
				<div className='pointer-events-none absolute left-0 top-0 h-full w-8 bg-gradient-to-r from-white to-transparent z-10' />
			)}
			{canRight && (
				<div className='pointer-events-none absolute right-0 top-0 h-full w-8 bg-gradient-to-l from-white to-transparent z-10' />
			)}

			{/* Nav arrows */}
			<button
				aria-label='Scroll left'
				onClick={() => scrollByAmount('left')}
				className={cn(
					'absolute left-0 top-1/2 -translate-y-1/2 z-20 h-7 w-7 rounded-full grid place-items-center bg-white/90 shadow border text-gray-700 hover:text-primary-700 transition',
					canLeft ? 'opacity-100' : 'opacity-0 pointer-events-none'
				)}
			>
				<FaChevronLeft className='h-3.5 w-3.5' />
			</button>
			<button
				aria-label='Scroll right'
				onClick={() => scrollByAmount('right')}
				className={cn(
					'absolute right-0 top-1/2 -translate-y-1/2 z-20 h-7 w-7 rounded-full grid place-items-center bg-white/90 shadow border text-gray-700 hover:text-primary-700 transition',
					canRight ? 'opacity-100' : 'opacity-0 pointer-events-none'
				)}
			>
				<FaChevronRight className='h-3.5 w-3.5' />
			</button>

			<div
				ref={scrollerRef}
				onScroll={updateNav}
				className='overflow-x-auto no-scrollbar scroll-smooth [scrollbar-width:none] [&::-webkit-scrollbar]:hidden'
			>
				<div className='flex items-center gap-2 min-w-max pr-2'>
					{PILLS.map((pill) => {
						const isActive =
							pill.kind === 'flag'
								? (pill.id === 'popular' && activeSets.flags.isPopular) ||
								  (pill.id === 'featured' && activeSets.flags.isFeatured) ||
								  (pill.id === 'promo' && activeSets.flags.hasPromo) ||
								  (pill.id === 'new' && activeSets.flags.isNew)
								: pill.kind === 'type'
								? activeSets.type === pill.value
								: pill.kind === 'gender'
								? activeSets.gender === pill.value
								: pill.kind === 'category'
								? activeSets.categories.has(pill.value!)
								: pill.kind === 'bodyPart'
								? activeSets.bodyParts.has(pill.value!)
								: activeSets.tags.has(pill.value!);

						return (
							<Badge
								key={pill.id}
								variant={isActive ? 'default' : 'outline'}
								className={cn(
									'h-9 rounded-full px-3 py-0 whitespace-nowrap border',
									isActive
										? `${pill.colors.bg} ${pill.colors.text} shadow-sm ${pill.colors.border}`
										: `bg-white text-gray-600 hover:bg-gray-50 `
								)}
								onClick={() => togglePill(pill)}
								aria-pressed={isActive}
							>
								<span className='inline-flex items-center gap-2'>
									{pill.icon && <pill.icon className={cn('h-4 w-4', isActive ? pill.colors.text : 'text-gray-500')} />}
									{pill.label}
								</span>
							</Badge>
						);
					})}
				</div>
			</div>
		</div>
	);
};

export default PillsBar;
