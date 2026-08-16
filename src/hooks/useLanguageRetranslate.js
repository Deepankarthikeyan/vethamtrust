import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { getCurrentLanguageCode, reapplyTranslation, stabilizeTranslatedTypography } from '../config/languages';

export function useLanguageRetranslate() {
  const { pathname } = useLocation();

  useEffect(() => {
    if (getCurrentLanguageCode() === 'en') return undefined;

    const timer = setTimeout(() => {
      reapplyTranslation().then(() => {
        stabilizeTranslatedTypography();
      });
    }, 400);

    return () => clearTimeout(timer);
  }, [pathname]);
}
