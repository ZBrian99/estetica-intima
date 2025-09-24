'use client';

import React from 'react';
import Link from 'next/link';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { FiHeart, FiStar, FiZap, FiAward } from 'react-icons/fi';

const BrandVariants = () => {
  const brandStyles = [
    {
      id: 'modern-gradient',
      name: 'Moderno con Gradiente',
      description: 'Inspirado en la navbar moderna que te gustó',
      component: (
        <Link href="/" className="flex items-center space-x-3 group">
          <div className="relative">
            <div className="h-10 w-10 rounded-xl bg-gradient-to-br from-violet-500 via-purple-600 to-violet-700 flex items-center justify-center shadow-lg group-hover:shadow-violet-200 transition-all duration-300">
              <span className="text-white font-bold text-lg">Í</span>
            </div>
            <div className="absolute -top-1 -right-1 h-3 w-3 bg-gradient-to-r from-pink-400 to-violet-400 rounded-full animate-pulse"></div>
          </div>
          <div className="flex flex-col">
            <span className="font-bold text-xl bg-gradient-to-r from-gray-900 via-violet-800 to-gray-900 bg-clip-text text-transparent leading-none">
              Íntima Estética
            </span>
            <span className="text-xs bg-gradient-to-r from-violet-600 to-purple-600 bg-clip-text text-transparent font-medium leading-none">
              Centro de Belleza Profesional
            </span>
          </div>
        </Link>
      ),
      pros: ['Muy atractivo visualmente', 'Efecto gradiente moderno', 'Animación sutil'],
      cons: ['Puede ser muy llamativo para algunos contextos']
    },
    {
      id: 'elegant-minimal',
      name: 'Elegante Minimalista',
      description: 'Diseño limpio y profesional',
      component: (
        <Link href="/" className="flex items-center space-x-2.5 group">
          <div className="h-8 w-8 rounded-full bg-violet-600 flex items-center justify-center group-hover:bg-violet-700 transition-colors shadow-sm">
            <span className="text-white font-semibold text-sm">Í</span>
          </div>
          <div className="flex flex-col">
            <span className="font-semibold text-lg text-gray-900 leading-tight">Íntima Estética</span>
            <span className="text-xs text-gray-500 leading-tight">Centro de Belleza</span>
          </div>
        </Link>
      ),
      pros: ['Muy limpio y profesional', 'Fácil de leer', 'Versátil'],
      cons: ['Menos impactante visualmente']
    },
    {
      id: 'boutique-luxury',
      name: 'Boutique de Lujo',
      description: 'Estilo premium con detalles sofisticados',
      component: (
        <Link href="/" className="flex items-center space-x-3 group">
          <div className="relative">
            <div className="h-9 w-9 rounded-lg bg-gradient-to-br from-violet-600 to-purple-700 flex items-center justify-center shadow-md border border-violet-200">
              <span className="text-white font-semibold text-base">Í</span>
            </div>
            <div className="absolute -bottom-1 -right-1 h-3 w-3 bg-gold-400 rounded-full border border-white"></div>
          </div>
          <div className="flex flex-col">
            <span className="font-bold text-lg text-gray-900 leading-tight tracking-wide">ÍNTIMA ESTÉTICA</span>
            <span className="text-xs text-violet-600 leading-tight font-medium tracking-widest uppercase">Belleza Profesional</span>
          </div>
        </Link>
      ),
      pros: ['Muy elegante y sofisticado', 'Transmite exclusividad', 'Tipografía premium'],
      cons: ['Puede parecer demasiado formal']
    },
    {
      id: 'creative-icon',
      name: 'Creativo con Ícono',
      description: 'Logo con ícono representativo y tipografía moderna',
      component: (
        <Link href="/" className="flex items-center space-x-3 group">
          <div className="h-9 w-9 rounded-xl bg-white border-2 border-violet-500 flex items-center justify-center group-hover:bg-violet-50 transition-colors">
            <FiHeart className="w-5 h-5 text-violet-600" />
          </div>
          <div className="flex flex-col">
            <span className="font-bold text-lg text-gray-900 leading-none">Íntima Estética</span>
            <span className="text-xs text-violet-600 leading-none font-medium">Tu belleza, nuestra pasión</span>
          </div>
        </Link>
      ),
      pros: ['Ícono representativo', 'Mensaje emocional', 'Diseño único'],
      cons: ['El ícono puede no ser tan memorable como la letra']
    },
    {
      id: 'modern-compact',
      name: 'Moderno Compacto',
      description: 'Versión compacta para espacios reducidos',
      component: (
        <Link href="/" className="flex items-center space-x-2 group">
          <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-violet-500 to-purple-600 flex items-center justify-center shadow-sm">
            <span className="text-white font-bold text-sm">Í</span>
          </div>
          <div className="flex flex-col">
            <span className="font-bold text-base text-gray-900 leading-none">Íntima Estética</span>
            <span className="text-xs text-violet-600 leading-none">Belleza Profesional</span>
          </div>
        </Link>
      ),
      pros: ['Ocupa menos espacio', 'Mantiene legibilidad', 'Versión práctica'],
      cons: ['Menos presencia visual']
    },
    {
      id: 'artistic-script',
      name: 'Artístico con Script',
      description: 'Tipografía más artística y femenina',
      component: (
        <Link href="/" className="flex items-center space-x-3 group">
          <div className="h-10 w-10 rounded-full bg-gradient-to-br from-rose-400 via-violet-500 to-purple-600 flex items-center justify-center shadow-lg">
            <span className="text-white font-bold text-lg italic">Í</span>
          </div>
          <div className="flex flex-col">
            <span className="font-bold text-xl text-gray-900 leading-none" style={{fontFamily: 'serif'}}>Íntima Estética</span>
            <span className="text-xs text-violet-600 leading-none font-light italic">Centro de Belleza Profesional</span>
          </div>
        </Link>
      ),
      pros: ['Muy femenino y elegante', 'Tipografía distintiva', 'Colores suaves'],
      cons: ['Puede ser menos legible en tamaños pequeños']
    },
    {
      id: 'tech-modern',
      name: 'Tecnológico Moderno',
      description: 'Enfoque en tecnología y modernidad',
      component: (
        <Link href="/" className="flex items-center space-x-3 group">
          <div className="relative">
            <div className="h-9 w-9 rounded-lg bg-gradient-to-br from-violet-600 to-blue-600 flex items-center justify-center shadow-md">
              <FiZap className="w-5 h-5 text-white" />
            </div>
            <div className="absolute -top-1 -right-1 h-3 w-3 bg-cyan-400 rounded-full animate-pulse"></div>
          </div>
          <div className="flex flex-col">
            <span className="font-bold text-lg text-gray-900 leading-none tracking-tight">ÍNTIMA ESTÉTICA</span>
            <span className="text-xs text-blue-600 leading-none font-medium">Tecnología Avanzada en Belleza</span>
          </div>
        </Link>
      ),
      pros: ['Enfatiza la tecnología', 'Moderno y futurista', 'Diferenciador'],
      cons: ['Puede alejar clientes que prefieren lo tradicional']
    },
    {
      id: 'premium-badge',
      name: 'Premium con Badge',
      description: 'Incluye badge de calidad o certificación',
      component: (
        <Link href="/" className="flex items-center space-x-3 group">
          <div className="relative">
            <div className="h-9 w-9 rounded-xl bg-gradient-to-br from-violet-600 to-purple-700 flex items-center justify-center shadow-lg">
              <span className="text-white font-bold text-base">Í</span>
            </div>
            <FiAward className="absolute -bottom-1 -right-1 h-4 w-4 text-yellow-500 bg-white rounded-full p-0.5" />
          </div>
          <div className="flex flex-col">
            <div className="flex items-center space-x-2">
              <span className="font-bold text-lg text-gray-900 leading-none">Íntima Estética</span>
              <Badge className="text-xs bg-violet-100 text-violet-700 px-1.5 py-0.5">Premium</Badge>
            </div>
            <span className="text-xs text-violet-600 leading-none font-medium">Centro Certificado de Belleza</span>
          </div>
        </Link>
      ),
      pros: ['Transmite calidad premium', 'Badge de confianza', 'Profesional'],
      cons: ['Puede parecer comercial']
    }
  ];

  return (
    <div className="space-y-6">
      <div className="text-center mb-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-2">Variantes de Brand Style</h2>
        <p className="text-gray-600">Diferentes opciones de diseño para el logo y marca</p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {brandStyles.map((style) => (
          <Card key={style.id} className="p-6 hover:shadow-lg transition-shadow">
            <div className="mb-4">
              <div className="flex items-center justify-between mb-2">
                <h3 className="font-semibold text-lg text-gray-900">{style.name}</h3>
                {style.id === 'modern-gradient' && (
                  <Badge className="bg-green-500 text-white">Tu Favorito</Badge>
                )}
              </div>
              <p className="text-sm text-gray-600 mb-4">{style.description}</p>
            </div>
            
            <div className="bg-gray-50 p-4 rounded-lg mb-4 flex items-center justify-center min-h-[80px]">
              {style.component}
            </div>
            
            <div className="grid grid-cols-1 gap-3">
              <div>
                <h4 className="font-medium text-sm text-green-700 mb-1">Pros:</h4>
                <ul className="text-xs text-gray-600 space-y-1">
                  {style.pros.map((pro, index) => (
                    <li key={index} className="flex items-center space-x-1">
                      <span className="w-1 h-1 bg-green-500 rounded-full"></span>
                      <span>{pro}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div>
                <h4 className="font-medium text-sm text-red-700 mb-1">Contras:</h4>
                <ul className="text-xs text-gray-600 space-y-1">
                  {style.cons.map((con, index) => (
                    <li key={index} className="flex items-center space-x-1">
                      <span className="w-1 h-1 bg-red-500 rounded-full"></span>
                      <span>{con}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default BrandVariants;