'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { FiShoppingCart, FiMenu, FiChevronDown } from 'react-icons/fi';
import { IoClose } from 'react-icons/io5';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
} from '@/components/ui/navigation-menu';
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';

// Datos organizados en grid 3x2 basados en Servicios.json
const treatmentGrid = {
  depilacion: {
    title: 'Depilación',
    icon: '✨',
    popular: ['Axilas', 'Pierna Completa', 'Cavado Completo', 'Rostro Completo'],
    featured: ['Combo Pierna + Cavado + Axilas', 'Depilación Masculina Completa']
  },
  corporales: {
    title: 'Corporales',
    icon: '💆‍♀️',
    popular: ['Maderoterapia', 'Alpha Synergy', 'Mio Up', 'Vacuum Therapy'],
    featured: ['Pack 4 Sesiones Maderoterapia', 'Tratamiento Integral']
  },
  faciales: {
    title: 'Faciales',
    icon: '✨',
    popular: ['Limpieza Profunda', 'Alpha Synergy Facial', 'Hollywood Peel', 'Peeling Químico'],
    featured: ['Microblading', 'Dermopigmentación Labial']
  },
  pestanas_cejas: {
    title: 'Pestañas & Cejas',
    icon: '👁️',
    popular: ['Microblading', 'Extensiones Pestañas', 'Lifting Pestañas', 'Tinte Cejas'],
    featured: ['Combo Cejas + Pestañas', 'Laminado Completo']
  },
  unas_pies: {
    title: 'Uñas & Pies',
    icon: '💅',
    popular: ['Spa de Pies', 'Pedicuría', 'Esmaltado Semipermanente', 'Manicuría'],
    featured: ['Spa Completo', 'Tratamiento Integral']
  },
  masajes: {
    title: 'Masajes',
    icon: '🤲',
    popular: ['Descontracturante', 'Deportivo', 'Piedras Calientes', 'Drenaje Linfático'],
    featured: ['Reflexología', 'Masaje Relajante Completo']
  }
};

const otherMenuItems = [
  { name: 'Promociones', href: '/promociones' },
  { name: 'Cursos', href: '/cursos' },
  { name: 'Eventos', href: '/eventos' },
  { name: 'Gift Cards', href: '/gift-cards' },
  { name: 'Nosotros', href: '/nosotros' },
  { name: 'Contacto', href: '/contacto' }
];

