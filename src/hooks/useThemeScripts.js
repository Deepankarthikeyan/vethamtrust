import { useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import { runInitialPreloader } from '../utils/preloader';
import { loadThemeScripts, reinitThemePlugins, setupMobileMenu } from '../utils/themeInit';

export function useThemeScripts() {
  const { pathname } = useLocation();
  const booted = useRef(false);

  useEffect(() => {
    window.scrollTo(0, 0);

    if (!booted.current) {
      booted.current = true;
      runInitialPreloader(async () => {
        await loadThemeScripts();
        setupMobileMenu();
        reinitThemePlugins();
      });
      return;
    }

    let active = true;
    (async () => {
      await loadThemeScripts();
      if (!active) return;
      setupMobileMenu();
      reinitThemePlugins();
    })();

    return () => {
      active = false;
    };
  }, [pathname]);
}
