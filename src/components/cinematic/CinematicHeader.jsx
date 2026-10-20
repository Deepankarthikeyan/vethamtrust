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
  const isHomeHero = pathname === '/';
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [mobileDropdown, setMobileDropdown] = useState(null);
  const solidHeader = !isHomeHero || scrolled;

  useEffect(() => {
    if (!isHomeHero) {
      setScrolled(false);
      return undefined;
    }
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, [pathname, isHomeHero]);

  useEffect(() => {
    setMenuOpen(false);
    setMobileDropdown(null);
    document.body.style.overflow = '';
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    document.body.classList.toggle('vx-mobile-nav-open', menuOpen);
    return () => document.body.classList.remove('vx-mobile-nav-open');
  }, [menuOpen]);

  return (
    <>
      <header className={`vx-header${solidHeader ? ' is-scrolled' : ''}`}>
        <div className="vx-container vx-header__inner">
          <Link to="/" className="vx-header__logo" data-cursor="HOME">
            <LazyImage
              src={img('logo')}
              alt=""
              loading="eager"
              className="vx-header__logo-img vx-header__logo-img--dark"
              aria-hidden="true"
            />
            <LazyImage
              src={img('logoOnDark')}
              alt=""
              loading="eager"
              className="vx-header__logo-img vx-header__logo-img--light"
              aria-hidden="true"
            />
            <span className="vx-header__logo-sr">{SITE.name}</span>
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

      <div
        className={`vx-mobile-menu${menuOpen ? ' is-open' : ''}`}
        aria-hidden={!menuOpen}
      >
        <button
          type="button"
          className="vx-mobile-menu__backdrop"
          aria-label="Close menu"
          tabIndex={menuOpen ? 0 : -1}
          onClick={() => setMenuOpen(false)}
        />
        <div className="vx-mobile-menu__panel" role="dialog" aria-modal="true" aria-label="Site navigation">
          <div className="vx-mobile-menu__glow" aria-hidden="true" />
          <button
            type="button"
            className="vx-mobile-menu__close"
            aria-label="Close menu"
            onClick={() => setMenuOpen(false)}
          >
            <i className="fas fa-times" />
          </button>
          <div className="vx-mobile-menu__scroll">
            <ul className="vx-mobile-menu__nav notranslate">
              {NAV_ITEMS.map((item, index) => {
                if (item.children) {
                  const isOpen = mobileDropdown === item.key;
                  return (
                    <li
                      key={item.key}
                      className={`vx-mobile-menu__item vx-mobile-menu__item--dropdown${isOpen ? ' is-expanded' : ''}`}
                      style={{ '--vx-nav-i': index }}
                    >
                      <button
                        type="button"
                        className="vx-mobile-menu__trigger"
                        aria-expanded={isOpen}
                        onClick={() => setMobileDropdown(isOpen ? null : item.key)}
                      >
                        <span className="vx-mobile-menu__label">{getNavLabel(item.key, lang)}</span>
                        <span className="vx-mobile-menu__chevron-wrap" aria-hidden="true">
                          <i className={`fas fa-chevron-down vx-mobile-menu__chevron${isOpen ? ' is-open' : ''}`} />
                        </span>
                      </button>
                      <div className={`vx-mobile-menu__sublist${isOpen ? ' is-open' : ''}`}>
                        <ul className="vx-mobile-menu__sublist-inner">
                          {item.children.map((child) => (
                            <li key={child.key}>
                              <Link
                                to={child.path}
                                className={`vx-mobile-menu__sublink${pathname === child.path ? ' is-active' : ''}`}
                                onClick={() => setMenuOpen(false)}
                                onMouseEnter={() => prefetchFromPath(child.path)}
                                onFocus={() => prefetchFromPath(child.path)}
                              >
                                {getNavLabel(child.key, lang)}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </li>
                  );
                }
                return (
                  <li key={item.key} className="vx-mobile-menu__item" style={{ '--vx-nav-i': index }}>
                    <Link
                      to={item.path}
                      className={`vx-mobile-menu__link${isActive(pathname, item) ? ' is-active' : ''}`}
                      onClick={() => setMenuOpen(false)}
                      onMouseEnter={() => prefetchFromPath(item.path)}
                      onFocus={() => prefetchFromPath(item.path)}
                    >
                      <span className="vx-mobile-menu__label">{getNavLabel(item.key, lang)}</span>
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
          <div className="vx-mobile-menu__footer">
            <Link to="/contact" className="vx-mobile-menu__chip" onClick={() => setMenuOpen(false)}>
              Contact
            </Link>
            <Link to="/donate" className="vx-mobile-menu__chip vx-mobile-menu__chip--primary" onClick={() => setMenuOpen(false)}>
              Donate
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
