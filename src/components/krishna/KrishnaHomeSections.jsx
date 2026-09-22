import { useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import CountUp from 'react-countup';
import {
  ABOUT_COUNTER,
  ABOUT_FEATURES,
  ABOUT_INTRO,
  BLOG_POSTS,
  BROADCAST,
  DONATIONS,
  GALLERY_FILTERS,
  GALLERY_ITEMS,
  ICON_BLOCKS,
  SERVICES,
  VIDEOS,
  VOLUNTEERS,
} from '../../config/vethamHome';
import { SITE } from '../../config/site';
import { img } from '../../config/images';

export function AboutIntro() {
  return (
    <section className="section section-padding">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6 mb-lg-30">
            <div className="img-group-3">
              <img width="1300" height="1024" src={ABOUT_INTRO.image1} alt="Vetham community" loading="lazy" />
              <img width="1300" height="1024" src={ABOUT_INTRO.image2} alt="Meditation Hall" loading="lazy" />
              <span /><span />
            </div>
          </div>
          <div className="col-lg-6">
            <div className="me-lg-30">
              <div className="section-title mb-0 text-start wow fadeInUp" data-wow-duration="0.7s">
                <p className="subtitle">{ABOUT_INTRO.subtitle}</p>
                <h4 className="title">{ABOUT_INTRO.title}</h4>
              </div>
              <ul className="sigma_list list-2 mb-0">
                {ABOUT_FEATURES.map((item) => <li key={item}>{item}</li>)}
              </ul>
              <p className="blockquote bg-transparent">{ABOUT_INTRO.text}</p>
              <Link to="/about" className="sigma_btn-custom light">Learn More <i className="far fa-arrow-right" /></Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export function ServiceCards() {
  const variantClass = { white: 'bg-white', primary: 'primary-bg', secondary: 'secondary-bg' };

  return (
    <div className="section section-padding">
      <div className="container">
        <div className="row">
          {SERVICES.map((service) => (
            <div key={service.title} className="col-lg-4 col-md-6">
              <Link to={service.href} className={`sigma_service border text-center style-1 ${variantClass[service.variant]}`}>
                <div className="sigma_service-thumb">
                  <i className={`${service.icon}${service.variant !== 'white' ? ' text-white' : ''}${service.variant === 'secondary' ? ' custom-primary' : ''}`} />
                  <span /><span />
                </div>
                <div className="sigma_service-body">
                  <h5 className={service.variant !== 'white' ? 'text-white' : undefined}>{service.title}</h5>
                  <p className={service.variant !== 'white' ? 'text-white' : undefined}>{service.text}</p>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export function AboutCounter() {
  return (
    <section className="section pt-0">
      <div className="container">
        <div className="row">
          <div className="col-lg-5 mb-lg-30">
            <div className="kr-about-img">
              <img width="1300" height="1024" src={ABOUT_COUNTER.image} alt="Vethathiri Maharishi" loading="lazy" />
              <div className="kr-about-counter">
                <b><CountUp end={ABOUT_COUNTER.counterValue} duration={2} enableScrollSpy scrollSpyOnce /></b><span>+</span>
                <p>{ABOUT_COUNTER.counterLabel}</p>
              </div>
            </div>
          </div>
          <div className="col-lg-7">
            <div className="me-lg-30">
              <div className="section-title mb-0 text-start wow fadeInUp" data-wow-duration="0.7s">
                <p className="subtitle">{ABOUT_COUNTER.subtitle}</p>
                <h4 className="title">{ABOUT_COUNTER.title}</h4>
              </div>
              <p className="blockquote bg-transparent">{ABOUT_COUNTER.text}</p>
              <div className="row">
                {ICON_BLOCKS.map((block) => (
                  <div key={block.title} className="col-lg-6">
                    <div className="sigma_icon-block icon-block-3">
                      <div className="icon-wrapper"><i className={block.icon} /></div>
                      <div className="sigma_icon-block-content">
                        <h5>{block.title}</h5>
                        <p>{block.text}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <Link to="/about" className="sigma_btn-custom light">Learn More <i className="far fa-arrow-right" /></Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export function CtaBlock() {
  return (
    <div className="section pt-0">
      <div className="container">
        <div className="row position-relative">
          <div className="col-lg-7 col-md-6">
            <div className="sigma_cta lg primary-bg">
              <img width="669" height="759" className="d-none d-lg-block" src={img('leader')} alt="Vetham Spiritual Trust" loading="lazy" />
              <div className="sigma_cta-content">
                <span className="fw-600 custom-secondary">Need Help, Call Our HOTLINE!</span>
                <h4 className="text-white"><a href={SITE.phoneHref} className="text-white">{SITE.phone}</a></h4>
              </div>
            </div>
          </div>
          <div className="col-lg-5 col-md-6 position-relative">
            <div className="sigma_cta sm primary-bg">
              <span className="sigma_cta-sperator d-none d-lg-flex">or</span>
              <div className="sigma_cta-content">
                <form onSubmit={(e) => e.preventDefault()}>
                  <label className="mb-0 text-white">Stay Connected</label>
                  <div className="sigma_search-adv-input">
                    <input type="email" className="form-control" placeholder="Enter email address" name="email" />
                    <button type="submit" name="button"><i className="far fa-envelope" /></button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export function DonationCards() {
  return (
    <div className="section section-padding pt-0">
      <div className="container">
        <div className="section-title text-center wow fadeInUp" data-wow-duration="0.7s">
          <p className="subtitle">Donations</p>
          <h4 className="title">Support Our Spiritual Village</h4>
        </div>
        <div className="row">
          {DONATIONS.map((item) => (
            <div key={item.title} className="col-lg-4 col-md-6">
              <div className="sigma_service style-2">
                <div className="sigma_service-thumb">
                  <img width="414" height="171" src={item.image} alt={item.title} loading="lazy" />
                </div>
                <div className="sigma_service-body">
                  <h5><Link to="/our-village">{item.title}</Link></h5>
                  <p>{item.text}</p>
                  <Link to="/donate" className="sigma_btn-custom">Donate</Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export function PujaGallery() {
  const [filter, setFilter] = useState('*');

  const visible = useMemo(() => {
    if (filter === '*') return GALLERY_ITEMS;
    return GALLERY_ITEMS.filter((item) => item.classes.includes(filter));
  }, [filter]);

  return (
    <div className="section section-padding light-bg">
      <div className="container">
        <div className="section-title text-start flex-title wow fadeInUp" data-wow-duration="0.7s">
          <div>
            <p className="subtitle">Gallery</p>
            <h4 className="title mb-lg-0">Spiritual Moments & Community Events</h4>
          </div>
          <div className="text-center filter-items me-0 mb-0">
            {GALLERY_FILTERS.map((f) => (
              <h5
                key={f.key}
                className={`portfolio-trigger${filter === f.key ? ' active' : ''}`}
                data-filter={`.${f.filterClass}`}
                onClick={() => setFilter(f.key)}
                onKeyDown={(e) => e.key === 'Enter' && setFilter(f.key)}
                role="button"
                tabIndex={0}
              >
                {f.label}
              </h5>
            ))}
          </div>
        </div>
        <div className="portfolio-filter row">
          {visible.map((item) => (
            <div key={item.title} className={item.classes}>
              <div className="sigma_portfolio-item">
                <img width="370" height="420" src={item.image} alt={item.title} loading="lazy" />
                <div className="sigma_portfolio-item-content">
                  <div className="sigma_portfolio-item-content-inner">
                    <h5><Link to="/social-media">{item.title}</Link></h5>
                    <p className="blockquote bg-transparent">{item.tag}</p>
                  </div>
                  <Link to="/social-media"><i className="fal fa-plus" /></Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export function VolunteersSection() {
  return (
    <div
      className="section section-padding bg-cover secondary-overlay bg-center bg-norepeat"
      style={{ backgroundImage: `url(${img('banner1')})` }}
    >
      <div className="container">
        <div className="section-title text-center wow fadeInUp" data-wow-duration="0.7s">
          <p className="subtitle text-white">Leadership</p>
          <h4 className="title text-white">Our Founders & Spiritual Masters</h4>
        </div>
        <div className="row">
          {VOLUNTEERS.map((person) => (
            <div key={person.name} className="col-lg-3 col-md-6">
              <div className="sigma_volunteers volunteers-4">
                <div className="sigma_volunteers-thumb">
                  <img width="240" height="240" src={person.image} alt={person.name} loading="lazy" />
                  <ul className="sigma_sm">
                    <li><a href="#" className="trigger-volunteers-socials" aria-label="More"><i className="fal fa-plus" /></a></li>
                    <li><a href={SITE.social.facebook} target="_blank" rel="noopener noreferrer" aria-label="Facebook"><i className="fab fa-facebook-f" /></a></li>
                    <li><a href={SITE.social.youtube} target="_blank" rel="noopener noreferrer" aria-label="YouTube"><i className="fab fa-youtube" /></a></li>
                    <li><a href={SITE.social.instagram} target="_blank" rel="noopener noreferrer" aria-label="Instagram"><i className="fab fa-instagram" /></a></li>
                  </ul>
                </div>
                <div className="sigma_volunteers-body">
                  <div className="sigma_volunteers-info">
                    <p className="text-white">{person.role}</p>
                    <h5 className="text-white"><Link to="/leadership">{person.name}</Link></h5>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export function BroadcastSection() {
  return (
    <div className="section section-padding">
      <div className="container">
        <div className="section-title text-center wow fadeInUp" data-wow-duration="0.7s">
          <p className="subtitle">Watch Video</p>
          <h4 className="title">Our Spiritual Programs</h4>
        </div>
        <div className="row sigma_broadcast-video">
          <div className="col-12 mb-5">
            <div className="row g-0 align-items-center">
              <div className="col-lg-6">
                <div className="sigma_video-popup-wrap">
                  <img width="560" height="429" src={BROADCAST.image} alt="Vetham programs" loading="lazy" />
                  <a href={SITE.social.youtube} className="sigma_video-popup popup-youtube" target="_blank" rel="noopener noreferrer">
                    <i className="fas fa-play" />
                  </a>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="sigma_box m-0">
                  <p className="custom-primary mb-0 fw-600 fs-16">{SITE.tagline}</p>
                  <h4 className="title">{BROADCAST.title}</h4>
                  <p className="m-0">{BROADCAST.text}</p>
                  <a href={SITE.social.youtube} className="sigma_btn-custom section-button" target="_blank" rel="noopener noreferrer">Watch Video</a>
                </div>
              </div>
            </div>
          </div>
          {VIDEOS.map((video) => (
            <div key={video.title} className="col-lg-3 col-sm-6 mb-30">
              <div className="sigma_video-popup-wrap">
                <img width="270" height="170" src={video.image} alt={video.title} loading="lazy" />
                <a href={SITE.social.youtube} className="sigma_video-popup popup-sm popup-youtube" target="_blank" rel="noopener noreferrer">
                  <i className="fas fa-play" />
                </a>
              </div>
              <h6 className="mb-0 mt-3">{video.title}</h6>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export function BlogSection() {
  return (
    <div
      className="section section-padding primary-overlay bg-cover bg-center"
      style={{ backgroundImage: `url(${img('banner2')})` }}
    >
      <div className="container">
        <div className="section-title text-center wow fadeInUp" data-wow-duration="0.7s">
          <p className="subtitle text-white">The Wisdom Blog</p>
          <h4 className="title text-white">Find Valuable Information and Inspiration</h4>
        </div>
        <div className="row">
          {BLOG_POSTS.map((post) => (
            <div key={post.title} className="col-lg-4 col-md-6">
              <article className="sigma_post">
                <div className="sigma_post-thumb">
                  <Link to="/blog"><img width="370" height="240" src={post.image} alt="post" loading="lazy" /></Link>
                </div>
                <div className="sigma_post-body">
                  <div className="sigma_post-meta">
                    <div className="me-3">
                      <i className="fas fa-om" />
                      <Link to="/blog" className="sigma_post-category">Spiritual</Link>,
                      <Link to="/blog" className="sigma_post-category">Yoga</Link>
                    </div>
                    <Link to="/blog" className="sigma_post-date"><i className="far fa-calendar" /> {post.date}</Link>
                  </div>
                  <h5><Link to="/blog">{post.title}</Link></h5>
                  <div className="sigma_post-single-author">
                    <img width="60" height="60" src={post.authorImg} alt="author" loading="lazy" />
                    <div className="sigma_post-single-author-content">
                      By <p>{post.author}</p>
                    </div>
                  </div>
                </div>
              </article>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
