'use client';

import React, { useState, useEffect } from 'react';
import { FiFilter, FiX, FiSearch, FiChevronDown, FiGrid, FiList, FiStar, FiClock, FiDollarSign, FiMapPin, FiCalendar, FiUser, FiHeart, FiShare2, FiSliders } from 'react-icons/fi';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import NavbarV3_3_Modern from '@/components/layout/NavbarV3_3_Modern';
import Image from 'next/image';

interface FilterCategory {
  id: string;
  name: string;
  type: 'checkbox' | 'range' | 'select' | 'multiselect' | 'rating';
  options?: FilterOption[];
  min?: number;
  max?: number;
  step?: number;
  unit?: string;
}

interface FilterOption {
  id: string;
  name: string;
  count?: number;
  color?: string;
}

interface Treatment {
  id: string;
  name: string;
  category: string;
  subcategory: string;
  price: number;
  originalPrice?: number;
  duration: number;
  rating: number;
  reviews: number;
  popular?: boolean;
  new?: boolean;
  premium?: boolean;
  discount?: number;
  image: string;
  description: string;
  tags: string[];
  availability: 'available' | 'limited' | 'booked';
  nextAvailable?: string;
  specialist: string;
  location: string;
  benefits: string[];
}

const filterCategories: FilterCategory[] = [
  {
    id: 'categoria',
    name: 'Categoría',
    type: 'checkbox',
    options: [
      { id: 'faciales', name: 'Tratamientos Faciales', count: 18 },
      { id: 'corporales', name: 'Tratamientos Corporales', count: 12 },
      { id: 'medicina', name: 'Medicina Estética', count: 8 },
      { id: 'masajes', name: 'Masajes y Relajación', count: 10 },
      { id: 'depilacion', name: 'Depilación', count: 6 },
      { id: 'unas', name: 'Cuidado de Uñas', count: 4 }
    ]
  },
  {
    id: 'precio',
    name: 'Rango de Precio',
    type: 'range',
    min: 0,
    max: 50000,
    step: 1000,
    unit: '$'
  },
  {
    id: 'duracion',
    name: 'Duración',
    type: 'range',
    min: 15,
    max: 180,
    step: 15,
    unit: 'min'
  },
  {
    id: 'valoracion',
    name: 'Valoración Mínima',
    type: 'rating',
    min: 1,
    max: 5
  },
  {
    id: 'disponibilidad',
    name: 'Disponibilidad',
    type: 'select',
    options: [
      { id: 'all', name: 'Todos' },
      { id: 'available', name: 'Disponible ahora', count: 25 },
      { id: 'limited', name: 'Disponibilidad limitada', count: 8 },
      { id: 'next-week', name: 'Próxima semana', count: 15 }
    ]
  },
  {
    id: 'especialista',
    name: 'Especialista',
    type: 'multiselect',
    options: [
      { id: 'dra-martinez', name: 'Dra. Martínez', count: 12 },
      { id: 'lic-rodriguez', name: 'Lic. Rodríguez', count: 10 },
      { id: 'esp-garcia', name: 'Esp. García', count: 8 },
      { id: 'tec-lopez', name: 'Téc. López', count: 6 }
    ]
  },
  {
    id: 'beneficios',
    name: 'Beneficios',
    type: 'checkbox',
    options: [
      { id: 'anti-aging', name: 'Anti-aging', count: 15 },
      { id: 'hidratacion', name: 'Hidratación', count: 20 },
      { id: 'relajacion', name: 'Relajación', count: 18 },
      { id: 'purificacion', name: 'Purificación', count: 12 },
      { id: 'reafirmante', name: 'Reafirmante', count: 10 },
      { id: 'detox', name: 'Detox', count: 8 }
    ]
  }
];

