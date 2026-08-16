import { Link } from 'react-router-dom';
import { SITE, TEAM } from '../config/site';
import { img } from '../config/images';
import LazyImage from './LazyImage';

function LeaderCard({ member, linkToLeadership }) {
  const portraitLeft = member.portraitSide === 'left';
  const NameTag = linkToLeadership ? Link : 'div';
  const nameProps = linkToLeadership ? { to: '/leadership' } : {};

  const textCol = (
    <div className="col-md-5 vetham-leader-card__text">
      <p className="vetham-leader-card__meta">
        Spiritual Master <span aria-hidden="true">•</span> {member.role}
      </p>
      <h3 className="vetham-leader-card__name">
        <NameTag {...nameProps}>{member.name}</NameTag>
      </h3>
      {member.headline ? <p className="vetham-leader-card__tagline">{member.headline}</p> : null}
      {member.bio ? <p className="vetham-leader-card__bio">{member.bio}</p> : null}
      {member.achievements?.length ? (
        <div className="vetham-leader-card__stats">
          {member.achievements.map((item) => (
            <div key={item.title} className="vetham-leader-card__stat">
              <span className="vetham-leader-card__stat-icon" aria-hidden="true" />
              <div>
                <strong>{item.title}</strong>
                <span>{item.subtitle}</span>
              </div>
            </div>
          ))}
        </div>
      ) : null}
    </div>
  );

  const portraitCol = (
    <div className="col-md-7 vetham-leader-card__portrait-col">
      <div className="vetham-leader-card__portrait-wrap">
        <div className="vetham-leader-card__arc" aria-hidden="true" />
        <figure className="vetham-leader-card__portrait">
          {linkToLeadership ? (
            <Link to="/leadership"><LazyImage src={img(member.portrait)} alt={member.name} /></Link>
          ) : (
            <LazyImage src={img(member.portrait)} alt={member.name} />
          )}
        </figure>
      </div>
    </div>
  );

  return (
    <div className="col-lg-6 col-12">
      <article className={`card vetham-leader-card h-100 ${portraitLeft ? 'is-portrait-left' : ''}`}>
        <div className="row g-0 h-100">
          {portraitLeft ? (
            <>
              {portraitCol}
              {textCol}
            </>
          ) : (
            <>
              {textCol}
              {portraitCol}
            </>
          )}
        </div>
      </article>
    </div>
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

        <div className="row g-5">
          {TEAM.map((member) => (
            <LeaderCard key={member.name} member={member} linkToLeadership={linkToLeadership} />
          ))}
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
