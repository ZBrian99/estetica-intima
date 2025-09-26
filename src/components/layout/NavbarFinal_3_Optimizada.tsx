'use client'

import { useState } from 'react'
import Link from 'next/link'
import { FiSearch, FiShoppingCart, FiMenu, FiX, FiChevronDown, FiPhone, FiCalendar, FiStar, FiTrendingUp, FiAward } from 'react-icons/fi'

interface TreatmentItem {
  name: string
  href: string
  badge?: 'popular' | 'nuevo' | 'premium'
  description?: string
}

interface TreatmentCategory {
  name: string
  items: TreatmentItem[]
  featured?: boolean
  icon?: string
}

interface NavItem {
  name: string
  href: string
}

const featuredTreatments: TreatmentItem[] = [
  { 
    name: 'Depilación Definitiva Femenina', 
    href: '/servicios/depilacion-femenina', 
    badge: 'popular',
    description: 'La más solicitada por nuestras clientas'
  },
  { 
    name: 'Maderoterapia Completa', 
    href: '/servicios/maderoterapia', 
    badge: 'popular',
    description: 'Moldea tu figura naturalmente'
  },
  { 
    name: 'Alpha Synergy Facial', 
    href: '/servicios/alpha-synergy-facial', 
    badge: 'premium',
    description: 'Tecnología de última generación'
  }
]

const treatmentCategories: TreatmentCategory[] = [
  {
    name: 'Depilación',
    icon: '✨',
    featured: true,
    items: [
      { name: 'Femenina', href: '/servicios/depilacion-femenina' },
      { name: 'Masculina', href: '/servicios/depilacion-masculina' },
      { name: 'Zonas Individuales', href: '/servicios/zonas-individuales' },
      { name: 'Combos', href: '/servicios/combos' }
    ]
  },
  {
    name: 'Corporales',
    icon: '💆‍♀️',
    featured: true,
    items: [
      { name: 'Maderoterapia', href: '/servicios/maderoterapia', badge: 'popular' },
      { name: 'Mio Up', href: '/servicios/mio-up', badge: 'nuevo' },
      { name: 'Alpha Synergy', href: '/servicios/alpha-synergy' },
      { name: 'Vacuum Therapy', href: '/servicios/vacuum-therapy' }
    ]
  },
  {
    name: 'Faciales',
    icon: '🌟',
    featured: true,
    items: [
      { name: 'Limpieza Profunda', href: '/servicios/limpieza-facial' },
      { name: 'Peeling Químico', href: '/servicios/peeling-quimico' },
      { name: 'Hollywood Peel', href: '/servicios/hollywood-peel', badge: 'nuevo' },
      { name: 'Alpha Synergy Facial', href: '/servicios/alpha-synergy-facial' }
    ]
  },
  {
    name: 'Cejas & Pestañas',
    icon: '👁️',
    items: [
      { name: 'Microblading', href: '/servicios/microblading' },
      { name: 'Dermopigmentación', href: '/servicios/dermopigmentacion' },
      { name: 'Lifting Pestañas', href: '/servicios/lifting-pestanas' },
      { name: 'Extensiones', href: '/servicios/extensiones' }
    ]
  },
  {
    name: 'Uñas & Pies',
    icon: '💅',
    items: [
      { name: 'Spa de Pies', href: '/servicios/spa-pies' },
      { name: 'Pedicuría', href: '/servicios/pedicuria' },
      { name: 'Esmaltado Semi', href: '/servicios/esmaltado-semipermanente' },
      { name: 'Manicuría', href: '/servicios/manicuria' }
    ]
  },
  {
    name: 'Masajes',
    icon: '🤲',
    items: [
      { name: 'Descontracturante', href: '/servicios/masaje-descontracturante' },
      { name: 'Deportivo', href: '/servicios/masaje-deportivo' },
      { name: 'Piedras Calientes', href: '/servicios/piedras-calientes' },
      { name: 'Drenaje Linfático', href: '/servicios/drenaje-linfatico' }
    ]
  }
]

const navItems: NavItem[] = [
  { name: 'Promociones', href: '/promociones' },
  { name: 'Gift Cards', href: '/gift-cards' },
  { name: 'Eventos', href: '/eventos' },
  { name: 'Cursos', href: '/cursos' }
]

const getBadgeStyles = (badge?: string) => {
  switch (badge) {
    case 'popular':
      return 'bg-pink-100 text-pink-700 text-xs px-2 py-0.5 rounded-full'
    case 'nuevo':
      return 'bg-green-100 text-green-700 text-xs px-2 py-0.5 rounded-full'
    case 'premium':
      return 'bg-purple-100 text-purple-700 text-xs px-2 py-0.5 rounded-full'
    default:
      return ''
  }
}

