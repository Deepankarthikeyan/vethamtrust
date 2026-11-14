import { useEffect, useRef, useState } from 'react';

function useCountUp(target, active, duration = 1800) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!active) return undefined;

    let frame = 0;
    let start = null;

    const step = (timestamp) => {
      if (start === null) start = timestamp;
      const progress = Math.min((timestamp - start) / duration, 1);
      const eased = 1 - (1 - progress) ** 3;
      setCount(Math.round(eased * target));
      if (progress < 1) {
        frame = requestAnimationFrame(step);
      }
    };

    frame = requestAnimationFrame(step);
    return () => cancelAnimationFrame(frame);
  }, [active, duration, target]);

  return count;
}

function StatItem({ value, suffix = '', title, active, delay = 0 }) {
  const count = useCountUp(value, active, 1800 + delay);

  return (
    <div className="vetham-site-stat">
      <div className="vetham-site-stat__number">
        <span className="vetham-site-stat__value">{count}</span>
        {suffix ? <span className="vetham-site-stat__suffix">{suffix}</span> : null}
      </div>
      <p className="vetham-site-stat__label">{title}</p>
    </div>
  );
}

export default function SiteStats({ stats }) {
  const sectionRef = useRef(null);
  const [active, setActive] = useState(false);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return undefined;

    const activate = () => setActive(true);

    const isVisible = () => {
      const rect = el.getBoundingClientRect();
      return rect.top < window.innerHeight * 0.9 && rect.bottom > 0;
    };

    if (isVisible()) {
      activate();
      return undefined;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          activate();
          observer.disconnect();
        }
      },
      { threshold: 0.15, rootMargin: '0px 0px 60px 0px' },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className={`vetham-site-stats sec-pad centred${active ? ' is-active' : ''}`}
    >
      <div className="vetham-site-stats__accent" aria-hidden="true" />
      <div className="auto-container">
        <div className="vetham-site-stats__grid">
          {stats.map((stat, index) => (
            <StatItem
              key={stat.title}
              value={stat.value}
              suffix={stat.suffix || ''}
              title={stat.title}
              active={active}
              delay={index * 120}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
