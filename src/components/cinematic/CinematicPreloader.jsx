import { useEffect, useState } from 'react';
import { img } from '../../config/images';
import { SITE } from '../../config/site';

export default function CinematicPreloader() {
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    const finish = () => {
      setHidden(true);
      window.setTimeout(() => {
        window.dispatchEvent(new CustomEvent('vx:app-ready'));
      }, 80);
    };
    if (document.readyState === 'complete') {
      window.setTimeout(finish, 380);
    } else {
      const onLoad = () => window.setTimeout(finish, 380);
      window.addEventListener('load', onLoad, { once: true });
      return () => window.removeEventListener('load', onLoad);
    }
    return undefined;
  }, []);

  const logoPng = img('logoFooterPng');
  const logoWebp = img('logoFooterWebp');

  return (
    <div className={`vx-preloader${hidden ? ' is-hidden' : ''}`} aria-hidden={hidden}>
      <div className="vx-preloader__brand">
        <picture>
          <source srcSet={logoWebp} type="image/webp" />
          <img src={logoPng} alt={SITE.name} width={1024} height={460} decoding="async" />
        </picture>
      </div>
    </div>
  );
}
