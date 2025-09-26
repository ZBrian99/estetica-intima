'use client';

import { useState } from 'react';
import { FiSearch, FiFilter, FiChevronDown, FiGrid, FiList } from 'react-icons/fi';
import { IoClose } from 'react-icons/io5';
import { HiSortAscending } from 'react-icons/hi';

interface FilterOption {
  id: string;
  label: string;
  options: string[];
}

type ViewMode = 'grid' | 'list';
type SortOption = 'relevancia' | 'precio-asc' | 'precio-desc' | 'popularidad' | 'valoracion';

const quickFilters: FilterOption[] = [
  {
    id: 'genero',
    label: 'Género',
    options: ['Femenino', 'Masculino', 'Unisex']
  },
  {
    id: 'tipo',
    label: 'Tipo',
    options: ['Láser', 'Inyectable', 'Quirúrgico', 'Estético']
  },
  {
    id: 'categoria',
    label: 'Categoría',
    options: ['Facial', 'Corporal', 'Íntimo', 'Capilar']
  },
  {
    id: 'precio',
    label: 'Precio',
    options: ['Hasta $50.000', '$50.000 - $100.000', 'Más de $100.000']
  },
  {
    id: 'duracion',
    label: 'Duración',
    options: ['Hasta 30 min', '30-60 min', 'Más de 1 hora']
  }
];

const sortOptions: { value: SortOption; label: string }[] = [
  { value: 'relevancia', label: 'Más relevantes' },
  { value: 'popularidad', label: 'Más populares' },
  { value: 'valoracion', label: 'Mejor valorados' },
  { value: 'precio-asc', label: 'Precio: menor a mayor' },
  { value: 'precio-desc', label: 'Precio: mayor a menor' }
];

