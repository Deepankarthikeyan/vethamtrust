import { useEffect, useRef } from 'react';
import { gsap, ScrollTrigger } from '../../hooks/useCinematicScroll';
import { SITE } from '../../config/homeCinematic';
import { img } from '../../config/images';
import MagneticButton from './MagneticButton';

export default function HeroSection() {
  const sectionRef = useRef(null);
  const bgRef = useRef(null);

  useEffect(() => {
    const section = sectionRef.current;
    const bg = bgRef.current;
    if (!section || !bg) return undefined;

    const ctx = gsap.context(() => {
      gsap.from('.cin-hero__content > *', {
        y: 40,
        opacity: 0,
        duration: 1.2,
        stagger: 0.15,
        ease: 'power3.out',
        delay: 0.3,
      });

      gsap.from('.cin-hero__veil', {
        opacity: 1,
        duration: 1.4,
        ease: 'power2.out',
      });

      ScrollTrigger.create({
        trigger: section,
        start: 'top top',
        end: 'bottom top',
        scrub: true,
        onUpdate: (self) => {
          gsap.to(bg, { scale: 1 + self.progress * 0.12, ease: 'none', overwrite: true });
          gsap.to('.cin-hero__content', { y: self.progress * 80, opacity: 1 - self.progress * 0.6, ease: 'none', overwrite: true });
        },
      });
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section id="cin-hero" ref={sectionRef} className="cin-hero" data-cursor="EXPLORE">
      <div className="cin-hero__veil" aria-hidden="true" />
      <div className="cin-hero__media">
        <div
          ref={bgRef}
          className="cin-hero__bg"
          style={{ backgroundImage: `url(${img('banner1')})` }}
        />
        <div className="cin-hero__overlay" />
      </div>
      <div className="cin-hero__content">
        <p className="cin-hero__eyebrow">Vetham Spiritual Trust</p>
        <h1 className="cin-hero__title">
          VETHAM
          <span>SPIRITUAL TRUST</span>
        </h1>
        <p className="cin-hero__mission">{SITE.tagline} — a calm digital journey into yoga, meditation, and enlightened living.</p>
        <MagneticButton to="/about" className="cin-btn--primary" data-cursor="EXPLORE">
          Explore the Journey
        </MagneticButton>
      </div>
      <div className="cin-hero__scroll" aria-hidden="true">
        <span>Scroll</span>
        <i />
      </div>
    </section>
  );
}
