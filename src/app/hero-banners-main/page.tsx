import MainHeroIntima from '@/components/hero-designs/banners-main/MainHeroIntima';
import DepilacionDefinitivaMain from '@/components/hero-designs/banners-main/DepilacionDefinitivaMain';
import PaseLibreMain from '@/components/hero-designs/banners-main/PaseLibreMain';
import ComboGluteosMain from '@/components/hero-designs/banners-main/ComboGluteosMain';

export const metadata = {
  title: 'Banners principales | Íntima',
  description: 'Página final con los 4 banners principales, cada uno con diseño propio.',
};

export default function HeroBannersMainPage() {
  return (
    <div className="min-h-screen bg-white">
      <MainHeroIntima />
      <DepilacionDefinitivaMain />
      <PaseLibreMain />
      <ComboGluteosMain />
    </div>
  );
}