import { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { SITE } from '../config/site';
import { GALLERY_FILTERS, GALLERY_ITEMS, gallerySrc } from '../config/gallery';
import PageTitle from '../components/PageTitle';

export default function SocialMedia() {
  const [filter, setFilter] = useState('all');

  const visible = filter === 'all'
    ? GALLERY_ITEMS
    : GALLERY_ITEMS.filter((item) => item.cat === filter);

  return (
    <>
      <Helmet>
        <title>Social Media & Gallery – {SITE.name}</title>
      </Helmet>
      <PageTitle title="Social Media" crumbs={['Social Media']} />

      <section className="gallery-page-section sec-pad bg-color-1">
        <div className="auto-container">
          <div className="sec-title centred mb_50">
            <span className="sub-title">Photo Gallery</span>
            <h2>Our Spiritual Journey in Pictures</h2>
          </div>
          <div className="vetham-gallery-filters centred mb_40">
            {GALLERY_FILTERS.map((f) => (
              <button
                key={f.key}
                type="button"
                className={`filter-btn${filter === f.key ? ' active' : ''}`}
                onClick={() => setFilter(f.key)}
              >
                {f.label}
              </button>
            ))}
          </div>
          <div className="items-container row clearfix vetham-gallery-grid">
            {visible.map((item) => {
              const src = gallerySrc(item.file);
              return (
                <div
                  key={item.file}
                  className={`col-lg-4 col-md-6 col-sm-12 gallery-item ${item.cat}`}
                  data-category={item.cat}
                >
                  <div className="project-block-one">
                    <div className="inner-box">
                      <figure className="image-box">
                        <a href={src} data-fancybox="vetham-gallery" data-caption={item.title}>
                          <img src={src} alt={item.title} loading="lazy" />
                        </a>
                      </figure>
                      <div className="content-box">
                        <div className="inner">
                          <h3>{item.title}</h3>
                          <p>{item.label}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
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
