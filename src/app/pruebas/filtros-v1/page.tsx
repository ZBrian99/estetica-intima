'use client';

import React, { useState } from 'react';
import { FiFilter, FiX, FiSearch, FiChevronDown, FiGrid, FiList, FiStar, FiMapPin } from 'react-icons/fi';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import NavbarV3_1_Hybrid from '@/components/layout/NavbarV3_1_Hybrid';

interface FilterOption {
  id: string;
  name: string;
  count?: number;
}

interface Treatment {
  id: string;
  name: string;
  category: string;
  subcategory: string;
  price: string;
  duration: string;
  rating: number;
  reviews: number;
  popular?: boolean;
  new?: boolean;
  premium?: boolean;
  image: string;
  description: string;
}

const filterCategories = {
  categoria: [
    { id: 'faciales', name: 'Tratamientos Faciales', count: 12 },
    { id: 'corporales', name: 'Tratamientos Corporales', count: 8 },
    { id: 'medicina', name: 'Medicina Estética', count: 6 },
    { id: 'masajes', name: 'Masajes y Relajación', count: 5 }
  ],
  precio: [
    { id: 'bajo', name: 'Hasta $10.000', count: 15 },
    { id: 'medio', name: '$10.000 - $20.000', count: 10 },
    { id: 'alto', name: '$20.000 - $30.000', count: 4 },
    { id: 'premium', name: 'Más de $30.000', count: 2 }
  ],
  duracion: [
    { id: 'corto', name: '30-60 min', count: 18 },
    { id: 'medio', name: '60-90 min', count: 8 },
    { id: 'largo', name: '90+ min', count: 5 }
  ],
  tipo: [
    { id: 'relajante', name: 'Relajante', count: 12 },
    { id: 'rejuvenecedor', name: 'Rejuvenecedor', count: 8 },
    { id: 'purificante', name: 'Purificante', count: 6 },
    { id: 'reafirmante', name: 'Reafirmante', count: 5 }
  ]
};

const mockTreatments: Treatment[] = [
  {
    id: '1',
    name: 'Limpieza Profunda Premium',
    category: 'Tratamientos Faciales',
    subcategory: 'Purificación',
    price: '$8.000',
    duration: '60 min',
    rating: 4.8,
    reviews: 124,
    popular: true,
    image: '/api/placeholder/300/200',
    description: 'Limpieza profunda con extracción y mascarilla personalizada'
  },
  {
    id: '2',
    name: 'Facial Diamante',
    category: 'Tratamientos Faciales',
    subcategory: 'Anti-aging',
    price: '$15.000',
    duration: '90 min',
    rating: 4.9,
    reviews: 89,
    premium: true,
    image: '/api/placeholder/300/200',
    description: 'Tratamiento premium con microdermoabrasión y diamante'
  },
  {
    id: '3',
    name: 'Masaje Relajante Completo',
    category: 'Tratamientos Corporales',
    subcategory: 'Relajación',
    price: '$12.000',
    duration: '75 min',
    rating: 4.7,
    reviews: 156,
    popular: true,
    image: '/api/placeholder/300/200',
    description: 'Masaje corporal completo con aceites esenciales'
  },
  {
    id: '4',
    name: 'Botox Premium',
    category: 'Medicina Estética',
    subcategory: 'Inyectables',
    price: 'Desde $20.000',
    duration: '45 min',
    rating: 4.9,
    reviews: 67,
    premium: true,
    image: '/api/placeholder/300/200',
    description: 'Aplicación de toxina botulínica de última generación'
  },
  {
    id: '5',
    name: 'Peeling de Ácido Hialurónico',
    category: 'Tratamientos Faciales',
    subcategory: 'Renovación',
    price: '$12.000',
    duration: '60 min',
    rating: 4.6,
    reviews: 92,
    new: true,
    image: '/api/placeholder/300/200',
    description: 'Renovación celular con hidratación profunda'
  },
  {
    id: '6',
    name: 'Drenaje Linfático',
    category: 'Tratamientos Corporales',
    subcategory: 'Detox',
    price: '$10.000',
    duration: '60 min',
    rating: 4.5,
    reviews: 78,
    image: '/api/placeholder/300/200',
    description: 'Elimina toxinas y reduce la retención de líquidos'
  }
];

