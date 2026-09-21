import { useEffect, useState } from 'react';
import { img } from '../config/images';

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
      <img width="120" height="120" src={img('logo')} alt="Loading" className="vetham-preloader__logo" />
    </div>
  );
}
