import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const START = 'top 86%';
const TOGGLE = 'play none none none';
const DURATION = 0.88;
const Y = 28;
const STAGGER = 0.1;
const EASE = 'power3.out';

const CARD_SELECTOR = [
  '.service-block-one',
  '.vetham-service-card',
  '.vetham-contact-card',
  '.vetham-leader-card',
  '.vetham-founder-card',
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

const SKIP_IMAGE_INSIDE = [
  '.vx-page-hero',
  '.sh-hero',
  '.vx-testimonial-card__avatar',
  CARD_SELECTOR,
  '.sh-about__visual',
  '.vx-split-section__media',
  '.sh-purpose-card__media',
  '.sh-brotherhood-hero',
  '.sh-journey-card__img',
  '.sh-village-tile__img',
].join(', ');

const SECTION_SELECTOR = [
  '.sh-home .sh-section',
  '.sh-home .sh-cta',
  '.vx-page-content section',
  '.vx-page-content .sidebar-page-container',
  '.vx-split-section',
].join(', ');

function scrollTriggerConfig(trigger, extra = {}) {
  return {
    trigger,
    start: extra.start ?? START,
    toggleActions: TOGGLE,
    once: true,
    invalidateOnRefresh: true,
    ...extra.scrollTrigger,
  };
}

function scrollReveal(targets, trigger, extra = {}) {
  const list = gsap.utils.toArray(targets);
  if (!list.length) return;

  gsap.fromTo(
    list,
    {
      y: extra.yFrom ?? Y,
      autoAlpha: extra.skipFade ? 1 : 0,
      scale: extra.scaleFrom ?? 1,
      immediateRender: false,
      ...extra.from,
    },
    {
      y: 0,
      autoAlpha: 1,
      scale: extra.scaleTo ?? 1,
      duration: extra.duration ?? DURATION,
      ease: EASE,
      stagger: extra.stagger ?? STAGGER,
      clearProps: 'transform,opacity,visibility',
      immediateRender: false,
      ...extra.to,
      scrollTrigger: scrollTriggerConfig(trigger || list[0], extra),
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
      { x: -32, autoAlpha: 0, immediateRender: false },
      {
        x: 0,
        autoAlpha: 1,
        duration: DURATION,
        ease: EASE,
        clearProps: 'transform,opacity,visibility',
        immediateRender: false,
        scrollTrigger: scrollTriggerConfig(row),
      },
    );
  }
  if (copy) {
    gsap.fromTo(
      copy,
      { x: 32, autoAlpha: 0, immediateRender: false },
      {
        x: 0,
        autoAlpha: 1,
        duration: DURATION,
        ease: EASE,
        delay: 0.1,
        clearProps: 'transform,opacity,visibility',
        immediateRender: false,
        scrollTrigger: scrollTriggerConfig(row),
      },
    );
  }
}

function shouldAnimateImage(img) {
  return !img.closest(SKIP_IMAGE_INSIDE);
}

function revealSection(section) {
  if (section.closest('.vx-page-hero, .sh-hero')) return;

  const heading = section.querySelector(
    '.sec-title, .sh-section-head, .vetham-contact-cards__header, .vetham-contact-form__header',
  );
  if (heading) {
    scrollReveal(heading.children, heading, { yFrom: 20, stagger: 0.08 });
  }

  gsap.utils.toArray(
    '.sh-way__intro, .sh-village__head, .content_block_one, .vetham-services-filter-summary',
    section,
  ).forEach((block) => {
    scrollReveal(block, section, { yFrom: 22 });
  });

  const cards = section.querySelectorAll(CARD_SELECTOR);
  if (cards.length) {
    const fadeCards = [];
    const solidCards = [];
    cards.forEach((el) => {
      if (el.classList.contains('sh-dimension-tile')) solidCards.push(el);
      else fadeCards.push(el);
    });
    if (fadeCards.length) scrollReveal(fadeCards, section, { yFrom: 32, stagger: 0.09 });
    if (solidCards.length) scrollReveal(solidCards, section, { yFrom: 18, stagger: 0.07, skipFade: true });
  }

  const grids = section.querySelectorAll(
    '.sh-journey__grid, .sh-dimensions__row, .sh-peace__grid, .sh-village__tiles--row, .sh-balance__grid, .sh-way__list, .vx-testimonials__track, .vetham-contact-cards__grid, .vetham-services-grid',
  );
  grids.forEach((grid) => {
    if (!grid.querySelector(CARD_SELECTOR)) {
      scrollReveal(grid.children, grid, { stagger: 0.08 });
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
    scrollReveal(textOnly, section, { stagger: 0.06, yFrom: 18 });
  }

  const images = gsap.utils.toArray('img', section).filter(shouldAnimateImage);
  if (images.length) {
    scrollReveal(images, section, {
      scaleFrom: 0.98,
      scaleTo: 1,
      duration: 0.9,
      yFrom: 16,
      stagger: 0.06,
    });
  }
}

function runHomeHeroIntro() {
  const homeHero = document.querySelector('.sh-hero__copy');
  if (!homeHero) return;

  gsap.from(homeHero.children, {
    y: 26,
    autoAlpha: 0,
    duration: 0.82,
    stagger: 0.11,
    ease: EASE,
    delay: 0.08,
    clearProps: 'transform,opacity,visibility',
  });
}

function mountScrollAnimations(pathname) {
  const sections = gsap.utils.toArray(SECTION_SELECTOR).filter((section) => {
    if (section.closest('.sh-home') && pathname !== '/our-village') return false;
    if (section.closest('.vx-page-content') && pathname === '/our-village') return false;
    return true;
  });
  sections.forEach(revealSection);

  const pageHero = document.querySelector('.vx-page-hero__content');
  if (pageHero) {
    gsap.from(pageHero.children, {
      y: 22,
      autoAlpha: 0,
      duration: 0.72,
      stagger: 0.12,
      ease: EASE,
      clearProps: 'transform,opacity,visibility',
    });
  }

  runHomeHeroIntro();

  const cta = pathname === '/our-village' ? document.querySelector('.sh-cta') : null;
  if (cta) {
    const ctaBg = cta.querySelector('.sh-cta__bg');
    if (ctaBg) {
      gsap.fromTo(
        ctaBg,
        { yPercent: -4 },
        {
          yPercent: 8,
          ease: 'none',
          scrollTrigger: {
            trigger: cta,
            start: 'top bottom',
            end: 'bottom top',
            scrub: 0.6,
            invalidateOnRefresh: true,
          },
        },
      );
    }

    const ctaContent = cta.querySelector('.sh-cta__content');
    if (ctaContent) {
      gsap.fromTo(
        ctaContent,
        { y: 24 },
        {
          y: -20,
          ease: 'none',
          scrollTrigger: {
            trigger: cta,
            start: 'top bottom',
            end: 'bottom top',
            scrub: 0.6,
            invalidateOnRefresh: true,
          },
        },
      );
    }

    gsap.utils.toArray('.sh-cta__scroll-item').forEach((el, index) => {
      gsap.fromTo(
        el,
        { y: 36 + index * 6 },
        {
          y: -(16 + index * 4),
          ease: 'none',
          scrollTrigger: {
            trigger: cta,
            start: 'top 92%',
            end: 'center 40%',
            scrub: 0.5,
            invalidateOnRefresh: true,
          },
        },
      );
    });
  }

  ScrollTrigger.refresh(true);
  document.documentElement.classList.add('vx-scroll-anim-ready');
}

export default function useScrollReveal() {
  const { pathname } = useLocation();

  useEffect(() => {
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduced) return undefined;

    document.documentElement.classList.remove('vx-scroll-anim-ready');
    document.documentElement.classList.add('vx-scroll-anim');

    let ctx;
    let mounted = false;

    const setup = () => {
      if (mounted) return;
      mounted = true;
      ctx = gsap.context(() => {
        mountScrollAnimations(pathname);
      });
    };

    const scheduleSetup = () => {
      requestAnimationFrame(() => {
        requestAnimationFrame(setup);
      });
    };

    const onAppReady = () => scheduleSetup();
    window.addEventListener('vx:app-ready', onAppReady);

    let seen = false;
    try {
      seen = sessionStorage.getItem('vx-preloader-seen') === '1';
    } catch {
      seen = false;
    }
    const fallbackMs = seen ? 0 : (pathname === '/' || pathname === '/our-village' ? 200 : 0);
    const fallbackTimer = window.setTimeout(scheduleSetup, fallbackMs);
    if (seen) scheduleSetup();

    const onLoad = () => {
      window.setTimeout(() => ScrollTrigger.refresh(true), 200);
    };
    window.addEventListener('load', onLoad);

    const onFirstScroll = () => {
      ScrollTrigger.refresh(true);
    };
    window.addEventListener('scroll', onFirstScroll, { passive: true, once: true });

    const onResize = () => ScrollTrigger.refresh();
    window.addEventListener('resize', onResize);

    return () => {
      mounted = false;
      window.removeEventListener('vx:app-ready', onAppReady);
      window.removeEventListener('load', onLoad);
      window.removeEventListener('scroll', onFirstScroll);
      window.removeEventListener('resize', onResize);
      window.clearTimeout(fallbackTimer);
      document.documentElement.classList.remove('vx-scroll-anim', 'vx-scroll-anim-ready');
      ctx?.revert();
    };
  }, [pathname]);
}
