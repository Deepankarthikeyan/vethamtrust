import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { KRISHNA_NAV } from '../config/krishnaNav';
import { mht } from '../config/krishnaHome';
import { SITE } from '../config/site';

function isActive(pathname, item) {
  if (item.path === '/') return pathname === '/';
  if (item.path && pathname === item.path) return true;
  if (item.children?.some((c) => pathname === c.path || pathname.startsWith(`${c.path}/`))) return true;
  return item.path ? pathname.startsWith(`${item.path}/`) : false;
}

function NavItem({ item, pathname, onNavigate }) {
  if (item.children) {
    return (
      <li className={`menu-item menu-item-has-children${isActive(pathname, item) ? ' current' : ''}`}>
        <a href="#" onClick={(e) => e.preventDefault()}>{item.label}</a>
        <ul className="sub-menu">
          {item.children.map((child) => (
            <li key={child.path} className={`menu-item${pathname === child.path ? ' current' : ''}`}>
              <Link to={child.path} onClick={onNavigate}>{child.label}</Link>
            </li>
          ))}
        </ul>
      </li>
    );
  }

  return (
    <li className={`menu-item${isActive(pathname, item) ? ' current' : ''}`}>
      <Link to={item.path} onClick={onNavigate}>{item.label}</Link>
    </li>
  );
}

export default function Header({ onSearchOpen, onAsideRight, onAsideLeft }) {
  const { pathname } = useLocation();
  const [sticky, setSticky] = useState(false);

  useEffect(() => {
    const onScroll = () => setSticky(window.scrollY > 80);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header className={`sigma_header header-2 can-sticky${sticky ? ' is-sticky' : ''}`}>
      <div className="sigma_header-middle">
        <nav className="navbar" role="navigation" aria-label="Primary">
          <div className="sigma_header-controls style-2">
            <ul className="sigma_header-controls-inner">
              <li className="aside-toggler style-2 aside-trigger-right desktop-toggler">
                <button type="button" aria-label="Open side panel" onClick={onAsideRight}>
                  {Array.from({ length: 9 }).map((_, i) => <span key={i} />)}
                </button>
              </li>
              <li className="aside-toggler style-2 aside-trigger-left">
                <button type="button" aria-label="Open mobile menu" onClick={onAsideLeft}>
                  {Array.from({ length: 9 }).map((_, i) => <span key={i} />)}
                </button>
              </li>
            </ul>
          </div>

          <ul className="navbar-nav">
            {KRISHNA_NAV.map((item) => (
              <NavItem key={item.label} item={item} pathname={pathname} onNavigate={() => {}} />
            ))}
          </ul>

          <div className="sigma_logo-wrapper">
            <Link className="navbar-brand" to="/">
              <img width="208" height="60" src={mht('assets/img/logo.webp')} alt="Maharatri" loading="eager" />
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
            <Link className="sigma_btn-custom" to="/donate">Donate Now</Link>
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
