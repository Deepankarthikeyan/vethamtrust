import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { BANNERS, SITE } from '../config/site';
import { HOME_BLOG_POSTS } from '../config/blog';
import { ASHRAM_HOURS, UPCOMING_EVENTS, WHATSAPP_GROUP } from '../config/events';
import {
  HOME_ABOUT_TEXT,
  HOME_BOOK_TOUR,
  HOME_DONATION,
  HOME_HAVEN_TEXT,
  HOME_MENTOR,
  HOME_SANCTUARY_WHO,
  HOME_SANCTUARY_WHY,
  HOME_VILLAGE_DETAILS,
  HOME_VILLAGE_HIGHLIGHTS,
  HOME_VILLAGE_INTRO,
  HOME_WHAT_WE_DO_TEXT,
} from '../config/homeContent';
import { img } from '../config/images';
import LazyImage from '../components/LazyImage';
import HomeTeamSection from '../components/HomeTeamSection';
import OdometerCounter, { OdometerSection } from '../components/OdometerCounter';
import { loadThemeScripts, reinitThemePlugins } from '../utils/themeInit';

const BLOG = HOME_BLOG_POSTS;

const COMMUNITY_STATS = [
  { title: 'People', value: 2, suffix: 'M' },
  { title: 'Mentors', value: 25 },
  { title: 'Community', value: 254 },
  { title: 'Services', value: 10 },
];

