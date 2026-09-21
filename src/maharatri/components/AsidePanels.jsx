import { Link } from 'react-router-dom';
import { asset } from '../utils/assets';

const IG_IMAGES = [1, 2, 3, 4, 5, 6];

export function RightPanel({ open, onClose }) {
  return (
    <>
      <aside className={`sigma_aside sigma_aside-right sigma_aside-right-panel sigma_aside-bg${open ? ' open' : ''}`}>
        <div className="sidebar">
          <div className="sidebar-widget widget-logo">
            <img width="208" height="60" src={asset('assets/img/logo.webp')} className="mb-30" alt="logo" loading="lazy" />
            <p>Curabitur non nulla sit amet nisl tempus convallis quis ac lectus. Donec rutrum congue leo eget malesuada.</p>
          </div>
          <div className="sidebar-widget widget-ig">
            <h5 className="widget-title">Instagram</h5>
            <div className="row">
              {IG_IMAGES.map((n) => (
                <div key={n} className="col-lg-4 col-md-4 col-sm-4 col-6">
                  <a href="#" className="sigma_ig-item">
                    <img width="80" height="80" src={asset(`assets/img/ig/${n}.webp`)} alt="ig" loading="lazy" />
                  </a>
                </div>
              ))}
            </div>
          </div>
          <div className="sidebar-widget">
            <h5 className="widget-title">Follow Us</h5>
            <div className="sigma_post-share">
              <ul className="sigma_sm square light">
                <li><a href="#" aria-label="Facebook"><i className="fab fa-facebook-f" /></a></li>
                <li><a href="#" aria-label="LinkedIn"><i className="fab fa-linkedin-in" /></a></li>
                <li><a href="#" aria-label="Twitter"><i className="fab fa-twitter" /></a></li>
                <li><a href="#" aria-label="YouTube"><i className="fab fa-youtube" /></a></li>
              </ul>
            </div>
          </div>
        </div>
      </aside>
      {open && <button type="button" className="sigma_aside-overlay aside-trigger-right open" aria-label="Close panel" onClick={onClose} />}
    </>
  );
}

export function MobileNav({ open, onClose }) {
  return (
    <>
      <aside className={`sigma_aside sigma_aside-left${open ? ' open' : ''}`}>
        <Link className="navbar-brand" to="/" onClick={onClose}>
          <img width="208" height="60" src={asset('assets/img/logo.webp')} alt="logo" loading="lazy" />
        </Link>
        <ul>
          <li className="menu-item"><Link to="/" onClick={onClose}>Krishna Home</Link></li>
          <li className="menu-item"><Link to="/about" onClick={onClose}>About Us</Link></li>
          <li className="menu-item"><Link to="/donate" onClick={onClose}>Donation</Link></li>
          <li className="menu-item"><a href="/#puja" onClick={onClose}>Puja</a></li>
          <li className="menu-item"><a href="/#volunteers" onClick={onClose}>Volunteers</a></li>
          <li className="menu-item"><Link to="/contact" onClick={onClose}>Contact</Link></li>
        </ul>
      </aside>
      {open && <button type="button" className="sigma_aside-overlay aside-trigger-left open" aria-label="Close menu" onClick={onClose} />}
    </>
  );
}
