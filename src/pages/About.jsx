import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { SITE, TEAM } from '../config/site';
import { img } from '../config/images';
import PageTitle from '../components/PageTitle';
import LazyImage from '../components/LazyImage';

export default function About() {
  return (
    <>
      <Helmet>
        <title>About Us – {SITE.name}</title>
      </Helmet>
      <PageTitle title="About Us" crumbs={['About Us']} />

      <section className="about-section p_relative sec-pad">
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
                    <p>{SITE.name}, founded in 2017 and inspired by the great yogi Shri Vethathiri Maharishi, is rooted in the timeless vision of &quot;{SITE.tagline}.&quot; Carrying forward his mission, the Trust works to spread his teachings and provide spiritual guidance to seekers from all walks of life.</p>
                    <p>Over the years, the Trust has touched countless lives in Coimbatore and beyond, offering pathways to inner peace, clarity of thought, and harmony in daily living.</p>
                  </div>
                  <div className="btn-box"><Link to="/contact" className="theme-btn-one">Contact Us</Link></div>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-md-12 col-sm-12 image-column">
              <div className="image_block_one">
                <div className="image-box p_relative d_block ml_40">
                  <figure className="image image-1"><LazyImage src={img('about1')} alt="Community" /></figure>
                  <figure className="image image-2"><LazyImage src={img('about2')} alt="Meditation Hall" /></figure>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="about-section bg-color-1 p_relative sec-pad">
        <div className="auto-container">
          <div className="row align-items-center clearfix">
            <div className="col-lg-6 col-md-12 col-sm-12 image-column">
              <figure className="image"><LazyImage src={img('mahaan')} alt="Vethathiri Maharishi" /></figure>
            </div>
            <div className="col-lg-6 col-md-12 col-sm-12 content-column">
              <div className="sec-title mb_40">
                <span className="sub-title">Our Inspiration</span>
                <h2>Yogiraj Vethathiri Maharishi</h2>
              </div>
              <div className="text">
                <p>Shri Vethathiri Maharishi dedicated his life to the cause of World Peace through Individual Peace. His teachings on Kundalini Yoga, introspection, and simplified spiritual practices continue to guide millions worldwide.</p>
                <p>At Vetham Kuzhumam Spiritual Trust, we carry forward his vision by creating spaces for meditation, yoga, and community satsang.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="team-section sec-pad centred">
        <div className="auto-container">
          <div className="sec-title centred mb_50">
            <span className="sub-title">Leadership</span>
            <h2>Our Trustees</h2>
          </div>
          <div className="row clearfix">
            {TEAM.map((member) => (
              <div key={member.name} className="col-lg-3 col-md-6 col-sm-12 team-block">
                <div className="team-block-one">
                  <div className="inner-box">
                    <div className="image-box">
                      <figure className="image"><LazyImage src={img(member.image)} alt={member.name} /></figure>
                    </div>
                    <div className="lower-content">
                      <h3>{member.name}</h3>
                      <span className="designation">{member.role}</span>
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
