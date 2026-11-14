import { Link } from 'react-router-dom';
import { FOOTER_ABOUT } from '../../config/vethamHome';
import { SITE } from '../../config/site';
import { img } from '../../config/images';
import LazyImage from '../LazyImage';

const GALLERY_PREVIEW = ['galleryPreview1', 'galleryPreview2', 'galleryPreview3', 'galleryPreview4', 'galleryPreview1', 'galleryPreview2'];

export default function RightPanel({ open, onClose }) {
  return (
    <>
      <aside className={`sigma_aside sigma_aside-right sigma_aside-right-panel sigma_aside-bg${open ? ' open' : ''}`}>
        <div className="sidebar">
          <div className="sidebar-widget widget-logo">
            <LazyImage src={img('logo')} className="mb-30 vetham-mht-logo" alt={SITE.name} />
            <p>{FOOTER_ABOUT}</p>
          </div>
          <div className="sidebar-widget widget-ig">
            <h5 className="widget-title">Gallery</h5>
            <div className="row">
              {GALLERY_PREVIEW.map((key, n) => (
                <div key={`${key}-${n}`} className="col-lg-4 col-md-4 col-sm-4 col-6">
                  <Link to="/social-media" className="sigma_ig-item" onClick={onClose}>
                    <img width="80" height="80" src={img(key)} alt="gallery" loading="lazy" />
                  </Link>
                </div>
              ))}
            </div>
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
        </div>
      </aside>
      {open && <button type="button" className="sigma_aside-overlay aside-trigger-right open" aria-label="Close panel" onClick={onClose} />}
    </>
  );
}
