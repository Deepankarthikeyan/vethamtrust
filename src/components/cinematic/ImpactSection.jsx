import { useEffect, useRef } from 'react';
import { gsap, ScrollTrigger } from '../../hooks/useCinematicScroll';
import { IMPACT_STATS } from '../../config/homeCinematic';

function StatItem({ stat }) {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el || stat.display) return undefined;

    const obj = { val: 0 };
    const ctx = gsap.context(() => {
      gsap.to(obj, {
        val: stat.value,
        duration: 1.6,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: el,
          start: 'top 85%',
          toggleActions: 'play none none reverse',
        },
        onUpdate: () => {
          el.textContent = `${Math.round(obj.val)}${stat.suffix}`;
        },
      });
    }, el);

    return () => ctx.revert();
  }, [stat]);

  return (
    <div className="cin-impact__stat">
      <span ref={ref} className="cin-impact__number">
        {stat.display || `0${stat.suffix}`}
      </span>
      <span className="cin-impact__label">{stat.label}</span>
    </div>
  );
}

export default function ImpactSection() {
  return (
    <section id="cin-impact" className="cin-impact">
      <div className="cin-impact__header">
        <p className="cin-section-label">Impact</p>
        <h2>A legacy of service</h2>
      </div>
      <div className="cin-impact__grid">
        {IMPACT_STATS.map((stat) => (
          <StatItem key={stat.label} stat={stat} />
        ))}
      </div>
    </section>
  );
}
