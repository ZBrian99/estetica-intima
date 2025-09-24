'use client'

import { useState } from 'react'
import Link from 'next/link'
import { FiSearch, FiShoppingCart, FiMenu, FiX, FiChevronDown, FiPhone, FiCalendar } from 'react-icons/fi'

interface TreatmentCategory {
  name: string
  items: string[]
  featured?: boolean
}

interface NavItem {
  name: string
  href: string
  hasDropdown?: boolean
}

const treatmentCategories: TreatmentCategory[] = [
  {
    name: 'Depilación Definitiva',
    items: ['Depilación Femenina', 'Depilación Masculina', 'Zonas Individuales', 'Combos Populares'],
    featured: true
  },
  {
    name: 'Tratamientos Corporales',
    items: ['Maderoterapia', 'Mio Up', 'Alpha Synergy', 'Vacuum Therapy', 'Masajes', 'Drenaje Linfático'],
    featured: true
  },
  {
    name: 'Tratamientos Faciales',
    items: ['Limpieza Facial', 'Peeling Químico', 'Alpha Synergy Facial', 'Hollywood Peel', 'Dermaplaning'],
    featured: true
  },
  {
    name: 'Cejas y Pestañas',
    items: ['Microblading', 'Dermopigmentación', 'Lifting de Pestañas', 'Extensiones', 'Tinte']
  },
  {
    name: 'Uñas y Pies',
    items: ['Spa de Pies', 'Pedicuría', 'Esmaltado Común', 'Esmaltado Semipermanente', 'Manicuría']
  }
]

const navItems: NavItem[] = [
  { name: 'Promociones', href: '/promociones' },
  { name: 'Gift Cards', href: '/gift-cards' },
  { name: 'Eventos', href: '/eventos' },
  { name: 'Cursos', href: '/cursos' }
]

export default function NavbarFinal_1_Columnas() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isTreatmentsOpen, setIsTreatmentsOpen] = useState(false)
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
                onMouseLeave={() => setIsTreatmentsOpen(false)}
              >
                <span>Tratamientos</span>
                <FiChevronDown className="w-4 h-4" />
              </button>

              {/* Mega Menu - Columnas */}
              {isTreatmentsOpen && (
                <div
                  className="absolute left-0 top-full w-screen max-w-5xl bg-white shadow-xl border-t-2 border-pink-500 rounded-b-lg"
                  onMouseEnter={() => setIsTreatmentsOpen(true)}
                  onMouseLeave={() => setIsTreatmentsOpen(false)}
                >
                  <div className="p-8">
                    <div className="grid grid-cols-5 gap-8">
                      {treatmentCategories.map((category, index) => (
                        <div key={index} className="space-y-4">
                          <h3 className={`font-semibold text-sm uppercase tracking-wide ${
                            category.featured ? 'text-pink-600' : 'text-gray-900'
                          }`}>
                            {category.name}
                          </h3>
                          <ul className="space-y-2">
                            {category.items.map((item, itemIndex) => (
                              <li key={itemIndex}>
                                <Link
                                  href={`/servicios/${item.toLowerCase().replace(/\s+/g, '-')}`}
                                  className="text-gray-600 hover:text-pink-600 text-sm transition-colors block py-1"
                                >
                                  {item}
                                </Link>
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>

                    {/* CTA Section */}
                    <div className="mt-8 pt-6 border-t border-gray-200">
                      <div className="flex justify-between items-center">
                        <div>
                          <h4 className="font-semibold text-gray-900 mb-1">¿No encontrás lo que buscás?</h4>
                          <p className="text-sm text-gray-600">Consultanos por tratamientos personalizados</p>
                        </div>
                        <div className="flex space-x-4">
                          <Link
                            href="/servicios"
                            className="px-4 py-2 text-sm font-medium text-pink-600 border border-pink-600 rounded-md hover:bg-pink-50 transition-colors"
                          >
                            Ver Todos
                          </Link>
                          <Link
                            href="/contacto"
                            className="px-4 py-2 text-sm font-medium text-white bg-pink-600 rounded-md hover:bg-pink-700 transition-colors"
                          >
                            Consultar
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
              className="hidden md:flex items-center space-x-2 bg-pink-600 text-white px-4 py-2 rounded-md hover:bg-pink-700 transition-colors text-sm font-medium"
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