import { useEffect, useState } from 'react';
import { img } from '../../config/images';
import { SITE } from '../../config/site';

const PRELOADER_KEY = 'vx-preloader-seen';

export default function CinematicPreloader() {
  const [hidden, setHidden] = useState(() => {
    try {
      return sessionStorage.getItem(PRELOADER_KEY) === '1';
    } catch {
      return false;
    }
  });

  useEffect(() => {
    if (hidden) {
      window.dispatchEvent(new CustomEvent('vx:app-ready'));
      return undefined;
    }

    const finish = () => {
      try {
        sessionStorage.setItem(PRELOADER_KEY, '1');
      } catch {
        /* ignore */
      }
      setHidden(true);
      window.setTimeout(() => {
        window.dispatchEvent(new CustomEvent('vx:app-ready'));
      }, 40);
    };

    const delayMs = 120;
    if (document.readyState === 'complete') {
      window.setTimeout(finish, delayMs);
    } else {
      const onLoad = () => window.setTimeout(finish, delayMs);
      window.addEventListener('load', onLoad, { once: true });
      return () => window.removeEventListener('load', onLoad);
    }
    return undefined;
  }, [hidden]);

  if (hidden) return null;

  return (
    <div className="vx-preloader" aria-hidden={false}>
      <div className="vx-preloader__brand">
        <img
          className="vx-preloader__logo"
          src={img('logo')}
          alt={SITE.name}
          decoding="async"
        />
      </div>
    </div>
  );
}
