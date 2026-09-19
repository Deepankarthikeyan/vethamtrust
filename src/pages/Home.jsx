import { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { SITE } from '../config/site';
import { useCinematicScroll } from '../hooks/useCinematicScroll';
import CinematicShell from '../components/cinematic/CinematicShell';
import HeroSection from '../components/cinematic/HeroSection';
import PhilosophySection from '../components/cinematic/PhilosophySection';
import HorizontalAboutSection from '../components/cinematic/HorizontalAboutSection';
import PurposeSection from '../components/cinematic/PurposeSection';
import ProgramsSection from '../components/cinematic/ProgramsSection';
import JourneySection from '../components/cinematic/JourneySection';
import FounderSection from '../components/cinematic/FounderSection';
import QuotesSection from '../components/cinematic/QuotesSection';
import ImpactSection from '../components/cinematic/ImpactSection';
import GallerySection from '../components/cinematic/GallerySection';
import EventsSection from '../components/cinematic/EventsSection';
import DonationSection, { ContactSection, HomeFooterSection } from '../components/cinematic/ClosingSections';

export default function Home() {
  useCinematicScroll(true);

  useEffect(() => {
    document.body.classList.add('vetham-cinematic-home');

    const header = document.querySelector('.main-header');
    const onScroll = () => {
      header?.classList.toggle('is-scrolled', window.scrollY > 80);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();

    return () => {
      document.body.classList.remove('vetham-cinematic-home');
      header?.classList.remove('is-scrolled');
      window.removeEventListener('scroll', onScroll);
    };
  }, []);

  return (
    <>
      <Helmet>
        <title>{SITE.name} – An Immersive Spiritual Journey</title>
        <meta
          name="description"
          content={`${SITE.tagline}. Experience Vetham Spiritual Trust through cinematic storytelling, yoga, meditation, and enlightened living in Coimbatore.`}
        />
        <link rel="stylesheet" href="/assets/css/cinematic-home.css" />
        <link
          href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;1,400&display=swap"
          rel="stylesheet"
        />
      </Helmet>

      <CinematicShell>
        <HeroSection />
        <PhilosophySection />
        <HorizontalAboutSection />
        <PurposeSection />
        <ProgramsSection />
        <JourneySection />
        <FounderSection />
        <QuotesSection />
        <ImpactSection />
        <GallerySection />
        <EventsSection />
        <DonationSection />
        <ContactSection />
        <div className="cin-breath" aria-hidden="true">
          <div className="cin-breath__ring" />
        </div>
        <HomeFooterSection />
      </CinematicShell>
    </>
  );
}
