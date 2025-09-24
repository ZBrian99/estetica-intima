'use client';

import React from 'react';
import Link from 'next/link';
import {
	NavigationMenuContent,
	NavigationMenuItem,
	NavigationMenuLink,
	NavigationMenuTrigger,
} from '@/components/ui/navigation-menu';
import { FiUser, FiUsers, FiPackage, FiArrowRight } from 'react-icons/fi';
import { cn } from '@/lib/utils';

const DepilacionMenu = () => {
	const depilacionFemenina = [
		{ name: 'Bozo', href: '/servicios/depilacion/bozo' },
		{ name: 'Axilas', href: '/servicios/depilacion/axilas' },
		{ name: 'Pierna completa', href: '/servicios/depilacion/pierna-completa' },
		{ name: 'Cavado completo', href: '/servicios/depilacion/cavado-completo' }
	];

	const depilacionMasculina = [
		{ name: 'Espalda completa', href: '/servicios/depilacion/espalda-completa' },
		{ name: 'Brazos completos', href: '/servicios/depilacion/brazos-completos' },
		{ name: 'Cuello', href: '/servicios/depilacion/cuello' },
		{ name: 'Patillas', href: '/servicios/depilacion/patillas' }
	];

	const combos = [
		{ name: 'Pierna + Cavado + Axilas', href: '/servicios/depilacion/combo-pierna-cavado-axilas' },
		{ name: 'Rostro completo', href: '/servicios/depilacion/combo-rostro-completo' },
		{ name: 'Pierna + Axilas', href: '/servicios/depilacion/combo-pierna-axilas' }
	];

	return (
		<NavigationMenuContent>
			<div className=' w-max gap-4 md:gap-8 p-4 md:p-8flex flex-col'>
				<div className='grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8 '>
					{/* Depilación Femenina */}
					<div className='space-y-2'>
						<h3 className='text-sm font-semibold text-primary border-b border-primary/20 pb-2'>
							<FiUser className='w-4 h-4 inline mr-2' />
							Femenina
						</h3>
						<ul className='ml-1 space-y-1'>
							{depilacionFemenina.map((item) => (
								<li key={item.name}>
									<NavigationMenuLink asChild>
										<Link
											href={item.href}
											className={cn(
												'block select-none space-y-1 rounded-md p-2 leading-none no-underline outline-none transition-all duration-300',
												'hover:bg-primary/10 hover:text-primary hover:translate-x-1 text-sm text-muted-foreground'
											)}
										>
											{item.name}
										</Link>
									</NavigationMenuLink>
								</li>
							))}
						</ul>
					</div>

					{/* Depilación Masculina */}
					<div className='space-y-2'>
						<h3 className='text-sm font-semibold text-primary border-b border-primary/20 pb-2'>
							<FiUsers className='w-4 h-4 inline mr-2' />
							Masculina
						</h3>
						<ul className='ml-1 space-y-1'>
							{depilacionMasculina.map((item) => (
								<li key={item.name}>
									<NavigationMenuLink asChild>
										<Link
											href={item.href}
											className={cn(
												'block select-none space-y-1 rounded-md p-2 leading-none no-underline outline-none transition-all duration-300',
												'hover:bg-primary/10 hover:text-primary hover:translate-x-1 text-sm text-muted-foreground'
											)}
										>
											{item.name}
										</Link>
									</NavigationMenuLink>
								</li>
							))}
						</ul>
					</div>

					{/* Combos */}
					<div className='space-y-2'>
						<h3 className='text-sm font-semibold text-primary border-b border-primary/20 pb-2'>
							<FiPackage className='w-4 h-4 inline mr-2' />
							Combos
						</h3>
						<ul className='ml-1 space-y-1'>
							{combos.map((item) => (
								<li key={item.name}>
									<NavigationMenuLink asChild>
										<Link
											href={item.href}
											className={cn(
												'block select-none space-y-1 rounded-md p-2 leading-none no-underline outline-none transition-all duration-300',
												'hover:bg-primary/10 hover:text-primary hover:translate-x-1 text-sm text-muted-foreground'
											)}
										>
											{item.name}
										</Link>
									</NavigationMenuLink>
								</li>
							))}
						</ul>
					</div>
				</div>

				{/* Ver todos link */}
				<div className='pt-4 mt-4 border-t border-primary/20 '>
					<NavigationMenuLink asChild>
						<Link
							href='/servicios/depilacion'
							className='inline-flex flex-row items-center text-primary hover:text-primary/80 font-medium transition-colors duration-200 group text-sm'
						>
							Ver todos los servicios de Depilación
							<FiArrowRight className='ml-2 h-4 w-4 transition-transform duration-200 group-hover:translate-x-1' />
						</Link>
					</NavigationMenuLink>
				</div>
			</div>
		</NavigationMenuContent>
	);
};

export { DepilacionMenu };