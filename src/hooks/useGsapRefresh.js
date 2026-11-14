import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function useGsapRefresh() {
  const { pathname } = useLocation();

  useEffect(() => {
    const refresh = () => ScrollTrigger.refresh(true);

    const timer = window.setTimeout(refresh, 350);
    window.addEventListener('vx:app-ready', refresh);
    window.addEventListener('load', refresh);

    return () => {
      window.clearTimeout(timer);
      window.removeEventListener('vx:app-ready', refresh);
      window.removeEventListener('load', refresh);
    };
  }, [pathname]);
}

export { gsap, ScrollTrigger };
