import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { SITE } from '../config/site';
import {
  ASHRAM_HOURS,
  PAST_EVENTS,
  UPCOMING_EVENTS,
  WHATSAPP_GROUP,
} from '../config/events';
import PageTitle from '../components/PageTitle';

export default function Events() {
  return (
    <>
      <Helmet>
        <title>Events – {SITE.name}</title>
      </Helmet>
      <PageTitle title="Events" crumbs={['Events']} />

      <section className="vetham-events-section sec-pad">
        <div className="auto-container">
          <div className="vetham-events-empty centred mb_50">
            <span className="sub-title">Calendar</span>
            <h2>Upcoming Events</h2>
            <p className="vetham-events-empty-note">0 events found in the selected date range.</p>
          </div>

          <div className="row clearfix">
            {UPCOMING_EVENTS.map((event) => (
              <div key={event.id} className="col-lg-6 col-md-12 col-sm-12">
                <article className="vetham-event-card" style={{ '--event-accent': event.accent }}>
                  <div className="vetham-event-card-top">
                    <span className="vetham-event-badge">{event.badge}</span>
                    <div className="vetham-event-icon"><i className={event.icon} /></div>
                  </div>
                  <h3>{event.title}</h3>
                  <p className="vetham-event-period">{event.period}</p>
                  <p>{event.description}</p>
                  {event.tamil && <p className="vetham-event-tamil">{event.tamil}</p>}
                  <Link to={event.cta.path} className="theme-btn-one">
                    <span>{event.cta.label}</span>
                  </Link>
                </article>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="vetham-events-section sec-pad bg-color-1">
        <div className="auto-container">
          <div className="sec-title centred mb_50">
            <span className="sub-title">Latest Past Events</span>
            <h2>Spiritual Gatherings &amp; Programs</h2>
          </div>
          <div className="row clearfix">
            {PAST_EVENTS.map((event) => (
              <div key={event.id} className="col-lg-12 col-md-12 col-sm-12">
                <article className="vetham-event-card vetham-event-card-past" style={{ '--event-accent': event.accent }}>
                  <div className="vetham-event-card-top">
                    <span className="vetham-event-badge vetham-event-badge-past">{event.badge}</span>
                    <div className="vetham-event-icon"><i className={event.icon} /></div>
                  </div>
                  <h3>{event.title}</h3>
                  {event.date && <p className="vetham-event-period">{event.date}</p>}
                  <p>{event.description}</p>
                  {event.details && <p className="vetham-event-tamil">{event.details}</p>}
                </article>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="about-section sec-pad">
        <div className="auto-container">
          <div className="sec-title centred mb_40">
            <span className="sub-title">Meditation Time</span>
            <h2>Ashram Operating Hours</h2>
          </div>
          <div className="vetham-ashram-hours centred">
            <ul className="village-highlight-list">
              {ASHRAM_HOURS.map((line) => (
                <li key={line}>{line}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="cta-style-two">
        <div className="auto-container">
          <div className="inner-box centred">
            <h2>
              Journey to enlightenment:
              <br />
              We invite you to experience divine love and grace
            </h2>
            <div className="btn-box">
              <a href={WHATSAPP_GROUP} className="theme-btn-one" target="_blank" rel="noopener noreferrer">
                <span>Join our WhatsApp Group</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
