import { Link } from 'react-router-dom';
import LazyImage from '../LazyImage';
import SpiritualHomeHeader from './SpiritualHomeHeader';
import {
  BALANCE_CARDS,
  FINAL_CTA,
  FIVE_DIMENSIONS,
  INNER_PEACE_STEPS,
  JOURNEY_WITHIN,
  PURPOSE_JOURNEY,
  SPIRITUAL_ABOUT,
  SPIRITUAL_HERO,
  UNIVERSAL_BROTHERHOOD,
  VILLAGE_LIFE,
  WAY_OF_LIFE,
} from '../../config/spiritualHome';

export default function SpiritualHomePage() {
  return (
    <div className="sh-home">
      <SpiritualHomeHeader />

      <section className="sh-hero" aria-label="Hero">
        <div className="sh-hero__media">
          <LazyImage src={SPIRITUAL_HERO.image} alt="" className="sh-hero__img" loading="eager" />
          <div className="sh-hero__shade" />
        </div>
        <div className="sh-container sh-hero__grid">
          <div className="sh-hero__copy">
            <p className="sh-eyebrow">{SPIRITUAL_HERO.eyebrow}</p>
            <h1 className="sh-hero__title">{SPIRITUAL_HERO.title}</h1>
            <p className="sh-hero__subtitle">{SPIRITUAL_HERO.subtitle}</p>
            {SPIRITUAL_HERO.paragraphs.map((p) => (
              <p key={p.slice(0, 28)} className="sh-text">{p}</p>
            ))}
            <div className="sh-hero__actions">
              <Link to={SPIRITUAL_HERO.primaryCta.path} className="sh-btn sh-btn--primary">
                {SPIRITUAL_HERO.primaryCta.label}
              </Link>
              <Link to={SPIRITUAL_HERO.secondaryCta.path} className="sh-btn sh-btn--outline sh-btn--hero">
                {SPIRITUAL_HERO.secondaryCta.label}
              </Link>
            </div>
          </div>
        </div>
        <ul className="sh-hero__pillars sh-container">
          {SPIRITUAL_HERO.pillars.map((item) => (
            <li key={item.label}>
              <i className={item.icon} aria-hidden="true" />
              <span>{item.label}</span>
            </li>
          ))}
        </ul>
      </section>

      <section className="sh-section sh-about" id="sh-about" aria-label="About">
        <div className="sh-container sh-about__grid">
          <div className="sh-about__visual">
            <div className="sh-about__backdrop" style={{ backgroundImage: `url(${SPIRITUAL_ABOUT.backdrop})` }} />
            <LazyImage src={SPIRITUAL_ABOUT.image} alt="Yogiraj Vethathiri Maharishi" />
          </div>
          <div className="sh-about__copy">
            <p className="sh-eyebrow sh-eyebrow--green">{SPIRITUAL_ABOUT.eyebrow}</p>
            <h2 className="sh-title">{SPIRITUAL_ABOUT.title}</h2>
            {SPIRITUAL_ABOUT.text.map((p) => (
              <p key={p.slice(0, 28)} className="sh-text">{p}</p>
            ))}
            <blockquote className="sh-quote">
              <span className="sh-quote__mark" aria-hidden="true">&ldquo;</span>
              <p>{SPIRITUAL_ABOUT.quote}</p>
              <cite>— {SPIRITUAL_ABOUT.quoteAttribution}</cite>
            </blockquote>
          </div>
        </div>
      </section>

      <section className="sh-section sh-section--cream sh-journey" id="sh-practices" aria-label="Journey within">
        <div className="sh-container">
          <div className="sh-section-head">
            <p className="sh-eyebrow sh-eyebrow--center">{JOURNEY_WITHIN.subtitle}</p>
            <h2 className="sh-title sh-title--center">{JOURNEY_WITHIN.title}</h2>
          </div>
          <div className="sh-journey__grid">
            {JOURNEY_WITHIN.items.map((item) => (
              <article key={item.title} className="sh-journey-card">
                <div className="sh-journey-card__img">
                  <LazyImage src={item.image} alt="" />
                </div>
                <div className="sh-journey-card__icon" aria-hidden="true">
                  <i className={item.icon} />
                </div>
                <h3 className="sh-card-title">{item.title}</h3>
                <p className="sh-text sh-text--sm">{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="sh-section sh-dimensions" aria-label="Five dimensions">
        <div className="sh-container">
          <div className="sh-section-head">
            <h2 className="sh-title sh-title--center">{FIVE_DIMENSIONS.title}</h2>
            <p className="sh-text sh-text--center">{FIVE_DIMENSIONS.subtitle}</p>
          </div>
          <div className="sh-dimensions__row">
            {FIVE_DIMENSIONS.items.map((dim) => (
              <article key={dim.key} className="sh-dimension-card">
                <div className="sh-dimension-card__panel" style={{ backgroundColor: dim.color }}>
                  <i className={dim.icon} aria-hidden="true" />
                  <h3>{dim.label}</h3>
                  <p>{dim.text}</p>
                </div>
                <div className="sh-dimension-card__photo">
                  <LazyImage src={dim.image} alt="" />
                </div>
              </article>
            ))}
          </div>
          <div className="sh-dimensions__banner">
            <LazyImage src={FIVE_DIMENSIONS.bannerImage} alt="Peaceful landscape at the spiritual village" />
          </div>
        </div>
      </section>

      <section className="sh-section sh-way" aria-label="Way of life">
        <div className="sh-container sh-way__grid">
          <div className="sh-way__intro">
            <h2 className="sh-title">{WAY_OF_LIFE.title}</h2>
            <p className="sh-text">{WAY_OF_LIFE.text}</p>
          </div>
          <ul className="sh-way__list">
            {WAY_OF_LIFE.items.map((item) => (
              <li key={item.title}>
                <span className="sh-way__icon" aria-hidden="true"><i className={item.icon} /></span>
                <div>
                  <strong>{item.title}</strong>
                  <p>{item.text}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="sh-section sh-section--soft sh-peace" id="sh-benefits" aria-label="Inner peace">
        <div className="sh-container">
          <h2 className="sh-title sh-title--center">{INNER_PEACE_STEPS.title}</h2>
          <div className="sh-peace__grid">
            {INNER_PEACE_STEPS.items.map((step) => (
              <article key={step.num} className="sh-peace-card">
                <span className="sh-peace-card__num">{step.num}</span>
                <i className={step.icon} aria-hidden="true" />
                <h3>{step.title}</h3>
                <p>{step.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="sh-section sh-purpose" id={PURPOSE_JOURNEY.id} aria-label="Purpose">
        <div className="sh-container sh-purpose__grid">
          <div className="sh-purpose__media">
            <LazyImage src={PURPOSE_JOURNEY.image} alt="Meditation at the spiritual village" />
          </div>
          <div className="sh-purpose__copy">
            <h2 className="sh-title sh-title--light">{PURPOSE_JOURNEY.title}</h2>
            <p className="sh-text sh-text--light">{PURPOSE_JOURNEY.intro}</p>
            <ul className="sh-purpose__list">
              {PURPOSE_JOURNEY.items.map((item) => (
                <li key={item.title}>
                  <span className="sh-purpose__icon" aria-hidden="true"><i className={item.icon} /></span>
                  <div>
                    <h3>{item.title}</h3>
                    <p>{item.text}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="sh-section sh-brotherhood" aria-label="Universal brotherhood">
        <div className="sh-container">
          <div className="sh-brotherhood__head">
            <h2 className="sh-title sh-title--center">{UNIVERSAL_BROTHERHOOD.title}</h2>
            <p className="sh-text sh-text--center">{UNIVERSAL_BROTHERHOOD.text}</p>
          </div>
          <div className="sh-brotherhood__banner">
            <LazyImage src={UNIVERSAL_BROTHERHOOD.image} alt="Community meditation gathering" />
          </div>
          <ul className="sh-values sh-values--row">
            {UNIVERSAL_BROTHERHOOD.values.map((v) => (
              <li key={v.label}>
                <i className={v.icon} aria-hidden="true" />
                <span>{v.label}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="sh-section sh-village" id="sh-village" aria-label="Village life">
        <div className="sh-container sh-village__grid">
          <div className="sh-village__lead">
            <p className="sh-eyebrow">{VILLAGE_LIFE.eyebrow}</p>
            <h2 className="sh-title">{VILLAGE_LIFE.title}</h2>
            <p className="sh-text">{VILLAGE_LIFE.text}</p>
            <Link to={VILLAGE_LIFE.cta.path} className="sh-btn sh-btn--primary">
              {VILLAGE_LIFE.cta.label}
            </Link>
          </div>
          <div className="sh-village__hero-img">
            <LazyImage src={VILLAGE_LIFE.heroImage} alt="Spiritual village surroundings" />
          </div>
          <div className="sh-village__tiles">
            {VILLAGE_LIFE.tiles.map((tile) => (
              <article key={tile.title} className="sh-village-tile">
                <div className="sh-village-tile__img">
                  <LazyImage src={tile.image} alt="" />
                </div>
                <h3>{tile.title}</h3>
                <p>{tile.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="sh-section sh-section--cream sh-balance" aria-label="Balance">
        <div className="sh-container">
          <h2 className="sh-title sh-title--center">{BALANCE_CARDS.title}</h2>
          <div className="sh-balance__stack">
            {BALANCE_CARDS.cards.map((card) => (
              <article key={card.title} className={`sh-balance-card sh-balance-card--${card.tone}`}>
                <div className="sh-balance-card__img">
                  <LazyImage src={card.image} alt="" />
                </div>
                <div className="sh-balance-card__body">
                  <h3>{card.title}</h3>
                  <ul>
                    {card.points.map((point) => (
                      <li key={point}><i className="fas fa-check" aria-hidden="true" /> {point}</li>
                    ))}
                  </ul>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="sh-cta" aria-label="Begin your journey">
        <LazyImage src={FINAL_CTA.image} alt="" className="sh-cta__bg" />
        <div className="sh-cta__overlay" />
        <div className="sh-container sh-cta__content">
          <h2 className="sh-cta__title">{FINAL_CTA.title}</h2>
          <p className="sh-cta__text">{FINAL_CTA.text}</p>
          <ul className="sh-cta__pillars">
            {FINAL_CTA.pillars.map((p) => (
              <li key={p.label}>
                <i className={p.icon} aria-hidden="true" />
                <span>{p.label}</span>
              </li>
            ))}
          </ul>
          <Link to={FINAL_CTA.cta.path} className="sh-btn sh-btn--primary sh-btn--lg">
            {FINAL_CTA.cta.label} <i className="fas fa-arrow-right" aria-hidden="true" />
          </Link>
          <p className="sh-cta__tagline">{FINAL_CTA.tagline}</p>
        </div>
      </section>

      <footer className="sh-home-footer">
        <div className="sh-container">
          <p>© {new Date().getFullYear()} Vetham Kuzhumam Spiritual Trust. {FINAL_CTA.tagline}.</p>
        </div>
      </footer>
    </div>
  );
}