export default function FiltrosV1Page() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [selectedFilters, setSelectedFilters] = useState<Record<string, string[]>>({});
  const [searchQuery, setSearchQuery] = useState('');
  const [sortBy, setSortBy] = useState('popular');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [priceRange, setPriceRange] = useState([0, 50000]);

  const handleFilterChange = (category: string, filterId: string) => {
    setSelectedFilters(prev => {
      const categoryFilters = prev[category] || [];
      const isSelected = categoryFilters.includes(filterId);
      
      if (isSelected) {
        return {
          ...prev,
          [category]: categoryFilters.filter(id => id !== filterId)
        };
      } else {
        return {
          ...prev,
          [category]: [...categoryFilters, filterId]
        };
      }
    });
  };

  const clearAllFilters = () => {
    setSelectedFilters({});
    setSearchQuery('');
    setPriceRange([0, 50000]);
  };

  const getActiveFiltersCount = () => {
    return Object.values(selectedFilters).flat().length;
  };

  const FilterSidebar = ({ isMobile = false }) => (
    <div className={`${isMobile ? 'w-full' : 'w-80'} bg-white ${isMobile ? '' : 'border-r border-gray-200'} h-full overflow-y-auto`}>
      <div className="p-6">
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-lg font-semibold text-gray-900">Filtros</h2>
          <div className="flex items-center space-x-2">
            {getActiveFiltersCount() > 0 && (
              <Badge variant="secondary" className="bg-pink-100 text-pink-800">
                {getActiveFiltersCount()}
              </Badge>
            )}
            {isMobile && (
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setIsSidebarOpen(false)}
              >
                <FiX className="w-4 h-4" />
              </Button>
            )}
          </div>
        </div>

        {/* Clear Filters */}
        {getActiveFiltersCount() > 0 && (
          <Button
            variant="outline"
            size="sm"
            onClick={clearAllFilters}
            className="w-full mb-6 text-gray-600 hover:text-gray-900"
          >
            Limpiar todos los filtros
          </Button>
        )}

        {/* Search within filters */}
        <div className="mb-6">
          <div className="relative">
            <FiSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
            <input
              type="text"
              placeholder="Buscar tratamientos..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent"
            />
          </div>
        </div>

        {/* Price Range */}
        <div className="mb-6">
          <h3 className="font-medium text-gray-900 mb-3">Rango de Precio</h3>
          <div className="space-y-3">
            <div className="flex items-center space-x-3">
              <input
                type="range"
                min="0"
                max="50000"
                step="1000"
                value={priceRange[1]}
                onChange={(e) => setPriceRange([priceRange[0], parseInt(e.target.value)])}
                className="flex-1 h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer slider"
              />
            </div>
            <div className="flex items-center justify-between text-sm text-gray-600">
              <span>$0</span>
              <span className="font-medium text-pink-600">${priceRange[1].toLocaleString()}</span>
            </div>
          </div>
        </div>

        {/* Filter Categories */}
        {Object.entries(filterCategories).map(([categoryKey, options]) => (
          <div key={categoryKey} className="mb-6">
            <h3 className="font-medium text-gray-900 mb-3 capitalize">
              {categoryKey === 'categoria' ? 'Categoría' : 
               categoryKey === 'duracion' ? 'Duración' : categoryKey}
            </h3>
            <div className="space-y-2">
              {options.map((option) => (
                <label key={option.id} className="flex items-center space-x-3 cursor-pointer group">
                  <input
                    type="checkbox"
                    checked={selectedFilters[categoryKey]?.includes(option.id) || false}
                    onChange={() => handleFilterChange(categoryKey, option.id)}
                    className="w-4 h-4 text-pink-600 border-gray-300 rounded focus:ring-pink-500"
                  />
                  <span className="flex-1 text-sm text-gray-700 group-hover:text-gray-900">
                    {option.name}
                  </span>
                  <span className="text-xs text-gray-500">
                    ({option.count})
                  </span>
                </label>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navbar */}
      <NavbarV3_1_Hybrid />
      
      {/* Subtopbar */}
      <div className="bg-white border-b border-gray-200 sticky top-16 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-14">
            {/* Left side - Breadcrumb and results */}
            <div className="flex items-center space-x-4">
              <nav className="text-sm text-gray-500">
                <span>Inicio</span>
                <span className="mx-2">/</span>
                <span className="text-gray-900 font-medium">Tratamientos</span>
              </nav>
              <Separator orientation="vertical" className="h-4" />
              <span className="text-sm text-gray-600">
                {mockTreatments.length} tratamientos encontrados
              </span>
            </div>

            {/* Right side - Controls */}
            <div className="flex items-center space-x-4">
              {/* Mobile filter button */}
              <Button
                variant="outline"
                size="sm"
                onClick={() => setIsSidebarOpen(true)}
                className="lg:hidden flex items-center space-x-2"
              >
                <FiFilter className="w-4 h-4" />
                <span>Filtros</span>
                {getActiveFiltersCount() > 0 && (
                  <Badge variant="secondary" className="bg-pink-100 text-pink-800 ml-1">
                    {getActiveFiltersCount()}
                  </Badge>
                )}
              </Button>

              {/* Sort dropdown */}
              <div className="relative">
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="appearance-none bg-white border border-gray-300 rounded-lg px-4 py-2 pr-8 text-sm focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent"
                >
                  <option value="popular">Más populares</option>
                  <option value="price-low">Precio: menor a mayor</option>
                  <option value="price-high">Precio: mayor a menor</option>
                  <option value="rating">Mejor valorados</option>
                  <option value="newest">Más recientes</option>
                </select>
                <FiChevronDown className="absolute right-2 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" />
              </div>

              {/* View mode toggle */}
              <div className="hidden sm:flex items-center border border-gray-300 rounded-lg">
                <Button
                  variant={viewMode === 'grid' ? 'default' : 'ghost'}
                  size="sm"
                  onClick={() => setViewMode('grid')}
                  className="rounded-r-none"
                >
                  <FiGrid className="w-4 h-4" />
                </Button>
                <Button
                  variant={viewMode === 'list' ? 'default' : 'ghost'}
                  size="sm"
                  onClick={() => setViewMode('list')}
                  className="rounded-l-none"
                >
                  <FiList className="w-4 h-4" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="flex">
          {/* Desktop Sidebar */}
          <div className="hidden lg:block">
            <FilterSidebar />
          </div>

          {/* Mobile Sidebar Overlay */}
          {isSidebarOpen && (
            <div className="lg:hidden fixed inset-0 z-50 flex">
              <div className="fixed inset-0 bg-black bg-opacity-50" onClick={() => setIsSidebarOpen(false)} />
              <div className="relative bg-white w-80 max-w-sm">
                <FilterSidebar isMobile />
              </div>
            </div>
          )}

          {/* Content Area */}
          <div className="flex-1 lg:pl-8">
            {/* Active Filters */}
            {getActiveFiltersCount() > 0 && (
              <div className="mb-6">
                <div className="flex items-center space-x-2 mb-3">
                  <span className="text-sm font-medium text-gray-900">Filtros activos:</span>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={clearAllFilters}
                    className="text-pink-600 hover:text-pink-700 p-0 h-auto"
                  >
                    Limpiar todos
                  </Button>
                </div>
                <div className="flex flex-wrap gap-2">
                  {Object.entries(selectedFilters).map(([category, filters]) =>
                    filters.map(filterId => {
                      const option = filterCategories[category as keyof typeof filterCategories]?.find(opt => opt.id === filterId);
                      return option ? (
                        <Badge
                          key={`${category}-${filterId}`}
                          variant="secondary"
                          className="bg-pink-100 text-pink-800 flex items-center space-x-1"
                        >
                          <span>{option.name}</span>
                          <button
                            onClick={() => handleFilterChange(category, filterId)}
                            className="ml-1 hover:bg-pink-200 rounded-full p-0.5"
                          >
                            <FiX className="w-3 h-3" />
                          </button>
                        </Badge>
                      ) : null;
                    })
                  )}
                </div>
              </div>
            )}

            {/* Results Grid/List */}
            <div className={viewMode === 'grid' ? 
              'grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6' : 
              'space-y-4'
            }>
              {mockTreatments.map((treatment) => (
                <div
                  key={treatment.id}
                  className={`bg-white rounded-xl shadow-sm border border-gray-200 hover:shadow-md transition-shadow ${
                    viewMode === 'list' ? 'flex space-x-4 p-4' : 'overflow-hidden'
                  }`}
                >
                  {/* Image */}
                  <div className={viewMode === 'list' ? 'w-32 h-24 flex-shrink-0' : 'aspect-video'}>
                    <img
                      src={treatment.image}
                      alt={treatment.name}
                      className="w-full h-full object-cover rounded-lg"
                    />
                  </div>

                  {/* Content */}
                  <div className={viewMode === 'list' ? 'flex-1' : 'p-4'}>
                    <div className="flex items-start justify-between mb-2">
                      <div>
                        <h3 className="font-semibold text-gray-900 mb-1">{treatment.name}</h3>
                        <p className="text-sm text-gray-600">{treatment.category}</p>
                      </div>
                      <div className="flex space-x-1">
                        {treatment.popular && (
                          <Badge variant="secondary" className="bg-orange-100 text-orange-800 text-xs">
                            Popular
                          </Badge>
                        )}
                        {treatment.new && (
                          <Badge variant="secondary" className="bg-green-100 text-green-800 text-xs">
                            Nuevo
                          </Badge>
                        )}
                        {treatment.premium && (
                          <Badge variant="secondary" className="bg-purple-100 text-purple-800 text-xs">
                            Premium
                          </Badge>
                        )}
                      </div>
                    </div>

                    <p className="text-sm text-gray-600 mb-3">{treatment.description}</p>

                    <div className="flex items-center justify-between">
                      <div>
                        <div className="flex items-center space-x-1 mb-1">
                          <FiStar className="w-4 h-4 text-yellow-400 fill-current" />
                          <span className="text-sm font-medium">{treatment.rating}</span>
                          <span className="text-sm text-gray-500">({treatment.reviews})</span>
                        </div>
                        <div className="flex items-center space-x-2 text-sm text-gray-600">
                          <span>{treatment.duration}</span>
                          <span>•</span>
                          <span className="font-semibold text-pink-600">{treatment.price}</span>
                        </div>
                      </div>
                      <Button size="sm" className="bg-pink-600 hover:bg-pink-700">
                        Reservar
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Load More */}
            <div className="mt-8 text-center">
              <Button variant="outline" size="lg">
                Cargar más tratamientos
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}