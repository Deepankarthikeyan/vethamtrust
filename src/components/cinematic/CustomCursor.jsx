import { useEffect, useRef, useState } from 'react';

export default function CustomCursor() {
  const cursorRef = useRef(null);
  const labelRef = useRef(null);
  const [label, setLabel] = useState('');
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (window.matchMedia('(max-width: 768px)').matches) return undefined;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return undefined;

    document.body.classList.add('vx-cursor-on');
    setVisible(true);

    const move = (e) => {
      if (cursorRef.current) {
        cursorRef.current.style.left = `${e.clientX}px`;
        cursorRef.current.style.top = `${e.clientY}px`;
      }
      if (labelRef.current) {
        labelRef.current.style.left = `${e.clientX}px`;
        labelRef.current.style.top = `${e.clientY - 36}px`;
      }
    };

    const onOver = (e) => {
      const target = e.target.closest('[data-cursor]');
      if (target) {
        cursorRef.current?.classList.add('is-hover');
        setLabel(target.dataset.cursor || '');
        labelRef.current?.classList.add('is-visible');
      }
    };

    const onOut = (e) => {
      const target = e.target.closest('[data-cursor]');
      if (target) {
        cursorRef.current?.classList.remove('is-hover');
        setLabel('');
        labelRef.current?.classList.remove('is-visible');
      }
    };

    window.addEventListener('mousemove', move);
    document.addEventListener('mouseover', onOver);
    document.addEventListener('mouseout', onOut);

    return () => {
      document.body.classList.remove('vx-cursor-on');
      window.removeEventListener('mousemove', move);
      document.removeEventListener('mouseover', onOver);
      document.removeEventListener('mouseout', onOut);
    };
  }, []);

  if (!visible) return null;

  return (
    <>
      <div ref={cursorRef} className="vx-cursor" aria-hidden="true" />
      <div ref={labelRef} className="vx-cursor__label" aria-hidden="true">{label}</div>
    </>
  );
}
