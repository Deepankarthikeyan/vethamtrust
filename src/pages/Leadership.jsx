import { Helmet } from 'react-helmet-async';
import { SITE } from '../config/site';
import CinematicPageHero from '../components/cinematic/CinematicPageHero';
import LeadershipShowcase from '../components/LeadershipShowcase';

export default function Leadership() {
  return (
    <>
      <Helmet>
        <title>Leadership – {SITE.name}</title>
      </Helmet>
      <CinematicPageHero title="Leadership" crumbs={['Leadership']} />
      <div className="vx-page-content">
        <LeadershipShowcase linkToLeadership={false} fullPage />
      </div>
    </>
  );
}
