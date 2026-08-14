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
      return wait(TRANSLATE_APPLY_DELAY_MS);
    })
    .then(() => {
      preserveLanguageLabels();
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

export function setLanguage(code) {
  const lang = LANGUAGES.some((item) => item.code === code) ? code : 'en';

  if (lang === 'en') {
    return restoreEnglish();
  }

  writeGoogTransCookie(`/en/${lang}`);
  return applyTranslation(lang);
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
      const lang = getCurrentLanguageCode();
      if (lang !== 'en') {
        return applyTranslation(lang);
      }
      return undefined;
    });
}
