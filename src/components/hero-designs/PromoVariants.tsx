'use client';

export default function PromoVariants() {
  return (
    <div className="space-y-12">
      {/* Variante 1: Descuento porcentual con urgencia */}
      <div className="min-h-screen bg-gradient-to-br from-red-500 via-pink-500 to-purple-600 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="absolute top-10 right-10 animate-pulse">
          <div className="bg-yellow-400 text-black px-4 py-2 rounded-full font-bold text-sm">
            ⏰ ÚLTIMOS DÍAS
          </div>
        </div>
        
        <div className="container mx-auto px-6 py-20 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <div className="mb-8">
              <span className="text-yellow-300 text-sm font-medium tracking-wide uppercase">
                Promoción Especial
              </span>
            </div>
            <h1 className="text-7xl md:text-8xl font-bold mb-6">
              50% OFF
            </h1>
            <h2 className="text-3xl md:text-4xl font-light mb-8">
              En todos los tratamientos faciales
            </h2>
            <p className="text-xl mb-10 opacity-90">
              Aprovechá esta oportunidad única. Válido hasta el 31 de marzo.
            </p>
            
            <div className="bg-white/10 backdrop-blur-sm p-8 rounded-lg mb-10 max-w-2xl mx-auto">
              <h3 className="text-2xl font-semibold mb-4">Incluye:</h3>
              <div className="grid md:grid-cols-2 gap-4 text-left">
                <div>✨ Limpieza facial profunda</div>
                <div>✨ Peeling químico</div>
                <div>✨ Alpha Synergy Facial</div>
                <div>✨ Hollywood Peel</div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <button className="bg-yellow-400 hover:bg-yellow-300 text-black px-10 py-4 rounded-full font-bold text-lg transition-all transform hover:scale-105">
                Reservar Ahora
              </button>
              <button className="border-2 border-white text-white px-10 py-4 rounded-full font-semibold text-lg hover:bg-white hover:text-purple-600 transition-all">
                Ver Condiciones
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Variante 2: Combo especial con precio destacado */}
      <div className="min-h-screen bg-gradient-to-br from-teal-600 via-blue-600 to-indigo-700 text-white relative">
        <div className="absolute inset-0">
          <img 
            src="https://image.pollinations.ai/prompt/modern%20spa%20treatment%20room%20professional%20equipment%20clean%20aesthetic%20blue%20lighting?width=1200&height=800&model=flux-realism&enhance=true&nologo=true" 
            alt="Tratamiento spa" 
            className="w-full h-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-teal-600/90 to-indigo-700/90"></div>
        </div>
        
        <div className="container mx-auto px-6 py-20 relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="lg:w-1/2 text-center lg:text-left">
              <div className="mb-6">
                <span className="bg-yellow-400 text-black px-4 py-2 rounded-full text-sm font-bold">
                  🔥 COMBO FULL GLÚTEOS
                </span>
              </div>
              <h1 className="text-5xl lg:text-6xl font-bold mb-6">
                Pack Completo
                <span className="block text-yellow-300">Glúteos Perfectos</span>
              </h1>
              
              <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg mb-8">
                <div className="text-center mb-4">
                  <div className="text-sm opacity-80 line-through">Precio individual: $180.000</div>
                  <div className="text-4xl font-bold text-yellow-300">$120.000</div>
                  <div className="text-sm">Ahorrás $60.000</div>
                </div>
                <div className="border-t border-white/20 pt-4">
                  <h3 className="font-semibold mb-3">El pack incluye:</h3>
                  <div className="text-sm space-y-2">
                    <div>✓ Depilación completa zona glúteos</div>
                    <div>✓ 4 sesiones de Maderoterapia</div>
                    <div>✓ 4 sesiones de Vacuum Therapy</div>
                    <div>✓ 2 sesiones de Alpha Synergy</div>
                  </div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <button className="bg-yellow-400 hover:bg-yellow-300 text-black px-8 py-4 rounded-full font-bold text-lg transition-all transform hover:scale-105">
                  Quiero este combo
                </button>
                <button className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white hover:text-teal-600 transition-all">
                  Más detalles
                </button>
              </div>
            </div>
            
            <div className="lg:w-1/2">
              <div className="relative">
                <img 
                  src="https://image.pollinations.ai/prompt/woman%20receiving%20body%20treatment%20professional%20spa%20modern%20equipment%20relaxing%20atmosphere?width=600&height=700&model=flux-realism&enhance=true&nologo=true" 
                  alt="Tratamiento corporal" 
                  className="w-full rounded-2xl shadow-2xl"
                />
                <div className="absolute -top-4 -right-4 bg-red-500 text-white p-3 rounded-full shadow-lg animate-pulse">
                  <div className="text-xs font-bold">¡OFERTA!</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Variante 3: Pase libre con beneficios */}
      <div className="min-h-screen bg-gradient-to-br from-purple-600 via-pink-600 to-red-500 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-black/30"></div>
        <div className="container mx-auto px-6 py-20 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <div className="mb-8">
              <span className="bg-white/20 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm font-medium">
                🎫 PASE LIBRE INTIMA
              </span>
            </div>
            <h1 className="text-6xl md:text-7xl font-bold mb-6">
              PASE LIBRE
            </h1>
            <h2 className="text-2xl md:text-3xl font-light mb-8 opacity-90">
              Acceso ilimitado por 3 meses
            </h2>
            
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div className="bg-white/10 backdrop-blur-sm p-8 rounded-lg">
                <h3 className="text-2xl font-bold mb-4 text-yellow-300">$150.000</h3>
                <h4 className="font-semibold mb-4">¿Qué incluye?</h4>
                <div className="text-sm space-y-2 text-left">
                  <div>✓ Todas las sesiones de depilación que necesites</div>
                  <div>✓ Tratamientos corporales ilimitados</div>
                  <div>✓ Limpiezas faciales mensuales</div>
                  <div>✓ Descuentos en productos</div>
                  <div>✓ Prioridad en turnos</div>
                </div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm p-8 rounded-lg">
                <h3 className="text-xl font-semibold mb-4">Beneficios exclusivos</h3>
                <div className="text-sm space-y-3">
                  <div className="flex items-center gap-3">
                    <span className="text-yellow-300">🎁</span>
                    <span>Regalo de bienvenida</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-yellow-300">📱</span>
                    <span>App exclusiva para reservas</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-yellow-300">👥</span>
                    <span>Invita una amiga gratis</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-yellow-300">💎</span>
                    <span>Tratamientos VIP incluidos</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <button className="bg-gradient-to-r from-yellow-400 to-orange-400 text-black px-10 py-4 rounded-full font-bold text-lg hover:from-yellow-300 hover:to-orange-300 transition-all transform hover:scale-105">
                Obtener Pase Libre
              </button>
              <button className="border border-white text-white px-10 py-4 rounded-full font-semibold text-lg hover:bg-white hover:text-purple-600 transition-all">
                Conocer más
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Variante 4: Promoción estacional */}
      <div className="min-h-screen bg-gradient-to-br from-orange-400 via-pink-400 to-purple-500 text-white relative">
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-yellow-300/20 rounded-full blur-2xl"></div>
        </div>
        
        <div className="container mx-auto px-6 py-20 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <div className="mb-8">
              <span className="bg-white/20 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm font-medium">
                🌸 PROMOCIÓN PRIMAVERA
              </span>
            </div>
            <h1 className="text-6xl md:text-7xl font-bold mb-6">
              Primavera
              <span className="block text-yellow-300">Radiante</span>
            </h1>
            <p className="text-xl md:text-2xl mb-10 opacity-90">
              Preparate para la nueva estación con descuentos especiales
            </p>
            
            <div className="grid md:grid-cols-3 gap-6 mb-12">
              <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg">
                <div className="text-3xl mb-3">🌺</div>
                <h3 className="font-semibold mb-2">30% OFF</h3>
                <p className="text-sm opacity-80">Depilación definitiva</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg">
                <div className="text-3xl mb-3">✨</div>
                <h3 className="font-semibold mb-2">25% OFF</h3>
                <p className="text-sm opacity-80">Tratamientos faciales</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg">
                <div className="text-3xl mb-3">💆‍♀️</div>
                <h3 className="font-semibold mb-2">20% OFF</h3>
                <p className="text-sm opacity-80">Tratamientos corporales</p>
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg mb-10 max-w-2xl mx-auto">
              <p className="text-sm">
                <strong>Válido hasta el 21 de diciembre de 2025</strong><br/>
                No acumulable con otras promociones. Consultá condiciones.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <button className="bg-white text-purple-600 px-10 py-4 rounded-full font-bold text-lg hover:bg-gray-100 transition-all transform hover:scale-105">
                Aprovechar Descuentos
              </button>
              <button className="border-2 border-white text-white px-10 py-4 rounded-full font-semibold text-lg hover:bg-white hover:text-purple-600 transition-all">
                Ver Todos los Servicios
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Variante 5: Combo cejas con antes/después */}
      <div className="min-h-screen bg-gradient-to-br from-amber-100 via-orange-50 to-red-50 relative">
        <div className="container mx-auto px-6 py-20">
          <div className="text-center max-w-4xl mx-auto">
            <div className="mb-8">
              <span className="bg-amber-200 text-amber-800 px-4 py-2 rounded-full text-sm font-semibold">
                👁️ COMBO CEJAS PERFECTAS
              </span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-gray-800 mb-6">
              Cejas de
              <span className="block text-amber-600">Impacto</span>
            </h1>
            <p className="text-xl text-gray-600 mb-12">
              Perfilado + Lifting + Tinte en una sola sesión
            </p>
            
            {/* Antes y después */}
            <div className="grid md:grid-cols-2 gap-8 mb-12 max-w-3xl mx-auto">
              <div className="relative">
                <img 
                  src="https://image.pollinations.ai/prompt/woman%20eyebrows%20before%20treatment%20natural%20ungroomed%20professional%20photography?width=400&height=300&model=flux-realism&enhance=true&nologo=true" 
                  alt="Cejas antes" 
                  className="w-full rounded-lg shadow-lg"
                />
                <div className="absolute top-4 left-4 bg-red-500 text-white px-3 py-1 rounded-full text-sm font-bold">
                  Antes
                </div>
              </div>
              <div className="relative">
                <img 
                  src="https://image.pollinations.ai/prompt/woman%20perfect%20shaped%20eyebrows%20after%20professional%20treatment%20lifted%20tinted%20groomed?width=400&height=300&model=flux-realism&enhance=true&nologo=true" 
                  alt="Cejas después" 
                  className="w-full rounded-lg shadow-lg"
                />
                <div className="absolute top-4 left-4 bg-green-500 text-white px-3 py-1 rounded-full text-sm font-bold">
                  Después
                </div>
              </div>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-lg mb-10 max-w-2xl mx-auto">
              <div className="text-center mb-6">
                <div className="text-sm text-gray-500 line-through">Precio individual: $45.000</div>
                <div className="text-4xl font-bold text-amber-600">$30.000</div>
                <div className="text-sm text-green-600 font-semibold">Ahorrás $15.000</div>
              </div>
              <div className="grid md:grid-cols-3 gap-4 text-sm text-gray-600">
                <div className="text-center">
                  <div className="text-2xl mb-2">✂️</div>
                  <div className="font-semibold">Perfilado</div>
                  <div>Forma perfecta</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl mb-2">⬆️</div>
                  <div className="font-semibold">Lifting</div>
                  <div>Efecto levantado</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl mb-2">🎨</div>
                  <div className="font-semibold">Tinte</div>
                  <div>Color intenso</div>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-amber-600 hover:bg-amber-700 text-white px-10 py-4 rounded-lg font-semibold text-lg transition-all transform hover:scale-105 shadow-lg">
                Reservar Combo
              </button>
              <button className="text-amber-600 hover:text-amber-700 px-10 py-4 font-semibold text-lg transition-all border border-amber-600 rounded-lg hover:bg-amber-50">
                Ver más trabajos
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Variante 6: Promoción flash con contador */}
      <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-red-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-red-500/20"></div>
        <div className="absolute top-0 left-0 right-0 bg-red-600 text-center py-2 text-sm font-bold animate-pulse">
          ⚡ FLASH SALE - SOLO POR HOY ⚡
        </div>
        
        <div className="container mx-auto px-6 py-20 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-7xl md:text-8xl font-bold mb-6 text-red-400">
              FLASH
              <span className="block text-white">SALE</span>
            </h1>
            <h2 className="text-3xl md:text-4xl font-light mb-8">
              70% OFF en tratamientos seleccionados
            </h2>
            
            {/* Contador regresivo simulado */}
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg mb-10 max-w-md mx-auto">
              <div className="text-sm mb-2">Termina en:</div>
              <div className="grid grid-cols-4 gap-2 text-center">
                <div className="bg-red-600 p-3 rounded">
                  <div className="text-2xl font-bold">08</div>
                  <div className="text-xs">HORAS</div>
                </div>
                <div className="bg-red-600 p-3 rounded">
                  <div className="text-2xl font-bold">45</div>
                  <div className="text-xs">MIN</div>
                </div>
                <div className="bg-red-600 p-3 rounded">
                  <div className="text-2xl font-bold">23</div>
                  <div className="text-xs">SEG</div>
                </div>
                <div className="bg-red-600 p-3 rounded">
                  <div className="text-2xl font-bold">!</div>
                  <div className="text-xs">YA</div>
                </div>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6 mb-12">
              <div className="bg-white/5 border border-red-400 p-6 rounded-lg">
                <h3 className="text-xl font-bold text-red-400 mb-2">Maderoterapia</h3>
                <div className="text-sm line-through opacity-60">$25.000</div>
                <div className="text-2xl font-bold">$7.500</div>
              </div>
              <div className="bg-white/5 border border-red-400 p-6 rounded-lg">
                <h3 className="text-xl font-bold text-red-400 mb-2">Alpha Synergy</h3>
                <div className="text-sm line-through opacity-60">$30.000</div>
                <div className="text-2xl font-bold">$9.000</div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <button className="bg-red-600 hover:bg-red-700 text-white px-10 py-4 rounded-full font-bold text-lg transition-all transform hover:scale-105 animate-pulse">
                ¡Aprovechar Ahora!
              </button>
              <button className="border border-red-400 text-red-400 px-10 py-4 rounded-full font-semibold text-lg hover:bg-red-400 hover:text-white transition-all">
                Ver Todos los Descuentos
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Variante 7: Pack de mantenimiento */}
      <div className="min-h-screen bg-gradient-to-br from-emerald-500 via-teal-500 to-cyan-600 text-white relative">
        <div className="absolute inset-0">
          <img 
            src="https://image.pollinations.ai/prompt/relaxing%20spa%20environment%20woman%20enjoying%20treatment%20peaceful%20atmosphere%20professional%20care?width=1200&height=800&model=flux-realism&enhance=true&nologo=true" 
            alt="Spa relajante" 
            className="w-full h-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/90 to-cyan-600/90"></div>
        </div>
        
        <div className="container mx-auto px-6 py-20 relative z-10">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <span className="bg-white/20 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm font-medium">
                🌿 PACK MANTENIMIENTO
              </span>
              <h1 className="text-5xl md:text-6xl font-bold mt-6 mb-6">
                Plan de Cuidado
                <span className="block text-yellow-300">Mensual</span>
              </h1>
              <p className="text-xl opacity-90">
                Todo lo que necesitás para mantenerte radiante cada mes
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white/10 backdrop-blur-sm p-8 rounded-lg">
                <h3 className="text-2xl font-bold mb-6 text-center">Plan Básico</h3>
                <div className="text-center mb-6">
                  <div className="text-4xl font-bold text-yellow-300">$80.000</div>
                  <div className="text-sm opacity-80">/mes</div>
                </div>
                <div className="space-y-3 text-sm">
                  <div>✓ 2 sesiones de depilación</div>
                  <div>✓ 1 limpieza facial</div>
                  <div>✓ 1 tratamiento corporal</div>
                  <div>✓ Descuento 15% en productos</div>
                </div>
                <button className="w-full bg-white/20 hover:bg-white/30 text-white px-6 py-3 rounded-lg font-semibold mt-6 transition-all">
                  Elegir Plan
                </button>
              </div>
              
              <div className="bg-white/20 backdrop-blur-sm p-8 rounded-lg border-2 border-yellow-300">
                <div className="text-center mb-2">
                  <span className="bg-yellow-300 text-black px-3 py-1 rounded-full text-xs font-bold">
                    MÁS POPULAR
                  </span>
                </div>
                <h3 className="text-2xl font-bold mb-6 text-center">Plan Premium</h3>
                <div className="text-center mb-6">
                  <div className="text-4xl font-bold text-yellow-300">$120.000</div>
                  <div className="text-sm opacity-80">/mes</div>
                </div>
                <div className="space-y-3 text-sm">
                  <div>✓ 4 sesiones de depilación</div>
                  <div>✓ 2 limpiezas faciales</div>
                  <div>✓ 2 tratamientos corporales</div>
                  <div>✓ 1 tratamiento facial premium</div>
                  <div>✓ Descuento 25% en productos</div>
                  <div>✓ Prioridad en turnos</div>
                </div>
                <button className="w-full bg-yellow-300 hover:bg-yellow-400 text-black px-6 py-3 rounded-lg font-bold mt-6 transition-all">
                  Elegir Premium
                </button>
              </div>
            </div>
            
            <div className="text-center mt-12">
              <p className="text-sm opacity-80 mb-6">
                Sin permanencia • Cancelás cuando quieras • Primera consulta gratis
              </p>
              <button className="border border-white text-white px-8 py-3 rounded-full font-semibold hover:bg-white hover:text-emerald-600 transition-all">
                Consultar por WhatsApp
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Variante 8: Promoción de referidos */}
      <div className="min-h-screen bg-gradient-to-br from-violet-600 via-purple-600 to-fuchsia-600 text-white relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-pink-300/20 rounded-full blur-2xl"></div>
        </div>
        
        <div className="container mx-auto px-6 py-20 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <div className="mb-8">
              <span className="bg-white/20 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm font-medium">
                👥 PROGRAMA REFERIDOS
              </span>
            </div>
            <h1 className="text-6xl md:text-7xl font-bold mb-6">
              Traé una
              <span className="block text-pink-300">Amiga</span>
            </h1>
            <h2 className="text-2xl md:text-3xl font-light mb-8 opacity-90">
              Y ambas obtienen beneficios increíbles
            </h2>
            
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div className="bg-white/10 backdrop-blur-sm p-8 rounded-lg">
                <div className="text-4xl mb-4">🎁</div>
                <h3 className="text-2xl font-bold mb-4">Para vos</h3>
                <div className="space-y-2 text-sm">
                  <div>✓ 30% de descuento en tu próximo tratamiento</div>
                  <div>✓ Puntos dobles en tu tarjeta de fidelidad</div>
                  <div>✓ Acceso a promociones exclusivas</div>
                </div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm p-8 rounded-lg">
                <div className="text-4xl mb-4">💝</div>
                <h3 className="text-2xl font-bold mb-4">Para tu amiga</h3>
                <div className="space-y-2 text-sm">
                  <div>✓ 50% OFF en su primer tratamiento</div>
                  <div>✓ Consulta y asesoramiento gratuito</div>
                  <div>✓ Kit de bienvenida de regalo</div>
                </div>
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg mb-10 max-w-2xl mx-auto">
              <h3 className="font-semibold mb-4">¿Cómo funciona?</h3>
              <div className="grid md:grid-cols-3 gap-4 text-sm">
                <div className="text-center">
                  <div className="w-8 h-8 bg-pink-500 text-white rounded-full flex items-center justify-center mx-auto mb-2 text-xs font-bold">1</div>
                  <p>Invitás a tu amiga</p>
                </div>
                <div className="text-center">
                  <div className="w-8 h-8 bg-pink-500 text-white rounded-full flex items-center justify-center mx-auto mb-2 text-xs font-bold">2</div>
                  <p>Ella agenda su cita</p>
                </div>
                <div className="text-center">
                  <div className="w-8 h-8 bg-pink-500 text-white rounded-full flex items-center justify-center mx-auto mb-2 text-xs font-bold">3</div>
                  <p>Ambas reciben beneficios</p>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <button className="bg-gradient-to-r from-pink-400 to-purple-400 text-white px-10 py-4 rounded-full font-bold text-lg hover:from-pink-300 hover:to-purple-300 transition-all transform hover:scale-105">
                Invitar Amiga
              </button>
              <button className="border border-white text-white px-10 py-4 rounded-full font-semibold text-lg hover:bg-white hover:text-purple-600 transition-all">
                Ver Términos
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Variante 9: Promoción de temporada alta */}
      <div className="min-h-screen bg-gradient-to-br from-yellow-400 via-orange-400 to-red-500 text-white relative">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="container mx-auto px-6 py-20 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <div className="mb-8">
              <span className="bg-white/20 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm font-medium">
                ☀️ PREPARATE PARA EL VERANO
              </span>
            </div>
            <h1 className="text-6xl md:text-7xl font-bold mb-6">
              Summer
              <span className="block text-yellow-200">Ready</span>
            </h1>
            <p className="text-xl md:text-2xl mb-12 opacity-90">
              Todo lo que necesitás para lucir increíble en verano
            </p>
            
            <div className="grid md:grid-cols-3 gap-6 mb-12">
              <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg">
                <div className="text-3xl mb-3">🏖️</div>
                <h3 className="font-semibold mb-2">Pack Playa</h3>
                <div className="text-2xl font-bold text-yellow-200 mb-2">$90.000</div>
                <div className="text-sm space-y-1">
                  <div>• Depilación completa</div>
                  <div>• Bronceado natural</div>
                  <div>• Tratamiento reafirmante</div>
                </div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg border-2 border-yellow-200">
                <div className="text-3xl mb-3">✨</div>
                <h3 className="font-semibold mb-2">Pack Completo</h3>
                <div className="text-2xl font-bold text-yellow-200 mb-2">$150.000</div>
                <div className="text-sm space-y-1">
                  <div>• Todo del Pack Playa</div>
                  <div>• Tratamientos faciales</div>
                  <div>• Maderoterapia x4</div>
                  <div>• Mantenimiento 2 meses</div>
                </div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg">
                <div className="text-3xl mb-3">👙</div>
                <h3 className="font-semibold mb-2">Pack Express</h3>
                <div className="text-2xl font-bold text-yellow-200 mb-2">$60.000</div>
                <div className="text-sm space-y-1">
                  <div>• Depilación bikini</div>
                  <div>• Axilas</div>
                  <div>• Piernas completas</div>
                </div>
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg mb-10 max-w-2xl mx-auto">
              <p className="text-sm">
                <strong>Oferta válida hasta el 31 de enero</strong><br/>
                Incluye seguimiento post-tratamiento y garantía de resultados
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <button className="bg-white text-orange-600 px-10 py-4 rounded-full font-bold text-lg hover:bg-gray-100 transition-all transform hover:scale-105">
                Elegir mi Pack
              </button>
              <button className="border-2 border-white text-white px-10 py-4 rounded-full font-semibold text-lg hover:bg-white hover:text-orange-600 transition-all">
                Asesoramiento Gratis
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Variante 10: Promoción de lanzamiento */}
      <div className="min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 text-white relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-indigo-500/20 via-purple-500/20 to-pink-500/20"></div>
          <div className="absolute top-1/4 right-1/4 w-32 h-32 border border-pink-400 rounded-full opacity-30"></div>
          <div className="absolute bottom-1/4 left-1/4 w-24 h-24 border border-indigo-400 rounded-full opacity-30"></div>
        </div>
        
        <div className="container mx-auto px-6 py-20 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <div className="mb-8">
              <span className="bg-gradient-to-r from-pink-400 to-purple-400 text-white px-4 py-2 rounded-full text-sm font-bold">
                🚀 NUEVO TRATAMIENTO
              </span>
            </div>
            <h1 className="text-6xl md:text-7xl font-bold mb-6">
              Hollywood
              <span className="block bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent">
                Peel
              </span>
            </h1>
            <h2 className="text-2xl md:text-3xl font-light mb-8 opacity-90">
              El tratamiento facial más revolucionario llega a Intima
            </h2>
            
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div>
                <img 
                  src="https://image.pollinations.ai/prompt/woman%20receiving%20advanced%20facial%20treatment%20hollywood%20peel%20professional%20spa%20modern%20equipment?width=500&height=400&model=flux-realism&enhance=true&nologo=true" 
                  alt="Hollywood Peel" 
                  className="w-full rounded-lg shadow-2xl"
                />
              </div>
              <div className="text-left">
                <h3 className="text-2xl font-bold mb-6 text-pink-400">¿Qué es el Hollywood Peel?</h3>
                <div className="space-y-4 text-sm">
                  <div className="flex items-start gap-3">
                    <span className="text-pink-400">✨</span>
                    <span>Tratamiento con láser de carbón activado</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-pink-400">✨</span>
                    <span>Elimina impurezas y células muertas</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-pink-400">✨</span>
                    <span>Estimula la producción de colágeno</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-pink-400">✨</span>
                    <span>Resultados inmediatos y sin dolor</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-pink-400">✨</span>
                    <span>Piel más luminosa y uniforme</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-pink-500/20 to-purple-500/20 backdrop-blur-sm p-8 rounded-lg mb-10">
              <h3 className="text-2xl font-bold mb-4 text-pink-400">Oferta de Lanzamiento</h3>
              <div className="text-center mb-4">
                <div className="text-sm opacity-80 line-through">Precio regular: $80.000</div>
                <div className="text-5xl font-bold text-pink-400">$40.000</div>
                <div className="text-sm text-green-400 font-semibold">50% OFF - Solo primeras 50 clientas</div>
              </div>
              <p className="text-sm opacity-90">
                Incluye: Consulta previa + Tratamiento completo + Seguimiento post-tratamiento
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <button className="bg-gradient-to-r from-pink-500 to-purple-500 text-white px-10 py-4 rounded-full font-bold text-lg hover:from-pink-400 hover:to-purple-400 transition-all transform hover:scale-105">
                Reservar mi lugar
              </button>
              <button className="border border-pink-400 text-pink-400 px-10 py-4 rounded-full font-semibold text-lg hover:bg-pink-400 hover:text-white transition-all">
                Más información
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}