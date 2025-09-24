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

// Datos organizados por columnas basados en Servicios.json
const treatmentCategories = {
  depilacion: {
    title: 'Depilación',
    sections: {
      'Femenina': [
        'Axilas',
        'Bozo',
        'Rostro Completo',
        'Cavado Completo',
        'Pierna Completa',
        'Brazo Completo'
      ],
      'Masculina': [
        'Pecho',
        'Espalda Completa',
        'Barba',
        'Axilas',
        'Piernas Completas',
        'Brazos Completos'
      ],
      'Combos Populares': [
        'Pierna + Cavado + Axilas',
        'Rostro Completo',
        'Espalda + Pecho',
        'Combo Full Cuerpo'
      ]
    }
  },
  corporales: {
    title: 'Corporales',
    sections: {
      'Tratamientos': [
        'Maderoterapia',
        'Mio Up',
        'Alpha Synergy Corporal',
        'Vacuum Therapy',
        'Presoterapia'
      ],
      'Masajes': [
        'Masaje Descontracturante',
        'Masaje Deportivo',
        'Piedras Calientes',
        'Drenaje Linfático',
        'Reflexología'
      ],
      'Bronceado': [
        'Bronceado Natural',
        'Preparación de Piel',
        'Mantenimiento'
      ]
    }
  },
  faciales: {
    title: 'Faciales',
    sections: {
      'Tratamientos': [
        'Limpieza Facial Profunda',
        'Alpha Synergy Facial',
        'Hollywood Peel',
        'Peeling Químico',
        'Dermaplaning'
      ],
      'Estética': [
        'Dermopigmentación Labial',
        'Microblading',
        'Hidratación Profunda'
      ]
    }
  },
  pestanas_cejas: {
    title: 'Pestañas & Cejas',
    sections: {
      'Cejas': [
        'Microblading',
        'Perfilado de Cejas',
        'Tinte de Cejas',
        'Laminado de Cejas'
      ],
      'Pestañas': [
        'Extensiones de Pestañas',
        'Lifting de Pestañas',
        'Tinte de Pestañas',
        'Permanente de Pestañas'
      ]
    }
  },
  unas_pies: {
    title: 'Uñas & Pies',
    sections: {
      'Pies': [
        'Spa de Pies Completo',
        'Pedicuría',
        'Esmaltado Común',
        'Esmaltado Semipermanente'
      ],
      'Uñas': [
        'Manicuría',
        'Uñas Esculpidas',
        'Nail Art',
        'Tratamiento de Cutículas'
      ]
    }
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

export default function NavbarDemo_Columnas() {
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
                    <div className="w-[900px] p-6">
                      <div className="grid grid-cols-5 gap-6">
                        {Object.entries(treatmentCategories).map(([key, category]) => (
                          <div key={key} className="space-y-3">
                            <h3 className="font-semibold text-gray-900 text-sm border-b border-pink-100 pb-2">
                              {category.title}
                            </h3>
                            {Object.entries(category.sections).map(([sectionName, items]) => (
                              <div key={sectionName} className="space-y-2">
                                <h4 className="font-medium text-xs text-pink-600 uppercase tracking-wide">
                                  {sectionName}
                                </h4>
                                <div className="space-y-1 ml-2">
                                  {items.slice(0, 4).map((item) => (
                                    <Link
                                      key={item}
                                      href={`/servicios/${item.toLowerCase().replace(/\s+/g, '-')}`}
                                      className="block text-xs text-gray-600 hover:text-pink-600 hover:bg-pink-50 px-2 py-1 rounded transition-all"
                                    >
                                      {item}
                                    </Link>
                                  ))}
                                  {items.length > 4 && (
                                    <Link
                                      href={`/servicios/${key}`}
                                      className="block text-xs text-pink-600 font-medium hover:text-pink-700 px-2 py-1"
                                    >
                                      Ver todos ({items.length})
                                    </Link>
                                  )}
                                </div>
                              </div>
                            ))}
                          </div>
                        ))}
                      </div>
                      
                      <Separator className="my-4" />
                      
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-4">
                          <Badge variant="secondary" className="bg-pink-100 text-pink-700">
                            Nuevos Tratamientos
                          </Badge>
                          <span className="text-sm text-gray-600">
                            Descubre nuestros últimos servicios de belleza
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
                  {/* Treatments */}
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-3">Tratamientos</h3>
                    <div className="space-y-3">
                      {Object.entries(treatmentCategories).map(([key, category]) => (
                        <div key={key} className="space-y-2">
                          <Link
                            href={`/servicios/${key}`}
                            className="block font-medium text-pink-600 hover:text-pink-700"
                            onClick={() => setIsMobileMenuOpen(false)}
                          >
                            {category.title}
                          </Link>
                          <div className="ml-4 space-y-1">
                            {Object.entries(category.sections).map(([sectionName, items]) => (
                              <div key={sectionName}>
                                <span className="text-xs text-gray-500 uppercase tracking-wide">
                                  {sectionName}
                                </span>
                                {items.slice(0, 2).map((item) => (
                                  <Link
                                    key={item}
                                    href={`/servicios/${item.toLowerCase().replace(/\s+/g, '-')}`}
                                    className="block text-sm text-gray-600 hover:text-pink-600 ml-2 py-1"
                                    onClick={() => setIsMobileMenuOpen(false)}
                                  >
                                    {item}
                                  </Link>
                                ))}
                              </div>
                            ))}
                          </div>
                        </div>
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