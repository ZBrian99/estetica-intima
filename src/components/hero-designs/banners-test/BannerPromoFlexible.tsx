'use client';

import HeroBanner from './HeroBanner';

// Banner flexible adaptable a servicio, combo, pack o categoría
export default function BannerPromoFlexible() {
  return (
    <HeroBanner
      title="Promoción Especial"
      subtitle="Descuento por tiempo limitado"
      description="Aplicable a servicio específico, combo, pack o categoría. Podés configurarlo como porcentaje o monto fijo, válido por día, semana, fecha, mes o estación."
      primaryCtas={[
        { label: 'Ver condiciones', href: '/promociones' },
      ]}
      secondaryCtas={[
        { label: 'Aplicar ahora', href: '/servicios' },
      ]}
      // Neutral por defecto, puede adaptarse cambiando el gradiente
      bgGradient="from-slate-900 via-gray-800 to-gray-700"
      imageUrl="https://image.pollinations.ai/prompt/modern%20promo%20banner%20professional%20aesthetic%20clinic%20neutral%20tones%20adaptable%20design%20argentina%20realistic%20photography?width=1600&height=900&model=flux-realism&enhance=true&nologo=true&seed=5521"
      imageOpacity={16}
    />
  );
}