const mockTreatments: Treatment[] = [
  {
    id: '1',
    name: 'Limpieza Profunda con Extracción',
    category: 'Tratamientos Faciales',
    subcategory: 'Purificación',
    price: 8000,
    originalPrice: 10000,
    duration: 75,
    rating: 4.8,
    reviews: 124,
    popular: true,
    discount: 20,
    image: '/api/placeholder/300/200',
    description: 'Limpieza profunda con extracción manual y mascarilla purificante',
    tags: ['faciales', 'purificacion', 'hidratacion'],
    availability: 'available',
    specialist: 'Lic. Rodríguez',
    location: 'Sala 1',
    benefits: ['purificacion', 'hidratacion']
  },
  {
    id: '2',
    name: 'Facial Diamante Premium',
    category: 'Tratamientos Faciales',
    subcategory: 'Anti-aging',
    price: 25000,
    duration: 120,
    rating: 4.9,
    reviews: 89,
    premium: true,
    image: '/api/placeholder/300/200',
    description: 'Tratamiento premium con microdermoabrasión de diamante y suero anti-edad',
    tags: ['faciales', 'premium', 'anti-aging'],
    availability: 'limited',
    nextAvailable: '2025-01-25',
    specialist: 'Dra. Martínez',
    location: 'Sala Premium',
    benefits: ['anti-aging', 'reafirmante', 'hidratacion']
  },
  {
    id: '3',
    name: 'Masaje Relajante Completo',
    category: 'Masajes y Relajación',
    subcategory: 'Relajación',
    price: 12000,
    duration: 90,
    rating: 4.7,
    reviews: 156,
    popular: true,
    image: '/api/placeholder/300/200',
    description: 'Masaje corporal completo con aceites esenciales y aromaterapia',
    tags: ['masajes', 'relajacion', 'corporales'],
    availability: 'available',
    specialist: 'Téc. López',
    location: 'Sala de Masajes',
    benefits: ['relajacion', 'detox']
  },
  {
    id: '4',
    name: 'Botox Facial Completo',
    category: 'Medicina Estética',
    subcategory: 'Inyectables',
    price: 35000,
    duration: 60,
    rating: 4.9,
    reviews: 67,
    premium: true,
    image: '/api/placeholder/300/200',
    description: 'Aplicación de toxina botulínica en frente, entrecejo y patas de gallo',
    tags: ['medicina', 'premium', 'anti-aging'],
    availability: 'limited',
    nextAvailable: '2025-01-28',
    specialist: 'Dra. Martínez',
    location: 'Consultorio Médico',
    benefits: ['anti-aging', 'reafirmante']
  },
  {
    id: '5',
    name: 'Peeling Químico Suave',
    category: 'Tratamientos Faciales',
    subcategory: 'Renovación',
    price: 15000,
    duration: 45,
    rating: 4.6,
    reviews: 92,
    new: true,
    image: '/api/placeholder/300/200',
    description: 'Renovación celular con ácidos suaves para todo tipo de piel',
    tags: ['faciales', 'renovacion', 'nuevo'],
    availability: 'available',
    specialist: 'Esp. García',
    location: 'Sala 2',
    benefits: ['anti-aging', 'purificacion']
  },
  {
    id: '6',
    name: 'Drenaje Linfático Manual',
    category: 'Tratamientos Corporales',
    subcategory: 'Detox',
    price: 10000,
    originalPrice: 12000,
    duration: 60,
    rating: 4.5,
    reviews: 78,
    discount: 17,
    image: '/api/placeholder/300/200',
    description: 'Técnica manual para eliminar toxinas y reducir retención de líquidos',
    tags: ['corporales', 'detox', 'relajacion'],
    availability: 'available',
    specialist: 'Lic. Rodríguez',
    location: 'Sala 3',
    benefits: ['detox', 'relajacion']
  },
  {
    id: '7',
    name: 'Hidrafacial con Infusión de Vitaminas',
    category: 'Tratamientos Faciales',
    subcategory: 'Hidratación',
    price: 18000,
    duration: 75,
    rating: 4.8,
    reviews: 134,
    new: true,
    popular: true,
    image: '/api/placeholder/300/200',
    description: 'Hidratación profunda con tecnología de infusión y vitaminas',
    tags: ['faciales', 'hidratacion', 'nuevo', 'popular'],
    availability: 'available',
    specialist: 'Esp. García',
    location: 'Sala 1',
    benefits: ['hidratacion', 'anti-aging']
  },
  {
    id: '8',
    name: 'Reflexología Podal Terapéutica',
    category: 'Masajes y Relajación',
    subcategory: 'Bienestar',
    price: 7000,
    duration: 50,
    rating: 4.4,
    reviews: 89,
    image: '/api/placeholder/300/200',
    description: 'Masaje terapéutico en puntos de presión de los pies',
    tags: ['masajes', 'relajacion', 'terapeutico'],
    availability: 'available',
    specialist: 'Téc. López',
    location: 'Sala de Masajes',
    benefits: ['relajacion']
  }
];

