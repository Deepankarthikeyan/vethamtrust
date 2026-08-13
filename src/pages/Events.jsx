import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { SITE } from '../config/site';
import PageTitle from '../components/PageTitle';

const EVENTS = [
  { date: '15', month: 'AUG', title: 'Monthly Satsang', location: 'Meditation Hall, Marisettipathi' },
  { date: '22', month: 'AUG', title: 'Kundalini Yoga Workshop', location: 'Vetham Spiritual Centre' },
  { date: '05', month: 'SEP', title: 'World Peace Day Celebration', location: 'Spiritual Village' },
  { date: '12', month: 'SEP', title: 'Introspection Training', location: 'Gurukul, Marisettipathi' },
];

export default function Events() {
  return (
    <>
      <Helmet>
        <title>Events – {SITE.name}</title>
      </Helmet>
      <PageTitle title="Events" crumbs={['Events']} />

      <section className="news-section sec-pad">
        <div className="auto-container">
          <div className="sec-title centred mb_55">
            <span className="sub-title">Past Events</span>
            <h2>Spiritual Programs &amp; Satsangs</h2>
          </div>
          <div className="row clearfix">
            {EVENTS.map((event) => (
              <div key={event.title} className="col-lg-6 col-md-12 col-sm-12 news-block">
                <div className="news-block-one">
                  <div className="inner-box">
                    <div className="lower-content p_relative d_block">
                      <div className="text">
                        <div className="post-date"><h3>{event.date} <span>{event.month}</span></h3></div>
                        <h3>{event.title}</h3>
                        <p><i className="icon-20" /> {event.location}</p>
                        <div className="btn-box"><Link to="/contact" className="theme-btn-two">Register</Link></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
