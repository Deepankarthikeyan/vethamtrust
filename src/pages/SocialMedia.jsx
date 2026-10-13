import { useEffect, useState } from 'react';
import { reinitThemePlugins } from '../utils/themeInit';
import { Helmet } from 'react-helmet-async';
import { SITE } from '../config/site';
import { GALLERY_FILTERS, GALLERY_ITEMS, gallerySrc } from '../config/gallery';
import CinematicPageHero from '../components/cinematic/CinematicPageHero';
import GalleryMasonry from '../components/GalleryMasonry';

export default function SocialMedia() {
  const [filter, setFilter] = useState('all');

  const visible = filter === 'all'
    ? GALLERY_ITEMS
    : GALLERY_ITEMS.filter((item) => item.cat === filter);

  const galleryItems = visible.map((item) => ({
    key: item.file,
    src: gallerySrc(item.file),
    title: item.title,
    label: item.label,
    cat: item.cat,
  }));

  useEffect(() => {
    const timer = window.setTimeout(() => reinitThemePlugins(), 250);
    return () => window.clearTimeout(timer);
  }, [filter, galleryItems.length]);

  return (
    <>
      <Helmet>
        <title>Social Media & Gallery – {SITE.name}</title>
      </Helmet>
      <CinematicPageHero title="Social Media" crumbs={['Social Media']} />

      <div className="vx-page-content">
        <section className="sec-pad bg-color-1 vx-gallery-section vx-gallery-section--spirit">
          <div className="auto-container">
            <div className="sec-title centred mb_50 vx-reveal">
              <span className="sub-title">Photo Gallery</span>
              <h2>Our Spiritual Journey in Pictures</h2>
            </div>
            <div className="vetham-gallery-filters centred vx-reveal">
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
            <GalleryMasonry key={filter} items={galleryItems} />
          </div>
        </section>

        <section className="contact-info-section bg-color-1 centred sec-pad">
          <div className="auto-container">
            <div className="sec-title centred mb_40 vx-reveal">
              <span className="sub-title">Follow Us</span>
              <h2>Connect on Social Media</h2>
            </div>
            <ul className="vetham-social-actions vx-reveal">
              <li>
                <a href={SITE.social.facebook} target="_blank" rel="noopener noreferrer" className="theme-btn-one">
                  <i className="fab fa-facebook-f" /> Facebook
                </a>
              </li>
              <li>
                <a href={SITE.social.instagram} target="_blank" rel="noopener noreferrer" className="theme-btn-one">
                  <i className="fab fa-instagram" /> Instagram
                </a>
              </li>
              <li>
                <a href={SITE.social.youtube} target="_blank" rel="noopener noreferrer" className="theme-btn-one">
                  <i className="fab fa-youtube" /> YouTube
                </a>
              </li>
            </ul>
          </div>
        </section>
      </div>
    </>
  );
}
