'use client';

import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList } from '@/components/ui/command';
import { FiSearch, FiFilter, FiGrid, FiList, FiChevronDown, FiX, FiSliders, FiTag, FiDollarSign, FiClock, FiStar } from 'react-icons/fi';

const ShopSubbarProposals = () => {
  const [activeFilters, setActiveFilters] = useState<string[]>([]);
  const [sortBy, setSortBy] = useState('popular');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');

  const quickFilters = [
    { id: 'popular', label: 'Más Populares', icon: FiStar },
    { id: 'offers', label: 'En Oferta', icon: FiTag, count: 12 },
    { id: 'new', label: 'Nuevos', icon: FiClock },
    { id: 'premium', label: 'Premium', icon: FiDollarSign }
  ];

  const categories = [
    'Depilación Láser',
    'Tratamientos Corporales', 
    'Tratamientos Faciales',
    'Estética Integral'
  ];

  const sortOptions = [
    { value: 'popular', label: 'Más Populares' },
    { value: 'price-low', label: 'Precio: Menor a Mayor' },
    { value: 'price-high', label: 'Precio: Mayor a Menor' },
    { value: 'newest', label: 'Más Recientes' },
    { value: 'rating', label: 'Mejor Valorados' }
  ];

  const proposals = [
    {
      id: 'subbar-compact',
      name: 'Subbar Compacta',
      description: 'Barra horizontal debajo del navbar principal',
      component: (
        <div className="w-full border-b bg-gray-50/80 backdrop-blur-sm">
          <div className="container mx-auto px-4">
            <div className="flex h-12 items-center justify-between">
              {/* Search */}
              <div className="flex items-center space-x-3">
                <div className="relative">
                  <FiSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                  <input 
                    type="text" 
                    placeholder="Buscar tratamientos..."
                    className="pl-10 pr-4 py-2 text-sm border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-violet-500 focus:border-transparent w-64"
                  />
                </div>
                
                {/* Quick Filters */}
                <div className="flex items-center space-x-2">
                  {quickFilters.slice(0, 3).map((filter) => {
                    const IconComponent = filter.icon;
                    return (
                      <Button key={filter.id} variant="outline" size="sm" className="h-8 text-xs px-3 border-gray-200">
                        <IconComponent className="w-3 h-3 mr-1" />
                        {filter.label}
                        {filter.count && <Badge className="ml-1 text-xs bg-violet-600">{filter.count}</Badge>}
                      </Button>
                    );
                  })}
                </div>
              </div>
              
              {/* Controls */}
              <div className="flex items-center space-x-3">
                <Sheet>
                  <SheetTrigger asChild>
                    <Button variant="outline" size="sm" className="h-8 text-xs px-3">
                      <FiSliders className="w-3 h-3 mr-1" />
                      Filtros
                    </Button>
                  </SheetTrigger>
                  <SheetContent side="right" className="w-80">
                    <SheetHeader>
                      <SheetTitle>Filtros Avanzados</SheetTitle>
                    </SheetHeader>
                    <div className="mt-4 space-y-4">
                      <div>
                        <h4 className="font-medium text-sm mb-2">Categorías</h4>
                        <div className="space-y-2">
                          {categories.map((category) => (
                            <label key={category} className="flex items-center space-x-2 text-sm">
                              <input type="checkbox" className="rounded" />
                              <span>{category}</span>
                            </label>
                          ))}
                        </div>
                      </div>
                    </div>
                  </SheetContent>
                </Sheet>
                
                <Popover>
                  <PopoverTrigger asChild>
                    <Button variant="outline" size="sm" className="h-8 text-xs px-3">
                      Ordenar <FiChevronDown className="w-3 h-3 ml-1" />
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-48 p-2">
                    <div className="space-y-1">
                      {sortOptions.map((option) => (
                        <button key={option.value} className="w-full text-left px-2 py-1 text-sm hover:bg-gray-100 rounded">
                          {option.label}
                        </button>
                      ))}
                    </div>
                  </PopoverContent>
                </Popover>
                
                <div className="flex items-center border border-gray-200 rounded">
                  <Button variant={viewMode === 'grid' ? 'default' : 'ghost'} size="sm" className="h-8 w-8 p-0">
                    <FiGrid className="w-3 h-3" />
                  </Button>
                  <Button variant={viewMode === 'list' ? 'default' : 'ghost'} size="sm" className="h-8 w-8 p-0">
                    <FiList className="w-3 h-3" />
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      ),
      pros: ['Siempre visible', 'Acceso rápido a búsqueda', 'Compacta'],
      cons: ['Ocupa espacio vertical', 'Limitada en móviles'],
      bestFor: 'Tiendas con muchos productos y necesidad de filtrado constante'
    },
    {
      id: 'integrated-navbar',
      name: 'Integrada en Navbar',
      description: 'Búsqueda y filtros integrados en la navbar principal',
      component: (
        <div className="w-full border-b bg-white">
          <div className="container mx-auto px-4">
            <div className="flex h-16 items-center justify-between">
              {/* Brand */}
              <div className="flex items-center space-x-3">
                <div className="h-8 w-8 rounded-full bg-violet-600 flex items-center justify-center">
                  <span className="text-white font-semibold text-sm">Í</span>
                </div>
                <span className="font-semibold text-lg">Íntima Estética</span>
              </div>
              
              {/* Integrated Search */}
              <div className="flex-1 max-w-md mx-8">
                <div className="relative">
                  <FiSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                  <input 
                    type="text" 
                    placeholder="Buscar tratamientos, promociones..."
                    className="w-full pl-10 pr-4 py-2 text-sm border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-violet-500"
                  />
                </div>
              </div>
              
              {/* Actions */}
              <div className="flex items-center space-x-2">
                <Popover>
                  <PopoverTrigger asChild>
                    <Button variant="outline" size="sm" className="text-xs px-3">
                      <FiFilter className="w-3 h-3 mr-1" />
                      Filtros
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-64 p-4">
                    <div className="space-y-3">
                      <h4 className="font-medium text-sm">Filtros Rápidos</h4>
                      <div className="flex flex-wrap gap-2">
                        {quickFilters.map((filter) => (
                          <Button key={filter.id} variant="outline" size="sm" className="text-xs">
                            {filter.label}
                          </Button>
                        ))}
                      </div>
                    </div>
                  </PopoverContent>
                </Popover>
                
                <Button className="bg-violet-600 hover:bg-violet-700 text-sm px-4">
                  Reservar
                </Button>
              </div>
            </div>
          </div>
        </div>
      ),
      pros: ['Ahorra espacio vertical', 'Diseño limpio', 'Siempre accesible'],
      cons: ['Puede saturar la navbar', 'Menos espacio para otros elementos'],
      bestFor: 'Sitios que priorizan el diseño limpio y tienen pocos productos'
    },
    {
      id: 'floating-controls',
      name: 'Controles Flotantes',
      description: 'Botones flotantes para búsqueda y filtros',
      component: (
        <div className="relative w-full h-32 bg-gray-50 rounded-lg overflow-hidden">
          {/* Simulated content */}
          <div className="p-4">
            <div className="grid grid-cols-3 gap-4">
              {[1,2,3,4,5,6].map((i) => (
                <div key={i} className="h-16 bg-white rounded border"></div>
              ))}
            </div>
          </div>
          
          {/* Floating Controls */}
          <div className="absolute top-4 right-4 flex flex-col space-y-2">
            <Button size="sm" className="bg-white border shadow-lg hover:shadow-xl transition-shadow">
              <FiSearch className="w-4 h-4 text-gray-600" />
            </Button>
            <Button size="sm" className="bg-white border shadow-lg hover:shadow-xl transition-shadow">
              <FiFilter className="w-4 h-4 text-gray-600" />
            </Button>
            <Button size="sm" className="bg-violet-600 text-white shadow-lg hover:shadow-xl transition-shadow">
              <FiSliders className="w-4 h-4" />
            </Button>
          </div>
          
          {/* Floating Search Bar (when activated) */}
          <div className="absolute bottom-4 left-4 right-16">
            <div className="bg-white border shadow-lg rounded-lg p-3">
              <div className="flex items-center space-x-2">
                <FiSearch className="w-4 h-4 text-gray-400" />
                <input 
                  type="text" 
                  placeholder="Buscar..."
                  className="flex-1 text-sm focus:outline-none"
                />
                <Button size="sm" variant="ghost" className="p-1">
                  <FiX className="w-3 h-3" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      ),
      pros: ['No ocupa espacio fijo', 'Moderno y elegante', 'Flexible'],
      cons: ['Puede ocultar contenido', 'Menos descubrible'],
      bestFor: 'Diseños modernos que priorizan la experiencia visual'
    },
    {
      id: 'sidebar-filters',
      name: 'Sidebar de Filtros',
      description: 'Panel lateral con todos los filtros y búsqueda',
      component: (
        <div className="flex w-full h-64 bg-gray-50 rounded-lg overflow-hidden">
          {/* Sidebar */}
          <div className="w-64 bg-white border-r p-4">
            <div className="space-y-4">
              <div>
                <h4 className="font-medium text-sm mb-2">Buscar</h4>
                <div className="relative">
                  <FiSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                  <input 
                    type="text" 
                    placeholder="Buscar..."
                    className="w-full pl-10 pr-4 py-2 text-sm border rounded focus:outline-none focus:ring-2 focus:ring-violet-500"
                  />
                </div>
              </div>
              
              <div>
                <h4 className="font-medium text-sm mb-2">Filtros Rápidos</h4>
                <div className="space-y-2">
                  {quickFilters.map((filter) => {
                    const IconComponent = filter.icon;
                    return (
                      <button key={filter.id} className="w-full flex items-center justify-between p-2 text-sm hover:bg-gray-50 rounded">
                        <div className="flex items-center space-x-2">
                          <IconComponent className="w-4 h-4 text-gray-500" />
                          <span>{filter.label}</span>
                        </div>
                        {filter.count && <Badge className="text-xs bg-violet-600">{filter.count}</Badge>}
                      </button>
                    );
                  })}
                </div>
              </div>
              
              <div>
                <h4 className="font-medium text-sm mb-2">Categorías</h4>
                <div className="space-y-1">
                  {categories.slice(0, 3).map((category) => (
                    <label key={category} className="flex items-center space-x-2 text-sm p-1">
                      <input type="checkbox" className="rounded" />
                      <span className="text-gray-700">{category}</span>
                    </label>
                  ))}
                </div>
              </div>
            </div>
          </div>
          
          {/* Content Area */}
          <div className="flex-1 p-4">
            <div className="grid grid-cols-3 gap-4">
              {[1,2,3,4,5,6].map((i) => (
                <div key={i} className="h-16 bg-white rounded border"></div>
              ))}
            </div>
          </div>
        </div>
      ),
      pros: ['Muchas opciones de filtrado', 'Organizado y claro', 'No interfiere con contenido'],
      cons: ['Ocupa espacio horizontal', 'Puede ser abrumador'],
      bestFor: 'Tiendas con muchas categorías y opciones de filtrado'
    },
    {
      id: 'hybrid-approach',
      name: 'Enfoque Híbrido',
      description: 'Combinación de subbar compacta + sidebar colapsable',
      component: (
        <div className="w-full space-y-0">
          {/* Compact Subbar */}
          <div className="w-full border-b bg-gray-50/50">
            <div className="container mx-auto px-4">
              <div className="flex h-10 items-center justify-between">
                <div className="flex items-center space-x-2">
                  <div className="relative">
                    <FiSearch className="absolute left-2 top-1/2 transform -translate-y-1/2 text-gray-400 w-3 h-3" />
                    <input 
                      type="text" 
                      placeholder="Buscar..."
                      className="pl-8 pr-3 py-1.5 text-xs border border-gray-200 rounded focus:outline-none focus:ring-1 focus:ring-violet-500 w-48"
                    />
                  </div>
                  
                  <Button variant="outline" size="sm" className="h-7 text-xs px-2">
                    <FiSliders className="w-3 h-3 mr-1" />
                    Filtros Avanzados
                  </Button>
                </div>
                
                <div className="flex items-center space-x-2">
                  {quickFilters.slice(0, 2).map((filter) => (
                    <Button key={filter.id} variant="ghost" size="sm" className="h-7 text-xs px-2 text-gray-600">
                      {filter.label}
                    </Button>
                  ))}
                  
                  <Separator orientation="vertical" className="h-4" />
                  
                  <div className="flex items-center border border-gray-200 rounded">
                    <Button variant="ghost" size="sm" className="h-7 w-7 p-0">
                      <FiGrid className="w-3 h-3" />
                    </Button>
                    <Button variant="ghost" size="sm" className="h-7 w-7 p-0">
                      <FiList className="w-3 h-3" />
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Content with collapsible sidebar */}
          <div className="flex">
            <div className="w-48 bg-white border-r p-3 text-xs">
              <div className="space-y-3">
                <div>
                  <h5 className="font-medium mb-2">Categorías</h5>
                  <div className="space-y-1">
                    {categories.slice(0, 2).map((cat) => (
                      <label key={cat} className="flex items-center space-x-1">
                        <input type="checkbox" className="rounded" />
                        <span className="text-gray-700">{cat}</span>
                      </label>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            <div className="flex-1 p-4">
              <div className="grid grid-cols-4 gap-3">
                {[1,2,3,4,5,6,7,8].map((i) => (
                  <div key={i} className="h-12 bg-gray-100 rounded"></div>
                ))}
              </div>
            </div>
          </div>
        </div>
      ),
      pros: ['Muy completo', 'Flexible', 'Optimiza espacio'],
      cons: ['Más complejo de implementar', 'Puede ser confuso'],
      bestFor: 'Tiendas grandes que necesitan máxima funcionalidad'
    }
  ];

  return (
    <div className="space-y-8">
      <div className="text-center mb-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-2">Propuestas para Subbar de Tienda</h2>
        <p className="text-gray-600">Diferentes enfoques para integrar búsqueda, filtros y controles en la tienda</p>
      </div>
      
      <div className="space-y-8">
        {proposals.map((proposal) => (
          <Card key={proposal.id} className="p-6">
            <div className="mb-4">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">{proposal.name}</h3>
              <p className="text-gray-600 mb-4">{proposal.description}</p>
            </div>
            
            <div className="bg-gray-50 p-4 rounded-lg mb-6 overflow-hidden">
              {proposal.component}
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div>
                <h4 className="font-medium text-sm text-green-700 mb-2">Pros:</h4>
                <ul className="text-sm text-gray-600 space-y-1">
                  {proposal.pros.map((pro, index) => (
                    <li key={index} className="flex items-start space-x-2">
                      <span className="w-1.5 h-1.5 bg-green-500 rounded-full mt-2 flex-shrink-0"></span>
                      <span>{pro}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div>
                <h4 className="font-medium text-sm text-red-700 mb-2">Contras:</h4>
                <ul className="text-sm text-gray-600 space-y-1">
                  {proposal.cons.map((con, index) => (
                    <li key={index} className="flex items-start space-x-2">
                      <span className="w-1.5 h-1.5 bg-red-500 rounded-full mt-2 flex-shrink-0"></span>
                      <span>{con}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div>
                <h4 className="font-medium text-sm text-violet-700 mb-2">Mejor para:</h4>
                <p className="text-sm text-gray-600">{proposal.bestFor}</p>
              </div>
            </div>
          </Card>
        ))}
      </div>
      
      <Card className="p-6 bg-violet-50 border-violet-200">
        <h3 className="text-lg font-semibold text-violet-900 mb-3">Mi Recomendación</h3>
        <p className="text-violet-800 mb-4">
          Para tu sitio de estética, recomiendo el <strong>Enfoque Híbrido</strong> o la <strong>Subbar Compacta</strong>. 
          El híbrido te da máxima funcionalidad manteniendo el diseño limpio, mientras que la subbar compacta 
          es más simple pero muy efectiva.
        </p>
        <p className="text-violet-700 text-sm">
          Para móviles, todos estos enfoques se pueden adaptar colapsando a un botón de filtros que abra un sheet lateral.
        </p>
      </Card>
    </div>
  );
};

export default ShopSubbarProposals;