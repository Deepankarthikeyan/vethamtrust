export const LANGUAGES = [
  { code: 'en', label: 'English' },
  { code: 'fr', label: 'Français' },
  { code: 'de', label: 'Deutsch' },
  { code: 'hi', label: 'हिन्दी' },
  { code: 'kn', label: 'ಕನ್ನಡ' },
  { code: 'ml', label: 'മലയാളം' },
  { code: 'pt', label: 'Português' },
  { code: 'es', label: 'Español' },
  { code: 'ta', label: 'தமிழ்' },
  { code: 'te', label: 'తెలుగు' },
];

const TRANSLATE_READY_TIMEOUT_MS = 10000;
const TRANSLATE_APPLY_DELAY_MS = 350;
const TYPOGRAPHY_STABILIZE_DEBOUNCE_MS = 120;

let typographyObserverStarted = false;
let typographyStabilizeTimer = null;

function scheduleTypographyStabilize() {
  if (typeof document === 'undefined') return;
  clearTimeout(typographyStabilizeTimer);
  typographyStabilizeTimer = setTimeout(() => {
    stabilizeTranslatedTypography();
  }, TYPOGRAPHY_STABILIZE_DEBOUNCE_MS);
}

export function watchTranslatedTypography() {
  if (typeof document === 'undefined' || typographyObserverStarted) return;
  typographyObserverStarted = true;

  const observer = new MutationObserver((mutations) => {
    const shouldStabilize = mutations.some((mutation) => {
      if (mutation.type === 'attributes') {
        return mutation.attributeName === 'style' || mutation.attributeName === 'size';
      }
      return mutation.type === 'childList';
    });

    if (shouldStabilize) {
      scheduleTypographyStabilize();
    }
  });

  observer.observe(document.documentElement, {
    childList: true,
    subtree: true,
    attributes: true,
    attributeFilter: ['style', 'size', 'class'],
  });

  scheduleTypographyStabilize();
}

export function getCurrentLanguageCode() {
  if (typeof document === 'undefined') return 'en';

  const cookie = document.cookie
    .split(';')
    .map((part) => part.trim())
    .find((part) => part.startsWith('googtrans='));

  if (!cookie) return 'en';

  const value = decodeURIComponent(cookie.split('=').slice(1).join('='));
  const parts = value.split('/').filter(Boolean);
  const lang = parts[parts.length - 1];
  return lang && lang !== 'auto' ? lang : 'en';
}

export function syncUiLanguageAttribute(lang = getCurrentLanguageCode()) {
  if (typeof document === 'undefined') return;
  document.documentElement.dataset.uiLang = lang;
}

function writeGoogTransCookie(value) {
  const expires = value
    ? `;expires=${new Date(Date.now() + 365 * 864e5).toUTCString()}`
    : ';expires=Thu, 01 Jan 1970 00:00:00 GMT';

  document.cookie = `googtrans=${value}${expires};path=/`;

  const host = window.location.hostname;
  if (host && host !== 'localhost' && !/^\d+\.\d+\.\d+\.\d+$/.test(host)) {
    const rootDomain = host.replace(/^www\./, '');
    document.cookie = `googtrans=${value}${expires};path=/;domain=.${rootDomain}`;
    document.cookie = `googtrans=${value}${expires};path=/;domain=${host}`;
  }
}

function wait(ms) {
  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
}

function waitForDoGTranslate() {
  return new Promise((resolve) => {
    const started = Date.now();
    const check = () => {
      if (typeof window.doGTranslate === 'function') {
        resolve();
        return;
      }
      if (Date.now() - started > TRANSLATE_READY_TIMEOUT_MS) {
        resolve();
        return;
      }
      setTimeout(check, 50);
    };
    check();
  });
}

function isTranslateComboReady() {
  const combo = document.querySelector('select.goog-te-combo');
  return Boolean(combo && combo.options.length > 0);
}

function preloadTranslateEngine() {
  if (isTranslateComboReady()) {
    return Promise.resolve();
  }

  if (!window.gt_translate_script && typeof window.googleTranslateElementInit2 === 'function') {
    window.gt_translate_script = document.createElement('script');
    window.gt_translate_script.src = 'https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit2';
    document.body.appendChild(window.gt_translate_script);
  }

  return new Promise((resolve) => {
    const started = Date.now();
    const check = () => {
      if (isTranslateComboReady()) {
        resolve();
        return;
      }
      if (Date.now() - started > TRANSLATE_READY_TIMEOUT_MS) {
        resolve();
        return;
      }
      setTimeout(check, 100);
    };
    check();
  });
}

