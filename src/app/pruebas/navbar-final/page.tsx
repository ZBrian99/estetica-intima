'use client'

import NavbarFinal_1_Columnas from '@/components/layout/NavbarFinal_1_Columnas'
import NavbarFinal_2_Cuadricula from '@/components/layout/NavbarFinal_2_Cuadricula'
import NavbarFinal_3_Optimizada from '@/components/layout/NavbarFinal_3_Optimizada'

export default function NavbarFinalPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Variante 1: Columnas */}
      <section className="mb-32">
        <div className="bg-white p-8 mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Variante 1: Menú en Columnas por Categoría
          </h2>
          <div className="grid md:grid-cols-2 gap-6 text-gray-600">
            <div>
              <h3 className="font-semibold text-gray-900 mb-2">Características:</h3>
              <ul className="space-y-1 text-sm">
                <li>• Organización vertical por categorías</li>
                <li>• Fácil escaneo visual</li>
                <li>• Estructura clara y ordenada</li>
                <li>• Ideal para muchos servicios</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 mb-2">Ventajas:</h3>
              <ul className="space-y-1 text-sm">
                <li>• Navegación intuitiva</li>
                <li>• Escalable para nuevos servicios</li>
                <li>• Lectura natural de arriba a abajo</li>
              </ul>
            </div>
          </div>
        </div>
        <NavbarFinal_1_Columnas />
      </section>

      {/* Variante 2: Cuadrícula */}
      <section className="mb-32">
        <div className="bg-white p-8 mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Variante 2: Menú en Cuadrícula 2 Filas
          </h2>
          <div className="grid md:grid-cols-2 gap-6 text-gray-600">
            <div>
              <h3 className="font-semibold text-gray-900 mb-2">Características:</h3>
              <ul className="space-y-1 text-sm">
                <li>• Distribución horizontal en 2 filas</li>
                <li>• Aprovecha mejor el ancho</li>
                <li>• Vista más compacta</li>
                <li>• Categorías agrupadas visualmente</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 mb-2">Ventajas:</h3>
              <ul className="space-y-1 text-sm">
                <li>• Menos altura del menú</li>
                <li>• Vista panorámica de opciones</li>
                <li>• Mejor para pantallas anchas</li>
              </ul>
            </div>
          </div>
        </div>
        <NavbarFinal_2_Cuadricula />
      </section>

      {/* Variante 3: Optimizada */}
      <section className="mb-32">
        <div className="bg-white p-8 mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Variante 3: Estructura Híbrida Optimizada
          </h2>
          <div className="grid md:grid-cols-2 gap-6 text-gray-600">
            <div>
              <h3 className="font-semibold text-gray-900 mb-2">Características:</h3>
              <ul className="space-y-1 text-sm">
                <li>• Combina lo mejor de ambas estructuras</li>
                <li>• Servicios destacados prominentes</li>
                <li>• Navegación adaptativa</li>
                <li>• Balance entre funcionalidad y estética</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 mb-2">Ventajas:</h3>
              <ul className="space-y-1 text-sm">
                <li>• UX optimizada</li>
                <li>• Destaca servicios principales</li>
                <li>• Flexible y escalable</li>
                <li>• Mejor conversión</li>
              </ul>
            </div>
          </div>
        </div>
        <NavbarFinal_3_Optimizada />
      </section>

      {/* Comparación Final */}
      <section className="bg-white p-8 rounded-lg shadow-sm">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Comparación y Recomendación</h2>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b">
                <th className="text-left p-3">Aspecto</th>
                <th className="text-left p-3">Columnas</th>
                <th className="text-left p-3">Cuadrícula</th>
                <th className="text-left p-3">Optimizada</th>
              </tr>
            </thead>
            <tbody className="text-gray-600">
              <tr className="border-b">
                <td className="p-3 font-medium">Organización</td>
                <td className="p-3">Vertical clara</td>
                <td className="p-3">Horizontal compacta</td>
                <td className="p-3">Híbrida inteligente</td>
              </tr>
              <tr className="border-b">
                <td className="p-3 font-medium">Escalabilidad</td>
                <td className="p-3">Excelente</td>
                <td className="p-3">Buena</td>
                <td className="p-3">Excelente</td>
              </tr>
              <tr className="border-b">
                <td className="p-3 font-medium">UX Mobile</td>
                <td className="p-3">Muy buena</td>
                <td className="p-3">Buena</td>
                <td className="p-3">Excelente</td>
              </tr>
              <tr className="border-b">
                <td className="p-3 font-medium">Conversión</td>
                <td className="p-3">Buena</td>
                <td className="p-3">Buena</td>
                <td className="p-3">Muy buena</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="mt-6 p-4 bg-blue-50 rounded-lg">
          <h3 className="font-semibold text-blue-900 mb-2">💡 Recomendación:</h3>
          <p className="text-blue-800 text-sm">
            La <strong>Variante 3 (Optimizada)</strong> ofrece el mejor balance entre funcionalidad, 
            estética y conversión. Combina la claridad organizacional de las columnas con la 
            eficiencia espacial de la cuadrícula, priorizando los servicios más demandados.
          </p>
        </div>
      </section>
    </div>
  )
}