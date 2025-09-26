'use client';

import React, { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import { FiSearch, FiShoppingCart, FiMenu, FiX, FiChevronDown, FiStar, FiAward, FiGift } from 'react-icons/fi';
import { Badge } from '@/components/ui/badge';

interface NavItem {
  name: string;
  href: string;
  description?: string;
  badge?: string;
  popular?: boolean;
  new?: boolean;
  premium?: boolean;
  price?: string;
  subcategory?: string;
}

interface TreatmentCategory {
  name: string;
  description: string;
  items: NavItem[];
  featured?: boolean;
}

const treatmentCategories: TreatmentCategory[] = [
  {
    name: "Tratamientos Signature",
    description: "Nuestros tratamientos exclusivos más solicitados",
    featured: true,
    items: [
      { 
        name: "Facial Diamante", 
        href: "/tratamientos/facial-diamante", 
        description: "Tratamiento premium con microdermoabrasión", 
        premium: true,
        price: "$15.000",
        popular: true
      },
      { 
        name: "Ritual de Belleza Completo", 
        href: "/tratamientos/ritual-completo", 
        description: "Experiencia de lujo de 3 horas", 
        premium: true,
        price: "$25.000"
      },
      { 
        name: "Lifting Japonés", 
        href: "/tratamientos/lifting-japones", 
        description: "Técnica ancestral de rejuvenecimiento", 
        new: true,
        premium: true,
        price: "$18.000"
      }
    ]
  },
  {
    name: "Tratamientos Faciales",
    description: "Cuidado especializado para tu rostro",
    items: [
      { 
        name: "Limpieza Profunda Premium", 
        href: "/tratamientos/limpieza-premium", 
        description: "Con extracción y mascarilla personalizada", 
        popular: true,
        price: "$8.000",
        subcategory: "Purificación"
      },
      { 
        name: "Peeling de Ácido Hialurónico", 
        href: "/tratamientos/peeling-hialuronico", 
        description: "Renovación celular con hidratación profunda", 
        premium: true,
        price: "$12.000",
        subcategory: "Renovación"
      },
      { 
        name: "Radiofrecuencia Facial", 
        href: "/tratamientos/radiofrecuencia-facial", 
        description: "Reafirmación y lifting no invasivo", 
        price: "$10.000",
        subcategory: "Anti-aging"
      }
    ]
  },
  {
    name: "Medicina Estética",
    description: "Procedimientos médicos especializados",
    items: [
      { 
        name: "Botox Premium", 
        href: "/tratamientos/botox-premium", 
        description: "Con toxina botulínica de última generación", 
        premium: true,
        price: "Desde $20.000",
        subcategory: "Inyectables"
      },
      { 
        name: "Rellenos con Ácido Hialurónico", 
        href: "/tratamientos/rellenos-premium", 
        description: "Volumen natural y definición perfecta", 
        premium: true,
        price: "Desde $18.000",
        subcategory: "Inyectables"
      },
      { 
        name: "Hilos PDO Gold", 
        href: "/tratamientos/hilos-pdo", 
        description: "Lifting inmediato con hilos de oro", 
        new: true,
        premium: true,
        price: "Desde $30.000",
        subcategory: "Lifting"
      }
    ]
  }
];

const mainNavItems: NavItem[] = [
  { name: "Promociones Exclusivas", href: "/promociones", badge: "Hasta 40% OFF", popular: true },
  { name: "Nosotros", href: "/nosotros" },
  { name: "Contacto VIP", href: "/contacto" }
];

const expandedMenuItems = {
  "Servicios Adicionales": [
    { name: "Consulta Personalizada", href: "/consulta", description: "Evaluación gratuita con especialista" },
    { name: "Planes de Tratamiento", href: "/planes", description: "Programas personalizados" },
    { name: "Membresía VIP", href: "/membresia", description: "Beneficios exclusivos", new: true }
  ],
  "Experiencia": [
    { name: "Galería de Resultados", href: "/galeria", description: "Antes y después reales" },
    { name: "Testimonios", href: "/testimonios", description: "Historias de nuestras clientas" },
    { name: "Blog de Belleza", href: "/blog", description: "Tips y tendencias" }
  ],
  "Información": [
    { name: "Preguntas Frecuentes", href: "/faq", description: "Resolvé tus dudas" },
    { name: "Política de Privacidad", href: "/privacidad", description: "Protección de datos" },
    { name: "Términos y Condiciones", href: "/terminos", description: "Condiciones de servicio" }
  ]
};

export default function NavbarV3_4_Boutique() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isTreatmentsOpen, setIsTreatmentsOpen] = useState(false);
  const [isMoreMenuOpen, setIsMoreMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState<string | null>(null);
  
  const treatmentsRef = useRef<HTMLDivElement>(null);
  const moreMenuRef = useRef<HTMLDivElement>(null);

  // Close dropdowns when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (treatmentsRef.current && !treatmentsRef.current.contains(event.target as Node)) {
        setIsTreatmentsOpen(false);
        setActiveCategory(null);
      }
      if (moreMenuRef.current && !moreMenuRef.current.contains(event.target as Node)) {
        setIsMoreMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <nav className="bg-gradient-to-r from-rose-50 to-pink-50 shadow-xl border-b border-rose-100 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-18">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center space-x-3 group">
              <div className="w-10 h-10 bg-gradient-to-br from-pink-500 to-rose-600 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <FiStar className="w-5 h-5 text-white" />
              </div>
              <div>
                <div className="text-2xl font-bold bg-gradient-to-r from-pink-600 to-rose-600 bg-clip-text text-transparent">
                  EstéticaÍntima
                </div>
                <div className="text-xs text-gray-500 font-medium tracking-wide">
                  BOUTIQUE DE BELLEZA
                </div>
              </div>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {/* Treatments Boutique Menu */}
            <div className="relative" ref={treatmentsRef}>
              <button
                onClick={() => setIsTreatmentsOpen(!isTreatmentsOpen)}
                onMouseEnter={() => setIsTreatmentsOpen(true)}
                className="flex items-center space-x-2 text-gray-700 hover:text-pink-600 font-semibold transition-all duration-300 group px-4 py-2 rounded-full hover:bg-white/50"
              >
                <FiAward className="w-4 h-4" />
                <span>Tratamientos</span>
                <FiChevronDown className={`w-4 h-4 transition-transform duration-300 ${isTreatmentsOpen ? 'rotate-180' : ''}`} />
              </button>

              {/* Boutique Mega Menu */}
              {isTreatmentsOpen && (
                <div 
                  className="absolute top-full left-1/2 transform -translate-x-1/2 mt-4 w-screen max-w-6xl bg-white rounded-2xl shadow-2xl border border-rose-100 overflow-hidden"
                  onMouseLeave={() => {
                    setIsTreatmentsOpen(false);
                    setActiveCategory(null);
                  }}
                >
                  <div className="flex">
                    {/* Categories Sidebar */}
                    <div className="w-1/3 bg-gradient-to-b from-rose-50 to-pink-50 p-6 border-r border-rose-100">
                      <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center">
                        <FiStar className="w-5 h-5 text-pink-500 mr-2" />
                        Nuestros Servicios
                      </h3>
                      <div className="space-y-2">
                        {treatmentCategories.map((category) => (
                          <button
                            key={category.name}
                            onMouseEnter={() => setActiveCategory(category.name)}
                            className={`w-full text-left p-4 rounded-xl transition-all duration-300 group ${
                              activeCategory === category.name 
                                ? 'bg-white shadow-md border border-pink-200' 
                                : 'hover:bg-white/50'
                            }`}
                          >
                            <div className="flex items-center justify-between">
                              <div>
                                <div className={`font-semibold transition-colors duration-300 ${
                                  activeCategory === category.name ? 'text-pink-600' : 'text-gray-900'
                                }`}>
                                  {category.name}
                                  {category.featured && (
                                    <FiAward className="inline w-4 h-4 ml-2 text-gold-500" />
                                  )}
                                </div>
                                <p className="text-sm text-gray-500 mt-1">{category.description}</p>
                              </div>
                              <FiChevronDown className={`w-4 h-4 text-gray-400 transition-transform duration-300 ${
                                activeCategory === category.name ? 'rotate-90' : ''
                              }`} />
                            </div>
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* Services Content */}
                    <div className="w-2/3 p-8">
                      {activeCategory ? (
                        <div>
                          {treatmentCategories
                            .filter(cat => cat.name === activeCategory)
                            .map((category) => (
                              <div key={category.name}>
                                <div className="flex items-center mb-6">
                                  <h4 className="text-xl font-bold text-gray-900">{category.name}</h4>
                                  {category.featured && (
                                    <Badge className="ml-3 bg-gradient-to-r from-yellow-400 to-orange-500 text-white border-0">
                                      <FiStar className="w-3 h-3 mr-1" />
                                      Destacado
                                    </Badge>
                                  )}
                                </div>
                                <div className="grid grid-cols-1 gap-4">
                                  {category.items.map((item) => (
                                    <Link
                                      key={item.name}
                                      href={item.href}
                                      className="group p-4 rounded-xl hover:bg-rose-50 transition-all duration-300 border border-transparent hover:border-pink-200"
                                    >
                                      <div className="flex justify-between items-start">
                                        <div className="flex-1">
                                          <div className="flex items-center space-x-3 mb-2">
                                            <h5 className="font-semibold text-gray-900 group-hover:text-pink-600 transition-colors duration-300">
                                              {item.name}
                                            </h5>
                                            <div className="flex space-x-1">
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
                                          </div>
                                          {item.description && (
                                            <p className="text-sm text-gray-600 mb-2">{item.description}</p>
                                          )}
                                          {'subcategory' in item && item.subcategory && (
                                            <p className="text-xs text-pink-600 font-medium">{item.subcategory}</p>
                                          )}
                                        </div>
                                        {'price' in item && item.price && (
                                          <div className="text-right">
                                            <p className="text-lg font-bold text-pink-600">{item.price}</p>
                                          </div>
                                        )}
                                      </div>
                                    </Link>
                                  ))}
                                </div>
                              </div>
                            ))
                          }
                        </div>
                      ) : (
                        <div className="text-center py-12">
                          <FiStar className="w-16 h-16 text-pink-300 mx-auto mb-4" />
                          <h4 className="text-xl font-semibold text-gray-900 mb-2">Seleccioná una categoría</h4>
                          <p className="text-gray-500">Explorá nuestros tratamientos exclusivos</p>
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Bottom CTA */}
                  <div className="bg-gradient-to-r from-pink-600 to-rose-600 p-6">
                    <div className="flex items-center justify-between text-white">
                      <div>
                        <h4 className="font-bold text-lg">¿Necesitás asesoramiento personalizado?</h4>
                        <p className="text-pink-100">Nuestras especialistas te ayudan a elegir el tratamiento perfecto</p>
                      </div>
                      <Link 
                        href="/consulta-vip" 
                        className="bg-white text-pink-600 px-8 py-3 rounded-full hover:bg-pink-50 transition-all duration-300 font-semibold shadow-lg hover:shadow-xl transform hover:scale-105"
                      >
                        Consulta VIP Gratuita
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
                className="relative text-gray-700 hover:text-pink-600 font-semibold transition-all duration-300 group px-4 py-2 rounded-full hover:bg-white/50"
              >
                <span className="flex items-center space-x-2">
                  {item.name === "Promociones Exclusivas" && <FiGift className="w-4 h-4" />}
                  <span>{item.name}</span>
                </span>
                {'popular' in item && item.popular && (
                  <div className="absolute -top-1 -right-1">
                    <div className="w-3 h-3 bg-red-500 rounded-full animate-pulse"></div>
                  </div>
                )}
                {item.badge && (
                  <Badge className="ml-2 bg-gradient-to-r from-red-500 to-pink-500 text-white border-0 text-xs animate-pulse">
                    {item.badge}
                  </Badge>
                )}
              </Link>
            ))}

            {/* Expandable More Menu */}
            <div className="relative" ref={moreMenuRef}>
              <button
                onClick={() => setIsMoreMenuOpen(!isMoreMenuOpen)}
                className="flex items-center space-x-2 text-gray-700 hover:text-pink-600 font-semibold transition-all duration-300 group px-4 py-2 rounded-full hover:bg-white/50"
              >
                <span>Más</span>
                <FiChevronDown className={`w-4 h-4 transition-transform duration-300 ${isMoreMenuOpen ? 'rotate-180' : ''}`} />
              </button>

              {isMoreMenuOpen && (
                <div className="absolute top-full right-0 mt-4 w-96 bg-white rounded-2xl shadow-2xl border border-rose-100 overflow-hidden">
                  <div className="p-6">
                    {Object.entries(expandedMenuItems).map(([section, items]) => (
                      <div key={section} className="mb-6 last:mb-0">
                        <h4 className="font-bold text-gray-900 mb-3 text-sm uppercase tracking-wide">
                          {section}
                        </h4>
                        <div className="space-y-2">
                          {items.map((item) => (
                            <Link
                              key={item.name}
                              href={item.href}
                              className="block p-3 rounded-xl hover:bg-rose-50 transition-all duration-300 group border border-transparent hover:border-pink-200"
                            >
                              <div className="flex items-center justify-between">
                                <div>
                                  <div className="flex items-center space-x-2">
                                    <span className="font-medium text-gray-900 group-hover:text-pink-600 transition-colors duration-300">
                                      {item.name}
                                    </span>
                                    {'new' in item && item.new && (
                                      <Badge variant="secondary" className="bg-green-100 text-green-800 text-xs">
                                        Nuevo
                                      </Badge>
                                    )}
                                  </div>
                                  {item.description && (
                                    <p className="text-sm text-gray-500 mt-1">{item.description}</p>
                                  )}
                                </div>
                                <FiChevronDown className="w-4 h-4 text-gray-400 group-hover:text-pink-500 transition-all duration-300 transform group-hover:translate-x-1 rotate-[-90deg]" />
                              </div>
                            </Link>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Search, Cart, and CTA */}
          <div className="hidden lg:flex items-center space-x-4">
            {/* Boutique Search */}
            <div className="relative">
              <div className="relative">
                <FiSearch className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                <input
                  type="text"
                  placeholder="Buscar tratamientos exclusivos..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-72 pl-12 pr-4 py-3 border border-rose-200 rounded-full focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent transition-all duration-300 bg-white/80 backdrop-blur-sm hover:bg-white"
                />
              </div>
            </div>

            {/* Boutique Cart */}
            <Link 
              href="/carrito" 
              className="relative p-3 text-gray-700 hover:text-pink-600 transition-all duration-300 hover:bg-white/50 rounded-full group"
            >
              <FiShoppingCart className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
              <span className="absolute -top-1 -right-1 bg-gradient-to-r from-pink-500 to-rose-500 text-white text-xs rounded-full w-6 h-6 flex items-center justify-center font-bold shadow-lg">
                2
              </span>
            </Link>

            {/* Premium CTA Button */}
            <Link 
              href="/reservar-vip" 
              className="bg-gradient-to-r from-pink-600 to-rose-600 text-white px-8 py-3 rounded-full hover:from-pink-700 hover:to-rose-700 transition-all duration-300 font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 flex items-center space-x-2"
            >
              <FiStar className="w-4 h-4" />
              <span>Reservar VIP</span>
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 text-gray-700 hover:text-pink-600 transition-colors duration-300 rounded-full hover:bg-white/50"
            >
              {isMobileMenuOpen ? <FiX className="w-6 h-6" /> : <FiMenu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-white border-t border-rose-100">
          <div className="px-4 py-6 space-y-6">
            {/* Mobile Search */}
            <div className="relative">
              <FiSearch className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
              <input
                type="text"
                placeholder="Buscar tratamientos..."
                className="w-full pl-12 pr-4 py-3 border border-rose-200 rounded-full focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent"
              />
            </div>

            {/* Mobile Navigation */}
            <div className="space-y-4">
              <div>
                <button
                  onClick={() => setIsTreatmentsOpen(!isTreatmentsOpen)}
                  className="flex items-center justify-between w-full text-left text-gray-900 font-semibold py-3 border-b border-rose-100"
                >
                  <span className="flex items-center space-x-2">
                    <FiAward className="w-4 h-4" />
                    <span>Tratamientos</span>
                  </span>
                  <FiChevronDown className={`w-4 h-4 transition-transform duration-300 ${isTreatmentsOpen ? 'rotate-180' : ''}`} />
                </button>
                
                {isTreatmentsOpen && (
                  <div className="mt-4 pl-6 space-y-4">
                    {treatmentCategories.map((category) => (
                      <div key={category.name} className="space-y-3">
                        <h4 className="font-semibold text-gray-900 text-sm flex items-center">
                          {category.name}
                          {category.featured && <FiStar className="w-3 h-3 ml-2 text-yellow-500" />}
                        </h4>
                        <div className="pl-4 space-y-2">
                          {category.items.map((item) => (
                            <Link
                              key={item.name}
                              href={item.href}
                              className="block text-gray-600 hover:text-pink-600 py-2 transition-colors duration-300"
                              onClick={() => setIsMobileMenuOpen(false)}
                            >
                              <div className="flex items-center justify-between">
                                <div>
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
                                </div>
                                {'price' in item && item.price && (
                                  <span className="text-sm font-semibold text-pink-600">{item.price}</span>
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
                  className="flex items-center justify-between text-gray-900 font-semibold py-3 border-b border-rose-100 hover:text-pink-600 transition-colors duration-300"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <span className="flex items-center space-x-2">
                    {item.name === "Promociones Exclusivas" && <FiGift className="w-4 h-4" />}
                    <span>{item.name}</span>
                  </span>
                  {item.badge && (
                    <Badge className="bg-gradient-to-r from-red-500 to-pink-500 text-white border-0 text-xs">
                      {item.badge}
                    </Badge>
                  )}
                </Link>
              ))}

              <div>
                <button
                  onClick={() => setIsMoreMenuOpen(!isMoreMenuOpen)}
                  className="flex items-center justify-between w-full text-left text-gray-900 font-semibold py-3 border-b border-rose-100"
                >
                  <span>Más</span>
                  <FiChevronDown className={`w-4 h-4 transition-transform duration-300 ${isMoreMenuOpen ? 'rotate-180' : ''}`} />
                </button>
                
                {isMoreMenuOpen && (
                  <div className="mt-4 pl-6 space-y-4">
                    {Object.entries(expandedMenuItems).map(([section, items]) => (
                      <div key={section} className="space-y-2">
                        <h4 className="font-semibold text-gray-900 text-sm uppercase tracking-wide">
                          {section}
                        </h4>
                        <div className="pl-4 space-y-2">
                          {items.map((item) => (
                            <Link
                              key={item.name}
                              href={item.href}
                              className="block text-gray-600 hover:text-pink-600 py-1 transition-colors duration-300"
                              onClick={() => setIsMobileMenuOpen(false)}
                            >
                              <div className="flex items-center space-x-2">
                                <span>{item.name}</span>
                                {'new' in item && item.new && (
                                  <Badge variant="secondary" className="bg-green-100 text-green-800 text-xs">
                                    Nuevo
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
            </div>

            {/* Mobile Actions */}
            <div className="pt-4 border-t border-rose-100 space-y-3">
              <Link 
                href="/carrito" 
                className="flex items-center space-x-3 text-gray-700 hover:text-pink-600 py-3 transition-colors duration-300"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <FiShoppingCart className="w-5 h-5" />
                <span>Carrito VIP (2)</span>
              </Link>
              
              <Link 
                href="/reservar-vip" 
                className="block w-full bg-gradient-to-r from-pink-600 to-rose-600 text-white text-center py-4 rounded-full hover:from-pink-700 hover:to-rose-700 transition-all duration-300 font-semibold shadow-lg"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <div className="flex items-center justify-center space-x-2">
                  <FiStar className="w-4 h-4" />
                  <span>Reservar VIP</span>
                </div>
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}