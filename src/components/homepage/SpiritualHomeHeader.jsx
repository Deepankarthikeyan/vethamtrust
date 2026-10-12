import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { HOME_NAV, HOME_BRAND } from '../../config/spiritualHome';
import LazyImage from '../LazyImage';

function NavLink({ item, onNavigate }) {
  const { pathname } = useLocation();
  const isHome = pathname === '/';

  if (item.hash) {
    const href = isHome ? item.hash : `/${item.hash}`;
    return (
      <a href={href} onClick={onNavigate}>
        {item.label}
      </a>
    );
  }

  return (
    <Link to={item.path} onClick={onNavigate}>
      {item.label}
    </Link>
  );
}

export default function SpiritualHomeHeader() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
  }, [menuOpen]);

  const closeMenu = () => setMenuOpen(false);

  return (
    <>
      <header className={`sh-header${scrolled ? ' is-scrolled' : ''}`}>
        <div className="sh-container sh-header__inner">
          <Link to="/" className="sh-header__brand" onClick={closeMenu}>
            <LazyImage src={HOME_BRAND.logo} alt="" width={48} height={48} loading="eager" />
            <span className="sh-header__brand-text">
              <span className="sh-header__brand-title">{HOME_BRAND.title}</span>
              <span className="sh-header__brand-sub">{HOME_BRAND.subtitle}</span>
            </span>
          </Link>

          <nav className="sh-header__nav" aria-label="Homepage">
            <ul>
              {HOME_NAV.map((item) => (
                <li key={item.label}>
                  <NavLink item={item} onNavigate={closeMenu} />
                </li>
              ))}
            </ul>
          </nav>

          <div className="sh-header__actions">
            <Link to="/contact" className="sh-btn sh-btn--primary sh-btn--sm">
              Enquire Now
            </Link>
            <button
              type="button"
              className="sh-header__toggle"
              aria-label={menuOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={menuOpen}
              onClick={() => setMenuOpen((o) => !o)}
            >
              <i className={menuOpen ? 'fas fa-times' : 'fas fa-bars'} aria-hidden="true" />
            </button>
          </div>
        </div>
      </header>

      <div className={`sh-mobile-nav${menuOpen ? ' is-open' : ''}`} aria-hidden={!menuOpen}>
        <ul>
          {HOME_NAV.map((item) => (
            <li key={item.label}>
              <NavLink item={item} onNavigate={closeMenu} />
            </li>
          ))}
          <li>
            <Link to="/contact" className="sh-btn sh-btn--primary" onClick={closeMenu}>
              Enquire Now
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
}
