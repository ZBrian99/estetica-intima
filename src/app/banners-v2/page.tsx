'use client'

import React, { useState } from 'react'
import { FaPlay, FaClock, FaMapMarkerAlt, FaPhone, FaInstagram, FaWhatsapp, FaCheck, FaStar, FaGift, FaUsers, FaCalendarAlt, FaHeart, FaFire,  FaGem, FaCrown, FaLeaf, FaPalette, FaGraduationCap, FaAward, FaCertificate,  FaUserFriends, FaHome, FaShoppingBag, FaTag, FaPercent, FaArrowRight, FaBolt, FaMagic, FaRocket, FaTrophy, FaThumbsUp } from 'react-icons/fa'

// Hero Principal Variants (5)
const HeroPrincipalVariants = () => {
  const [currentVariant, setCurrentVariant] = useState(0)
  
  const variants = [
    // Variant 1: Elegante y profesional
    {
      title: "Íntima Estética & Spa",
      subtitle: "Tu belleza, nuestra pasión",
      description: "Centro de estética integral en Mar del Plata. Tratamientos de depilación láser, corporales y faciales con la mejor tecnología.",
      cta: "Conocé nuestros servicios",
      bgGradient: "from-purple-600 via-purple-700 to-purple-800",
      textColor: "text-white"
    },
    // Variant 2: Moderno y dinámico
    {
      title: "Íntima",
      subtitle: "Estética & Bienestar",
      description: "Transformamos tu rutina de belleza con tratamientos personalizados y tecnología de vanguardia en el corazón de Mar del Plata.",
      cta: "Reservá tu turno",
      bgGradient: "from-purple-500 via-pink-500 to-purple-600",
      textColor: "text-white"
    },
    // Variant 3: Minimalista y sofisticado
    {
      title: "ÍNTIMA",
      subtitle: "Estética Profesional",
      description: "Especialistas en depilación láser, tratamientos corporales y cuidado facial. Más de 10 años cuidando tu belleza.",
      cta: "Descubrí más",
      bgGradient: "from-purple-800 via-purple-900 to-black",
      textColor: "text-white"
    },
    // Variant 4: Cálido y acogedor
    {
      title: "Íntima Estética",
      subtitle: "Donde tu belleza florece",
      description: "Un espacio diseñado para tu bienestar. Tratamientos personalizados con atención profesional y calidez humana.",
      cta: "Visitanos",
      bgGradient: "from-purple-400 via-purple-500 to-purple-700",
      textColor: "text-white"
    },
    // Variant 5: Impactante y premium
    {
      title: "ÍNTIMA",
      subtitle: "Premium Beauty Experience",
      description: "La experiencia de belleza más completa de Mar del Plata. Tecnología avanzada, profesionales especializados, resultados garantizados.",
      cta: "Experimentá la diferencia",
      bgGradient: "from-purple-600 via-purple-800 to-purple-900",
      textColor: "text-white"
    }
  ]

  return (
    <div className="space-y-6">
      <div className="flex gap-2 mb-4">
        {variants.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentVariant(index)}
            className={`px-3 py-1 rounded text-sm ${
              currentVariant === index 
                ? 'bg-purple-600 text-white' 
                : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
            }`}
          >
            Variante {index + 1}
          </button>
        ))}
      </div>
      
      <div className={`relative h-screen w-full bg-gradient-to-br ${variants[currentVariant].bgGradient} flex items-center justify-center overflow-hidden`}>
        <div className="absolute inset-0 bg-black/20"></div>
        
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <div className="mb-6">
            <FaHeart className="text-4xl md:text-6xl text-white/80 mx-auto mb-4" />
          </div>
          
          <h1 className={`text-4xl md:text-7xl font-bold mb-4 ${variants[currentVariant].textColor}`}>
            {variants[currentVariant].title}
          </h1>
          
          <h2 className={`text-xl md:text-3xl font-light mb-6 ${variants[currentVariant].textColor}/90`}>
            {variants[currentVariant].subtitle}
          </h2>
          
          <p className={`text-base md:text-xl mb-8 max-w-2xl mx-auto ${variants[currentVariant].textColor}/80`}>
            {variants[currentVariant].description}
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button className="bg-white text-purple-700 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors flex items-center gap-2">
              <FaArrowRight />
              {variants[currentVariant].cta}
            </button>
            
            <div className="flex items-center gap-4 text-white/80">
              <div className="flex items-center gap-2">
                <FaMapMarkerAlt />
                <span className="text-sm">Castelli 3141, Mar del Plata</span>
              </div>
              <div className="flex items-center gap-2">
                <FaPhone />
                <span className="text-sm">223 550-7949</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

