import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import CountUp from 'react-countup';
import { gsap, ScrollTrigger } from '../../hooks/useGsapRefresh';
import {
  ABOUT_CHAPTERS,
  DONATION_CTA,
  EVENTS_LIST,
  FOUNDER,
  GALLERY_ITEMS,
  HERO,
  IMPACT_STATS,
  JOURNEY_STAGES,
  PHILOSOPHY,
  PHILOSOPHY_QUOTE,
  PROGRAMS,
  PURPOSE_STATEMENTS,
  SCROLL_QUOTES,
} from '../../config/cinematic';
import { SITE } from '../../config/site';
import MagneticButton from './MagneticButton';

export function HeroSection() {
  const bgRef = useRef(null);

  useEffect(() => {
    if (!bgRef.current || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return undefined;
    const ctx = gsap.context(() => {
      gsap.to(bgRef.current, {
        scale: 1,
        ease: 'none',
        scrollTrigger: { trigger: bgRef.current, start: 'top top', end: 'bottom top', scrub: true },
      });
    });
    return () => ctx.revert();
  }, []);

  return (
    <section className="vx-hero" data-vx-section="1">
      <div ref={bgRef} className="vx-hero__bg" style={{ backgroundImage: `url(${HERO.image})` }} />
      <div className="vx-hero__overlay" />
      <div className="vx-container vx-hero__shell">
        <div className="vx-hero__content">
          <p className="vx-hero__subtitle">{HERO.subtitle}</p>
          <h1 className="vx-hero__title">{HERO.title}</h1>
          <p className="vx-hero__text">{HERO.text}</p>
          <MagneticButton className="vx-btn vx-btn--primary vx-hero__cta" to={HERO.cta.path}>
            {HERO.cta.label}
          </MagneticButton>
        </div>
      </div>
      <Link to="/about" className="vx-hero__explore" data-cursor="EXPLORE">Explore</Link>
    </section>
  );
}

export function PhilosophySection() {
  const ref = useRef(null);
  const quoteRef = useRef(null);
  const words = PHILOSOPHY_QUOTE.split(' ');

  useEffect(() => {
    if (!quoteRef.current) return undefined;
    const spans = quoteRef.current.querySelectorAll('span');
    const ctx = gsap.context(() => {
      spans.forEach((span, i) => {
        ScrollTrigger.create({
          trigger: quoteRef.current,
          start: `top ${72 - i * 6}%`,
          onEnter: () => span.classList.add('is-lit'),
          onLeaveBack: () => span.classList.remove('is-lit'),
        });
      });
      const pillars = ref.current?.querySelectorAll('.vx-philosophy__pillar');
      if (pillars?.length) {
        gsap.from(pillars, {
          opacity: 0,
          y: 28,
          duration: 0.7,
          stagger: 0.12,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: ref.current,
            start: 'top 72%',
          },
        });
      }
    }, ref);
    return () => ctx.revert();
  }, []);

  return (
    <section className="vx-philosophy" data-vx-section="2" ref={ref} aria-labelledby="vx-philosophy-title">
      <div className="vx-container vx-philosophy__inner">
        <header className="vx-philosophy__head">
          <span className="vx-eyebrow">{PHILOSOPHY.eyebrow}</span>
          <p id="vx-philosophy-title" className="vx-philosophy__ribbon">{PHILOSOPHY.ribbon}</p>
        </header>

        <div className="vx-philosophy__grid">
          <div className="vx-philosophy__quote-wrap">
            <p className="vx-philosophy__quote" ref={quoteRef} aria-label={PHILOSOPHY_QUOTE}>
              {words.map((word, i) => (
                <span key={i}>{word}{i < words.length - 1 ? ' ' : ''}</span>
              ))}
            </p>
          </div>

          <div className="vx-philosophy__detail">
            <p className="vx-philosophy__lede">{PHILOSOPHY.lede}</p>
            <ul className="vx-philosophy__pillars">
              {PHILOSOPHY.pillars.map((pillar) => (
                <li key={pillar.title} className="vx-philosophy__pillar">
                  <span className="vx-philosophy__pillar-mark" aria-hidden="true" />
                  <div>
                    <h3 className="vx-philosophy__pillar-title">{pillar.title}</h3>
                    <p className="vx-philosophy__pillar-text">{pillar.text}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export function AboutHorizontalSection() {
  const wrapRef = useRef(null);
  const trackRef = useRef(null);

  useEffect(() => {
    if (!wrapRef.current || !trackRef.current) return undefined;
    if (window.matchMedia('(max-width: 1024px)').matches) return undefined;

    const track = trackRef.current;
    const getScroll = () => track.scrollWidth - window.innerWidth + 100;

    const ctx = gsap.context(() => {
      gsap.to(track, {
        x: () => -getScroll(),
        ease: 'none',
        scrollTrigger: {
          trigger: wrapRef.current,
          start: 'top top',
          end: () => `+=${getScroll()}`,
          pin: true,
          pinReparent: true,
          anticipatePin: 1,
          scrub: 1,
          invalidateOnRefresh: true,
        },
      });
    }, wrapRef);

    return () => ctx.revert();
  }, []);

  return (
    <section className="vx-chapters vx-section--soft" data-vx-section="3" aria-labelledby="vx-chapters-title">
      <div className="vx-container vx-chapters__intro">
        <span className="vx-eyebrow">Our Story</span>
        <h2 id="vx-chapters-title" className="vx-title-lg vx-chapters__title">
          A Journey Through Four Chapters
        </h2>
        <p className="vx-text vx-chapters__lede">
          Four milestones on the path from vision to village — each chapter of our story in Coimbatore and beyond.
        </p>
      </div>
      <div className="vx-hscroll vx-hscroll--chapters" ref={wrapRef}>
        <div className="vx-hscroll__sticky">
          <div className="vx-hscroll__track" ref={trackRef}>
            {ABOUT_CHAPTERS.map((ch, i) => (
              <article
                key={ch.num}
                className="vx-hscroll__card vx-chapters__card"
                data-cursor="DRAG"
                style={{ '--chapter-i': i }}
              >
                <div className="vx-hscroll__card-img">
                  <img src={ch.image} alt={ch.title} loading="lazy" decoding="async" />
                </div>
                <div className="vx-hscroll__card-body">
                  <p className="vx-hscroll__num">Chapter {ch.num}</p>
                  <h3 className="vx-title-md">{ch.title}</h3>
                  <p className="vx-text vx-chapters__card-text">{ch.text}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export function PurposeSection() {
  const [active, setActive] = useState(0);
  const sectionRef = useRef(null);

  useEffect(() => {
    if (!sectionRef.current) return undefined;
    if (window.matchMedia('(max-width: 1024px)').matches) return undefined;
    const items = sectionRef.current.querySelectorAll('[data-purpose-item]');
    const triggers = Array.from(items).map((item, i) => ScrollTrigger.create({
      trigger: item,
      start: 'top center',
      end: 'bottom center',
      onEnter: () => setActive(i),
      onEnterBack: () => setActive(i),
    }));
    return () => triggers.forEach((t) => t.kill());
  }, []);

  return (
    <section className="vx-section vx-section--dark" data-vx-section="4" ref={sectionRef}>
      <div className="vx-container vx-purpose">
        <div className="vx-purpose__sticky">
          <span className="vx-eyebrow">Our Purpose</span>
          <h2 className="vx-title-lg">Why We Exist</h2>
          <div className="vx-purpose__visual" style={{ marginTop: 32 }}>
            <img src={ABOUT_CHAPTERS[active]?.image || ABOUT_CHAPTERS[0].image} alt="" />
          </div>
        </div>
        <div className="vx-purpose__list">
          {PURPOSE_STATEMENTS.map((text, i) => (
            <div key={i} className={`vx-purpose__item${active === i ? ' is-active' : ''}`} data-purpose-item>
              <p className="vx-text vx-purpose__text">{text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function ProgramsSection() {
  return (
    <section className="vx-section vx-section--soft" data-vx-section="5">
      <div className="vx-container">
        <div style={{ marginBottom: 48 }}>
          <span className="vx-eyebrow">Programs & Services</span>
          <h2 className="vx-title-lg">Paths to Inner Peace</h2>
        </div>
        <div className="vx-programs__grid">
          {PROGRAMS.map((p) => (
            <Link key={p.title} to={p.href} className="vx-program-card" data-cursor="VIEW">
              <div className="vx-program-card__img"><img src={p.image} alt="" loading="lazy" /></div>
              <div className="vx-program-card__overlay" />
              <div className="vx-program-card__body">
                <div className="vx-program-card__icon"><i className={p.icon} aria-hidden="true" /></div>
                <h3 className="vx-title-md vx-program-card__title">{p.title}</h3>
                <p className="vx-program-card__desc">{p.text}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

export function JourneySection() {
  const lineRef = useRef(null);
  const sectionRef = useRef(null);

  useEffect(() => {
    if (!lineRef.current || !sectionRef.current) return undefined;
    const ctx = gsap.context(() => {
      gsap.to(lineRef.current, {
        height: '100%',
        ease: 'none',
        scrollTrigger: { trigger: sectionRef.current, start: 'top center', end: 'bottom center', scrub: true },
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section className="vx-section vx-section--dark" data-vx-section="6" ref={sectionRef}>
      <div className="vx-container">
        <div style={{ marginBottom: 48 }}>
          <span className="vx-eyebrow">The Journey</span>
          <h2 className="vx-title-lg">Discover → Practice → Transform → Serve</h2>
        </div>
        <div className="vx-journey">
          <div className="vx-journey__line"><div ref={lineRef} className="vx-journey__line-fill" /></div>
          {JOURNEY_STAGES.map((stage) => (
            <div key={stage.label} className="vx-journey__step is-active">
              <div className="vx-journey__dot" />
              <div className="vx-journey__grid">
                <div>
                  <span className="vx-eyebrow">{stage.label}</span>
                  <h3 className="vx-title-md">{stage.title}</h3>
                  <p className="vx-text" style={{ marginTop: 12 }}>{stage.text}</p>
                </div>
                <div className="vx-journey__img">
                  <img src={stage.image} alt={stage.title} loading="lazy" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function FounderSection() {
  const ref = useRef(null);

  useEffect(() => {
    if (!ref.current) return undefined;
    const ctx = gsap.context(() => {
      ScrollTrigger.create({
        trigger: ref.current,
        start: 'top 70%',
        onEnter: () => ref.current?.classList.add('is-revealed'),
      });
    }, ref);
    return () => ctx.revert();
  }, []);

  return (
    <section className="vx-section vx-section--soft" data-vx-section="7" ref={ref}>
      <div className="vx-container vx-founder">
        <div className="vx-founder__portrait">
          <img src={FOUNDER.image} alt={FOUNDER.name} loading="lazy" />
        </div>
        <div>
          <span className="vx-eyebrow">Spiritual Master</span>
          <h2 className="vx-title-lg">{FOUNDER.name}</h2>
          <p className="vx-text" style={{ marginTop: 8, color: 'var(--vx-gold)' }}>{FOUNDER.role} · Since {FOUNDER.since}</p>
          <p className="vx-text" style={{ marginTop: 20 }}>{FOUNDER.bio}</p>
          {FOUNDER.headline ? <p className="vx-text" style={{ marginTop: 12, fontStyle: 'italic' }}>{FOUNDER.headline}</p> : null}
          <blockquote className="vx-founder__quote">{FOUNDER.quote}</blockquote>
          <MagneticButton to="/leadership" className="vx-btn vx-btn--ghost" style={{ marginTop: 24 }}>View Leadership</MagneticButton>
        </div>
      </div>
    </section>
  );
}

export function QuoteTypographySection() {
  const [index, setIndex] = useState(0);
  const ref = useRef(null);

  useEffect(() => {
    if (!ref.current) return undefined;
    const ctx = gsap.context(() => {
      ScrollTrigger.create({
        trigger: ref.current,
        start: 'top center',
        end: 'bottom center',
        onUpdate: (self) => {
          const i = Math.min(SCROLL_QUOTES.length - 1, Math.floor(self.progress * SCROLL_QUOTES.length));
          setIndex(i);
        },
      });
    }, ref);
    return () => ctx.revert();
  }, []);

  return (
    <section
      className="vx-quote-scroll"
      data-vx-section="8"
      ref={ref}
      style={{ backgroundImage: `url(${HERO.image})` }}
    >
      <p className="vx-quote-scroll__text">&ldquo;{SCROLL_QUOTES[index]}&rdquo;</p>
    </section>
  );
}

export function ImpactSection() {
  return (
    <section className="vx-section vx-section--dark" data-vx-section="9">
      <div className="vx-container">
        <div style={{ textAlign: 'center', marginBottom: 56 }}>
          <span className="vx-eyebrow">Our Impact</span>
          <h2 className="vx-title-lg">Touching Lives Across the Globe</h2>
        </div>
        <div className="vx-impact__grid">
          {IMPACT_STATS.map((stat) => (
            <div key={stat.label}>
              <div className="vx-impact__num">
                <CountUp end={stat.value} duration={2.5} enableScrollSpy scrollSpyOnce />
                {stat.suffix}
              </div>
              <p className="vx-impact__label">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

const GALLERY_CELL_LAYOUT = ['featured', 'sq', 'sq', 'wide', 'tall', 'sq'];

function GalleryLightbox({ index, onClose, onChange }) {
  const item = GALLERY_ITEMS[index];

  useEffect(() => {
    const onKey = (event) => {
      if (event.key === 'Escape') onClose();
      if (event.key === 'ArrowLeft') onChange((index - 1 + GALLERY_ITEMS.length) % GALLERY_ITEMS.length);
      if (event.key === 'ArrowRight') onChange((index + 1) % GALLERY_ITEMS.length);
    };
    window.addEventListener('keydown', onKey);
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keydown', onKey);
      document.body.style.overflow = prevOverflow;
    };
  }, [index, onClose, onChange]);

  if (!item) return null;

  const goPrev = () => onChange((index - 1 + GALLERY_ITEMS.length) % GALLERY_ITEMS.length);
  const goNext = () => onChange((index + 1) % GALLERY_ITEMS.length);

  return (
    <div
      className="vx-lightbox"
      role="dialog"
      aria-modal="true"
      aria-label="Gallery preview"
      onClick={(event) => {
        if (event.target === event.currentTarget) onClose();
      }}
    >
      <p className="vx-lightbox__counter">{index + 1} / {GALLERY_ITEMS.length}</p>
      <button type="button" className="vx-lightbox__close" onClick={onClose} aria-label="Close preview">
        <i className="fas fa-times" />
      </button>
      <button type="button" className="vx-lightbox__nav vx-lightbox__nav--prev" onClick={goPrev} aria-label="Previous image">
        <i className="fas fa-chevron-left" aria-hidden="true" />
      </button>
      <figure className="vx-lightbox__figure">
        <img src={item.image} alt={item.title} />
        <figcaption className="vx-lightbox__caption">{item.title}</figcaption>
      </figure>
      <button type="button" className="vx-lightbox__nav vx-lightbox__nav--next" onClick={goNext} aria-label="Next image">
        <i className="fas fa-chevron-right" aria-hidden="true" />
      </button>
    </div>
  );
}

export function GallerySection() {
  const [lightboxIndex, setLightboxIndex] = useState(null);

  return (
    <section className="vx-section vx-section--soft vx-gallery-section" data-vx-section="10">
      <div className="vx-container">
        <div style={{ marginBottom: 48 }}>
          <span className="vx-eyebrow">Gallery</span>
          <h2 className="vx-title-lg">Spiritual Moments & Community Events</h2>
        </div>
        <div className="vx-gallery-masonry vx-gallery-masonry--home">
          {GALLERY_ITEMS.map((item, i) => (
            <button
              key={`${item.title}-${i}`}
              type="button"
              className={`vx-gallery-masonry__cell vx-gallery-masonry__cell--${GALLERY_CELL_LAYOUT[i % GALLERY_CELL_LAYOUT.length]} vx-gallery-home__item`}
              onClick={() => setLightboxIndex(i)}
              data-cursor="VIEW"
            >
              <img src={item.image} alt={item.title} loading="lazy" decoding="async" />
              <span className="vx-gallery-home__shade" aria-hidden="true" />
              <span className="vx-gallery-home__caption">{item.title}</span>
            </button>
          ))}
        </div>
      </div>
      {lightboxIndex !== null && (
        <GalleryLightbox
          index={lightboxIndex}
          onClose={() => setLightboxIndex(null)}
          onChange={setLightboxIndex}
        />
      )}
    </section>
  );
}

export function EventsSection() {
  const [active, setActive] = useState(0);
  const listRef = useRef(null);

  useEffect(() => {
    if (!listRef.current) return undefined;
    if (window.matchMedia('(max-width: 1024px)').matches) return undefined;
    const cards = listRef.current.querySelectorAll('.vx-event-card');
    const triggers = Array.from(cards).map((card, i) => ScrollTrigger.create({
      trigger: card,
      start: 'top center',
      end: 'bottom center',
      onEnter: () => setActive(i),
      onEnterBack: () => setActive(i),
    }));
    return () => triggers.forEach((t) => t.kill());
  }, []);

  return (
    <section className="vx-section vx-section--dark" data-vx-section="11">
      <div className="vx-container vx-events">
        <div className="vx-events__sticky">
          <span className="vx-eyebrow">Events</span>
          <h2 className="vx-title-lg">Upcoming Events & Programs</h2>
          <p className="vx-text" style={{ marginTop: 16 }}>Join our spiritual programs, courses, and community gatherings in Coimbatore and online.</p>
          <MagneticButton to="/events" className="vx-btn vx-btn--ghost" style={{ marginTop: 24 }}>View All Events</MagneticButton>
        </div>
        <div ref={listRef}>
          {EVENTS_LIST.map((event, i) => (
            <article key={event.id} className={`vx-event-card${active === i ? ' is-active' : ''}`}>
              <div className="vx-event-card__date">{event.badge || event.date || 'Event'}</div>
              <div>
                <div className="vx-event-card__icon"><i className={event.icon || 'fas fa-calendar'} aria-hidden="true" /></div>
                <h3 className="vx-title-md" style={{ marginTop: 12 }}>{event.title}</h3>
                <p className="vx-text" style={{ marginTop: 8 }}>{event.period || event.date} — {event.description}</p>
                {event.cta ? (
                  <Link to={event.cta.path} className="vx-btn vx-btn--text" style={{ marginTop: 12 }} data-cursor="EXPLORE">
                    {event.cta.label} <i className="fas fa-arrow-right" />
                  </Link>
                ) : null}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export function DonationSection() {
  return (
    <section className="vx-donate-cta" data-vx-section="12">
      <div className="vx-donate-cta__bg" style={{ backgroundImage: `url(${DONATION_CTA.image})` }} />
      <div className="vx-donate-cta__overlay" />
      <div className="vx-donate-cta__content">
        <span className="vx-eyebrow">Support the Mission</span>
        <h2 className="vx-title-lg">{DONATION_CTA.headline}</h2>
        <p className="vx-text" style={{ margin: '20px auto 32px', maxWidth: 560 }}>{DONATION_CTA.text}</p>
        <MagneticButton to="/donate">Support the Mission</MagneticButton>
      </div>
    </section>
  );
}

export function ContactSection() {
  return (
    <section className="vx-section vx-section--soft" data-vx-section="13">
      <div className="vx-container vx-contact-teaser">
        <div>
          <span className="vx-eyebrow">Contact</span>
          <h2 className="vx-title-lg">Visit Us in Coimbatore</h2>
          <div style={{ marginTop: 32 }}>
            <div className="vx-contact-item">
              <i className="fas fa-map-marker-alt" aria-hidden="true" />
              <div><strong>Address</strong><p className="vx-text">{SITE.address}</p></div>
            </div>
            <div className="vx-contact-item">
              <i className="fas fa-phone" aria-hidden="true" />
              <div><strong>Phone</strong><p className="vx-text"><a href={SITE.phoneHref}>{SITE.phone}</a></p></div>
            </div>
            <div className="vx-contact-item">
              <i className="fas fa-envelope" aria-hidden="true" />
              <div><strong>Email</strong><p className="vx-text"><a href={`mailto:${SITE.email}`}>{SITE.email}</a></p></div>
            </div>
          </div>
          <div style={{ display: 'flex', gap: 12, marginTop: 24, flexWrap: 'wrap' }}>
            <MagneticButton to="/contact">Get in Touch</MagneticButton>
            <a href={SITE.mapsUrl} className="vx-btn vx-btn--ghost" target="_blank" rel="noopener noreferrer" data-cursor="EXPLORE">
              Get Directions <i className="fas fa-arrow-right" />
            </a>
          </div>
        </div>
        <div className="vx-contact-teaser__map">
          <iframe
            title="Vetham Kuzhumam Spiritual Trust location"
            src="https://maps.google.com/maps?q=Vetham+Kuzhumam+Spiritual+Trust+Coimbatore&t=&z=13&ie=UTF8&iwloc=&output=embed"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
    </section>
  );
}
