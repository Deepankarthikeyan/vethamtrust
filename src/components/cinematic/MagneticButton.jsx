import { useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function MagneticButton({
  to,
  href,
  className = '',
  children,
  onClick,
  type = 'button',
}) {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return undefined;

    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const coarse = window.matchMedia('(pointer: coarse)').matches;
    if (reduced || coarse) return undefined;

    const onMove = (e) => {
      const rect = el.getBoundingClientRect();
      const x = e.clientX - rect.left - rect.width / 2;
      const y = e.clientY - rect.top - rect.height / 2;
      el.style.transform = `translate(${x * 0.18}px, ${y * 0.18}px)`;
    };

    const onLeave = () => {
      el.style.transform = '';
    };

    el.addEventListener('mousemove', onMove);
    el.addEventListener('mouseleave', onLeave);

    return () => {
      el.removeEventListener('mousemove', onMove);
      el.removeEventListener('mouseleave', onLeave);
    };
  }, []);

  const cls = `cin-btn ${className}`.trim();

  if (to) {
    return (
      <Link ref={ref} to={to} className={cls} onClick={onClick}>
        <span>{children}</span>
        <i className="cin-btn__arrow" aria-hidden="true" />
      </Link>
    );
  }

  if (href) {
    return (
      <a ref={ref} href={href} className={cls} target="_blank" rel="noopener noreferrer" onClick={onClick}>
        <span>{children}</span>
        <i className="cin-btn__arrow" aria-hidden="true" />
      </a>
    );
  }

  return (
    <button ref={ref} type={type} className={cls} onClick={onClick}>
      <span>{children}</span>
      <i className="cin-btn__arrow" aria-hidden="true" />
    </button>
  );
}
