import { useEffect, useRef, useState } from 'react';

function sleep(ms) {
  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
}

function OdometerDigit({ targetDigit, index, active, duration }) {
  const wrapRef = useRef(null);
  const ribbonRef = useRef(null);
  const ranRef = useRef(false);

  useEffect(() => {
    if (!active || ranRef.current) return;

    const wrap = wrapRef.current;
    const ribbon = ribbonRef.current;
    if (!wrap || !ribbon) return;

    ranRef.current = true;

    const rounds = index * 10 + targetDigit;
    const delay = Math.floor((duration - 300) / Math.max(1, rounds));
    let round = 0;
    let skip = 0;

    const animateDigit = async () => {
      if (skip < index) {
        skip += 1;
        await sleep(delay);
        return animateDigit();
      }

      if (round >= rounds) return;

      round += 1;
      const nextVal = round % 10;
      const height = wrap.clientHeight || parseFloat(getComputedStyle(wrap).lineHeight) || 44;
      const currentValue = ribbon.querySelector('.odometer-digit-value');

      const nextValue = document.createElement('span');
      nextValue.className = 'odometer-digit-value';
      nextValue.textContent = String(nextVal);
      ribbon.appendChild(nextValue);

      ribbon.style.transition = `top ${delay}ms linear`;
      ribbon.style.top = `-${height}px`;

      await sleep(delay);

      currentValue?.remove();
      ribbon.style.transition = 'none';
      ribbon.style.top = '0';

      return animateDigit();
    };

    animateDigit();
  }, [active, targetDigit, index, duration]);

  return (
    <span className="odometer-digit">
      <span className="odometer-digit-placeholder">8</span>
      <span className="odometer-digit-wrap" ref={wrapRef}>
        <span className="odometer-digit-ribbon" ref={ribbonRef}>
          <span className="odometer-digit-value">0</span>
        </span>
      </span>
    </span>
  );
}

export default function OdometerCounter({ value, duration = 1500, className = '' }) {
  const rootRef = useRef(null);
  const [active, setActive] = useState(false);

  useEffect(() => {
    const el = rootRef.current;
    if (!el) return undefined;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setActive(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2, rootMargin: '0px 0px -40px 0px' },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const digits = String(value).split('').map((digit) => Number(digit));

  return (
    <span ref={rootRef} className={`odometer-counter ${active ? 'is-active' : ''} ${className}`.trim()}>
      <span className="odometer-digits">
        {digits.map((digit, index) => (
          <OdometerDigit
            key={`${index}-${digit}`}
            targetDigit={digit}
            index={index}
            active={active}
            duration={duration}
          />
        ))}
      </span>
    </span>
  );
}
