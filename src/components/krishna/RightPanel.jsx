import { Link } from 'react-router-dom';
import { SITE } from '../../config/site';
import { img } from '../../config/images';

export default function RightPanel({ open, onClose }) {
  return (
    <>
      <aside className={`sigma_aside sigma_aside-right sigma_aside-right-panel sigma_aside-bg${open ? ' open' : ''}`}>
        <div className="sidebar">
          <div className="sidebar-widget widget-logo">
            <img width="208" height="60" src={img('logo')} className="mb-30" alt={SITE.name} loading="lazy" />
            <p>{SITE.name} — {SITE.tagline}. Yoga, meditation, and spiritual teachings in Coimbatore.</p>
          </div>
          <div className="sidebar-widget">
            <h5 className="widget-title">Contact</h5>
            <p><a href={SITE.phoneHref}>{SITE.phone}</a></p>
            <p><a href={`mailto:${SITE.email}`}>{SITE.email}</a></p>
            <p>{SITE.address}</p>
          </div>
          <div className="sidebar-widget">
            <h5 className="widget-title">Follow Us</h5>
            <div className="sigma_post-share">
              <ul className="sigma_sm square light">
                <li><a href={SITE.social.facebook} target="_blank" rel="noopener noreferrer" aria-label="Facebook"><i className="fab fa-facebook-f" /></a></li>
                <li><a href={SITE.social.instagram} target="_blank" rel="noopener noreferrer" aria-label="Instagram"><i className="fab fa-instagram" /></a></li>
                <li><a href={SITE.social.youtube} target="_blank" rel="noopener noreferrer" aria-label="YouTube"><i className="fab fa-youtube" /></a></li>
              </ul>
            </div>
          </div>
          <Link to="/donate" className="sigma_btn-custom" onClick={onClose}>Donate Now</Link>
        </div>
      </aside>
      {open && <button type="button" className="sigma_aside-overlay aside-trigger-right open" aria-label="Close panel" onClick={onClose} />}
    </>
  );
}