// Pase Libre Variants (5)
const PaseLibreVariants = () => {
  const [currentVariant, setCurrentVariant] = useState(0)
  
  const variants = [
    // Variant 1: Dorado elegante
    {
      bgGradient: "from-yellow-400 via-orange-500 to-yellow-600",
      accentColor: "text-yellow-900",
      buttonColor: "bg-yellow-900 text-white hover:bg-yellow-800"
    },
    // Variant 2: Naranja vibrante
    {
      bgGradient: "from-orange-400 via-orange-500 to-red-500",
      accentColor: "text-orange-900",
      buttonColor: "bg-orange-900 text-white hover:bg-orange-800"
    },
    // Variant 3: Dorado premium
    {
      bgGradient: "from-yellow-300 via-yellow-500 to-orange-600",
      accentColor: "text-yellow-800",
      buttonColor: "bg-yellow-800 text-white hover:bg-yellow-700"
    },
    // Variant 4: Sunset
    {
      bgGradient: "from-orange-300 via-orange-400 to-yellow-500",
      accentColor: "text-orange-800",
      buttonColor: "bg-orange-800 text-white hover:bg-orange-700"
    },
    // Variant 5: Oro intenso
    {
      bgGradient: "from-yellow-500 via-orange-600 to-red-600",
      accentColor: "text-yellow-900",
      buttonColor: "bg-yellow-900 text-white hover:bg-yellow-800"
    }
  ]

  const treatments = [
    { name: "Mio Up", icon: FaBolt },
    { name: "Alpha Synergy", icon: FaHeart },
    { name: "PushUp", icon: FaRocket },
    { name: "Presoterapia", icon: FaHeart },
    { name: "Mantas térmicas", icon: FaFire },
    { name: "LipoLED", icon: FaGem },
    { name: "Limpieza facial", icon: FaLeaf }
  ]

  return (
    <div className="space-y-6">
      <div className="flex gap-2 mb-4">
        {variants.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentVariant(index)}
            className={`px-3 py-1 rounded text-sm ${
              currentVariant === index 
                ? 'bg-orange-500 text-white' 
                : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
            }`}
          >
            Variante {index + 1}
          </button>
        ))}
      </div>
      
      <div className={`relative h-screen w-full bg-gradient-to-br ${variants[currentVariant].bgGradient} flex items-center justify-center overflow-hidden`}>
        <div className="absolute inset-0 bg-black/10"></div>
        
        <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
          <div className="mb-6">
            <FaCrown className="text-5xl md:text-7xl text-white mx-auto mb-4" />
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold mb-4 text-white">
            ¡Llegó el Pase Libre a Íntima!
          </h1>
          
          <h2 className="text-xl md:text-3xl font-light mb-6 text-white/90">
            Dos horas de tratamiento por día
          </h2>
          
          <p className="text-lg md:text-2xl mb-8 text-white/80 font-medium">
            A tu ritmo, a tu elección
          </p>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8 max-w-4xl mx-auto">
            {treatments.map((treatment, index) => (
              <div key={index} className="bg-white/20 backdrop-blur-sm rounded-lg p-4 text-center">
                <treatment.icon className="text-2xl md:text-3xl text-white mx-auto mb-2" />
                <span className="text-white text-sm md:text-base font-medium">{treatment.name}</span>
              </div>
            ))}
          </div>
          
          <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-6 md:p-8 mb-8 max-w-2xl mx-auto">
            <div className="text-center">
              <p className="text-white/90 text-lg md:text-xl mb-4">
                Elegí lo que tu cuerpo necesita ese día
              </p>
              <div className="text-4xl md:text-6xl font-bold text-white mb-2">
                $25.000
              </div>
              <p className="text-white/80 text-sm md:text-base">
                Dos horas solo para vos
              </p>
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button className={`${variants[currentVariant].buttonColor} px-8 py-3 rounded-full font-semibold transition-colors flex items-center gap-2`}>
              <FaWhatsapp />
              Reservá tu pase hoy
            </button>
            
            <div className="flex items-center gap-4 text-white/80">
              <div className="flex items-center gap-2">
                <FaMapMarkerAlt />
                <span className="text-sm">Castelli 3141, Mar del Plata</span>
              </div>
              <div className="flex items-center gap-2">
                <FaPhone />
                <span className="text-sm">223 550-7949</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

