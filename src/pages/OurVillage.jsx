import { Helmet } from 'react-helmet-async';
import OurVillageClassicSections from '../components/homepage/OurVillageClassicSections';
import SpiritualAboutSection from '../components/homepage/SpiritualAboutSection';
import SpiritualHomePage from '../components/homepage/SpiritualHomePage';
import { SITE } from '../config/site';

export default function OurVillage() {
  return (
    <>
      <Helmet>
        <title>Our Village – {SITE.name}</title>
        <meta
          name="description"
          content={`Explore ${SITE.name} spiritual village — conscious living, meditation, and community in Coimbatore.`}
        />
      </Helmet>
      <SpiritualHomePage showAboutSection={false} />
      <OurVillageClassicSections />
      <SpiritualAboutSection className="sh-about--village-footer" />
    </>
  );
}
