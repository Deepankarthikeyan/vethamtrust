import { Link } from 'react-router-dom';
import { HOME_PROGRAMS } from '../../config/homeCinematic';

export default function ProgramsSection() {
  return (
    <section id="cin-programs" className="cin-programs">
      <div className="cin-programs__header">
        <p className="cin-section-label">Programs &amp; Services</p>
        <h2>Paths to inner awakening</h2>
        <p className="cin-programs__lead">
          Editorial experiences — not conventional cards. Hover to discover each practice.
        </p>
      </div>
      <div className="cin-programs__grid">
        {HOME_PROGRAMS.map((program, i) => (
          <Link
            key={program.title}
            to={program.path}
            className="cin-program-card"
            data-cursor="VIEW"
            style={{ '--cin-offset': i % 2 ? '2.5rem' : '0' }}
          >
            <div className="cin-program-card__media" style={{ backgroundImage: `url(${program.image})` }} />
            <div className="cin-program-card__overlay" />
            <div className="cin-program-card__body">
              <span className="cin-program-card__cat">{program.category}</span>
              <h3>{program.title}</h3>
              <p>{program.excerpt}</p>
              <span className="cin-program-card__link">Explore <i aria-hidden="true" /></span>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
