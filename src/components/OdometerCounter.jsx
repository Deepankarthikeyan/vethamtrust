import {
  createContext,
  useContext,
  useEffect,
  useLayoutEffect,
  useMemo,
  useRef,
  useState,
} from 'react';

const FunfactActiveContext = createContext(false);
export const OdometerActiveContext = FunfactActiveContext;

function sleep(ms) {
  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
}

function OdometerDigit({ targetDigit, index, active, duration }) {
  const digitRef = useRef(null);
  const wrapRef = useRef(null);
  const [digitHeight, setDigitHeight] = useState(0);
  const [position, setPosition] = useState(0);
  const [stepMs, setStepMs] = useState(0);
  const ranRef = useRef(false);
  const steps = index * 10 + targetDigit;

  const strip = useMemo(
    () => Array.from({ length: 30 + targetDigit + index * 10 }, (_, i) => i % 10),
    [index, targetDigit],
  );

  useLayoutEffect(() => {
    const measure = () => {
      const digit = digitRef.current;
      const wrap = wrapRef.current;
      if (!digit || !wrap) return;
      const height = digit.getBoundingClientRect().height;
      if (height > 0) {
        setDigitHeight(height);
        wrap.style.height = `${height}px`;
      }
    };

    measure();
    window.addEventListener('resize', measure);
    return () => window.removeEventListener('resize', measure);
  }, []);

  useEffect(() => {
    if (!active || ranRef.current || digitHeight === 0) return;
    if (steps === 0) return;

    ranRef.current = true;
    const delay = Math.floor((duration - 300) / Math.max(1, steps));
    setStepMs(delay);

    let round = 0;
    let skip = 0;

    const animate = async () => {
      if (skip < index) {
        skip += 1;
        await sleep(delay);
        return animate();
      }

      if (round >= steps) return;

      round += 1;
      setPosition(round);
      await sleep(delay);
      return animate();
    };

    animate();
  }, [active, digitHeight, duration, index, steps]);

  return (
    <span className="odometer-digit" ref={digitRef}>
      <span className="odometer-digit-placeholder" aria-hidden="true">0</span>
      <span className="odometer-digit-wrap" ref={wrapRef}>
        <span
          className="odometer-digit-strip"
          style={{
            transform: digitHeight ? `translate3d(0, -${position * digitHeight}px, 0)` : 'none',
            transition: position > 0 && stepMs
              ? `transform ${stepMs}ms cubic-bezier(0.22, 0.85, 0.35, 1)`
              : 'none',
          }}
        >
          {strip.map((digit, i) => (
            <span key={i} className="odometer-digit-value">{digit}</span>
          ))}
        </span>
      </span>
    </span>
  );
}

function OdometerCounter({ value, duration = 1500, suffix = '', className = '' }) {
  const active = useContext(FunfactActiveContext);
  const digits = String(value).split('').map((digit) => Number(digit));

  return (
    <span className={`odometer-counter ${active ? 'is-active' : ''} ${className}`.trim()}>
      <span className="odometer-digits">
        {digits.map((digit, index) => (
          <OdometerDigit
            key={`${index}-${value}`}
            targetDigit={digit}
            index={index}
            active={active}
            duration={duration}
          />
        ))}
      </span>
      {suffix ? <span className="odometer-unit">{suffix}</span> : null}
    </span>
  );
}

export function OdometerSection({ children, className = '' }) {
  const sectionRef = useRef(null);
  const [active, setActive] = useState(false);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return undefined;

    const activate = () => {
      setActive(true);
    };

    const isVisible = () => {
      const rect = el.getBoundingClientRect();
      return rect.top < window.innerHeight * 0.92 && rect.bottom > 0;
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
      { threshold: 0.05, rootMargin: '0px 0px 80px 0px' },
    );

    observer.observe(el);

    const onScroll = () => {
      if (isVisible()) {
        activate();
        observer.disconnect();
        window.removeEventListener('scroll', onScroll);
      }
    };

    window.addEventListener('scroll', onScroll, { passive: true });

    return () => {
      observer.disconnect();
      window.removeEventListener('scroll', onScroll);
    };
  }, []);

  return (
    <section ref={sectionRef} className={`${className} ${active ? 'is-active' : ''}`.trim()}>
      <FunfactActiveContext.Provider value={active}>
        {children}
      </FunfactActiveContext.Provider>
    </section>
  );
}

export const FunfactSection = OdometerSection;

export default OdometerCounter;
