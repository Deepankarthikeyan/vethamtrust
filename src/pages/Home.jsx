import { Helmet } from 'react-helmet-async';
import GodsTicker from '../components/krishna/GodsTicker';
import KrishnaHero from '../components/krishna/KrishnaHero';
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
} from '../components/krishna/KrishnaHomeSections';
import { HERO_SLIDES_1, HERO_SLIDES_2 } from '../config/vethamHome';
import { SITE } from '../config/site';

export default function Home() {
  return (
    <>
      <Helmet>
        <title>{SITE.name} – Spiritual Teachings & Yoga Centre</title>
        <meta name="description" content={`${SITE.tagline}. Yoga, meditation, and spiritual teachings in Coimbatore.`} />
      </Helmet>

      <KrishnaHero id="kr-hero" slides={HERO_SLIDES_1} enableKeyboard />
      <GodsTicker />
      <AboutIntro />
      <ServiceCards />
      <AboutCounter />
      <CtaBlock />
      <DonationCards />
      <GodsTicker />
      <KrishnaHero id="kr-hero-2" slides={HERO_SLIDES_2} />
      <GodsTicker />
      <PujaGallery />
      <VolunteersSection />
      <BroadcastSection />
      <BlogSection />
      <GodsTicker />
    </>
  );
}
