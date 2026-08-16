import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { BANNERS, SITE } from '../config/site';
import { HOME_BLOG_POSTS } from '../config/blog';
import { img } from '../config/images';
import LazyImage from '../components/LazyImage';
import LeadershipShowcase from '../components/LeadershipShowcase';
import OdometerCounter, { OdometerSection } from '../components/OdometerCounter';

const FEATURES = [
  { icon: 'icon-4', title: 'Yoga & Meditation', text: 'Workshops, meditation sessions, and discourses guiding individuals on a path of self-discovery.', link: '/courses' },
  { icon: 'icon-5', title: 'Spiritual Village', text: 'Building Vethathiri Maharishi Spiritual Village — a peaceful retreat for meditation and enlightenment.', link: '/our-village' },
  { icon: 'icon-6', title: 'Join Satsang', text: 'Connect with the Guru, experience divine love and grace. Join our WhatsApp group for updates.', link: '/contact' },
];

const CAUSES = [
  { image: 'villagePlan', category: 'Village', title: 'Vethathiri Maharishi Spiritual Village', text: 'A peaceful retreat in Marisettipathi Village for meditation, health, and enlightenment.', percent: '60%', left: 'Construction', right: 'Aug 2026 Target' },
  { image: 'construction', category: 'Retirement Home', title: 'Retirement Home for Elders', text: 'Building a retirement home where elders are cared for with dignity, love, and spiritual support.', percent: '40%', left: 'Donate Now', right: 'Give with Heart' },
  { image: 'history', category: 'Meditation Hall', title: 'Mini Meditation Hall & Gurukul', text: 'Mini Meditation Hall inaugurated. Gurukul opened for spiritual learning. Beautiful 3-acre garden.', percent: '100%', left: 'Inaugurated', right: 'Open Daily' },
];

const SERVICES = [
  { icon: 'icon-8', iconBg: 'iconBg1', title: 'Teachings', text: 'Self-realization trainings guiding individuals to understand their true nature beyond body and mind.' },
  { icon: 'icon-9', iconBg: 'iconBg2', title: 'Kundalini', text: 'Youngness Yogic Practices focusing on conserving and channelizing life-force energy for vitality.' },
  { icon: 'icon-10', iconBg: 'iconBg3', title: 'Vinyasa', text: 'Mano Nirvan Kriya — deep relaxation practice to release stress and anxiety at the cellular level.' },
  { icon: 'icon-11', iconBg: 'iconBg4', title: 'Hatha', text: 'Appeasement Sittings providing a safe space for emotional release, healing, and inner calm.' },
];

const GALLERY = [
  { image: 'galleryPreview1', title: 'Foundation Course', tag: 'Foundation Course' },
  { image: 'galleryPreview2', title: 'Foundation Course', tag: 'Foundation Course' },
  { image: 'galleryPreview3', title: 'Event Photos', tag: 'Event Photos' },
  { image: 'galleryPreview4', title: 'Event Photos', tag: 'Event Photos' },
];

const BLOG = HOME_BLOG_POSTS;

const COMMUNITY_STATS = [
  { title: 'People', value: 2, suffix: 'M' },
  { title: 'Mentors', value: 25 },
  { title: 'Community', value: 254 },
  { title: 'Services', value: 10 },
];

