'use client';

import { useState } from 'react';
import { FiEye, FiGrid, FiColumns } from 'react-icons/fi';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import NavbarDemo_Columnas from '@/components/layout/NavbarDemo_Columnas';
import NavbarDemo_Cuadricula from '@/components/layout/NavbarDemo_Cuadricula';
import SubtopbarFinal_2_Balanceada from '@/components/layout/SubtopbarFinal_2_Balanceada';

type NavbarVersion = 'columnas' | 'cuadricula';

interface NavbarVariant {
  id: NavbarVersion;
  title: string;
  description: string;
  component: React.ComponentType;
  features: string[];
  bestFor: string;
  pros: string[];
  cons: string[];
  icon: React.ComponentType<{ className?: string }>;
  color: string;
  rating: number;
}

const navbarVariants: NavbarVariant[] = [
  {
    id: 'columnas',
    title: 'Navbar Columnas',
    description: 'Menú desplegable con 5 columnas organizadas por categorías',
    component: NavbarDemo_Columnas,
    features: [
      '5 columnas: Depilación, Corporales, Faciales, Pestañas & Cejas, Uñas & Pies',
      'Organización vertical por categorías',
      'Navegación intuitiva y clara',
      'Responsive con sheet lateral en mobile',
      'Diseño limpio y profesional'
    ],
    bestFor: 'Sitios con muchas categorías que necesitan organización clara',
    pros: ['Fácil navegación', 'Organización clara', 'Escalable'],
    cons: ['Puede ser abrumador', 'Requiere más espacio horizontal'],
    icon: FiColumns,
    color: 'bg-blue-500',
    rating: 4.7
  },
  {
    id: 'cuadricula',
    title: 'Navbar Cuadrícula',
    description: 'Menú desplegable con diseño 3x2 grid más compacto',
    component: NavbarDemo_Cuadricula,
    features: [
      'Grid 3x2: 6 categorías incluyendo Masajes',
      'Diseño más compacto y visual',
      'Mejor aprovechamiento del espacio',
      'Navegación rápida y directa',
      'Adaptación mobile optimizada'
    ],
    bestFor: 'Sitios que buscan un diseño más compacto y visual',
    pros: ['Compacto', 'Visual', 'Rápido acceso'],
    cons: ['Menos espacio para subcategorías', 'Limitado a 6 categorías'],
    icon: FiGrid,
    color: 'bg-green-500',
    rating: 4.5
  }
];

// Mock data para las cards skeleton
const mockServices = [
  { id: 1, title: 'Depilación Láser Axilas', category: 'Depilación', price: '$15.000', image: '/placeholder-service.jpg' },
  { id: 2, title: 'Maderoterapia Corporal', category: 'Corporales', price: '$25.000', image: '/placeholder-service.jpg' },
  { id: 3, title: 'Limpieza Facial Profunda', category: 'Faciales', price: '$18.000', image: '/placeholder-service.jpg' },
  { id: 4, title: 'Microblading Cejas', category: 'Pestañas & Cejas', price: '$35.000', image: '/placeholder-service.jpg' },
  { id: 5, title: 'Spa de Pies Completo', category: 'Uñas & Pies', price: '$12.000', image: '/placeholder-service.jpg' },
  { id: 6, title: 'Masaje Descontracturante', category: 'Masajes', price: '$20.000', image: '/placeholder-service.jpg' },
  { id: 7, title: 'Depilación Piernas Completas', category: 'Depilación', price: '$45.000', image: '/placeholder-service.jpg' },
  { id: 8, title: 'Alpha Synergy Facial', category: 'Faciales', price: '$22.000', image: '/placeholder-service.jpg' }
];