export default function NavbarDemo_Cuadricula() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white/95 backdrop-blur-md shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          
          {/* Brand */}
          <Link href="/" className="flex items-center space-x-3 group">
            <div className="relative">
              <div className="h-10 w-10 rounded-xl bg-gradient-to-br from-pink-500 via-purple-600 to-pink-700 flex items-center justify-center shadow-md group-hover:shadow-lg transition-all duration-300">
                <span className="text-white font-bold text-lg">Í</span>
              </div>
              <div className="absolute -top-1 -right-1 h-3 w-3 bg-gradient-to-r from-pink-400 to-purple-400 rounded-full opacity-80"></div>
            </div>
            <div className="flex flex-col">
              <span className="font-bold text-xl text-gray-900 leading-none group-hover:text-pink-700 transition-colors">
                Íntima Estética
              </span>
              <span className="text-xs text-pink-600 leading-none font-medium">
                Centro de Belleza Profesional
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="h-10 px-4 text-sm font-medium hover:text-pink-600 data-[state=open]:text-pink-600 data-[state=open]:bg-pink-50 transition-all">
                    Tratamientos
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <div className="w-[720px] p-6">
                      {/* Grid 3x2 */}
                      <div className="grid grid-cols-3 gap-6 mb-6">
                        {Object.entries(treatmentGrid).map(([key, category]) => (
                          <div key={key} className="group">
                            <Link
                              href={`/servicios/${key}`}
                              className="block p-4 rounded-lg border border-gray-100 hover:border-pink-200 hover:bg-pink-50 transition-all duration-200"
                            >
                              <div className="flex items-center space-x-3 mb-3">
                                <span className="text-2xl">{category.icon}</span>
                                <h3 className="font-semibold text-gray-900 group-hover:text-pink-600 transition-colors">
                                  {category.title}
                                </h3>
                              </div>
                              
                              <div className="space-y-2">
                                <div className="space-y-1">
                                  {category.popular.slice(0, 3).map((item) => (
                                    <div key={item} className="text-sm text-gray-600 hover:text-pink-600 transition-colors">
                                      • {item}
                                    </div>
                                  ))}
                                </div>
                                
                                {category.featured.length > 0 && (
                                  <div className="pt-2 border-t border-gray-100">
                                    <Badge variant="secondary" className="text-xs bg-pink-100 text-pink-700 mb-1">
                                      Destacado
                                    </Badge>
                                    <div className="text-xs text-pink-600 font-medium">
                                      {category.featured[0]}
                                    </div>
                                  </div>
                                )}
                              </div>
                            </Link>
                          </div>
                        ))}
                      </div>
                      
                      <Separator className="my-4" />
                      
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-4">
                          <Badge variant="secondary" className="bg-pink-100 text-pink-700">
                            6 Categorías Disponibles
                          </Badge>
                          <span className="text-sm text-gray-600">
                            Encuentra el tratamiento perfecto para ti
                          </span>
                        </div>
                        <div className="flex items-center space-x-3">
                          <Button variant="outline" size="sm" asChild>
                            <Link href="/servicios">Ver Todos</Link>
                          </Button>
                          <Button size="sm" className="bg-pink-600 hover:bg-pink-700" asChild>
                            <Link href="/reservar">Reservar Cita</Link>
                          </Button>
                        </div>
                      </div>
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>

            {/* Other Menu Items */}
            {otherMenuItems.slice(0, 3).map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-sm font-medium text-gray-700 hover:text-pink-600 transition-colors"
              >
                {item.name}
              </Link>
            ))}

            {/* More Dropdown */}
            <div className="relative group">
              <button className="flex items-center space-x-1 text-sm font-medium text-gray-700 hover:text-pink-600 transition-colors">
                <span>Más</span>
                <FiChevronDown className="w-4 h-4" />
              </button>
              
              <div className="absolute top-full right-0 mt-2 w-48 bg-white rounded-lg shadow-lg border border-gray-100 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                <div className="p-2">
                  {otherMenuItems.slice(3).map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      className="block px-3 py-2 text-sm text-gray-700 hover:text-pink-600 hover:bg-pink-50 rounded transition-all"
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Right Actions */}
          <div className="flex items-center space-x-4">
            {/* Cart */}
            <Button variant="ghost" size="sm" className="relative">
              <FiShoppingCart className="w-5 h-5" />
              <Badge className="absolute -top-2 -right-2 h-5 w-5 flex items-center justify-center p-0 text-xs bg-pink-600">
                2
              </Badge>
            </Button>

            {/* CTA Button */}
            <Button className="hidden md:flex bg-pink-600 hover:bg-pink-700" asChild>
              <Link href="/reservar">Reservar Cita</Link>
            </Button>

            {/* Mobile Menu */}
            <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="sm" className="lg:hidden">
                  <FiMenu className="w-5 h-5" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px] sm:w-[400px]">
                <SheetHeader>
                  <SheetTitle className="text-left">Menú</SheetTitle>
                </SheetHeader>
                
                <div className="mt-6 space-y-6">
                  {/* Treatments Grid Mobile */}
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-4">Tratamientos</h3>
                    <div className="grid grid-cols-2 gap-3">
                      {Object.entries(treatmentGrid).map(([key, category]) => (
                        <Link
                          key={key}
                          href={`/servicios/${key}`}
                          className="block p-3 rounded-lg border border-gray-100 hover:border-pink-200 hover:bg-pink-50 transition-all"
                          onClick={() => setIsMobileMenuOpen(false)}
                        >
                          <div className="text-center">
                            <span className="text-xl mb-1 block">{category.icon}</span>
                            <span className="text-sm font-medium text-gray-900">
                              {category.title}
                            </span>
                          </div>
                        </Link>
                      ))}
                    </div>
                  </div>

                  <Separator />

                  {/* Popular Services */}
                  <div>
                    <h4 className="font-medium text-gray-900 mb-3">Servicios Populares</h4>
                    <div className="space-y-2">
                      {Object.values(treatmentGrid).slice(0, 3).map((category) => (
                        category.popular.slice(0, 1).map((service) => (
                          <Link
                            key={service}
                            href={`/servicios/${service.toLowerCase().replace(/\s+/g, '-')}`}
                            className="block text-sm text-gray-600 hover:text-pink-600 py-1"
                            onClick={() => setIsMobileMenuOpen(false)}
                          >
                            • {service}
                          </Link>
                        ))
                      ))}
                    </div>
                  </div>

                  <Separator />

                  {/* Other Items */}
                  <div className="space-y-3">
                    {otherMenuItems.map((item) => (
                      <Link
                        key={item.href}
                        href={item.href}
                        className="block text-gray-700 hover:text-pink-600 font-medium"
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>

                  <Separator />

                  {/* Mobile CTA */}
                  <Button className="w-full bg-pink-600 hover:bg-pink-700" asChild>
                    <Link href="/reservar" onClick={() => setIsMobileMenuOpen(false)}>
                      Reservar Cita
                    </Link>
                  </Button>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
}