import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { SITE } from '../config/site';
import { img } from '../config/images';
import CinematicPageHero from '../components/cinematic/CinematicPageHero';
import LeadershipShowcase from '../components/LeadershipShowcase';
import LazyImage from '../components/LazyImage';

export default function About() {
  return (
    <>
      <Helmet>
        <title>About Us – {SITE.name}</title>
      </Helmet>
      <CinematicPageHero title="About Us" crumbs={['About Us']} />

      <div className="vx-page-content">
        <section className="vx-split-section sec-pad">
          <div className="auto-container">
            <div className="vx-split-section__grid">
              <div className="vx-split-section__content">
                <div className="sec-title vx-split-section__title">
                  <span className="sub-title">Our Story &amp; Trust</span>
                  <h2>Building a Legacy of Integrity and Excellence</h2>
                </div>
                <div className="text vx-split-section__text">
                  <p>{SITE.name}, founded in 2017 and inspired by the great yogi Shri Vethathiri Maharishi, is rooted in the timeless vision of &quot;{SITE.tagline}.&quot; Carrying forward his mission, the Trust works to spread his teachings and provide spiritual guidance to seekers from all walks of life.</p>
                  <p>Over the years, the Trust has touched countless lives in Coimbatore and beyond, offering pathways to inner peace, clarity of thought, and harmony in daily living.</p>
                </div>
                <div className="btn-box">
                  <Link to="/contact" className="theme-btn-one">Contact Us</Link>
                </div>
              </div>
              <div className="vx-split-section__media vx-about-collage" aria-hidden="true">
                <figure className="vx-about-collage__primary">
                  <LazyImage src={img('about1')} alt="Community at the spiritual trust" />
                </figure>
                <figure className="vx-about-collage__secondary">
                  <LazyImage src={img('about2')} alt="Meditation hall" />
                </figure>
              </div>
            </div>
          </div>
        </section>

        <section className="vx-split-section vx-split-section--soft sec-pad">
          <div className="auto-container">
            <div className="vx-split-section__grid vx-split-section__grid--reverse">
              <div className="vx-split-section__content">
                <div className="sec-title vx-split-section__title">
                  <span className="sub-title">Our Inspiration</span>
                  <h2>Yogiraj Vethathiri Maharishi</h2>
                </div>
                <div className="text vx-split-section__text">
                  <p>Shri Vethathiri Maharishi dedicated his life to the cause of World Peace through Individual Peace. His teachings on Kundalini Yoga, introspection, and simplified spiritual practices continue to guide millions worldwide.</p>
                  <p>At Vetham Kuzhumam Spiritual Trust, we carry forward his vision by creating spaces for meditation, yoga, and community satsang.</p>
                </div>
              </div>
              <div className="vx-split-section__media">
                <figure className="vx-split-section__figure">
                  <LazyImage src={img('mahaan')} alt="Vethathiri Maharishi" />
                </figure>
              </div>
            </div>
          </div>
        </section>

        <LeadershipShowcase linkToLeadership={false} />
      </div>
    </>
  );
}
