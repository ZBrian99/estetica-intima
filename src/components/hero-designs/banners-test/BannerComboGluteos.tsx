'use client';

import HeroBanner from './HeroBanner';

export default function BannerComboGluteos() {
  return (
    <HeroBanner
      title="Combo Full Glúteos"
      subtitle="Mio Up + Maderoterapia + Alpha Synergy"
      description="Programa intensivo para tonificación y lifting. Pack recomendado con seguimiento y mediciones objetivas. Ideal para resultados visibles sin exageraciones."
      primaryCtas={[
        { label: 'Ver promo', href: '/promociones' },
        { label: 'Agendar', href: '/contacto' },
      ]}
      bgGradient="from-rose-600 via-fuchsia-600 to-red-500"
      imageUrl="https://image.pollinations.ai/prompt/professional%20aesthetic%20clinic%20body%20contouring%20buttock%20enhancement%20equipment%20modern%20design%20pink%20fuchsia%20tones%20argentina%20realistic%20non%20explicit?width=1600&height=900&model=flux-realism&enhance=true&nologo=true&seed=3904"
      imageOpacity={18}
    />
  );
}