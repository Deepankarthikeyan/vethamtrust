import { Link, useLocation } from 'react-router-dom';
import { KRISHNA_NAV } from '../../config/krishnaNav';
import { mht } from '../../config/krishnaHome';
import { SITE } from '../../config/site';

export default function MobileNav({ open, onClose }) {
  const { pathname } = useLocation();

  return (
    <>
      <aside className={`sigma_aside sigma_aside-left${open ? ' open' : ''}`}>
        <Link className="navbar-brand" to="/" onClick={onClose}>
          <img width="208" height="60" src={mht('assets/img/logo.webp')} alt="Maharatri" loading="lazy" />
        </Link>
        <ul>
          {KRISHNA_NAV.flatMap((item) => {
            if (item.children) {
              return item.children.map((child) => (
                <li key={child.path} className={`menu-item${pathname === child.path ? ' current' : ''}`}>
                  <Link to={child.path} onClick={onClose}>{child.label}</Link>
                </li>
              ));
            }
            return (
              <li key={item.path} className={`menu-item${pathname === item.path ? ' current' : ''}`}>
                <Link to={item.path} onClick={onClose}>{item.label}</Link>
              </li>
            );
          })}
          <li className="menu-item"><Link to="/contact" onClick={onClose}>Contact</Link></li>
        </ul>
        <div className="sigma_aside-contact mt-4">
          <p><a href={SITE.phoneHref}>{SITE.phone}</a></p>
          <p><a href={`mailto:${SITE.email}`}>{SITE.email}</a></p>
        </div>
      </aside>
      {open && <button type="button" className="sigma_aside-overlay aside-trigger-left open" aria-label="Close menu" onClick={onClose} />}
    </>
  );
}
