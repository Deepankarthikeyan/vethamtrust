import { Helmet } from 'react-helmet-async';
import { SITE } from '../config/site';
import { img } from '../config/images';
import PageTitle from '../components/PageTitle';
import LazyImage from '../components/LazyImage';

const GALLERY = [
  { image: 'gallery1', title: 'Spiritual Village', tag: 'Village' },
  { image: 'gallery2', title: 'Community Gathering', tag: 'Satsang' },
  { image: 'gallery3', title: 'Yoga Practice', tag: 'Yoga' },
  { image: 'gallery4', title: 'Meditation Hall', tag: 'Meditation' },
  { image: 'gallery5', title: 'Construction Progress', tag: 'Village' },
  { image: 'gallery6', title: 'Spiritual History', tag: 'Heritage' },
  { image: 'villageAbout', title: 'Village Overview', tag: 'Village' },
  { image: 'meditationHall', title: 'Meditation Centre', tag: 'Meditation' },
  { image: 'leader', title: 'Spiritual Leadership', tag: 'Leadership' },
];

export default function SocialMedia() {
  return (
    <>
      <Helmet>
        <title>Social Media & Gallery – {SITE.name}</title>
      </Helmet>
      <PageTitle title="Social Media" crumbs={['Social Media']} />

      <section className="gallery-section sec-pad">
        <div className="auto-container">
          <div className="sec-title centred mb_50">
            <span className="sub-title">Gallery</span>
            <h2>Moments from Our Spiritual Journey</h2>
          </div>
          <div className="row clearfix">
            {GALLERY.map((g) => (
              <div key={g.title} className="col-lg-4 col-md-6 col-sm-12 gallery-block">
                <div className="project-block-one">
                  <div className="inner-box">
                    <figure className="image-box"><LazyImage src={img(g.image)} alt={g.title} /></figure>
                    <div className="content-box">
                      <div className="inner">
                        <div className="view-btn">
                          <a href={img(g.image)} className="lightbox-image" data-fancybox="gallery"><i className="icon-12" /></a>
                        </div>
                        <h3>{g.title}</h3>
                        <p>{g.tag}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="contact-info-section bg-color-1 centred sec-pad">
        <div className="auto-container">
          <div className="sec-title centred mb_40">
            <span className="sub-title">Follow Us</span>
            <h2>Connect on Social Media</h2>
          </div>
          <ul className="social-links clearfix centred" style={{ justifyContent: 'center', display: 'flex', gap: '20px' }}>
            <li><a href={SITE.social.facebook} target="_blank" rel="noopener noreferrer" className="theme-btn-one"><i className="fab fa-facebook-f" /> Facebook</a></li>
            <li><a href={SITE.social.instagram} target="_blank" rel="noopener noreferrer" className="theme-btn-one"><i className="fab fa-instagram" /> Instagram</a></li>
            <li><a href={SITE.social.youtube} target="_blank" rel="noopener noreferrer" className="theme-btn-one"><i className="fab fa-youtube" /> YouTube</a></li>
          </ul>
        </div>
      </section>
    </>
  );
}
