import { useEffect } from 'react';
import { hidePreloader } from '../utils/themeInit';

export default function Preloader() {
  useEffect(() => {
    hidePreloader();
    const timer = setTimeout(hidePreloader, 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="loader-wrap" aria-hidden="true">
      <div className="preloader">
        <div className="preloader-close">x</div>
        <div id="handle-preloader" className="handle-preloader">
          <div className="animation-preloader">
            <div className="spinner" />
            <div className="txt-loading">
              {['v', 'e', 't', 'h', 'a', 'm'].map((letter) => (
                <span key={letter} data-text-preloader={letter} className="letters-loading">
                  {letter}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
