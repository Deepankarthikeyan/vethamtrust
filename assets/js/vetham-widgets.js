(function () {
  if (window.__vethamGtranslateInit) return;
  window.__vethamGtranslateInit = true;

  window.gtranslateSettings = window.gtranslateSettings || {};
  window.gtranslateSettings['vetham'] = {
    default_language: 'en',
    languages: ['en', 'fr', 'de', 'hi', 'kn', 'ml', 'pt', 'es', 'ta', 'te'],
    url_structure: 'none',
    native_language_names: 1,
    wrapper_selector: '#gt-wrapper-vetham',
    horizontal_position: 'inline',
    flags_location: 'https://cdn.gtranslate.net/flags/'
  };

  if (!document.querySelector('script[data-vetham-gtranslate]')) {
    var gtScript = document.createElement('script');
    gtScript.src = 'https://cdn.gtranslate.net/widgets/latest/ln.js';
    gtScript.defer = true;
    gtScript.setAttribute('data-vetham-gtranslate', '1');
    document.body.appendChild(gtScript);
  }
})();
