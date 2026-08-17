import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { getCurrentLanguageCode, reapplyTranslation, stabilizeTranslatedTypography, watchTranslatedTypography } from '../config/languages';

export function useLanguageRetranslate() {
  const { pathname } = useLocation();

  useEffect(() => {
    watchTranslatedTypography();
  }, []);

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
