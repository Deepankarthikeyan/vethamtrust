import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

export default function usePremiumHeader() {
  const { pathname } = useLocation();
  const isHome = pathname === '/';
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return { isHome, scrolled };
}
