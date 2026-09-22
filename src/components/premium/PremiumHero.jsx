import { useCallback, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { BANNERS } from '../../config/site';
import { img } from '../../config/images';

export default function PremiumHero() {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);

  const next = useCallback(() => {
    setActive((i) => (i + 1) % BANNERS.length);
  }, []);

  useEffect(() => {
    if (paused) return undefined;
    const timer = window.setInterval(next, 7000);
    return () => window.clearInterval(timer);
  }, [next, paused]);

  const slide = BANNERS[active];

  return (
    <section
      className="vp-hero"
      aria-label="Welcome"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div className="vp-hero__slides" aria-hidden="true">
        {BANNERS.map((item, index) => (
          <div
            key={item.title}
            className={`vp-hero__slide${index === active ? ' is-active' : ''}`}
            style={{ backgroundImage: `url(${img(item.image)})` }}
          />
        ))}
      </div>

      <div className="vp-hero__overlay" aria-hidden="true" />
      <div className="vp-hero__ornament vp-hero__ornament--1" aria-hidden="true" />
      <div className="vp-hero__ornament vp-hero__ornament--2" aria-hidden="true" />

      <div className="vp-hero__inner auto-container">
        <div className="vp-hero__grid">
          <div className="vp-hero__content" data-reveal="fade-up">
            <span className="vp-eyebrow">{slide.subtitle}</span>
            <h1 className="vp-hero__title">{slide.title}</h1>
            <p className="vp-hero__text">{slide.text}</p>
            <div className="vp-hero__actions">
              <Link to={slide.cta.path} className="vp-btn vp-btn--primary">
                <span>{slide.cta.label}</span>
                <i className="fas fa-arrow-right" aria-hidden="true" />
              </Link>
              <Link to="/about" className="vp-btn vp-btn--ghost">
                <span>Our Story</span>
              </Link>
            </div>
          </div>

          <div className="vp-hero__visual" data-reveal="fade-left">
            <div className="vp-hero__frame">
              <img
                src={img(slide.image)}
                alt=""
                className="vp-hero__portrait"
                loading="eager"
                fetchPriority="high"
              />
              <div className="vp-hero__frame-ring" aria-hidden="true" />
            </div>
          </div>
        </div>

        <div className="vp-hero__controls">
          <div className="vp-hero__dots" role="tablist" aria-label="Hero slides">
            {BANNERS.map((item, index) => (
              <button
                key={item.title}
                type="button"
                role="tab"
                aria-selected={index === active}
                aria-label={`Slide ${index + 1}: ${item.title}`}
                className={`vp-hero__dot${index === active ? ' is-active' : ''}`}
                onClick={() => setActive(index)}
              />
            ))}
          </div>
          <div className="vp-hero__arrows">
            <button
              type="button"
              className="vp-hero__arrow"
              aria-label="Previous slide"
              onClick={() => setActive((i) => (i - 1 + BANNERS.length) % BANNERS.length)}
            >
              <i className="fas fa-chevron-left" aria-hidden="true" />
            </button>
            <button type="button" className="vp-hero__arrow" aria-label="Next slide" onClick={next}>
              <i className="fas fa-chevron-right" aria-hidden="true" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
