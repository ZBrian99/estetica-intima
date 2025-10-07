import HeroGeneralVariant1 from '@/components/hero-designs/banners-variants/HeroGeneralVariant1';
import HeroGeneralVariant2 from '@/components/hero-designs/banners-variants/HeroGeneralVariant2';
import HeroGeneralVariant3 from '@/components/hero-designs/banners-variants/HeroGeneralVariant3';
import DepilacionVariant1 from '@/components/hero-designs/banners-variants/DepilacionVariant1';
import DepilacionVariant2 from '@/components/hero-designs/banners-variants/DepilacionVariant2';
import DepilacionVariant3 from '@/components/hero-designs/banners-variants/DepilacionVariant3';
import PaseLibreVariant1 from '@/components/hero-designs/banners-variants/PaseLibreVariant1';
import PaseLibreVariant2 from '@/components/hero-designs/banners-variants/PaseLibreVariant2';
import PaseLibreVariant3 from '@/components/hero-designs/banners-variants/PaseLibreVariant3';
import ComboGluteosVariant1 from '@/components/hero-designs/banners-variants/ComboGluteosVariant1';
import ComboGluteosVariant2 from '@/components/hero-designs/banners-variants/ComboGluteosVariant2';
import ComboGluteosVariant3 from '@/components/hero-designs/banners-variants/ComboGluteosVariant3';
import PromoFlexibleVariant1 from '@/components/hero-designs/banners-variants/PromoFlexibleVariant1';
import PromoFlexibleVariant2 from '@/components/hero-designs/banners-variants/PromoFlexibleVariant2';
import PromoFlexibleVariant3 from '@/components/hero-designs/banners-variants/PromoFlexibleVariant3';
import PromoFlexibleAltVariant1 from '@/components/hero-designs/banners-variants/PromoFlexibleAltVariant1';
import PromoFlexibleAltVariant2 from '@/components/hero-designs/banners-variants/PromoFlexibleAltVariant2';
import PromoFlexibleAltVariant3 from '@/components/hero-designs/banners-variants/PromoFlexibleAltVariant3';

export const metadata = {
  title: 'Hero Banners Variants | Íntima',
  description: '18 variantes de hero banners (6 categorías × 3 diseños) para test A/B y revisión visual.',
};

export default function HeroBannersVariantsPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero General */}
      <HeroGeneralVariant1 />
      <HeroGeneralVariant2 />
      <HeroGeneralVariant3 />

      {/* Depilación Definitiva */}
      <DepilacionVariant1 />
      <DepilacionVariant2 />
      <DepilacionVariant3 />

      {/* Pase Libre */}
      <PaseLibreVariant1 />
      <PaseLibreVariant2 />
      <PaseLibreVariant3 />

      {/* Combo Full Glúteos */}
      <ComboGluteosVariant1 />
      <ComboGluteosVariant2 />
      <ComboGluteosVariant3 />

      {/* Promo Flexible */}
      <PromoFlexibleVariant1 />
      <PromoFlexibleVariant2 />
      <PromoFlexibleVariant3 />

      {/* Promo Flexible Alternativa */}
      <PromoFlexibleAltVariant1 />
      <PromoFlexibleAltVariant2 />
      <PromoFlexibleAltVariant3 />
    </div>
  );
}