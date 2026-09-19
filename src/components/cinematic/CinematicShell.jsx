import { useEffect, useRef, useState } from 'react';
import { HOME_SECTIONS } from '../../config/homeCinematic';

export default function CinematicShell({ children }) {
  const [activeSection, setActiveSection] = useState(0);
  const [cursorLabel, setCursorLabel] = useState('');
  const dotRef = useRef(null);
  const ringRef = useRef(null);

  useEffect(() => {
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const coarse = window.matchMedia('(pointer: coarse)').matches;
    if (reduced || coarse) return undefined;

    document.body.classList.add('cin-has-cursor');

    const dot = dotRef.current;
    const ring = ringRef.current;
    if (!dot || !ring) return undefined;

    let x = 0;
    let y = 0;
    let rx = 0;
    let ry = 0;
    let raf;

    const move = (e) => {
      x = e.clientX;
      y = e.clientY;
    };

    const tick = () => {
      rx += (x - rx) * 0.15;
      ry += (y - ry) * 0.15;
      dot.style.transform = `translate(${x}px, ${y}px)`;
      ring.style.transform = `translate(${rx}px, ${ry}px)`;
      raf = requestAnimationFrame(tick);
    };

    const onOver = (e) => {
      const target = e.target.closest('[data-cursor]');
      setCursorLabel(target?.dataset?.cursor || '');
      ring.classList.toggle('is-active', Boolean(target));
    };

    window.addEventListener('mousemove', move);
    document.addEventListener('mouseover', onOver);
    raf = requestAnimationFrame(tick);

    return () => {
      window.removeEventListener('mousemove', move);
      document.removeEventListener('mouseover', onOver);
      cancelAnimationFrame(raf);
      document.body.classList.remove('cin-has-cursor');
    };
  }, []);

  useEffect(() => {
    const sections = HOME_SECTIONS.map((s) => document.getElementById(`cin-${s.id}`)).filter(Boolean);
    if (!sections.length) return undefined;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && entry.intersectionRatio > 0.35) {
            const idx = sections.indexOf(entry.target);
            if (idx >= 0) setActiveSection(idx);
          }
        });
      },
      { threshold: [0.35, 0.5, 0.65] },
    );

    sections.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const total = HOME_SECTIONS.length;
  const progress = ((activeSection + 1) / total) * 100;

  return (
    <div className="cin-experience">
      <div className="cin-progress" aria-hidden="true">
        <span className="cin-progress__count">
          {String(activeSection + 1).padStart(2, '0')}
          <span className="cin-progress__sep">/</span>
          {String(total).padStart(2, '0')}
        </span>
        <div className="cin-progress__track">
          <div className="cin-progress__bar" style={{ width: `${progress}%` }} />
        </div>
      </div>

      <div className="cin-cursor-dot" ref={dotRef} />
      <div className="cin-cursor-ring" ref={ringRef}>
        <span>{cursorLabel}</span>
      </div>

      {children}
    </div>
  );
}
