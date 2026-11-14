import { useEffect, useState } from 'react';
import { getCurrentLanguageCode, UI_LANGUAGE_CHANGE_EVENT } from '../config/languages';

export function useUiLanguage() {
  const [lang, setLang] = useState(() => getCurrentLanguageCode());

  useEffect(() => {
    const onChange = (event) => {
      setLang(event.detail?.lang || getCurrentLanguageCode());
    };

    window.addEventListener(UI_LANGUAGE_CHANGE_EVENT, onChange);
    return () => window.removeEventListener(UI_LANGUAGE_CHANGE_EVENT, onChange);
  }, []);

  return lang;
}
