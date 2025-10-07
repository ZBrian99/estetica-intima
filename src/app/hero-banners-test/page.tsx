import BannerHeroGeneral from '@/components/hero-designs/banners-test/BannerHeroGeneral';
import BannerDepilacionDefinitiva from '@/components/hero-designs/banners-test/BannerDepilacionDefinitiva';
import BannerPaseLibre from '@/components/hero-designs/banners-test/BannerPaseLibre';
import BannerComboGluteos from '@/components/hero-designs/banners-test/BannerComboGluteos';
import BannerPromoFlexible from '@/components/hero-designs/banners-test/BannerPromoFlexible';
import BannerPromoFlexibleAlt from '@/components/hero-designs/banners-test/BannerPromoFlexibleAlt';

export const metadata = {
  title: 'Test Banners Hero | Íntima',
  description: 'Subpágina de prueba para banners hero del carrusel, apilados para revisión.',
};

export default function HeroBannersTestPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Banner 1: Hero general profesional */}
      <BannerHeroGeneral />

      {/* Banner 2: Depilación definitiva (Mujer/Hombre) */}
      <BannerDepilacionDefinitiva />

      {/* Banner 3: Pase Libre 2hs */}
      <BannerPaseLibre />

      {/* Banner 4: Combo Full Glúteos */}
      <BannerComboGluteos />

      {/* Banner 5: Flexible adaptable */}
      <BannerPromoFlexible />

      {/* Banner 6: Flexible adaptable (alternativo) */}
      <BannerPromoFlexibleAlt />
    </div>
  );
}