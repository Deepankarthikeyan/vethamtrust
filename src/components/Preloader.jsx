import { img } from '../config/images';

export default function Preloader() {
  return (
    <div className="loader-wrap" aria-hidden="false">
      <div className="preloader">
        <div className="preloader-close">x</div>
        <div id="handle-preloader" className="handle-preloader">
          <div className="animation-preloader vetham-preloader">
            <div className="vetham-preloader__logo-wrap">
              <div className="spinner" aria-hidden="true" />
              <img
                src={img('logo')}
                alt="Vetham Kuzhumam Spiritual Trust"
                className="vetham-preloader__logo"
                width={100}
                height={100}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
