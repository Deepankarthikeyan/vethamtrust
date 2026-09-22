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
      <div className="vx-container vx-hero__content">
        <p className="vx-hero__subtitle">{HERO.subtitle}</p>
        <h1 className="vx-hero__title">{HERO.title}</h1>
        <p className="vx-hero__text">{HERO.text}</p>
        <MagneticButton to={HERO.cta.path}>{HERO.cta.label}</MagneticButton>
      </div>
      <Link to="/about" className="vx-hero__explore" data-cursor="EXPLORE">Explore</Link>
    </section>
  );
}

export function PhilosophySection() {
  const ref = useRef(null);
  const words = PHILOSOPHY_QUOTE.split(' ');

  useEffect(() => {
    if (!ref.current) return undefined;
    const spans = ref.current.querySelectorAll('span');
    const ctx = gsap.context(() => {
      spans.forEach((span, i) => {
        ScrollTrigger.create({
          trigger: ref.current,
          start: `top ${60 - i * 8}%`,
          onEnter: () => span.classList.add('is-lit'),
          onLeaveBack: () => span.classList.remove('is-lit'),
        });
      });
    }, ref);
    return () => ctx.revert();
  }, []);

  return (
    <section className="vx-philosophy vx-section--dark" data-vx-section="2" ref={ref}>
      <p className="vx-philosophy__quote" aria-label={PHILOSOPHY_QUOTE}>
        {words.map((word, i) => (
          <span key={i}>{word}{i < words.length - 1 ? ' ' : ''}</span>
        ))}
      </p>
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
          scrub: 1,
          invalidateOnRefresh: true,
        },
      });
    }, wrapRef);

    return () => ctx.revert();
  }, []);

  return (
    <section className="vx-hscroll vx-section--soft" data-vx-section="3" ref={wrapRef}>
      <div className="vx-hscroll__sticky">
        <div className="vx-container vx-hscroll__head">
          <span className="vx-eyebrow">Our Story</span>
          <h2 className="vx-title-lg">A Journey Through Four Chapters</h2>
        </div>
        <div className="vx-hscroll__track" ref={trackRef}>
          {ABOUT_CHAPTERS.map((ch) => (
            <article key={ch.num} className="vx-hscroll__card" data-cursor="DRAG">
              <div className="vx-hscroll__card-img">
                <img src={ch.image} alt={ch.title} loading="lazy" />
              </div>
              <div className="vx-hscroll__card-body">
                <p className="vx-hscroll__num">Chapter {ch.num}</p>
                <h3 className="vx-title-md">{ch.title}</h3>
                <p className="vx-text" style={{ marginTop: 12 }}>{ch.text}</p>
              </div>
            </article>
          ))}
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
              <p className="vx-text" style={{ fontSize: '1.15rem', color: 'var(--vx-text)' }}>{text}</p>
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
          <span className="vx-eyebrow">Founder & Spiritual Master</span>
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

const GALLERY_LAYOUT = ['vx-gallery__item--wide', 'vx-gallery__item--sq', 'vx-gallery__item--tall', 'vx-gallery__item--sq', 'vx-gallery__item--wide', 'vx-gallery__item--sq'];

export function GallerySection() {
  const [lightbox, setLightbox] = useState(null);

  return (
    <section className="vx-section vx-section--soft" data-vx-section="10">
      <div className="vx-container">
        <div style={{ marginBottom: 48 }}>
          <span className="vx-eyebrow">Gallery</span>
          <h2 className="vx-title-lg">Spiritual Moments & Community Events</h2>
        </div>
        <div className="vx-gallery">
          {GALLERY_ITEMS.map((item, i) => (
            <button
              key={`${item.title}-${i}`}
              type="button"
              className={`vx-gallery__item ${GALLERY_LAYOUT[i % GALLERY_LAYOUT.length]}`}
              onClick={() => setLightbox(item)}
              data-cursor="VIEW"
            >
              <img src={item.image} alt={item.title} loading="lazy" />
              <div className="vx-gallery__overlay">
                <span>{item.title}</span>
              </div>
            </button>
          ))}
        </div>
      </div>
      {lightbox && (
        <div className="vx-lightbox" role="dialog" aria-label="Image preview">
          <button type="button" className="vx-lightbox__close" onClick={() => setLightbox(null)} aria-label="Close">
            <i className="fas fa-times" />
          </button>
          <img src={lightbox.image} alt={lightbox.title} />
        </div>
      )}
    </section>
  );
}

export function EventsSection() {
  const [active, setActive] = useState(0);
  const listRef = useRef(null);

  useEffect(() => {
    if (!listRef.current) return undefined;
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
            title="Vetham Spiritual Trust location"
            src="https://maps.google.com/maps?q=Vetham+Kuzhumam+Spiritual+Trust+Coimbatore&t=&z=13&ie=UTF8&iwloc=&output=embed"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
    </section>
  );
}
