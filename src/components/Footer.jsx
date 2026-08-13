import { Link } from 'react-router-dom';
import { SITE } from '../config/site';
import { img } from '../config/images';
import LazyImage from './LazyImage';

export default function Footer() {
  return (
    <footer className="main-footer">
      <div className="auto-container">
        <div className="footer-top">
          <figure className="footer-logo">
            <Link to="/"><LazyImage src={img('logoFooter')} alt={SITE.name} /></Link>
          </figure>
          <ul className="social-links">
            <li><a href={SITE.social.facebook} target="_blank" rel="noopener noreferrer"><i className="fab fa-facebook-f" /></a></li>
            <li><a href={SITE.social.instagram} target="_blank" rel="noopener noreferrer"><i className="fab fa-instagram" /></a></li>
            <li><a href={SITE.social.youtube} target="_blank" rel="noopener noreferrer"><i className="fab fa-youtube" /></a></li>
          </ul>
        </div>
        <div className="widget-section">
          <div className="row clearfix">
            <div className="col-lg-3 col-md-6 col-sm-12 footer-column">
              <div className="about-widget footer-widget">
                <div className="widget-title"><h3>About</h3></div>
                <div className="text">
                  <p>{SITE.name}, founded in 2017 and inspired by Yogiraj Vethathiri Maharishi, is dedicated to the vision of &quot;{SITE.tagline}.&quot;</p>
                  <p>Through yoga, meditation, and holistic teachings, we guide individuals on their spiritual journeys.</p>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-12 footer-column">
              <div className="links-widget footer-widget ml_50">
                <div className="widget-title"><h3>Quick Link</h3></div>
                <div className="widget-content">
                  <ul className="links-list clearfix">
                    <li><Link to="/about">About Us</Link></li>
                    <li><Link to="/courses">Services</Link></li>
                    <li><Link to="/our-village">Our Village</Link></li>
                    <li><Link to="/leadership">Leadership</Link></li>
                    <li><Link to="/contact">Contact Us</Link></li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-12 footer-column">
              <div className="links-widget footer-widget ml_30">
                <div className="widget-title"><h3>Useful Links</h3></div>
                <div className="widget-content">
                  <ul className="links-list clearfix">
                    <li><Link to="/events">Events</Link></li>
                    <li><Link to="/blog">Blog</Link></li>
                    <li><Link to="/social-media">Gallery</Link></li>
                    <li><Link to="/contact">Contact</Link></li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-12 footer-column">
              <div className="contact-widget footer-widget ml_30">
                <div className="widget-title"><h3>Contact</h3></div>
                <div className="widget-content">
                  <p>{SITE.name} — {SITE.tagline}.</p>
                  <ul className="info-list clearfix">
                    <li><i className="icon-17" />{SITE.address}</li>
                    <li><i className="icon-18" /><a href={`mailto:${SITE.email}`}>{SITE.email}</a></li>
                    <li><i className="icon-19" /><a href={SITE.phoneHref}>{SITE.phone}</a></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="footer-bottom centred">
          <div className="copyright">
            <p>
              Copyright {new Date().getFullYear()} by <Link to="/">{SITE.name}</Link>. All Rights Reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
