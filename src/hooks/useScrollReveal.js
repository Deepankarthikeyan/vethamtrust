import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const START = 'top 82%';
const TOGGLE = 'play reverse play reverse';
const DURATION = 0.78;
const Y = 26;
const STAGGER = 0.12;
const EASE = 'power2.out';

function scrollFromTo(targets, vars, trigger) {
  const list = gsap.utils.toArray(targets);
  if (!list.length) return;

  gsap.fromTo(
    list,
    { y: Y, opacity: 0, ...vars.from },
    {
      y: 0,
      opacity: 1,
      duration: DURATION,
      ease: EASE,
      stagger: STAGGER,
      ...vars.to,
      scrollTrigger: {
        trigger: trigger || list[0],
        start: START,
        toggleActions: TOGGLE,
      },
    },
  );
}

function scrollImage(targets, trigger) {
  const list = gsap.utils.toArray(targets);
  if (!list.length) return;

  gsap.fromTo(
    list,
    { y: 24, opacity: 0, scale: 0.97 },
    {
      y: 0,
      opacity: 1,
      scale: 1,
      duration: 0.85,
      ease: EASE,
      stagger: STAGGER,
      scrollTrigger: {
        trigger: trigger || list[0],
        start: START,
        toggleActions: TOGGLE,
      },
    },
  );
}

export default function useScrollReveal() {
  const { pathname } = useLocation();

  useEffect(() => {
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduced) return undefined;

    document.documentElement.classList.add('vx-scroll-anim');

    let ctx;

    const timer = window.setTimeout(() => {
      ctx = gsap.context(() => {
        /* —— Section titles: eyebrow/sub-title before heading —— */
        gsap.utils.toArray('.sec-title, .sh-section-head').forEach((block) => {
          scrollFromTo(block.children, {}, block);
        });

        /* —— About copy: stagger text blocks —— */
        const aboutCopy = document.querySelector('.sh-about__copy');
        if (aboutCopy) {
          scrollFromTo(
            aboutCopy.querySelectorAll('.sh-eyebrow, .sh-title, .sh-text, .sh-quote, .sh-quote *'),
            {},
            aboutCopy,
          );
        }

        /* —— Two-column: alternate horizontal reveal —— */
        gsap.utils.toArray('.sh-about__grid, .vx-page-content .row.align-items-center').forEach((row) => {
          const visual = row.querySelector('.sh-about__visual, .image-column, .image_block_one');
          const copy = row.querySelector('.sh-about__copy, .content-column, .content_block_one');
          const trigger = row;

          if (visual) {
            gsap.fromTo(
              visual,
              { x: -28, opacity: 0 },
              {
                x: 0,
                opacity: 1,
                duration: DURATION,
                ease: EASE,
                scrollTrigger: { trigger, start: START, toggleActions: TOGGLE },
              },
            );
          }
          if (copy) {
            gsap.fromTo(
              copy,
              { x: 28, opacity: 0 },
              {
                x: 0,
                opacity: 1,
                duration: DURATION,
                ease: EASE,
                delay: 0.14,
                scrollTrigger: { trigger, start: START, toggleActions: TOGGLE },
              },
            );
          }
        });

        /* —— Card grids (stagger children per row) —— */
        const gridSelectors = [
          '.sh-journey__grid',
          '.sh-dimensions__row',
          '.sh-peace__grid',
          '.sh-village__tiles--row',
          '.sh-balance__grid',
          '.sh-way__list',
          '.vx-testimonials__track',
        ];

        gridSelectors.forEach((selector) => {
          gsap.utils.toArray(selector).forEach((grid) => {
            scrollFromTo(grid.children, {}, grid);
          });
        });

        /* —— Split panels —— */
        scrollFromTo('.sh-purpose-card', {}, '.sh-split');
        scrollFromTo('.sh-brotherhood-card', {}, '.sh-split');

        /* —— Way of life intro —— */
        scrollFromTo('.sh-way__intro', {}, '.sh-way');

        /* —— Village head —— */
        scrollFromTo('.sh-village__head', {}, '.sh-village');

        /* —— Inner page text blocks —— */
        scrollFromTo(
          '.vx-page-content .text p, .vx-page-content .btn-box a, .vx-page-content .theme-btn-one, .vx-reveal',
          {},
          '.vx-page-content',
        );

        /* —— Images —— */
        const imageSelector = [
          '.sh-about__maharishi-png',
          '.sh-journey-card__img',
          '.sh-village-tile__img',
          '.sh-balance-col__img',
          '.sh-purpose-card__media',
          '.sh-brotherhood-hero img',
          '.vx-gallery-masonry__media',
          '.vx-page-content figure.image img',
          '.vx-page-content .image-box img',
          '.image_block_one img',
        ].join(', ');

        gsap.utils.toArray(imageSelector).forEach((el) => {
          const wrap = el.closest('figure, .sh-journey-card__img, .vx-gallery-masonry__cell') || el;
          scrollImage(wrap, el.closest('section') || wrap);
        });

        /* —— Page hero (load, not scroll) —— */
        const pageHero = document.querySelector('.vx-page-hero__content');
        if (pageHero) {
          gsap.from(pageHero.children, {
            y: 22,
            opacity: 0,
            duration: 0.72,
            stagger: 0.12,
            ease: EASE,
          });
        }

        /* —— Home hero (load only) —— */
        const homeHero = document.querySelector('.sh-hero__copy');
        if (homeHero) {
          gsap.from(homeHero.children, {
            y: 26,
            opacity: 0,
            duration: 0.82,
            stagger: 0.11,
            ease: EASE,
            delay: 0.12,
          });
        }

        /* —— Final CTA parallax (scrub) —— */
        const cta = document.querySelector('.sh-cta');
        if (cta) {
          const ctaBg = cta.querySelector('.sh-cta__bg');
          if (ctaBg) {
            gsap.fromTo(
              ctaBg,
              { yPercent: -6 },
              {
                yPercent: 10,
                ease: 'none',
                scrollTrigger: {
                  trigger: cta,
                  start: 'top bottom',
                  end: 'bottom top',
                  scrub: true,
                },
              },
            );
          }

          const ctaContent = cta.querySelector('.sh-cta__content');
          if (ctaContent) {
            gsap.fromTo(
              ctaContent,
              { y: 40 },
              {
                y: -55,
                ease: 'none',
                scrollTrigger: {
                  trigger: cta,
                  start: 'top bottom',
                  end: 'bottom top',
                  scrub: 1,
                },
              },
            );
          }

          gsap.utils.toArray('.sh-cta__scroll-item').forEach((el, index) => {
            gsap.fromTo(
              el,
              { y: 56 + index * 8, opacity: 0.2 },
              {
                y: -(28 + index * 5),
                opacity: 1,
                ease: 'none',
                scrollTrigger: {
                  trigger: cta,
                  start: 'top 95%',
                  end: 'center 35%',
                  scrub: 1.15,
                },
              },
            );
          });
        }

        ScrollTrigger.refresh();
      });
    }, 450);

    return () => {
      window.clearTimeout(timer);
      document.documentElement.classList.remove('vx-scroll-anim');
      ctx?.revert();
    };
  }, [pathname]);
}
