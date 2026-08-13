import { useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import {
  hidePreloader,
  loadThemeScripts,
  reinitThemePlugins,
  setupMobileMenu,
} from '../utils/themeInit';

export function useThemeScripts() {
  const { pathname } = useLocation();
  const isFirstLoad = useRef(true);

  useEffect(() => {
    hidePreloader();
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
    let active = true;

    (async () => {
      if (isFirstLoad.current) {
        hidePreloader();
      }

      await loadThemeScripts();
      if (!active) return;

      setupMobileMenu();
      reinitThemePlugins();
      hidePreloader();
      isFirstLoad.current = false;
    })();

    return () => {
      active = false;
    };
  }, [pathname]);
}
