import { useEffect, useState } from 'react';
import { img } from '../config/images';
import { SITE } from '../config/site';

export default function Preloader() {
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    const hide = () => setHidden(true);
    if (document.readyState === 'complete') hide();
    else {
      window.addEventListener('load', hide);
      return () => window.removeEventListener('load', hide);
    }
    return undefined;
  }, []);

  if (hidden) return null;

  return (
    <div className="sigma_preloader">
      <img src={img('logo')} alt={SITE.name} className="vetham-preloader__logo" width={100} height={100} />
    </div>
  );
}
