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

  return (
    <div className={`vx-preloader${hidden ? ' is-hidden' : ''}`} aria-hidden={hidden}>
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
