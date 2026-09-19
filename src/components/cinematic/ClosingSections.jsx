import { SITE } from '../../config/homeCinematic';
import { img } from '../../config/images';
import MagneticButton from './MagneticButton';

export default function DonationSection() {
  return (
    <section id="cin-donate" className="cin-donate" data-cursor="EXPLORE">
      <div className="cin-donate__bg" style={{ backgroundImage: `url(${img('feature1')})` }} />
      <div className="cin-donate__overlay" />
      <div className="cin-donate__content">
        <p className="cin-section-label">Support the Mission</p>
        <h2>Your support becomes someone&apos;s new beginning.</h2>
        <p>Help build the spiritual village, elder care, and programmes that transform lives.</p>
        <MagneticButton to="/donate" className="cin-btn--primary cin-btn--light">
          Support the Mission
        </MagneticButton>
      </div>
    </section>
  );
}

export function ContactSection() {
  return (
    <section id="cin-contact" className="cin-contact">
      <div className="cin-contact__card" data-cursor="VIEW">
        <div className="cin-contact__map">
          <iframe
            title="Vetham Spiritual Trust location"
            src="https://maps.google.com/maps?q=Vetham+Kuzhumam+Spiritual+Trust+Marisettipathi+Village+Coimbatore&t=&z=13&ie=UTF8&iwloc=&output=embed"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
        <div className="cin-contact__details">
          <p className="cin-section-label">Contact</p>
          <h2>Visit us in Coimbatore</h2>
          <address>
            {SITE.addressLine1}<br />
            {SITE.address}
          </address>
          <p>
            <a href={SITE.phoneHref}>{SITE.phone}</a>
            <br />
            <a href={`mailto:${SITE.email}`}>{SITE.email}</a>
          </p>
          <MagneticButton href={SITE.mapsUrl} className="cin-btn--ghost">
            Get Directions
          </MagneticButton>
        </div>
      </div>
    </section>
  );
}

export function HomeFooterSection() {
  return (
    <section id="cin-footer" className="cin-home-footer">
      <div className="cin-home-footer__inner">
        <h2>VETHAM</h2>
        <p>Peace · Harmony · Wisdom</p>
        <nav className="cin-home-footer__nav" aria-label="Footer">
          <a href="/about">About</a>
          <a href="/courses">Courses</a>
          <a href="/events">Events</a>
          <a href="/donate">Donate</a>
          <a href="/contact">Contact</a>
        </nav>
        <p className="cin-home-footer__legal">
          © {new Date().getFullYear()} {SITE.name}. All rights reserved.
        </p>
      </div>
    </section>
  );
}
