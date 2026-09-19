import { useEffect, useRef } from 'react';
import { gsap, ScrollTrigger } from '../../hooks/useCinematicScroll';
import { JOURNEY_STAGES } from '../../config/homeCinematic';

export default function JourneySection() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return undefined;

    const ctx = gsap.context(() => {
      gsap.from('.cin-journey__line-fill', {
        scrollTrigger: {
          trigger: section,
          start: 'top 60%',
          end: 'bottom 40%',
          scrub: 1,
        },
        scaleY: 0,
        transformOrigin: 'top center',
      });

      gsap.utils.toArray('.cin-journey__step').forEach((step) => {
        gsap.from(step, {
          scrollTrigger: {
            trigger: step,
            start: 'top 75%',
            toggleActions: 'play none none reverse',
          },
          x: -30,
          opacity: 0,
          duration: 0.7,
        });
      });
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section id="cin-journey" ref={sectionRef} className="cin-journey">
      <div className="cin-journey__header">
        <p className="cin-section-label">The Journey</p>
        <h2>Discover → Practice → Transform → Serve</h2>
      </div>
      <div className="cin-journey__timeline">
        <div className="cin-journey__line" aria-hidden="true">
          <div className="cin-journey__line-fill" />
        </div>
        {JOURNEY_STAGES.map((stage, i) => (
          <article key={stage.stage} className="cin-journey__step">
            <div className="cin-journey__node">
              <span>{String(i + 1).padStart(2, '0')}</span>
            </div>
            <div className="cin-journey__content">
              <p className="cin-journey__stage">{stage.stage}</p>
              <h3>{stage.title}</h3>
              <p>{stage.text}</p>
            </div>
            <div
              className="cin-journey__image"
              style={{ backgroundImage: `url(${stage.image})` }}
              data-cursor="VIEW"
            />
          </article>
        ))}
      </div>
    </section>
  );
}
