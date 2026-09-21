import { Link } from 'react-router-dom';
import useKrishnaSlider from '../../hooks/useKrishnaSlider';

function Slide({ slide, isActive }) {
  return (
    <div className={`kr-slide${isActive ? ' is-active' : ''}`} aria-hidden={!isActive}>
      <div className="kr-bg" role="presentation" />
      <div className="kr-overlay" role="presentation" />
      <div className="kr-vignette" role="presentation" />
      <div className="kr-content">
        <p className="kr-subtitle">
          <i className="fas fa-om" /> {slide.subtitle} <i className="fas fa-om" />
        </p>
        <h1 className="kr-title">
          {slide.title.split('\n').map((line, i, arr) => (
            <span key={line}>
              {line}
              {i < arr.length - 1 && <br />}
            </span>
          ))}
        </h1>
        <Link to={slide.ctaPath || '/contact'} className="kr-btn">{slide.cta}</Link>
      </div>
    </div>
  );
}

export default function KrishnaHero({ id, slides, enableKeyboard = false }) {
  const {
    current,
    progress,
    setPaused,
    goPrev,
    goNext,
    goTo,
    onTouchStart,
    onTouchEnd,
    delay,
  } = useKrishnaSlider(slides.length, { enableKeyboard });

  return (
    <section
      className="kr-hero"
      id={id}
      aria-label="Krishna home slider"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onTouchStart={onTouchStart}
      onTouchEnd={onTouchEnd}
    >
      {slides.map((slide, i) => (
        <Slide key={`${slide.subtitle}-${i}`} slide={slide} isActive={i === current} />
      ))}

      <div className="kr-particles" aria-hidden="true">
        {Array.from({ length: 8 }).map((_, i) => <span key={i} />)}
      </div>

      <button type="button" className="kr-nav kr-prev" aria-label="Previous slide" onClick={goPrev} />
      <button type="button" className="kr-nav kr-next" aria-label="Next slide" onClick={goNext} />

      <div className="kr-dots" role="tablist" aria-label="Slide navigation">
        {slides.map((_, i) => (
          <button
            key={i}
            type="button"
            className={`kr-dot${i === current ? ' is-active' : ''}`}
            role="tab"
            aria-selected={i === current}
            aria-label={`Slide ${i + 1}`}
            onClick={() => goTo(i)}
          />
        ))}
      </div>

      <div className="kr-counter">
        <span className="kr-counter-current">{String(current + 1).padStart(2, '0')}</span> / {String(slides.length).padStart(2, '0')}
      </div>

      <div
        className="kr-progress"
        aria-hidden="true"
        style={{
          width: `${progress}%`,
          transition: progress === 0 ? 'none' : `width ${delay}ms linear`,
        }}
      />
    </section>
  );
}
