import { Helmet } from 'react-helmet-async';
import { SITE } from '../config/site';
import PageTitle from '../components/PageTitle';
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
      <PageTitle title="Contact Us" crumbs={['Contact Us']} />

      <ContactInfoCards />
      <ContactForm onSubmit={handleSubmit} />
    </>
  );
}
