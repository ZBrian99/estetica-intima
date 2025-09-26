'use client';

import React, { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import { FiSearch, FiShoppingCart, FiMenu, FiX, FiChevronDown, FiUser, FiHeart, FiMapPin } from 'react-icons/fi';
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
    name: "Tratamientos Faciales",
    items: [
      { name: "Limpieza Profunda", href: "/tratamientos/limpieza-profunda", description: "Purifica y renueva tu piel", popular: true },
      { name: "Peeling Químico", href: "/tratamientos/peeling-quimico", description: "Renovación celular avanzada", premium: true },
      { name: "Hidratación Intensiva", href: "/tratamientos/hidratacion", description: "Nutrición profunda para tu piel" },
      { name: "Anti-aging", href: "/tratamientos/anti-aging", description: "Combate los signos del envejecimiento", premium: true }
    ]
  },
  {
    name: "Tratamientos Corporales",
    items: [
      { name: "Masajes Relajantes", href: "/tratamientos/masajes", description: "Libera tensiones y estrés", popular: true },
      { name: "Drenaje Linfático", href: "/tratamientos/drenaje", description: "Elimina toxinas naturalmente" },
      { name: "Exfoliación Corporal", href: "/tratamientos/exfoliacion", description: "Piel suave y renovada" },
      { name: "Tratamientos Reductores", href: "/tratamientos/reductores", description: "Moldea tu silueta", premium: true }
    ]
  },
  {
    name: "Medicina Estética",
    items: [
      { name: "Botox", href: "/tratamientos/botox", description: "Suaviza líneas de expresión", premium: true },
      { name: "Rellenos", href: "/tratamientos/rellenos", description: "Volumen y definición natural", premium: true },
      { name: "Mesoterapia", href: "/tratamientos/mesoterapia", description: "Revitalización profunda" },
      { name: "Hilos Tensores", href: "/tratamientos/hilos", description: "Lifting sin cirugía", new: true, premium: true }
    ]
  }
];

const mainNavItems: NavItem[] = [
  { name: "Promociones", href: "/promociones", badge: "30% OFF", popular: true },
  { name: "Nosotros", href: "/nosotros" },
  { name: "Contacto", href: "/contacto" }
];

const moreMenuItems: NavItem[] = [
  { name: "Blog", href: "/blog" },
  { name: "Testimonios", href: "/testimonios" },
  { name: "Galería", href: "/galeria" },
  { name: "Preguntas Frecuentes", href: "/faq" },
  { name: "Política de Privacidad", href: "/privacidad" },
  { name: "Términos y Condiciones", href: "/terminos" }
];

