'use client';

import { useState } from 'react';
import SubtopbarFinal_1_Compacta from '@/components/layout/SubtopbarFinal_1_Compacta';
import SubtopbarFinal_2_Balanceada from '@/components/layout/SubtopbarFinal_2_Balanceada';
import SubtopbarFinal_3_Completa from '@/components/layout/SubtopbarFinal_3_Completa';
import { FiCheck, FiX } from 'react-icons/fi';

type VariantType = 'compacta' | 'balanceada' | 'completa';

interface FeatureComparison {
  feature: string;
  compacta: boolean;
  balanceada: boolean;
  completa: boolean;
}

const featureComparisons: FeatureComparison[] = [
  { feature: 'Búsqueda prominente', compacta: true, balanceada: true, completa: true },
  { feature: 'Filtros rápidos básicos', compacta: true, balanceada: true, completa: true },
  { feature: 'Ordenamiento visible', compacta: false, balanceada: true, completa: true },
  { feature: 'Contador de resultados', compacta: false, balanceada: true, completa: true },
  { feature: 'Filtros activos visibles', compacta: false, balanceada: false, completa: true },
  { feature: 'Modo vista (grid/list)', compacta: false, balanceada: false, completa: true },
  { feature: 'Filtros avanzados rápidos', compacta: false, balanceada: false, completa: true },
  { feature: 'Guardado de búsquedas', compacta: false, balanceada: false, completa: true }
];

const variants = [
  {
    id: 'compacta' as VariantType,
    name: 'Compacta',
    description: 'Minimalista y enfocada en lo esencial',
    characteristics: [
      'Búsqueda + 3-4 filtros básicos',
      'Botón "Más filtros" prominente',
      'Ideal para mobile-first',
      'Carga rápida y simple'
    ],
    advantages: [
      'Menos sobrecarga visual',
      'Mejor rendimiento',
      'Fácil de usar en móvil',
      'Implementación simple'
    ],
    useCases: [
      'Apps móviles principalmente',
      'Audiencias no técnicas',
      'Catálogos pequeños-medianos'
    ]
  },
  {
    id: 'balanceada' as VariantType,
    name: 'Balanceada',
    description: 'Estándar de la industria con funcionalidad completa',
    characteristics: [
      'Búsqueda + 5-6 filtros + ordenamiento',
      'Contador de resultados',
      'Balance perfecto desktop/mobile',
      'Patrones UX reconocibles'
    ],
    advantages: [
      'Familiar para usuarios',
      'Funcionalidad completa',
      'Responsive excelente',
      'Estándar probado'
    ],
    useCases: [
      'E-commerce general',
      'Plataformas de servicios',
      'Aplicaciones empresariales'
    ]
  },
  {
    id: 'completa' as VariantType,
    name: 'Completa',
    description: 'Máxima funcionalidad para usuarios avanzados',
    characteristics: [
      'Búsqueda + todos los filtros visibles',
      'Filtros activos + modo vista',
      'Funciones avanzadas integradas',
      'Máximo control para el usuario'
    ],
    advantages: [
      'Cero fricción para filtrar',
      'Máxima productividad',
      'Usuarios avanzados satisfechos',
      'Funcionalidad completa visible'
    ],
    useCases: [
      'Plataformas B2B',
      'Usuarios power',
      'Catálogos muy grandes'
    ]
  }
];

export default function SubtopbarFinalPage() {
  const [activeVariant, setActiveVariant] = useState<VariantType>('balanceada');

  const renderSubtopbar = () => {
    switch (activeVariant) {
      case 'compacta':
        return <SubtopbarFinal_1_Compacta />;
      case 'balanceada':
        return <SubtopbarFinal_2_Balanceada />;
      case 'completa':
        return <SubtopbarFinal_3_Completa />;
      default:
        return <SubtopbarFinal_2_Balanceada />;
    }
  };

  const activeVariantData = variants.find(v => v.id === activeVariant);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="text-center">
            <h1 className="text-3xl font-bold text-gray-900 mb-4">
              Subtopbar Final - 3 Variantes
            </h1>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Implementaciones optimizadas de subtopbar con búsqueda, filtros rápidos y funcionalidad completa.
              Cada variante está diseñada para diferentes casos de uso y audiencias.
            </p>
          </div>
        </div>
      </div>

      {/* Variant Selector */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex flex-wrap gap-2 justify-center">
            {variants.map((variant) => (
              <button
                key={variant.id}
                onClick={() => setActiveVariant(variant.id)}
                className={`px-6 py-3 rounded-lg font-medium transition-all duration-200 ${
                  activeVariant === variant.id
                    ? 'bg-rose-500 text-white shadow-lg'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {variant.name}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Live Preview */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto">
          {renderSubtopbar()}
        </div>
      </div>

      {/* Variant Details */}
      {activeVariantData && (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-8">
            <div className="text-center mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-2">
                Variante {activeVariantData.name}
              </h2>
              <p className="text-lg text-gray-600">
                {activeVariantData.description}
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {/* Características */}
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-4">
                  Características
                </h3>
                <ul className="space-y-2">
                  {activeVariantData.characteristics.map((char, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <FiCheck className="text-rose-500 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">{char}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Ventajas */}
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-4">
                  Ventajas
                </h3>
                <ul className="space-y-2">
                  {activeVariantData.advantages.map((advantage, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <FiCheck className="text-green-500 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">{advantage}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Casos de Uso */}
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-4">
                  Casos de Uso Ideales
                </h3>
                <ul className="space-y-2">
                  {activeVariantData.useCases.map((useCase, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <FiCheck className="text-blue-500 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">{useCase}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Feature Comparison Table */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
          <div className="p-6 border-b border-gray-200">
            <h2 className="text-xl font-bold text-gray-900">
              Comparación de Funcionalidades
            </h2>
            <p className="text-gray-600 mt-1">
              Análisis detallado de las características de cada variante
            </p>
          </div>
          
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Funcionalidad
                  </th>
                  <th className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Compacta
                  </th>
                  <th className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Balanceada
                  </th>
                  <th className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Completa
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {featureComparisons.map((comparison, index) => (
                  <tr key={index} className="hover:bg-gray-50">
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                      {comparison.feature}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-center">
                      {comparison.compacta ? (
                        <FiCheck className="text-green-500 mx-auto" />
                      ) : (
                        <FiX className="text-gray-300 mx-auto" />
                      )}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-center">
                      {comparison.balanceada ? (
                        <FiCheck className="text-green-500 mx-auto" />
                      ) : (
                        <FiX className="text-gray-300 mx-auto" />
                      )}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-center">
                      {comparison.completa ? (
                        <FiCheck className="text-green-500 mx-auto" />
                      ) : (
                        <FiX className="text-gray-300 mx-auto" />
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* Recommendation */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="bg-gradient-to-r from-rose-50 to-pink-50 rounded-xl border border-rose-200 p-8">
          <div className="text-center">
            <h2 className="text-2xl font-bold text-rose-900 mb-4">
              🏆 Recomendación: Variante Balanceada
            </h2>
            <p className="text-lg text-rose-800 max-w-3xl mx-auto">
              Para la mayoría de casos de uso, la <strong>Variante Balanceada</strong> ofrece el mejor equilibrio 
              entre funcionalidad y usabilidad. Sigue estándares de la industria, es familiar para los usuarios 
              y funciona excelentemente tanto en desktop como en mobile.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}