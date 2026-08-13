import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { loadThemeScripts, reinitThemePlugins, setupMobileMenu } from '../utils/themeInit';

export function useThemeScripts() {
  const { pathname } = useLocation();

  useEffect(() => {
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
