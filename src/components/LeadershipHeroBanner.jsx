import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { SITE, TEAM } from '../config/site';
import { img } from '../config/images';
import LazyImage from './LazyImage';

const FOOTER_ITEMS = [
  { icon: '🪷', label: 'Spiritual Wisdom' },
  { icon: '🧘', label: 'Meditation' },
  { icon: '🤝', label: 'Service' },
  { icon: '🌍', label: 'World Peace' },
];

function LeaderPortrait({ member, featured, delay, visible }) {
  return (
    <article
      className={`vetham-hero-leader ${featured ? 'is-featured' : ''} ${visible ? 'is-visible' : ''}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      <div className="vetham-hero-leader__frame">
        <div className="vetham-hero-leader__halo" aria-hidden="true" />
        <figure className="vetham-hero-leader__photo">
          <LazyImage src={img(member.image)} alt={member.name} />
        </figure>
      </div>
      <div className="vetham-hero-leader__card">
        <p className="vetham-hero-leader__meta">Spiritual Master • {member.role}</p>
        {member.headline ? <p className="vetham-hero-leader__headline">{member.headline}</p> : null}
        <h3 className="vetham-hero-leader__name">{member.name}</h3>
        {member.bio ? <p className="vetham-hero-leader__bio">{member.bio}</p> : null}
        {member.highlights?.length ? (
          <ul className="vetham-hero-leader__highlights">
            {member.highlights.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        ) : null}
      </div>
    </article>
  );
}

export default function LeadershipHeroBanner({ linkToLeadership = true }) {
  const sectionRef = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return undefined;

    const reveal = () => setVisible(true);
    const isInView = () => {
      const rect = el.getBoundingClientRect();
      return rect.top < window.innerHeight * 0.95;
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
      { threshold: 0.08 },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className={`vetham-leadership-hero ${visible ? 'is-visible' : ''}`}
      aria-label="Vetham Kuzhumam Spiritual Trust Leadership"
    >
      <div className="vetham-leadership-hero__bg" aria-hidden="true">
        <div className="vetham-leadership-hero__sunrise" />
        <div className="vetham-leadership-hero__glow" />
        <div className="vetham-leadership-hero__lotus" />
        <div className="vetham-leadership-hero__pattern" />
        <div className="vetham-leadership-hero__particles" />
        <div className="vetham-leadership-hero__temple" />
      </div>

      <div className="vetham-leadership-hero__inner auto-container">
        <header className={`vetham-leadership-hero__intro ${visible ? 'is-visible' : ''}`}>
          <p className="vetham-leadership-hero__eyebrow">Leadership • Spiritual Masters • Trustees</p>
          <h2 className="vetham-leadership-hero__title">{SITE.name.toUpperCase()}</h2>
          <p className="vetham-leadership-hero__tagline">Guiding Souls. Building Peace.</p>
          <p className="vetham-leadership-hero__mission">
            Dedicated to spreading the teachings of Yogiraj Vethathiri Maharishi and creating a path
            of spiritual growth, service, harmony and world peace.
          </p>
          {linkToLeadership ? (
            <Link to="/leadership" className="vetham-leadership-hero__cta">Meet Our Founders</Link>
          ) : null}
        </header>

        <div className="vetham-leadership-hero__leaders">
          {TEAM.map((member, index) => (
            <LeaderPortrait
              key={member.name}
              member={member}
              featured={index === 0}
              delay={180 + index * 120}
              visible={visible}
            />
          ))}
        </div>

        <footer className={`vetham-leadership-hero__footer ${visible ? 'is-visible' : ''}`}>
          <div className="vetham-leadership-hero__footer-title">{SITE.name.toUpperCase()}</div>
          <div className="vetham-leadership-hero__footer-tagline">
            Spirituality • Service • Wisdom • World Peace
          </div>
          <div className="vetham-leadership-hero__footer-icons">
            {FOOTER_ITEMS.map((item) => (
              <span key={item.label} className="vetham-leadership-hero__footer-item">
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
