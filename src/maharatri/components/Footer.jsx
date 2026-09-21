import { Link } from 'react-router-dom';
import { FOOTER_LINKS, SITE } from '../config/site';
import { asset } from '../utils/assets';

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
                <span>{SITE.phone}</span>
              </div>
              <div className="d-flex align-items-center justify-content-md-start justify-content-center mt-2">
                <i className="far fa-envelope custom-primary me-3" />
                <span>{SITE.email}</span>
              </div>
              <div className="d-flex align-items-center justify-content-md-start justify-content-center mt-2">
                <i className="far fa-map-marker custom-primary me-3" />
                <span>{SITE.address}</span>
              </div>
            </div>
            <div className="col-xl-2 col-lg-2 col-md-4 col-sm-12 footer-widget">
              <h5 className="widget-title">Information</h5>
              <ul>
                {FOOTER_LINKS.information.map((link) => (
                  <li key={link.label}>
                    <i className="fas fa-om" />
                    {link.path.startsWith('/#') ? (
                      <a href={link.path}>{link.label}</a>
                    ) : (
                      <Link to={link.path}>{link.label}</Link>
                    )}
                  </li>
                ))}
              </ul>
            </div>
            <div className="col-xl-2 col-lg-2 col-md-4 col-sm-12 footer-widget">
              <h5 className="widget-title">Others</h5>
              <ul>
                {FOOTER_LINKS.others.map((link) => (
                  <li key={link.label}>
                    <i className="fas fa-om" />
                    <Link to={link.path}>{link.label}</Link>
                  </li>
                ))}
              </ul>
            </div>
            <div className="col-xl-4 col-lg-4 col-md-3 col-sm-12 d-none d-lg-block footer-widget widget-recent-posts">
              <h5 className="widget-title">Recent Posts</h5>
              {['Education for all rural children', 'Testimony love offering so blessed', 'As we\'ve all discovered by now, the world can change'].map((title) => (
                <article key={title} className="sigma_recent-post">
                  <Link to="/blog"><img width="80" height="60" src={asset('assets/img/blog/1.webp')} alt="post" loading="lazy" /></Link>
                  <div className="sigma_recent-post-body">
                    <Link to="/blog"><i className="far fa-calendar" /> May 20, 2026</Link>
                    <h6><Link to="/blog">{title}</Link></h6>
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
            <p>Copyright &copy; Maharatri - <a href="#" className="custom-primary">2026</a></p>
          </div>
          <div className="sigma_footer-logo">
            <img width="208" height="60" src={asset('assets/img/logo.webp')} alt="logo" loading="lazy" />
          </div>
          <ul className="sigma_sm square">
            <li><a href="#" aria-label="Facebook"><i className="fab fa-facebook-f" /></a></li>
            <li><a href="#" aria-label="LinkedIn"><i className="fab fa-linkedin-in" /></a></li>
            <li><a href="#" aria-label="Twitter"><i className="fab fa-twitter" /></a></li>
            <li><a href="#" aria-label="YouTube"><i className="fab fa-youtube" /></a></li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
