import { Helmet } from 'react-helmet-async';
import { SITE } from '../config/site';
import PageTitle from '../components/PageTitle';
import { VolunteersSection } from '../components/krishna/KrishnaHomeSections';

export default function Leadership() {
  return (
    <>
      <Helmet>
        <title>Leadership – {SITE.name}</title>
      </Helmet>
      <PageTitle title="Leadership" crumbs={['Leadership']} />
      <VolunteersSection />
    </>
  );
}
