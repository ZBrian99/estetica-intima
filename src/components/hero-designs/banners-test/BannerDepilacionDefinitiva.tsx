'use client';

import HeroBanner from './HeroBanner';

export default function BannerDepilacionDefinitiva() {
  return (
    <HeroBanner
      title="Depilación Láser Definitiva"
      subtitle="Mujer · Hombre"
      description="Tecnología de diodo de alta eficacia. Planes por zonas y combos integrales con seguimiento personalizado. Seguridad y resultados, sin vueltas."
      primaryCtas={[
        { label: 'Depilación Mujer', href: '/servicios?tipo=depilacion&genero=mujer' },
        { label: 'Depilación Hombre', href: '/servicios?tipo=depilacion&genero=hombre' },
      ]}
      secondaryCtas={[{ label: 'Consultar', href: '/contacto' }]}
      bgGradient="from-emerald-600 via-cyan-600 to-sky-600"
      imageUrl="https://image.pollinations.ai/prompt/laser%20hair%20removal%20professional%20clinic%20clean%20modern%20design%20green%20cyan%20tones%20argentina%20realistic%20photography%20non%20explicit?width=1600&height=900&model=flux-realism&enhance=true&nologo=true&seed=2219"
      imageOpacity={18}
    />
  );
}