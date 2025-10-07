'use client';

export default function HeroVariants() {
  return (
    <div className="space-y-8">
      {/* Hero Variant 1: Luxury Spa Experience */}
      <div className="bg-gradient-to-br from-rose-50 via-pink-50 to-purple-100 p-4 md:p-8 rounded-2xl shadow-xl border border-rose-200">
        <h3 className="text-xl md:text-2xl font-bold text-gray-800 mb-4 md:mb-6 text-center">
          Hero Principal - Experiencia de Lujo
        </h3>
        <div className="relative overflow-hidden rounded-xl bg-gradient-to-r from-rose-500 via-pink-600 to-purple-700 min-h-[400px] md:min-h-[500px] flex items-center">
          <div 
            className="absolute inset-0 opacity-30"
            style={{
              backgroundImage: 'url(https://image.pollinations.ai/prompt/luxury-spa-treatment-room-elegant-candles-flowers-relaxing-atmosphere-professional-beauty-salon?width=1200&height=600&seed=1)',
              backgroundSize: 'cover',
              backgroundPosition: 'center'
            }}
          />
          <div className="relative z-10 text-white p-6 md:p-12 w-full">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-6 drop-shadow-lg">
                ÍNTIMA
              </h1>
              <p className="text-lg md:text-xl lg:text-2xl mb-6 md:mb-8 text-rose-100 drop-shadow-md">
                Centro de Estética Integral
              </p>
              <p className="text-sm md:text-base lg:text-lg mb-8 md:mb-10 text-rose-50 max-w-2xl mx-auto leading-relaxed">
                Descubrí la experiencia más completa en depilación láser, tratamientos faciales y cuidado corporal. Tu bienestar es nuestra prioridad.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-white text-rose-600 px-6 md:px-8 py-3 md:py-4 rounded-full font-bold text-sm md:text-base hover:bg-rose-50 transition-all transform hover:scale-105 shadow-lg">
                  Reservar Turno
                </button>
                <button className="border-2 border-white text-white px-6 md:px-8 py-3 md:py-4 rounded-full font-semibold text-sm md:text-base hover:bg-white hover:text-rose-600 transition-all">
                  Ver Servicios
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Hero Variant 2: Professional Depilation */}
      <div className="bg-gradient-to-br from-emerald-50 via-teal-50 to-cyan-100 p-4 md:p-8 rounded-2xl shadow-xl border border-emerald-200">
        <h3 className="text-xl md:text-2xl font-bold text-gray-800 mb-4 md:mb-6 text-center">
          Hero Principal - Depilación Profesional
        </h3>
        <div className="relative overflow-hidden rounded-xl bg-gradient-to-r from-emerald-600 via-teal-600 to-cyan-700 min-h-[400px] md:min-h-[500px] flex items-center">
          <div 
            className="absolute inset-0 opacity-25"
            style={{
              backgroundImage: 'url(https://image.pollinations.ai/prompt/professional-laser-hair-removal-treatment-modern-beauty-clinic-equipment-clean-aesthetic?width=1200&height=600&seed=2)',
              backgroundSize: 'cover',
              backgroundPosition: 'center'
            }}
          />
          <div className="relative z-10 text-white p-6 md:p-12 w-full">
            <div className="max-w-4xl mx-auto">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6 drop-shadow-lg">
                    Depilación Láser
                    <span className="block text-emerald-200">Definitiva</span>
                  </h1>
                  <p className="text-base md:text-lg mb-6 md:mb-8 text-emerald-100 leading-relaxed">
                    Tecnología de última generación para resultados permanentes. Tratamientos seguros y efectivos con profesionales certificados.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <button className="bg-white text-emerald-600 px-6 md:px-8 py-3 md:py-4 rounded-full font-bold text-sm md:text-base hover:bg-emerald-50 transition-all shadow-lg">
                      Consulta Gratuita
                    </button>
                    <button className="border-2 border-white text-white px-6 md:px-8 py-3 md:py-4 rounded-full font-semibold text-sm md:text-base hover:bg-white hover:text-emerald-600 transition-all">
                      Ver Precios
                    </button>
                  </div>
                </div>
                <div className="hidden md:block">
                  <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg">
                    <h3 className="font-semibold mb-4 text-lg">Beneficios:</h3>
                    <ul className="space-y-2 text-emerald-100">
                      <li>✓ Resultados permanentes</li>
                      <li>✓ Sin dolor con tecnología avanzada</li>
                      <li>✓ Profesionales certificados</li>
                      <li>✓ Todas las zonas del cuerpo</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Hero Variant 3: Event Makeup */}
      <div className="bg-gradient-to-br from-amber-50 via-yellow-50 to-orange-100 p-4 md:p-8 rounded-2xl shadow-xl border border-amber-200">
        <h3 className="text-xl md:text-2xl font-bold text-gray-800 mb-4 md:mb-6 text-center">
          Hero Principal - Maquillaje para Eventos
        </h3>
        <div className="relative overflow-hidden rounded-xl bg-gradient-to-r from-amber-500 via-yellow-600 to-orange-600 min-h-[400px] md:min-h-[500px] flex items-center">
          <div 
            className="absolute inset-0 opacity-30"
            style={{
              backgroundImage: 'url(https://image.pollinations.ai/prompt/professional-makeup-artist-working-elegant-bride-wedding-preparation-luxury-beauty-salon?width=1200&height=600&seed=3)',
              backgroundSize: 'cover',
              backgroundPosition: 'center'
            }}
          />
          <div className="relative z-10 text-white p-6 md:p-12 w-full">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-6 drop-shadow-lg">
                Tu Día Perfecto
              </h1>
              <p className="text-lg md:text-xl lg:text-2xl mb-6 md:mb-8 text-amber-100 drop-shadow-md">
                Maquillaje Profesional para Eventos
              </p>
              <p className="text-sm md:text-base lg:text-lg mb-8 md:mb-10 text-amber-50 max-w-2xl mx-auto leading-relaxed">
                Bodas, quinceañeros, eventos especiales. Nuestros maquilladores profesionales crean el look perfecto para tu momento único.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8 text-sm md:text-base">
                <div className="bg-white/20 backdrop-blur-sm p-4 rounded-lg">
                  <div className="text-2xl mb-2">👰</div>
                  <div className="font-semibold">Bodas</div>
                </div>
                <div className="bg-white/20 backdrop-blur-sm p-4 rounded-lg">
                  <div className="text-2xl mb-2">🎉</div>
                  <div className="font-semibold">Quinceañeros</div>
                </div>
                <div className="bg-white/20 backdrop-blur-sm p-4 rounded-lg">
                  <div className="text-2xl mb-2">✨</div>
                  <div className="font-semibold">Eventos</div>
                </div>
              </div>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-white text-amber-600 px-6 md:px-8 py-3 md:py-4 rounded-full font-bold text-sm md:text-base hover:bg-amber-50 transition-all transform hover:scale-105 shadow-lg">
                  Reservar Cita
                </button>
                <button className="border-2 border-white text-white px-6 md:px-8 py-3 md:py-4 rounded-full font-semibold text-sm md:text-base hover:bg-white hover:text-amber-600 transition-all">
                  Ver Portfolio
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Hero Variant 4: Training Courses */}
      <div className="bg-gradient-to-br from-indigo-50 via-blue-50 to-purple-100 p-4 md:p-8 rounded-2xl shadow-xl border border-indigo-200">
        <h3 className="text-xl md:text-2xl font-bold text-gray-800 mb-4 md:mb-6 text-center">
          Hero Principal - Cursos de Capacitación
        </h3>
        <div className="relative overflow-hidden rounded-xl bg-gradient-to-r from-indigo-600 via-blue-600 to-purple-700 min-h-[400px] md:min-h-[500px] flex items-center">
          <div 
            className="absolute inset-0 opacity-25"
            style={{
              backgroundImage: 'url(https://image.pollinations.ai/prompt/professional-beauty-training-course-students-learning-depilation-techniques-modern-classroom?width=1200&height=600&seed=4)',
              backgroundSize: 'cover',
              backgroundPosition: 'center'
            }}
          />
          <div className="relative z-10 text-white p-6 md:p-12 w-full">
            <div className="max-w-4xl mx-auto">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6 drop-shadow-lg">
                    Formá tu
                    <span className="block text-indigo-200">Futuro Profesional</span>
                  </h1>
                  <p className="text-base md:text-lg mb-6 md:mb-8 text-indigo-100 leading-relaxed">
                    Cursos certificados en depilación, estética y maquillaje. Aprendé con los mejores profesionales y comenzá tu carrera en belleza.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <button className="bg-white text-indigo-600 px-6 md:px-8 py-3 md:py-4 rounded-full font-bold text-sm md:text-base hover:bg-indigo-50 transition-all shadow-lg">
                      Ver Cursos
                    </button>
                    <button className="border-2 border-white text-white px-6 md:px-8 py-3 md:py-4 rounded-full font-semibold text-sm md:text-base hover:bg-white hover:text-indigo-600 transition-all">
                      Inscribirse
                    </button>
                  </div>
                </div>
                <div className="hidden md:block">
                  <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg">
                    <h3 className="font-semibold mb-4 text-lg">Incluye:</h3>
                    <ul className="space-y-2 text-indigo-100">
                      <li>📜 Certificación oficial</li>
                      <li>👩‍🏫 Instructores expertos</li>
                      <li>🛠️ Práctica con equipos profesionales</li>
                      <li>💼 Apoyo para inserción laboral</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Hero Variant 5: Premium Treatments */}
      <div className="bg-gradient-to-br from-violet-50 via-purple-50 to-fuchsia-100 p-4 md:p-8 rounded-2xl shadow-xl border border-violet-200">
        <h3 className="text-xl md:text-2xl font-bold text-gray-800 mb-4 md:mb-6 text-center">
          Hero Principal - Tratamientos Premium
        </h3>
        <div className="relative overflow-hidden rounded-xl bg-gradient-to-r from-violet-600 via-purple-600 to-fuchsia-700 min-h-[400px] md:min-h-[500px] flex items-center">
          <div 
            className="absolute inset-0 opacity-30"
            style={{
              backgroundImage: 'url(https://image.pollinations.ai/prompt/luxury-facial-treatment-premium-beauty-spa-professional-skincare-elegant-atmosphere?width=1200&height=600&seed=5)',
              backgroundSize: 'cover',
              backgroundPosition: 'center'
            }}
          />
          <div className="relative z-10 text-white p-6 md:p-12 w-full">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-6 drop-shadow-lg">
                Tratamientos
                <span className="block text-violet-200">Premium</span>
              </h1>
              <p className="text-lg md:text-xl lg:text-2xl mb-6 md:mb-8 text-violet-100 drop-shadow-md">
                Tecnología Avanzada para tu Piel
              </p>
              <p className="text-sm md:text-base lg:text-lg mb-8 md:mb-10 text-violet-50 max-w-2xl mx-auto leading-relaxed">
                Tratamientos faciales y corporales con la tecnología más avanzada. Rejuvenecimiento, hidratación profunda y cuidado integral de tu piel.
              </p>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8 text-xs md:text-sm">
                <div className="bg-white/20 backdrop-blur-sm p-3 md:p-4 rounded-lg">
                  <div className="text-xl md:text-2xl mb-2">💆‍♀️</div>
                  <div className="font-semibold">Faciales</div>
                </div>
                <div className="bg-white/20 backdrop-blur-sm p-3 md:p-4 rounded-lg">
                  <div className="text-xl md:text-2xl mb-2">✨</div>
                  <div className="font-semibold">Rejuvenecimiento</div>
                </div>
                <div className="bg-white/20 backdrop-blur-sm p-3 md:p-4 rounded-lg">
                  <div className="text-xl md:text-2xl mb-2">💧</div>
                  <div className="font-semibold">Hidratación</div>
                </div>
                <div className="bg-white/20 backdrop-blur-sm p-3 md:p-4 rounded-lg">
                  <div className="text-xl md:text-2xl mb-2">🌟</div>
                  <div className="font-semibold">Anti-edad</div>
                </div>
              </div>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-white text-violet-600 px-6 md:px-8 py-3 md:py-4 rounded-full font-bold text-sm md:text-base hover:bg-violet-50 transition-all transform hover:scale-105 shadow-lg">
                  Agendar Consulta
                </button>
                <button className="border-2 border-white text-white px-6 md:px-8 py-3 md:py-4 rounded-full font-semibold text-sm md:text-base hover:bg-white hover:text-violet-600 transition-all">
                  Conocer Tratamientos
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}