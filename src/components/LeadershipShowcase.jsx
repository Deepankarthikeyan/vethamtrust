import { Link } from 'react-router-dom';
import { SITE, TEAM } from '../config/site';
import { img } from '../config/images';
import LazyImage from './LazyImage';

function FounderCard({ member, linkToLeadership }) {
  const NameTag = linkToLeadership ? Link : 'span';
  const nameProps = linkToLeadership ? { to: '/leadership' } : {};

  return (
    <article className="vetham-founder-card">
      <figure className="vetham-founder-card__media">
        {linkToLeadership ? (
          <Link to="/leadership" className="vetham-founder-card__media-link">
            <LazyImage src={img(member.image)} alt={member.name} />
          </Link>
        ) : (
          <LazyImage src={img(member.image)} alt={member.name} />
        )}
      </figure>

      <div className="vetham-founder-card__body">
        <p className="vetham-founder-card__meta">
          Spiritual Master <span aria-hidden="true">•</span> {member.role}
        </p>
        <h3 className="vetham-founder-card__name">
          <NameTag {...nameProps} className={linkToLeadership ? 'vetham-founder-card__name-link' : ''}>
            {member.name}
          </NameTag>
        </h3>
        {member.headline ? <p className="vetham-founder-card__tagline">{member.headline}</p> : null}
        {member.bio ? <p className="vetham-founder-card__bio">{member.bio}</p> : null}
        {member.achievements?.length ? (
          <ul className="vetham-founder-card__stats">
            {member.achievements.map((item) => (
              <li key={item.title} className="vetham-founder-card__stat">
                <span className="vetham-founder-card__stat-icon" aria-hidden="true" />
                <div className="vetham-founder-card__stat-text">
                  <strong>{item.title}</strong>
                  <span>{item.subtitle}</span>
                </div>
              </li>
            ))}
          </ul>
        ) : null}
      </div>
    </article>
  );
}

export default function LeadershipShowcase({ linkToLeadership = true, fullPage = false }) {
  return (
    <section
      className={`vetham-leadership-cards sec-pad ${fullPage ? 'vetham-leadership-cards--page' : ''}`}
      aria-label="Vetham Kuzhumam Spiritual Trust Leadership"
    >
      <div className="auto-container">
        <header className="sec-title centred mb_50">
          <span className="sub-title">Leadership</span>
          <h2>Our Founders &amp; <br />Spiritual Masters</h2>
          <p className="vetham-leadership-cards__org">{SITE.name.toUpperCase()}</p>
        </header>

        <div className="vetham-leadership-cards__matrix">
          <div className="vetham-leadership-cards__row" aria-label="Founders row one">
            {TEAM.slice(0, 2).map((member) => (
              <FounderCard key={member.name} member={member} linkToLeadership={linkToLeadership} />
            ))}
          </div>
          <div className="vetham-leadership-cards__row" aria-label="Founders row two">
            {TEAM.slice(2, 4).map((member) => (
              <FounderCard key={member.name} member={member} linkToLeadership={linkToLeadership} />
            ))}
          </div>
        </div>

        {linkToLeadership ? (
          <div className="text-center mt_40">
            <Link to="/leadership" className="theme-btn-two">
              View Full Leadership
            </Link>
          </div>
        ) : null}
      </div>
    </section>
  );
}
