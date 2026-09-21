import { Helmet } from 'react-helmet-async';
import { SITE } from '../config/site';
import PremiumLeadership from '../components/premium/PremiumLeadership';

export default function Leadership() {
  return (
    <>
      <Helmet>
        <title>Leadership – {SITE.name}</title>
      </Helmet>
      <PremiumLeadership linkToLeadership={false} />
    </>
  );
}
