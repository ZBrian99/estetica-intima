'use client';

export default function MakeupVariants() {
  return (
    <div className="space-y-8">
      {/* Makeup Variant 1: Wedding Makeup */}
      <div className="bg-gradient-to-br from-rose-50 via-pink-50 to-red-100 p-4 md:p-8 rounded-2xl shadow-xl border border-rose-200">
        <h3 className="text-xl md:text-2xl font-bold text-gray-800 mb-4 md:mb-6 text-center">
          Maquillaje - Bodas
        </h3>
        <div className="relative overflow-hidden rounded-xl bg-gradient-to-r from-rose-600 via-pink-600 to-red-700 min-h-[350px] md:min-h-[450px] flex items-center">
          <div 
            className="absolute inset-0 opacity-25"
            style={{
              backgroundImage: 'url(https://image.pollinations.ai/prompt/elegant-bridal-makeup-professional-artist-working-beautiful-bride-wedding-preparation-luxury-salon?width=1200&height=600&seed=20)',
              backgroundSize: 'cover',
              backgroundPosition: 'center'
            }}
          />
          <div className="relative z-10 text-white p-6 md:p-10 w-full">
            <div className="max-w-4xl mx-auto">
              <div className="grid md:grid-cols-2 gap-6 md:gap-8 items-center">
                <div>
                  <div className="inline-block bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-medium mb-4">
                    💍 Maquillaje Nupcial
                  </div>
                  <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4 md:mb-6 drop-shadow-lg">
                    Tu Día Perfecto
                    <span className="block text-rose-200">Merece el Mejor</span>
                  </h1>
                  <p className="text-sm md:text-base mb-6 md:mb-8 text-rose-100 leading-relaxed">
                    Maquillaje nupcial profesional que realza tu belleza natural. Técnicas de larga duración para que luzcas radiante todo el día.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-3 md:gap-4">
                    <button className="bg-white text-rose-600 px-6 md:px-8 py-3 md:py-4 rounded-full font-bold text-sm md:text-base hover:bg-rose-50 transition-all shadow-lg">
                      Reservar Cita
                    </button>
                    <button className="border-2 border-white text-white px-6 md:px-8 py-3 md:py-4 rounded-full font-semibold text-sm md:text-base hover:bg-white hover:text-rose-600 transition-all">
                      Ver Portfolio
                    </button>
                  </div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm p-4 md:p-6 rounded-lg">
                  <h3 className="font-semibold mb-4 text-base md:text-lg">Incluye:</h3>
                  <ul className="space-y-2 text-rose-100 text-sm md:text-base">
                    <li>✨ Prueba de maquillaje previa</li>
                    <li>💄 Productos de alta gama</li>
                    <li>📸 Maquillaje fotogénico</li>
                    <li>⏰ Duración 12+ horas</li>
                    <li>🎁 Kit de retoques incluido</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Makeup Variant 2: Quinceañera Makeup */}
      <div className="bg-gradient-to-br from-purple-50 via-violet-50 to-indigo-100 p-4 md:p-8 rounded-2xl shadow-xl border border-purple-200">
        <h3 className="text-xl md:text-2xl font-bold text-gray-800 mb-4 md:mb-6 text-center">
          Maquillaje - Quinceañeras
        </h3>
        <div className="relative overflow-hidden rounded-xl bg-gradient-to-r from-purple-600 via-violet-600 to-indigo-700 min-h-[350px] md:min-h-[450px] flex items-center">
          <div 
            className="absolute inset-0 opacity-25"
            style={{
              backgroundImage: 'url(https://image.pollinations.ai/prompt/quinceañera-makeup-young-girl-elegant-dress-professional-makeup-artist-celebration-party-preparation?width=1200&height=600&seed=21)',
              backgroundSize: 'cover',
              backgroundPosition: 'center'
            }}
          />
          <div className="relative z-10 text-white p-6 md:p-10 w-full">
            <div className="max-w-4xl mx-auto text-center">
              <div className="inline-block bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-medium mb-4">
                👑 Quinceañera Especial
              </div>
              <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6 drop-shadow-lg">
                Tu Noche Mágica
                <span className="block text-purple-200 text-xl md:text-3xl lg:text-4xl">Comienza Aquí</span>
              </h1>
              <p className="text-sm md:text-base lg:text-lg mb-6 md:mb-8 text-purple-100 max-w-2xl mx-auto leading-relaxed">
                Maquillaje elegante y juvenil para tu celebración de 15 años. Resaltamos tu belleza natural con un toque sofisticado y moderno.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6 md:mb-8 text-sm md:text-base">
                <div className="bg-white/20 backdrop-blur-sm p-3 md:p-4 rounded-lg">
                  <div className="text-xl md:text-2xl mb-2">🌟</div>
                  <div className="font-semibold">Look Juvenil</div>
                  <div className="text-xs md:text-sm text-purple-200">Elegante y fresco</div>
                </div>
                <div className="bg-white/20 backdrop-blur-sm p-3 md:p-4 rounded-lg">
                  <div className="text-xl md:text-2xl mb-2">📱</div>
                  <div className="font-semibold">Selfie Ready</div>
                  <div className="text-xs md:text-sm text-purple-200">Perfecto para fotos</div>
                </div>
                <div className="bg-white/20 backdrop-blur-sm p-3 md:p-4 rounded-lg">
                  <div className="text-xl md:text-2xl mb-2">💜</div>
                  <div className="font-semibold">Colores Vibrantes</div>
                  <div className="text-xs md:text-sm text-purple-200">Tendencias actuales</div>
                </div>
              </div>
              <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center">
                <button className="bg-white text-purple-600 px-6 md:px-8 py-3 md:py-4 rounded-full font-bold text-sm md:text-base hover:bg-purple-50 transition-all transform hover:scale-105 shadow-lg">
                  Agendar Sesión
                </button>
                <button className="border-2 border-white text-white px-6 md:px-8 py-3 md:py-4 rounded-full font-semibold text-sm md:text-base hover:bg-white hover:text-purple-600 transition-all">
                  Ver Estilos
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Makeup Variant 3: Special Events */}
      <div className="bg-gradient-to-br from-amber-50 via-orange-50 to-yellow-100 p-4 md:p-8 rounded-2xl shadow-xl border border-amber-200">
        <h3 className="text-xl md:text-2xl font-bold text-gray-800 mb-4 md:mb-6 text-center">
          Maquillaje - Eventos Especiales
        </h3>
        <div className="relative overflow-hidden rounded-xl bg-gradient-to-r from-amber-600 via-orange-600 to-yellow-700 min-h-[350px] md:min-h-[450px] flex items-center">
          <div 
            className="absolute inset-0 opacity-25"
            style={{
              backgroundImage: 'url(https://image.pollinations.ai/prompt/glamorous-evening-makeup-special-event-professional-artist-elegant-woman-luxury-setting-party-ready?width=1200&height=600&seed=22)',
              backgroundSize: 'cover',
              backgroundPosition: 'center'
            }}
          />
          <div className="relative z-10 text-white p-6 md:p-10 w-full">
            <div className="max-w-4xl mx-auto">
              <div className="grid md:grid-cols-2 gap-6 md:gap-8 items-center">
                <div className="order-2 md:order-1">
                  <div className="bg-white/10 backdrop-blur-sm p-4 md:p-6 rounded-lg">
                    <h3 className="font-semibold mb-4 text-base md:text-lg">Eventos que Cubrimos:</h3>
                    <div className="space-y-3 text-amber-100 text-sm md:text-base">
                      <div className="flex items-center">
                        <span className="w-2 h-2 bg-amber-300 rounded-full mr-3"></span>
                        Graduaciones
                      </div>
                      <div className="flex items-center">
                        <span className="w-2 h-2 bg-amber-300 rounded-full mr-3"></span>
                        Fiestas de gala
                      </div>
                      <div className="flex items-center">
                        <span className="w-2 h-2 bg-amber-300 rounded-full mr-3"></span>
                        Eventos corporativos
                      </div>
                      <div className="flex items-center">
                        <span className="w-2 h-2 bg-amber-300 rounded-full mr-3"></span>
                        Celebraciones especiales
                      </div>
                    </div>
                  </div>
                </div>
                <div className="order-1 md:order-2">
                  <div className="inline-block bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-medium mb-4">
                    🎉 Eventos Especiales
                  </div>
                  <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4 md:mb-6 drop-shadow-lg">
                    Brillá en Cada
                    <span className="block text-amber-200">Ocasión Especial</span>
                  </h1>
                  <p className="text-sm md:text-base mb-6 md:mb-8 text-amber-100 leading-relaxed">
                    Maquillaje profesional adaptado a cada tipo de evento. Desde looks naturales hasta glamour total, siempre impecable.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-3 md:gap-4">
                    <button className="bg-white text-amber-600 px-6 md:px-8 py-3 md:py-4 rounded-full font-bold text-sm md:text-base hover:bg-amber-50 transition-all shadow-lg">
                      Consultar Precio
                    </button>
                    <button className="border-2 border-white text-white px-6 md:px-8 py-3 md:py-4 rounded-full font-semibold text-sm md:text-base hover:bg-white hover:text-amber-600 transition-all">
                      Ver Galería
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