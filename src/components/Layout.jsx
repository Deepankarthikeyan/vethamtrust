import { useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { useLanguageRetranslate } from '../hooks/useLanguageRetranslate';
import useGsapRefresh from '../hooks/useGsapRefresh';
import useScrollReveal from '../hooks/useScrollReveal';
import CinematicFooter from './cinematic/CinematicFooter';
import CinematicHeader from './cinematic/CinematicHeader';
import CinematicPreloader from './cinematic/CinematicPreloader';
import CustomCursor from './cinematic/CustomCursor';
import ScrollProgress from './cinematic/ScrollProgress';
import FloatingWidgets from './FloatingWidgets';

export default function Layout() {
  const { pathname } = useLocation();
  const isCinematicHome = pathname === '/';
  const isSpiritualVillage = pathname === '/our-village';
  const fullBleedHero = isCinematicHome || isSpiritualVillage;

  useLanguageRetranslate();
  useGsapRefresh();
  useScrollReveal();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  useEffect(() => {
    document.body.classList.remove('krishna-home', 'vetham-inner', 'boxed_wrapper');
    document.body.classList.add('vx-site', fullBleedHero ? 'vx-home' : 'vx-inner');

    const vethamCss = document.getElementById('vetham-custom-css');
    const vethamType = document.getElementById('vetham-typography-css');
    if (vethamCss) vethamCss.disabled = false;
    if (vethamType) vethamType.disabled = false;
  }, [fullBleedHero]);

  return (
    <>
      <Helmet><html lang="en" /></Helmet>
      <a className="skip-link" href="#main-content" style={{ position: 'absolute', left: -9999 }}>Skip to main content</a>
      <CinematicPreloader />
      <ScrollProgress />
      <CustomCursor />
      <CinematicHeader />
      <main id="main-content" className={`vx-main${fullBleedHero ? ' vx-main--home' : ' vx-main--inner'}`}>
        <Outlet />
      </main>
      <CinematicFooter />
      <FloatingWidgets />
    </>
  );
}
