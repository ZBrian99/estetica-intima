'use client';

import React from 'react';
import Link from 'next/link';
import {
	NavigationMenuContent,
	NavigationMenuItem,
	NavigationMenuLink,
	NavigationMenuTrigger,
} from '@/components/ui/navigation-menu';
import { FiStar, FiPackage, FiArrowRight } from 'react-icons/fi';
import { cn } from '@/lib/utils';

const tratamientosFaciales = [
	'Limpieza Facial',
	'Hydrafacial',
	'Peeling Químico',
	'Microdermoabrasión',
	'Radiofrecuencia',
	'Mesoterapia Facial',
	'Plasma Rico en Plaquetas'
];

const combosFaciales = [
	'Limpieza + Hydrafacial',
	'Peeling + Radiofrecuencia',
	'Microdermoabrasión + Hydrafacial',
	'Mesoterapia + PRP',
	'Limpieza + Peeling'
];

const FacialesMenu = () => {
	return (
			<NavigationMenuContent>
				<div className='grid w-[400px] gap-4 md:gap-8 p-4 md:p-8 md:w-[500px] md:grid-cols-2 lg:w-[600px]'>
					<div className='grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8'>
						{/* Tratamientos Faciales */}
						<div className='space-y-4'>
							<h3 className='text-sm font-semibold text-primary border-b border-primary/20 pb-2'>
								<FiStar className='w-4 h-4 inline mr-2' />
								Tratamientos Faciales
							</h3>
							<ul className='space-y-3'>
								{tratamientosFaciales.map((item) => (
									<li key={item}>
										<NavigationMenuLink asChild>
											<Link
												href={`/servicios?category=faciales&subcategory=tratamientos&service=${item.toLowerCase().replace(/\s+/g, '-')}`}
												className={cn(
													'block select-none space-y-1 rounded-md p-2 leading-none no-underline outline-none transition-all duration-300',
													'hover:bg-primary/10 hover:text-primary hover:translate-x-1 text-sm text-muted-foreground'
												)}
											>
												{item}
											</Link>
										</NavigationMenuLink>
									</li>
								))}
							</ul>
						</div>

						{/* Combos Faciales */}
						<div className='space-y-4'>
							<h3 className='text-sm font-semibold text-primary border-b border-primary/20 pb-2'>
								<FiPackage className='w-4 h-4 inline mr-2' />
								Combos Faciales
							</h3>
							<ul className='space-y-3'>
								{combosFaciales.map((item) => (
									<li key={item}>
										<NavigationMenuLink asChild>
											<Link
												href={`/servicios?category=faciales&subcategory=combos&service=${item.toLowerCase().replace(/\s+/g, '-')}`}
												className={cn(
													'block select-none space-y-1 rounded-md p-2 leading-none no-underline outline-none transition-all duration-300',
													'hover:bg-primary/10 hover:text-primary hover:translate-x-1 text-sm text-muted-foreground'
												)}
											>
												{item}
											</Link>
										</NavigationMenuLink>
									</li>
								))}
							</ul>
						</div>
					</div>

					{/* Ver todos link */}
					<div className='pt-4 border-t border-primary/20'>
						<NavigationMenuLink asChild>
							<Link
								href='/servicios?category=faciales'
								className='inline-flex items-center text-primary hover:text-primary/80 font-medium transition-colors duration-200 group text-sm'
							>
								Ver todos los tratamientos Faciales
								<FiArrowRight className='ml-2 h-4 w-4 transition-transform duration-200 group-hover:translate-x-1' />
							</Link>
						</NavigationMenuLink>
					</div>
				</div>
		</NavigationMenuContent>
	);
};

export { FacialesMenu };