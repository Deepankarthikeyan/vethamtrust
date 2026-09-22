import { useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { useLanguageRetranslate } from '../hooks/useLanguageRetranslate';
import useGsapRefresh from '../hooks/useGsapRefresh';
import CinematicFooter from './cinematic/CinematicFooter';
import CinematicHeader from './cinematic/CinematicHeader';
import CinematicPreloader from './cinematic/CinematicPreloader';
import CustomCursor from './cinematic/CustomCursor';
import ScrollProgress from './cinematic/ScrollProgress';
import FloatingWidgets from './FloatingWidgets';
import DonatePopup from './DonatePopup';

export default function Layout() {
  const { pathname } = useLocation();
  const isHome = pathname === '/';

  useLanguageRetranslate();
  useGsapRefresh();

  useEffect(() => {
    document.body.classList.remove('krishna-home', 'vetham-inner', 'boxed_wrapper');
    document.body.classList.add('vx-site', isHome ? 'vx-home' : 'vx-inner');

    const vethamCss = document.getElementById('vetham-custom-css');
    const vethamType = document.getElementById('vetham-typography-css');
    if (vethamCss) vethamCss.disabled = isHome;
    if (vethamType) vethamType.disabled = false;
  }, [isHome]);

  return (
    <>
      <Helmet><html lang="en" /></Helmet>
      <a className="skip-link" href="#main-content" style={{ position: 'absolute', left: -9999 }}>Skip to main content</a>
      <CinematicPreloader />
      <DonatePopup />
      <ScrollProgress />
      <CustomCursor />
      <CinematicHeader />
      <main id="main-content" className={`vx-main${isHome ? '' : ' vx-main--inner'}`}>
        <Outlet />
      </main>
      <CinematicFooter />
      {!isHome && <FloatingWidgets />}
    </>
  );
}
