import { Link } from 'react-router-dom';
import { HOME_EVENTS } from '../../config/homeCinematic';
import MagneticButton from './MagneticButton';

export default function EventsSection() {
  return (
    <section id="cin-events" className="cin-events">
      <div className="cin-events__layout">
        <div className="cin-events__sticky">
          <p className="cin-section-label">Events</p>
          <h2>Upcoming Events &amp; Programs</h2>
          <p className="cin-events__lead">
            Courses, satsang, and gatherings — scroll through what awaits you.
          </p>
          <MagneticButton to="/events" className="cin-btn--ghost">
            View All Events
          </MagneticButton>
        </div>
        <div className="cin-events__list">
          {HOME_EVENTS.map((event) => (
            <article key={event.title} className="cin-event-card" data-cursor="VIEW">
              <span className="cin-event-card__badge">{event.badge}</span>
              <time>{event.date}</time>
              <h3>{event.title}</h3>
              <p>{event.description}</p>
              <Link to={event.path} className="cin-event-card__cta">
                {event.cta} <i aria-hidden="true" />
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
