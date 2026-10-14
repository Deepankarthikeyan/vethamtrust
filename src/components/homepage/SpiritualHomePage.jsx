import { Link } from 'react-router-dom';
import LazyImage from '../LazyImage';
import {
  BALANCE_CARDS,
  BROTHERHOOD_PANEL,
  FINAL_CTA,
  FIVE_DIMENSIONS,
  INNER_PEACE_STEPS,
  JOURNEY_WITHIN,
  PURPOSE_PANEL,
  SPIRITUAL_ABOUT,
  SPIRITUAL_HERO,
  VILLAGE_LIFE,
  WAY_OF_LIFE,
} from '../../config/spiritualHome';

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
              width={1644}
              height={1156}
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

      <section className="sh-section sh-section--cream sh-section--botanical sh-journey" id="sh-practices" aria-label="Journey within">
        <div className="sh-container sh-container--content">
          <header className="sh-section-head sh-section-head--narrow">
            <p className="sh-eyebrow sh-eyebrow--center">{JOURNEY_WITHIN.eyebrow}</p>
            <h2 className="sh-title sh-title--center">{JOURNEY_WITHIN.title}</h2>
            <p className="sh-text sh-text--center sh-section-head__sub">{JOURNEY_WITHIN.subtitle}</p>
          </header>
          <div className="sh-journey__grid">
            {JOURNEY_WITHIN.items.map((item) => (
              <article key={item.title} className="sh-journey-card">
                <div className="sh-journey-card__img">
                  <LazyImage src={item.image} alt="" />
                </div>
                <div className={`sh-journey-card__icon sh-journey-card__icon--${item.iconTone}`} aria-hidden="true">
                  <i className={item.icon} />
                </div>
                <h3 className="sh-card-title">{item.title}</h3>
                <p className="sh-text sh-text--sm">{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="sh-section sh-dimensions sh-section--botanical" id="sh-dimensions" aria-label="Five dimensions">
        <div className="sh-container sh-container--content">
          <header className="sh-section-head sh-section-head--narrow">
            <p className="sh-eyebrow sh-eyebrow--center">{FIVE_DIMENSIONS.eyebrow}</p>
            <h2 className="sh-title sh-title--center">{FIVE_DIMENSIONS.title}</h2>
          </header>
          <div className="sh-dimensions__row">
            {FIVE_DIMENSIONS.items.map((dim) => (
              <article
                key={dim.key}
                className="sh-dimension-tile"
                style={{
                  '--sh-dim-color': dim.color,
                  '--sh-dim-image': `url(${dim.image})`,
                }}
              >
                <div className="sh-dimension-tile__content">
                  <span className="sh-dimension-tile__icon-ring" aria-hidden="true">
                    <i className={dim.icon} />
                  </span>
                  <h3 className="sh-white-copy">{dim.label}</h3>
                  <p className="sh-white-copy">{dim.text}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="sh-section sh-way sh-section--botanical" id="sh-way" aria-label="Way of life">
        <div className="sh-container sh-container--content sh-way__grid">
          <header className="sh-way__intro">
            <p className="sh-eyebrow">{WAY_OF_LIFE.eyebrow}</p>
            <h2 className="sh-title">{WAY_OF_LIFE.title}</h2>
            <p className="sh-text">{WAY_OF_LIFE.text}</p>
          </header>
          <ul className="sh-way__list">
            {WAY_OF_LIFE.items.map((item) => (
              <li key={item.title}>
                <span className="sh-way__icon" aria-hidden="true"><i className={item.icon} /></span>
                <div className="sh-way__item-text">
                  <strong>{item.title}</strong>
                  <span className="sh-way__hint"> ({item.hint})</span>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="sh-section sh-section--beige sh-peace" id="sh-benefits" aria-label="Inner peace">
        <div className="sh-container sh-container--content">
          <header className="sh-section-head sh-section-head--narrow">
            <p className="sh-eyebrow sh-eyebrow--center">{INNER_PEACE_STEPS.eyebrow}</p>
            <h2 className="sh-title sh-title--center">{INNER_PEACE_STEPS.title}</h2>
            <p className="sh-text sh-text--center sh-section-head__sub">{INNER_PEACE_STEPS.intro}</p>
          </header>
          <div className="sh-peace__grid">
            {INNER_PEACE_STEPS.items.map((step) => (
              <article
                key={step.num}
                className="sh-peace-card"
                style={{ '--sh-peace-accent': step.accent }}
              >
                <span className="sh-peace-card__num">{step.num}</span>
                <i className={step.icon} aria-hidden="true" />
                <h3>{step.title}</h3>
                <p>{step.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="sh-section sh-split" id="sh-purpose" aria-label="Purpose and brotherhood">
        <div className="sh-container sh-container--content sh-split__grid">
          <article className="sh-purpose-card">
            <div className="sh-purpose-card__media">
              <LazyImage src={PURPOSE_PANEL.image} alt="" />
            </div>
            <div className="sh-purpose-card__body">
              <p className="sh-eyebrow">{PURPOSE_PANEL.eyebrow}</p>
              <h2 className="sh-title">{PURPOSE_PANEL.title}</h2>
              <ul className="sh-purpose-list sh-purpose-list--light">
                {PURPOSE_PANEL.items.map((item) => (
                  <li key={item.title}>
                    <span className="sh-purpose-list__icon" aria-hidden="true"><i className={item.icon} /></span>
                    <div>
                      <h3>{item.title}</h3>
                      <p>{item.text}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </article>

          <article className="sh-brotherhood-card">
            <div className="sh-brotherhood-hero">
              <LazyImage src={BROTHERHOOD_PANEL.image} alt="Community gathering" />
              <div className="sh-brotherhood-hero__copy">
                <p className="sh-eyebrow sh-eyebrow--light">{BROTHERHOOD_PANEL.eyebrow}</p>
                <h2 className="sh-title sh-title--light">{BROTHERHOOD_PANEL.title}</h2>
                <p className="sh-text sh-text--light">{BROTHERHOOD_PANEL.text}</p>
              </div>
            </div>
            <ul className="sh-values sh-values--row sh-values--brotherhood">
              {BROTHERHOOD_PANEL.values.map((v) => (
                <li key={v.label} className={`sh-values__item sh-values__item--${v.tone}`}>
                  <i className={v.icon} aria-hidden="true" />
                  <span>{v.label}</span>
                </li>
              ))}
            </ul>
            <p className="sh-text sh-text--center sh-brotherhood__footer">{BROTHERHOOD_PANEL.footer}</p>
          </article>
        </div>
      </section>

      <section className="sh-section sh-village sh-section--botanical" id="sh-village" aria-label="Village life">
        <div className="sh-container sh-container--content sh-village__layout">
          <div className="sh-village__head sh-village__head--left">
            <p className="sh-eyebrow">{VILLAGE_LIFE.sectionTitle}</p>
            <h2 className="sh-title">{VILLAGE_LIFE.title}</h2>
            <p className="sh-text">{VILLAGE_LIFE.text}</p>
            <Link to={VILLAGE_LIFE.cta.path} className="sh-btn sh-btn--primary">
              {VILLAGE_LIFE.cta.label} <i className="fas fa-arrow-right" aria-hidden="true" />
            </Link>
          </div>
          <div className="sh-village__tiles sh-village__tiles--row">
            {VILLAGE_LIFE.tiles.map((tile) => (
              <article key={tile.title} className="sh-village-tile">
                <div className="sh-village-tile__img">
                  <LazyImage src={tile.image} alt="" />
                </div>
                <h3>{tile.title}</h3>
                <p><span className="sh-village-tile__dash">—</span> {tile.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="sh-section sh-section--cream sh-balance sh-section--botanical" id="sh-balance" aria-label="Balance">
        <div className="sh-container sh-container--content">
          <header className="sh-section-head sh-section-head--narrow">
            <p className="sh-eyebrow sh-eyebrow--center">{BALANCE_CARDS.eyebrow}</p>
            <h2 className="sh-title sh-title--center">{BALANCE_CARDS.title}</h2>
          </header>
          <div className="sh-balance__grid">
            {BALANCE_CARDS.cards.map((card) => (
              <article key={card.title} className={`sh-balance-col sh-balance-col--${card.tone}`}>
                <h3 className="sh-balance-col__label">{card.title}</h3>
                <div className="sh-balance-col__img">
                  <LazyImage src={card.image} alt="" />
                </div>
                <ul>
                  {card.points.map((point) => (
                    <li key={point}><i className="fas fa-check" aria-hidden="true" /> {point}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="sh-cta" aria-label="Begin your journey">
        <LazyImage src={FINAL_CTA.image} alt="" className="sh-cta__bg" />
        <div className="sh-cta__overlay" />
        <div className="sh-container sh-container--content sh-cta__content">
          <p className="sh-cta__eyebrow sh-cta__scroll-item sh-white-copy">{FINAL_CTA.eyebrow}</p>
          <h2 className="sh-cta__title sh-cta__scroll-item sh-white-copy">{FINAL_CTA.title}</h2>
          <p className="sh-cta__text sh-cta__scroll-item sh-white-copy">{FINAL_CTA.text}</p>
          <ul className="sh-cta__pillars sh-cta__pillars--divided sh-cta__scroll-item">
            {FINAL_CTA.pillars.map((p) => (
              <li key={p.label}>
                <i className={p.icon} aria-hidden="true" />
                <span>{p.label}</span>
              </li>
            ))}
          </ul>
          <Link to={FINAL_CTA.cta.path} className="sh-btn sh-btn--primary sh-cta__scroll-item">
            {FINAL_CTA.cta.label} <i className="fas fa-arrow-right" aria-hidden="true" />
          </Link>
          <p className="sh-cta__tagline sh-cta__scroll-item">
            <strong>{FINAL_CTA.tagline}</strong>
            <span className="sh-cta__tagline-sub">{FINAL_CTA.taglineSub}</span>
          </p>
        </div>
      </section>
    </div>
  );
}
