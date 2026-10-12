import { Link } from 'react-router-dom';
import LazyImage from '../LazyImage';
import {
  FINAL_CTA,
  HOME_REFERENCE_SECTIONS,
  SPIRITUAL_ABOUT,
  SPIRITUAL_HERO,
} from '../../config/spiritualHome';

function ReferenceSection({ section }) {
  return (
    <section
      id={section.id}
      className="sh-ref-band"
      aria-label={section.label}
    >
      <div className="sh-ref-band__frame">
        <img
          src={section.image}
          alt=""
          width={1920}
          height={720}
          loading="lazy"
          decoding="async"
          className="sh-ref-band__img"
        />
      </div>
      {section.cta ? (
        <Link to={section.cta.path} className="sh-ref-band__cta-hit">
          <span className="sr-only">{section.cta.label}</span>
        </Link>
      ) : null}
    </section>
  );
}

export default function SpiritualHomePage() {
  return (
    <div className="sh-home">
      <section className="sh-hero" aria-label="Hero">
        <div className="sh-hero__media">
          <LazyImage src={SPIRITUAL_HERO.image} alt="" className="sh-hero__img" loading="eager" />
          <div className="sh-hero__shade" />
        </div>
        <div className="sh-container sh-hero__inner">
          <div className="sh-hero__copy">
            <p className="sh-eyebrow">{SPIRITUAL_HERO.eyebrow}</p>
            <h1 className="sh-hero__title">{SPIRITUAL_HERO.title}</h1>
            <p className="sh-hero__subtitle">{SPIRITUAL_HERO.subtitle}</p>
            {SPIRITUAL_HERO.paragraphs.map((p) => (
              <p key={p.slice(0, 32)} className="sh-text">{p}</p>
            ))}
            <div className="sh-hero__actions">
              <Link to={SPIRITUAL_HERO.primaryCta.path} className="sh-btn sh-btn--primary">
                {SPIRITUAL_HERO.primaryCta.label} <i className="fas fa-arrow-right" aria-hidden="true" />
              </Link>
              <Link to={SPIRITUAL_HERO.secondaryCta.path} className="sh-btn sh-btn--outline sh-btn--hero">
                {SPIRITUAL_HERO.secondaryCta.label}
              </Link>
            </div>
            <p className="sh-hero__motto">
              <i className="fas fa-leaf" aria-hidden="true" />
              {SPIRITUAL_HERO.motto}
            </p>
          </div>
        </div>
      </section>

      <section className="sh-section sh-about sh-section--botanical" id="sh-about" aria-label="About">
        <div className="sh-container sh-about__grid">
          <div className="sh-about__visual">
            <img
              className="sh-about__maharishi-png"
              src={SPIRITUAL_ABOUT.image}
              alt="Yogiraj Vethathiri Maharishi"
              width={560}
              height={680}
              loading="lazy"
              decoding="async"
            />
          </div>
          <div className="sh-about__copy">
            <p className="sh-eyebrow">{SPIRITUAL_ABOUT.eyebrow}</p>
            <h2 className="sh-title">{SPIRITUAL_ABOUT.title}</h2>
            {SPIRITUAL_ABOUT.text.map((p) => (
              <p key={p.slice(0, 32)} className="sh-text">{p}</p>
            ))}
            <blockquote className="sh-quote">
              <p>{SPIRITUAL_ABOUT.quote}</p>
              <cite>— {SPIRITUAL_ABOUT.quoteAttribution}</cite>
            </blockquote>
          </div>
        </div>
      </section>

      {HOME_REFERENCE_SECTIONS.map((section) => (
        <ReferenceSection key={section.id} section={section} />
      ))}

      <section className="sh-ref-band sh-ref-band--cta" aria-label="Begin your journey">
        <div className="sh-ref-band__frame">
          <img
            src={FINAL_CTA.image}
            alt=""
            width={1920}
            height={469}
            loading="lazy"
            decoding="async"
            className="sh-ref-band__img"
          />
        </div>
        <div className="sh-ref-band__cta-actions">
          <Link to={FINAL_CTA.cta.path} className="sh-btn sh-btn--primary sh-btn--lg sh-ref-band__cta-btn">
            {FINAL_CTA.cta.label} <i className="fas fa-arrow-right" aria-hidden="true" />
          </Link>
        </div>
      </section>
    </div>
  );
}
