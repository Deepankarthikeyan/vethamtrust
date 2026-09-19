import { useEffect, useRef } from 'react';
import { gsap, ScrollTrigger } from '../../hooks/useCinematicScroll';
import { FOUNDER } from '../../config/homeCinematic';
import { img } from '../../config/images';
import MagneticButton from './MagneticButton';

export default function FounderSection() {
  const sectionRef = useRef(null);
  const portraitRef = useRef(null);

  useEffect(() => {
    const section = sectionRef.current;
    const portrait = portraitRef.current;
    if (!section || !portrait) return undefined;

    const ctx = gsap.context(() => {
      gsap.from('.cin-founder__text > *', {
        scrollTrigger: {
          trigger: section,
          start: 'top 65%',
          toggleActions: 'play none none reverse',
        },
        y: 40,
        opacity: 0,
        stagger: 0.12,
        duration: 0.9,
      });

      ScrollTrigger.create({
        trigger: section,
        start: 'top 60%',
        end: 'bottom 40%',
        scrub: 1,
        onUpdate: (self) => {
          portrait.style.filter = `grayscale(${1 - self.progress}) sepia(${self.progress * 0.25})`;
        },
      });
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section id="cin-founder" ref={sectionRef} className="cin-founder">
      <div className="cin-founder__grid">
        <figure className="cin-founder__portrait-wrap">
          <img
            ref={portraitRef}
            src={img(FOUNDER.portrait)}
            alt={FOUNDER.name}
            className="cin-founder__portrait"
            loading="lazy"
          />
        </figure>
        <div className="cin-founder__text">
          <p className="cin-section-label">Founder &amp; Guru</p>
          <p className="cin-founder__dates">Spiritual Master · Est. 2017</p>
          <h2>{FOUNDER.name}</h2>
          <p className="cin-founder__headline">{FOUNDER.headline}</p>
          <p className="cin-founder__bio">{FOUNDER.bio}</p>
          <blockquote className="cin-founder__quote">
            &ldquo;Guiding souls toward peace — one breath, one community at a time.&rdquo;
          </blockquote>
          <MagneticButton to="/leadership" className="cin-btn--ghost" data-cursor="VIEW">
            Meet Our Leadership
          </MagneticButton>
        </div>
      </div>
    </section>
  );
}
