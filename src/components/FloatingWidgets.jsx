import { useCallback, useEffect, useState } from 'react';
import { img } from '../config/images';
import {
  getCurrentLanguageCode,
  installGTranslate,
  LANGUAGES,
  setLanguage,
} from '../config/languages';

const WHATSAPP_GROUP = 'https://chat.whatsapp.com/EQuPUtcPzEdIZVlT8JyyNw';
const RAZORPAY_URL = 'https://rzp.io/rzp/vethamspiritualtrust';
const UPI_ID = '6515433630@indianbk';

export default function FloatingWidgets() {
  const [activePanel, setActivePanel] = useState(null);
  const [qrFullscreen, setQrFullscreen] = useState(false);
  const [currentLang, setCurrentLang] = useState('en');

  const closeAll = useCallback(() => {
    setActivePanel(null);
    setQrFullscreen(false);
  }, []);

  useEffect(() => {
    installGTranslate().then(() => {
      setCurrentLang(getCurrentLanguageCode());
    });
  }, []);

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === 'Escape') closeAll();
    };
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, [closeAll]);

  const togglePanel = (name) => {
    setActivePanel((prev) => (prev === name ? null : name));
    setQrFullscreen(false);
  };

  const handleLanguageSelect = (code) => {
    setLanguage(code);
    setCurrentLang(code);
    closeAll();
  };

  return (
    <div className="vetham-fab-container" id="vetham-fab-container">
      <a
        href={WHATSAPP_GROUP}
        className="vetham-fab vetham-fab-whatsapp"
        target="_blank"
        rel="noopener noreferrer"
        title="Chat on WhatsApp"
        aria-label="Chat on WhatsApp"
      >
        <i className="fab fa-whatsapp" />
        <span className="vetham-fab-label">WhatsApp</span>
      </a>

      <div className="vetham-fab-right">
        <button
          type="button"
          className={`vetham-fab vetham-fab-language${activePanel === 'language' ? ' active' : ''}`}
          onClick={() => togglePanel('language')}
          title="Change language"
          aria-label="Change language"
        >
          <i className="fas fa-globe" />
          <span className="vetham-fab-label">Language</span>
        </button>
        <button
          type="button"
          className={`vetham-fab vetham-fab-donate${activePanel === 'donate' ? ' active' : ''}`}
          onClick={() => togglePanel('donate')}
          title="Donate us"
          aria-label="Donate us"
        >
          <i className="fas fa-qrcode" />
          <span className="vetham-fab-label">Donate</span>
        </button>
      </div>

      {activePanel && (
        <div
          className="vetham-fab-overlay"
          id="vetham-fab-overlay"
          onClick={closeAll}
          role="presentation"
        />
      )}

      <div
        className={`vetham-fab-panel vetham-fab-panel-language${activePanel === 'language' ? ' is-open' : ''}`}
        id="vetham-panel-language"
        aria-hidden={activePanel !== 'language'}
      >
        <button type="button" className="vetham-fab-panel-close" onClick={closeAll} aria-label="Close">
          &times;
        </button>
        <h4>Choose Language</h4>
        <p className="vetham-fab-panel-sub">Click for language translation</p>
        <ul className="vetham-language-list">
          {LANGUAGES.map((lang) => (
            <li key={lang.code}>
              <button
                type="button"
                className={`vetham-language-option${currentLang === lang.code ? ' is-active' : ''}`}
                onClick={() => handleLanguageSelect(lang.code)}
              >
                {lang.label}
              </button>
            </li>
          ))}
        </ul>
      </div>

      <div
        className={`vetham-fab-panel vetham-fab-panel-donate${activePanel === 'donate' ? ' is-open' : ''}`}
        id="vetham-panel-donate"
        aria-hidden={activePanel !== 'donate'}
      >
        <button type="button" className="vetham-fab-panel-close" onClick={closeAll} aria-label="Close">
          &times;
        </button>
        <h4>Donate us</h4>
        <p className="vetham-fab-panel-sub">Scan QR or pay via Razorpay</p>
        <figure className="vetham-fab-qr">
          <button
            type="button"
            className="vetham-fab-qr-enlarge"
            onClick={() => setQrFullscreen(true)}
            aria-label="Tap to enlarge QR code for scanning"
          >
            <img src={img('qrCode')} alt="Scan to pay Vetham Kuzhumam Trust" />
          </button>
          <figcaption className="vetham-fab-upi">UPI: {UPI_ID}</figcaption>
          <p className="vetham-fab-qr-hint">Tap QR to enlarge for scanning</p>
        </figure>
        <a href={RAZORPAY_URL} className="vetham-fab-razorpay" target="_blank" rel="noopener noreferrer">
          <img src={img('razorpayLogo')} alt="Razorpay" />
          <span>Click Razorpay to donate</span>
        </a>
      </div>

      <div className="vetham-qr-fullscreen" id="vetham-qr-fullscreen" hidden={!qrFullscreen}>
        <button
          type="button"
          className="vetham-qr-fullscreen-close"
          onClick={() => setQrFullscreen(false)}
          aria-label="Close"
        >
          &times;
        </button>
        <img src={img('qrCode')} alt="Scan to pay" />
        <p>UPI: {UPI_ID}</p>
      </div>
    </div>
  );
}
