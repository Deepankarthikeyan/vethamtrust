import { Link } from 'react-router-dom';
import { SITE, TEAM } from '../../config/site';
import { img } from '../../config/images';
import LazyImage from '../LazyImage';

function TrusteeCard({ member, index }) {
  return (
    <article className="vp-trustee-card" data-reveal="fade-up" style={{ transitionDelay: `${index * 100}ms` }}>
      <div className="vp-trustee-card__media">
        <LazyImage src={img(member.image)} alt={member.name} />
        <div className="vp-trustee-card__overlay">
          <span className="vp-trustee-card__role">{member.role}</span>
        </div>
      </div>
      <div className="vp-trustee-card__body">
        <h3 className="vp-trustee-card__name">{member.name}</h3>
        {member.headline ? <p className="vp-trustee-card__headline">{member.headline}</p> : null}
        {member.bio ? <p className="vp-trustee-card__bio">{member.bio}</p> : null}
        {member.achievements?.length ? (
          <ul className="vp-trustee-card__achievements">
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

export default function PremiumLeadership({ linkToLeadership = true }) {
  return (
    <section className="vp-section vp-leadership" aria-label="Leadership">
      <div className="auto-container">
        <header className="vp-section__head centred" data-reveal="fade-up">
          <span className="vp-eyebrow">Leadership</span>
          <h2 className="vp-section__title">Our Founders &amp; <br />Spiritual Masters</h2>
          <p className="vp-section__subtitle">{SITE.name.toUpperCase()}</p>
        </header>

        <div className="vp-trustee-grid">
          {TEAM.map((member, index) => (
            <TrusteeCard key={member.name} member={member} index={index} />
          ))}
        </div>

        {linkToLeadership ? (
          <div className="vp-section__cta centred" data-reveal="fade-up">
            <Link to="/leadership" className="vp-btn vp-btn--outline">
              <span>View Full Leadership</span>
              <i className="fas fa-arrow-right" aria-hidden="true" />
            </Link>
          </div>
        ) : null}
      </div>
    </section>
  );
}
