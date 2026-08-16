import { Helmet } from 'react-helmet-async';
import { SITE } from '../config/site';
import LeadershipHeroBanner from '../components/LeadershipHeroBanner';

export default function Leadership() {
  return (
    <>
      <Helmet>
        <title>Leadership – {SITE.name}</title>
      </Helmet>
      <LeadershipHeroBanner linkToLeadership={false} />
    </>
  );
}
