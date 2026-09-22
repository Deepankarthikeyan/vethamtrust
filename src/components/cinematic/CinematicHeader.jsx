import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { SITE, NAV_ITEMS } from '../../config/site';
import { getNavLabel } from '../../config/languages';
import { img } from '../../config/images';
import { useUiLanguage } from '../../hooks/useUiLanguage';
import LazyImage from '../LazyImage';

function isActive(pathname, item) {
  if (item.path === '/') return pathname === '/';
  if (pathname === item.path) return true;
  if (item.children?.some((c) => pathname === c.path)) return true;
  return item.path !== '/' && pathname.startsWith(item.path);
}

export default function CinematicHeader() {
  const { pathname } = useLocation();
  const lang = useUiLanguage();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
    document.body.style.overflow = '';
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
  }, [menuOpen]);

  return (
    <>
      <header className={`vx-header${scrolled ? ' is-scrolled' : ''}`}>
        <div className="vx-container vx-header__inner">
          <Link to="/" className="vx-header__logo" data-cursor="HOME">
            <LazyImage src={img('logo')} alt={SITE.name} loading="eager" />
          </Link>

          <nav aria-label="Primary">
            <ul className="vx-header__nav notranslate">
              {NAV_ITEMS.map((item) => (
                <li key={item.key}>
                  {item.children ? (
                    <>
                      <button type="button">{getNavLabel(item.key, lang)} <i className="fas fa-chevron-down" style={{ fontSize: '0.6rem' }} /></button>
                      <ul className="vx-header__sub">
                        {item.children.map((child) => (
                          <li key={child.key}>
                            <Link to={child.path} className={pathname === child.path ? 'is-active' : ''}>
                              {getNavLabel(child.key, lang)}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </>
                  ) : (
                    <Link to={item.path} className={isActive(pathname, item) ? 'is-active' : ''}>
                      {getNavLabel(item.key, lang)}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </nav>

          <div className="vx-header__actions">
            <Link to="/contact" className="vx-btn vx-btn--ghost notranslate" data-cursor="CONTACT">Contact</Link>
            <Link to="/donate" className="vx-btn vx-btn--primary notranslate" data-cursor="DONATE">Donate</Link>
            <button type="button" className="vx-header__toggle" aria-label="Open menu" onClick={() => setMenuOpen(true)}>
              <i className="fas fa-bars" />
            </button>
          </div>
        </div>
      </header>

      <div className={`vx-mobile-menu${menuOpen ? ' is-open' : ''}`} aria-hidden={!menuOpen}>
        <button type="button" className="vx-mobile-menu__close" aria-label="Close menu" onClick={() => setMenuOpen(false)}>
          <i className="fas fa-times" />
        </button>
        <ul className="vx-mobile-menu__nav notranslate">
          {NAV_ITEMS.flatMap((item) => {
            if (item.children) {
              return [
                <li key={item.key}><span style={{ color: 'var(--vx-gold)', fontSize: '0.9rem' }}>{getNavLabel(item.key, lang)}</span></li>,
                ...item.children.map((child) => (
                  <li key={child.key} className="vx-mobile-menu__sub">
                    <Link to={child.path} onClick={() => setMenuOpen(false)}>{getNavLabel(child.key, lang)}</Link>
                  </li>
                )),
              ];
            }
            return (
              <li key={item.key}>
                <Link to={item.path} onClick={() => setMenuOpen(false)}>{getNavLabel(item.key, lang)}</Link>
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
}
