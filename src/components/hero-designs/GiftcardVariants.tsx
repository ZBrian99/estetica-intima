'use client';

export default function GiftcardVariants() {
  return (
    <div className="space-y-8">
      {/* Giftcard Variant 1: Elegant Premium */}
      <div className="bg-gradient-to-br from-emerald-50 via-teal-50 to-cyan-100 p-4 md:p-8 rounded-2xl shadow-xl border border-emerald-200">
        <h3 className="text-xl md:text-2xl font-bold text-gray-800 mb-4 md:mb-6 text-center">
          Tarjeta de Regalo - Premium
        </h3>
        <div className="relative overflow-hidden rounded-xl bg-gradient-to-r from-emerald-600 via-teal-600 to-cyan-700 min-h-[350px] md:min-h-[450px] flex items-center">
          <div 
            className="absolute inset-0 opacity-25"
            style={{
              backgroundImage: 'url(https://image.pollinations.ai/prompt/luxury-spa-gift-card-elegant-beauty-salon-premium-treatment-relaxation-wellness-center?width=1200&height=600&seed=30)',
              backgroundSize: 'cover',
              backgroundPosition: 'center'
            }}
          />
          <div className="relative z-10 text-white p-6 md:p-10 w-full">
            <div className="max-w-4xl mx-auto">
              <div className="grid md:grid-cols-2 gap-6 md:gap-8 items-center">
                <div>
                  <div className="inline-block bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-medium mb-4">
                    🎁 Regalo Premium
                  </div>
                  <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4 md:mb-6 drop-shadow-lg">
                    Tarjeta de Regalo
                    <span className="block text-emerald-200">Experiencia Premium</span>
                  </h1>
                  <p className="text-sm md:text-base mb-6 md:mb-8 text-emerald-100 leading-relaxed">
                    El regalo perfecto para esa persona especial. Experiencias de belleza y bienestar que perduran en el tiempo.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-3 md:gap-4">
                    <button className="bg-white text-emerald-600 px-6 md:px-8 py-3 md:py-4 rounded-full font-bold text-sm md:text-base hover:bg-emerald-50 transition-all shadow-lg">
                      Comprar Ahora
                    </button>
                    <button className="border-2 border-white text-white px-6 md:px-8 py-3 md:py-4 rounded-full font-semibold text-sm md:text-base hover:bg-white hover:text-emerald-600 transition-all">
                      Ver Servicios
                    </button>
                  </div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm p-4 md:p-6 rounded-lg">
                  <h3 className="font-semibold mb-4 text-base md:text-lg">Incluye:</h3>
                  <ul className="space-y-2 text-emerald-100 text-sm md:text-base">
                    <li>💆‍♀️ Tratamientos faciales</li>
                    <li>💅 Manicura y pedicura</li>
                    <li>✨ Depilación definitiva</li>
                    <li>💄 Maquillaje profesional</li>
                    <li>🎯 Válida por 12 meses</li>
                  </ul>
                  <div className="mt-4 p-3 bg-white/20 rounded-lg text-center">
                    <div className="text-lg md:text-xl font-bold">Desde $15.000</div>
                    <div className="text-xs md:text-sm text-emerald-200">Valores personalizables</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Giftcard Variant 2: Spa Experience */}
      <div className="bg-gradient-to-br from-purple-50 via-violet-50 to-fuchsia-100 p-4 md:p-8 rounded-2xl shadow-xl border border-purple-200">
        <h3 className="text-xl md:text-2xl font-bold text-gray-800 mb-4 md:mb-6 text-center">
          Tarjeta de Regalo - Spa Day
        </h3>
        <div className="relative overflow-hidden rounded-xl bg-gradient-to-r from-purple-600 via-violet-600 to-fuchsia-700 min-h-[350px] md:min-h-[450px] flex items-center">
          <div 
            className="absolute inset-0 opacity-25"
            style={{
              backgroundImage: 'url(https://image.pollinations.ai/prompt/relaxing-spa-day-wellness-center-massage-therapy-beauty-treatments-peaceful-environment?width=1200&height=600&seed=31)',
              backgroundSize: 'cover',
              backgroundPosition: 'center'
            }}
          />
          <div className="relative z-10 text-white p-6 md:p-10 w-full">
            <div className="max-w-4xl mx-auto text-center">
              <div className="inline-block bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-medium mb-4">
                🧘‍♀️ Día de Spa
              </div>
              <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6 drop-shadow-lg">
                Día de Relajación
                <span className="block text-purple-200 text-xl md:text-3xl lg:text-4xl">Total</span>
              </h1>
              <p className="text-sm md:text-base lg:text-lg mb-6 md:mb-8 text-purple-100 max-w-2xl mx-auto leading-relaxed">
                Una experiencia completa de bienestar y belleza. El regalo ideal para desconectar del estrés y renovar energías.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6 md:mb-8 text-sm md:text-base">
                <div className="bg-white/20 backdrop-blur-sm p-3 md:p-4 rounded-lg">
                  <div className="text-xl md:text-2xl mb-2">💆‍♀️</div>
                  <div className="font-semibold">Tratamientos</div>
                  <div className="text-xs md:text-sm text-purple-200">Faciales y corporales</div>
                </div>
                <div className="bg-white/20 backdrop-blur-sm p-3 md:p-4 rounded-lg">
                  <div className="text-xl md:text-2xl mb-2">🌿</div>
                  <div className="font-semibold">Productos Naturales</div>
                  <div className="text-xs md:text-sm text-purple-200">Orgánicos y premium</div>
                </div>
                <div className="bg-white/20 backdrop-blur-sm p-3 md:p-4 rounded-lg">
                  <div className="text-xl md:text-2xl mb-2">⏰</div>
                  <div className="font-semibold">3-4 Horas</div>
                  <div className="text-xs md:text-sm text-purple-200">Experiencia completa</div>
                </div>
              </div>
              <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center">
                <button className="bg-white text-purple-600 px-6 md:px-8 py-3 md:py-4 rounded-full font-bold text-sm md:text-base hover:bg-purple-50 transition-all transform hover:scale-105 shadow-lg">
                  Regalar Experiencia
                </button>
                <button className="border-2 border-white text-white px-6 md:px-8 py-3 md:py-4 rounded-full font-semibold text-sm md:text-base hover:bg-white hover:text-purple-600 transition-all">
                  Ver Detalles
                </button>
              </div>
              <div className="mt-6 bg-white/20 backdrop-blur-sm p-4 rounded-lg inline-block">
                <div className="text-xl md:text-2xl font-bold">$25.000</div>
                <div className="text-xs md:text-sm text-purple-200">Experiencia completa</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Giftcard Variant 3: Flexible Value */}
      <div className="bg-gradient-to-br from-rose-50 via-pink-50 to-red-100 p-4 md:p-8 rounded-2xl shadow-xl border border-rose-200">
        <h3 className="text-xl md:text-2xl font-bold text-gray-800 mb-4 md:mb-6 text-center">
          Tarjeta de Regalo - Valor Libre
        </h3>
        <div className="relative overflow-hidden rounded-xl bg-gradient-to-r from-rose-600 via-pink-600 to-red-700 min-h-[350px] md:min-h-[450px] flex items-center">
          <div 
            className="absolute inset-0 opacity-25"
            style={{
              backgroundImage: 'url(https://image.pollinations.ai/prompt/beauty-salon-gift-certificate-flexible-services-professional-treatments-customizable-experience?width=1200&height=600&seed=32)',
              backgroundSize: 'cover',
              backgroundPosition: 'center'
            }}
          />
          <div className="relative z-10 text-white p-6 md:p-10 w-full">
            <div className="max-w-4xl mx-auto">
              <div className="grid md:grid-cols-2 gap-6 md:gap-8 items-center">
                <div className="order-2 md:order-1">
                  <div className="bg-white/10 backdrop-blur-sm p-4 md:p-6 rounded-lg">
                    <h3 className="font-semibold mb-4 text-base md:text-lg">Valores Disponibles:</h3>
                    <div className="grid grid-cols-2 gap-3 text-rose-100 text-sm md:text-base">
                      <div className="bg-white/20 p-3 rounded-lg text-center">
                        <div className="font-bold">$5.000</div>
                        <div className="text-xs text-rose-200">Básico</div>
                      </div>
                      <div className="bg-white/20 p-3 rounded-lg text-center">
                        <div className="font-bold">$10.000</div>
                        <div className="text-xs text-rose-200">Intermedio</div>
                      </div>
                      <div className="bg-white/20 p-3 rounded-lg text-center">
                        <div className="font-bold">$20.000</div>
                        <div className="text-xs text-rose-200">Premium</div>
                      </div>
                      <div className="bg-white/20 p-3 rounded-lg text-center">
                        <div className="font-bold">Otro</div>
                        <div className="text-xs text-rose-200">A elección</div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="order-1 md:order-2">
                  <div className="inline-block bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-medium mb-4">
                    💳 Valor Flexible
                  </div>
                  <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4 md:mb-6 drop-shadow-lg">
                    Elegí el Valor
                    <span className="block text-rose-200">Que Prefieras</span>
                  </h1>
                  <p className="text-sm md:text-base mb-6 md:mb-8 text-rose-100 leading-relaxed">
                    Tarjeta de regalo con valor personalizable. La persona puede elegir qué servicios usar según sus preferencias.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-3 md:gap-4">
                    <button className="bg-white text-rose-600 px-6 md:px-8 py-3 md:py-4 rounded-full font-bold text-sm md:text-base hover:bg-rose-50 transition-all shadow-lg">
                      Personalizar
                    </button>
                    <button className="border-2 border-white text-white px-6 md:px-8 py-3 md:py-4 rounded-full font-semibold text-sm md:text-base hover:bg-white hover:text-rose-600 transition-all">
                      Ver Servicios
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