import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { TEAM } from '../config/site';
import { img } from '../config/images';
import LazyImage from './LazyImage';

function LeaderCard({ member, delay, visible, linkToLeadership }) {
  const NameTag = linkToLeadership ? Link : 'div';
  const nameProps = linkToLeadership ? { to: '/leadership' } : {};

  return (
    <article
      className={`vetham-portfolio-card ${visible ? 'is-visible' : ''}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      <div className="vetham-portfolio-card__inner">
        <div className="vetham-portfolio-card__content">
          <p className="vetham-portfolio-card__meta">
            Spiritual Master
            <span aria-hidden="true"> • </span>
            {member.role}
          </p>
          <h3 className="vetham-portfolio-card__name">
            <NameTag {...nameProps}>{member.name}</NameTag>
          </h3>
          {member.headline ? (
            <p className="vetham-portfolio-card__headline">{member.headline}</p>
          ) : null}
          {member.bio ? <p className="vetham-portfolio-card__bio">{member.bio}</p> : null}
          {member.highlights?.length ? (
            <ul className="vetham-portfolio-card__highlights">
              {member.highlights.map((item) => (
                <li key={item}>
                  <span className="vetham-portfolio-card__icon" aria-hidden="true" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          ) : null}
          {member.signature ? (
            <p className="vetham-portfolio-card__signature">{member.signature}</p>
          ) : null}
          <div className="vetham-portfolio-card__footer-line" aria-hidden="true" />
        </div>

        <div className="vetham-portfolio-card__portrait-wrap">
          <div className="vetham-portfolio-card__arc" aria-hidden="true" />
          <div className="vetham-portfolio-card__portrait">
            <figure className="vetham-portfolio-card__image">
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
      { threshold: 0.1, rootMargin: '0px 0px 60px 0px' },
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
              delay={index * 160}
              visible={visible}
              linkToLeadership={linkToLeadership}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
