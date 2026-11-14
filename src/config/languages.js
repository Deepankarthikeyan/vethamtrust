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

export const UI_LANGUAGE_CHANGE_EVENT = 'vetham:languagechange';

export const NAV_LABELS = {
  en: {
    home: 'Home',
    about: 'About Us',
    village: 'Our Village',
    courses: 'Courses',
    events: 'Events',
    social: 'Social Media',
    contact: 'Contact',
    blog: 'Blog',
    services: 'Services',
    donate: 'Donate',
  },
  ta: {
    home: 'வீடு',
    about: 'எங்களைப் பற்றி',
    village: 'எங்கள் கிராமம்',
    courses: 'படிப்புகள்',
    events: 'நிகழ்வுகள்',
    social: 'சமூக ஊடகங்கள்',
    contact: 'தொடர்பு',
    blog: 'வலைப்பதிவு',
    services: 'சேவைகள்',
    donate: 'நன்கொடை',
  },
  fr: {
    home: 'Accueil',
    about: 'À propos',
    village: 'Notre village',
    courses: 'Cours',
    events: 'Événements',
    social: 'Réseaux sociaux',
    contact: 'Contact',
    blog: 'Blog',
    services: 'Services',
    donate: 'Faire un don',
  },
  de: {
    home: 'Startseite',
    about: 'Über uns',
    village: 'Unser Dorf',
    courses: 'Kurse',
    events: 'Veranstaltungen',
    social: 'Soziale Medien',
    contact: 'Kontakt',
    blog: 'Blog',
    services: 'Dienstleistungen',
    donate: 'Spenden',
  },
  hi: {
    home: 'होम',
    about: 'हमारे बारे में',
    village: 'हमारा गाँव',
    courses: 'पाठ्यक्रम',
    events: 'कार्यक्रम',
    social: 'सोशल मीडिया',
    contact: 'संपर्क',
    blog: 'ब्लॉग',
    services: 'सेवाएँ',
    donate: 'दान करें',
  },
  kn: {
    home: 'ಮುಖಪುಟ',
    about: 'ನಮ್ಮ ಬಗ್ಗೆ',
    village: 'ನಮ್ಮ ಗ್ರಾಮ',
    courses: 'ಪಾಠ್ಯಕ್ರಮಗಳು',
    events: 'ಕಾರ್ಯಕ್ರಮಗಳು',
    social: 'ಸಾಮಾಜಿಕ ಮಾಧ್ಯಮ',
    contact: 'ಸಂಪರ್ಕ',
    blog: 'ಬ್ಲಾಗ್',
    services: 'ಸೇವೆಗಳು',
    donate: 'ದಾನ',
  },
  ml: {
    home: 'ഹോം',
    about: 'ഞങ്ങളെക്കുറിച്ച്',
    village: 'ഞങ്ങളുടെ ഗ്രാമം',
    courses: 'കോഴ്സുകൾ',
    events: 'പരിപാടികൾ',
    social: 'സോഷ്യൽ മീഡിയ',
    contact: 'ബന്ധപ്പെടുക',
    blog: 'ബ്ലോഗ്',
    services: 'സേവനങ്ങൾ',
    donate: 'ദാനം',
  },
  pt: {
    home: 'Início',
    about: 'Sobre nós',
    village: 'Nossa aldeia',
    courses: 'Cursos',
    events: 'Eventos',
    social: 'Redes sociais',
    contact: 'Contato',
    blog: 'Blog',
    services: 'Serviços',
    donate: 'Doar',
  },
  es: {
    home: 'Inicio',
    about: 'Sobre nosotros',
    village: 'Nuestra aldea',
    courses: 'Cursos',
    events: 'Eventos',
    social: 'Redes sociales',
    contact: 'Contacto',
    blog: 'Blog',
    services: 'Servicios',
    donate: 'Donar',
  },
  te: {
    home: 'హోమ్',
    about: 'మా గురించి',
    village: 'మా గ్రామం',
    courses: 'కోర్సులు',
    events: 'కార్యక్రమాలు',
    social: 'సోషల్ మీడియా',
    contact: 'సంప్రదించండి',
    blog: 'బ్లాగ్',
    services: 'సేవలు',
    donate: 'దానం',
  },
};

export function getNavLabel(key, lang = getCurrentLanguageCode()) {
  const localized = NAV_LABELS[lang]?.[key];
  if (localized) return localized;
  return NAV_LABELS.en[key] || key;
}

function notifyLanguageChange(lang) {
  if (typeof window === 'undefined') return;
  window.dispatchEvent(new CustomEvent(UI_LANGUAGE_CHANGE_EVENT, { detail: { lang } }));
}

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
      notifyLanguageChange('en');
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
    node.style.setProperty('display', 'inline', 'important');
    node.style.setProperty('white-space', 'inherit', 'important');
  });

  document.querySelectorAll('.main-menu .navigation > li > a, .mobile-menu .navigation li > a').forEach((link) => {
    link.style.removeProperty('display');
    link.querySelectorAll('font, span').forEach((child) => {
      child.style.setProperty('display', 'inline', 'important');
    });
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
      notifyLanguageChange('en');
    });
  }

  syncUiLanguageAttribute(lang);
  notifyLanguageChange(lang);
  writeGoogTransCookie(`/en/${lang}`);
  return applyTranslation(lang).then(() => {
    syncUiLanguageAttribute(lang);
    notifyLanguageChange(lang);
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
      notifyLanguageChange(lang);
      if (lang !== 'en') {
        return applyTranslation(lang);
      }
      return undefined;
    });
}
