import { Link, useLocation } from 'react-router-dom';
import { getNavLabel } from '../../config/languages';
import { SITE, NAV_ITEMS } from '../../config/site';
import { img } from '../../config/images';
import { useUiLanguage } from '../../hooks/useUiLanguage';

export default function MobileNav({ open, onClose }) {
  const { pathname } = useLocation();
  const lang = useUiLanguage();

  return (
    <>
      <aside className={`sigma_aside sigma_aside-left${open ? ' open' : ''}`}>
        <Link className="navbar-brand" to="/" onClick={onClose}>
          <img width="208" height="60" src={img('logo')} alt={SITE.name} loading="lazy" />
        </Link>
        <ul>
          {NAV_ITEMS.map((item) => (
            <li key={item.key} className={`menu-item${pathname === item.path ? ' current' : ''}`}>
              <Link to={item.path} onClick={onClose}>
                <span className="vetham-nav-label notranslate">{getNavLabel(item.key, lang)}</span>
              </Link>
              {item.children && (
                <ul className="sub-menu">
                  {item.children.map((child) => (
                    <li key={child.key} className={`menu-item${pathname === child.path ? ' current' : ''}`}>
                      <Link to={child.path} onClick={onClose}>
                        <span className="vetham-nav-label notranslate">{getNavLabel(child.key, lang)}</span>
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
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
