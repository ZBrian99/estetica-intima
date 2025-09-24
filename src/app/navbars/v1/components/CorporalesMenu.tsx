'use client';

import React from 'react';
import Link from 'next/link';
import {
	NavigationMenuContent,
	NavigationMenuItem,
	NavigationMenuLink,
	NavigationMenuTrigger,
} from '@/components/ui/navigation-menu';
import { FiActivity, FiHeart, FiPackage, FiArrowRight } from 'react-icons/fi';
import { cn } from '@/lib/utils';

const tratamientos = [
  'Maderoterapia',
  'Mio Up 1 zona',
  'Alpha Synergy 1 zona',
  'Vacuum Therapy',
  'Bronceado Natural',
  'Drenaje Linfático'
];

const masajes = [
  'Descontracturante',
  'Deportivo',
  'Piedras Calientes',
  'Reflexología'
];

const combos = [
  'Madero + Mio Up',
  'Mio Up + Alpha Synergy',
  'Alpha + Presoterapia',
  'Vacuum + Mio Up'
];

const CorporalesMenu = () => {
	return (
			<NavigationMenuContent>
				<div className='grid w-[400px] gap-4 md:gap-8 p-4 md:p-8 md:w-[500px] md:grid-cols-3 lg:w-[600px]'>
					<div className='grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8'>
						{/* Tratamientos */}
						<div className='space-y-4'>
							<h3 className='text-sm font-semibold text-primary border-b border-primary/20 pb-2'>
								<FiActivity className='w-4 h-4 inline mr-2' />
								Tratamientos
							</h3>
							<ul className='space-y-3'>
								{tratamientos.map((item) => (
									<li key={item}>
										<NavigationMenuLink asChild>
											<Link
												href={`/servicios?category=corporales&subcategory=tratamientos&service=${item.toLowerCase().replace(/\s+/g, '-')}`}
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

						{/* Masajes */}
						<div className='space-y-4'>
							<h3 className='text-sm font-semibold text-primary border-b border-primary/20 pb-2'>
								<FiHeart className='w-4 h-4 inline mr-2' />
								Masajes
							</h3>
							<ul className='space-y-3'>
								{masajes.map((item) => (
									<li key={item}>
										<NavigationMenuLink asChild>
											<Link
												href={`/servicios?category=corporales&subcategory=masajes&service=${item.toLowerCase().replace(/\s+/g, '-')}`}
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

						{/* Combos */}
						<div className='space-y-4'>
							<h3 className='text-sm font-semibold text-primary border-b border-primary/20 pb-2'>
								<FiPackage className='w-4 h-4 inline mr-2' />
								Combos
							</h3>
							<ul className='space-y-3'>
								{combos.map((item) => (
									<li key={item}>
										<NavigationMenuLink asChild>
											<Link
												href={`/servicios?category=corporales&subcategory=combos&service=${item.toLowerCase().replace(/\s+/g, '-')}`}
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
								href='/servicios?category=corporales'
								className='inline-flex items-center text-primary hover:text-primary/80 font-medium transition-colors duration-200 group text-sm'
							>
								Ver todos los tratamientos Corporales
								<FiArrowRight className='ml-2 h-4 w-4 transition-transform duration-200 group-hover:translate-x-1' />
							</Link>
						</NavigationMenuLink>
					</div>
				</div>
		</NavigationMenuContent>
	);
};

export { CorporalesMenu };