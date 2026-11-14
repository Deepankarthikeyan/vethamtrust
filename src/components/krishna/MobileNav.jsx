import { Link, useLocation } from 'react-router-dom';
import { SITE, NAV_ITEMS } from '../../config/site';
import { getNavLabel } from '../../config/languages';
import { img } from '../../config/images';
import { useUiLanguage } from '../../hooks/useUiLanguage';
import LazyImage from '../LazyImage';

export default function MobileNav({ open, onClose }) {
  const { pathname } = useLocation();
  const lang = useUiLanguage();

  return (
    <>
      <aside className={`sigma_aside sigma_aside-left${open ? ' open' : ''}`}>
        <Link className="navbar-brand vetham-mht-logo" to="/" onClick={onClose}>
          <LazyImage src={img('logo')} alt={SITE.name} />
        </Link>
        <ul className="notranslate">
          {NAV_ITEMS.flatMap((item) => {
            if (item.children) {
              return item.children.map((child) => (
                <li key={child.path} className={`menu-item${pathname === child.path ? ' current' : ''}`}>
                  <Link to={child.path} onClick={onClose}>{getNavLabel(child.key, lang)}</Link>
                </li>
              ));
            }
            return (
              <li key={item.path} className={`menu-item${pathname === item.path ? ' current' : ''}`}>
                <Link to={item.path} onClick={onClose}>{getNavLabel(item.key, lang)}</Link>
              </li>
            );
          })}
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
