import { Link } from 'react-router-dom';
import { mht } from '../../config/krishnaHome';
import { SITE } from '../../config/site';

const IG_IMAGES = [1, 2, 3, 4, 5, 6];

export default function RightPanel({ open, onClose }) {
  return (
    <>
      <aside className={`sigma_aside sigma_aside-right sigma_aside-right-panel sigma_aside-bg${open ? ' open' : ''}`}>
        <div className="sidebar">
          <div className="sidebar-widget widget-logo">
            <img width="208" height="60" src={mht('assets/img/logo.webp')} className="mb-30" alt="Maharatri" loading="lazy" />
            <p>Curabitur non nulla sit amet nisl tempus convallis quis ac lectus. Donec rutrum congue leo eget malesuada.</p>
          </div>
          <div className="sidebar-widget widget-ig">
            <h5 className="widget-title">Instagram</h5>
            <div className="row">
              {IG_IMAGES.map((n) => (
                <div key={n} className="col-lg-4 col-md-4 col-sm-4 col-6">
                  <a href={SITE.social.instagram} className="sigma_ig-item" target="_blank" rel="noopener noreferrer">
                    <img width="80" height="80" src={mht(`assets/img/ig/${n}.webp`)} alt="ig" loading="lazy" />
                  </a>
                </div>
              ))}
            </div>
          </div>
          <div className="sidebar-widget">
            <h5 className="widget-title">Follow Us</h5>
            <div className="sigma_post-share">
              <ul className="sigma_sm square light">
                <li><a href={SITE.social.facebook} target="_blank" rel="noopener noreferrer" aria-label="Facebook"><i className="fab fa-facebook-f" /></a></li>
                <li><a href="#" aria-label="LinkedIn"><i className="fab fa-linkedin-in" /></a></li>
                <li><a href="#" aria-label="Twitter"><i className="fab fa-twitter" /></a></li>
                <li><a href={SITE.social.youtube} target="_blank" rel="noopener noreferrer" aria-label="YouTube"><i className="fab fa-youtube" /></a></li>
              </ul>
            </div>
          </div>
        </div>
      </aside>
      {open && <button type="button" className="sigma_aside-overlay aside-trigger-right open" aria-label="Close panel" onClick={onClose} />}
    </>
  );
}
