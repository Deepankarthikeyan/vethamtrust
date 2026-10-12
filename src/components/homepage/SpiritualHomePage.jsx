import { Link } from 'react-router-dom';
import LazyImage from '../LazyImage';
import {
  BALANCE_CARDS,
  DUAL_FEATURE,
  FINAL_CTA,
  FIVE_DIMENSIONS,
  INNER_PEACE_STEPS,
  JOURNEY_WITHIN,
  SPIRITUAL_ABOUT,
  SPIRITUAL_HERO,
  VILLAGE_LIFE,
  WAY_OF_LIFE,
} from '../../config/spiritualHome';

function SpiritualHomePage() {
  return (
    <div className="sh-home">
      <section className="sh-hero">
        <div className="sh-hero__media">
          <LazyImage src={SPIRITUAL_HERO.image} alt="" className="sh-hero__img" loading="eager" />
          <div className="sh-hero__shade" />
        </div>
        <div className="vx-container sh-hero__grid">
          <div className="sh-hero__copy">
            <p className="sh-eyebrow">{SPIRITUAL_HERO.eyebrow}</p>
            <h1 className="sh-hero__title">{SPIRITUAL_HERO.title}</h1>
            <p className="sh-hero__subtitle">{SPIRITUAL_HERO.subtitle}</p>
            {SPIRITUAL_HERO.paragraphs.map((p) => (
              <p key={p.slice(0, 24)} className="sh-text">{p}</p>
            ))}
            <div className="sh-hero__actions">
              <Link to={SPIRITUAL_HERO.primaryCta.path} className="sh-btn sh-btn--primary">
                {SPIRITUAL_HERO.primaryCta.label}
              </Link>
              <Link to={SPIRITUAL_HERO.secondaryCta.path} className="sh-btn sh-btn--outline sh-btn--on-dark">
                {SPIRITUAL_HERO.secondaryCta.label}
              </Link>
            </div>
          </div>
        </div>
        <ul className="sh-hero__pillars vx-container">
          {SPIRITUAL_HERO.pillars.map((item) => (
            <li key={item.label}>
              <i className={item.icon} aria-hidden="true" />
              <span>{item.label}</span>
            </li>
          ))}
        </ul>
      </section>

      <section className="sh-section sh-about">
        <div className="vx-container sh-about__grid">
          <div className="sh-about__visual">
            <LazyImage src={SPIRITUAL_ABOUT.image} alt="Yogiraj Vethathiri Maharishi" />
          </div>
          <div className="sh-about__copy">
            <p className="sh-eyebrow sh-eyebrow--green">{SPIRITUAL_ABOUT.eyebrow}</p>
            <h2 className="sh-title">{SPIRITUAL_ABOUT.title}</h2>
            {SPIRITUAL_ABOUT.text.map((p) => (
              <p key={p.slice(0, 24)} className="sh-text">{p}</p>
            ))}
            <blockquote className="sh-quote">
              <span className="sh-quote__mark" aria-hidden="true">&ldquo;</span>
              <p>{SPIRITUAL_ABOUT.quote}</p>
              <cite>{SPIRITUAL_ABOUT.quoteAttribution}</cite>
            </blockquote>
          </div>
        </div>
      </section>

      <section className="sh-section sh-section--cream sh-journey">
        <div className="vx-container">
          <div className="sh-section-head">
            <h2 className="sh-title sh-title--center">{JOURNEY_WITHIN.title}</h2>
            <p className="sh-text sh-text--center">{JOURNEY_WITHIN.subtitle}</p>
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

      <section className="sh-section sh-dimensions">
        <div className="vx-container">
          <div className="sh-section-head">
            <h2 className="sh-title sh-title--center">{FIVE_DIMENSIONS.title}</h2>
            <p className="sh-text sh-text--center">{FIVE_DIMENSIONS.subtitle}</p>
          </div>
          <div className="sh-dimensions__row">
            {FIVE_DIMENSIONS.items.map((dim) => (
              <article
                key={dim.key}
                className="sh-dimension"
                style={{ '--sh-dim-color': dim.color }}
              >
                <i className={dim.icon} aria-hidden="true" />
                <h3>{dim.label}</h3>
                <p>{dim.text}</p>
              </article>
            ))}
          </div>
          <div className="sh-dimensions__banner">
            <LazyImage src={FIVE_DIMENSIONS.bannerImage} alt="Peaceful landscape at the spiritual village" />
          </div>
        </div>
      </section>

      <section className="sh-section sh-way">
        <div className="vx-container sh-way__grid">
          <div>
            <h2 className="sh-title">{WAY_OF_LIFE.title}</h2>
            <p className="sh-text">{WAY_OF_LIFE.text}</p>
          </div>
          <ul className="sh-way__list">
            {WAY_OF_LIFE.items.map((item) => (
              <li key={item.label}>
                <span className="sh-way__icon" aria-hidden="true"><i className={item.icon} /></span>
                <span>{item.label}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="sh-section sh-section--soft sh-peace">
        <div className="vx-container">
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

      <section className="sh-section sh-dual">
        <div className="vx-container sh-dual__grid">
          <article className="sh-dual-card sh-dual-card--green">
            <div className="sh-dual-card__copy">
              <h2 className="sh-title sh-title--light">{DUAL_FEATURE.left.title}</h2>
              <ul>
                {DUAL_FEATURE.left.items.map((line) => (
                  <li key={line}><i className="fas fa-check" aria-hidden="true" /> {line}</li>
                ))}
              </ul>
            </div>
            <div className="sh-dual-card__media">
              <LazyImage src={DUAL_FEATURE.left.image} alt="" />
            </div>
          </article>
          <article className="sh-dual-card sh-dual-card--warm">
            <div className="sh-dual-card__copy">
              <h2 className="sh-title sh-title--light">{DUAL_FEATURE.right.title}</h2>
              <p className="sh-text sh-text--light">{DUAL_FEATURE.right.text}</p>
            </div>
            <div className="sh-dual-card__media sh-dual-card__media--wide">
              <LazyImage src={DUAL_FEATURE.right.image} alt="Community gathering" />
            </div>
            <ul className="sh-values">
              {DUAL_FEATURE.right.values.map((v) => (
                <li key={v.label}>
                  <i className={v.icon} aria-hidden="true" />
                  <span>{v.label}</span>
                </li>
              ))}
            </ul>
          </article>
        </div>
      </section>

      <section className="sh-section sh-village">
        <div className="vx-container sh-village__grid">
          <div className="sh-village__lead">
            <h2 className="sh-title">{VILLAGE_LIFE.title}</h2>
            <p className="sh-text">{VILLAGE_LIFE.text}</p>
            <Link to={VILLAGE_LIFE.cta.path} className="sh-btn sh-btn--primary">
              {VILLAGE_LIFE.cta.label}
            </Link>
          </div>
          <div className="sh-village__hero-img">
            <LazyImage src={VILLAGE_LIFE.heroImage} alt="Spiritual village plan" />
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

      <section className="sh-section sh-section--cream sh-balance">
        <div className="vx-container">
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

      <section className="sh-cta">
        <LazyImage src={FINAL_CTA.image} alt="" className="sh-cta__bg" />
        <div className="sh-cta__overlay" />
        <div className="vx-container sh-cta__content">
          <h2 className="sh-cta__title">{FINAL_CTA.title}</h2>
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
    </div>
  );
}

export default SpiritualHomePage;
