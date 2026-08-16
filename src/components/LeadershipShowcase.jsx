import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { SITE, TEAM } from '../config/site';
import { img } from '../config/images';
import LazyImage from './LazyImage';

export default function LeadershipShowcase({ linkToLeadership = true, fullPage = false }) {
  const sectionRef = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return undefined;

    const reveal = () => setVisible(true);
    if (el.getBoundingClientRect().top < window.innerHeight * 0.92) {
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
      className={`vetham-leadership-images ${fullPage ? 'vetham-leadership-images--page' : ''} ${visible ? 'is-visible' : ''}`}
      aria-label="Vetham Kuzhumam Spiritual Trust Leadership"
    >
      <div className="auto-container">
        <header className="vetham-leadership-images__header">
          <h2 className="vetham-leadership-images__title">{SITE.name.toUpperCase()}</h2>
          <p className="vetham-leadership-images__tagline">
            Spiritual Wisdom <span aria-hidden="true">•</span> Service <span aria-hidden="true">•</span> Harmony{' '}
            <span aria-hidden="true">•</span> World Peace
          </p>
        </header>

        <div className="vetham-leadership-images__grid">
          {TEAM.map((member, index) => {
            const card = (
              <figure className="vetham-leadership-images__card">
                <LazyImage
                  src={img(member.leadershipCard)}
                  alt={`${member.name} – Spiritual Master, ${member.role}`}
                  loading={index < 2 ? 'eager' : 'lazy'}
                />
              </figure>
            );

            return (
              <article
                key={member.name}
                className="vetham-leadership-images__item"
                style={{ transitionDelay: `${120 + index * 100}ms` }}
              >
                {linkToLeadership ? (
                  <Link to="/leadership" className="vetham-leadership-images__link">
                    {card}
                  </Link>
                ) : (
                  card
                )}
              </article>
            );
          })}
        </div>

        {linkToLeadership ? (
          <div className="vetham-leadership-images__cta-wrap">
            <Link to="/leadership" className="vetham-leadership-images__cta">
              View Full Leadership
            </Link>
          </div>
        ) : null}

        <footer className="vetham-leadership-images__footer">
          <p className="vetham-leadership-images__footer-title">{SITE.name.toUpperCase()}</p>
          <p className="vetham-leadership-images__footer-tagline">
            Following the path of wisdom, compassion and world peace
          </p>
        </footer>
      </div>
    </section>
  );
}
