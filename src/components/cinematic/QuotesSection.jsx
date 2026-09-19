import { useEffect, useRef, useState } from 'react';
import { gsap, ScrollTrigger } from '../../hooks/useCinematicScroll';
import { HOME_QUOTES } from '../../config/homeCinematic';
import { img } from '../../config/images';

export default function QuotesSection() {
  const sectionRef = useRef(null);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return undefined;

    const ctx = gsap.context(() => {
      ScrollTrigger.create({
        trigger: section,
        start: 'top top',
        end: `+=${HOME_QUOTES.length * 100}%`,
        pin: true,
        scrub: 0.5,
        onUpdate: (self) => {
          const idx = Math.min(HOME_QUOTES.length - 1, Math.floor(self.progress * HOME_QUOTES.length));
          setIndex(idx);
        },
      });
    }, section);

    return () => ctx.revert();
  }, []);

  const quote = HOME_QUOTES[index];
  const words = quote.text.split(' ');

  return (
    <section id="cin-quotes" ref={sectionRef} className="cin-quotes">
      <div className="cin-quotes__bg" style={{ backgroundImage: `url(${img('banner2')})` }} />
      <div className="cin-quotes__overlay" />
      <div className="cin-quotes__inner">
        <blockquote key={quote.text} className="cin-quotes__text">
          {words.map((word, i) => (
            <span key={`${quote.text}-${word}-${i}`} style={{ '--cin-delay': `${i * 0.04}s` }}>
              {word}
            </span>
          ))}
        </blockquote>
        <cite className="cin-quotes__author">— {quote.author}</cite>
      </div>
    </section>
  );
}