// Combo Glúteos Variants (5)
const ComboGluteosVariants = () => {
  const [currentVariant, setCurrentVariant] = useState(0)
  
  const variants = [
    // Variant 1: Rosa elegante
    {
      bgGradient: "from-pink-400 via-pink-500 to-pink-600",
      accentColor: "text-pink-900",
      buttonColor: "bg-pink-900 text-white hover:bg-pink-800"
    },
    // Variant 2: Violeta premium
    {
      bgGradient: "from-purple-400 via-purple-500 to-purple-600",
      accentColor: "text-purple-900",
      buttonColor: "bg-purple-900 text-white hover:bg-purple-800"
    },
    // Variant 3: Lila suave
    {
      bgGradient: "from-purple-300 via-pink-400 to-purple-500",
      accentColor: "text-purple-800",
      buttonColor: "bg-purple-800 text-white hover:bg-purple-700"
    },
    // Variant 4: Rosa intenso
    {
      bgGradient: "from-pink-500 via-pink-600 to-purple-600",
      accentColor: "text-pink-900",
      buttonColor: "bg-pink-900 text-white hover:bg-pink-800"
    },
    // Variant 5: Magenta vibrante
    {
      bgGradient: "from-pink-600 via-purple-600 to-pink-700",
      accentColor: "text-pink-900",
      buttonColor: "bg-pink-900 text-white hover:bg-pink-800"
    }
  ]

  const treatments = [
    { name: "Mio Up", description: "Activa los músculos y tonifica", icon: FaBolt },
    { name: "Maderoterapia", description: "Modela, reafirma y combate la celulitis", icon: FaHeart },
    { name: "Alpha Synergy", description: "Tensa la piel, trata flacidez y estimula colágeno", icon: FaHeart }
  ]

  return (
    <div className="space-y-6">
      <div className="flex gap-2 mb-4">
        {variants.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentVariant(index)}
            className={`px-3 py-1 rounded text-sm ${
              currentVariant === index 
                ? 'bg-pink-500 text-white' 
                : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
            }`}
          >
            Variante {index + 1}
          </button>
        ))}
      </div>
      
      <div className={`relative h-screen w-full bg-gradient-to-br ${variants[currentVariant].bgGradient} flex items-center justify-center overflow-hidden`}>
        <div className="absolute inset-0 bg-black/10"></div>
        
        <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
          <div className="mb-6">
            <FaHeart className="text-5xl md:text-7xl text-white mx-auto mb-4" />
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold mb-4 text-white">
            Nuevo Combo Glúteos
          </h1>
          
          <h2 className="text-xl md:text-3xl font-light mb-6 text-white/90">
            Tratamiento súper completo
          </h2>
          
          <p className="text-lg md:text-xl mb-8 text-white/80 max-w-3xl mx-auto">
            Para tonificar, reafirmar y mejorar la apariencia de la piel desde la primera sesión
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8 max-w-4xl mx-auto">
            {treatments.map((treatment, index) => (
              <div key={index} className="bg-white/20 backdrop-blur-sm rounded-xl p-6 text-center">
                <treatment.icon className="text-3xl md:text-4xl text-white mx-auto mb-3" />
                <h3 className="text-white text-lg md:text-xl font-semibold mb-2">{treatment.name}</h3>
                <p className="text-white/80 text-sm md:text-base">{treatment.description}</p>
              </div>
            ))}
          </div>
          
          <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-6 md:p-8 mb-8 max-w-2xl mx-auto">
            <div className="flex items-center justify-center gap-2 mb-4">
              <FaClock className="text-white text-xl" />
              <span className="text-white text-lg md:text-xl">Duración: 1 hs 30'</span>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-center">
              <div>
                <p className="text-white/90 text-sm md:text-base mb-2">Valor por sesión</p>
                <div className="text-2xl md:text-4xl font-bold text-white">$38.000</div>
              </div>
              <div>
                <p className="text-white/90 text-sm md:text-base mb-2">Pack de 4 sesiones</p>
                <div className="text-2xl md:text-4xl font-bold text-white">$140.000</div>
              </div>
            </div>
          </div>
          
          <p className="text-white/80 text-base md:text-lg mb-8">
            No esperes al verano para empezar. ¡Es el momento ideal para trabajar tu cuerpo!
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button className={`${variants[currentVariant].buttonColor} px-8 py-3 rounded-full font-semibold transition-colors flex items-center gap-2`}>
              <FaWhatsapp />
              Reservá tu turno
            </button>
            
            <div className="flex items-center gap-4 text-white/80">
              <div className="flex items-center gap-2">
                <FaMapMarkerAlt />
                <span className="text-sm">Castelli 3141, Mar del Plata</span>
              </div>
              <div className="flex items-center gap-2">
                <FaInstagram />
                <span className="text-sm">@intimamdq</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

