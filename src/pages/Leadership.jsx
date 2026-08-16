import { Helmet } from 'react-helmet-async';
import { SITE } from '../config/site';
import LeadershipShowcase from '../components/LeadershipShowcase';

export default function Leadership() {
  return (
    <>
      <Helmet>
        <title>Leadership – {SITE.name}</title>
      </Helmet>
      <LeadershipShowcase linkToLeadership={false} fullPage />
    </>
  );
}
