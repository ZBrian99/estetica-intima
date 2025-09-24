'use client';

import React from 'react';
import Link from 'next/link';
import {
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuTrigger,
} from '@/components/ui/navigation-menu';
import { FiEye, FiPackage, FiArrowRight } from 'react-icons/fi';
import { cn } from '@/lib/utils';
import { FaHandHolding } from 'react-icons/fa';

const cejasPestanas = [
  'Microblading',
  'Dermopigmentación',
  'Lifting de Pestañas',
  'Tinte de Cejas',
  'Laminado de Cejas',
  'Depilación de Cejas'
];

const manosPies = [
  'Pedicuria',
  'Esmaltado Semipermanente',
  'Spa de Pies',
  'Manicuria',
  'Esmaltado Común',
  'Tratamiento de Cutículas'
];

const combosBelleza = [
  'Lifting + Tinte',
  'Spa + Pedicuria',
  'Microblading + Tinte',
  'Manicuria + Pedicuria'
];

export default function BellezaMenu() {
  return (
    <NavigationMenuContent>
        <div className='grid  gap-4 md:gap-8 p-4 md:p-8  w-max  max-w-[33vw] '>
        {/* <div className='grid w-[400px] gap-4 md:gap-8 p-4 md:p-8 md:w-[500px] md:grid-cols-3 lg:w-[600px]'> */}
          <div className='grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8 w-100 overflow-scroll bg-amber-700'>
            {/* Cejas & Pestañas */}
            <div className='space-y-4'>
              <h3 className='text-sm font-semibold text-primary border-b border-primary/20 pb-2'>
                <FiEye className='w-4 h-4 inline mr-2' />
                Cejas & Pestañas
              </h3>
              <ul className='space-y-3'>
                {cejasPestanas.map((item) => (
                  <li key={item}>
                    <NavigationMenuLink asChild>
                      <Link
                        href={`/servicios?category=belleza&subcategory=cejas-pestanas&service=${item.toLowerCase().replace(/\s+/g, '-')}`}
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

            {/* Manos & Pies */}
            <div className='space-y-4'>
              <h3 className='text-sm font-semibold text-primary border-b border-primary/20 pb-2'>
                <FaHandHolding className='w-4 h-4 inline mr-2' />
                Manos & Pies
              </h3>
              <ul className='space-y-3'>
                {manosPies.map((item) => (
                  <li key={item}>
                    <NavigationMenuLink asChild>
                      <Link
                        href={`/servicios?category=belleza&subcategory=manos-pies&service=${item.toLowerCase().replace(/\s+/g, '-')}`}
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
                {combosBelleza.map((item) => (
                  <li key={item}>
                    <NavigationMenuLink asChild>
                      <Link
                        href={`/servicios?category=belleza&subcategory=combos&service=${item.toLowerCase().replace(/\s+/g, '-')}`}
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
          <div className='pt-4 border-t border-primary/20 col-span-3'>
            <NavigationMenuLink asChild>
              <Link
                href='/servicios?category=belleza'
                className='inline-flex flex-row items-center text-primary hover:text-primary/80 font-medium transition-colors duration-200 group text-sm'
              >
                Ver todos los servicios de Belleza
                <FiArrowRight className='ml-2 h-4 w-4 transition-transform duration-200 group-hover:translate-x-1' />
              </Link>
            </NavigationMenuLink>
          </div>
        </div>
      </NavigationMenuContent>
  );
}