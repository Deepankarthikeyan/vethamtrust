import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const REVEAL_SELECTOR = [
  '.sec-title',
  '.sh-section-head',
  '.sh-about__grid > *',
  '.sh-journey-card',
  '.sh-dimension-tile',
  '.sh-way__intro',
  '.sh-way__list li',
  '.sh-peace-card',
  '.sh-purpose-card',
  '.sh-brotherhood-card',
  '.sh-village__head',
  '.sh-village-tile',
  '.sh-balance-col',
  '.sh-cta__content > *',
  '.content_block_one',
  '.image_block_one',
  '.vx-page-content .image-column figure',
  '.vx-page-content .content-column',
  '.vx-testimonial-card',
  '.vx-reveal',
].join(', ');

const IMAGE_SELECTOR = [
  '.sh-journey-card__img',
  '.sh-village-tile__img',
  '.sh-balance-col__img',
  '.sh-purpose-card__media',
  '.sh-brotherhood-hero img',
  '.vx-gallery-masonry__media',
  '.image-box img',
].join(', ');

export default function useScrollReveal() {
  const { pathname } = useLocation();

  useEffect(() => {
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduced) return undefined;

    let ctx;

    const timer = window.setTimeout(() => {
      ctx = gsap.context(() => {
        gsap.utils.toArray('.vx-page-content section, .sh-home .sh-section, .sh-cta').forEach((section) => {
          const blocks = section.querySelectorAll(REVEAL_SELECTOR);
          if (!blocks.length) return;

          gsap.from(blocks, {
            y: 32,
            opacity: 0,
            duration: 0.75,
            ease: 'power2.out',
            stagger: 0.07,
            scrollTrigger: {
              trigger: section,
              start: 'top 84%',
              once: true,
            },
          });
        });

        gsap.utils.toArray(IMAGE_SELECTOR).forEach((el) => {
          gsap.from(el, {
            scale: 1.04,
            opacity: 0,
            duration: 0.9,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: el,
              start: 'top 88%',
              once: true,
            },
          });
        });

        const hero = document.querySelector('.vx-page-hero__content');
        if (hero) {
          gsap.from(hero.children, {
            y: 22,
            opacity: 0,
            duration: 0.7,
            stagger: 0.12,
            ease: 'power2.out',
          });
        }

        const heroHome = document.querySelector('.sh-hero__copy');
        if (heroHome) {
          gsap.from(heroHome.children, {
            y: 26,
            opacity: 0,
            duration: 0.8,
            stagger: 0.1,
            ease: 'power2.out',
            delay: 0.15,
          });
        }

        ScrollTrigger.refresh();
      });
    }, 450);

    return () => {
      window.clearTimeout(timer);
      ctx?.revert();
    };
  }, [pathname]);
}
