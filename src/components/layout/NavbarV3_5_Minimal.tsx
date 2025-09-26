'use client';

import React, { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import { FiSearch, FiShoppingCart, FiMenu, FiX, FiChevronDown } from 'react-icons/fi';
import { Badge } from '@/components/ui/badge';

interface NavItem {
  name: string;
  href: string;
  description?: string;
  badge?: string;
  popular?: boolean;
  new?: boolean;
  premium?: boolean;
}

interface TreatmentCategory {
  name: string;
  items: NavItem[];
}

const treatmentCategories: TreatmentCategory[] = [
  {
    name: "Faciales",
    items: [
      { name: "Limpieza Profunda", href: "/tratamientos/limpieza", popular: true },
      { name: "Peeling", href: "/tratamientos/peeling", premium: true },
      { name: "Hidratación", href: "/tratamientos/hidratacion" },
      { name: "Anti-aging", href: "/tratamientos/anti-aging", premium: true }
    ]
  },
  {
    name: "Corporales",
    items: [
      { name: "Masajes", href: "/tratamientos/masajes", popular: true },
      { name: "Drenaje", href: "/tratamientos/drenaje" },
      { name: "Exfoliación", href: "/tratamientos/exfoliacion" },
      { name: "Reductores", href: "/tratamientos/reductores", premium: true }
    ]
  },
  {
    name: "Medicina Estética",
    items: [
      { name: "Botox", href: "/tratamientos/botox", premium: true },
      { name: "Rellenos", href: "/tratamientos/rellenos", premium: true },
      { name: "Mesoterapia", href: "/tratamientos/mesoterapia" },
      { name: "Hilos Tensores", href: "/tratamientos/hilos", new: true, premium: true }
    ]
  }
];

const mainNavItems: NavItem[] = [
  { name: "Promociones", href: "/promociones", badge: "30% OFF" },
  { name: "Nosotros", href: "/nosotros" },
  { name: "Contacto", href: "/contacto" }
];

const moreMenuItems: NavItem[] = [
  { name: "Blog", href: "/blog" },
  { name: "Testimonios", href: "/testimonios" },
  { name: "Galería", href: "/galeria" },
  { name: "FAQ", href: "/faq" },
  { name: "Privacidad", href: "/privacidad" },
  { name: "Términos", href: "/terminos" }
];

export default function NavbarV3_5_Minimal() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isTreatmentsOpen, setIsTreatmentsOpen] = useState(false);
  const [isMoreMenuOpen, setIsMoreMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  
  const treatmentsRef = useRef<HTMLDivElement>(null);
  const moreMenuRef = useRef<HTMLDivElement>(null);

  // Close dropdowns when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (treatmentsRef.current && !treatmentsRef.current.contains(event.target as Node)) {
        setIsTreatmentsOpen(false);
      }
      if (moreMenuRef.current && !moreMenuRef.current.contains(event.target as Node)) {
        setIsMoreMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <nav className="bg-white border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="text-xl font-semibold text-gray-900 hover:text-pink-600 transition-colors">
              EstéticaÍntima
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {/* Treatments Menu */}
            <div className="relative" ref={treatmentsRef}>
              <button
                onClick={() => setIsTreatmentsOpen(!isTreatmentsOpen)}
                className="flex items-center space-x-1 text-gray-700 hover:text-pink-600 transition-colors"
              >
                <span>Tratamientos</span>
                <FiChevronDown className={`w-4 h-4 transition-transform ${isTreatmentsOpen ? 'rotate-180' : ''}`} />
              </button>

              {/* Simple Dropdown */}
              {isTreatmentsOpen && (
                <div className="absolute top-full left-0 mt-2 w-80 bg-white rounded-lg shadow-lg border border-gray-200">
                  <div className="p-4">
                    <div className="grid grid-cols-1 gap-4">
                      {treatmentCategories.map((category) => (
                        <div key={category.name} className="space-y-2">
                          <h3 className="font-medium text-gray-900 text-sm">{category.name}</h3>
                          <div className="space-y-1">
                            {category.items.map((item) => (
                              <Link
                                key={item.name}
                                href={item.href}
                                className="block px-3 py-2 text-sm text-gray-600 hover:text-pink-600 hover:bg-gray-50 rounded transition-colors"
                              >
                                <div className="flex items-center justify-between">
                                  <span>{item.name}</span>
                                  <div className="flex space-x-1">
                                    {'popular' in item && item.popular && (
                                      <Badge variant="secondary" className="bg-orange-100 text-orange-700 text-xs">
                                        Popular
                                      </Badge>
                                    )}
                                    {'new' in item && item.new && (
                                      <Badge variant="secondary" className="bg-green-100 text-green-700 text-xs">
                                        Nuevo
                                      </Badge>
                                    )}
                                    {'premium' in item && item.premium && (
                                      <Badge variant="secondary" className="bg-purple-100 text-purple-700 text-xs">
                                        Premium
                                      </Badge>
                                    )}
                                  </div>
                                </div>
                              </Link>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                    
                    {/* Simple CTA */}
                    <div className="mt-4 pt-4 border-t border-gray-100">
                      <Link 
                        href="/consulta" 
                        className="block w-full bg-pink-600 text-white text-center py-2 rounded hover:bg-pink-700 transition-colors text-sm"
                      >
                        Consulta Gratuita
                      </Link>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Main Navigation Items */}
            {mainNavItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="relative text-gray-700 hover:text-pink-600 transition-colors"
              >
                <span>{item.name}</span>
                {item.badge && (
                  <Badge variant="secondary" className="ml-2 bg-red-100 text-red-700 text-xs">
                    {item.badge}
                  </Badge>
                )}
              </Link>
            ))}

            {/* More Menu */}
            <div className="relative" ref={moreMenuRef}>
              <button
                onClick={() => setIsMoreMenuOpen(!isMoreMenuOpen)}
                className="flex items-center space-x-1 text-gray-700 hover:text-pink-600 transition-colors"
              >
                <span>Más</span>
                <FiChevronDown className={`w-4 h-4 transition-transform ${isMoreMenuOpen ? 'rotate-180' : ''}`} />
              </button>

              {isMoreMenuOpen && (
                <div className="absolute top-full right-0 mt-2 w-48 bg-white rounded-lg shadow-lg border border-gray-200">
                  <div className="p-2">
                    {moreMenuItems.map((item) => (
                      <Link
                        key={item.name}
                        href={item.href}
                        className="block px-3 py-2 text-sm text-gray-600 hover:text-pink-600 hover:bg-gray-50 rounded transition-colors"
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Search, Cart, and CTA */}
          <div className="hidden lg:flex items-center space-x-4">
            {/* Simple Search */}
            <div className="relative">
              <FiSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
              <input
                type="text"
                placeholder="Buscar..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-48 pl-10 pr-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-pink-500 focus:border-pink-500 text-sm"
              />
            </div>

            {/* Simple Cart */}
            <Link 
              href="/carrito" 
              className="relative p-2 text-gray-700 hover:text-pink-600 transition-colors"
            >
              <FiShoppingCart className="w-5 h-5" />
              <span className="absolute -top-1 -right-1 bg-pink-500 text-white text-xs rounded-full w-4 h-4 flex items-center justify-center">
                2
              </span>
            </Link>

            {/* Simple CTA Button */}
            <Link 
              href="/reservar" 
              className="bg-pink-600 text-white px-4 py-2 rounded hover:bg-pink-700 transition-colors text-sm"
            >
              Reservar
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 text-gray-700 hover:text-pink-600 transition-colors"
            >
              {isMobileMenuOpen ? <FiX className="w-6 h-6" /> : <FiMenu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-white border-t border-gray-200">
          <div className="px-4 py-4 space-y-4">
            {/* Mobile Search */}
            <div className="relative">
              <FiSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
              <input
                type="text"
                placeholder="Buscar..."
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-pink-500 focus:border-pink-500 text-sm"
              />
            </div>

            {/* Mobile Navigation */}
            <div className="space-y-3">
              <div>
                <button
                  onClick={() => setIsTreatmentsOpen(!isTreatmentsOpen)}
                  className="flex items-center justify-between w-full text-left text-gray-900 py-2"
                >
                  <span>Tratamientos</span>
                  <FiChevronDown className={`w-4 h-4 transition-transform ${isTreatmentsOpen ? 'rotate-180' : ''}`} />
                </button>
                
                {isTreatmentsOpen && (
                  <div className="mt-2 pl-4 space-y-2">
                    {treatmentCategories.map((category) => (
                      <div key={category.name} className="space-y-1">
                        <h4 className="font-medium text-gray-900 text-sm">{category.name}</h4>
                        <div className="pl-3 space-y-1">
                          {category.items.map((item) => (
                            <Link
                              key={item.name}
                              href={item.href}
                              className="block text-gray-600 hover:text-pink-600 py-1 text-sm transition-colors"
                              onClick={() => setIsMobileMenuOpen(false)}
                            >
                              <div className="flex items-center justify-between">
                                <span>{item.name}</span>
                                <div className="flex space-x-1">
                                  {'popular' in item && item.popular && (
                                    <Badge variant="secondary" className="bg-orange-100 text-orange-700 text-xs">
                                      Popular
                                    </Badge>
                                  )}
                                  {'new' in item && item.new && (
                                    <Badge variant="secondary" className="bg-green-100 text-green-700 text-xs">
                                      Nuevo
                                    </Badge>
                                  )}
                                  {'premium' in item && item.premium && (
                                    <Badge variant="secondary" className="bg-purple-100 text-purple-700 text-xs">
                                      Premium
                                    </Badge>
                                  )}
                                </div>
                              </div>
                            </Link>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {mainNavItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="flex items-center justify-between text-gray-900 py-2 hover:text-pink-600 transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <span>{item.name}</span>
                  {item.badge && (
                    <Badge variant="secondary" className="bg-red-100 text-red-700 text-xs">
                      {item.badge}
                    </Badge>
                  )}
                </Link>
              ))}

              <div>
                <button
                  onClick={() => setIsMoreMenuOpen(!isMoreMenuOpen)}
                  className="flex items-center justify-between w-full text-left text-gray-900 py-2"
                >
                  <span>Más</span>
                  <FiChevronDown className={`w-4 h-4 transition-transform ${isMoreMenuOpen ? 'rotate-180' : ''}`} />
                </button>
                
                {isMoreMenuOpen && (
                  <div className="mt-2 pl-4 space-y-1">
                    {moreMenuItems.map((item) => (
                      <Link
                        key={item.name}
                        href={item.href}
                        className="block text-gray-600 hover:text-pink-600 py-1 text-sm transition-colors"
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            </div>

            {/* Mobile Actions */}
            <div className="pt-3 border-t border-gray-200 space-y-2">
              <Link 
                href="/carrito" 
                className="flex items-center space-x-3 text-gray-700 hover:text-pink-600 py-2 transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <FiShoppingCart className="w-5 h-5" />
                <span>Carrito (2)</span>
              </Link>
              
              <Link 
                href="/reservar" 
                className="block w-full bg-pink-600 text-white text-center py-2 rounded hover:bg-pink-700 transition-colors text-sm"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Reservar Cita
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}