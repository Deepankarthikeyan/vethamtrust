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
  const wrapRef = useRef(null);
  const [position, setPosition] = useState(0);
  const [stepMs, setStepMs] = useState(0);
  const ranRef = useRef(false);
  const steps = index * 10 + targetDigit;

  const strip = useMemo(
    () => Array.from({ length: 40 }, (_, i) => i % 10),
    [],
  );

  useLayoutEffect(() => {
    const wrap = wrapRef.current;
    if (!wrap) return;
    const value = wrap.querySelector('.odometer-digit-value');
    if (value) {
      wrap.style.height = `${value.offsetHeight}px`;
    }
  }, []);

  useEffect(() => {
    if (!active || ranRef.current) return;
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
  }, [active, duration, index, steps]);

  return (
    <span className="odometer-digit">
      <span className="odometer-digit-placeholder">8</span>
      <span className="odometer-digit-wrap" ref={wrapRef}>
        <span
          className="odometer-digit-strip"
          style={{
            transform: `translateY(-${position}em)`,
            transition: position > 0 && stepMs ? `transform ${stepMs}ms linear` : 'none',
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
    <section ref={sectionRef} className={className}>
      <FunfactActiveContext.Provider value={active}>
        {children}
      </FunfactActiveContext.Provider>
    </section>
  );
}

export const FunfactSection = OdometerSection;

export default OdometerCounter;
