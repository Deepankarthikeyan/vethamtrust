import { Link } from 'react-router-dom';
import { SITE, getLeadershipGrid } from '../config/site';
import { img } from '../config/images';
import LazyImage from './LazyImage';

function FounderTile({ member, linkToLeadership, index }) {
  const NameTag = linkToLeadership ? Link : 'span';
  const nameProps = linkToLeadership ? { to: '/leadership' } : {};

  const portrait = (
    <LazyImage src={img(member.portrait || member.image)} alt={member.name} />
  );

  return (
    <article className="vetham-founder-tile" style={{ '--tile-i': index }}>
      <div className="vetham-founder-tile__portrait-stage">
        <div className="vetham-founder-tile__portrait">
          {linkToLeadership ? (
            <Link to="/leadership" className="vetham-founder-tile__portrait-link">
              {portrait}
            </Link>
          ) : (
            portrait
          )}
          <span className="vetham-founder-tile__portrait-shine" aria-hidden="true" />
          <span className="vetham-founder-tile__portrait-rim" aria-hidden="true" />
        </div>
      </div>

      <div className="vetham-founder-tile__content">
        <p className="vetham-founder-tile__role">
          Spiritual Master <span aria-hidden="true">•</span> {member.role}
        </p>
        <h3 className="vetham-founder-tile__name">
          <NameTag {...nameProps} className={linkToLeadership ? 'vetham-founder-tile__name-link' : ''}>
            {member.name}
          </NameTag>
        </h3>
        {member.headline ? <p className="vetham-founder-tile__headline">{member.headline}</p> : null}
        {member.bio ? <p className="vetham-founder-tile__bio">{member.bio}</p> : null}
        {member.achievements?.length ? (
          <ul className="vetham-founder-tile__stats">
            {member.achievements.map((item) => (
              <li key={item.title} className="vetham-founder-tile__stat">
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

export default function LeadershipShowcase({ linkToLeadership = true, fullPage = false }) {
  const leadershipGrid = getLeadershipGrid();

  return (
    <section
      className={`vetham-founders sec-pad${fullPage ? ' vetham-founders--page' : ''}`}
      aria-label={`${SITE.name} Leadership`}
    >
      <div className="auto-container">
        <header className="sec-title centred mb_50 vetham-founders__head">
          <span className="sub-title">Leadership</span>
          <h2>Our Founders &amp; <br />Spiritual Masters</h2>
          <p className="vetham-founders__org">{SITE.nameUpper}</p>
        </header>

        <div className="vetham-founders__matrix">
          <div className="vetham-founders__row" aria-label="Founders row one">
            {leadershipGrid.slice(0, 2).map((member, index) => (
              <FounderTile
                key={member.name}
                member={member}
                linkToLeadership={linkToLeadership}
                index={index}
              />
            ))}
          </div>
          <div className="vetham-founders__row" aria-label="Founders row two">
            {leadershipGrid.slice(2, 4).map((member, index) => (
              <FounderTile
                key={member.name}
                member={member}
                linkToLeadership={linkToLeadership}
                index={index + 2}
              />
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
