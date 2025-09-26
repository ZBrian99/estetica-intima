'use client';

import React from 'react';
import Link from 'next/link';
import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuList, NavigationMenuTrigger } from '@/components/ui/navigation-menu';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { FiSearch, FiShoppingBag, FiCalendar, FiStar, FiHeart, FiPhone } from 'react-icons/fi';
import { categories } from '@/data/categoriesData';

const NavbarV2_1_Elegant = () => {
  const treatmentsByCategory = {
    'depilacion-laser': {
      individual: ['Axilas', 'Bozo', 'Piernas Completas', 'Cavado Completo', 'Rostro Completo'],
      combos: ['Pierna + Cavado + Axilas', 'Rostro Completo', 'Combo Premium']
    },
    'tratamientos-corporales': {
      reductores: ['Maderoterapia', 'Mio Up', 'Alpha Synergy Corporal'],
      relajantes: ['Masaje Descontracturante', 'Piedras Calientes', 'Drenaje Linfático']
    },
    'tratamientos-faciales': {
      rejuvenecimiento: ['Alpha Synergy Facial', 'Peeling Químico', 'Hollywood Peel'],
      limpieza: ['Limpieza Profunda', 'Dermaplaning']
    },
    'estetica-integral': {
      cejas: ['Microblading', 'Dermopigmentación'],
      manos: ['Spa de Pies + Pedicura', 'Esmaltado Semipermanente']
    }
  };

  const featuredServices = [
    { name: 'Depilación Láser', discount: '30% OFF', popular: true },
    { name: 'Maderoterapia Pack', discount: '4x3', new: true },
    { name: 'Alpha Synergy', discount: 'NUEVO', premium: true }
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          {/* Brand */}
          <Link href="/" className="flex items-center space-x-3">
            <div className="h-8 w-8 rounded-full bg-gradient-to-br from-violet-500 to-purple-600 flex items-center justify-center">
              <span className="text-white font-bold text-sm">I</span>
            </div>
            <div className="flex flex-col">
              <span className="font-bold text-lg text-gray-900 leading-none">Íntima Estética</span>
              <span className="text-xs text-violet-600 leading-none">Centro de Belleza Profesional</span>
            </div>
          </Link>

          {/* Navigation */}
          <NavigationMenu className="relative" viewport={false}>
            <NavigationMenuList className="flex items-center space-x-1">
              <NavigationMenuItem>
                <NavigationMenuTrigger className="h-9 px-3 text-sm font-medium hover:text-violet-600 data-[state=open]:text-violet-600">
                  <FiStar className="w-4 h-4 mr-2" />
                  Tratamientos
                </NavigationMenuTrigger>
                <NavigationMenuContent className="relative">
                  <div className="w-[600px] p-4">
                    <div className="grid grid-cols-2 gap-6">
                      <div className="space-y-4">
                        <h3 className="font-semibold text-gray-900 text-sm">Depilación Definitiva</h3>
                        <div className="space-y-2">
                          {treatmentsByCategory['depilacion-laser'].individual.slice(0, 4).map((service) => (
                            <Link key={service} href={`/servicios/depilacion/${service.toLowerCase().replace(/\s+/g, '-')}`} 
                                  className="block text-sm text-gray-600 hover:text-violet-600 transition-colors py-1">
                              {service}
                            </Link>
                          ))}
                        </div>
                        <Link href="/servicios/depilacion" className="text-xs text-violet-600 hover:text-violet-700 font-medium">
                          Ver todos los servicios →
                        </Link>
                      </div>
                      
                      <div className="space-y-4">
                        <h3 className="font-semibold text-gray-900 text-sm">Tratamientos Corporales</h3>
                        <div className="space-y-2">
                          {treatmentsByCategory['tratamientos-corporales'].reductores.map((service) => (
                            <Link key={service} href={`/servicios/corporales/${service.toLowerCase().replace(/\s+/g, '-')}`} 
                                  className="block text-sm text-gray-600 hover:text-violet-600 transition-colors py-1">
                              {service}
                            </Link>
                          ))}
                        </div>
                        <Link href="/servicios/corporales" className="text-xs text-violet-600 hover:text-violet-700 font-medium">
                          Ver todos los tratamientos →
                        </Link>
                      </div>
                    </div>
                    
                    <Separator className="my-4" />
                    
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-4">
                        {featuredServices.map((service) => (
                          <div key={service.name} className="flex items-center space-x-2">
                            <span className="text-xs text-gray-600">{service.name}</span>
                            <Badge variant={service.popular ? 'default' : 'secondary'} className="text-xs px-2 py-0.5">
                              {service.discount}
                            </Badge>
                          </div>
                        ))}
                      </div>
                      <Button size="sm" className="bg-violet-600 hover:bg-violet-700 text-xs px-3 py-1">
                        Ver Promociones
                      </Button>
                    </div>
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuTrigger className="h-9 px-3 text-sm font-medium hover:text-violet-600 data-[state=open]:text-violet-600">
                  <FiHeart className="w-4 h-4 mr-2" />
                  Faciales
                </NavigationMenuTrigger>
                <NavigationMenuContent className="relative">
                  <div className="w-[400px] p-4">
                    <div className="space-y-4">
                      <div>
                        <h3 className="font-semibold text-gray-900 text-sm mb-3">Rejuvenecimiento</h3>
                        <div className="space-y-2">
                          {treatmentsByCategory['tratamientos-faciales'].rejuvenecimiento.map((service) => (
                            <Link key={service} href={`/servicios/faciales/${service.toLowerCase().replace(/\s+/g, '-')}`} 
                                  className="block text-sm text-gray-600 hover:text-violet-600 transition-colors py-1">
                              {service}
                            </Link>
                          ))}
                        </div>
                      </div>
                      
                      <div>
                        <h3 className="font-semibold text-gray-900 text-sm mb-3">Limpieza & Cuidado</h3>
                        <div className="space-y-2">
                          {treatmentsByCategory['tratamientos-faciales'].limpieza.map((service) => (
                            <Link key={service} href={`/servicios/faciales/${service.toLowerCase().replace(/\s+/g, '-')}`} 
                                  className="block text-sm text-gray-600 hover:text-violet-600 transition-colors py-1">
                              {service}
                            </Link>
                          ))}
                        </div>
                      </div>
                    </div>
                    
                    <Separator className="my-4" />
                    
                    <Link href="/servicios/faciales" className="block text-center">
                      <Button variant="outline" size="sm" className="w-full text-xs">
                        Ver Todos los Tratamientos Faciales
                      </Button>
                    </Link>
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <Link href="/nosotros" className="h-9 px-3 text-sm font-medium hover:text-violet-600 transition-colors flex items-center">
                  Nosotros
                </Link>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <Link href="/promociones" className="h-9 px-3 text-sm font-medium hover:text-violet-600 transition-colors flex items-center">
                  Promociones
                </Link>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>

          {/* Actions */}
          <div className="flex items-center space-x-2">
            <Button variant="ghost" size="sm" className="h-9 w-9 p-0">
              <FiSearch className="h-4 w-4" />
            </Button>
            
            <Button variant="ghost" size="sm" className="h-9 w-9 p-0 relative">
              <FiShoppingBag className="h-4 w-4" />
              <Badge className="absolute -top-1 -right-1 h-5 w-5 rounded-full p-0 flex items-center justify-center text-xs bg-violet-600">
                2
              </Badge>
            </Button>
            
            <Separator orientation="vertical" className="h-6" />
            
            <Button size="sm" className="bg-violet-600 hover:bg-violet-700 text-xs px-3">
              <FiCalendar className="w-3 h-3 mr-1" />
              Reservar
            </Button>
            
            <Button variant="outline" size="sm" className="text-xs px-3">
              <FiPhone className="w-3 h-3 mr-1" />
              Contacto
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default NavbarV2_1_Elegant;