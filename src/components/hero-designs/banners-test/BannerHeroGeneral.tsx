'use client';

import HeroBanner from './HeroBanner';

export default function BannerHeroGeneral() {
  return (
    <HeroBanner
      title="ÍNTIMA Estética Integral"
      subtitle="Centro profesional de estética en Mar del Plata"
      description="Tecnología de última generación y atención humana. Tratamientos corporales, faciales y depilación láser con enfoque realista y resultados medibles."
      primaryCtas={[
        { label: 'Conocer servicios', href: '/servicios' },
        { label: 'Reservar turno', href: '/contacto' },
      ]}
      bgGradient="from-violet-700 via-violet-600 to-fuchsia-600"
      imageUrl="https://image.pollinations.ai/prompt/argentina%20professional%20aesthetic%20clinic%20modern%20luxury%20interior%20violet%20and%20lilac%20tones%20clean%20minimalist%20design%20soft%20lighting%20realistic%20photography?width=1600&height=900&model=flux-realism&enhance=true&nologo=true&seed=9157"
      imageOpacity={22}
    />
  );
}