// Cursos Variants (5)
const CursosVariants = () => {
  const [currentVariant, setCurrentVariant] = useState(0)
  
  const variants = [
    // Variant 1: Verde profesional
    {
      bgGradient: "from-green-400 via-green-500 to-green-600",
      accentColor: "text-green-900",
      buttonColor: "bg-green-900 text-white hover:bg-green-800"
    },
    // Variant 2: Azul confiable
    {
      bgGradient: "from-blue-400 via-blue-500 to-blue-600",
      accentColor: "text-blue-900",
      buttonColor: "bg-blue-900 text-white hover:bg-blue-800"
    },
    // Variant 3: Verde agua
    {
      bgGradient: "from-teal-400 via-green-500 to-teal-600",
      accentColor: "text-teal-900",
      buttonColor: "bg-teal-900 text-white hover:bg-teal-800"
    },
    // Variant 4: Azul verdoso
    {
      bgGradient: "from-cyan-400 via-blue-500 to-teal-600",
      accentColor: "text-cyan-900",
      buttonColor: "bg-cyan-900 text-white hover:bg-cyan-800"
    },
    // Variant 5: Verde esmeralda
    {
      bgGradient: "from-emerald-400 via-green-500 to-emerald-600",
      accentColor: "text-emerald-900",
      buttonColor: "bg-emerald-900 text-white hover:bg-emerald-800"
    }
  ]

  const features = [
    { name: "Clases prácticas", icon: FaUsers },
    { name: "Material incluido", icon: FaShoppingBag },
    { name: "Grupos reducidos", icon: FaUserFriends },
    { name: "Diploma de Íntima", icon: FaCertificate }
  ]

  return (
    <div className="space-y-6">
      <div className="flex gap-2 mb-4">
        {variants.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentVariant(index)}
            className={`px-3 py-1 rounded text-sm ${
              currentVariant === index 
                ? 'bg-green-500 text-white' 
                : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
            }`}
          >
            Variante {index + 1}
          </button>
        ))}
      </div>
      
      <div className={`relative h-screen w-full bg-gradient-to-br ${variants[currentVariant].bgGradient} flex items-center justify-center overflow-hidden`}>
        <div className="absolute inset-0 bg-black/10"></div>
        
        <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
          <div className="mb-6">
            <FaGraduationCap className="text-5xl md:text-7xl text-white mx-auto mb-4" />
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold mb-4 text-white">
            Cursos de Depilación
          </h1>
          
          <h2 className="text-xl md:text-3xl font-light mb-6 text-white/90">
            Aprendé con profesionales
          </h2>
          
          <p className="text-lg md:text-xl mb-8 text-white/80 max-w-3xl mx-auto">
            Capacitate en técnicas de depilación con cera. Curso práctico con diploma de Íntima Estética.
          </p>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8 max-w-4xl mx-auto">
            {features.map((feature, index) => (
              <div key={index} className="bg-white/20 backdrop-blur-sm rounded-lg p-4 text-center">
                <feature.icon className="text-2xl md:text-3xl text-white mx-auto mb-2" />
                <span className="text-white text-sm md:text-base font-medium">{feature.name}</span>
              </div>
            ))}
          </div>
          
          <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-6 md:p-8 mb-8 max-w-2xl mx-auto">
            <div className="text-center">
              <h3 className="text-white text-xl md:text-2xl font-semibold mb-4">
                ¿Qué incluye el curso?
              </h3>
              <ul className="text-white/90 text-left space-y-2 max-w-md mx-auto">
                <li className="flex items-center gap-2">
                  <FaCheck className="text-white flex-shrink-0" />
                  <span>Técnicas de depilación con cera</span>
                </li>
                <li className="flex items-center gap-2">
                  <FaCheck className="text-white flex-shrink-0" />
                  <span>Práctica en modelos reales</span>
                </li>
                <li className="flex items-center gap-2">
                  <FaCheck className="text-white flex-shrink-0" />
                  <span>Material de trabajo</span>
                </li>
                <li className="flex items-center gap-2">
                  <FaCheck className="text-white flex-shrink-0" />
                  <span>Diploma de finalización</span>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button className={`${variants[currentVariant].buttonColor} px-8 py-3 rounded-full font-semibold transition-colors flex items-center gap-2`}>
              <FaWhatsapp />
              Consultá fechas disponibles
            </button>
            
            <div className="flex items-center gap-4 text-white/80">
              <div className="flex items-center gap-2">
                <FaMapMarkerAlt />
                <span className="text-sm">Castelli 3141, Mar del Plata</span>
              </div>
              <div className="flex items-center gap-2">
                <FaPhone />
                <span className="text-sm">223 550-7949</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

