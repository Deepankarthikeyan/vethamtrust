import { Helmet } from 'react-helmet-async';
import {
  AboutHorizontalSection,
  ContactSection,
  DonationSection,
  EventsSection,
  FounderSection,
  GallerySection,
  HeroSection,
  ImpactSection,
  JourneySection,
  PhilosophySection,
  ProgramsSection,
  PurposeSection,
  QuoteTypographySection,
} from '../components/cinematic/CinematicSections';
import { SITE } from '../config/site';

export default function Home() {
  return (
    <>
      <Helmet>
        <title>{SITE.name} – Spiritual Teachings & Yoga Centre</title>
        <meta name="description" content={`${SITE.tagline}. Yoga, meditation, and spiritual teachings in Coimbatore.`} />
      </Helmet>

      <HeroSection />
      <PhilosophySection />
      <AboutHorizontalSection />
      <PurposeSection />
      <ProgramsSection />
      <JourneySection />
      <FounderSection />
      <QuoteTypographySection />
      <ImpactSection />
      <GallerySection />
      <EventsSection />
      <DonationSection />
      <ContactSection />
    </>
  );
}
