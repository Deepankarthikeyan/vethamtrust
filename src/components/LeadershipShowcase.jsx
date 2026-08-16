import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { SITE, TEAM } from '../config/site';
import { img } from '../config/images';
import LazyImage from './LazyImage';

const FOOTER_ITEMS = [
  { icon: '🪷', label: 'Wisdom' },
  { icon: '🧘', label: 'Meditation' },
  { icon: '🤝', label: 'Service' },
  { icon: '🌍', label: 'Peace' },
];

function LeaderPanel({ member, delay, visible, linkToLeadership }) {
  const portraitLeft = member.portraitSide === 'left';
  const NameTag = linkToLeadership ? Link : 'div';
  const nameProps = linkToLeadership ? { to: '/leadership' } : {};

  return (
    <article
      className={`vetham-leadership-panel ${portraitLeft ? 'is-portrait-left' : 'is-portrait-right'} ${visible ? 'is-visible' : ''}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      <div className="vetham-leadership-panel__inner">
        <div className="vetham-leadership-panel__content">
          <p className="vetham-leadership-panel__meta">
            Spiritual Master
            <span aria-hidden="true"> • </span>
            {member.role}
          </p>
          <h3 className="vetham-leadership-panel__name">
            <NameTag {...nameProps}>{member.name}</NameTag>
          </h3>
          {member.headline ? (
            <p className="vetham-leadership-panel__headline">{member.headline}</p>
          ) : null}
          {member.bio ? <p className="vetham-leadership-panel__bio">{member.bio}</p> : null}
          {member.achievements?.length ? (
            <div className="vetham-leadership-panel__achievements">
              {member.achievements.map((item) => (
                <div key={item.title} className="vetham-leadership-panel__achievement">
                  <span className="vetham-leadership-panel__achievement-title">{item.title}</span>
                  <span className="vetham-leadership-panel__achievement-sub">{item.subtitle}</span>
                </div>
              ))}
            </div>
          ) : null}
          {member.signature ? (
            <p className="vetham-leadership-panel__signature">{member.signature}</p>
          ) : null}
          <div className="vetham-leadership-panel__footer-line" aria-hidden="true" />
        </div>

        <div className="vetham-leadership-panel__portrait-wrap">
          <div className="vetham-leadership-panel__arc" aria-hidden="true" />
          <div className="vetham-leadership-panel__portrait">
            <figure className="vetham-leadership-panel__image">
              {linkToLeadership ? (
                <Link to="/leadership"><LazyImage src={img(member.image)} alt={member.name} /></Link>
              ) : (
                <LazyImage src={img(member.image)} alt={member.name} />
              )}
            </figure>
          </div>
        </div>
      </div>
    </article>
  );
}

export default function LeadershipShowcase({ linkToLeadership = true }) {
  const sectionRef = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return undefined;

    const reveal = () => setVisible(true);
    const isInView = () => {
      const rect = el.getBoundingClientRect();
      return rect.top < window.innerHeight * 0.92;
    };

    if (isInView()) {
      reveal();
      return undefined;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          reveal();
          observer.disconnect();
        }
      },
      { threshold: 0.06 },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className={`vetham-leadership-poster ${visible ? 'is-visible' : ''}`}
      aria-label="Vetham Kuzhumam Spiritual Trust Leadership"
    >
      <div className="vetham-leadership-poster__bg" aria-hidden="true">
        <div className="vetham-leadership-poster__glow" />
        <div className="vetham-leadership-poster__dots" />
        <div className="vetham-leadership-poster__lotus" />
      </div>

      <div className="auto-container vetham-leadership-poster__container">
        <header className={`vetham-leadership-poster__header ${visible ? 'is-visible' : ''}`}>
          <h2 className="vetham-leadership-poster__org">{SITE.name.toUpperCase()}</h2>
          <p className="vetham-leadership-poster__org-tag">
            Spiritual Wisdom <span aria-hidden="true">•</span> Service <span aria-hidden="true">•</span> Harmony{' '}
            <span aria-hidden="true">•</span> World Peace
          </p>
        </header>

        <div className="vetham-leadership-poster__frame">
          <div className="vetham-leadership-poster__grid">
            {TEAM.map((member, index) => (
              <LeaderPanel
                key={member.name}
                member={member}
                delay={120 + index * 140}
                visible={visible}
                linkToLeadership={linkToLeadership}
              />
            ))}
          </div>
        </div>

        <footer className={`vetham-leadership-poster__footer ${visible ? 'is-visible' : ''}`}>
          <div className="vetham-leadership-poster__footer-title">{SITE.name.toUpperCase()}</div>
          <p className="vetham-leadership-poster__footer-tagline">
            Following the path of wisdom, compassion and world peace
          </p>
          <div className="vetham-leadership-poster__footer-icons">
            {FOOTER_ITEMS.map((item) => (
              <span key={item.label} className="vetham-leadership-poster__footer-item">
                <span aria-hidden="true">{item.icon}</span>
                {item.label}
              </span>
            ))}
          </div>
        </footer>
      </div>
    </section>
  );
}
