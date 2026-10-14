import { SPIRITUAL_ABOUT } from '../../config/spiritualHome';

export default function SpiritualAboutSection({ className = '' }) {
  return (
    <section
      className={`sh-section sh-about sh-section--botanical${className ? ` ${className}` : ''}`}
      id="sh-about"
      aria-label="About"
    >
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
  );
}