export default function Home() {
  return (
    <>
      <Helmet>
        <title>{SITE.name} – Spiritual Teachings & Yoga Centre</title>
        <meta name="description" content={`${SITE.tagline}. Yoga, meditation, and spiritual teachings in Coimbatore.`} />
      </Helmet>

      <section className="banner-section p_relative">
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
                  <p className="p_relative d_block">{slide.text}</p>
                  <div className="btn-box">
                    <Link to={slide.cta.path} className="theme-btn-one"><span>{slide.cta.label}</span></Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="feature-section p_relative sec-pad centred">
        <div className="auto-container">
          <div className="sec-title centred mb_50">
            <span className="sub-title">What We Do</span>
            <h2>Spiritual Growth &amp; <br />Enlightenment in Coimbatore</h2>
          </div>
          <div className="row clearfix">
            {FEATURES.map((f, i) => (
              <div key={f.title} className="col-lg-4 col-md-6 col-sm-12 feature-block">
                <div className={`feature-block-one wow fadeInUp animated`} data-wow-delay={`${i * 300}ms`} data-wow-duration="1500ms">
                  <div className="inner-box">
                    <div className="icon-box"><i className={f.icon} /></div>
                    <h3><Link to={f.link}>{f.title}</Link></h3>
                    <p>{f.text}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="about-section bg-color-1 p_relative sec-pad">
        <div className="auto-container">
          <div className="row align-items-center clearfix">
            <div className="col-lg-6 col-md-12 col-sm-12 content-column">
              <div className="content_block_one">
                <div className="content-box p_relative mr_30">
                  <div className="sec-title mb_40">
                    <span className="sub-title">Our Story &amp; Trust</span>
                    <h2>Building a Legacy of Integrity and Excellence</h2>
                  </div>
                  <div className="text mb_35">
                    <p>{SITE.name}, founded in 2017 and inspired by Yogiraj Vethathiri Maharishi, is dedicated to the vision of &quot;{SITE.tagline}.&quot; The Trust has touched countless lives around the globe, guiding individuals on their spiritual journeys.</p>
                  </div>
                  <div className="inner mb_45">
                    <div className="row clearfix">
                      <div className="col-lg-6 col-md-6 col-sm-12 single-column">
                        <div className="single-item">
                          <div className="upper"><div className="icon-box"><i className="icon-4" /></div><h3>Yoga &amp; Meditation</h3></div>
                          <p>Through yoga, meditation, and holistic teachings for inner peace.</p>
                        </div>
                      </div>
                      <div className="col-lg-6 col-md-6 col-sm-12 single-column">
                        <div className="single-item">
                          <div className="upper"><div className="icon-box"><i className="icon-5" /></div><h3>Spiritual Village</h3></div>
                          <p>A sanctuary for spiritual tranquility and connection with nature.</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="btn-box"><Link to="/contact" className="theme-btn-one">Contact Us</Link></div>
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

      <section className="cause-section sec-pad">
        <div className="auto-container">
          <div className="sec-title centred mb_50">
            <span className="sub-title">Donations</span>
            <h2>Support Our Spiritual Village</h2>
          </div>
          <div className="row clearfix">
            {CAUSES.map((c, i) => (
              <div key={c.title} className="col-lg-4 col-md-6 col-sm-12 cause-block">
                <div className="cause-block-one wow fadeInUp animated" data-wow-delay={`${i * 300}ms`} data-wow-duration="1500ms">
                  <div className="inner-box">
                    <div className="image-box">
                      <figure className="image"><Link to="/our-village"><LazyImage src={img(c.image)} alt="" /></Link></figure>
                      <div className="category"><Link to="/our-village">{c.category}</Link></div>
                    </div>
                    <div className="lower-content">
                      <div className="text">
                        <h3><Link to="/our-village">{c.title}</Link></h3>
                        <p>{c.text}</p>
                      </div>
                      <div className="progress-box">
                        <div className="bar"><div className="bar-inner count-bar" data-percent={c.percent}><div className="count-text">{c.percent}</div></div></div>
                        <div className="donate-text"><h6><span>{c.left}</span></h6><h6><span>{c.right}</span></h6></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="featured-causes">
        <div className="auto-container">
          <div className="sec-title mb_50"><span className="sub-title">Features</span><h2>Featured Causes</h2></div>
          <div className="two-item-carousel owl-carousel owl-theme owl-dots-none nav-style-one">
            {['feature1', 'feature2'].map((key) => (
              <div key={key} className="single-item">
                <div className="inner-box" style={{ backgroundImage: `url(${img(key)})` }}>
                  <div className="text">
                    <span>Spiritual Village</span>
                    <h3>Join The Community <br />For Enlightenment</h3>
                    <button type="button" className="donate-box-btn theme-btn-one">Donate Now</button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="service-section sec-pad bg-color-1 centred">
        <div className="auto-container">
          <div className="sec-title centred mb_50">
            <span className="sub-title">What we do</span>
            <h2>Keeping Our Yoga Centre <br />Running Smoothly</h2>
          </div>
          <div className="row clearfix">
            {SERVICES.map((s, i) => (
              <div key={s.title} className="col-lg-3 col-md-6 col-sm-12 service-block">
                <div className="service-block-one wow fadeInUp animated" data-wow-delay={`${i * 200}ms`} data-wow-duration="1500ms">
                  <div className="inner-box">
                    <div className="icon-box">
                      <div className="icon-bg" style={{ backgroundImage: `url(${img(s.iconBg)})` }} />
                      <div className="icon"><i className={s.icon} /></div>
                    </div>
                    <h3><Link to="/courses">{s.title}</Link></h3>
                    <p>{s.text}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="project-section vetham-gallery-icon-only vetham-home-gallery-section sec-pad">
        <div className="auto-container">
          <div className="sec-title centred mb_50">
            <span className="sub-title">Gallery</span>
            <h2>Spiritual Moments &amp; <br />Community Events</h2>
          </div>
        </div>
        <div className="outer-container">
          <div className="project-carousel vetham-home-gallery-carousel owl-carousel owl-theme owl-dots-none owl-nav-none">
            {GALLERY.map((g) => (
              <div key={g.image} className="project-block-one">
                <div className="inner-box">
                  <figure className="image-box"><LazyImage src={img(g.image)} alt={g.title} /></figure>
                  <div className="content-box">
                    <div className="inner">
                      <div className="view-btn"><a href={img(g.image)} className="lightbox-image" data-fancybox="gallery"><i className="icon-12" /></a></div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <LeadershipShowcase />

      <section className="news-section sec-pad vetham-blog-section vetham-home-blog">
        <div className="auto-container">
          <div className="sec-title centred mb_55">
            <span className="sub-title">The Wisdom Blog</span>
            <h2>Find Valuable Information and Inspiration</h2>
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
