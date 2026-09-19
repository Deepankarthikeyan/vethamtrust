import { useEffect, useRef } from 'react';
import { gsap, ScrollTrigger } from '../../hooks/useCinematicScroll';
import { ABOUT_CHAPTERS } from '../../config/homeCinematic';

export default function HorizontalAboutSection() {
  const sectionRef = useRef(null);
  const trackRef = useRef(null);

  useEffect(() => {
    const section = sectionRef.current;
    const track = trackRef.current;
    if (!section || !track) return undefined;

    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const mobile = window.matchMedia('(max-width: 991px)').matches;

    if (reduced || mobile) return undefined;

    const totalScroll = track.scrollWidth - window.innerWidth;

    const ctx = gsap.context(() => {
      gsap.to(track, {
        x: () => -totalScroll,
        ease: 'none',
        scrollTrigger: {
          trigger: section,
          start: 'top top',
          end: () => `+=${totalScroll}`,
          pin: true,
          scrub: 1,
          invalidateOnRefresh: true,
        },
      });
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section id="cin-about" ref={sectionRef} className="cin-hscroll" data-cursor="DRAG">
      <div className="cin-hscroll__header">
        <p className="cin-section-label">About</p>
        <h2>A story in four chapters</h2>
      </div>
      <div className="cin-hscroll__viewport">
        <div ref={trackRef} className="cin-hscroll__track">
          {ABOUT_CHAPTERS.map((chapter) => (
            <article key={chapter.num} className="cin-hscroll__panel">
              <span className="cin-hscroll__num">{chapter.num}</span>
              <div className="cin-hscroll__image" style={{ backgroundImage: `url(${chapter.image})` }} />
              <div className="cin-hscroll__text">
                <h3>{chapter.title}</h3>
                <p>{chapter.text}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
      <div className="cin-hscroll__mobile">
        {ABOUT_CHAPTERS.map((chapter) => (
          <article key={chapter.num} className="cin-hscroll__mobile-card">
            <span className="cin-hscroll__num">{chapter.num}</span>
            <div className="cin-hscroll__image" style={{ backgroundImage: `url(${chapter.image})` }} />
            <div className="cin-hscroll__text">
              <h3>{chapter.title}</h3>
              <p>{chapter.text}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
