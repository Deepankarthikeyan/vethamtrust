import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { NAV_ITEMS, SITE } from '../config/site';
import { asset } from '../utils/assets';

function NavLink({ item, onNavigate }) {
  const { pathname } = useLocation();

  if (item.children) {
    return (
      <li className="menu-item menu-item-has-children">
        <a href="#">{item.label}</a>
        <ul className="sub-menu">
          {item.children.map((child) => (
            <li key={child.label} className="menu-item">
              <Link to={child.path} onClick={onNavigate}>{child.label}</Link>
            </li>
          ))}
        </ul>
      </li>
    );
  }

  const isHash = item.path?.startsWith('/#');
  const isActive = !isHash && item.path && (pathname === item.path || pathname.startsWith(`${item.path}/`));

  return (
    <li className={`menu-item${isActive ? ' current' : ''}`}>
      {isHash ? (
        <a href={item.path} onClick={onNavigate}>{item.label}</a>
      ) : (
        <Link to={item.path || '/'} onClick={onNavigate}>{item.label}</Link>
      )}
    </li>
  );
}

export default function Header({ onSearchOpen, onAsideRight, onAsideLeft }) {
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

          <ul className="navbar-nav">
            {NAV_ITEMS.map((item) => (
              <NavLink key={item.label} item={item} onNavigate={closeAside} />
            ))}
          </ul>

          <div className="sigma_logo-wrapper">
            <Link className="navbar-brand" to="/">
              <img width="208" height="60" src={asset('assets/img/logo.webp')} alt="logo" loading="lazy" />
            </Link>
          </div>

          <div className="sigma_header-controls sigma_header-button">
            <a href={`tel:${SITE.phone.replace(/-/g, '')}`} className="sigma_header-contact">
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
