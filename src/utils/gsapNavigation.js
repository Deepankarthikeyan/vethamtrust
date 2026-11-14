import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

/** Tear down GSAP scroll/pin tweens before React Router unmounts the page (avoids removeChild errors). */
export function teardownScrollAnimations() {
  ScrollTrigger.getAll().forEach((trigger) => {
    trigger.kill(true);
  });
}

export function isInternalAppLink(anchor) {
  if (!(anchor instanceof HTMLAnchorElement)) return false;
  if (anchor.target && anchor.target !== '_self') return false;
  const href = anchor.getAttribute('href');
  if (!href || href.startsWith('#') || href.startsWith('mailto:') || href.startsWith('tel:')) {
    return false;
  }
  try {
    const url = new URL(anchor.href, window.location.href);
    return url.origin === window.location.origin;
  } catch {
    return false;
  }
}
