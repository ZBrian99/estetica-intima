'use client';

import { useState } from 'react';
import { FiSearch, FiFilter, FiChevronDown, FiGrid, FiList, FiMapPin, FiClock, FiStar, FiTrendingUp, FiUsers, FiDollarSign } from 'react-icons/fi';
import { IoClose } from 'react-icons/io5';
import { HiSortAscending, HiOutlineAdjustments } from 'react-icons/hi';
import { BsCalendar3, BsBookmark, BsShare } from 'react-icons/bs';

interface FilterOption {
  id: string;
  label: string;
  options: string[];
  icon?: React.ReactNode;
}

type ViewMode = 'grid' | 'list' | 'map';
type SortOption = 'relevancia' | 'precio-asc' | 'precio-desc' | 'popularidad' | 'valoracion' | 'distancia' | 'disponibilidad' | 'novedad';

const quickFilters: FilterOption[] = [
  {
    id: 'genero',
    label: 'Género',
    options: ['Femenino', 'Masculino', 'Unisex'],
    icon: <FiUsers className="w-4 h-4" />
  },
  {
    id: 'tipo',
    label: 'Tipo',
    options: ['Láser', 'Inyectable', 'Quirúrgico', 'Estético', 'Corporal', 'Facial'],
    icon: <HiOutlineAdjustments className="w-4 h-4" />
  },
  {
    id: 'categoria',
    label: 'Categoría',
    options: ['Facial', 'Corporal', 'Íntimo', 'Capilar', 'Rejuvenecimiento', 'Modelado'],
    icon: <FiFilter className="w-4 h-4" />
  },
  {
    id: 'precio',
    label: 'Precio',
    options: ['Hasta $25.000', '$25.000 - $50.000', '$50.000 - $100.000', '$100.000 - $200.000', 'Más de $200.000'],
    icon: <FiDollarSign className="w-4 h-4" />
  },
  {
    id: 'duracion',
    label: 'Duración',
    options: ['15-30 min', '30-60 min', '1-2 horas', '2-4 horas', 'Más de 4 horas'],
    icon: <FiClock className="w-4 h-4" />
  },
  {
    id: 'valoracion',
    label: 'Valoración',
    options: ['5 estrellas', '4+ estrellas', '3+ estrellas', 'Todas'],
    icon: <FiStar className="w-4 h-4" />
  },
  {
    id: 'ubicacion',
    label: 'Ubicación',
    options: ['Cerca de mí', 'Centro', 'Norte', 'Sur', 'Este', 'Oeste'],
    icon: <FiMapPin className="w-4 h-4" />
  },
  {
    id: 'disponibilidad',
    label: 'Disponibilidad',
    options: ['Hoy', 'Esta semana', 'Este mes', 'Próximos 3 meses'],
    icon: <BsCalendar3 className="w-4 h-4" />
  }
];

const sortOptions: { value: SortOption; label: string; icon: React.ReactNode }[] = [
  { value: 'relevancia', label: 'Más relevantes', icon: <FiTrendingUp className="w-4 h-4" /> },
  { value: 'popularidad', label: 'Más populares', icon: <FiUsers className="w-4 h-4" /> },
  { value: 'valoracion', label: 'Mejor valorados', icon: <FiStar className="w-4 h-4" /> },
  { value: 'precio-asc', label: 'Precio: menor a mayor', icon: <FiDollarSign className="w-4 h-4" /> },
  { value: 'precio-desc', label: 'Precio: mayor a menor', icon: <FiDollarSign className="w-4 h-4" /> },
  { value: 'distancia', label: 'Más cercanos', icon: <FiMapPin className="w-4 h-4" /> },
  { value: 'disponibilidad', label: 'Disponibilidad', icon: <BsCalendar3 className="w-4 h-4" /> },
  { value: 'novedad', label: 'Más recientes', icon: <FiClock className="w-4 h-4" /> }
];

