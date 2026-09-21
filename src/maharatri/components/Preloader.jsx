import { useEffect, useState } from 'react';
import { asset } from '../utils/assets';

export default function Preloader() {
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    const hide = () => setHidden(true);
    if (document.readyState === 'complete') {
      hide();
    } else {
      window.addEventListener('load', hide);
      return () => window.removeEventListener('load', hide);
    }
    return undefined;
  }, []);

  if (hidden) return null;

  return (
    <div className="sigma_preloader">
      <img width="414" height="414" src={asset('assets/img/om.svg')} alt="preloader" loading="lazy" />
    </div>
  );
}
