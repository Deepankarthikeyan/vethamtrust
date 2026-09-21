import { Link } from 'react-router-dom';
import { FOOTER_POSTS, mht } from '../config/krishnaHome';
import { SITE } from '../config/site';

const INFO_LINKS = [
  { label: 'Puja', path: '/courses' },
  { label: 'Services', path: '/services' },
  { label: 'Temple', path: '/about' },
  { label: 'Holis', path: '/events' },
  { label: 'Volunteers', path: '/leadership' },
  { label: 'Donation', path: '/donate' },
];

const OTHER_LINKS = [
  { label: 'Contact Us', path: '/contact' },
  { label: 'Blog', path: '/blog' },
  { label: 'Donation', path: '/donate' },
];

export default function Footer() {
  return (
    <footer className="sigma_footer footer-2">
      <div className="sigma_footer-middle">
        <div className="container">
          <div className="row">
            <div className="col-xl-4 col-lg-4 col-md-4 col-sm-12 footer-widget">
              <h5 className="widget-title">About Us</h5>
              <p className="mb-4">You need to be sure there isn&apos;t anything embarrassing hidden in the middle of text.</p>
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
              <h5 className="widget-title">Information</h5>
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
            <p>Copyright &copy; Maharatri - <Link to="/" className="custom-primary">2026</Link></p>
          </div>
          <div className="sigma_footer-logo">
            <img width="208" height="60" src={mht('assets/img/logo.webp')} alt="logo" loading="lazy" />
          </div>
          <ul className="sigma_sm square">
            <li><a href={SITE.social.facebook} target="_blank" rel="noopener noreferrer" aria-label="Facebook"><i className="fab fa-facebook-f" /></a></li>
            <li><a href="#" aria-label="LinkedIn"><i className="fab fa-linkedin-in" /></a></li>
            <li><a href="#" aria-label="Twitter"><i className="fab fa-twitter" /></a></li>
            <li><a href={SITE.social.youtube} target="_blank" rel="noopener noreferrer" aria-label="YouTube"><i className="fab fa-youtube" /></a></li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