export default function NavbarFinal_3_Optimizada() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isTreatmentsOpen, setIsTreatmentsOpen] = useState(true)
  const [isMoreOpen, setIsMoreOpen] = useState(false)

  return (
    <nav className="bg-white shadow-lg relative z-50">
      {/* Main Navigation */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center">
              <img
                className="h-10 w-auto"
                src="/logo-text-sin-fondo.webp"
                alt="Estética Íntima"
              />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {/* Tratamientos Dropdown */}
            <div className="relative group">
              <button
                className="flex items-center space-x-1 text-gray-700 hover:text-pink-600 px-3 py-2 text-sm font-medium transition-colors"
                onMouseEnter={() => setIsTreatmentsOpen(true)}
              >
                <span>Tratamientos</span>
                <FiChevronDown className="w-4 h-4" />
              </button>

              {/* Mega Menu - Estructura Híbrida Optimizada */}
              {isTreatmentsOpen && (
                <div
                  className="absolute left-0 top-full w-screen max-w-6xl bg-white shadow-xl border-t-2 border-pink-500 rounded-b-lg"
                  onMouseEnter={() => setIsTreatmentsOpen(true)}
                >
                  <div className="p-8">
                    {/* Sección de Destacados */}
                    <div className="mb-8">
                      <div className="flex items-center justify-between mb-4">
                        <h3 className="text-lg font-semibold text-gray-900 flex items-center">
                          <FiTrendingUp className="w-5 h-5 text-pink-600 mr-2" />
                          Tratamientos Más Solicitados
                        </h3>
                        <div className="flex items-center text-sm text-gray-500">
                          <FiStar className="w-4 h-4 text-yellow-500 mr-1" />
                          Recomendados por especialistas
                        </div>
                      </div>
                      <div className="grid grid-cols-3 gap-4">
                        {featuredTreatments.map((treatment, index) => (
                          <Link
                            key={index}
                            href={treatment.href}
                            className="group p-4 bg-gradient-to-br from-pink-50 to-purple-50 rounded-lg border border-pink-200 hover:shadow-md transition-all duration-200"
                          >
                            <div className="flex items-start justify-between mb-2">
                              <h4 className="font-medium text-gray-900 group-hover:text-pink-600 transition-colors">
                                {treatment.name}
                              </h4>
                              {treatment.badge && (
                                <span className={getBadgeStyles(treatment.badge)}>
                                  {treatment.badge === 'popular' && '🔥'}
                                  {treatment.badge === 'nuevo' && '✨'}
                                  {treatment.badge === 'premium' && '👑'}
                                </span>
                              )}
                            </div>
                            <p className="text-sm text-gray-600">{treatment.description}</p>
                          </Link>
                        ))}
                      </div>
                    </div>

                    {/* Sección de Categorías - Híbrido Columnas + Cuadrícula */}
                    <div className="border-t border-gray-200 pt-6">
                      <h3 className="text-sm font-semibold text-gray-900 mb-4 uppercase tracking-wide">
                        Todas las Categorías
                      </h3>
                      
                      {/* Primera fila: Categorías principales (3 columnas) */}
                      <div className="grid grid-cols-3 gap-6 mb-6">
                        {treatmentCategories.filter(cat => cat.featured).map((category, index) => (
                          <div key={index} className="space-y-3">
                            <h4 className="font-semibold text-pink-600 text-sm flex items-center">
                              <span className="mr-2">{category.icon}</span>
                              {category.name}
                            </h4>
                            <ul className="space-y-2">
                              {category.items.map((item, itemIndex) => (
                                <li key={itemIndex}>
                                  <Link
                                    href={item.href}
                                    className="flex items-center justify-between text-gray-600 hover:text-pink-600 text-sm transition-colors py-1 group"
                                  >
                                    <span className="group-hover:translate-x-1 transition-transform">
                                      {item.name}
                                    </span>
                                    {item.badge && (
                                      <span className={getBadgeStyles(item.badge)}>
                                        {item.badge === 'popular' && '🔥'}
                                        {item.badge === 'nuevo' && '✨'}
                                        {item.badge === 'premium' && '👑'}
                                      </span>
                                    )}
                                  </Link>
                                </li>
                              ))}
                            </ul>
                          </div>
                        ))}
                      </div>

                      {/* Segunda fila: Categorías secundarias (cuadrícula compacta) */}
                      <div className="grid grid-cols-3 gap-4">
                        {treatmentCategories.filter(cat => !cat.featured).map((category, index) => (
                          <div key={index} className="p-3 bg-gray-50 rounded-lg">
                            <h4 className="font-medium text-gray-900 text-sm mb-2 flex items-center">
                              <span className="mr-2">{category.icon}</span>
                              {category.name}
                            </h4>
                            <div className="grid grid-cols-2 gap-1">
                              {category.items.slice(0, 4).map((item, itemIndex) => (
                                <Link
                                  key={itemIndex}
                                  href={item.href}
                                  className="text-xs text-gray-600 hover:text-pink-600 transition-colors py-1"
                                >
                                  {item.name}
                                </Link>
                              ))}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* CTA Section Mejorada */}
                    <div className="mt-8 pt-6 border-t border-gray-200 bg-gradient-to-r from-pink-50 to-purple-50 rounded-lg p-6">
                      <div className="flex justify-between items-center">
                        <div className="flex items-center space-x-6">
                          <div>
                            <h4 className="font-semibold text-gray-900 mb-1 flex items-center">
                              <FiAward className="w-4 h-4 text-pink-600 mr-2" />
                              ¿Necesitás asesoramiento personalizado?
                            </h4>
                            <p className="text-sm text-gray-600">Nuestras especialistas certificadas te guían</p>
                          </div>
                          <div className="flex items-center space-x-2">
                            <div className="flex items-center space-x-1 text-yellow-500">
                              <FiStar className="w-4 h-4 fill-current" />
                              <FiStar className="w-4 h-4 fill-current" />
                              <FiStar className="w-4 h-4 fill-current" />
                              <FiStar className="w-4 h-4 fill-current" />
                              <FiStar className="w-4 h-4 fill-current" />
                            </div>
                            <span className="text-sm text-gray-600">4.9/5 • +500 reseñas</span>
                          </div>
                        </div>
                        <div className="flex space-x-3">
                          <Link
                            href="/servicios"
                            className="px-4 py-2 text-sm font-medium text-pink-600 border border-pink-600 rounded-md hover:bg-pink-50 transition-colors"
                          >
                            Ver Todos
                          </Link>
                          <Link
                            href="/contacto"
                            className="px-4 py-2 text-sm font-medium text-white bg-pink-600 rounded-md hover:bg-pink-700 transition-colors shadow-md"
                          >
                            Consulta Gratis
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Other Nav Items */}
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-gray-700 hover:text-pink-600 px-3 py-2 text-sm font-medium transition-colors"
              >
                {item.name}
              </Link>
            ))}

            {/* Más Dropdown */}
            <div className="relative group">
              <button
                className="flex items-center space-x-1 text-gray-700 hover:text-pink-600 px-3 py-2 text-sm font-medium transition-colors"
                onMouseEnter={() => setIsMoreOpen(true)}
                onMouseLeave={() => setIsMoreOpen(false)}
              >
                <span>Más</span>
                <FiChevronDown className="w-4 h-4" />
              </button>

              {isMoreOpen && (
                <div
                  className="absolute right-0 top-full w-48 bg-white shadow-lg border border-gray-200 rounded-md py-2"
                  onMouseEnter={() => setIsMoreOpen(true)}
                  onMouseLeave={() => setIsMoreOpen(false)}
                >
                  <Link href="/nosotras" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-pink-600">
                    Nosotras
                  </Link>
                  <Link href="/blog" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-pink-600">
                    Blog
                  </Link>
                  <Link href="/testimonios" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-pink-600">
                    Testimonios
                  </Link>
                  <Link href="/preguntas-frecuentes" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-pink-600">
                    Preguntas Frecuentes
                  </Link>
                  <Link href="/contacto" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-pink-600">
                    Contacto
                  </Link>
                </div>
              )}
            </div>
          </div>

          {/* Right Side Actions */}
          <div className="flex items-center space-x-4">
            {/* Search */}
            <div className="hidden md:block relative">
              <input
                type="text"
                placeholder="Buscar tratamientos..."
                className="w-64 pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent text-sm"
              />
              <FiSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
            </div>

            {/* Cart */}
            <button className="p-2 text-gray-700 hover:text-pink-600 transition-colors">
              <FiShoppingCart className="w-5 h-5" />
            </button>

            {/* CTA Button */}
            <Link
              href="/reservar"
              className="hidden md:flex items-center space-x-2 bg-pink-600 text-white px-4 py-2 rounded-md hover:bg-pink-700 transition-colors text-sm font-medium shadow-md"
            >
              <FiCalendar className="w-4 h-4" />
              <span>Reservar</span>
            </Link>

            {/* Mobile menu button */}
            <button
              className="lg:hidden p-2 text-gray-700 hover:text-pink-600 transition-colors"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
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
              <input
                type="text"
                placeholder="Buscar tratamientos..."
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500 text-sm"
              />
              <FiSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
            </div>

            {/* Mobile Navigation */}
            <div className="space-y-2">
              <Link href="/tratamientos" className="block py-2 text-gray-700 font-medium">
                Tratamientos
              </Link>
              {navItems.map((item) => (
                <Link key={item.name} href={item.href} className="block py-2 text-gray-700">
                  {item.name}
                </Link>
              ))}
              <Link href="/nosotras" className="block py-2 text-gray-700">
                Nosotras
              </Link>
              <Link href="/contacto" className="block py-2 text-gray-700">
                Contacto
              </Link>
            </div>

            {/* Mobile CTA */}
            <div className="pt-4 border-t border-gray-200">
              <Link
                href="/reservar"
                className="flex items-center justify-center space-x-2 w-full bg-pink-600 text-white py-3 rounded-md hover:bg-pink-700 transition-colors font-medium"
              >
                <FiCalendar className="w-4 h-4" />
                <span>Reservar Cita</span>
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  )
}