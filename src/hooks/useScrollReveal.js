import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

function setupRevealObserver() {
  const targets = document.querySelectorAll('[data-reveal]:not(.is-revealed), .wow:not(.animated)');
  if (!targets.length) return null;

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-revealed', 'animated');
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12, rootMargin: '0px 0px -50px 0px' },
  );

  targets.forEach((el) => observer.observe(el));
  return observer;
}

export default function useScrollReveal() {
  const { pathname } = useLocation();

  useEffect(() => {
    let observer = setupRevealObserver();
    const root = document.getElementById('root');
    if (!root) return undefined;

    const mutationObserver = new MutationObserver(() => {
      if (observer) observer.disconnect();
      observer = setupRevealObserver();
    });

    mutationObserver.observe(root, { childList: true, subtree: true });

    const fallback = window.setTimeout(() => {
      document.querySelectorAll('[data-reveal]:not(.is-revealed)').forEach((el) => {
        el.classList.add('is-revealed');
      });
    }, 2500);

    return () => {
      mutationObserver.disconnect();
      if (observer) observer.disconnect();
      window.clearTimeout(fallback);
    };
  }, [pathname]);
}
