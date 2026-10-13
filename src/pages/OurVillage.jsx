import { Helmet } from 'react-helmet-async';
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
        <link rel="stylesheet" href="/assets/css/vetham-homepage.css" />
      </Helmet>
      <SpiritualHomePage />
    </>
  );
}