function applyTranslation(lang) {
  const pair = lang === 'en' ? 'en|en' : `en|${lang}`;

  const run = () => {
    if (typeof window.doGTranslate !== 'function') return Promise.resolve();
    window.doGTranslate(pair);
    preserveLanguageLabels();
    return wait(TRANSLATE_APPLY_DELAY_MS);
  };

  return waitForDoGTranslate()
    .then(() => preloadTranslateEngine())
    .then(run)
    .then(() => wait(450))
    .then(run)
    .then(() => {
      preserveLanguageLabels();
      stabilizeTranslatedTypography();
    });
}

function restoreEnglish() {
  return waitForDoGTranslate()
    .then(() => preloadTranslateEngine())
    .then(() => {
      if (typeof window.doGTranslate === 'function' && getCurrentLanguageCode() !== 'en') {
        window.doGTranslate('en|en');
      }
      writeGoogTransCookie('');
      document.documentElement.classList.remove('translated-ltr', 'translated-rtl');
      document.documentElement.lang = 'en';
      preserveLanguageLabels();
      syncUiLanguageAttribute('en');
      return wait(TRANSLATE_APPLY_DELAY_MS);
    })
    .then(() => {
      preserveLanguageLabels();
      stabilizeTranslatedTypography();
    });
}

export function preserveLanguageLabels() {
  if (typeof document === 'undefined') return;

  LANGUAGES.forEach(({ code, label }) => {
    const labelNode = document.querySelector(`[data-lang="${code}"] .vetham-language-label`);
    if (labelNode && labelNode.textContent !== label) {
      labelNode.textContent = label;
    }
  });
}

export function stabilizeTranslatedTypography() {
  if (typeof document === 'undefined') return;

  document.querySelectorAll('font').forEach((node) => {
    node.removeAttribute('size');
    node.removeAttribute('face');
    node.style.removeProperty('font-size');
    node.style.removeProperty('font-family');
    node.style.removeProperty('line-height');
  });

  document.querySelectorAll('[style*="font-size"]').forEach((node) => {
    if (node.closest('.goog-te-banner-frame, .goog-te-menu-frame, .skiptranslate, .notranslate')) return;
    if (node.tagName === 'FONT') return;
    const inlineSize = node.style.fontSize;
    if (inlineSize && inlineSize !== 'inherit') {
      node.style.removeProperty('font-size');
    }
  });

  document.querySelectorAll('[style*="font-family"]').forEach((node) => {
    if (node.closest('.goog-te-banner-frame, .goog-te-menu-frame, .skiptranslate, .notranslate')) return;
    if (node.classList.contains('fa') || node.classList.contains('fab') || node.classList.contains('fas')) return;
    node.style.removeProperty('font-family');
  });
}

export function setLanguage(code) {
  const lang = LANGUAGES.some((item) => item.code === code) ? code : 'en';

  if (lang === 'en') {
    return restoreEnglish().then(() => {
      syncUiLanguageAttribute('en');
    });
  }

  syncUiLanguageAttribute(lang);
  writeGoogTransCookie(`/en/${lang}`);
  return applyTranslation(lang).then(() => {
    syncUiLanguageAttribute(lang);
  });
}

export function reapplyTranslation() {
  return applyTranslation(getCurrentLanguageCode());
}

export function installGTranslate() {
  window.gtranslateSettings = window.gtranslateSettings || {};
  window.gtranslateSettings.vetham = {
    default_language: 'en',
    languages: LANGUAGES.map((item) => item.code),
    url_structure: 'none',
    native_language_names: 1,
    wrapper_selector: '#gt-wrapper-vetham',
    horizontal_position: 'inline',
    flags_location: 'https://cdn.gtranslate.net/flags/',
  };

  const existingScript = document.querySelector('script[data-gt-widget-id="vetham"]');
  const scriptReady = existingScript
    ? waitForDoGTranslate()
    : new Promise((resolve) => {
        const script = document.createElement('script');
        script.src = 'https://cdn.gtranslate.net/widgets/latest/base.js';
        script.setAttribute('data-gt-widget-id', 'vetham');
        script.defer = true;
        script.onload = () => resolve();
        script.onerror = () => resolve();
        document.body.appendChild(script);
      }).then(() => waitForDoGTranslate());

  return scriptReady
    .then(() => preloadTranslateEngine())
    .then(() => {
      watchTranslatedTypography();
      const lang = getCurrentLanguageCode();
      syncUiLanguageAttribute(lang);
      if (lang !== 'en') {
        return applyTranslation(lang);
      }
      return undefined;
    });
}
