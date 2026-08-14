import { useEffect } from 'react';
import { installGTranslateWidget } from '../config/gtranslate';

export function useGTranslate(widgetId, wrapperSelector) {
  useEffect(() => {
    installGTranslateWidget(widgetId, wrapperSelector);
  }, [widgetId, wrapperSelector]);
}
