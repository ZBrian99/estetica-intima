'use client';

import React, { useState } from 'react';
import { FiFilter, FiX, FiSearch, FiChevronDown, FiGrid, FiList, FiStar, FiClock, FiDollarSign, FiTrendingUp } from 'react-icons/fi';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import NavbarV3_2_Premium from '@/components/layout/NavbarV3_2_Premium';

interface QuickFilter {
  id: string;
  name: string;
  icon?: React.ReactNode;
  count: number;
  color?: string;
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
  tags: string[];
}

const quickFilters: QuickFilter[] = [
  { id: 'populares', name: 'Más Populares', icon: <FiTrendingUp className="w-4 h-4" />, count: 12, color: 'bg-orange-100 text-orange-800 border-orange-200' },
  { id: 'nuevos', name: 'Nuevos', icon: <FiStar className="w-4 h-4" />, count: 5, color: 'bg-green-100 text-green-800 border-green-200' },
  { id: 'faciales', name: 'Faciales', count: 15, color: 'bg-pink-100 text-pink-800 border-pink-200' },
  { id: 'corporales', name: 'Corporales', count: 8, color: 'bg-blue-100 text-blue-800 border-blue-200' },
  { id: 'rapidos', name: 'Rápidos (< 60min)', icon: <FiClock className="w-4 h-4" />, count: 18, color: 'bg-purple-100 text-purple-800 border-purple-200' },
  { id: 'economicos', name: 'Económicos', icon: <FiDollarSign className="w-4 h-4" />, count: 10, color: 'bg-emerald-100 text-emerald-800 border-emerald-200' },
  { id: 'premium', name: 'Premium', count: 6, color: 'bg-amber-100 text-amber-800 border-amber-200' },
  { id: 'relajantes', name: 'Relajantes', count: 12, color: 'bg-indigo-100 text-indigo-800 border-indigo-200' }
];

const mockTreatments: Treatment[] = [
  {
    id: '1',
    name: 'Limpieza Profunda Express',
    category: 'Tratamientos Faciales',
    subcategory: 'Purificación',
    price: '$6.000',
    duration: '45 min',
    rating: 4.7,
    reviews: 89,
    popular: true,
    image: '/api/placeholder/300/200',
    description: 'Limpieza facial rápida y efectiva',
    tags: ['faciales', 'rapidos', 'economicos', 'populares']
  },
  {
    id: '2',
    name: 'Facial Oro 24k',
    category: 'Tratamientos Faciales',
    subcategory: 'Luxury',
    price: '$25.000',
    duration: '120 min',
    rating: 4.9,
    reviews: 45,
    premium: true,
    image: '/api/placeholder/300/200',
    description: 'Tratamiento facial de lujo con oro puro',
    tags: ['faciales', 'premium']
  },
  {
    id: '3',
    name: 'Masaje Piedras Calientes',
    category: 'Tratamientos Corporales',
    subcategory: 'Relajación',
    price: '$14.000',
    duration: '90 min',
    rating: 4.8,
    reviews: 156,
    popular: true,
    image: '/api/placeholder/300/200',
    description: 'Relajación profunda con terapia de piedras',
    tags: ['corporales', 'relajantes', 'populares']
  },
  {
    id: '4',
    name: 'Peeling Químico Suave',
    category: 'Tratamientos Faciales',
    subcategory: 'Renovación',
    price: '$8.000',
    duration: '30 min',
    rating: 4.6,
    reviews: 67,
    new: true,
    image: '/api/placeholder/300/200',
    description: 'Renovación celular gentle para pieles sensibles',
    tags: ['faciales', 'rapidos', 'nuevos']
  },
  {
    id: '5',
    name: 'Drenaje Linfático Manual',
    category: 'Tratamientos Corporales',
    subcategory: 'Detox',
    price: '$12.000',
    duration: '75 min',
    rating: 4.5,
    reviews: 92,
    image: '/api/placeholder/300/200',
    description: 'Elimina toxinas y mejora la circulación',
    tags: ['corporales', 'relajantes']
  },
  {
    id: '6',
    name: 'Hidrafacial Express',
    category: 'Tratamientos Faciales',
    subcategory: 'Hidratación',
    price: '$10.000',
    duration: '50 min',
    rating: 4.8,
    reviews: 134,
    new: true,
    popular: true,
    image: '/api/placeholder/300/200',
    description: 'Hidratación profunda con tecnología avanzada',
    tags: ['faciales', 'populares', 'nuevos']
  },
  {
    id: '7',
    name: 'Reflexología Podal',
    category: 'Tratamientos Corporales',
    subcategory: 'Bienestar',
    price: '$7.000',
    duration: '40 min',
    rating: 4.4,
    reviews: 78,
    image: '/api/placeholder/300/200',
    description: 'Relajación a través de puntos de presión en los pies',
    tags: ['corporales', 'rapidos', 'economicos', 'relajantes']
  },
  {
    id: '8',
    name: 'Microdermoabrasión Premium',
    category: 'Tratamientos Faciales',
    subcategory: 'Renovación',
    price: '$18.000',
    duration: '80 min',
    rating: 4.7,
    reviews: 56,
    premium: true,
    image: '/api/placeholder/300/200',
    description: 'Renovación celular profunda con tecnología de punta',
    tags: ['faciales', 'premium']
  }
];

