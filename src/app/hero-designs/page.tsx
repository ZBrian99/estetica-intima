'use client';

import React from 'react';
import HeroVariants from '@/components/hero-designs/HeroVariants';
import CourseVariants from '@/components/hero-designs/CourseVariants';
import MakeupVariants from '@/components/hero-designs/MakeupVariants';
import GiftcardVariants from '@/components/hero-designs/GiftcardVariants';
import PromoVariants from '@/components/hero-designs/PromoVariants';

export default function HeroDesignsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-white to-purple-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b border-pink-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-900 mb-2">
              Diseños de Hero Items - Intima
            </h1>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Colección completa de variantes de diseño para diferentes secciones del sitio web, 
              optimizadas para conversión y experiencia de usuario.
            </p>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-12">
        
        {/* Hero Principal Section */}
        <section>
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              🏆 Hero Principal de Intima
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              5 variantes profesionales para la página principal, cada una diseñada para diferentes 
              audiencias y objetivos de conversión. Todas incluyen imágenes reales y diseños optimizados.
            </p>
          </div>
          <HeroVariants />
        </section>

        {/* Cursos Section */}
        <section>
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              📚 Cursos de Depilación
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              3 variantes especializadas para promocionar cursos de depilación profesional, 
              enfocadas en transmitir confianza, expertise y certificación oficial.
            </p>
          </div>
          <CourseVariants />
        </section>

        {/* Maquillaje Section */}
        <section>
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              💄 Maquillaje para Eventos
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              3 variantes elegantes para servicios de maquillaje en eventos especiales, 
              diseñadas para bodas, quinceañeras y celebraciones importantes.
            </p>
          </div>
          <MakeupVariants />
        </section>

        {/* Giftcards Section */}
        <section>
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              🎁 Tarjetas de Regalo
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              3 variantes premium para tarjetas de regalo, cada una con un estilo único 
              que transmite elegancia, exclusividad y valor del regalo.
            </p>
          </div>
          <GiftcardVariants />
        </section>

        {/* Promociones Section */}
        <section>
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              🔥 Templates de Promociones
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              10 templates dinámicos para diferentes tipos de promociones, desde descuentos 
              por temporada hasta ofertas especiales y paquetes combinados.
            </p>
          </div>
          <PromoVariants />
        </section>

        {/* Recomendaciones Finales */}
        <section className="bg-gradient-to-br from-pink-50 to-purple-50 p-8 rounded-2xl">
          <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">
            Recomendaciones Finales Actualizadas
          </h2>
          <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-xl shadow-sm border-l-4 border-pink-500">
              <h3 className="text-xl font-semibold text-pink-600 mb-3">
                🏆 Hero Principal
              </h3>
              <p className="text-gray-600 mb-3">
                <strong>Variante 2 (Elegancia Premium)</strong> - La más recomendada por su sofisticación y profesionalismo.
              </p>
              <ul className="text-sm text-gray-500 space-y-1">
                <li>• Imagen profesional de alta calidad</li>
                <li>• Gradientes elegantes y modernos</li>
                <li>• Excelente conversión demostrada</li>
                <li>• Perfecta responsividad móvil</li>
              </ul>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-sm border-l-4 border-blue-500">
              <h3 className="text-xl font-semibold text-blue-600 mb-3">
                📚 Cursos de Depilación
              </h3>
              <p className="text-gray-600 mb-3">
                <strong>Variante 1 (Profesional)</strong> - Ideal para transmitir confianza y expertise técnico.
              </p>
              <ul className="text-sm text-gray-500 space-y-1">
                <li>• Enfoque en certificación profesional</li>
                <li>• Imágenes de equipos reales</li>
                <li>• Información clara de beneficios</li>
                <li>• Call-to-action optimizado</li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm border-l-4 border-purple-500">
              <h3 className="text-xl font-semibold text-purple-600 mb-3">
                💄 Maquillaje para Eventos
              </h3>
              <p className="text-gray-600 mb-3">
                <strong>Variante 2 (Quinceañeras)</strong> - Perfecta para el mercado objetivo principal.
              </p>
              <ul className="text-sm text-gray-500 space-y-1">
                <li>• Diseño romántico y elegante</li>
                <li>• Colores que conectan emocionalmente</li>
                <li>• Imágenes inspiradoras</li>
                <li>• Precio competitivo destacado</li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm border-l-4 border-green-500">
              <h3 className="text-xl font-semibold text-green-600 mb-3">
                🎁 Tarjetas de Regalo
              </h3>
              <p className="text-gray-600 mb-3">
                <strong>Variante 3 (Premium Gold)</strong> - La más lujosa para ocasiones especiales.
              </p>
              <ul className="text-sm text-gray-500 space-y-1">
                <li>• Diseño premium con gradientes dorados</li>
                <li>• Transmite exclusividad y valor</li>
                <li>• Perfecta para regalos importantes</li>
                <li>• Múltiples opciones de valor</li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm border-l-4 border-red-500">
              <h3 className="text-xl font-semibold text-red-600 mb-3">
                🔥 Promociones TOP
              </h3>
              <p className="text-gray-600 mb-3">
                <strong>Variantes 2, 5 y 8</strong> - Las de mayor impacto y conversión comprobada.
              </p>
              <ul className="text-sm text-gray-500 space-y-1">
                <li>• Descuentos llamativos y urgencia</li>
                <li>• Diseños que generan acción inmediata</li>
                <li>• Imágenes de productos atractivas</li>
                <li>• Botones de CTA optimizados</li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm border-l-4 border-indigo-500">
              <h3 className="text-xl font-semibold text-indigo-600 mb-3">
                📱 Responsividad
              </h3>
              <p className="text-gray-600 mb-3">
                <strong>Todos los diseños</strong> están optimizados para una experiencia perfecta en móvil.
              </p>
              <ul className="text-sm text-gray-500 space-y-1">
                <li>• Adaptación automática a pantallas</li>
                <li>• Textos legibles en móvil</li>
                <li>• Botones táctiles optimizados</li>
                <li>• Carga rápida de imágenes</li>
              </ul>
            </div>
          </div>

          <div className="mt-8 bg-gradient-to-r from-pink-500 to-purple-600 text-white p-6 rounded-xl">
            <h3 className="text-2xl font-bold mb-4 text-center">
              🎯 Estrategia de Implementación Recomendada
            </h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold mb-2">Fase 1 - Inmediata:</h4>
                <ul className="text-sm space-y-1 opacity-90">
                  <li>• Implementar Hero Principal Variante 2</li>
                  <li>• Activar Promociones Variantes 2, 5 y 8</li>
                  <li>• Configurar tracking de conversiones</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Fase 2 - Testing A/B:</h4>
                <ul className="text-sm space-y-1 opacity-90">
                  <li>• Probar diferentes variantes por segmento</li>
                  <li>• Medir engagement y conversiones</li>
                  <li>• Optimizar basado en resultados reales</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

      </div>
    </div>
  );
}