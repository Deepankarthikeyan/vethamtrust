import { Link } from 'react-router-dom';
import { FOOTER_ABOUT, FOOTER_POSTS } from '../config/vethamHome';
import { SITE } from '../config/site';
import { img } from '../config/images';

const INFO_LINKS = [
  { label: 'Our Village', path: '/our-village' },
  { label: 'Courses', path: '/courses' },
  { label: 'About Us', path: '/about' },
  { label: 'Events', path: '/events' },
  { label: 'Leadership', path: '/leadership' },
  { label: 'Donate', path: '/donate' },
];

const OTHER_LINKS = [
  { label: 'Contact Us', path: '/contact' },
  { label: 'Blog', path: '/blog' },
  { label: 'Social Media', path: '/social-media' },
];

export default function Footer() {
  return (
    <footer className="sigma_footer footer-2">
      <div className="sigma_footer-middle">
        <div className="container">
          <div className="row">
            <div className="col-xl-4 col-lg-4 col-md-4 col-sm-12 footer-widget">
              <h5 className="widget-title">About Us</h5>
              <p className="mb-4">{FOOTER_ABOUT}</p>
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
                {INFO_LINKS.map((link) => (
                  <li key={link.label}>
                    <i className="fas fa-om" />
                    <Link to={link.path}>{link.label}</Link>
                  </li>
                ))}
              </ul>
            </div>
            <div className="col-xl-2 col-lg-2 col-md-4 col-sm-12 footer-widget">
              <h5 className="widget-title">Others</h5>
              <ul>
                {OTHER_LINKS.map((link) => (
                  <li key={link.label}>
                    <i className="fas fa-om" />
                    <Link to={link.path}>{link.label}</Link>
                  </li>
                ))}
              </ul>
            </div>
            <div className="col-xl-4 col-lg-4 col-md-3 col-sm-12 d-none d-lg-block footer-widget widget-recent-posts">
              <h5 className="widget-title">Recent Posts</h5>
              {FOOTER_POSTS.map((post) => (
                <article key={post.title} className="sigma_recent-post">
                  <Link to="/blog"><img width="80" height="60" src={post.image} alt="post" loading="lazy" /></Link>
                  <div className="sigma_recent-post-body">
                    <Link to="/blog"><i className="far fa-calendar" /> {post.date}</Link>
                    <h6><Link to="/blog">{post.title}</Link></h6>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="sigma_footer-bottom">
        <div className="container-fluid">
          <div className="sigma_footer-copyright">
            <p>Copyright &copy; <Link to="/" className="custom-primary">{new Date().getFullYear()} {SITE.name}</Link>. All Rights Reserved.</p>
          </div>
          <div className="sigma_footer-logo">
            <img width="80" height="80" src={img('logoFooter')} alt={SITE.name} loading="lazy" className="vetham-footer-logo" />
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
