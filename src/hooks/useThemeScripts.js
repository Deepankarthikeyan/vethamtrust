import { useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import { runInitialPreloader } from '../utils/preloader';
import { loadThemeScripts, reinitThemePlugins, setupMobileMenu } from '../utils/themeInit';

function schedulePluginInit() {
  setupMobileMenu();
  reinitThemePlugins();
  requestAnimationFrame(() => reinitThemePlugins());
  window.setTimeout(reinitThemePlugins, 150);
  window.setTimeout(reinitThemePlugins, 600);
}

export function useThemeScripts() {
  const { pathname } = useLocation();
  const booted = useRef(false);

  useEffect(() => {
    window.scrollTo(0, 0);

    if (!booted.current) {
      booted.current = true;
      runInitialPreloader(async () => {
        await loadThemeScripts();
        schedulePluginInit();
      });
      return;
    }

    let active = true;
    (async () => {
      await loadThemeScripts();
      if (!active) return;
      schedulePluginInit();
    })();

    return () => {
      active = false;
    };
  }, [pathname]);
}
