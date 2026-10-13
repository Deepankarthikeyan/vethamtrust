import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const START = 'top 84%';
const TOGGLE = 'play reverse play reverse';
const DURATION = 0.8;
const Y = 24;
const STAGGER = 0.12;
const EASE = 'power2.out';

const CARD_SELECTOR = [
  '.service-block-one',
  '.vetham-service-card',
  '.vetham-contact-card',
  '.vetham-leader-card',
  '.vetham-event-card',
  '.news-block-one .inner-box',
  '.cause-block-one .inner-box',
  '.sh-journey-card',
  '.sh-dimension-tile',
  '.sh-village-tile',
  '.sh-balance-col',
  '.sh-peace-card',
  '.sh-purpose-card',
  '.sh-brotherhood-card',
  '.vx-gallery-masonry__cell',
  '.vx-testimonial-card',
  '.feature-block-one .inner-box',
  '.vx-spirit-card',
  '.vx-about-collage__primary',
  '.vx-about-collage__secondary',
  '.vx-split-section__figure',
].join(', ');

const SECTION_SELECTOR = [
  '.sh-home .sh-section',
  '.sh-home .sh-cta',
  '.vx-page-content section',
  '.vx-page-content .sidebar-page-container',
  '.vx-split-section',
].join(', ');

function scrollFromTo(targets, trigger, extra = {}) {
  const list = gsap.utils.toArray(targets);
  if (!list.length) return;

  gsap.fromTo(
    list,
    { y: Y, opacity: 0, scale: extra.scaleFrom ?? 1, ...extra.from },
    {
      y: 0,
      opacity: 1,
      scale: extra.scaleTo ?? 1,
      duration: extra.duration ?? DURATION,
      ease: EASE,
      stagger: extra.stagger ?? STAGGER,
      ...extra.to,
      scrollTrigger: {
        trigger: trigger || list[0],
        start: START,
        toggleActions: TOGGLE,
      },
    },
  );
}

function revealSplitRow(row) {
  const visual = row.querySelector(
    '.sh-about__visual, .vx-split-section__media, .image-column, .image_block_one, .vetham-leader-card__media, figure.image',
  );
  const copy = row.querySelector(
    '.sh-about__copy, .vx-split-section__content, .content-column, .content_block_one, .vetham-leader-card__text',
  );

  if (visual) {
    gsap.fromTo(
      visual,
      { x: -26, opacity: 0 },
      {
        x: 0,
        opacity: 1,
        duration: DURATION,
        ease: EASE,
        scrollTrigger: { trigger: row, start: START, toggleActions: TOGGLE },
      },
    );
  }
  if (copy) {
    gsap.fromTo(
      copy,
      { x: 26, opacity: 0 },
      {
        x: 0,
        opacity: 1,
        duration: DURATION,
        ease: EASE,
        delay: 0.12,
        scrollTrigger: { trigger: row, start: START, toggleActions: TOGGLE },
      },
    );
  }
}

function revealSection(section) {
  if (section.closest('.vx-page-hero, .sh-hero')) return;

  const heading = section.querySelector(
    '.sec-title, .sh-section-head, .vetham-contact-cards__header, .vetham-contact-form__header',
  );
  if (heading) {
    scrollFromTo(heading.children, heading);
  }

  gsap.utils.toArray(
    '.sh-way__intro, .sh-village__head, .content_block_one, .vetham-services-filter-summary',
    section,
  ).forEach((block) => {
    scrollFromTo(block, section);
  });

  const cards = section.querySelectorAll(CARD_SELECTOR);
  if (cards.length) {
    scrollFromTo(cards, section);
  }

  const grids = section.querySelectorAll(
    '.sh-journey__grid, .sh-dimensions__row, .sh-peace__grid, .sh-village__tiles--row, .sh-balance__grid, .sh-way__list, .vx-testimonials__track, .vetham-contact-cards__grid, .vetham-services-grid',
  );
  grids.forEach((grid) => {
    if (!grid.querySelector(CARD_SELECTOR)) {
      scrollFromTo(grid.children, grid);
    }
  });

  gsap.utils.toArray(
    '.sh-about__grid, .vx-split-section__grid, .row.align-items-center, .row.g-5',
    section,
  ).forEach(revealSplitRow);

  const textOnly = section.querySelectorAll(
    '.text p, .vetham-donate-cta-text p, .vetham-event-tamil, .village-highlight-list li, .meditation-timetable table, .vx-reveal',
  );
  if (textOnly.length && !cards.length) {
    scrollFromTo(textOnly, section, { stagger: 0.08 });
  }

  const images = gsap.utils.toArray('img', section).filter(
    (img) => !img.closest('.vx-page-hero, .sh-hero, .vx-testimonial-card__avatar'),
  );
  if (images.length) {
    scrollFromTo(images, section, { scaleFrom: 0.97, scaleTo: 1, duration: 0.85 });
  }
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
        const sections = gsap.utils.toArray(SECTION_SELECTOR);
        sections.forEach(revealSection);

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