// Eventos Variants (5)
const EventosVariants = () => {
  const [currentVariant, setCurrentVariant] = useState(0)
  
  const variants = [
    // Variant 1: Blanco elegante
    {
      bgGradient: "from-gray-100 via-white to-gray-200",
      textColor: "text-gray-800",
      accentColor: "text-gray-600",
      buttonColor: "bg-gray-800 text-white hover:bg-gray-700"
    },
    // Variant 2: Negro sofisticado
    {
      bgGradient: "from-gray-800 via-gray-900 to-black",
      textColor: "text-white",
      accentColor: "text-gray-300",
      buttonColor: "bg-white text-gray-900 hover:bg-gray-100"
    },
    // Variant 3: Rosa alegre
    {
      bgGradient: "from-pink-200 via-pink-300 to-pink-400",
      textColor: "text-pink-900",
      accentColor: "text-pink-700",
      buttonColor: "bg-pink-900 text-white hover:bg-pink-800"
    },
    // Variant 4: Dorado festivo
    {
      bgGradient: "from-yellow-200 via-yellow-300 to-orange-300",
      textColor: "text-yellow-900",
      accentColor: "text-yellow-800",
      buttonColor: "bg-yellow-900 text-white hover:bg-yellow-800"
    },
    // Variant 5: Lavanda suave
    {
      bgGradient: "from-purple-200 via-purple-300 to-pink-300",
      textColor: "text-purple-900",
      accentColor: "text-purple-700",
      buttonColor: "bg-purple-900 text-white hover:bg-purple-800"
    }
  ]

  const services = [
    { name: "Maquillaje profesional", icon: FaPalette },
    { name: "Peinado de evento", icon: FaCrown },
    { name: "Prueba previa", icon: FaCheck },
    { name: "Día del evento", icon: FaCalendarAlt }
  ]

  return (
    <div className="space-y-6">
      <div className="flex gap-2 mb-4">
        {variants.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentVariant(index)}
            className={`px-3 py-1 rounded text-sm ${
              currentVariant === index 
                ? 'bg-pink-500 text-white' 
                : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
            }`}
          >
            Variante {index + 1}
          </button>
        ))}
      </div>
      
      <div className={`relative h-screen w-full bg-gradient-to-br ${variants[currentVariant].bgGradient} flex items-center justify-center overflow-hidden`}>
        <div className="absolute inset-0 bg-black/5"></div>
        
        <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
          <div className="mb-6">
            <FaPalette className={`text-5xl md:text-7xl ${variants[currentVariant].textColor} mx-auto mb-4`} />
          </div>
          
          <h1 className={`text-4xl md:text-6xl font-bold mb-4 ${variants[currentVariant].textColor}`}>
            Maquillaje para Eventos
          </h1>
          
          <h2 className={`text-xl md:text-3xl font-light mb-6 ${variants[currentVariant].accentColor}`}>
            Tu día especial, nuestro arte
          </h2>
          
          <p className={`text-lg md:text-xl mb-8 ${variants[currentVariant].accentColor} max-w-3xl mx-auto`}>
            Servicio de maquillaje y peinado para bodas, fiestas y eventos especiales. Incluye prueba previa y atención el día del evento.
          </p>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8 max-w-4xl mx-auto">
            {services.map((service, index) => (
              <div key={index} className="bg-white/30 backdrop-blur-sm rounded-lg p-4 text-center border border-white/20">
                <service.icon className={`text-2xl md:text-3xl ${variants[currentVariant].textColor} mx-auto mb-2`} />
                <span className={`${variants[currentVariant].textColor} text-sm md:text-base font-medium`}>{service.name}</span>
              </div>
            ))}
          </div>
          
          <div className="bg-white/30 backdrop-blur-sm rounded-2xl p-6 md:p-8 mb-8 max-w-2xl mx-auto border border-white/20">
            <div className="text-center">
              <h3 className={`${variants[currentVariant].textColor} text-xl md:text-2xl font-semibold mb-4`}>
                ¿Cómo funciona?
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="text-center">
                  <div className={`text-2xl md:text-3xl font-bold ${variants[currentVariant].textColor} mb-2`}>1</div>
                  <p className={`${variants[currentVariant].accentColor} text-sm md:text-base`}>
                    Prueba previa para definir el look
                  </p>
                </div>
                <div className="text-center">
                  <div className={`text-2xl md:text-3xl font-bold ${variants[currentVariant].textColor} mb-2`}>2</div>
                  <p className={`${variants[currentVariant].accentColor} text-sm md:text-base`}>
                    Maquillaje y peinado el día del evento
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button className={`${variants[currentVariant].buttonColor} px-8 py-3 rounded-full font-semibold transition-colors flex items-center gap-2`}>
              <FaWhatsapp />
              Consultá disponibilidad
            </button>
            
            <div className={`flex items-center gap-4 ${variants[currentVariant].accentColor}`}>
              <div className="flex items-center gap-2">
                <FaMapMarkerAlt />
                <span className="text-sm">Castelli 3141, Mar del Plata</span>
              </div>
              <div className="flex items-center gap-2">
                <FaPhone />
                <span className="text-sm">223 550-7949</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