export default function FiltrosV2Page() {
  const [selectedQuickFilters, setSelectedQuickFilters] = useState<string[]>([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [sortBy, setSortBy] = useState('relevancia');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [showAllFilters, setShowAllFilters] = useState(false);

  const handleQuickFilterToggle = (filterId: string) => {
    setSelectedQuickFilters(prev => 
      prev.includes(filterId) 
        ? prev.filter(id => id !== filterId)
        : [...prev, filterId]
    );
  };

  const clearAllFilters = () => {
    setSelectedQuickFilters([]);
    setSearchQuery('');
  };

  const getFilteredTreatments = () => {
    let filtered = mockTreatments;

    // Apply search
    if (searchQuery) {
      filtered = filtered.filter(treatment => 
        treatment.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        treatment.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        treatment.category.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    // Apply quick filters
    if (selectedQuickFilters.length > 0) {
      filtered = filtered.filter(treatment => 
        selectedQuickFilters.some(filter => treatment.tags.includes(filter))
      );
    }

    return filtered;
  };

  const filteredTreatments = getFilteredTreatments();

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navbar */}
      <NavbarV3_2_Premium />
      
      {/* Hero Section with Search */}
      <div className="bg-gradient-to-r from-pink-500 to-purple-600 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">
              Encuentra tu Tratamiento Ideal
            </h1>
            <p className="text-lg text-pink-100 max-w-2xl mx-auto">
              Descubre nuestros tratamientos más populares con filtros rápidos y búsqueda inteligente
            </p>
          </div>
          
          {/* Search Bar */}
          <div className="max-w-2xl mx-auto">
            <div className="relative">
              <FiSearch className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Buscar por nombre, categoría o descripción..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-4 text-gray-900 bg-white rounded-xl shadow-lg focus:outline-none focus:ring-4 focus:ring-pink-300 focus:ring-opacity-50 text-lg"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                >
                  <FiX className="w-5 h-5" />
                </button>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Quick Filters Section */}
      <div className="bg-white border-b border-gray-200 sticky top-16 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          {/* Results and Controls */}
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center space-x-4">
              <span className="text-sm font-medium text-gray-900">
                {filteredTreatments.length} tratamientos
              </span>
              {(selectedQuickFilters.length > 0 || searchQuery) && (
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={clearAllFilters}
                  className="text-pink-600 hover:text-pink-700 flex items-center space-x-1"
                >
                  <FiX className="w-4 h-4" />
                  <span>Limpiar filtros</span>
                </Button>
              )}
            </div>

            <div className="flex items-center space-x-4">
              {/* Sort */}
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="text-sm border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent"
              >
                <option value="relevancia">Más relevantes</option>
                <option value="popular">Más populares</option>
                <option value="price-low">Precio: menor a mayor</option>
                <option value="price-high">Precio: mayor a menor</option>
                <option value="rating">Mejor valorados</option>
                <option value="duration">Duración</option>
              </select>

              {/* View Mode */}
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

          {/* Quick Filters */}
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <h3 className="text-sm font-medium text-gray-900">Filtros Rápidos</h3>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setShowAllFilters(!showAllFilters)}
                className="text-pink-600 hover:text-pink-700 flex items-center space-x-1"
              >
                <FiFilter className="w-4 h-4" />
                <span>{showAllFilters ? 'Menos filtros' : 'Más filtros'}</span>
                <FiChevronDown className={`w-4 h-4 transition-transform ${showAllFilters ? 'rotate-180' : ''}`} />
              </Button>
            </div>
            
            <div className="flex flex-wrap gap-2">
              {quickFilters.slice(0, showAllFilters ? quickFilters.length : 6).map((filter) => (
                <button
                  key={filter.id}
                  onClick={() => handleQuickFilterToggle(filter.id)}
                  className={`inline-flex items-center space-x-2 px-4 py-2 rounded-full text-sm font-medium border transition-all hover:shadow-md ${
                    selectedQuickFilters.includes(filter.id)
                      ? `${filter.color} border-current shadow-sm`
                      : 'bg-white text-gray-700 border-gray-300 hover:border-gray-400'
                  }`}
                >
                  {filter.icon && <span>{filter.icon}</span>}
                  <span>{filter.name}</span>
                  <Badge 
                    variant="secondary" 
                    className={`ml-1 text-xs ${
                      selectedQuickFilters.includes(filter.id)
                        ? 'bg-white bg-opacity-30 text-current'
                        : 'bg-gray-100 text-gray-600'
                    }`}
                  >
                    {filter.count}
                  </Badge>
                </button>
              ))}
            </div>

            {/* Active Filters Summary */}
            {selectedQuickFilters.length > 0 && (
              <div className="flex items-center space-x-2 pt-2 border-t border-gray-100">
                <span className="text-xs text-gray-600">Filtros activos:</span>
                <div className="flex flex-wrap gap-1">
                  {selectedQuickFilters.map(filterId => {
                    const filter = quickFilters.find(f => f.id === filterId);
                    return filter ? (
                      <Badge
                        key={filterId}
                        variant="secondary"
                        className="bg-pink-100 text-pink-800 text-xs flex items-center space-x-1"
                      >
                        <span>{filter.name}</span>
                        <button
                          onClick={() => handleQuickFilterToggle(filterId)}
                          className="hover:bg-pink-200 rounded-full p-0.5"
                        >
                          <FiX className="w-3 h-3" />
                        </button>
                      </Badge>
                    ) : null;
                  })}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* No Results */}
        {filteredTreatments.length === 0 && (
          <div className="text-center py-12">
            <div className="w-24 h-24 mx-auto mb-4 bg-gray-100 rounded-full flex items-center justify-center">
              <FiSearch className="w-8 h-8 text-gray-400" />
            </div>
            <h3 className="text-lg font-medium text-gray-900 mb-2">
              No encontramos tratamientos
            </h3>
            <p className="text-gray-600 mb-4">
              Intenta ajustar tus filtros o términos de búsqueda
            </p>
            <Button onClick={clearAllFilters} variant="outline">
              Limpiar todos los filtros
            </Button>
          </div>
        )}

        {/* Results Grid/List */}
        {filteredTreatments.length > 0 && (
          <div className={viewMode === 'grid' ? 
            'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6' : 
            'space-y-4'
          }>
            {filteredTreatments.map((treatment) => (
              <div
                key={treatment.id}
                className={`bg-white rounded-xl shadow-sm border border-gray-200 hover:shadow-lg transition-all duration-200 hover:-translate-y-1 ${
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
                    <div className="flex-1">
                      <h3 className="font-semibold text-gray-900 mb-1 line-clamp-2">{treatment.name}</h3>
                      <p className="text-sm text-gray-600">{treatment.subcategory}</p>
                    </div>
                    <div className="flex flex-col space-y-1 ml-2">
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

                  <p className="text-sm text-gray-600 mb-3 line-clamp-2">{treatment.description}</p>

                  <div className="flex items-center justify-between">
                    <div>
                      <div className="flex items-center space-x-1 mb-1">
                        <FiStar className="w-4 h-4 text-yellow-400 fill-current" />
                        <span className="text-sm font-medium">{treatment.rating}</span>
                        <span className="text-sm text-gray-500">({treatment.reviews})</span>
                      </div>
                      <div className="flex items-center space-x-2 text-sm text-gray-600">
                        <FiClock className="w-3 h-3" />
                        <span>{treatment.duration}</span>
                        <span>•</span>
                        <span className="font-semibold text-pink-600">{treatment.price}</span>
                      </div>
                    </div>
                    <Button size="sm" className="bg-pink-600 hover:bg-pink-700 ml-2">
                      Reservar
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Load More */}
        {filteredTreatments.length > 0 && (
          <div className="mt-12 text-center">
            <Button variant="outline" size="lg" className="px-8">
              Cargar más tratamientos
            </Button>
          </div>
        )}
      </div>
    </div>
  );
}