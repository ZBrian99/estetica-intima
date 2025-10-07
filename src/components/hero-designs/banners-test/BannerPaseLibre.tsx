'use client';

import HeroBanner from './HeroBanner';

export default function BannerPaseLibre() {
  return (
    <HeroBanner
      title="Pase Libre Íntima"
      subtitle="2 horas a elección"
      description="Elegí entre 7 tratamientos destacados (Mio Up, Alpha Synergy, Presoterapia, faciales y más). Ideal para organizar tu rutina con libertad y ahorro."
      primaryCtas={[
        { label: 'Ver detalles', href: '/promociones' },
        { label: 'Reservar', href: '/contacto' },
      ]}
      bgGradient="from-amber-400 via-yellow-500 to-orange-500"
      imageUrl="https://image.pollinations.ai/prompt/wellness%20pass%20promotion%20professional%20aesthetic%20spa%20banner%20gold%20yellow%20tones%20argentina%20modern%20design%20realistic%20photography?width=1600&height=900&model=flux-realism&enhance=true&nologo=true&seed=7712"
      imageOpacity={22}
    />
  );
}