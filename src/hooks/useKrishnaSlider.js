import { useCallback, useEffect, useRef, useState } from 'react';

const DELAY = 8000;

export default function useKrishnaSlider(slideCount, { enableKeyboard = false } = {}) {
  const [current, setCurrent] = useState(0);
  const [progress, setProgress] = useState(0);
  const [paused, setPaused] = useState(false);
  const touchX = useRef(0);
  const timerRef = useRef(null);

  const resetTimer = useCallback(() => {
    if (timerRef.current) clearInterval(timerRef.current);
    if (!paused) {
      timerRef.current = setInterval(() => {
        setCurrent((prev) => (prev + 1) % slideCount);
        setProgress(0);
        requestAnimationFrame(() => setProgress(100));
      }, DELAY);
    }
    setProgress(0);
    requestAnimationFrame(() => setProgress(100));
  }, [paused, slideCount]);

  const goPrev = useCallback(() => {
    setCurrent((prev) => (prev - 1 + slideCount) % slideCount);
    resetTimer();
  }, [resetTimer, slideCount]);

  const goNext = useCallback(() => {
    setCurrent((prev) => (prev + 1) % slideCount);
    resetTimer();
  }, [resetTimer, slideCount]);

  const goTo = useCallback((index) => {
    setCurrent((prev) => {
      if (index === prev) return prev;
      return index;
    });
    resetTimer();
  }, [resetTimer]);

  const onTouchStart = useCallback((e) => {
    touchX.current = e.touches[0].clientX;
  }, []);

  const onTouchEnd = useCallback((e) => {
    const diff = touchX.current - e.changedTouches[0].clientX;
    if (Math.abs(diff) > 50) {
      if (diff > 0) goNext();
      else goPrev();
    }
  }, [goNext, goPrev]);

  useEffect(() => {
    resetTimer();
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [resetTimer]);

  useEffect(() => {
    if (!enableKeyboard) return undefined;
    const onKey = (e) => {
      if (e.key === 'ArrowLeft') goPrev();
      if (e.key === 'ArrowRight') goNext();
    };
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, [enableKeyboard, goNext, goPrev]);

  return {
    current,
    progress,
    setPaused,
    goPrev,
    goNext,
    goTo,
    onTouchStart,
    onTouchEnd,
    delay: DELAY,
  };
}
