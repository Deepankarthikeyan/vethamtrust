import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { getNavLabel } from '../config/languages';
import { NAV_ITEMS, SITE } from '../config/site';
import { img } from '../config/images';
import { useUiLanguage } from '../hooks/useUiLanguage';

function isActive(pathname, item) {
  if (item.path === '/') return pathname === '/';
  if (pathname === item.path) return true;
  if (item.children?.some((c) => pathname === c.path || pathname.startsWith(`${c.path}/`))) return true;
  return pathname.startsWith(`${item.path}/`);
}

function NavItem({ item, pathname, lang, onNavigate }) {
  if (item.children) {
    return (
      <li className={`menu-item menu-item-has-children${isActive(pathname, item) ? ' current' : ''}`}>
        <Link to={item.path} onClick={onNavigate}>
          <span className="vetham-nav-label notranslate">{getNavLabel(item.key, lang)}</span>
        </Link>
        <ul className="sub-menu">
          {item.children.map((child) => (
            <li key={child.key} className={`menu-item${pathname === child.path ? ' current' : ''}`}>
              <Link to={child.path} onClick={onNavigate}>
                <span className="vetham-nav-label notranslate">{getNavLabel(child.key, lang)}</span>
              </Link>
            </li>
          ))}
        </ul>
      </li>
    );
  }

  return (
    <li className={`menu-item${isActive(pathname, item) ? ' current' : ''}`}>
      <Link to={item.path} onClick={onNavigate}>
        <span className="vetham-nav-label notranslate">{getNavLabel(item.key, lang)}</span>
      </Link>
    </li>
  );
}

export default function Header({ onSearchOpen, onAsideRight, onAsideLeft }) {
  const { pathname } = useLocation();
  const lang = useUiLanguage();
  const [sticky, setSticky] = useState(false);

  useEffect(() => {
    const onScroll = () => setSticky(window.scrollY > 80);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const closeAside = () => {
    document.body.classList.remove('aside-open');
    document.body.classList.remove('aside-open-left');
  };

  return (
    <header className={`sigma_header header-2 can-sticky${sticky ? ' is-sticky' : ''}`}>
      <div className="sigma_header-middle">
        <nav className="navbar" role="navigation" aria-label="Primary">
          <div className="sigma_header-controls style-2">
            <ul className="sigma_header-controls-inner">
              <li className="aside-toggler style-2 desktop-toggler">
                <button type="button" aria-label="Open side panel" onClick={onAsideRight}>
                  {Array.from({ length: 9 }).map((_, i) => <span key={i} />)}
                </button>
              </li>
              <li className="aside-toggler style-2">
                <button type="button" aria-label="Open mobile menu" onClick={onAsideLeft}>
                  {Array.from({ length: 9 }).map((_, i) => <span key={i} />)}
                </button>
              </li>
            </ul>
          </div>

          <ul className="navbar-nav notranslate">
            {NAV_ITEMS.map((item) => (
              <NavItem key={item.key} item={item} pathname={pathname} lang={lang} onNavigate={closeAside} />
            ))}
          </ul>

          <div className="sigma_logo-wrapper">
            <Link className="navbar-brand" to="/">
              <img width="208" height="60" src={img('logo')} alt={SITE.name} loading="eager" />
            </Link>
          </div>

          <div className="sigma_header-controls sigma_header-button">
            <a href={SITE.phoneHref} className="sigma_header-contact">
              <i className="fal fa-phone" />
              <div className="sigma_header-contact-inner">
                <span>Get Support</span>
                <h6>{SITE.phone}</h6>
              </div>
            </a>
            <Link className="sigma_btn-custom" to="/donate">
              <span className="vetham-nav-label notranslate">{getNavLabel('donate', lang)}</span>
            </Link>
          </div>

          <div className="sigma_header-controls style-1">
            <button type="button" className="sigma_search-trigger" aria-label="Open search" onClick={onSearchOpen}>
              <i className="flaticon-magnifying-glass" />
            </button>
          </div>
        </nav>
      </div>
    </header>
  );
}
