'use client';

import React from 'react';
import Link from 'next/link';
import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuList, NavigationMenuTrigger } from '@/components/ui/navigation-menu';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { FiZap, FiHeart, FiUser, FiSearch, FiShoppingBag, FiCalendar, FiArrowRight, FiCheck } from 'react-icons/fi';
import { categories } from '@/data/categoriesData';

const NavbarV2_5_Minimal = () => {
  const minimalServices = {
    'laser': {
      icon: FiZap,
      title: 'Depilación',
      subtitle: 'Láser definitiva',
      services: [
        { name: 'Axilas', popular: true },
        { name: 'Piernas Completas', popular: true },
        { name: 'Cavado Completo' },
        { name: 'Rostro Completo' },
        { name: 'Combos Premium' }
      ],
      highlight: 'Tecnología láser diodo de última generación'
    },
    'body': {
      icon: FiHeart,
      title: 'Corporales',
      subtitle: 'Modelado & bienestar',
      services: [
        { name: 'Maderoterapia', new: true },
        { name: 'Mio Up' },
        { name: 'Alpha Synergy' },
        { name: 'Masajes Terapéuticos' },
        { name: 'Bronceado Natural' }
      ],
      highlight: 'Tratamientos integrales para tu bienestar'
    },
    'facial': {
      icon: FiUser,
      title: 'Faciales',
      subtitle: 'Cuidado & rejuvenecimiento',
      services: [
        { name: 'Alpha Synergy Facial', premium: true },
        { name: 'Limpieza Profunda' },
        { name: 'Peeling Químico' },
        { name: 'Microblading' },
        { name: 'Hollywood Peel' }
      ],
      highlight: 'Tecnología avanzada para resultados visibles'
    }
  };

  const benefits = [
    'Consulta gratuita',
    'Tecnología certificada',
    'Profesionales especializados',
    'Garantía de resultados'
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b border-gray-100 bg-white/98 backdrop-blur-sm">
      <div className="container mx-auto px-4">
        <div className="flex h-14 items-center justify-between">
          {/* Minimal Brand */}
          <Link href="/" className="flex items-center space-x-2.5 group">
            <div className="h-8 w-8 rounded-full bg-violet-600 flex items-center justify-center group-hover:bg-violet-700 transition-colors">
              <span className="text-white font-semibold text-sm">Í</span>
            </div>
            <div className="flex flex-col">
              <span className="font-semibold text-lg text-gray-900 leading-tight">Íntima Estética</span>
              <span className="text-xs text-gray-500 leading-tight">Centro de Belleza</span>
            </div>
          </Link>

          {/* Minimal Navigation */}
          <NavigationMenu className="relative" viewport={false}>
            <NavigationMenuList className="flex items-center space-x-2">
              {Object.entries(minimalServices).map(([key, service]) => {
                const IconComponent = service.icon;
                return (
                  <NavigationMenuItem key={key}>
                    <NavigationMenuTrigger className="h-9 px-3 text-sm font-medium hover:text-violet-600 data-[state=open]:text-violet-600 transition-colors">
                      <IconComponent className="w-4 h-4 mr-2" />
                      {service.title}
                    </NavigationMenuTrigger>
                    <NavigationMenuContent className="relative">
                      <div className="w-[400px] p-4">
                        <div className="mb-4">
                          <div className="flex items-center space-x-2 mb-2">
                            <IconComponent className="w-5 h-5 text-violet-600" />
                            <div>
                              <h3 className="font-semibold text-gray-900 text-sm">{service.title}</h3>
                              <p className="text-xs text-gray-500">{service.subtitle}</p>
                            </div>
                          </div>
                          <p className="text-xs text-violet-600 bg-violet-50 px-2 py-1 rounded">{service.highlight}</p>
                        </div>
                        
                        <div className="space-y-2 mb-4">
                          {service.services.map((item) => (
                            <Link key={item.name} href={`/servicios/${key}/${item.name.toLowerCase().replace(/\s+/g, '-')}`} 
                                  className="flex items-center justify-between p-2 rounded hover:bg-gray-50 transition-colors group">
                              <div className="flex items-center space-x-2">
                                <span className="text-sm text-gray-700 group-hover:text-violet-600">{item.name}</span>
                                {'popular' in item && item.popular && <Badge className="text-xs bg-red-500">Popular</Badge>}
                                {'new' in item && item.new && <Badge className="text-xs bg-green-500">Nuevo</Badge>}
                                {'premium' in item && item.premium && <Badge className="text-xs bg-violet-500">Premium</Badge>}
                              </div>
                              <FiArrowRight className="w-3 h-3 text-gray-400 group-hover:text-violet-600 transition-colors" />
                            </Link>
                          ))}
                        </div>
                        
                        <div className="flex items-center justify-between pt-3 border-t border-gray-100">
                          <Link href={`/servicios/${key}`} className="text-sm text-violet-600 hover:text-violet-700">
                            Ver todos
                          </Link>
                          <Button size="sm" className="bg-violet-600 hover:bg-violet-700 text-xs px-3">
                            Consulta gratis
                          </Button>
                        </div>
                      </div>
                    </NavigationMenuContent>
                  </NavigationMenuItem>
                );
              })}

              <NavigationMenuItem>
                <NavigationMenuTrigger className="h-9 px-3 text-sm font-medium hover:text-violet-600 data-[state=open]:text-violet-600 transition-colors">
                  Nosotros
                </NavigationMenuTrigger>
                <NavigationMenuContent className="relative">
                  <div className="w-[320px] p-4">
                    <div className="mb-4">
                      <h3 className="font-semibold text-gray-900 text-sm mb-2">¿Por qué elegirnos?</h3>
                      <p className="text-xs text-gray-600 mb-3">Más de 15 años transformando vidas con belleza y bienestar</p>
                    </div>
                    
                    <div className="space-y-2 mb-4">
                      {benefits.map((benefit) => (
                        <div key={benefit} className="flex items-center space-x-2">
                          <FiCheck className="w-4 h-4 text-green-500" />
                          <span className="text-sm text-gray-700">{benefit}</span>
                        </div>
                      ))}
                    </div>
                    
                    <div className="grid grid-cols-2 gap-2">
                      <Link href="/nosotros">
                        <Button variant="outline" size="sm" className="w-full text-xs border-gray-200">
                          Conocer más
                        </Button>
                      </Link>
                      <Link href="/contacto">
                        <Button size="sm" className="w-full bg-violet-600 hover:bg-violet-700 text-xs">
                          Contactar
                        </Button>
                      </Link>
                    </div>
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <Link href="/promociones" className="h-9 px-3 text-sm font-medium hover:text-violet-600 transition-colors flex items-center relative">
                  Promociones
                  <div className="absolute -top-1 -right-1 h-2 w-2 bg-red-500 rounded-full"></div>
                </Link>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>

          {/* Minimal Actions */}
          <div className="flex items-center space-x-2">
            <Button variant="ghost" size="sm" className="h-9 w-9 p-0 hover:bg-gray-50">
              <FiSearch className="h-4 w-4" />
            </Button>
            
            <Button variant="ghost" size="sm" className="h-9 w-9 p-0 relative hover:bg-gray-50">
              <FiShoppingBag className="h-4 w-4" />
              <Badge className="absolute -top-1 -right-1 h-4 w-4 rounded-full p-0 flex items-center justify-center text-xs bg-violet-600 text-white">
                1
              </Badge>
            </Button>
            
            <Separator orientation="vertical" className="h-5" />
            
            <Button size="sm" className="bg-violet-600 hover:bg-violet-700 text-sm px-4 h-9">
              <FiCalendar className="w-4 h-4 mr-2" />
              Reservar
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default NavbarV2_5_Minimal;