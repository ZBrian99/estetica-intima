'use client';

import React from 'react';
import Link from 'next/link';
import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuList, NavigationMenuTrigger } from '@/components/ui/navigation-menu';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { Card } from '@/components/ui/card';
import { FiZap, FiHeart, FiStar, FiTrendingUp, FiGift, FiSearch, FiShoppingBag, FiCalendar, FiAward, FiTarget, FiShield } from 'react-icons/fi';
import { categories } from '@/data/categoriesData';

const NavbarV2_4_Hybrid = () => {
  const hybridCategories = {
    'treatments': {
      icon: FiZap,
      title: 'Tratamientos',
      sections: {
        'Más Populares': {
          items: ['Depilación Láser', 'Maderoterapia', 'Alpha Synergy'],
          highlight: 'popular'
        },
        'Corporales': {
          items: ['Mio Up', 'Masaje Descontracturante', 'Bronceado Natural'],
          highlight: 'body'
        },
        'Faciales': {
          items: ['Limpieza Profunda', 'Peeling Químico', 'Microblading'],
          highlight: 'face'
        }
      }
    },
    'promotions': {
      icon: FiGift,
      title: 'Promociones',
      featured: true,
      offers: [
        { service: 'Depilación Láser', discount: '30% OFF', expires: '15 días', hot: true },
        { service: 'Pack Maderoterapia', discount: '4x3', expires: '30 días', new: true },
        { service: 'Alpha Synergy', discount: '25% OFF', expires: '7 días', premium: true }
      ]
    },
    'about': {
      icon: FiAward,
      title: 'Nosotros',
      features: [
        { title: '15+ Años de Experiencia', icon: FiShield },
        { title: 'Tecnología de Vanguardia', icon: FiTarget },
        { title: 'Profesionales Certificados', icon: FiAward }
      ]
    }
  };

  const quickActions = [
    { icon: FiSearch, label: 'Buscar', action: 'search' },
    { icon: FiShoppingBag, label: 'Carrito', action: 'cart', count: 3 },
    { icon: FiCalendar, label: 'Reservar', action: 'book', primary: true }
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white/96 backdrop-blur-md shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex h-15 items-center justify-between">
          {/* Hybrid Brand */}
          <Link href="/" className="flex items-center space-x-3 group">
            <div className="relative">
              <div className="h-9 w-9 rounded-xl bg-gradient-to-br from-violet-500 via-purple-600 to-violet-700 flex items-center justify-center shadow-md group-hover:shadow-lg transition-all duration-300">
                <span className="text-white font-bold text-base">Í</span>
              </div>
              <div className="absolute -top-0.5 -right-0.5 h-3 w-3 bg-gradient-to-r from-pink-400 to-violet-400 rounded-full opacity-80"></div>
            </div>
            <div className="flex flex-col">
              <span className="font-bold text-lg text-gray-900 leading-none group-hover:text-violet-700 transition-colors">
                Íntima Estética
              </span>
              <span className="text-xs text-violet-600 leading-none font-medium">
                Belleza & Bienestar Profesional
              </span>
            </div>
          </Link>

          {/* Hybrid Navigation */}
          <NavigationMenu className="relative" viewport={false}>
            <NavigationMenuList className="flex items-center space-x-1">
              <NavigationMenuItem>
                <NavigationMenuTrigger className="h-10 px-4 text-sm font-medium hover:text-violet-600 data-[state=open]:text-violet-600 data-[state=open]:bg-violet-50/80 transition-all">
                  <FiZap className="w-4 h-4 mr-2" />
                  Tratamientos
                </NavigationMenuTrigger>
                <NavigationMenuContent className="relative">
                  <div className="w-[520px] p-5">
                    <div className="grid grid-cols-3 gap-4 mb-4">
                      {Object.entries(hybridCategories.treatments.sections).map(([sectionName, section]) => (
                        <div key={sectionName} className="space-y-2">
                          <div className="flex items-center space-x-2 mb-2">
                            <h4 className="font-semibold text-sm text-gray-900">{sectionName}</h4>
                            {section.highlight === 'popular' && <Badge className="text-xs bg-red-500">HOT</Badge>}
                            {section.highlight === 'body' && <Badge className="text-xs bg-blue-500">CUERPO</Badge>}
                            {section.highlight === 'face' && <Badge className="text-xs bg-pink-500">ROSTRO</Badge>}
                          </div>
                          <div className="space-y-1">
                            {section.items.map((item) => (
                              <Link key={item} href={`/servicios/${item.toLowerCase().replace(/\s+/g, '-')}`} 
                                    className="block text-sm text-gray-600 hover:text-violet-600 hover:bg-violet-50 transition-all py-1.5 px-2 rounded">
                                {item}
                              </Link>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                    
                    <Separator className="my-4" />
                    
                    <div className="flex items-center justify-between">
                      <Link href="/servicios" className="text-sm text-violet-600 hover:text-violet-700 font-medium">
                        Ver todos los tratamientos →
                      </Link>
                      <div className="flex items-center space-x-2">
                        <Badge className="text-xs bg-green-100 text-green-700">Consulta gratuita</Badge>
                        <Button size="sm" variant="outline" className="text-xs px-3 border-violet-200">
                          Agendar consulta
                        </Button>
                      </div>
                    </div>
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuTrigger className="h-10 px-4 text-sm font-medium hover:text-violet-600 data-[state=open]:text-violet-600 data-[state=open]:bg-violet-50/80 transition-all relative">
                  <FiGift className="w-4 h-4 mr-2" />
                  Promociones
                  <div className="absolute -top-1 -right-1 h-2 w-2 bg-red-500 rounded-full animate-pulse"></div>
                </NavigationMenuTrigger>
                <NavigationMenuContent className="relative">
                  <div className="w-[450px] p-5">
                    <div className="mb-4">
                      <h3 className="font-semibold text-gray-900 flex items-center mb-3">
                        <FiGift className="w-5 h-5 text-violet-600 mr-2" />
                        Ofertas Especiales
                        <Badge className="ml-2 text-xs bg-red-500 animate-pulse">LIMITADAS</Badge>
                      </h3>
                    </div>
                    
                    <div className="space-y-3 mb-4">
                      {hybridCategories.promotions.offers.map((offer) => (
                        <Card key={offer.service} className="p-3 hover:shadow-md transition-all cursor-pointer border-l-4 border-l-violet-500">
                          <div className="flex items-center justify-between">
                            <div className="flex-1">
                              <div className="flex items-center space-x-2 mb-1">
                                <h4 className="font-medium text-sm text-gray-900">{offer.service}</h4>
                                {offer.hot && <Badge className="text-xs bg-red-500">HOT</Badge>}
                                {offer.new && <Badge className="text-xs bg-green-500">NUEVO</Badge>}
                                {offer.premium && <Badge className="text-xs bg-violet-500">PREMIUM</Badge>}
                              </div>
                              <div className="flex items-center space-x-3">
                                <span className="text-lg font-bold text-violet-600">{offer.discount}</span>
                                <span className="text-xs text-gray-500">Vence en {offer.expires}</span>
                              </div>
                            </div>
                            <Button size="sm" className="bg-violet-600 hover:bg-violet-700 text-xs px-3">
                              Reservar
                            </Button>
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
                <NavigationMenuTrigger className="h-10 px-4 text-sm font-medium hover:text-violet-600 data-[state=open]:text-violet-600 data-[state=open]:bg-violet-50/80 transition-all">
                  <FiAward className="w-4 h-4 mr-2" />
                  Nosotros
                </NavigationMenuTrigger>
                <NavigationMenuContent className="relative">
                  <div className="w-[380px] p-5">
                    <div className="mb-4">
                      <h3 className="font-semibold text-gray-900 flex items-center mb-3">
                        <FiAward className="w-5 h-5 text-violet-600 mr-2" />
                        ¿Por qué elegirnos?
                      </h3>
                    </div>
                    
                    <div className="space-y-3 mb-4">
                      {hybridCategories.about.features.map((feature) => {
                        const IconComponent = feature.icon;
                        return (
                          <div key={feature.title} className="flex items-center space-x-3 p-2 rounded hover:bg-violet-50 transition-colors">
                            <div className="h-8 w-8 rounded-lg bg-violet-100 flex items-center justify-center">
                              <IconComponent className="w-4 h-4 text-violet-600" />
                            </div>
                            <span className="text-sm font-medium text-gray-900">{feature.title}</span>
                          </div>
                        );
                      })}
                    </div>
                    
                    <div className="grid grid-cols-2 gap-2">
                      <Button variant="outline" size="sm" className="text-xs border-violet-200 hover:bg-violet-50">
                        Conocer más
                      </Button>
                      <Button size="sm" className="bg-violet-600 hover:bg-violet-700 text-xs">
                        Contactar
                      </Button>
                    </div>
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>

          {/* Hybrid Actions */}
          <div className="flex items-center space-x-2">
            {quickActions.map((action) => {
              const IconComponent = action.icon;
              if (action.primary) {
                return (
                  <Button key={action.action} size="sm" className="bg-violet-600 hover:bg-violet-700 text-sm px-4 h-10">
                    <IconComponent className="w-4 h-4 mr-2" />
                    {action.label}
                  </Button>
                );
              }
              
              return (
                <Button key={action.action} variant="ghost" size="sm" className="h-10 w-10 p-0 relative hover:bg-violet-50">
                  <IconComponent className="h-4 w-4" />
                  {action.count && (
                    <Badge className="absolute -top-1 -right-1 h-5 w-5 rounded-full p-0 flex items-center justify-center text-xs bg-violet-600 border-2 border-white">
                      {action.count}
                    </Badge>
                  )}
                </Button>
              );
            })}
          </div>
        </div>
      </div>
    </header>
  );
};

export default NavbarV2_4_Hybrid;