// Templates Promocionales (10 flexibles)
const TemplatesPromocionales = () => {
  const [currentTemplate, setCurrentTemplate] = useState(0)
  
  const templates = [
    // Template 1: Descuento porcentual
    {
      title: "Oferta Especial",
      discount: "30% OFF",
      description: "En todos los tratamientos corporales",
      validUntil: "Válido hasta fin de mes",
      bgGradient: "from-red-500 via-red-600 to-red-700",
      icon: FaPercent
    },
    // Template 2: Precio fijo
    {
      title: "Promo Flash",
      discount: "$15.000",
      description: "Limpieza facial + Hidratación",
      validUntil: "Solo por esta semana",
      bgGradient: "from-blue-500 via-blue-600 to-blue-700",
      icon: FaTag
    },
    // Template 3: 2x1
    {
      title: "Llevá 2 Pagá 1",
      discount: "2x1",
      description: "En sesiones de Mio Up",
      validUntil: "Promoción limitada",
      bgGradient: "from-green-500 via-green-600 to-green-700",
      icon: FaGift
    },
    // Template 4: Pack especial
    {
      title: "Pack Verano",
      discount: "4 Sesiones",
      description: "Alpha Synergy + Maderoterapia",
      validUntil: "Precio especial por tiempo limitado",
      bgGradient: "from-orange-500 via-orange-600 to-orange-700",
      icon: FaFire
    },
    // Template 5: Descuento por cantidad
    {
      title: "Más Sesiones, Más Ahorro",
      discount: "Hasta 40% OFF",
      description: "En packs de 6 o más sesiones",
      validUntil: "Consultá condiciones",
      bgGradient: "from-purple-500 via-purple-600 to-purple-700",
      icon: FaTrophy
    },
    // Template 6: Nuevo servicio
    {
      title: "Nuevo Tratamiento",
      discount: "Precio Lanzamiento",
      description: "Conocé nuestro último servicio",
      validUntil: "Primeros 50 turnos",
      bgGradient: "from-pink-500 via-pink-600 to-pink-700",
      icon: FaRocket
    },
    // Template 7: Combo especial
    {
      title: "Combo Imperdible",
      discount: "3 Tratamientos",
      description: "Por el precio de 2",
      validUntil: "Solo este mes",
      bgGradient: "from-teal-500 via-teal-600 to-teal-700",
      icon: FaMagic
    },
    // Template 8: Descuento estudiantes
    {
      title: "Descuento Estudiantes",
      discount: "25% OFF",
      description: "Con credencial vigente",
      validUntil: "Todo el año",
      bgGradient: "from-indigo-500 via-indigo-600 to-indigo-700",
      icon: FaGraduationCap
    },
    // Template 9: Referidos
    {
      title: "Traé un Amigo",
      discount: "20% OFF",
      description: "Para vos y tu amigo",
      validUntil: "En su primera visita",
      bgGradient: "from-yellow-500 via-yellow-600 to-yellow-700",
      icon: FaUsers
    },
    // Template 10: Cumpleaños
    {
      title: "Mes de tu Cumpleaños",
      discount: "Regalo Especial",
      description: "Tratamiento de cortesía",
      validUntil: "Durante todo tu mes",
      bgGradient: "from-rose-500 via-rose-600 to-rose-700",
      icon: FaGift
    }
  ]

  return (
    <div className="space-y-6">
      <div className="flex flex-wrap gap-2 mb-4">
        {templates.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentTemplate(index)}
            className={`px-3 py-1 rounded text-sm ${
              currentTemplate === index 
                ? 'bg-red-500 text-white' 
                : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
            }`}
          >
            Template {index + 1}
          </button>
        ))}
      </div>
      
      <div className={`relative h-screen w-full bg-gradient-to-br ${templates[currentTemplate].bgGradient} flex items-center justify-center overflow-hidden`}>
        <div className="absolute inset-0 bg-black/20"></div>
        
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <div className="mb-6">
            {React.createElement(templates[currentTemplate].icon, { className: "text-5xl md:text-7xl text-white mx-auto mb-4" })}
          </div>
          
          <h1 className="text-3xl md:text-5xl font-bold mb-4 text-white">
            {templates[currentTemplate].title}
          </h1>
          
          <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-6 md:p-8 mb-6 max-w-2xl mx-auto">
            <div className="text-4xl md:text-6xl font-bold text-white mb-4">
              {templates[currentTemplate].discount}
            </div>
            <p className="text-xl md:text-2xl text-white/90 mb-4">
              {templates[currentTemplate].description}
            </p>
            <p className="text-base md:text-lg text-white/80">
              {templates[currentTemplate].validUntil}
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button className="bg-white text-gray-900 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors flex items-center gap-2">
              <FaWhatsapp />
              Aprovechá la oferta
            </button>
            
            <div className="flex items-center gap-4 text-white/80">
              <div className="flex items-center gap-2">
                <FaMapMarkerAlt />
                <span className="text-sm">Castelli 3141, Mar del Plata</span>
              </div>
              <div className="flex items-center gap-2">
                <FaInstagram />
                <span className="text-sm">@intimamdq</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

