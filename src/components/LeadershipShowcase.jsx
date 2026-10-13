import { Link } from 'react-router-dom';
import { SITE, TEAM } from '../config/site';
import { img } from '../config/images';
import LazyImage from './LazyImage';

function LeadershipPanel({ member, linkToLeadership }) {
  const portraitLeft = member.portraitSide === 'left';
  const NameTag = linkToLeadership ? Link : 'span';
  const nameProps = linkToLeadership ? { to: '/leadership' } : {};

  return (
    <article
      className={`vetham-leadership-panel${portraitLeft ? ' is-portrait-left' : ''}`}
    >
      <div className="vetham-leadership-panel__inner">
        <div className="vetham-leadership-panel__content">
          <p className="vetham-leadership-panel__meta">
            Spiritual Master <span aria-hidden="true">•</span> {member.role}
          </p>
          <h3 className="vetham-leadership-panel__name">
            <NameTag {...nameProps} className={linkToLeadership ? 'vetham-leadership-panel__name-link' : ''}>
              {member.name}
            </NameTag>
          </h3>
          {member.headline ? (
            <p className="vetham-leadership-panel__headline">{member.headline}</p>
          ) : null}
          {member.bio ? <p className="vetham-leadership-panel__bio">{member.bio}</p> : null}
          {member.achievements?.length ? (
            <ul className="vetham-leadership-panel__achievements">
              {member.achievements.map((item) => (
                <li key={item.title} className="vetham-leadership-panel__achievement">
                  <span className="vetham-leadership-panel__achievement-title">{item.title}</span>
                  <span className="vetham-leadership-panel__achievement-sub">{item.subtitle}</span>
                </li>
              ))}
            </ul>
          ) : null}
          <div className="vetham-leadership-panel__footer-line" aria-hidden="true" />
          <p className="vetham-leadership-panel__signature">Vetham Kuzhumam Spiritual Trust</p>
        </div>

        <div className="vetham-leadership-panel__portrait-wrap">
          <div className="vetham-leadership-panel__arc" aria-hidden="true" />
          <figure className="vetham-leadership-panel__portrait vetham-leadership-panel__portrait--pro">
            <div className="vetham-leadership-panel__image">
              {linkToLeadership ? (
                <Link to="/leadership">
                  <LazyImage src={img(member.portrait || member.image)} alt={member.name} />
                </Link>
              ) : (
                <LazyImage src={img(member.portrait || member.image)} alt={member.name} />
              )}
            </div>
          </figure>
        </div>
      </div>
    </article>
  );
}

export default function LeadershipShowcase({ linkToLeadership = true, fullPage = false }) {
  return (
    <section
      className={`vetham-leadership-poster${fullPage ? ' vetham-leadership-poster--page' : ''}`}
      aria-label="Vetham Kuzhumam Spiritual Trust Leadership"
    >
      <div className="vetham-leadership-poster__bg" aria-hidden="true">
        <div className="vetham-leadership-poster__glow" />
        <div className="vetham-leadership-poster__dots" />
        <div className="vetham-leadership-poster__lotus" />
      </div>

      <div className="auto-container vetham-leadership-poster__container">
        <header className="vetham-leadership-poster__header is-visible">
          <p className="vetham-leadership-poster__org-tag">
            <span aria-hidden="true">✦</span> Leadership <span aria-hidden="true">✦</span>
          </p>
          <h2 className="vetham-leadership-poster__title">
            Our Founders &amp; <br />Spiritual Masters
          </h2>
          <p className="vetham-leadership-poster__org">{SITE.name}</p>
          <p className="vetham-leadership-poster__mission">Unified Divine Yoga — guiding seekers with devotion, clarity, and service.</p>
        </header>

        <div className="vetham-leadership-poster__frame">
          <div className="vetham-leadership-poster__grid">
            {TEAM.map((member) => (
              <LeadershipPanel key={member.name} member={member} linkToLeadership={linkToLeadership} />
            ))}
          </div>
        </div>

        <footer className="vetham-leadership-poster__footer is-visible">
          <p className="vetham-leadership-poster__footer-title">{SITE.name}</p>
          <p className="vetham-leadership-poster__footer-tagline">{SITE.tagline}</p>
          <ul className="vetham-leadership-poster__footer-icons" aria-label="Core values">
            <li className="vetham-leadership-poster__footer-item">Peace</li>
            <li className="vetham-leadership-poster__footer-item">Wisdom</li>
            <li className="vetham-leadership-poster__footer-item">Service</li>
            <li className="vetham-leadership-poster__footer-item">Harmony</li>
          </ul>
        </footer>

        {linkToLeadership ? (
          <div className="vetham-leadership-poster__cta-wrap text-center">
            <Link to="/leadership" className="vetham-leadership-poster__cta">
              View Full Leadership
            </Link>
          </div>
        ) : null}
      </div>
    </section>
  );
}