type FilterValue = string[] | [number, number] | number | string | null;
const isStringArray = (val: FilterValue): val is string[] => Array.isArray(val) && val.every(x => typeof x === 'string');

export default function FiltrosV3Page() {
  const [selectedFilters, setSelectedFilters] = useState<Record<string, FilterValue>>({});
  const [searchQuery, setSearchQuery] = useState('');
  const [sortBy, setSortBy] = useState('relevancia');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [isFilterPanelOpen, setIsFilterPanelOpen] = useState(false);
  const [savedFilters, setSavedFilters] = useState<string[]>([]);
  const [showOnlyFavorites, setShowOnlyFavorites] = useState(false);

  const handleFilterChange = (categoryId: string, value: FilterValue) => {
    setSelectedFilters(prev => ({
      ...prev,
      [categoryId]: value
    }));
  };

  const clearAllFilters = () => {
    setSelectedFilters({});
    setSearchQuery('');
    setShowOnlyFavorites(false);
  };

  const saveCurrentFilters = () => {
    const filterString = JSON.stringify({ filters: selectedFilters, search: searchQuery });
    setSavedFilters(prev => [...prev, filterString]);
  };

  const getFilteredTreatments = () => {
    let filtered = mockTreatments;

    // Apply search
    if (searchQuery) {
      filtered = filtered.filter(treatment => 
        treatment.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        treatment.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        treatment.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
        treatment.specialist.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    // Apply filters
    Object.entries(selectedFilters).forEach(([categoryId, value]) => {
      const category = filterCategories.find(c => c.id === categoryId);
      if (!category || !value) return;

      switch (category.type) {
        case 'checkbox':
          if (isStringArray(value) && value.length > 0) {
            filtered = filtered.filter(treatment => 
              value.some(v => treatment.tags.includes(v) || treatment.benefits.includes(v))
            );
          }
          break;
        case 'range':
          if (Array.isArray(value) && value.length === 2) {
            const [min, max] = value as [number, number];
            if (categoryId === 'precio') {
              filtered = filtered.filter(treatment => 
                treatment.price >= min && treatment.price <= max
              );
            } else if (categoryId === 'duracion') {
              filtered = filtered.filter(treatment => 
                treatment.duration >= min && treatment.duration <= max
              );
            }
          }
          break;
        case 'rating':
          if (typeof value === 'number') {
            filtered = filtered.filter(treatment => treatment.rating >= value);
          }
          break;
        case 'select':
          if (value !== 'all') {
            if (categoryId === 'disponibilidad') {
              filtered = filtered.filter(treatment => treatment.availability === value);
            }
          }
          break;
        case 'multiselect':
          if (isStringArray(value) && value.length > 0) {
            if (categoryId === 'especialista') {
              filtered = filtered.filter(treatment => 
                value.some((v) => treatment.specialist.toLowerCase().includes(v.replace(/^(dra|lic|esp|tec)-/, '')))
              );
            }
          }
          break;
      }
    });

    return filtered;
  };

  const filteredTreatments = getFilteredTreatments();

  const getActiveFiltersCount = () => {
    return Object.values(selectedFilters).filter(value => {
      if (Array.isArray(value)) return value.length > 0;
      if (typeof value === 'object' && value !== null) return Object.keys(value).length > 0;
      return value !== null && value !== undefined && value !== '';
    }).length;
  };

  const renderFilterControl = (category: FilterCategory) => {
    const value = selectedFilters[category.id];

    switch (category.type) {
      case 'checkbox':
        return (
          <div className="space-y-2">
            {category.options?.map((option) => (
              <label key={option.id} className="flex items-center space-x-3 cursor-pointer group">
                <input
                  type="checkbox"
                  checked={isStringArray(value) ? value.includes(option.id) : false}
                  onChange={(e) => {
                    const currentValue: string[] = isStringArray(value) ? value : [];
                    const newValue = e.target.checked
                      ? [...currentValue, option.id]
                      : currentValue.filter((v: string) => v !== option.id);
                    handleFilterChange(category.id, newValue);
                  }}
                  className="w-4 h-4 text-pink-600 border-gray-300 rounded focus:ring-pink-500"
                />
                <span className="flex-1 text-sm text-gray-700 group-hover:text-gray-900">
                  {option.name}
                </span>
                {option.count && (
                  <span className="text-xs text-gray-500">({option.count})</span>
                )}
              </label>
            ))}
          </div>
        );

      case 'range':
        const rangeValue: [number, number] = Array.isArray(value)
          ? (value as [number, number])
          : [category.min ?? 0, category.max ?? 0];
        return (
          <div className="space-y-4">
            <div className="flex items-center space-x-4">
              <input
                type="number"
                placeholder="Min"
                value={rangeValue[0]}
                onChange={(e) => handleFilterChange(category.id, [parseInt(e.target.value) || (category.min ?? 0), rangeValue[1]])}
                className="w-20 px-2 py-1 text-sm border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-pink-500"
              />
              <span className="text-gray-500">-</span>
              <input
                type="number"
                placeholder="Max"
                value={rangeValue[1]}
                onChange={(e) => handleFilterChange(category.id, [rangeValue[0], parseInt(e.target.value) || (category.max ?? 0)])}
                className="w-20 px-2 py-1 text-sm border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-pink-500"
              />
              <span className="text-sm text-gray-500">{category.unit}</span>
            </div>
            <div className="relative">
              <input
                type="range"
                min={category.min}
                max={category.max}
                step={category.step}
                value={rangeValue[1]}
                onChange={(e) => handleFilterChange(category.id, [rangeValue[0], parseInt(e.target.value)])}
                className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer slider"
              />
            </div>
            <div className="flex justify-between text-xs text-gray-500">
              <span>{category.unit}{category.min?.toLocaleString()}</span>
              <span>{category.unit}{category.max?.toLocaleString()}</span>
            </div>
          </div>
        );

      case 'rating':
        return (
          <div className="flex items-center space-x-2">
            {[1, 2, 3, 4, 5].map((star) => (
              <button
                key={star}
                onClick={() => handleFilterChange(category.id, star)}
                className={`p-1 rounded ${
                  ((typeof value === 'number' ? value : 0) >= star) ? 'text-yellow-400' : 'text-gray-300'
                } hover:text-yellow-400 transition-colors`}
              >
                <FiStar className={`w-5 h-5 ${((typeof value === 'number' ? value : 0) >= star) ? 'fill-current' : ''}`} />
              </button>
            ))}
            {value && (
              <span className="text-sm text-gray-600 ml-2">{value}+ estrellas</span>
            )}
          </div>
        );

      case 'select':
        return (
          <select
            value={typeof value === 'string' ? value : 'all'}
            onChange={(e) => handleFilterChange(category.id, e.target.value)}
            className="w-full px-3 py-2 text-sm border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500"
          >
            {category.options?.map((option) => (
              <option key={option.id} value={option.id}>
                {option.name} {option.count ? `(${option.count})` : ''}
              </option>
            ))}
          </select>
        );

      case 'multiselect':
        return (
          <div className="space-y-2">
            {category.options?.map((option) => (
              <label key={option.id} className="flex items-center space-x-3 cursor-pointer group">
                <input
                  type="checkbox"
                  checked={isStringArray(value) ? value.includes(option.id) : false}
                  onChange={(e) => {
                    const currentValue: string[] = isStringArray(value) ? value : [];
                    const newValue = e.target.checked
                      ? [...currentValue, option.id]
                      : currentValue.filter((v: string) => v !== option.id);
                    handleFilterChange(category.id, newValue);
                  }}
                  className="w-4 h-4 text-pink-600 border-gray-300 rounded focus:ring-pink-500"
                />
                <span className="flex-1 text-sm text-gray-700 group-hover:text-gray-900">
                  {option.name}
                </span>
                {option.count && (
                  <span className="text-xs text-gray-500">({option.count})</span>
                )}
              </label>
            ))}
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navbar */}
      <NavbarV3_3_Modern />
      
      {/* Advanced Search Header */}
      <div className="bg-gradient-to-r from-purple-600 via-pink-600 to-red-500 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Búsqueda Avanzada de Tratamientos
            </h1>
            <p className="text-xl text-pink-100 max-w-3xl mx-auto">
              Encuentra exactamente lo que necesitas con nuestros filtros inteligentes y búsqueda personalizada
            </p>
          </div>
          
          {/* Advanced Search Bar */}
          <div className="max-w-4xl mx-auto">
            <div className="relative">
              <FiSearch className="absolute left-6 top-1/2 transform -translate-y-1/2 text-gray-400 w-6 h-6" />
              <input
                type="text"
                placeholder="Buscar por tratamiento, especialista, beneficio o descripción..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-16 pr-16 py-5 text-gray-900 bg-white rounded-2xl shadow-2xl focus:outline-none focus:ring-4 focus:ring-pink-300 focus:ring-opacity-50 text-lg"
              />
              <div className="absolute right-4 top-1/2 transform -translate-y-1/2 flex items-center space-x-2">
                {searchQuery && (
                  <button
                    onClick={() => setSearchQuery('')}
                    className="text-gray-400 hover:text-gray-600 p-1"
                  >
                    <FiX className="w-5 h-5" />
                  </button>
                )}
                <Button
                  onClick={() => setIsFilterPanelOpen(true)}
                  className="bg-pink-600 hover:bg-pink-700 text-white px-4 py-2 rounded-lg flex items-center space-x-2"
                >
                  <FiSliders className="w-4 h-4" />
                  <span>Filtros Avanzados</span>
                  {getActiveFiltersCount() > 0 && (
                    <Badge variant="secondary" className="bg-white text-pink-600 ml-1">
                      {getActiveFiltersCount()}
                    </Badge>
                  )}
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Filter Panel Overlay */}
      {isFilterPanelOpen && (
        <div className="fixed inset-0 z-50 flex">
          <div className="fixed inset-0 bg-black bg-opacity-50" onClick={() => setIsFilterPanelOpen(false)} />
          <div className="relative bg-white w-96 max-w-sm h-full overflow-y-auto">
            <div className="p-6">
              {/* Filter Header */}
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-bold text-gray-900">Filtros Avanzados</h2>
                <div className="flex items-center space-x-2">
                  {getActiveFiltersCount() > 0 && (
                    <Badge variant="secondary" className="bg-pink-100 text-pink-800">
                      {getActiveFiltersCount()}
                    </Badge>
                  )}
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => setIsFilterPanelOpen(false)}
                  >
                    <FiX className="w-5 h-5" />
                  </Button>
                </div>
              </div>

              {/* Filter Actions */}
              <div className="flex space-x-2 mb-6">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={clearAllFilters}
                  className="flex-1"
                >
                  Limpiar Todo
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={saveCurrentFilters}
                  className="flex-1"
                >
                  Guardar Filtros
                </Button>
              </div>

              {/* Filter Categories */}
              <div className="space-y-6">
                {filterCategories.map((category) => (
                  <div key={category.id} className="border-b border-gray-200 pb-6 last:border-b-0">
                    <h3 className="font-semibold text-gray-900 mb-4">{category.name}</h3>
                    {renderFilterControl(category)}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Results Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Results Header */}
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center space-x-4">
            <h2 className="text-2xl font-bold text-gray-900">
              {filteredTreatments.length} Tratamientos Encontrados
            </h2>
            {getActiveFiltersCount() > 0 && (
              <Button
                variant="ghost"
                size="sm"
                onClick={clearAllFilters}
                className="text-pink-600 hover:text-pink-700"
              >
                <FiX className="w-4 h-4 mr-1" />
                Limpiar filtros
              </Button>
            )}
          </div>

          <div className="flex items-center space-x-4">
            {/* Sort */}
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-pink-500"
            >
              <option value="relevancia">Más relevantes</option>
              <option value="popular">Más populares</option>
              <option value="price-low">Precio: menor a mayor</option>
              <option value="price-high">Precio: mayor a menor</option>
              <option value="rating">Mejor valorados</option>
              <option value="duration">Duración</option>
              <option value="availability">Disponibilidad</option>
            </select>

            {/* View Mode */}
            <div className="flex items-center border border-gray-300 rounded-lg">
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

        {/* Active Filters Display */}
        {getActiveFiltersCount() > 0 && (
          <div className="mb-6 p-4 bg-white rounded-lg border border-gray-200">
            <h3 className="text-sm font-medium text-gray-900 mb-3">Filtros Activos:</h3>
            <div className="flex flex-wrap gap-2">
              {Object.entries(selectedFilters).map(([categoryId, value]) => {
                const category = filterCategories.find(c => c.id === categoryId);
                if (!category || !value) return null;

                let displayValue = '';
                if (Array.isArray(value)) {
                  displayValue = value.length > 0 ? `${value.length} seleccionados` : '';
                } else if (typeof value === 'number') {
                  displayValue = `${value}${category.unit || ''}`;
                } else {
                  displayValue = String(value);
                }

                return displayValue ? (
                  <Badge
                    key={categoryId}
                    variant="secondary"
                    className="bg-pink-100 text-pink-800 flex items-center space-x-1"
                  >
                    <span>{category.name}: {displayValue}</span>
                    <button
                      onClick={() => handleFilterChange(categoryId, null)}
                      className="ml-1 hover:bg-pink-200 rounded-full p-0.5"
                    >
                      <FiX className="w-3 h-3" />
                    </button>
                  </Badge>
                ) : null;
              })}
            </div>
          </div>
        )}

        {/* No Results */}
        {filteredTreatments.length === 0 && (
          <div className="text-center py-16">
            <div className="w-32 h-32 mx-auto mb-6 bg-gray-100 rounded-full flex items-center justify-center">
              <FiSearch className="w-12 h-12 text-gray-400" />
            </div>
            <h3 className="text-2xl font-medium text-gray-900 mb-4">
              No encontramos tratamientos
            </h3>
            <p className="text-gray-600 mb-6 max-w-md mx-auto">
              Intenta ajustar tus filtros o términos de búsqueda para encontrar más opciones
            </p>
            <div className="flex justify-center space-x-4">
              <Button onClick={clearAllFilters} variant="outline">
                Limpiar todos los filtros
              </Button>
              <Button onClick={() => setIsFilterPanelOpen(true)}>
                Ajustar filtros
              </Button>
            </div>
          </div>
        )}

        {/* Results Grid/List */}
        {filteredTreatments.length > 0 && (
          <div className={viewMode === 'grid' ? 
            'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8' : 
            'space-y-6'
          }>
            {filteredTreatments.map((treatment) => (
              <div
                key={treatment.id}
                className={`bg-white rounded-2xl shadow-sm border border-gray-200 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 ${
                  viewMode === 'list' ? 'flex space-x-6 p-6' : 'overflow-hidden'
                }`}
              >
                {/* Image */}
                <div className={viewMode === 'list' ? 'w-40 h-32 flex-shrink-0' : 'aspect-video'}>
                  <Image
                    src={treatment.image}
                    alt={treatment.name}
                    fill
                    className="object-cover rounded-xl"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                  {treatment.discount && (
                    <div className="absolute top-3 left-3">
                      <Badge className="bg-red-500 text-white">
                        -{treatment.discount}%
                      </Badge>
                    </div>
                  )}
                </div>

                {/* Content */}
                <div className={viewMode === 'list' ? 'flex-1' : 'p-6'}>
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex-1">
                      <h3 className="font-bold text-gray-900 mb-2 text-lg">{treatment.name}</h3>
                      <p className="text-sm text-gray-600 mb-1">{treatment.subcategory}</p>
                      <p className="text-sm text-pink-600 font-medium">{treatment.specialist}</p>
                    </div>
                    <div className="flex flex-col space-y-1 ml-4">
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

                  <p className="text-sm text-gray-600 mb-4 line-clamp-2">{treatment.description}</p>

                  {/* Benefits */}
                  <div className="flex flex-wrap gap-1 mb-4">
                    {treatment.benefits.slice(0, 3).map((benefit) => (
                      <Badge key={benefit} variant="outline" className="text-xs">
                        {benefit}
                      </Badge>
                    ))}
                  </div>

                  {/* Rating and Details */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-4">
                      <div className="flex items-center space-x-1">
                        <FiStar className="w-4 h-4 text-yellow-400 fill-current" />
                        <span className="text-sm font-medium">{treatment.rating}</span>
                        <span className="text-sm text-gray-500">({treatment.reviews})</span>
                      </div>
                      <div className="flex items-center space-x-1 text-sm text-gray-600">
                        <FiClock className="w-4 h-4" />
                        <span>{treatment.duration} min</span>
                      </div>
                    </div>
                    <div className={`px-2 py-1 rounded-full text-xs font-medium ${
                      treatment.availability === 'available' ? 'bg-green-100 text-green-800' :
                      treatment.availability === 'limited' ? 'bg-yellow-100 text-yellow-800' :
                      'bg-red-100 text-red-800'
                    }`}>
                      {treatment.availability === 'available' ? 'Disponible' :
                       treatment.availability === 'limited' ? 'Limitado' : 'Reservado'}
                    </div>
                  </div>

                  {/* Price and Actions */}
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="flex items-center space-x-2">
                        {treatment.originalPrice && (
                          <span className="text-sm text-gray-500 line-through">
                            ${treatment.originalPrice.toLocaleString()}
                          </span>
                        )}
                        <span className="text-lg font-bold text-pink-600">
                          ${treatment.price.toLocaleString()}
                        </span>
                      </div>
                      {treatment.nextAvailable && (
                        <p className="text-xs text-gray-500">
                          Próximo: {treatment.nextAvailable}
                        </p>
                      )}
                    </div>
                    <div className="flex items-center space-x-2">
                      <Button variant="ghost" size="sm">
                        <FiHeart className="w-4 h-4" />
                      </Button>
                      <Button variant="ghost" size="sm">
                        <FiShare2 className="w-4 h-4" />
                      </Button>
                      <Button size="sm" className="bg-pink-600 hover:bg-pink-700">
                        Reservar
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Load More */}
        {filteredTreatments.length > 0 && (
          <div className="mt-12 text-center">
            <Button variant="outline" size="lg" className="px-12">
              Cargar más tratamientos
            </Button>
          </div>
        )}
      </div>
    </div>
  );
}
