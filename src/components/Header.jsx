import { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { SITE, NAV_ITEMS } from '../config/site';
import { getNavLabel } from '../config/languages';
import { img } from '../config/images';
import { useUiLanguage } from '../hooks/useUiLanguage';
import { loadThemeScripts, setupMobileMenu } from '../utils/themeInit';
import LazyImage from './LazyImage';

function isActive(pathname, item) {
  if (item.path === '/') return pathname === '/';
  if (pathname === item.path) return true;
  if (item.children?.some((c) => pathname === c.path || pathname.startsWith(`${c.path}/`))) return true;
  return pathname.startsWith(`${item.path}/`);
}

function navClass(pathname, item) {
  const active = isActive(pathname, item);
  if (item.children) return active ? 'dropdown current' : 'dropdown';
  return active ? 'current' : '';
}

function childClass(pathname, child) {
  return pathname === child.path ? 'current' : '';
}

export default function Header() {
  const { pathname } = useLocation();
  const lang = useUiLanguage();

  useEffect(() => {
    document.body.classList.remove('mobile-menu-visible');
  }, [pathname]);

  useEffect(() => {
    loadThemeScripts().then(() => {
      setupMobileMenu();
    });
  }, [lang, pathname]);

  const closeMobileMenu = () => {
    document.body.classList.remove('mobile-menu-visible');
  };

  const donateButton = (
    <li className="btn-box vetham-header-donate">
      <Link
        to="/donate"
        className={`theme-btn-one vetham-header-donate__btn${pathname === '/donate' ? ' current' : ''}`}
        onClick={closeMobileMenu}
      >
        <span className="vetham-nav-label">{getNavLabel('donate', lang)}</span>
      </Link>
    </li>
  );

  const navigation = (
    <ul className="navigation clearfix notranslate">
      {NAV_ITEMS.map((item) => (
        <li key={item.key} className={navClass(pathname, item)}>
          <Link to={item.path} onClick={closeMobileMenu}>
            <span className="vetham-nav-label">{getNavLabel(item.key, lang)}</span>
          </Link>
          {item.children && (
            <ul>
              {item.children.map((child) => (
                <li key={child.key} className={childClass(pathname, child)}>
                  <Link to={child.path} onClick={closeMobileMenu}>
                    <span className="vetham-nav-label">{getNavLabel(child.key, lang)}</span>
                  </Link>
                </li>
              ))}
            </ul>
          )}
        </li>
      ))}
    </ul>
  );

  return (
    <>
      <header className="main-header header-style-two">
        <div className="header-lower">
          <div className="outer-box">
            <div className="logo-box">
              <figure className="logo">
                <Link to="/"><LazyImage src={img('logo')} alt={SITE.name} loading="eager" /></Link>
              </figure>
            </div>
            <div className="menu-area clearfix">
              <div className="mobile-nav-toggler">
                <i className="icon-bar" />
                <i className="icon-bar" />
                <i className="icon-bar" />
              </div>
              <nav className="main-menu navbar-expand-md navbar-light">
                <div className="collapse navbar-collapse show clearfix" id="navbarSupportedContent">
                  {navigation}
                </div>
              </nav>
            </div>
            <ul className="nav-right notranslate">
              <li className="search-box-outer search-toggler"><i className="icon-1" /></li>
              {donateButton}
            </ul>
          </div>
        </div>

        <div className="sticky-header">
          <div className="outer-container">
            <div className="outer-box">
              <div className="logo-box">
                <figure className="logo">
                  <Link to="/"><LazyImage src={img('logo')} alt={SITE.name} loading="eager" /></Link>
                </figure>
              </div>
              <div className="menu-area clearfix">
                <nav className="main-menu clearfix" />
              </div>
              <ul className="nav-right notranslate">
                <li className="search-box-outer search-toggler"><i className="icon-1" /></li>
                {donateButton}
              </ul>
            </div>
          </div>
        </div>
      </header>

      <div className="mobile-menu">
        <div className="menu-backdrop" />
        <div className="close-btn"><i className="fas fa-times" /></div>
        <nav className="menu-box">
          <div className="nav-logo">
            <Link to="/"><LazyImage src={img('logo')} alt={SITE.name} /></Link>
          </div>
          <div className="menu-outer" />
          <div className="contact-info">
            <h4>Contact Info</h4>
            <ul>
              <li>{SITE.addressShort}</li>
              <li><a href={SITE.phoneHref}>{SITE.phone}</a></li>
              <li><a href={`mailto:${SITE.email}`}>{SITE.email}</a></li>
            </ul>
          </div>
          <div className="social-links">
            <ul className="clearfix">
              <li><a href={SITE.social.facebook} target="_blank" rel="noopener noreferrer"><span className="fab fa-facebook-square" /></a></li>
              <li><a href={SITE.social.instagram} target="_blank" rel="noopener noreferrer"><span className="fab fa-instagram" /></a></li>
              <li><a href={SITE.social.youtube} target="_blank" rel="noopener noreferrer"><span className="fab fa-youtube" /></a></li>
            </ul>
          </div>
        </nav>
      </div>
    </>
  );
}
