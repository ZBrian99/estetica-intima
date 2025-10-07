'use client';

export default function CourseVariants() {
  return (
    <div className="space-y-8">
      {/* Course Variant 1: Professional Certification */}
      <div className="bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-100 p-4 md:p-8 rounded-2xl shadow-xl border border-blue-200">
        <h3 className="text-xl md:text-2xl font-bold text-gray-800 mb-4 md:mb-6 text-center">
          Curso - Certificación Profesional
        </h3>
        <div className="relative overflow-hidden rounded-xl bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-700 min-h-[350px] md:min-h-[450px] flex items-center">
          <div 
            className="absolute inset-0 opacity-25"
            style={{
              backgroundImage: 'url(https://image.pollinations.ai/prompt/professional-depilation-training-course-students-learning-laser-techniques-modern-classroom-certification?width=1200&height=600&seed=10)',
              backgroundSize: 'cover',
              backgroundPosition: 'center'
            }}
          />
          <div className="relative z-10 text-white p-6 md:p-10 w-full">
            <div className="max-w-4xl mx-auto">
              <div className="grid md:grid-cols-2 gap-6 md:gap-8 items-center">
                <div>
                  <div className="inline-block bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-medium mb-4">
                    🎓 Certificación Oficial
                  </div>
                  <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4 md:mb-6 drop-shadow-lg">
                    Curso Profesional de
                    <span className="block text-blue-200">Depilación Láser</span>
                  </h1>
                  <p className="text-sm md:text-base mb-6 md:mb-8 text-blue-100 leading-relaxed">
                    Convertite en especialista certificado en depilación láser. Curso intensivo con práctica real y certificación reconocida.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-3 md:gap-4">
                    <button className="bg-white text-blue-600 px-6 md:px-8 py-3 md:py-4 rounded-full font-bold text-sm md:text-base hover:bg-blue-50 transition-all shadow-lg">
                      Inscribirse Ahora
                    </button>
                    <button className="border-2 border-white text-white px-6 md:px-8 py-3 md:py-4 rounded-full font-semibold text-sm md:text-base hover:bg-white hover:text-blue-600 transition-all">
                      Ver Programa
                    </button>
                  </div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm p-4 md:p-6 rounded-lg">
                  <h3 className="font-semibold mb-4 text-base md:text-lg">Incluye:</h3>
                  <ul className="space-y-2 text-blue-100 text-sm md:text-base">
                    <li>📚 Material teórico completo</li>
                    <li>🔬 Práctica con equipos profesionales</li>
                    <li>📜 Certificado oficial</li>
                    <li>👥 Grupos reducidos</li>
                    <li>💼 Bolsa de trabajo</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Course Variant 2: Intensive Workshop */}
      <div className="bg-gradient-to-br from-emerald-50 via-teal-50 to-cyan-100 p-4 md:p-8 rounded-2xl shadow-xl border border-emerald-200">
        <h3 className="text-xl md:text-2xl font-bold text-gray-800 mb-4 md:mb-6 text-center">
          Curso - Taller Intensivo
        </h3>
        <div className="relative overflow-hidden rounded-xl bg-gradient-to-r from-emerald-600 via-teal-600 to-cyan-700 min-h-[350px] md:min-h-[450px] flex items-center">
          <div 
            className="absolute inset-0 opacity-25"
            style={{
              backgroundImage: 'url(https://image.pollinations.ai/prompt/intensive-beauty-workshop-hands-on-training-depilation-techniques-professional-instructor-small-group?width=1200&height=600&seed=11)',
              backgroundSize: 'cover',
              backgroundPosition: 'center'
            }}
          />
          <div className="relative z-10 text-white p-6 md:p-10 w-full">
            <div className="max-w-4xl mx-auto text-center">
              <div className="inline-block bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-medium mb-4">
                ⚡ Aprendizaje Acelerado
              </div>
              <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6 drop-shadow-lg">
                Taller Intensivo
                <span className="block text-emerald-200 text-xl md:text-3xl lg:text-4xl">Fin de Semana</span>
              </h1>
              <p className="text-sm md:text-base lg:text-lg mb-6 md:mb-8 text-emerald-100 max-w-2xl mx-auto leading-relaxed">
                Aprendé las técnicas esenciales de depilación en un fin de semana intensivo. Perfecto para quienes buscan capacitación rápida y efectiva.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6 md:mb-8 text-sm md:text-base">
                <div className="bg-white/20 backdrop-blur-sm p-3 md:p-4 rounded-lg">
                  <div className="text-xl md:text-2xl mb-2">⏰</div>
                  <div className="font-semibold">16 horas</div>
                  <div className="text-xs md:text-sm text-emerald-200">2 días intensivos</div>
                </div>
                <div className="bg-white/20 backdrop-blur-sm p-3 md:p-4 rounded-lg">
                  <div className="text-xl md:text-2xl mb-2">👥</div>
                  <div className="font-semibold">Máx. 8 personas</div>
                  <div className="text-xs md:text-sm text-emerald-200">Atención personalizada</div>
                </div>
                <div className="bg-white/20 backdrop-blur-sm p-3 md:p-4 rounded-lg">
                  <div className="text-xl md:text-2xl mb-2">🎯</div>
                  <div className="font-semibold">100% Práctico</div>
                  <div className="text-xs md:text-sm text-emerald-200">Casos reales</div>
                </div>
              </div>
              <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center">
                <button className="bg-white text-emerald-600 px-6 md:px-8 py-3 md:py-4 rounded-full font-bold text-sm md:text-base hover:bg-emerald-50 transition-all transform hover:scale-105 shadow-lg">
                  Reservar Cupo
                </button>
                <button className="border-2 border-white text-white px-6 md:px-8 py-3 md:py-4 rounded-full font-semibold text-sm md:text-base hover:bg-white hover:text-emerald-600 transition-all">
                  Más Información
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Course Variant 3: Advanced Specialization */}
      <div className="bg-gradient-to-br from-purple-50 via-violet-50 to-fuchsia-100 p-4 md:p-8 rounded-2xl shadow-xl border border-purple-200">
        <h3 className="text-xl md:text-2xl font-bold text-gray-800 mb-4 md:mb-6 text-center">
          Curso - Especialización Avanzada
        </h3>
        <div className="relative overflow-hidden rounded-xl bg-gradient-to-r from-purple-600 via-violet-600 to-fuchsia-700 min-h-[350px] md:min-h-[450px] flex items-center">
          <div 
            className="absolute inset-0 opacity-25"
            style={{
              backgroundImage: 'url(https://image.pollinations.ai/prompt/advanced-beauty-specialization-course-expert-instructor-modern-equipment-professional-training-environment?width=1200&height=600&seed=12)',
              backgroundSize: 'cover',
              backgroundPosition: 'center'
            }}
          />
          <div className="relative z-10 text-white p-6 md:p-10 w-full">
            <div className="max-w-4xl mx-auto">
              <div className="grid md:grid-cols-2 gap-6 md:gap-8 items-center">
                <div className="order-2 md:order-1">
                  <div className="bg-white/10 backdrop-blur-sm p-4 md:p-6 rounded-lg">
                    <h3 className="font-semibold mb-4 text-base md:text-lg">Módulos Avanzados:</h3>
                    <div className="space-y-3 text-purple-100 text-sm md:text-base">
                      <div className="flex items-center">
                        <span className="w-2 h-2 bg-purple-300 rounded-full mr-3"></span>
                        Fotodepilación avanzada
                      </div>
                      <div className="flex items-center">
                        <span className="w-2 h-2 bg-purple-300 rounded-full mr-3"></span>
                        Láser Alexandrita y Diodo
                      </div>
                      <div className="flex items-center">
                        <span className="w-2 h-2 bg-purple-300 rounded-full mr-3"></span>
                        Tratamiento de pieles sensibles
                      </div>
                      <div className="flex items-center">
                        <span className="w-2 h-2 bg-purple-300 rounded-full mr-3"></span>
                        Protocolos de seguridad
                      </div>
                    </div>
                  </div>
                </div>
                <div className="order-1 md:order-2">
                  <div className="inline-block bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-medium mb-4">
                    🏆 Nivel Experto
                  </div>
                  <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4 md:mb-6 drop-shadow-lg">
                    Especialización
                    <span className="block text-purple-200">Avanzada</span>
                  </h1>
                  <p className="text-sm md:text-base mb-6 md:mb-8 text-purple-100 leading-relaxed">
                    Para profesionales que buscan perfeccionar sus técnicas. Tecnologías de última generación y casos complejos.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-3 md:gap-4">
                    <button className="bg-white text-purple-600 px-6 md:px-8 py-3 md:py-4 rounded-full font-bold text-sm md:text-base hover:bg-purple-50 transition-all shadow-lg">
                      Consultar Requisitos
                    </button>
                    <button className="border-2 border-white text-white px-6 md:px-8 py-3 md:py-4 rounded-full font-semibold text-sm md:text-base hover:bg-white hover:text-purple-600 transition-all">
                      Ver Cronograma
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}