export default function SubtopbarFinal_2_Balanceada() {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeFilters, setActiveFilters] = useState<Record<string, string>>({});
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [showAdvancedFilters, setShowAdvancedFilters] = useState(false);
  const [viewMode, setViewMode] = useState<ViewMode>('grid');
  const [sortBy, setSortBy] = useState<SortOption>('relevancia');
  const [resultsCount] = useState(247); // Mock results count

  const handleFilterSelect = (filterId: string, value: string) => {
    setActiveFilters(prev => ({
      ...prev,
      [filterId]: value
    }));
    setOpenDropdown(null);
  };

  const removeFilter = (filterId: string) => {
    setActiveFilters(prev => {
      const newFilters = { ...prev };
      delete newFilters[filterId];
      return newFilters;
    });
  };

  const clearAllFilters = () => {
    setActiveFilters({});
    setSearchQuery('');
  };

  const activeFilterCount = Object.keys(activeFilters).length;
  const getSortLabel = () => sortOptions.find(option => option.value === sortBy)?.label || 'Ordenar';

  return (
    <div className="bg-white border-b border-gray-200">
      {/* Main Subtopbar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="py-4">
          {/* Desktop Layout */}
          <div className="hidden lg:flex items-center gap-4">
            {/* Search Bar */}
            <div className="flex-1 max-w-sm">
              <div className="relative">
                <FiSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Buscar tratamientos..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-rose-500 focus:border-transparent transition-all duration-200"
                />
                {searchQuery && (
                  <button
                    onClick={() => setSearchQuery('')}
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                  >
                    <IoClose className="w-4 h-4" />
                  </button>
                )}
              </div>
            </div>

            {/* Quick Filters */}
            <div className="flex items-center gap-2">
              {quickFilters.map((filter) => (
                <div key={filter.id} className="relative">
                  <button
                    onClick={() => setOpenDropdown(openDropdown === filter.id ? null : filter.id)}
                    className={`px-3 py-2.5 border rounded-lg flex items-center gap-2 text-sm font-medium transition-all duration-200 ${
                      activeFilters[filter.id]
                        ? 'bg-rose-50 border-rose-200 text-rose-700'
                        : 'bg-white border-gray-300 text-gray-700 hover:bg-gray-50'
                    }`}
                  >
                    {activeFilters[filter.id] || filter.label}
                    <FiChevronDown className={`w-4 h-4 transition-transform duration-200 ${
                      openDropdown === filter.id ? 'rotate-180' : ''
                    }`} />
                  </button>

                  {openDropdown === filter.id && (
                    <div className="absolute top-full left-0 mt-1 w-48 bg-white border border-gray-200 rounded-lg shadow-lg z-50">
                      <div className="py-1">
                        {filter.options.map((option) => (
                          <button
                            key={option}
                            onClick={() => handleFilterSelect(filter.id, option)}
                            className="w-full px-4 py-2 text-left text-sm text-gray-700 hover:bg-gray-50 transition-colors duration-150"
                          >
                            {option}
                          </button>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Sort Dropdown */}
            <div className="relative">
              <button
                onClick={() => setOpenDropdown(openDropdown === 'sort' ? null : 'sort')}
                className="px-3 py-2.5 border border-gray-300 rounded-lg flex items-center gap-2 text-sm font-medium text-gray-700 hover:bg-gray-50 transition-all duration-200"
              >
                <HiSortAscending className="w-4 h-4" />
                {getSortLabel()}
                <FiChevronDown className={`w-4 h-4 transition-transform duration-200 ${
                  openDropdown === 'sort' ? 'rotate-180' : ''
                }`} />
              </button>

              {openDropdown === 'sort' && (
                <div className="absolute top-full right-0 mt-1 w-48 bg-white border border-gray-200 rounded-lg shadow-lg z-50">
                  <div className="py-1">
                    {sortOptions.map((option) => (
                      <button
                        key={option.value}
                        onClick={() => {
                          setSortBy(option.value);
                          setOpenDropdown(null);
                        }}
                        className={`w-full px-4 py-2 text-left text-sm transition-colors duration-150 ${
                          sortBy === option.value
                            ? 'bg-rose-50 text-rose-700'
                            : 'text-gray-700 hover:bg-gray-50'
                        }`}
                      >
                        {option.label}
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* More Filters Button */}
            <button
              onClick={() => setShowAdvancedFilters(true)}
              className="px-3 py-2.5 bg-gray-100 border border-gray-300 rounded-lg flex items-center gap-2 text-sm font-medium text-gray-700 hover:bg-gray-200 transition-all duration-200"
            >
              <FiFilter className="w-4 h-4" />
              Más filtros
              {activeFilterCount > 5 && (
                <span className="bg-rose-500 text-white text-xs px-1.5 py-0.5 rounded-full">
                  +{activeFilterCount - 5}
                </span>
              )}
            </button>
          </div>

          {/* Tablet Layout */}
          <div className="hidden md:flex lg:hidden flex-col gap-3">
            {/* First Row: Search + Sort */}
            <div className="flex items-center gap-3">
              <div className="flex-1">
                <div className="relative">
                  <FiSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <input
                    type="text"
                    placeholder="Buscar tratamientos..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full pl-10 pr-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-rose-500 focus:border-transparent"
                  />
                  {searchQuery && (
                    <button
                      onClick={() => setSearchQuery('')}
                      className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                    >
                      <IoClose className="w-4 h-4" />
                    </button>
                  )}
                </div>
              </div>
              
              <div className="relative">
                <button
                  onClick={() => setOpenDropdown(openDropdown === 'sort' ? null : 'sort')}
                  className="px-3 py-2.5 border border-gray-300 rounded-lg flex items-center gap-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
                >
                  <HiSortAscending className="w-4 h-4" />
                  Ordenar
                  <FiChevronDown className={`w-4 h-4 transition-transform duration-200 ${
                    openDropdown === 'sort' ? 'rotate-180' : ''
                  }`} />
                </button>

                {openDropdown === 'sort' && (
                  <div className="absolute top-full right-0 mt-1 w-48 bg-white border border-gray-200 rounded-lg shadow-lg z-50">
                    <div className="py-1">
                      {sortOptions.map((option) => (
                        <button
                          key={option.value}
                          onClick={() => {
                            setSortBy(option.value);
                            setOpenDropdown(null);
                          }}
                          className={`w-full px-4 py-2 text-left text-sm transition-colors duration-150 ${
                            sortBy === option.value
                              ? 'bg-rose-50 text-rose-700'
                              : 'text-gray-700 hover:bg-gray-50'
                          }`}
                        >
                          {option.label}
                        </button>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Second Row: Filters */}
            <div className="flex items-center gap-2 overflow-x-auto pb-1">
              {quickFilters.slice(0, 4).map((filter) => (
                <div key={filter.id} className="relative flex-shrink-0">
                  <button
                    onClick={() => setOpenDropdown(openDropdown === filter.id ? null : filter.id)}
                    className={`px-3 py-2 border rounded-lg flex items-center gap-1.5 text-sm font-medium whitespace-nowrap transition-all duration-200 ${
                      activeFilters[filter.id]
                        ? 'bg-rose-50 border-rose-200 text-rose-700'
                        : 'bg-white border-gray-300 text-gray-700'
                    }`}
                  >
                    {activeFilters[filter.id] || filter.label}
                    <FiChevronDown className={`w-3 h-3 transition-transform duration-200 ${
                      openDropdown === filter.id ? 'rotate-180' : ''
                    }`} />
                  </button>

                  {openDropdown === filter.id && (
                    <div className="absolute top-full left-0 mt-1 w-44 bg-white border border-gray-200 rounded-lg shadow-lg z-50">
                      <div className="py-1">
                        {filter.options.map((option) => (
                          <button
                            key={option}
                            onClick={() => handleFilterSelect(filter.id, option)}
                            className="w-full px-3 py-2 text-left text-sm text-gray-700 hover:bg-gray-50"
                          >
                            {option}
                          </button>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ))}
              
              <button
                onClick={() => setShowAdvancedFilters(true)}
                className="flex-shrink-0 px-3 py-2 bg-gray-100 border border-gray-300 rounded-lg flex items-center gap-1.5 text-sm font-medium text-gray-700 whitespace-nowrap"
              >
                <FiFilter className="w-3 h-3" />
                Más filtros
              </button>
            </div>
          </div>

          {/* Mobile Layout */}
          <div className="md:hidden space-y-3">
            {/* Search Bar */}
            <div className="relative">
              <FiSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Buscar tratamientos..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-rose-500 focus:border-transparent text-base"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                >
                  <IoClose className="w-5 h-5" />
                </button>
              )}
            </div>

            {/* Filters and Sort Row */}
            <div className="flex items-center gap-2 overflow-x-auto pb-1">
              {quickFilters.slice(0, 3).map((filter) => (
                <div key={filter.id} className="relative flex-shrink-0">
                  <button
                    onClick={() => setOpenDropdown(openDropdown === filter.id ? null : filter.id)}
                    className={`px-3 py-2 border rounded-lg flex items-center gap-1.5 text-sm font-medium whitespace-nowrap transition-all duration-200 ${
                      activeFilters[filter.id]
                        ? 'bg-rose-50 border-rose-200 text-rose-700'
                        : 'bg-white border-gray-300 text-gray-700'
                    }`}
                  >
                    {activeFilters[filter.id] || filter.label}
                    <FiChevronDown className={`w-3 h-3 transition-transform duration-200 ${
                      openDropdown === filter.id ? 'rotate-180' : ''
                    }`} />
                  </button>

                  {openDropdown === filter.id && (
                    <div className="absolute top-full left-0 mt-1 w-40 bg-white border border-gray-200 rounded-lg shadow-lg z-50">
                      <div className="py-1">
                        {filter.options.map((option) => (
                          <button
                            key={option}
                            onClick={() => handleFilterSelect(filter.id, option)}
                            className="w-full px-3 py-2 text-left text-sm text-gray-700 hover:bg-gray-50"
                          >
                            {option}
                          </button>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ))}
              
              <div className="relative flex-shrink-0">
                <button
                  onClick={() => setOpenDropdown(openDropdown === 'sort' ? null : 'sort')}
                  className="px-3 py-2 border border-gray-300 rounded-lg flex items-center gap-1.5 text-sm font-medium text-gray-700 whitespace-nowrap"
                >
                  <HiSortAscending className="w-3 h-3" />
                  Ordenar
                  <FiChevronDown className={`w-3 h-3 transition-transform duration-200 ${
                    openDropdown === 'sort' ? 'rotate-180' : ''
                  }`} />
                </button>

                {openDropdown === 'sort' && (
                  <div className="absolute top-full right-0 mt-1 w-44 bg-white border border-gray-200 rounded-lg shadow-lg z-50">
                    <div className="py-1">
                      {sortOptions.map((option) => (
                        <button
                          key={option.value}
                          onClick={() => {
                            setSortBy(option.value);
                            setOpenDropdown(null);
                          }}
                          className={`w-full px-3 py-2 text-left text-sm transition-colors duration-150 ${
                            sortBy === option.value
                              ? 'bg-rose-50 text-rose-700'
                              : 'text-gray-700 hover:bg-gray-50'
                          }`}
                        >
                          {option.label}
                        </button>
                      ))}
                    </div>
                  </div>
                )}
              </div>
              
              <button
                onClick={() => setShowAdvancedFilters(true)}
                className="flex-shrink-0 px-3 py-2 bg-gray-100 border border-gray-300 rounded-lg flex items-center gap-1.5 text-sm font-medium text-gray-700 whitespace-nowrap"
              >
                <FiFilter className="w-3 h-3" />
                Más filtros
              </button>
            </div>
          </div>
        </div>

        {/* Results Summary Bar */}
        <div className="pb-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <span className="text-sm text-gray-600">
                {resultsCount.toLocaleString()} tratamientos encontrados
              </span>
              
              {/* Active Filters */}
              {activeFilterCount > 0 && (
                <div className="flex items-center gap-2">
                  <span className="text-sm text-gray-500">•</span>
                  <div className="flex items-center gap-1 flex-wrap">
                    {Object.entries(activeFilters).slice(0, 3).map(([filterId, value]) => (
                      <span
                        key={filterId}
                        className="inline-flex items-center gap-1 px-2 py-1 bg-rose-100 text-rose-700 text-xs rounded-full"
                      >
                        {value}
                        <button
                          onClick={() => removeFilter(filterId)}
                          className="hover:text-rose-900"
                        >
                          <IoClose className="w-3 h-3" />
                        </button>
                      </span>
                    ))}
                    {activeFilterCount > 3 && (
                      <span className="text-xs text-gray-500">
                        +{activeFilterCount - 3} más
                      </span>
                    )}
                  </div>
                  <button
                    onClick={clearAllFilters}
                    className="text-xs text-gray-500 hover:text-gray-700 underline ml-2"
                  >
                    Limpiar
                  </button>
                </div>
              )}
            </div>

            {/* View Mode Toggle - Desktop only */}
            <div className="hidden lg:flex items-center gap-1 bg-gray-100 rounded-lg p-1">
              <button
                onClick={() => setViewMode('grid')}
                className={`p-2 rounded-md transition-all duration-200 ${
                  viewMode === 'grid'
                    ? 'bg-white text-gray-900 shadow-sm'
                    : 'text-gray-500 hover:text-gray-700'
                }`}
              >
                <FiGrid className="w-4 h-4" />
              </button>
              <button
                onClick={() => setViewMode('list')}
                className={`p-2 rounded-md transition-all duration-200 ${
                  viewMode === 'list'
                    ? 'bg-white text-gray-900 shadow-sm'
                    : 'text-gray-500 hover:text-gray-700'
                }`}
              >
                <FiList className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Click outside to close dropdowns */}
      {openDropdown && (
        <div
          className="fixed inset-0 z-40"
          onClick={() => setOpenDropdown(null)}
        />
      )}

      {/* Advanced Filters Modal */}
      {showAdvancedFilters && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-lg max-w-3xl w-full max-h-[80vh] overflow-y-auto">
            <div className="p-6">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-semibold text-gray-900">
                  Filtros Avanzados
                </h3>
                <button
                  onClick={() => setShowAdvancedFilters(false)}
                  className="text-gray-400 hover:text-gray-600"
                >
                  <IoClose className="w-6 h-6" />
                </button>
              </div>
              <div className="text-center py-12 text-gray-500">
                <FiFilter className="w-16 h-16 mx-auto mb-4 text-gray-300" />
                <p className="text-lg mb-2">Filtros avanzados se implementarían aquí</p>
                <p className="text-sm">
                  Valoración, Disponibilidad, Especialista, Beneficios, Ubicación, etc.
                </p>
              </div>
              <div className="flex justify-end gap-3 mt-6">
                <button
                  onClick={() => setShowAdvancedFilters(false)}
                  className="px-6 py-2 text-gray-700 border border-gray-300 rounded-lg hover:bg-gray-50"
                >
                  Cancelar
                </button>
                <button
                  onClick={() => setShowAdvancedFilters(false)}
                  className="px-6 py-2 bg-rose-500 text-white rounded-lg hover:bg-rose-600"
                >
                  Aplicar Filtros
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}