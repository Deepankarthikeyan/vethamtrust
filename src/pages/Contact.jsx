import { Helmet } from 'react-helmet-async';
import { SITE } from '../config/site';
import CinematicPageHero from '../components/cinematic/CinematicPageHero';
import ContactInfoCards from '../components/ContactInfoCards';
import ContactForm from '../components/ContactForm';

export default function Contact() {
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const data = new FormData(form);
    const body = Array.from(data.entries()).map(([k, v]) => `${k}: ${v}`).join('\n');
    window.location.href = `mailto:${SITE.email}?subject=Contact from Website&body=${encodeURIComponent(body)}`;
  };

  return (
    <>
      <Helmet>
        <title>Contact Us – {SITE.name}</title>
      </Helmet>
      <CinematicPageHero title="Contact Us" crumbs={['Contact Us']} />

      <div className="vx-page-content">
        <ContactInfoCards />
        <ContactForm onSubmit={handleSubmit} />
      </div>
    </>
  );
}
