import { Link } from 'react-router-dom';
import { SITE } from '../config/site';
import { DONATION } from '../config/donate';
import { img } from '../config/images';

export default function Footer() {
  return (
    <footer className="main-footer">
      <div className="auto-container">
        <div className="footer-top">
          <figure className="footer-logo">
            <Link to="/">
              <img
                src={img('logo')}
                alt={SITE.name}
                className="vetham-footer-logo"
                width={120}
                height={120}
              />
            </Link>
          </figure>
          <ul className="social-links">
            <li><a href={SITE.social.facebook} target="_blank" rel="noopener noreferrer"><i className="fab fa-facebook-f" /></a></li>
            <li><a href={SITE.social.instagram} target="_blank" rel="noopener noreferrer"><i className="fab fa-instagram" /></a></li>
            <li><a href={SITE.social.youtube} target="_blank" rel="noopener noreferrer"><i className="fab fa-youtube" /></a></li>
          </ul>
        </div>
        <div className="widget-section vetham-footer-grid-section">
          <div className="row clearfix vetham-footer-grid">
            <div className="col-xl-3 col-lg-6 col-md-6 col-sm-12 footer-column">
              <div className="links-widget footer-widget">
                <div className="widget-title"><h3>Quick Links</h3></div>
                <div className="widget-content">
                  <ul className="links-list clearfix">
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/our-village">Our Village</Link></li>
                    <li><Link to="/courses">Courses</Link></li>
                    <li><Link to="/events">Events</Link></li>
                    <li><Link to="/social-media">Social Media</Link></li>
                    <li><Link to="/blog">Blogs</Link></li>
                    <li><Link to="/donate">Donate</Link></li>
                    <li><Link to="/contact">Contact us</Link></li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-6 col-md-6 col-sm-12 footer-column">
              <div className="about-widget footer-widget">
                <div className="widget-title"><h3>Address</h3></div>
                <div className="text">
                  <p>{SITE.address}</p>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-6 col-md-6 col-sm-12 footer-column">
              <div className="donate-widget footer-widget">
                <div className="widget-title"><h3>Donations</h3></div>
                <div className="widget-content vetham-footer-donate">
                  <p className="vetham-footer-donate__lead">Scan &amp; pay via UPI</p>
                  <figure className="vetham-footer-donate__qr">
                    <img src={img('qrCode')} alt="Donate to Vetham Kuzhumam Spiritual Trust" className="vetham-qr-code" />
                    <figcaption>UPI: {DONATION.upiId}</figcaption>
                  </figure>
                  <a
                    href={DONATION.razorpayUrl}
                    className="vetham-footer-donate__razorpay"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img src={img('razorpayLogo')} alt="Razorpay" />
                    <span>Donate via Razorpay</span>
                  </a>
                  <Link to="/donate" className="vetham-footer-donate__link">View donation details</Link>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-6 col-md-6 col-sm-12 footer-column">
              <div className="contact-widget footer-widget">
                <div className="widget-title"><h3>Contact Information</h3></div>
                <div className="widget-content vetham-footer-contact">
                  <p><a href={`mailto:${SITE.email}`}>Email: {SITE.email}</a></p>
                  <p><a href={SITE.phoneHref}>Call: {SITE.phone}</a></p>
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
