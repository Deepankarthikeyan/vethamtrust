import { Link } from 'react-router-dom';
import { SITE, TEAM } from '../config/site';
import { img } from '../config/images';
import LazyImage from './LazyImage';

function LeaderSpotlight({ member, linkToLeadership }) {
  const NameTag = linkToLeadership ? Link : 'span';
  const nameProps = linkToLeadership ? { to: '/leadership' } : {};

  return (
    <article className="vx-leadership-spotlight">
      <div className="vx-leadership-spotlight__media">
        <div className="vx-leadership-spotlight__frame" aria-hidden="true" />
        <LazyImage src={img(member.portrait || member.image)} alt={member.name} />
      </div>
      <div className="vx-leadership-spotlight__copy">
        <p className="vx-leadership-spotlight__eyebrow">Founding Spiritual Master</p>
        <h3 className="vx-leadership-spotlight__name">
          <NameTag {...nameProps} className={linkToLeadership ? 'vx-leadership__link' : ''}>
            {member.name}
          </NameTag>
        </h3>
        <p className="vx-leadership-spotlight__role">{member.role}</p>
        {member.headline ? <p className="vx-leadership-spotlight__headline">{member.headline}</p> : null}
        {member.bio ? <p className="vx-leadership-spotlight__bio">{member.bio}</p> : null}
        {member.achievements?.length ? (
          <ul className="vx-leadership-spotlight__badges">
            {member.achievements.map((item) => (
              <li key={item.title}>
                <strong>{item.title}</strong>
                <span>{item.subtitle}</span>
              </li>
            ))}
          </ul>
        ) : null}
      </div>
    </article>
  );
}

function LeaderCard({ member, index, linkToLeadership }) {
  const NameTag = linkToLeadership ? Link : 'span';
  const nameProps = linkToLeadership ? { to: '/leadership' } : {};

  return (
    <article className="vx-leadership-card">
      <div className="vx-leadership-card__media">
        <span className="vx-leadership-card__num" aria-hidden="true">
          {String(index + 1).padStart(2, '0')}
        </span>
        <LazyImage src={img(member.portrait || member.image)} alt={member.name} />
      </div>
      <div className="vx-leadership-card__body">
        <p className="vx-leadership-card__role">{member.role}</p>
        <h3 className="vx-leadership-card__name">
          <NameTag {...nameProps} className={linkToLeadership ? 'vx-leadership__link' : ''}>
            {member.name}
          </NameTag>
        </h3>
        {member.headline ? <p className="vx-leadership-card__headline">{member.headline}</p> : null}
        {member.bio ? <p className="vx-leadership-card__bio">{member.bio}</p> : null}
      </div>
    </article>
  );
}

export default function LeadershipShowcase({ linkToLeadership = true, fullPage = false }) {
  const [founder, ...coFounders] = TEAM;

  return (
    <section
      className={`vx-leadership${fullPage ? ' vx-leadership--page' : ''}`}
      aria-label="Vetham Kuzhumam Spiritual Trust Leadership"
    >
      <div className="vx-leadership__bg" aria-hidden="true" />
      <div className="auto-container vx-leadership__container">
        <header className="vx-leadership__head centred">
          <span className="sub-title">Leadership</span>
          <h2>
            Our Founders &amp; <br />Spiritual Masters
          </h2>
          <p className="vx-leadership__org">{SITE.name}</p>
          <p className="vx-leadership__motto">Unified Divine Yoga</p>
        </header>

        {founder ? (
          <LeaderSpotlight member={founder} linkToLeadership={linkToLeadership} />
        ) : null}

        <div className="vx-leadership__grid">
          {coFounders.map((member, index) => (
            <LeaderCard
              key={member.name}
              member={member}
              index={index + 1}
              linkToLeadership={linkToLeadership}
            />
          ))}
        </div>

        <div className="vx-leadership__ribbon">
          <span className="vx-leadership__ribbon-label">Mission</span>
          <p>{SITE.tagline}</p>
        </div>

        {linkToLeadership ? (
          <div className="vx-leadership__cta centred">
            <Link to="/leadership" className="theme-btn-two">
              View Full Leadership
            </Link>
          </div>
        ) : null}
      </div>
    </section>
  );
}
