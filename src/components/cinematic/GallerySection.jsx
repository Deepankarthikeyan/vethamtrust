import { useEffect, useRef, useState } from 'react';
import { gsap, ScrollTrigger } from '../../hooks/useCinematicScroll';
import { HOME_GALLERY } from '../../config/homeCinematic';

export default function GallerySection() {
  const sectionRef = useRef(null);
  const [lightbox, setLightbox] = useState(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return undefined;

    const mobile = window.matchMedia('(max-width: 991px)').matches;
    if (mobile) return undefined;

    const ctx = gsap.context(() => {
      gsap.utils.toArray('.cin-gallery__row').forEach((row, i) => {
        const direction = i % 2 === 0 ? -1 : 1;
        gsap.to(row, {
          x: () => direction * 40,
          ease: 'none',
          scrollTrigger: {
            trigger: section,
            start: 'top bottom',
            end: 'bottom top',
            scrub: 1,
          },
        });
      });
    }, section);

    return () => ctx.revert();
  }, []);

  const row1 = HOME_GALLERY.slice(0, 4);
  const row2 = HOME_GALLERY.slice(4, 8);

  return (
    <>
      <section id="cin-gallery" ref={sectionRef} className="cin-gallery">
        <div className="cin-gallery__header">
          <p className="cin-section-label">Gallery</p>
          <h2>Moments of grace</h2>
        </div>
        <div className="cin-gallery__rows">
          <div className="cin-gallery__row">
            {row1.map((item) => (
              <button
                key={item.src}
                type="button"
                className="cin-gallery__item"
                style={{ backgroundImage: `url(${item.src})` }}
                onClick={() => setLightbox(item)}
                data-cursor="VIEW"
              >
                <span className="cin-gallery__meta">
                  <strong>{item.title}</strong>
                  <em>{item.label}</em>
                </span>
              </button>
            ))}
          </div>
          <div className="cin-gallery__row cin-gallery__row--alt">
            {row2.map((item) => (
              <button
                key={item.src}
                type="button"
                className="cin-gallery__item cin-gallery__item--tall"
                style={{ backgroundImage: `url(${item.src})` }}
                onClick={() => setLightbox(item)}
                data-cursor="VIEW"
              >
                <span className="cin-gallery__meta">
                  <strong>{item.title}</strong>
                  <em>{item.label}</em>
                </span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {lightbox && (
        <div className="cin-lightbox" role="dialog" aria-modal="true" onClick={() => setLightbox(null)}>
          <button type="button" className="cin-lightbox__close" aria-label="Close gallery">
            ×
          </button>
          <img src={lightbox.src} alt={lightbox.title} />
          <p>{lightbox.title}</p>
        </div>
      )}
    </>
  );
}
