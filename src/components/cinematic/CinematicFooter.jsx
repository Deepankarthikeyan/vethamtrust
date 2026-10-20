import { Link } from 'react-router-dom';
import { SITE } from '../../config/site';
import { DONATION } from '../../config/donate';
import { img } from '../../config/images';

const QUICK_LINKS = [
  { label: 'Home', path: '/' },
  { label: 'About Us', path: '/about' },
  { label: 'Our Village', path: '/our-village' },
  { label: 'Courses', path: '/courses' },
  { label: 'Events', path: '/events' },
  { label: 'Leadership', path: '/leadership' },
];

const MORE_LINKS = [
  { label: 'Services', path: '/services' },
  { label: 'Blog', path: '/blog' },
  { label: 'Social Media', path: '/social-media' },
  { label: 'Donate', path: '/donate' },
  { label: 'Contact', path: '/contact' },
];

export default function CinematicFooter() {
  return (
    <footer className="vx-footer">
      <div className="vx-container">
        <div className="vx-footer__grid">
          <div className="vx-footer__brand-col">
            <Link to="/" className="vx-footer__brand-mark" aria-label={`${SITE.name} home`}>
              <img
                className="vx-footer__emblem"
                src={img('logoEmblem')}
                alt=""
                width={400}
                height={739}
                loading="lazy"
                decoding="async"
              />
              <span className="vx-footer__brand-stack">
                <span className="vx-footer__brand-line vx-footer__brand-line--1">Vetham Kuzhumam</span>
                <span className="vx-footer__brand-line vx-footer__brand-line--2">
                  Spiritual <span className="vx-footer__brand-trust">Trust</span>
                </span>
                <span className="vx-footer__brand-line vx-footer__brand-line--3">
                  <span className="vx-footer__brand-stars" aria-hidden="true">
                    <i className="fas fa-star" />
                    <i className="fas fa-star" />
                    <i className="fas fa-star" />
                  </span>
                  <span className="vx-footer__brand-mid">Unified Divine Yoga</span>
                  <span className="vx-footer__brand-stars" aria-hidden="true">
                    <i className="fas fa-star" />
                    <i className="fas fa-star" />
                    <i className="fas fa-star" />
                  </span>
                </span>
                <span className="vx-footer__brand-line vx-footer__brand-line--4">
                  {SITE.tagline} · Coimbatore
                </span>
              </span>
              <img
                className="vx-footer__portrait"
                src={img('logoPortrait')}
                alt=""
                width={280}
                height={739}
                loading="lazy"
                decoding="async"
              />
            </Link>
            <p className="vx-text vx-footer__intro">
              Yoga, meditation, and spiritual teachings in Coimbatore.
            </p>
          </div>
          <div>
            <h4>Quick Links</h4>
            <ul className="vx-footer__links">
              {QUICK_LINKS.map((l) => <li key={l.path}><Link to={l.path}>{l.label}</Link></li>)}
            </ul>
          </div>
          <div>
            <h4>Explore</h4>
            <ul className="vx-footer__links">
              {MORE_LINKS.map((l) => <li key={l.path}><Link to={l.path}>{l.label}</Link></li>)}
            </ul>
          </div>
          <div>
            <h4>Contact</h4>
            <ul className="vx-footer__links">
              <li><a href={SITE.phoneHref}>{SITE.phone}</a></li>
              <li><a href={`mailto:${SITE.email}`}>{SITE.email}</a></li>
              <li>{SITE.addressShort}</li>
              <li><span style={{ color: 'var(--vx-gold)' }}>UPI:</span> {DONATION.upiId}</li>
            </ul>
          </div>
        </div>

        <div className="vx-footer__bottom">
          <p>Copyright {new Date().getFullYear()} {SITE.name}. All Rights Reserved.</p>
          <div className="vx-footer__social">
            <a href={SITE.social.facebook} target="_blank" rel="noopener noreferrer" aria-label="Facebook"><i className="fab fa-facebook-f" /></a>
            <a href={SITE.social.instagram} target="_blank" rel="noopener noreferrer" aria-label="Instagram"><i className="fab fa-instagram" /></a>
            <a href={SITE.social.youtube} target="_blank" rel="noopener noreferrer" aria-label="YouTube"><i className="fab fa-youtube" /></a>
          </div>
        </div>
      </div>
    </footer>
  );
}
