import { useEffect, useRef, useState } from 'react';
import { gsap, ScrollTrigger } from '../../hooks/useCinematicScroll';
import { PURPOSE_STATEMENTS } from '../../config/homeCinematic';

export default function PurposeSection() {
  const sectionRef = useRef(null);
  const [active, setActive] = useState(0);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return undefined;

    const ctx = gsap.context(() => {
      ScrollTrigger.create({
        trigger: section,
        start: 'top top',
        end: `+=${PURPOSE_STATEMENTS.length * 100}%`,
        pin: '.cin-purpose__sticky',
        scrub: 0.5,
        onUpdate: (self) => {
          const idx = Math.min(
            PURPOSE_STATEMENTS.length - 1,
            Math.floor(self.progress * PURPOSE_STATEMENTS.length),
          );
          setActive(idx);
        },
      });

      gsap.utils.toArray('.cin-purpose__layer').forEach((layer, i) => {
        gsap.fromTo(
          layer,
          { opacity: i === 0 ? 1 : 0, scale: 1.08 },
          {
            opacity: 1,
            scale: 1,
            scrollTrigger: {
              trigger: section,
              start: () => `top+=${i * (section.offsetHeight / PURPOSE_STATEMENTS.length)} top`,
              end: () => `top+=${(i + 1) * (section.offsetHeight / PURPOSE_STATEMENTS.length)} top`,
              scrub: true,
            },
          },
        );
      });
    }, section);

    return () => ctx.revert();
  }, []);

  const current = PURPOSE_STATEMENTS[active];

  return (
    <section id="cin-purpose" ref={sectionRef} className="cin-purpose">
      <div className="cin-purpose__sticky">
        <div className="cin-purpose__visual">
          {PURPOSE_STATEMENTS.map((item, i) => (
            <div
              key={item.title}
              className={`cin-purpose__layer${i === active ? ' is-active' : ''}`}
              style={{ backgroundImage: `url(${item.image})` }}
            />
          ))}
          <div className="cin-purpose__visual-overlay" />
        </div>
        <div className="cin-purpose__copy">
          <p className="cin-section-label">Our Purpose</p>
          <h2 key={current.title} className="cin-purpose__title">{current.title}</h2>
          <p key={current.text} className="cin-purpose__text">{current.text}</p>
          <div className="cin-purpose__dots">
            {PURPOSE_STATEMENTS.map((item, i) => (
              <span key={item.title} className={i === active ? 'is-active' : ''} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
