'use client'

import { useState, useEffect } from 'react'
import { GiftCardDesign } from './GiftCardDesigns'

export function GiftCardPreview() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return (
      <div className="space-y-8 md:space-y-12">
        {[...Array(3)].map((_, i) => (
          <div key={i} className="flex justify-center">
            <div className="w-80 h-48 md:w-96 md:h-56 bg-gradient-to-br from-pink-400 to-purple-600 rounded-2xl animate-pulse" />
          </div>
        ))}
      </div>
    )
  }

  return (
    <div className="space-y-16 md:space-y-16">
      {/* Diseño 1 - Estilo Moderno Violeta */}
      <div className="text-center">
        <div className="flex justify-center">
          <GiftCardDesign 
            design="design1" 
            value="$50.000" 
            recipient="Valentina" 
            sender="Sofía" 
          />
        </div>
      </div>

      {/* Diseño 2 - Layout Especial */}
      <div className="text-center">
       
        <div className="flex justify-center">
          <GiftCardDesign 
            design="design2" 
            recipient="Camila" 
            sender="Isabella" 
            message="Que disfrutes este momento especial dedicado solo para vos"
            code="INT2025B8M4"
          />
        </div>
      </div>

      {/* Diseño 3 - Estilo Fuchsia Elegante */}
      <div className="text-center">
        
        <div className="flex justify-center">
          <GiftCardDesign 
            design="design3" 
            value="$120.000" 
            recipient="Martina" 
            sender="Emilia" 
          />
        </div>
      </div>

  
    </div>
  )
}