import { useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { isInternalAppLink, teardownScrollAnimations } from '../utils/gsapNavigation';
import useBodyPageMode from '../hooks/useBodyPageMode';
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
  const { fullBleed: fullBleedHero } = useBodyPageMode();

  useLanguageRetranslate();
  useGsapRefresh();
  useScrollReveal();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  useEffect(() => {
    const onNavigateIntent = (event) => {
      const target = event.target;
      if (!(target instanceof Element)) return;
      const anchor = target.closest('a[href]');
      if (!anchor || !isInternalAppLink(anchor)) return;
      const next = new URL(anchor.href, window.location.href);
      if (next.pathname === pathname) return;
      teardownScrollAnimations();
    };
    document.addEventListener('pointerdown', onNavigateIntent, true);
    return () => document.removeEventListener('pointerdown', onNavigateIntent, true);
  }, [pathname]);

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
