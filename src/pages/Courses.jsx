import { Link, useLocation } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { SITE } from '../config/site';
import {
  ASHRAM_HOURS,
  COURSE_TYPES,
  INSTRUCTORS,
  MEDITATION_TIMETABLE,
  MENTORS,
  ONLINE_YOGA_TAMIL,
  TESTIMONIALS,
  WHATSAPP_GROUP,
  YOGA_REGISTRATION_FORM,
} from '../config/courses';
import { img } from '../config/images';
import PageTitle from '../components/PageTitle';
import LazyImage from '../components/LazyImage';

export default function Courses() {
  const { pathname } = useLocation();
  const isServices = pathname === '/services';
  const pageTitle = isServices ? 'Services' : 'Courses';

  return (
    <>
      <Helmet>
        <title>{pageTitle} – {SITE.name}</title>
      </Helmet>
      <PageTitle title={pageTitle} crumbs={[pageTitle]} />

      <section className="about-section sec-pad">
        <div className="auto-container">
          <div className="sec-title centred mb_50">
            <span className="sub-title">Open your mind</span>
            <h2>Join hands with Vetham Kuzhumam Spiritual Group</h2>
            <p>Finding inner peace through spiritual practices</p>
          </div>
          <div className="row clearfix">
            {COURSE_TYPES.map((course, i) => (
              <div key={course.title} className="col-lg-3 col-md-6 col-sm-12 service-block">
                <div className="service-block-one wow fadeInUp animated" data-wow-delay={`${i * 150}ms`} data-wow-duration="1500ms">
                  <div className="inner-box centred">
                    <div className="icon-box">
                      <div className="icon"><i className={course.icon} /></div>
                    </div>
                    <h3>{course.title}</h3>
                    <p>{course.text}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="about-section sec-pad bg-color-1">
        <div className="auto-container">
          <div className="row clearfix">
            <div className="col-lg-6 col-md-12 col-sm-12">
              <div className="sec-title mb_30">
                <span className="sub-title">Meditation Time</span>
                <h2>Ashram Schedule</h2>
              </div>
              <p>
                Ashram will be in operation on a daily basis but spiritual classes and Satsang&apos;s
                will be scheduled as per the calendar days of convenience.
              </p>
              <ul className="village-highlight-list">
                {ASHRAM_HOURS.map((line) => (
                  <li key={line}>{line}</li>
                ))}
              </ul>
            </div>
            <div className="col-lg-6 col-md-12 col-sm-12">
              <div className="sec-title mb_30">
                <span className="sub-title">Free Online Yoga</span>
                <h2>Our Online Meditation Sessions are a great way to start your day</h2>
              </div>
              {ONLINE_YOGA_TAMIL.map((line) => (
                <p key={line} className="vetham-event-tamil">{line}</p>
              ))}
              <a
                href={YOGA_REGISTRATION_FORM}
                target="_blank"
                rel="noopener noreferrer"
                className="theme-btn-one"
              >
                <span>Submit Your Details for Free Online Yoga Class Registration</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="about-section sec-pad">
        <div className="auto-container">
          <div className="sec-title centred mb_50">
            <span className="sub-title">Meditation (Thavam) Time Table</span>
            <h2>Weekly Schedule</h2>
            <p><small>For Mobile users: Enable Auto-rotate to view the time table</small></p>
          </div>
          <div className="meditation-timetable">
            <table>
              <thead>
                <tr>
                  {MEDITATION_TIMETABLE.headers.map((header) => (
                    <th key={header}>{header}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {MEDITATION_TIMETABLE.rows.map((row) => (
                  <tr key={row[0]}>
                    {row.map((cell, idx) => (
                      <td key={`${row[0]}-${idx}`}>{cell}</td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section className="about-section sec-pad bg-color-1">
        <div className="auto-container">
          <div className="row clearfix">
            <div className="col-lg-6 col-md-12 col-sm-12">
              <div className="sec-title mb_30">
                <h3>List of Mentors</h3>
              </div>
              <ul className="vetham-name-list">
                {MENTORS.map((name) => (
                  <li key={name}>{name}</li>
                ))}
              </ul>
            </div>
            <div className="col-lg-6 col-md-12 col-sm-12">
              <div className="sec-title mb_30">
                <h3>List of Instructors</h3>
              </div>
              <ul className="vetham-name-list">
                {INSTRUCTORS.map((name) => (
                  <li key={name}>{name}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="testimonial-style-two sec-pad">
        <div className="auto-container">
          <div className="sec-title centred mb_50">
            <span className="sub-title">Testimonials</span>
            <h2>What Our Community Says</h2>
          </div>
          <div className="row clearfix">
            {TESTIMONIALS.map((item) => (
              <div key={item.name} className="col-lg-6 col-md-12 col-sm-12">
                <div className="testimonial-block-one">
                  <div className="inner-box">
                    <figure className="thumb-box">
                      <LazyImage src={img(item.image)} alt={item.name} />
                    </figure>
                    <p>&ldquo;{item.quote}&rdquo;</p>
                    <h3>{item.name}</h3>
                    <span className="designation">{item.location}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="vetham-donate-cta sec-pad bg-color-1 centred">
        <div className="auto-container">
          <div className="sec-title centred mb_40">
            <span className="sub-title">Donate us</span>
            <h2>Your contribution matters</h2>
          </div>
          <div className="vetham-donate-cta-text">
            <p>🌼 Support with Purpose — Your donation helps us nurture spiritual growth, wellness, and compassionate service.</p>
            <p>🙏 Give from the Heart — Join us in building a legacy of peace and wisdom.</p>
            <p>🌿 Donate Today — Be the Light in Someone&apos;s Journey</p>
            <p className="vetham-quote">Swami Vivekananda: &ldquo;It is the giver who is blessed.&rdquo;</p>
          </div>
          <Link to="/donate" className="theme-btn-one"><span>Donate Now</span></Link>
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