export default function SubtopbarFinal_3_Completa() {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchSuggestions, setSearchSuggestions] = useState<string[]>([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [activeFilters, setActiveFilters] = useState<Record<string, string>>({});
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [showAdvancedFilters, setShowAdvancedFilters] = useState(false);
  const [viewMode, setViewMode] = useState<ViewMode>('grid');
  const [sortBy, setSortBy] = useState<SortOption>('relevancia');
  const [resultsCount] = useState(1247); // Mock results count
  const [savedSearches] = useState(['Botox facial', 'Depilación láser', 'Lifting']);
  const [isAdvancedSearch, setIsAdvancedSearch] = useState(false);

  // Mock suggestions
  const mockSuggestions = [
    'Botox facial',
    'Depilación láser',
    'Lifting facial',
    'Rellenos labiales',
    'Tratamiento corporal',
    'Rejuvenecimiento'
  ];

  const handleSearchChange = (value: string) => {
    setSearchQuery(value);
    if (value.length > 2) {
      const filtered = mockSuggestions.filter(s => 
        s.toLowerCase().includes(value.toLowerCase())
      );
      setSearchSuggestions(filtered);
      setShowSuggestions(true);
    } else {
      setShowSuggestions(false);
    }
  };

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
  const getSortIcon = () => sortOptions.find(option => option.value === sortBy)?.icon;

  return (
    <div className="bg-white border-b border-gray-200">
      {/* Main Subtopbar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="py-4">
          {/* Desktop Layout */}
          <div className="hidden xl:flex items-center gap-3">
            {/* Advanced Search Bar */}
            <div className="flex-1 max-w-md">
              <div className="relative">
                <div className="flex">
                  <div className="relative flex-1">
                    <FiSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                    <input
                      type="text"
                      placeholder={isAdvancedSearch ? "Búsqueda avanzada..." : "Buscar tratamientos..."}
                      value={searchQuery}
                      onChange={(e) => handleSearchChange(e.target.value)}
                      onFocus={() => setShowSuggestions(searchQuery.length > 2)}
                      className={`w-full pl-10 pr-4 py-2.5 border rounded-l-lg focus:ring-2 focus:ring-rose-500 focus:border-transparent transition-all duration-200 ${
                        isAdvancedSearch ? 'border-rose-300 bg-rose-50' : 'border-gray-300'
                      }`}
                    />
                    {searchQuery && (
                      <button
                        onClick={() => {
                          setSearchQuery('');
                          setShowSuggestions(false);
                        }}
                        className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                      >
                        <IoClose className="w-4 h-4" />
                      </button>
                    )}
                  </div>
                  <button
                    onClick={() => setIsAdvancedSearch(!isAdvancedSearch)}
                    className={`px-3 border-t border-r border-b rounded-r-lg transition-all duration-200 ${
                      isAdvancedSearch
                        ? 'bg-rose-500 text-white border-rose-500'
                        : 'bg-gray-50 text-gray-600 border-gray-300 hover:bg-gray-100'
                    }`}
                  >
                    <HiOutlineAdjustments className="w-4 h-4" />
                  </button>
                </div>

                {/* Search Suggestions */}
                {showSuggestions && searchSuggestions.length > 0 && (
                  <div className="absolute top-full left-0 right-0 mt-1 bg-white border border-gray-200 rounded-lg shadow-lg z-50">
                    <div className="py-2">
                      {searchSuggestions.map((suggestion, index) => (
                        <button
                          key={index}
                          onClick={() => {
                            setSearchQuery(suggestion);
                            setShowSuggestions(false);
                          }}
                          className="w-full px-4 py-2 text-left text-sm text-gray-700 hover:bg-gray-50 flex items-center gap-2"
                        >
                          <FiSearch className="w-4 h-4 text-gray-400" />
                          {suggestion}
                        </button>
                      ))}
                    </div>
                    {savedSearches.length > 0 && (
                      <>
                        <div className="border-t border-gray-100 px-4 py-2">
                          <span className="text-xs font-medium text-gray-500 uppercase tracking-wide">
                            Búsquedas guardadas
                          </span>
                        </div>
                        <div className="pb-2">
                          {savedSearches.map((saved, index) => (
                            <button
                              key={index}
                              onClick={() => {
                                setSearchQuery(saved);
                                setShowSuggestions(false);
                              }}
                              className="w-full px-4 py-2 text-left text-sm text-gray-700 hover:bg-gray-50 flex items-center gap-2"
                            >
                              <BsBookmark className="w-4 h-4 text-gray-400" />
                              {saved}
                            </button>
                          ))}
                        </div>
                      </>
                    )}
                  </div>
                )}
              </div>
            </div>

            {/* Quick Filters */}
            <div className="flex items-center gap-2 overflow-x-auto">
              {quickFilters.slice(0, 6).map((filter) => (
                <div key={filter.id} className="relative flex-shrink-0">
                  <button
                    onClick={() => setOpenDropdown(openDropdown === filter.id ? null : filter.id)}
                    className={`px-3 py-2.5 border rounded-lg flex items-center gap-2 text-sm font-medium transition-all duration-200 whitespace-nowrap ${
                      activeFilters[filter.id]
                        ? 'bg-rose-50 border-rose-200 text-rose-700'
                        : 'bg-white border-gray-300 text-gray-700 hover:bg-gray-50'
                    }`}
                  >
                    {filter.icon}
                    {activeFilters[filter.id] || filter.label}
                    <FiChevronDown className={`w-4 h-4 transition-transform duration-200 ${
                      openDropdown === filter.id ? 'rotate-180' : ''
                    }`} />
                  </button>

                  {openDropdown === filter.id && (
                    <div className="absolute top-full left-0 mt-1 w-52 bg-white border border-gray-200 rounded-lg shadow-lg z-50">
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
            <div className="relative flex-shrink-0">
              <button
                onClick={() => setOpenDropdown(openDropdown === 'sort' ? null : 'sort')}
                className="px-3 py-2.5 border border-gray-300 rounded-lg flex items-center gap-2 text-sm font-medium text-gray-700 hover:bg-gray-50 transition-all duration-200 whitespace-nowrap"
              >
                {getSortIcon()}
                {getSortLabel()}
                <FiChevronDown className={`w-4 h-4 transition-transform duration-200 ${
                  openDropdown === 'sort' ? 'rotate-180' : ''
                }`} />
              </button>

              {openDropdown === 'sort' && (
                <div className="absolute top-full right-0 mt-1 w-56 bg-white border border-gray-200 rounded-lg shadow-lg z-50">
                  <div className="py-1">
                    {sortOptions.map((option) => (
                      <button
                        key={option.value}
                        onClick={() => {
                          setSortBy(option.value);
                          setOpenDropdown(null);
                        }}
                        className={`w-full px-4 py-2 text-left text-sm transition-colors duration-150 flex items-center gap-2 ${
                          sortBy === option.value
                            ? 'bg-rose-50 text-rose-700'
                            : 'text-gray-700 hover:bg-gray-50'
                        }`}
                      >
                        {option.icon}
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
              className="flex-shrink-0 px-3 py-2.5 bg-gray-100 border border-gray-300 rounded-lg flex items-center gap-2 text-sm font-medium text-gray-700 hover:bg-gray-200 transition-all duration-200 whitespace-nowrap"
            >
              <FiFilter className="w-4 h-4" />
              Más filtros
              {activeFilterCount > 6 && (
                <span className="bg-rose-500 text-white text-xs px-1.5 py-0.5 rounded-full">
                  +{activeFilterCount - 6}
                </span>
              )}
            </button>
          </div>

          {/* Tablet Layout */}
          <div className="hidden md:flex xl:hidden flex-col gap-3">
            {/* First Row: Search + Sort */}
            <div className="flex items-center gap-3">
              <div className="flex-1">
                <div className="relative">
                  <div className="flex">
                    <div className="relative flex-1">
                      <FiSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                      <input
                        type="text"
                        placeholder="Buscar tratamientos..."
                        value={searchQuery}
                        onChange={(e) => handleSearchChange(e.target.value)}
                        className="w-full pl-10 pr-4 py-2.5 border border-gray-300 rounded-l-lg focus:ring-2 focus:ring-rose-500 focus:border-transparent"
                      />
                    </div>
                    <button
                      onClick={() => setIsAdvancedSearch(!isAdvancedSearch)}
                      className={`px-3 border-t border-r border-b border-gray-300 rounded-r-lg transition-all duration-200 ${
                        isAdvancedSearch
                          ? 'bg-rose-500 text-white'
                          : 'bg-gray-50 text-gray-600 hover:bg-gray-100'
                      }`}
                    >
                      <HiOutlineAdjustments className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
              
              <div className="relative">
                <button
                  onClick={() => setOpenDropdown(openDropdown === 'sort' ? null : 'sort')}
                  className="px-3 py-2.5 border border-gray-300 rounded-lg flex items-center gap-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
                >
                  {getSortIcon()}
                  Ordenar
                  <FiChevronDown className={`w-4 h-4 transition-transform duration-200 ${
                    openDropdown === 'sort' ? 'rotate-180' : ''
                  }`} />
                </button>

                {openDropdown === 'sort' && (
                  <div className="absolute top-full right-0 mt-1 w-52 bg-white border border-gray-200 rounded-lg shadow-lg z-50">
                    <div className="py-1">
                      {sortOptions.map((option) => (
                        <button
                          key={option.value}
                          onClick={() => {
                            setSortBy(option.value);
                            setOpenDropdown(null);
                          }}
                          className={`w-full px-4 py-2 text-left text-sm transition-colors duration-150 flex items-center gap-2 ${
                            sortBy === option.value
                              ? 'bg-rose-50 text-rose-700'
                              : 'text-gray-700 hover:bg-gray-50'
                          }`}
                        >
                          {option.icon}
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
              {quickFilters.slice(0, 5).map((filter) => (
                <div key={filter.id} className="relative flex-shrink-0">
                  <button
                    onClick={() => setOpenDropdown(openDropdown === filter.id ? null : filter.id)}
                    className={`px-3 py-2 border rounded-lg flex items-center gap-1.5 text-sm font-medium whitespace-nowrap transition-all duration-200 ${
                      activeFilters[filter.id]
                        ? 'bg-rose-50 border-rose-200 text-rose-700'
                        : 'bg-white border-gray-300 text-gray-700'
                    }`}
                  >
                    {filter.icon}
                    {activeFilters[filter.id] || filter.label}
                    <FiChevronDown className={`w-3 h-3 transition-transform duration-200 ${
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
              <div className="flex">
                <div className="relative flex-1">
                  <FiSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <input
                    type="text"
                    placeholder="Buscar tratamientos..."
                    value={searchQuery}
                    onChange={(e) => handleSearchChange(e.target.value)}
                    className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-l-lg focus:ring-2 focus:ring-rose-500 focus:border-transparent text-base"
                  />
                </div>
                <button
                  onClick={() => setIsAdvancedSearch(!isAdvancedSearch)}
                  className={`px-4 border-t border-r border-b border-gray-300 rounded-r-lg transition-all duration-200 ${
                    isAdvancedSearch
                      ? 'bg-rose-500 text-white'
                      : 'bg-gray-50 text-gray-600'
                  }`}
                >
                  <HiOutlineAdjustments className="w-5 h-5" />
                </button>
              </div>
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
                    {filter.icon}
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
              
              <div className="relative flex-shrink-0">
                <button
                  onClick={() => setOpenDropdown(openDropdown === 'sort' ? null : 'sort')}
                  className="px-3 py-2 border border-gray-300 rounded-lg flex items-center gap-1.5 text-sm font-medium text-gray-700 whitespace-nowrap"
                >
                  {getSortIcon()}
                  Ordenar
                  <FiChevronDown className={`w-3 h-3 transition-transform duration-200 ${
                    openDropdown === 'sort' ? 'rotate-180' : ''
                  }`} />
                </button>

                {openDropdown === 'sort' && (
                  <div className="absolute top-full right-0 mt-1 w-48 bg-white border border-gray-200 rounded-lg shadow-lg z-50">
                    <div className="py-1">
                      {sortOptions.slice(0, 5).map((option) => (
                        <button
                          key={option.value}
                          onClick={() => {
                            setSortBy(option.value);
                            setOpenDropdown(null);
                          }}
                          className={`w-full px-3 py-2 text-left text-sm transition-colors duration-150 flex items-center gap-2 ${
                            sortBy === option.value
                              ? 'bg-rose-50 text-rose-700'
                              : 'text-gray-700 hover:bg-gray-50'
                          }`}
                        >
                          {option.icon}
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

        {/* Enhanced Results Summary Bar */}
        <div className="pb-4">
          <div className="flex items-center justify-between flex-wrap gap-4">
            <div className="flex items-center gap-4 flex-wrap">
              {/* Results Count */}
              <div className="flex items-center gap-2">
                <span className="text-sm font-medium text-gray-900">
                  {resultsCount.toLocaleString()} tratamientos
                </span>
                <span className="text-sm text-gray-500">•</span>
                <span className="text-sm text-gray-600">
                  {Math.ceil(resultsCount / 20)} páginas
                </span>
              </div>
              
              {/* Active Filters */}
              {activeFilterCount > 0 && (
                <div className="flex items-center gap-2">
                  <span className="text-sm text-gray-500">•</span>
                  <div className="flex items-center gap-1 flex-wrap">
                    {Object.entries(activeFilters).slice(0, 4).map(([filterId, value]) => (
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
                    {activeFilterCount > 4 && (
                      <span className="text-xs text-gray-500">
                        +{activeFilterCount - 4} más
                      </span>
                    )}
                  </div>
                  <button
                    onClick={clearAllFilters}
                    className="text-xs text-gray-500 hover:text-gray-700 underline ml-2"
                  >
                    Limpiar todo
                  </button>
                </div>
              )}

              {/* Quick Stats */}
              <div className="hidden lg:flex items-center gap-4 text-xs text-gray-500">
                <span className="flex items-center gap-1">
                  <FiStar className="w-3 h-3" />
                  4.8 promedio
                </span>
                <span className="flex items-center gap-1">
                  <FiDollarSign className="w-3 h-3" />
                  $45.000 - $180.000
                </span>
                <span className="flex items-center gap-1">
                  <FiMapPin className="w-3 h-3" />
                  15 ubicaciones
                </span>
              </div>
            </div>

            {/* View Controls */}
            <div className="flex items-center gap-3">
              {/* Save Search */}
              <button className="hidden lg:flex items-center gap-1 px-3 py-1.5 text-xs text-gray-600 hover:text-gray-800 border border-gray-300 rounded-md hover:bg-gray-50">
                <BsBookmark className="w-3 h-3" />
                Guardar
              </button>

              {/* Share */}
              <button className="hidden lg:flex items-center gap-1 px-3 py-1.5 text-xs text-gray-600 hover:text-gray-800 border border-gray-300 rounded-md hover:bg-gray-50">
                <BsShare className="w-3 h-3" />
                Compartir
              </button>

              {/* View Mode Toggle */}
              <div className="flex items-center gap-1 bg-gray-100 rounded-lg p-1">
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
                <button
                  onClick={() => setViewMode('map')}
                  className={`p-2 rounded-md transition-all duration-200 ${
                    viewMode === 'map'
                      ? 'bg-white text-gray-900 shadow-sm'
                      : 'text-gray-500 hover:text-gray-700'
                  }`}
                >
                  <FiMapPin className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Click outside to close dropdowns */}
      {(openDropdown || showSuggestions) && (
        <div
          className="fixed inset-0 z-40"
          onClick={() => {
            setOpenDropdown(null);
            setShowSuggestions(false);
          }}
        />
      )}

      {/* Advanced Filters Modal */}
      {showAdvancedFilters && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-lg max-w-4xl w-full max-h-[85vh] overflow-y-auto">
            <div className="p-6">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-xl font-semibold text-gray-900">
                  Filtros Avanzados
                </h3>
                <button
                  onClick={() => setShowAdvancedFilters(false)}
                  className="text-gray-400 hover:text-gray-600"
                >
                  <IoClose className="w-6 h-6" />
                </button>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {quickFilters.map((filter) => (
                  <div key={filter.id} className="space-y-2">
                    <label className="flex items-center gap-2 text-sm font-medium text-gray-700">
                      {filter.icon}
                      {filter.label}
                    </label>
                    <select className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-rose-500 focus:border-transparent">
                      <option value="">Seleccionar...</option>
                      {filter.options.map((option) => (
                        <option key={option} value={option}>
                          {option}
                        </option>
                      ))}
                    </select>
                  </div>
                ))}
              </div>
              
              <div className="flex justify-between items-center mt-8 pt-6 border-t border-gray-200">
                <div className="text-sm text-gray-600">
                  {activeFilterCount} filtros activos
                </div>
                <div className="flex gap-3">
                  <button
                    onClick={clearAllFilters}
                    className="px-6 py-2 text-gray-700 border border-gray-300 rounded-lg hover:bg-gray-50"
                  >
                    Limpiar todo
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
        </div>
      )}
    </div>
  );
}