import { Helmet } from 'react-helmet-async';
import { SITE } from '../config/site';
import { img } from '../config/images';
import PageTitle from '../components/PageTitle';
import LazyImage from '../components/LazyImage';

const PROJECTS = [
  { image: 'villagePlan', title: 'Vethathiri Maharishi Spiritual Village', text: 'A peaceful retreat in Marisettipathi Village for meditation, health, and enlightenment near Coimbatore.', percent: '60%' },
  { image: 'construction', title: 'Retirement Home for Elders', text: 'Building a retirement home where elders are cared for with dignity, love, and spiritual support.', percent: '40%' },
  { image: 'history', title: 'Mini Meditation Hall & Gurukul', text: 'Mini Meditation Hall inaugurated. Gurukul opened for spiritual learning. Beautiful 3-acre garden.', percent: '100%' },
];

export default function OurVillage() {
  return (
    <>
      <Helmet>
        <title>Our Village – {SITE.name}</title>
      </Helmet>
      <PageTitle title="Our Village" crumbs={['Our Village']} />

      <section className="about-section p_relative sec-pad">
        <div className="auto-container">
          <div className="row align-items-center clearfix">
            <div className="col-lg-6 col-md-12 col-sm-12 content-column">
              <div className="sec-title mb_40">
                <span className="sub-title">Vethathiri Maharishi Village</span>
                <h2>A Divine Spiritual Sanctuary</h2>
              </div>
              <div className="text mb_35">
                <p>Nestled in Marisettipathi Village near Coimbatore, our spiritual village is being developed as a sanctuary where individuals can immerse in meditation, yoga, and satsang surrounded by nature.</p>
                <p>The village features a meditation hall, gurukul, spiritual garden, and plans for a retirement home — all dedicated to World Peace through Individual Peace.</p>
              </div>
              <div className="btn-box">
                <button type="button" className="donate-box-btn theme-btn-one"><span>Donate Now</span></button>
              </div>
            </div>
            <div className="col-lg-6 col-md-12 col-sm-12 image-column">
              <figure className="image"><LazyImage src={img('villageAbout')} alt="Spiritual Village" /></figure>
            </div>
          </div>
        </div>
      </section>

      <section className="cause-section sec-pad">
        <div className="auto-container">
          <div className="sec-title centred mb_50">
            <span className="sub-title">Projects</span>
            <h2>Support Our Spiritual Village</h2>
          </div>
          <div className="row clearfix">
            {PROJECTS.map((p) => (
              <div key={p.title} className="col-lg-4 col-md-6 col-sm-12 cause-block">
                <div className="cause-block-one">
                  <div className="inner-box">
                    <div className="image-box">
                      <figure className="image"><LazyImage src={img(p.image)} alt="" /></figure>
                    </div>
                    <div className="lower-content">
                      <div className="text">
                        <h3>{p.title}</h3>
                        <p>{p.text}</p>
                      </div>
                      <div className="progress-box">
                        <div className="bar"><div className="bar-inner count-bar" data-percent={p.percent}><div className="count-text">{p.percent}</div></div></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="about-section bg-color-1 sec-pad">
        <div className="auto-container">
          <div className="row clearfix">
            <div className="col-lg-4 col-md-6 col-sm-12">
              <LazyImage src={img('history')} alt="History" />
              <h3 className="mt_20">Our History</h3>
              <p>Founded in 2017, the Trust has grown from humble beginnings to a vibrant spiritual community.</p>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12">
              <LazyImage src={img('leader')} alt="Leadership" />
              <h3 className="mt_20">Guided Leadership</h3>
              <p>Our founders and trustees dedicate their lives to spreading Maharishi&apos;s teachings.</p>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12">
              <LazyImage src={img('villagePlan')} alt="Village Plan" />
              <h3 className="mt_20">Village Plan</h3>
              <p>A comprehensive plan for meditation halls, gardens, and community spaces.</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
