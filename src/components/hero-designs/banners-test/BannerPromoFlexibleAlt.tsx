'use client';

import HeroBanner from './HeroBanner';

// Segunda variante flexible "todo terreno" con estilo alternativo
export default function BannerPromoFlexibleAlt() {
  return (
    <HeroBanner
      title="Oferta Limitada"
      subtitle="Sólo por hoy / esta semana / fecha"
      description="Descuentos adaptables (porcentaje o monto fijo). Ideal para destacar una categoría, un servicio puntual o un pack combinado sin perder claridad."
      primaryCtas={[
        { label: 'Aprovechar descuento', href: '/promociones' },
      ]}
      secondaryCtas={[
        { label: 'Explorar servicios', href: '/servicios' },
      ]}
      // Base adaptable: se puede cambiar según la campaña
      bgGradient="from-indigo-800 via-purple-700 to-fuchsia-700"
      imageUrl="https://image.pollinations.ai/prompt/adaptable%20promo%20banner%20for%20aesthetic%20clinic%20clean%20modern%20design%20argentina%20purple%20tones%20realistic?width=1600&height=900&model=flux-realism&enhance=true&nologo=true&seed=8713"
      imageOpacity={14}
    />
  );
}