export const GTRANSLATE_LANGUAGES = ['en', 'fr', 'de', 'hi', 'kn', 'ml', 'pt', 'es', 'ta', 'te'];

export function gtranslateSettings(wrapperSelector) {
  return {
    default_language: 'en',
    languages: GTRANSLATE_LANGUAGES,
    url_structure: 'none',
    native_language_names: 1,
    wrapper_selector: wrapperSelector,
    horizontal_position: 'inline',
    flags_location: 'https://cdn.gtranslate.net/flags/',
  };
}

export function installGTranslateWidget(widgetId, wrapperSelector) {
  window.gtranslateSettings = window.gtranslateSettings || {};
  window.gtranslateSettings[widgetId] = gtranslateSettings(wrapperSelector);

  if (document.querySelector(`script[data-gt-widget-id="${widgetId}"]`)) {
    return;
  }

  const script = document.createElement('script');
  script.src = 'https://cdn.gtranslate.net/widgets/latest/base.js';
  script.setAttribute('data-gt-widget-id', widgetId);
  script.defer = true;
  document.body.appendChild(script);
}
