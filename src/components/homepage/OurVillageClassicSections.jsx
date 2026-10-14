import { Link } from 'react-router-dom';
import { img } from '../../config/images';
import LazyImage from '../LazyImage';

const PROJECTS = [
  {
    image: 'villagePlan',
    title: 'Vethathiri Maharishi Spiritual Village',
    text: 'A peaceful retreat in Marisettipathi Village for meditation, health, and enlightenment near Coimbatore.',
  },
  {
    image: 'construction',
    title: 'Retirement Home for Elders',
    text: 'Building a retirement home where elders are cared for with dignity, love, and spiritual support.',
  },
  {
    image: 'history',
    title: 'Mini Meditation Hall & Gurukul',
    text: 'Mini Meditation Hall inaugurated. Gurukul opened for spiritual learning. Beautiful 3-acre garden.',
  },
];

const HIGHLIGHTS = [
  {
    image: 'history',
    title: 'Our History',
    text: 'Founded in 2017, the Trust has grown from humble beginnings to a vibrant spiritual community.',
  },
  {
    image: 'leader',
    title: 'Guided Leadership',
    text: "Our founders and trustees dedicate their lives to spreading Maharishi's teachings.",
  },
  {
    image: 'villagePlan',
    title: 'Village Plan',
    text: 'A comprehensive plan for meditation halls, gardens, and community spaces.',
  },
];

export default function OurVillageClassicSections() {
  return (
    <div className="our-village-legacy vx-page-content" id="village-projects">
      <section className="vx-split-section sec-pad">
        <div className="auto-container">
          <div className="vx-split-section__grid">
            <div className="vx-split-section__content">
              <div className="sec-title vx-split-section__title">
                <span className="sub-title">Vethathiri Maharishi Village</span>
                <h2>A Divine Spiritual Sanctuary</h2>
              </div>
              <div className="text vx-split-section__text">
                <p>
                  Nestled in Marisettipathi Village near Coimbatore, our spiritual village is being developed as a
                  sanctuary where individuals can immerse in meditation, yoga, and satsang surrounded by nature.
                </p>
                <p>
                  The village features a meditation hall, gurukul, spiritual garden, and plans for a retirement home —
                  all dedicated to World Peace through Individual Peace.
                </p>
              </div>
              <div className="btn-box">
                <Link to="/donate" className="theme-btn-one">
                  <span>Donate Now</span>
                </Link>
              </div>
            </div>
            <div className="vx-split-section__media">
              <figure className="vx-split-section__figure">
                <LazyImage src={img('villageAbout')} alt="Spiritual Village" />
              </figure>
            </div>
          </div>
        </div>
      </section>

      <section className="vx-split-section vx-split-section--soft sec-pad">
        <div className="auto-container">
          <div className="sec-title centred vx-split-section__title">
            <span className="sub-title">Projects</span>
            <h2>Support Our Spiritual Village</h2>
          </div>
          <div className="vx-card-grid vx-card-grid--3">
            {PROJECTS.map((p) => (
              <article key={p.title} className="vx-spirit-card">
                <figure className="vx-spirit-card__media">
                  <LazyImage src={img(p.image)} alt="" />
                </figure>
                <div className="vx-spirit-card__body">
                  <h3>{p.title}</h3>
                  <p>{p.text}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="vx-split-section sec-pad">
        <div className="auto-container">
          <div className="vx-card-grid vx-card-grid--3">
            {HIGHLIGHTS.map((item) => (
              <article key={item.title} className="vx-spirit-card vx-spirit-card--text">
                <figure className="vx-spirit-card__media">
                  <LazyImage src={img(item.image)} alt={item.title} />
                </figure>
                <div className="vx-spirit-card__body">
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
