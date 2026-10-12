import { Helmet } from 'react-helmet-async';
import SpiritualHomePage from '../components/homepage/SpiritualHomePage';
import { SITE } from '../config/site';

export default function Home() {
  return (
    <>
      <Helmet>
        <title>{SITE.name} – Spiritual Teachings & Yoga Centre</title>
        <meta
          name="description"
          content={`${SITE.tagline}. Yoga, meditation, and spiritual teachings in Coimbatore.`}
        />
      </Helmet>
      <SpiritualHomePage />
    </>
  );
}
