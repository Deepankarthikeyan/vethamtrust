import { useEffect, useState } from 'react';

export default function ScrollProgress() {
  const [progress, setProgress] = useState(0);
  const [section, setSection] = useState('01');

  useEffect(() => {
    const onScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const pct = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
      setProgress(pct);

      const sections = document.querySelectorAll('[data-vx-section]');
      let current = 1;
      sections.forEach((el, i) => {
        const rect = el.getBoundingClientRect();
        if (rect.top <= window.innerHeight * 0.5) current = i + 1;
      });
      setSection(String(current).padStart(2, '0'));
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <>
      <div className="vx-scroll-progress" aria-hidden="true">
        <div className="vx-scroll-progress__bar" style={{ width: `${progress}%` }} />
      </div>
      <div className="vx-scroll-indicator" aria-hidden="true">
        {section} / 14
      </div>
    </>
  );
}