// Gift Cards Corregidas
const GiftCardsCorregidas = () => {
  const [currentVariant, setCurrentVariant] = useState(0)
  
  const variants = [
    {
      bgGradient: "from-purple-500 via-pink-500 to-purple-600",
      title: "Tarjeta de Regalo Íntima"
    },
    {
      bgGradient: "from-gold-400 via-yellow-500 to-orange-500",
      title: "Gift Card Premium"
    },
    {
      bgGradient: "from-rose-400 via-pink-500 to-rose-600",
      title: "Regalo de Belleza"
    }
  ]

  return (
    <div className="space-y-6">
      <div className="flex gap-2 mb-4">
        {variants.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentVariant(index)}
            className={`px-3 py-1 rounded text-sm ${
              currentVariant === index 
                ? 'bg-purple-500 text-white' 
                : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
            }`}
          >
            Variante {index + 1}
          </button>
        ))}
      </div>
      
      <div className={`relative h-screen w-full bg-gradient-to-br ${variants[currentVariant].bgGradient} flex items-center justify-center overflow-hidden`}>
        <div className="absolute inset-0 bg-black/10"></div>
        
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <div className="mb-6">
            <FaGift className="text-5xl md:text-7xl text-white mx-auto mb-4" />
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold mb-4 text-white">
            {variants[currentVariant].title}
          </h1>
          
          <h2 className="text-xl md:text-3xl font-light mb-6 text-white/90">
            El regalo perfecto para quien más querés
          </h2>
          
          <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-6 md:p-8 mb-8 max-w-2xl mx-auto">
            <h3 className="text-white text-xl md:text-2xl font-semibold mb-4">
              ¿Cómo funciona?
            </h3>
            <div className="space-y-3 text-white/90 text-left">
              <div className="flex items-start gap-3">
                <span className="bg-white/20 rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold flex-shrink-0 mt-0.5">1</span>
                <p>Elegí los servicios que querés regalar</p>
              </div>
              <div className="flex items-start gap-3">
                <span className="bg-white/20 rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold flex-shrink-0 mt-0.5">2</span>
                <p>Personalizá el mensaje y diseño</p>
              </div>
              <div className="flex items-start gap-3">
                <span className="bg-white/20 rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold flex-shrink-0 mt-0.5">3</span>
                <p>Recibí el código único y link personalizado</p>
              </div>
              <div className="flex items-start gap-3">
                <span className="bg-white/20 rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold flex-shrink-0 mt-0.5">4</span>
                <p>La persona puede canjear por WhatsApp</p>
              </div>
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button className="bg-white text-purple-700 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors flex items-center gap-2">
              <FaShoppingBag />
              Crear Gift Card
            </button>
            
            <div className="flex items-center gap-4 text-white/80">
              <div className="flex items-center gap-2">
                <FaMapMarkerAlt />
                <span className="text-sm">Castelli 3141, Mar del Plata</span>
              </div>
              <div className="flex items-center gap-2">
                <FaWhatsapp />
                <span className="text-sm">223 550-7949</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default function BannersV2Page() {
  const [activeSection, setActiveSection] = useState('hero')

  const sections = [
    { id: 'hero', name: 'Hero Principal', component: HeroPrincipalVariants },
    { id: 'pase-libre', name: 'Pase Libre', component: PaseLibreVariants },
    { id: 'combo-gluteos', name: 'Combo Glúteos', component: ComboGluteosVariants },
    { id: 'cursos', name: 'Cursos', component: CursosVariants },
    { id: 'eventos', name: 'Eventos', component: EventosVariants },
    { id: 'templates', name: 'Templates Promocionales', component: TemplatesPromocionales },
    { id: 'giftcards', name: 'Gift Cards', component: GiftCardsCorregidas }
  ]

  const ActiveComponent = sections.find(s => s.id === activeSection)?.component || HeroPrincipalVariants

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation */}
      <nav className="bg-white shadow-sm border-b sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <h1 className="text-xl font-bold text-gray-900">Banners Íntima V2</h1>
            <div className="flex space-x-1">
              {sections.map((section) => (
                <button
                  key={section.id}
                  onClick={() => setActiveSection(section.id)}
                  className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                    activeSection === section.id
                      ? 'bg-purple-100 text-purple-700'
                      : 'text-gray-500 hover:text-gray-700 hover:bg-gray-100'
                  }`}
                >
                  {section.name}
                </button>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* Content */}
      <main>
        <ActiveComponent />
      </main>

      {/* Footer Info */}
      <div className="bg-white border-t p-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center text-sm text-gray-600">
            <p className="mb-2">
              <strong>Especificaciones:</strong> Todos los banners están optimizados para pantalla completa (desktop y mobile)
            </p>
            <p className="mb-2">
              <strong>Iconos:</strong> Font Awesome (FA) - Sin emojis
            </p>
            <p className="mb-2">
              <strong>Rendimiento:</strong> Sin backdrop-filter o blur para mejor performance
            </p>
            <p>
              <strong>Colores:</strong> Hero (violeta/primary), Pase Libre (dorado/naranja), Glúteos (rosa/violeta/lila), 
              Cursos (verde/azul), Eventos (blanco/negro/rosa), Templates (flexibles)
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}