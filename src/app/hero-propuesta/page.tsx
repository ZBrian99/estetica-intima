import Hero1 from './Hero1'
import DepilacionCentered from './HeroDepilacionCentered'
import DepilacionSplit from './HeroDepilacionSplit'
import DepilacionLeftAligned from './HeroDepilacionLeft'
import DepilacionLeftTextRightImage from './HeroDepilacionLeftRightImage'
import PaseLibreCentered from './HeroPaseLibreCentered'
import GluteosCentered from './HeroGluteosCentered'
import GluteosLeftRightBenefits from './HeroGluteosLeftRightBenefits'
import GluteosRightLeftImage from './HeroGluteosRightLeftImage'

export default function HeroPropuestaPage() {
  return (
    <main className="space-y-12">
      {/* Hero 1: ÍNTIMA (centrado) */}
      <Hero1 />

      {/* Depilación definitiva - variantes */}
      <DepilacionCentered />
      <DepilacionSplit />
      <DepilacionLeftAligned />
      <DepilacionLeftTextRightImage />

      {/* Pase Libre - centrado */}
      <PaseLibreCentered />

      {/* Combo Full Glúteos - variantes */}
      <GluteosCentered />
      <GluteosLeftRightBenefits />
      <GluteosRightLeftImage />
    </main>
  )
}