export default function NavbarDemoPage() {
  const [activeVariant, setActiveVariant] = useState<NavbarVersion>('columnas');

  const currentVariant = navbarVariants.find(v => v.id === activeVariant)!;
  const CurrentNavbarComponent = currentVariant.component;

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navbar Demo */}
      <CurrentNavbarComponent />
      
      {/* Subtopbar */}
      <SubtopbarFinal_2_Balanceada />

      {/* Main Content */}
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h1 className="text-3xl font-bold text-gray-900 mb-2">
                Demo Navbar Final
              </h1>
              <p className="text-gray-600">
                Comparación de las dos versiones de navbar con subtopbar y servicios
              </p>
            </div>
            
            {/* Version Selector */}
            <div className="flex items-center space-x-2">
              {navbarVariants.map((variant) => {
                const IconComponent = variant.icon;
                return (
                  <Button
                    key={variant.id}
                    variant={activeVariant === variant.id ? 'default' : 'outline'}
                    onClick={() => setActiveVariant(variant.id)}
                    className="flex items-center space-x-2"
                  >
                    <IconComponent className="w-4 h-4" />
                    <span>{variant.title.split(' ')[1]}</span>
                  </Button>
                );
              })}
            </div>
          </div>

          {/* Current Variant Info */}
          <Card className="mb-6">
            <CardHeader>
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <div className={`p-2 rounded-lg ${currentVariant.color} text-white`}>
                    <currentVariant.icon className="w-5 h-5" />
                  </div>
                  <div>
                    <CardTitle className="text-xl">{currentVariant.title}</CardTitle>
                    <p className="text-gray-600 mt-1">{currentVariant.description}</p>
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="flex items-center space-x-1">
                    <FiEye className="w-4 h-4 text-yellow-500" />
                    <span className="font-semibold">{currentVariant.rating}</span>
                  </div>
                  <Badge variant="secondary">Activo</Badge>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-3 gap-6">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Características</h4>
                  <ul className="space-y-1 text-sm text-gray-600">
                    {currentVariant.features.map((feature, index) => (
                      <li key={index} className="flex items-start space-x-2">
                        <span className="text-green-500 mt-0.5">•</span>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Ventajas</h4>
                  <ul className="space-y-1 text-sm text-green-600">
                    {currentVariant.pros.map((pro, index) => (
                      <li key={index} className="flex items-start space-x-2">
                        <span className="text-green-500 mt-0.5">✓</span>
                        <span>{pro}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Consideraciones</h4>
                  <ul className="space-y-1 text-sm text-orange-600">
                    {currentVariant.cons.map((con, index) => (
                      <li key={index} className="flex items-start space-x-2">
                        <span className="text-orange-500 mt-0.5">!</span>
                        <span>{con}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              
              <div className="mt-4 p-3 bg-blue-50 rounded-lg">
                <p className="text-sm text-blue-800">
                  <strong>Mejor para:</strong> {currentVariant.bestFor}
                </p>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Services Grid - Skeleton Cards */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold text-gray-900">Servicios Destacados</h2>
            <Badge variant="outline" className="text-sm">
              {mockServices.length} servicios
            </Badge>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {mockServices.map((service) => (
              <Card key={service.id} className="group hover:shadow-lg transition-all duration-300 cursor-pointer">
                <CardContent className="p-0">
                  {/* Image Placeholder */}
                  <div className="aspect-[4/3] bg-gradient-to-br from-pink-100 to-purple-100 rounded-t-lg flex items-center justify-center">
                    <div className="text-center">
                      <div className="w-12 h-12 bg-pink-200 rounded-full flex items-center justify-center mx-auto mb-2">
                        <span className="text-pink-600 font-semibold text-lg">
                          {service.title.charAt(0)}
                        </span>
                      </div>
                      <p className="text-xs text-gray-500">Imagen del servicio</p>
                    </div>
                  </div>
                  
                  {/* Content */}
                  <div className="p-4">
                    <div className="flex items-start justify-between mb-2">
                      <Badge variant="secondary" className="text-xs">
                        {service.category}
                      </Badge>
                      <span className="text-lg font-bold text-pink-600">
                        {service.price}
                      </span>
                    </div>
                    
                    <h3 className="font-semibold text-gray-900 mb-2 group-hover:text-pink-600 transition-colors">
                      {service.title}
                    </h3>
                    
                    <p className="text-sm text-gray-600 mb-3">
                      Descripción del servicio de belleza y estética profesional.
                    </p>
                    
                    <Button 
                      variant="outline" 
                      size="sm" 
                      className="w-full group-hover:bg-pink-600 group-hover:text-white group-hover:border-pink-600 transition-all"
                    >
                      Ver Detalles
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Footer Info */}
        <Card className="bg-gradient-to-r from-pink-50 to-purple-50 border-pink-200">
          <CardContent className="p-6">
            <div className="text-center">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Demo Completo de Navbar + Subtopbar
              </h3>
              <p className="text-gray-600 mb-4">
                Esta página demuestra la integración completa de la navbar con la subtopbar balanceada 
                y cards de servicios en formato skeleton para visualizar el diseño final.
              </p>
              <div className="flex items-center justify-center space-x-4 text-sm text-gray-500">
                <span>✨ Diseño moderno</span>
                <span>📱 Responsive</span>
                <span>🎨 Shadcn UI</span>
                <span>⚡ Performance optimizado</span>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}