export default function Home() {
  useEffect(() => {
    let active = true;
    (async () => {
      await loadThemeScripts();
      if (active) reinitThemePlugins();
    })();
    return () => {
      active = false;
    };
  }, []);

  return (
    <>
      <Helmet>
        <title>{SITE.name} – Spiritual Teachings & Yoga Centre</title>
        <meta name="description" content={`${SITE.tagline}. Yoga, meditation, and spiritual teachings in Coimbatore.`} />
      </Helmet>

      <section className="banner-section p_relative vetham-home-banner">
        <div className="banner-carousel owl-theme owl-carousel owl-nav-none">
          {BANNERS.map((slide) => (
            <div key={slide.title} className="slide-item p_relative">
              <div className="image-layer p_absolute" style={{ backgroundImage: `url(${img(slide.image)})` }} />
              <div className="shape-1" />
              <div className="shape-2" />
              <div className="auto-container">
                <div className="content-box p_relative d_block z_5">
                  <span className="special-text special_fonts p_relative d_block">{slide.subtitle}</span>
                  <h2 className="p_relative d_block">{slide.title}</h2>
                  {slide.text ? <p className="p_relative d_block">{slide.text}</p> : null}
                  <div className="btn-box">
                    <Link to={slide.cta.path} className="theme-btn-one"><span>{slide.cta.label}</span></Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="about-section bg-color-1 p_relative sec-pad vetham-home-about">
        <div className="auto-container">
          <div className="row align-items-center clearfix">
            <div className="col-lg-6 col-md-12 col-sm-12 content-column">
              <div className="content_block_one">
                <div className="content-box p_relative mr_30">
                  <div className="sec-title mb_40">
                    <span className="sub-title">Building a Legacy of Integrity and Excellence</span>
                    <h2>Our Story &amp; Trust</h2>
                  </div>
                  <div className="text mb_35">
                    <p>{HOME_ABOUT_TEXT}</p>
                  </div>
                  <div className="btn-box"><Link to="/about" className="theme-btn-one">Learn More</Link></div>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-md-12 col-sm-12 image-column">
              <div className="image_block_one">
                <div className="image-box p_relative d_block ml_40">
                  <figure className="image image-1"><LazyImage src={img('about1')} alt="Vetham community" /></figure>
                  <figure className="image image-2"><LazyImage src={img('about2')} alt="Meditation Hall" /></figure>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="about-section sec-pad vetham-home-what-we-do">
        <div className="auto-container">
          <div className="row align-items-center clearfix">
            <div className="col-lg-6 col-md-12 col-sm-12 image-column">
              <figure className="vetham-home-what-we-do__image">
                <LazyImage src={img('mahaan')} alt="Yogiraj Vethathiri Maharishi" />
              </figure>
            </div>
            <div className="col-lg-6 col-md-12 col-sm-12 content-column">
              <div className="sec-title mb_30">
                <h2>What we do</h2>
              </div>
              <div className="text">
                <p>{HOME_WHAT_WE_DO_TEXT}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <HomeTeamSection />

      <section className="about-section bg-color-1 sec-pad vetham-home-village">
        <div className="auto-container">
          <div className="sec-title centred mb_40">
            <h2>Discover Vethathiri Maharishi Spiritual Village</h2>
          </div>
          <div className="text centred vetham-home-village__intro">
            <p>{HOME_VILLAGE_INTRO}</p>
            <p>{HOME_VILLAGE_DETAILS}</p>
          </div>
        </div>
      </section>

      <section className="about-section sec-pad vetham-home-sanctuary">
        <div className="auto-container">
          <div className="sec-title centred mb_50">
            <h2>The Need for a Spiritual Sanctuary</h2>
          </div>
          <div className="row clearfix">
            <div className="col-lg-6 col-md-12 col-sm-12">
              <div className="vetham-home-info-card">
                <h3>Why it is required?</h3>
                <p>{HOME_SANCTUARY_WHY}</p>
              </div>
            </div>
            <div className="col-lg-6 col-md-12 col-sm-12">
              <div className="vetham-home-info-card">
                <h3>Who can take part in this?</h3>
                <p>{HOME_SANCTUARY_WHO}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="about-section bg-color-1 sec-pad vetham-home-haven">
        <div className="auto-container">
          <div className="sec-title centred mb_30">
            <h2>A Haven for Spiritual Growth</h2>
          </div>
          <div className="text centred">
            <p>{HOME_HAVEN_TEXT}</p>
          </div>
        </div>
      </section>

      <section className="about-section sec-pad vetham-home-highlights">
        <div className="auto-container">
          <div className="sec-title centred mb_40">
            <h2>Village Highlights</h2>
          </div>
          <ul className="vetham-home-highlights__list">
            {HOME_VILLAGE_HIGHLIGHTS.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
          <div className="text-center mt_30">
            <Link to="/our-village" className="theme-btn-one">Visit Our Village for More Details</Link>
          </div>
        </div>
      </section>

      <section className="cause-section sec-pad vetham-home-donation">
        <div className="auto-container">
          <div className="sec-title centred mb_40">
            <span className="sub-title">Donations</span>
            <h2>{HOME_DONATION.title}</h2>
          </div>
          <div className="vetham-home-donation__box centred">
            <p className="vetham-home-donation__lead">{HOME_DONATION.lead}</p>
            <p>{HOME_DONATION.text}</p>
            <p className="vetham-home-donation__quote">&ldquo;{HOME_DONATION.quote}&rdquo; — {HOME_DONATION.quoteAuthor}</p>
            <Link to="/donate" className="theme-btn-one">Donate Now</Link>
          </div>
        </div>
      </section>

      <section className="vetham-home-whatsapp sec-pad centred">
        <div className="auto-container">
          <h2>Journey to enlightenment: We invite you to experience divine love and grace</h2>
          <a href={WHATSAPP_GROUP} className="theme-btn-one" target="_blank" rel="noopener noreferrer">Join our WhatsApp Group</a>
        </div>
      </section>

      <section className="about-section sec-pad vetham-home-practical">
        <div className="auto-container">
          <div className="row clearfix">
            <div className="col-lg-4 col-md-12 col-sm-12">
              <div className="vetham-home-practical__card">
                <span className="sub-title">{HOME_MENTOR.eyebrow}</span>
                <h3>{HOME_MENTOR.title}</h3>
                <p><strong>{HOME_MENTOR.name}</strong><br />{HOME_MENTOR.role}</p>
              </div>
            </div>
            <div className="col-lg-4 col-md-12 col-sm-12">
              <figure className="vetham-home-practical__image">
                <LazyImage src={img('meditationHall')} alt="Meditation Hall" />
              </figure>
            </div>
            <div className="col-lg-4 col-md-12 col-sm-12">
              <div className="vetham-home-practical__card">
                <h3>Meditation Time</h3>
                <p>Ashrams will be in operation on a daily basis but spiritual classes and Satsang&apos;s will be scheduled as per the calendar days of convenience.</p>
                <ul>
                  {ASHRAM_HOURS.map((line) => (
                    <li key={line}>{line}</li>
                  ))}
                </ul>
                <h3 className="mt_25">Book a Tour</h3>
                <p>{HOME_BOOK_TOUR}</p>
                <Link to="/contact" className="theme-btn-two">Book a Tour</Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <OdometerSection className="vetham-round-stats sec-pad centred">
        <div className="pattern-layer" style={{ backgroundImage: 'url(/assets/images/shape/shape-2.png)' }} />
        <div className="auto-container">
          <div className="vetham-round-stats-grid">
            {COMMUNITY_STATS.map((stat, index) => (
              <div key={stat.title} className={`vetham-round-stat vetham-round-stat-${index + 1}`}>
                <div className="vetham-round-stat-orbit">
                  <span className="vetham-round-stat-ring" aria-hidden="true" />
                  <span className="vetham-round-stat-ring vetham-round-stat-ring-2" aria-hidden="true" />
                  <div className="vetham-round-stat-circle">
                    <OdometerCounter value={stat.value} suffix={stat.suffix || ''} duration={2000} />
                  </div>
                </div>
                <h3 className="vetham-round-stat-title">{stat.title}</h3>
              </div>
            ))}
          </div>
        </div>
      </OdometerSection>

      <section className="sec-pad centred vetham-home-social">
        <div className="auto-container">
          <div className="sec-title centred mb_40">
            <h2>Follow our Social Media Accounts</h2>
          </div>
          <div className="vetham-home-social__links">
            <a href={SITE.social.youtube} className="theme-btn-one" target="_blank" rel="noopener noreferrer">Subscribe to our YouTube Channel</a>
            <a href={SITE.social.facebook} className="theme-btn-one" target="_blank" rel="noopener noreferrer">Follow us on Facebook</a>
            <a href={SITE.social.instagram} className="theme-btn-one" target="_blank" rel="noopener noreferrer">Follow us on Instagram</a>
          </div>
        </div>
      </section>

      <section className="events-section sec-pad bg-color-1 centred vetham-home-events">
        <div className="auto-container">
          <div className="sec-title centred mb_50">
            <span className="sub-title">calendar</span>
            <h2>Upcoming Events</h2>
          </div>
          <div className="row clearfix">
            {UPCOMING_EVENTS.map((event) => (
              <div key={event.id} className="col-lg-6 col-md-12 col-sm-12">
                <div className="vetham-home-event-card">
                  <h3>{event.title}</h3>
                  <p>{event.period}</p>
                  <p>{event.description}</p>
                  <Link to={event.cta.path} className="theme-btn-two">{event.cta.label}</Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="news-section sec-pad vetham-blog-section vetham-home-blog">
        <div className="auto-container">
          <div className="sec-title centred mb_55">
            <span className="sub-title">the wisdom blog</span>
            <h2>Find valuable information and inspiration in our stories</h2>
          </div>
          <div className="row clearfix">
            {BLOG.map((post, i) => (
              <div key={post.title} className="col-lg-4 col-md-6 col-sm-12 news-block">
                <div className="news-block-one wow fadeInUp animated" data-wow-delay={`${i * 300}ms`} data-wow-duration="1500ms">
                  <div className="inner-box">
                    <figure className="image-box"><Link to="/blog"><LazyImage src={img(post.image)} alt="" /></Link></figure>
                    <div className="lower-content p_relative d_block">
                      <div className="text">
                        <h3><Link to="/blog">{post.title}</Link></h3>
                        <p>{post.text}</p>
                        <div className="btn-box"><Link to="/blog" className="theme-btn-two">Read more</Link></div>
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
