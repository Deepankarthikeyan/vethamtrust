import { Link } from 'react-router-dom';
import { DONATION } from '../config/donate';
import { SITE } from '../config/site';
import { img } from '../config/images';

const QUICK_LINKS = [
  { label: 'Home', path: '/' },
  { label: 'Our Village', path: '/our-village' },
  { label: 'Courses', path: '/courses' },
  { label: 'Events', path: '/events' },
  { label: 'Social Media', path: '/social-media' },
  { label: 'Blog', path: '/blog' },
  { label: 'Donate', path: '/donate' },
  { label: 'Contact us', path: '/contact' },
];

export default function Footer() {
  return (
    <footer className="sigma_footer footer-2">
      <div className="sigma_footer-middle">
        <div className="container">
          <div className="row">
            <div className="col-xl-4 col-lg-4 col-md-4 col-sm-12 footer-widget">
              <h5 className="widget-title">About Us</h5>
              <p className="mb-4">{SITE.name} — {SITE.tagline}. Spiritual teachings, yoga, and meditation in Coimbatore.</p>
              <div className="d-flex align-items-center justify-content-md-start justify-content-center">
                <i className="far fa-phone custom-primary me-3" />
                <a href={SITE.phoneHref}>{SITE.phone}</a>
              </div>
              <div className="d-flex align-items-center justify-content-md-start justify-content-center mt-2">
                <i className="far fa-envelope custom-primary me-3" />
                <a href={`mailto:${SITE.email}`}>{SITE.email}</a>
              </div>
              <div className="d-flex align-items-start justify-content-md-start justify-content-center mt-2">
                <i className="far fa-map-marker custom-primary me-3" />
                <span>{SITE.address}</span>
              </div>
            </div>
            <div className="col-xl-2 col-lg-2 col-md-4 col-sm-12 footer-widget">
              <h5 className="widget-title">Quick Links</h5>
              <ul>
                {QUICK_LINKS.map((link) => (
                  <li key={link.path}>
                    <i className="fas fa-om" />
                    <Link to={link.path}>{link.label}</Link>
                  </li>
                ))}
              </ul>
            </div>
            <div className="col-xl-2 col-lg-2 col-md-4 col-sm-12 footer-widget">
              <h5 className="widget-title">Donations</h5>
              <div className="vetham-footer-donate">
                <p className="vetham-footer-donate__lead">Scan &amp; pay via UPI</p>
                <figure className="vetham-footer-donate__qr">
                  <img src={img('qrCode')} alt="Donate to Vetham Kuzhumam Spiritual Trust" className="vetham-qr-code" />
                  <figcaption>UPI: {DONATION.upiId}</figcaption>
                </figure>
                <a href={DONATION.razorpayUrl} className="vetham-footer-donate__razorpay" target="_blank" rel="noopener noreferrer">
                  <img src={img('razorpayLogo')} alt="Razorpay" />
                  <span>Donate via Razorpay</span>
                </a>
              </div>
            </div>
            <div className="col-xl-4 col-lg-4 col-md-3 col-sm-12 d-none d-lg-block footer-widget widget-recent-posts">
              <h5 className="widget-title">Connect With Us</h5>
              <div className="vetham-footer-social-names">
                <a href={SITE.social.facebook} target="_blank" rel="noopener noreferrer">
                  <i className="fab fa-facebook-f" /> Facebook
                </a>
                <a href={SITE.social.instagram} target="_blank" rel="noopener noreferrer">
                  <i className="fab fa-instagram" /> Instagram
                </a>
                <a href={SITE.social.youtube} target="_blank" rel="noopener noreferrer">
                  <i className="fab fa-youtube" /> Youtube
                </a>
              </div>
              <p className="mt-3 mb-0">{SITE.addressLine1}<br />{SITE.address}</p>
            </div>
          </div>
        </div>
      </div>
      <div className="sigma_footer-bottom">
        <div className="container-fluid">
          <div className="sigma_footer-copyright">
            <p>
              Copyright {new Date().getFullYear()} by <Link to="/">{SITE.name}</Link>. All Rights Reserved.
            </p>
          </div>
          <div className="sigma_footer-logo">
            <img width="208" height="60" src={img('logoFooter')} alt={SITE.name} loading="lazy" />
          </div>
          <ul className="sigma_sm square">
            <li><a href={SITE.social.facebook} target="_blank" rel="noopener noreferrer" aria-label="Facebook"><i className="fab fa-facebook-f" /></a></li>
            <li><a href={SITE.social.instagram} target="_blank" rel="noopener noreferrer" aria-label="Instagram"><i className="fab fa-instagram" /></a></li>
            <li><a href={SITE.social.youtube} target="_blank" rel="noopener noreferrer" aria-label="YouTube"><i className="fab fa-youtube" /></a></li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