export default function NavbarV3_3_Modern() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isTreatmentsOpen, setIsTreatmentsOpen] = useState(false);
  const [isMoreMenuOpen, setIsMoreMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [isSearchFocused, setIsSearchFocused] = useState(false);
  const [hoveredCategory, setHoveredCategory] = useState<string | null>(null);
  
  const treatmentsRef = useRef<HTMLDivElement>(null);
  const moreMenuRef = useRef<HTMLDivElement>(null);
  const searchRef = useRef<HTMLInputElement>(null);

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

  // Handle search with animation
  const handleSearchFocus = () => {
    setIsSearchFocused(true);
  };

  const handleSearchBlur = () => {
    if (!searchQuery) {
      setIsSearchFocused(false);
    }
  };

  const clearSearch = () => {
    setSearchQuery('');
    setIsSearchFocused(false);
    searchRef.current?.blur();
  };

  return (
    <nav className="bg-white shadow-lg border-b border-gray-100 sticky top-0 z-50 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0 transition-transform duration-200 hover:scale-105">
            <Link href="/" className="text-2xl font-bold text-pink-600 hover:text-pink-700 transition-colors duration-200">
              EstéticaÍntima
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {/* Treatments Mega Menu */}
            <div className="relative" ref={treatmentsRef}>
              <button
                onClick={() => setIsTreatmentsOpen(!isTreatmentsOpen)}
                onMouseEnter={() => setIsTreatmentsOpen(true)}
                className="flex items-center space-x-1 text-gray-700 hover:text-pink-600 font-medium transition-all duration-200 group"
              >
                <span>Tratamientos</span>
                <FiChevronDown className={`w-4 h-4 transition-transform duration-200 ${isTreatmentsOpen ? 'rotate-180' : ''} group-hover:text-pink-600`} />
              </button>

              {/* Mega Menu Dropdown */}
              {isTreatmentsOpen && (
                <div 
                  className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 w-screen max-w-4xl bg-white rounded-xl shadow-2xl border border-gray-100 animate-in fade-in slide-in-from-top-2 duration-200"
                  onMouseLeave={() => setIsTreatmentsOpen(false)}
                >
                  <div className="p-8">
                    <div className="grid grid-cols-3 gap-8">
                      {treatmentCategories.map((category) => (
                        <div 
                          key={category.name} 
                          className="space-y-4 group"
                          onMouseEnter={() => setHoveredCategory(category.name)}
                          onMouseLeave={() => setHoveredCategory(null)}
                        >
                          <h3 className={`font-semibold text-gray-900 text-lg transition-colors duration-200 ${
                            hoveredCategory === category.name ? 'text-pink-600' : ''
                          }`}>
                            {category.name}
                          </h3>
                          <div className="space-y-3">
                            {category.items.map((item) => (
                              <Link
                                key={item.name}
                                href={item.href}
                                className="block group/item hover:bg-gray-50 p-3 rounded-lg transition-all duration-200 hover:shadow-sm"
                              >
                                <div className="flex items-center justify-between">
                                  <div>
                                    <div className="flex items-center space-x-2">
                                      <span className="font-medium text-gray-900 group-hover/item:text-pink-600 transition-colors duration-200">
                                        {item.name}
                                      </span>
                                      {'popular' in item && item.popular && (
                                        <Badge variant="secondary" className="bg-orange-100 text-orange-800 text-xs animate-pulse">
                                          Popular
                                        </Badge>
                                      )}
                                      {'new' in item && item.new && (
                                        <Badge variant="secondary" className="bg-green-100 text-green-800 text-xs">
                                          Nuevo
                                        </Badge>
                                      )}
                                      {'premium' in item && item.premium && (
                                        <Badge variant="secondary" className="bg-purple-100 text-purple-800 text-xs">
                                          Premium
                                        </Badge>
                                      )}
                                    </div>
                                    {item.description && (
                                      <p className="text-sm text-gray-500 mt-1 group-hover/item:text-gray-700 transition-colors duration-200">
                                        {item.description}
                                      </p>
                                    )}
                                  </div>
                                </div>
                              </Link>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                    
                    {/* CTA Section */}
                    <div className="mt-8 pt-6 border-t border-gray-100">
                      <div className="flex items-center justify-between">
                        <div>
                          <h4 className="font-semibold text-gray-900">¿No encontrás lo que buscás?</h4>
                          <p className="text-sm text-gray-500">Consultanos y te ayudamos a encontrar el tratamiento perfecto</p>
                        </div>
                        <Link 
                          href="/consulta" 
                          className="bg-pink-600 text-white px-6 py-2 rounded-lg hover:bg-pink-700 transition-all duration-200 hover:shadow-lg transform hover:scale-105"
                        >
                          Consulta Gratuita
                        </Link>
                      </div>
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
                className="relative text-gray-700 hover:text-pink-600 font-medium transition-all duration-200 group"
              >
                <span className="relative z-10">{item.name}</span>
                {'popular' in item && item.popular && (
                  <div className="absolute -top-2 -right-2">
                    <div className="w-2 h-2 bg-pink-500 rounded-full animate-ping"></div>
                    <div className="absolute top-0 right-0 w-2 h-2 bg-pink-500 rounded-full"></div>
                  </div>
                )}
                {item.badge && (
                  <Badge variant="secondary" className="ml-2 bg-red-100 text-red-800 text-xs animate-bounce">
                    {item.badge}
                  </Badge>
                )}
                <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-pink-600 transition-all duration-200 group-hover:w-full"></div>
              </Link>
            ))}

            {/* More Menu */}
            <div className="relative" ref={moreMenuRef}>
              <button
                onClick={() => setIsMoreMenuOpen(!isMoreMenuOpen)}
                className="flex items-center space-x-1 text-gray-700 hover:text-pink-600 font-medium transition-all duration-200 group"
              >
                <span>Más</span>
                <FiChevronDown className={`w-4 h-4 transition-transform duration-200 ${isMoreMenuOpen ? 'rotate-180' : ''} group-hover:text-pink-600`} />
              </button>

              {isMoreMenuOpen && (
                <div className="absolute top-full right-0 mt-2 w-64 bg-white rounded-xl shadow-xl border border-gray-100 animate-in fade-in slide-in-from-top-2 duration-200">
                  <div className="p-4 space-y-2">
                    {moreMenuItems.map((item) => (
                      <Link
                        key={item.name}
                        href={item.href}
                        className="block px-4 py-3 text-gray-700 hover:text-pink-600 hover:bg-gray-50 rounded-lg transition-all duration-200 group"
                      >
                        <span className="group-hover:translate-x-1 transition-transform duration-200 inline-block">
                          {item.name}
                        </span>
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Search, Cart, and CTA */}
          <div className="hidden lg:flex items-center space-x-4">
            {/* Enhanced Search */}
            <div className={`relative transition-all duration-300 ${isSearchFocused ? 'w-80' : 'w-64'}`}>
              <div className="relative">
                <FiSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                <input
                  ref={searchRef}
                  type="text"
                  placeholder="Buscar tratamientos..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  onFocus={handleSearchFocus}
                  onBlur={handleSearchBlur}
                  className={`w-full pl-10 pr-10 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent transition-all duration-200 ${
                    isSearchFocused ? 'shadow-lg' : 'hover:shadow-md'
                  }`}
                />
                {searchQuery && (
                  <button
                    onClick={clearSearch}
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors duration-200"
                  >
                    <FiX className="w-4 h-4" />
                  </button>
                )}
              </div>
              
              {/* Search suggestions animation */}
              {isSearchFocused && searchQuery && (
                <div className="absolute top-full left-0 right-0 mt-2 bg-white rounded-lg shadow-xl border border-gray-100 animate-in fade-in slide-in-from-top-2 duration-200">
                  <div className="p-4">
                    <p className="text-sm text-gray-500">Buscando "{searchQuery}"...</p>
                  </div>
                </div>
              )}
            </div>

            {/* Cart */}
            <Link 
              href="/carrito" 
              className="relative p-2 text-gray-700 hover:text-pink-600 transition-all duration-200 hover:bg-gray-50 rounded-lg group"
            >
              <FiShoppingCart className="w-5 h-5 group-hover:scale-110 transition-transform duration-200" />
              <span className="absolute -top-1 -right-1 bg-pink-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center animate-pulse">
                2
              </span>
            </Link>

            {/* CTA Button */}
            <Link 
              href="/reservar" 
              className="bg-gradient-to-r from-pink-600 to-pink-700 text-white px-6 py-2 rounded-lg hover:from-pink-700 hover:to-pink-800 transition-all duration-200 font-medium shadow-lg hover:shadow-xl transform hover:scale-105"
            >
              Reservar Cita
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 text-gray-700 hover:text-pink-600 transition-colors duration-200"
            >
              {isMobileMenuOpen ? <FiX className="w-6 h-6" /> : <FiMenu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-white border-t border-gray-100 animate-in slide-in-from-top duration-200">
          <div className="px-4 py-6 space-y-6">
            {/* Mobile Search */}
            <div className="relative">
              <FiSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
              <input
                type="text"
                placeholder="Buscar tratamientos..."
                className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent"
              />
            </div>

            {/* Mobile Navigation */}
            <div className="space-y-4">
              <div>
                <button
                  onClick={() => setIsTreatmentsOpen(!isTreatmentsOpen)}
                  className="flex items-center justify-between w-full text-left text-gray-900 font-medium py-2"
                >
                  <span>Tratamientos</span>
                  <FiChevronDown className={`w-4 h-4 transition-transform duration-200 ${isTreatmentsOpen ? 'rotate-180' : ''}`} />
                </button>
                
                {isTreatmentsOpen && (
                  <div className="mt-3 pl-4 space-y-3 animate-in slide-in-from-top duration-200">
                    {treatmentCategories.map((category) => (
                      <div key={category.name} className="space-y-2">
                        <h4 className="font-medium text-gray-900 text-sm">{category.name}</h4>
                        <div className="pl-3 space-y-2">
                          {category.items.map((item) => (
                            <Link
                              key={item.name}
                              href={item.href}
                              className="block text-gray-600 hover:text-pink-600 py-1 transition-colors duration-200"
                              onClick={() => setIsMobileMenuOpen(false)}
                            >
                              <div className="flex items-center space-x-2">
                                <span>{item.name}</span>
                                {'popular' in item && item.popular && (
                                  <Badge variant="secondary" className="bg-orange-100 text-orange-800 text-xs">
                                    Popular
                                  </Badge>
                                )}
                                {'new' in item && item.new && (
                                  <Badge variant="secondary" className="bg-green-100 text-green-800 text-xs">
                                    Nuevo
                                  </Badge>
                                )}
                                {'premium' in item && item.premium && (
                                  <Badge variant="secondary" className="bg-purple-100 text-purple-800 text-xs">
                                    Premium
                                  </Badge>
                                )}
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
                  className="flex items-center justify-between text-gray-900 font-medium py-2 hover:text-pink-600 transition-colors duration-200"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <span>{item.name}</span>
                  {item.badge && (
                    <Badge variant="secondary" className="bg-red-100 text-red-800 text-xs">
                      {item.badge}
                    </Badge>
                  )}
                </Link>
              ))}

              <div>
                <button
                  onClick={() => setIsMoreMenuOpen(!isMoreMenuOpen)}
                  className="flex items-center justify-between w-full text-left text-gray-900 font-medium py-2"
                >
                  <span>Más</span>
                  <FiChevronDown className={`w-4 h-4 transition-transform duration-200 ${isMoreMenuOpen ? 'rotate-180' : ''}`} />
                </button>
                
                {isMoreMenuOpen && (
                  <div className="mt-3 pl-4 space-y-2 animate-in slide-in-from-top duration-200">
                    {moreMenuItems.map((item) => (
                      <Link
                        key={item.name}
                        href={item.href}
                        className="block text-gray-600 hover:text-pink-600 py-1 transition-colors duration-200"
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
            <div className="pt-4 border-t border-gray-100 space-y-3">
              <Link 
                href="/carrito" 
                className="flex items-center space-x-3 text-gray-700 hover:text-pink-600 py-2 transition-colors duration-200"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <FiShoppingCart className="w-5 h-5" />
                <span>Carrito (2)</span>
              </Link>
              
              <Link 
                href="/reservar" 
                className="block w-full bg-pink-600 text-white text-center py-3 rounded-lg hover:bg-pink-700 transition-colors duration-200 font-medium"
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