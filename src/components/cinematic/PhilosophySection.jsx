import { useEffect, useRef } from 'react';
import { gsap, ScrollTrigger } from '../../hooks/useCinematicScroll';

const WORDS = ['Peace', 'begins', 'within.'];

export default function PhilosophySection() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return undefined;

    const ctx = gsap.context(() => {
      gsap.from('.cin-philosophy__word', {
        scrollTrigger: {
          trigger: section,
          start: 'top 70%',
          end: 'center center',
          scrub: 1,
        },
        y: (i) => (i % 2 === 0 ? 120 : 80),
        opacity: 0.15,
        stagger: 0.08,
        ease: 'none',
      });

      gsap.from('.cin-philosophy__sub', {
        scrollTrigger: {
          trigger: section,
          start: 'top 60%',
          toggleActions: 'play none none reverse',
        },
        y: 30,
        opacity: 0,
        duration: 0.8,
      });
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section id="cin-philosophy" ref={sectionRef} className="cin-philosophy">
      <div className="cin-philosophy__inner">
        <p className="cin-philosophy__label">Philosophy</p>
        <h2 className="cin-philosophy__quote" aria-label="Peace begins within">
          {WORDS.map((word) => (
            <span key={word} className="cin-philosophy__word">
              {word}
            </span>
          ))}
        </h2>
        <p className="cin-philosophy__sub">
          Before programmes and places, there is stillness. Our trust exists to help every seeker
          find that stillness — and from it, peace that radiates outward.
        </p>
      </div>
    </section>
  );
}
