export default function Preloader() {
  return (
    <div className="loader-wrap" aria-hidden="false">
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
