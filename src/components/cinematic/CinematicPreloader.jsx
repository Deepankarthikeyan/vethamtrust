import { useEffect, useState } from 'react';
import { img } from '../../config/images';
import { SITE } from '../../config/site';

export default function CinematicPreloader() {
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    const hide = () => setHidden(true);
    if (document.readyState === 'complete') {
      setTimeout(hide, 400);
    } else {
      window.addEventListener('load', () => setTimeout(hide, 400));
      return () => window.removeEventListener('load', hide);
    }
    return undefined;
  }, []);

  return (
    <div className={`vx-preloader${hidden ? ' is-hidden' : ''}`} aria-hidden={hidden}>
      <img src={img('logo')} alt={SITE.name} />
    </div>
  );
}
