import { Helmet } from 'react-helmet-async';
import GodsTicker from '../components/GodsTicker';
import KrishnaHero from '../components/KrishnaHero';
import {
  AboutCounter,
  AboutIntro,
  BlogSection,
  BroadcastSection,
  CtaBlock,
  DonationCards,
  PujaGallery,
  ServiceCards,
  VolunteersSection,
} from '../components/HomeSections';
import { HERO_SLIDES_1, HERO_SLIDES_2 } from '../config/home';
export default function KrishnaHome() {
  return (
    <>
      <Helmet>
        <title>Home Krishna | Maharatri Temple</title>
        <meta name="description" content="Krishna — Maharatri Hindu Temple. Divine love and eternal devotion home page variant." />
      </Helmet>

      <KrishnaHero id="kr-hero" slides={HERO_SLIDES_1} enableKeyboard />
      <GodsTicker />
      <AboutIntro />
      <ServiceCards />
      <AboutCounter />
      <CtaBlock />
      <DonationCards />
      <GodsTicker />
      <KrishnaHero id="kr-hero-2" slides={HERO_SLIDES_2} compact />
      <GodsTicker />
      <PujaGallery />
      <VolunteersSection />
      <BroadcastSection />
      <BlogSection />
      <GodsTicker />
    </>
  );
}
