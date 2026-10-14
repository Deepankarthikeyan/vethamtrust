import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { SITE, NAV_ITEMS } from '../../config/site';
import { getNavLabel } from '../../config/languages';
import { img } from '../../config/images';
import { useUiLanguage } from '../../hooks/useUiLanguage';
import LazyImage from '../LazyImage';
import { prefetchRoute } from '../../utils/prefetchRoutes';

function prefetchFromPath(path) {
  prefetchRoute(path);
  if (path.startsWith('/services')) prefetchRoute('/services');
}

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
  const [mobileDropdown, setMobileDropdown] = useState(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, [pathname]);

  useEffect(() => {
    setMenuOpen(false);
    setMobileDropdown(null);
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
                            <Link
                              to={child.path}
                              className={pathname === child.path ? 'is-active' : ''}
                              onMouseEnter={() => prefetchFromPath(child.path)}
                              onFocus={() => prefetchFromPath(child.path)}
                            >
                              {getNavLabel(child.key, lang)}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </>
                  ) : (
                    <Link
                      to={item.path}
                      className={isActive(pathname, item) ? 'is-active' : ''}
                      onMouseEnter={() => prefetchFromPath(item.path)}
                      onFocus={() => prefetchFromPath(item.path)}
                    >
                      {getNavLabel(item.key, lang)}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </nav>

          <div className="vx-header__actions">
            <Link to="/contact" className="vx-btn vx-btn--ghost notranslate" data-cursor="CONTACT" onMouseEnter={() => prefetchRoute('/contact')} onFocus={() => prefetchRoute('/contact')}>Contact</Link>
            <Link to="/donate" className="vx-btn vx-btn--primary notranslate" data-cursor="DONATE" onMouseEnter={() => prefetchRoute('/donate')} onFocus={() => prefetchRoute('/donate')}>Donate</Link>
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
          {NAV_ITEMS.map((item) => {
            if (item.children) {
              const isOpen = mobileDropdown === item.key;
              return (
                <li key={item.key} className="vx-mobile-menu__item vx-mobile-menu__item--dropdown">
                  <button
                    type="button"
                    className="vx-mobile-menu__trigger"
                    aria-expanded={isOpen}
                    onClick={() => setMobileDropdown(isOpen ? null : item.key)}
                  >
                    <span>{getNavLabel(item.key, lang)}</span>
                    <i className={`fas fa-chevron-down vx-mobile-menu__chevron${isOpen ? ' is-open' : ''}`} aria-hidden="true" />
                  </button>
                  <ul className={`vx-mobile-menu__sublist${isOpen ? ' is-open' : ''}`}>
                    {item.children.map((child) => (
                      <li key={child.key}>
                        <Link
                          to={child.path}
                          onClick={() => setMenuOpen(false)}
                          onMouseEnter={() => prefetchFromPath(child.path)}
                          onFocus={() => prefetchFromPath(child.path)}
                        >
                          {getNavLabel(child.key, lang)}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </li>
              );
            }
            return (
              <li key={item.key} className="vx-mobile-menu__item">
                <Link
                  to={item.path}
                  className="vx-mobile-menu__link"
                  onClick={() => setMenuOpen(false)}
                  onMouseEnter={() => prefetchFromPath(item.path)}
                  onFocus={() => prefetchFromPath(item.path)}
                >
                  {getNavLabel(item.key, lang)}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
}
