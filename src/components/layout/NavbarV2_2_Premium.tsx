'use client';

import React from 'react';
import Link from 'next/link';
import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuList, NavigationMenuTrigger } from '@/components/ui/navigation-menu';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { Card } from '@/components/ui/card';
import { FiZap, FiHeart, FiUser, FiGift, FiSearch, FiShoppingBag, FiCalendar, FiStar, FiTrendingUp, FiAward } from 'react-icons/fi';
import { categories } from '@/data/categoriesData';

const NavbarV2_2_Premium = () => {
  const serviceCategories = {
    'depilacion': {
      icon: FiZap,
      title: 'Depilación Definitiva',
      services: {
        'Zonas Populares': ['Axilas', 'Piernas Completas', 'Cavado Completo', 'Bozo'],
        'Combos Premium': ['Pierna + Cavado + Axilas', 'Rostro Completo', 'Cuerpo Completo']
      }
    },
    'corporales': {
      icon: FiTrendingUp,
      title: 'Tratamientos Corporales',
      services: {
        'Reductores': ['Maderoterapia', 'Mio Up', 'Alpha Synergy'],
        'Relajantes': ['Masaje Descontracturante', 'Piedras Calientes']
      }
    },
    'faciales': {
      icon: FiHeart,
      title: 'Tratamientos Faciales',
      services: {
        'Anti-Edad': ['Alpha Synergy Facial', 'Peeling Químico'],
        'Limpieza': ['Limpieza Profunda', 'Hollywood Peel']
      }
    },
    'estetica': {
      icon: FiAward,
      title: 'Estética Integral',
      services: {
        'Cejas & Pestañas': ['Microblading', 'Dermopigmentación'],
        'Manos & Pies': ['Pedicura Premium', 'Esmaltado Semipermanente']
      }
    }
  };

  const promotions = [
    { title: 'Depilación Láser', discount: '30% OFF', tag: 'HOT' },
    { title: 'Pack Maderoterapia', discount: '4x3', tag: 'NUEVO' },
    { title: 'Alpha Synergy', discount: '25% OFF', tag: 'PREMIUM' }
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-gradient-to-r from-white via-violet-50/30 to-white backdrop-blur supports-[backdrop-filter]:bg-white/80">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          {/* Premium Brand */}
          <Link href="/" className="flex items-center space-x-3 group">
            <div className="relative">
              <div className="h-10 w-10 rounded-xl bg-gradient-to-br from-violet-500 via-purple-600 to-violet-700 flex items-center justify-center shadow-lg group-hover:shadow-violet-200 transition-all duration-300">
                <span className="text-white font-bold text-lg">Í</span>
              </div>
              <div className="absolute -top-1 -right-1 h-3 w-3 bg-gradient-to-r from-pink-400 to-violet-400 rounded-full animate-pulse"></div>
            </div>
            <div className="flex flex-col">
              <span className="font-bold text-xl bg-gradient-to-r from-gray-900 via-violet-800 to-gray-900 bg-clip-text text-transparent leading-none">
                Íntima Estética
              </span>
              <span className="text-xs bg-gradient-to-r from-violet-600 to-purple-600 bg-clip-text text-transparent font-medium leading-none">
                Centro de Belleza Profesional
              </span>
            </div>
          </Link>

          {/* Premium Navigation */}
          <NavigationMenu className="relative" viewport={false}>
            <NavigationMenuList className="flex items-center space-x-1">
              {Object.entries(serviceCategories).map(([key, category]) => {
                const IconComponent = category.icon;
                return (
                  <NavigationMenuItem key={key}>
                    <NavigationMenuTrigger className="h-10 px-4 text-sm font-medium hover:text-violet-600 data-[state=open]:text-violet-600 data-[state=open]:bg-violet-50 transition-all duration-200">
                      <IconComponent className="w-4 h-4 mr-2" />
                      {category.title.split(' ')[0]}
                    </NavigationMenuTrigger>
                    <NavigationMenuContent className="relative">
                      <div className="w-[480px] p-5">
                        <div className="mb-4">
                          <div className="flex items-center space-x-2 mb-3">
                            <IconComponent className="w-5 h-5 text-violet-600" />
                            <h3 className="font-semibold text-gray-900">{category.title}</h3>
                          </div>
                        </div>
                        
                        <div className="grid grid-cols-2 gap-4 mb-4">
                          {Object.entries(category.services).map(([subcategory, services]) => (
                            <div key={subcategory} className="space-y-2">
                              <h4 className="font-medium text-sm text-gray-700 border-b border-gray-100 pb-1">{subcategory}</h4>
                              <div className="space-y-1">
                                {services.map((service) => (
                                  <Link key={service} href={`/servicios/${key}/${service.toLowerCase().replace(/\s+/g, '-')}`} 
                                        className="block text-sm text-gray-600 hover:text-violet-600 hover:bg-violet-50 transition-all duration-150 py-1 px-2 rounded">
                                    {service}
                                  </Link>
                                ))}
                              </div>
                            </div>
                          ))}
                        </div>
                        
                        <div className="flex items-center justify-between pt-3 border-t border-gray-100">
                          <Link href={`/servicios/${key}`} className="text-sm text-violet-600 hover:text-violet-700 font-medium">
                            Ver todos los servicios →
                          </Link>
                          <Button size="sm" variant="outline" className="text-xs px-3 border-violet-200 hover:bg-violet-50">
                            <FiGift className="w-3 h-3 mr-1" />
                            Promociones
                          </Button>
                        </div>
                      </div>
                    </NavigationMenuContent>
                  </NavigationMenuItem>
                );
              })}

              <NavigationMenuItem>
                <NavigationMenuTrigger className="h-10 px-4 text-sm font-medium hover:text-violet-600 data-[state=open]:text-violet-600 data-[state=open]:bg-violet-50">
                  <FiGift className="w-4 h-4 mr-2" />
                  Promociones
                </NavigationMenuTrigger>
                <NavigationMenuContent className="relative">
                  <div className="w-[400px] p-5">
                    <h3 className="font-semibold text-gray-900 mb-4 flex items-center">
                      <FiGift className="w-5 h-5 text-violet-600 mr-2" />
                      Ofertas Especiales
                    </h3>
                    
                    <div className="space-y-3 mb-4">
                      {promotions.map((promo) => (
                        <Card key={promo.title} className="p-3 hover:shadow-md transition-shadow cursor-pointer border-violet-100">
                          <div className="flex items-center justify-between">
                            <div>
                              <h4 className="font-medium text-sm text-gray-900">{promo.title}</h4>
                              <p className="text-lg font-bold text-violet-600">{promo.discount}</p>
                            </div>
                            <Badge className={`text-xs ${
                              promo.tag === 'HOT' ? 'bg-red-500' : 
                              promo.tag === 'NUEVO' ? 'bg-green-500' : 'bg-violet-500'
                            }`}>
                              {promo.tag}
                            </Badge>
                          </div>
                        </Card>
                      ))}
                    </div>
                    
                    <Button className="w-full bg-gradient-to-r from-violet-600 to-purple-600 hover:from-violet-700 hover:to-purple-700 text-sm">
                      Ver Todas las Promociones
                    </Button>
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <Link href="/nosotros" className="h-10 px-4 text-sm font-medium hover:text-violet-600 transition-colors flex items-center hover:bg-violet-50 rounded">
                  <FiUser className="w-4 h-4 mr-2" />
                  Nosotros
                </Link>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>

          {/* Premium Actions */}
          <div className="flex items-center space-x-2">
            <Button variant="ghost" size="sm" className="h-10 w-10 p-0 hover:bg-violet-50">
              <FiSearch className="h-4 w-4" />
            </Button>
            
            <Button variant="ghost" size="sm" className="h-10 w-10 p-0 relative hover:bg-violet-50">
              <FiShoppingBag className="h-4 w-4" />
              <Badge className="absolute -top-1 -right-1 h-5 w-5 rounded-full p-0 flex items-center justify-center text-xs bg-gradient-to-r from-violet-600 to-purple-600 border-2 border-white">
                3
              </Badge>
            </Button>
            
            <Separator orientation="vertical" className="h-6" />
            
            <Button size="sm" className="bg-gradient-to-r from-violet-600 to-purple-600 hover:from-violet-700 hover:to-purple-700 text-sm px-4 shadow-lg hover:shadow-violet-200">
              <FiCalendar className="w-4 h-4 mr-2" />
              Reservar Cita
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default NavbarV2_2_Premium;