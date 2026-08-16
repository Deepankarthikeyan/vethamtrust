import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { TEAM } from '../config/site';
import { img } from '../config/images';
import LazyImage from './LazyImage';

function LeaderCard({ member, reverse, delay, visible, linkToLeadership }) {
  const NameTag = linkToLeadership ? Link : 'div';
  const nameProps = linkToLeadership ? { to: '/leadership' } : {};

  return (
    <article
      className={`vetham-leader-card ${reverse ? 'is-reverse' : ''} ${visible ? 'is-visible' : ''}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      <div className="vetham-leader-card__glow" aria-hidden="true" />
      <div className="vetham-leader-card__content">
        <span className="vetham-leader-card__eyebrow">Spiritual Master</span>
        <h3 className="vetham-leader-card__name">
          <NameTag {...nameProps}>{member.name}</NameTag>
        </h3>
        <p className="vetham-leader-card__role">{member.role}</p>
        {member.tagline ? <p className="vetham-leader-card__tagline">{member.tagline}</p> : null}
      </div>
      <div className="vetham-leader-card__visual">
        <div className="vetham-leader-card__orbit" aria-hidden="true" />
        <div className="vetham-leader-card__ring">
          <figure className="vetham-leader-card__image">
            {linkToLeadership ? (
              <Link to="/leadership"><LazyImage src={img(member.image)} alt={member.name} /></Link>
            ) : (
              <LazyImage src={img(member.image)} alt={member.name} />
            )}
          </figure>
        </div>
      </div>
    </article>
  );
}

export default function LeadershipShowcase({ showHeader = true, linkToLeadership = true }) {
  const sectionRef = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return undefined;

    const reveal = () => setVisible(true);
    const isInView = () => {
      const rect = el.getBoundingClientRect();
      return rect.top < window.innerHeight * 0.9 && rect.bottom > 0;
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
      { threshold: 0.12, rootMargin: '0px 0px 60px 0px' },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className={`vetham-leadership-showcase sec-pad ${visible ? 'is-visible' : ''}`}
    >
      <div className="vetham-leadership-showcase__bg" aria-hidden="true" />
      <div className="auto-container">
        {showHeader ? (
          <div className="sec-title centred mb_55 vetham-leadership-showcase__header">
            <span className="sub-title">Leadership</span>
            <h2>Our Founders &amp; <br />Spiritual Masters</h2>
          </div>
        ) : null}
        <div className="vetham-leadership-grid">
          {TEAM.map((member, index) => (
            <LeaderCard
              key={member.name}
              member={member}
              reverse={index % 2 === 1}
              delay={index * 140}
              visible={visible}
              linkToLeadership={linkToLeadership}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
