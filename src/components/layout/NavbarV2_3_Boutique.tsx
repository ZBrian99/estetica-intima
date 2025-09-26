'use client';

import React from 'react';
import Link from 'next/link';
import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuList, NavigationMenuTrigger } from '@/components/ui/navigation-menu';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { FiScissors, FiHeart, FiStar, FiGift, FiSearch, FiShoppingBag, FiCalendar, FiPhone, FiMapPin } from 'react-icons/fi';
import { categories } from '@/data/categoriesData';

const NavbarV2_3_Boutique = () => {
  const boutiqueTreatments = {
    'signature': {
      icon: FiStar,
      title: 'Tratamientos Signature',
      featured: true,
      items: [
        { name: 'Depilación Láser Premium', price: 'Desde $8.000', popular: true },
        { name: 'Maderoterapia Integral', price: 'Pack 4x3', new: true },
        { name: 'Alpha Synergy Facial', price: '25% OFF', premium: true },
        { name: 'Microblading HD', price: 'Retoque gratis', exclusive: true }
      ]
    },
    'body': {
      icon: FiScissors,
      title: 'Cuerpo',
      items: [
        { name: 'Depilación Definitiva', subcategory: 'Láser Diodo' },
        { name: 'Maderoterapia', subcategory: 'Modelado Corporal' },
        { name: 'Mio Up', subcategory: 'Tonificación' },
        { name: 'Masajes Terapéuticos', subcategory: 'Relajación' },
        { name: 'Bronceado Natural', subcategory: 'Aerógrafo' }
      ]
    },
    'face': {
      icon: FiHeart,
      title: 'Rostro',
      items: [
        { name: 'Alpha Synergy Facial', subcategory: 'Anti-Edad' },
        { name: 'Limpieza Profunda', subcategory: 'Purificación' },
        { name: 'Peeling Químico', subcategory: 'Renovación' },
        { name: 'Hollywood Peel', subcategory: 'Luminosidad' },
        { name: 'Microblading', subcategory: 'Cejas Perfectas' }
      ]
    }
  };

  const quickLinks = [
    { name: 'Promociones', href: '/promociones', hot: true },
    { name: 'Nosotros', href: '/nosotros' },
    { name: 'Contacto', href: '/contacto' }
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white/98 backdrop-blur-sm">
      <div className="container mx-auto px-4">
        <div className="flex h-14 items-center justify-between">
          {/* Boutique Brand */}
          <Link href="/" className="flex items-center space-x-2.5">
            <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-violet-600 to-purple-700 flex items-center justify-center shadow-sm">
              <span className="text-white font-semibold text-sm">Í</span>
            </div>
            <div className="flex flex-col">
              <span className="font-semibold text-lg text-gray-900 leading-tight">Íntima Estética</span>
              <span className="text-xs text-violet-600 leading-tight font-medium">Belleza Profesional</span>
            </div>
          </Link>

          {/* Compact Navigation */}
          <NavigationMenu className="relative" viewport={false}>
            <NavigationMenuList className="flex items-center space-x-0.5">
              {Object.entries(boutiqueTreatments).map(([key, category]) => {
                const IconComponent = category.icon;
                return (
                  <NavigationMenuItem key={key}>
                    <NavigationMenuTrigger className="h-9 px-3 text-sm font-medium hover:text-violet-600 data-[state=open]:text-violet-600 transition-colors">
                      <IconComponent className="w-3.5 h-3.5 mr-1.5" />
                      {category.title}
                    </NavigationMenuTrigger>
                    <NavigationMenuContent className="relative">
                      {key === 'signature' ? (
                        <div className="w-[420px] p-4">
                          <div className="mb-3">
                            <h3 className="font-semibold text-gray-900 text-sm flex items-center">
                              <IconComponent className="w-4 h-4 text-violet-600 mr-2" />
                              {category.title}
                              <Badge className="ml-2 text-xs bg-violet-100 text-violet-700">EXCLUSIVOS</Badge>
                            </h3>
                          </div>
                          
                          <div className="grid grid-cols-2 gap-3 mb-4">
                            {category.items.map((item) => (
                              <div key={item.name} className="p-2.5 rounded-lg border border-gray-100 hover:border-violet-200 hover:bg-violet-50/50 transition-all cursor-pointer">
                                <div className="flex items-start justify-between mb-1">
                                  <h4 className="font-medium text-sm text-gray-900 leading-tight">{item.name}</h4>
                                  {'popular' in item && item.popular && <Badge className="text-xs bg-red-500 ml-1">HOT</Badge>}
                                  {'new' in item && item.new && <Badge className="text-xs bg-green-500 ml-1">NUEVO</Badge>}
                                  {'premium' in item && item.premium && <Badge className="text-xs bg-violet-500 ml-1">PREMIUM</Badge>}
                                  {'exclusive' in item && item.exclusive && <Badge className="text-xs bg-purple-500 ml-1">EXCLUSIVO</Badge>}
                                </div>
                                {'price' in item && <p className="text-xs text-violet-600 font-medium">{item.price}</p>}
                              </div>
                            ))}
                          </div>
                          
                          <div className="flex justify-center">
                            <Button size="sm" className="bg-violet-600 hover:bg-violet-700 text-xs px-4">
                              Ver Todos los Signature
                            </Button>
                          </div>
                        </div>
                      ) : (
                        <div className="w-[360px] p-4">
                          <div className="mb-3">
                            <h3 className="font-semibold text-gray-900 text-sm flex items-center">
                              <IconComponent className="w-4 h-4 text-violet-600 mr-2" />
                              Tratamientos de {category.title}
                            </h3>
                          </div>
                          
                          <div className="space-y-1.5 mb-4">
                            {category.items.map((item) => (
                              <Link key={item.name} href={`/servicios/${key}/${item.name.toLowerCase().replace(/\s+/g, '-')}`} 
                                    className="flex items-center justify-between p-2 rounded hover:bg-violet-50 transition-colors group">
                                <div>
                                  <span className="text-sm text-gray-900 group-hover:text-violet-600 font-medium">{item.name}</span>
                                  {'subcategory' in item && <p className="text-xs text-gray-500">{item.subcategory}</p>}
                                </div>
                                <span className="text-xs text-violet-600 opacity-0 group-hover:opacity-100 transition-opacity">→</span>
                              </Link>
                            ))}
                          </div>
                          
                          <div className="flex justify-center">
                            <Button variant="outline" size="sm" className="text-xs px-4 border-violet-200 hover:bg-violet-50">
                              Ver Todos
                            </Button>
                          </div>
                        </div>
                      )}
                    </NavigationMenuContent>
                  </NavigationMenuItem>
                );
              })}

              {quickLinks.map((link) => (
                <NavigationMenuItem key={link.name}>
                  <Link href={link.href} className="h-9 px-3 text-sm font-medium hover:text-violet-600 transition-colors flex items-center relative">
                    {link.name}
                    {link.hot && (
                      <div className="absolute -top-1 -right-1 h-2 w-2 bg-red-500 rounded-full animate-pulse"></div>
                    )}
                  </Link>
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>
          </NavigationMenu>

          {/* Compact Actions */}
          <div className="flex items-center space-x-1.5">
            <Button variant="ghost" size="sm" className="h-9 w-9 p-0 hover:bg-violet-50">
              <FiSearch className="h-3.5 w-3.5" />
            </Button>
            
            <Button variant="ghost" size="sm" className="h-9 w-9 p-0 relative hover:bg-violet-50">
              <FiShoppingBag className="h-3.5 w-3.5" />
              <Badge className="absolute -top-0.5 -right-0.5 h-4 w-4 rounded-full p-0 flex items-center justify-center text-xs bg-violet-600 text-white border border-white">
                2
              </Badge>
            </Button>
            
            <Separator orientation="vertical" className="h-5" />
            
            <Button size="sm" className="bg-violet-600 hover:bg-violet-700 text-xs px-3 h-9">
              <FiCalendar className="w-3 h-3 mr-1.5" />
              Reservar
            </Button>
            
            <Button variant="outline" size="sm" className="text-xs px-3 h-9 border-violet-200">
              <FiPhone className="w-3 h-3 mr-1.5" />
              Llamar
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default NavbarV2_3_Boutique;