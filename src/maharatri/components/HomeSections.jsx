import { useState } from 'react';
import { Link } from 'react-router-dom';
import CountUp from 'react-countup';
import {
  ABOUT_FEATURES,
  BLOG_POSTS,
  DONATIONS,
  ICON_BLOCKS,
  PUJA_FILTERS,
  PUJA_ITEMS,
  SERVICES,
  VIDEOS,
  VOLUNTEERS,
} from '../config/home';
import { SITE } from '../config/site';
import { asset } from '../utils/assets';

const PUJA_TEXT = 'Puja is the worship of the Lord, consectet ur adipisicing elit, sed do eiusmod';

export function AboutIntro() {
  return (
    <section className="section section-padding">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6 mb-lg-30">
            <div className="img-group-3">
              <img width="1300" height="1024" src={asset('assets/img/banner/s1.webp')} alt="Krishna temple" loading="lazy" />
              <img width="1300" height="1024" src={asset('assets/img/banner/s3.webp')} alt="Hindu devotion" loading="lazy" />
              <span /><span />
            </div>
          </div>
          <div className="col-lg-6">
            <div className="me-lg-30">
              <div className="section-title mb-0 text-start wow fadeInUp" data-wow-duration="0.7s">
                <p className="subtitle">EDUCATION FOR ALL RURAL CHILDREN</p>
                <h4 className="title">We are a Hindu that believe in Ram</h4>
              </div>
              <ul className="sigma_list list-2 mb-0">
                {ABOUT_FEATURES.map((item) => <li key={item}>{item}</li>)}
              </ul>
              <p className="blockquote bg-transparent">
                We are a Hindu that belives in Lord Rama and Vishnu Deva the followers and We are a Hindu that belives in Lord Rama and Vishnu Deva.
              </p>
              <Link to="/about" className="sigma_btn-custom light">Learn More <i className="far fa-arrow-right" /></Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export function ServiceCards() {
  const variantClass = {
    white: 'bg-white',
    primary: 'primary-bg',
    secondary: 'secondary-bg',
  };

  return (
    <div className="section section-padding">
      <div className="container">
        <div className="row">
          {SERVICES.map((service) => (
            <div key={service.title} className="col-lg-4 col-md-6">
              <Link to="/services" className={`sigma_service border text-center style-1 ${variantClass[service.variant]}`}>
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
              <img width="1300" height="1024" src={asset('assets/img/banner/s4.webp')} alt="Hindu temple" loading="lazy" />
              <div className="kr-about-counter">
                <b><CountUp end={25} duration={2} enableScrollSpy scrollSpyOnce /></b><span>+</span>
                <p>Years of Service</p>
              </div>
            </div>
          </div>
          <div className="col-lg-7">
            <div className="me-lg-30">
              <div className="section-title mb-0 text-start wow fadeInUp" data-wow-duration="0.7s">
                <p className="subtitle">Education for all rural children</p>
                <h4 className="title">We Are A Hindu That Believes In Rama.</h4>
              </div>
              <p className="blockquote bg-transparent">
                We are a Hindu that belives in Lord Rama and Vishnu Deva the followers and We are a Hindu that belives in Lord Rama and Vishnu Deva.
              </p>
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
              <img width="669" height="759" className="d-none d-lg-block" src={asset('assets/img/cta/3.webp')} alt="cta" loading="lazy" />
              <div className="sigma_cta-content">
                <span className="fw-600 custom-secondary">Need Help, Call Our HOTLINE!</span>
                <h4 className="text-white">{SITE.hotline}</h4>
              </div>
            </div>
          </div>
          <div className="col-lg-5 col-md-6 position-relative">
            <div className="sigma_cta sm primary-bg">
              <span className="sigma_cta-sperator d-none d-lg-flex">or</span>
              <div className="sigma_cta-content">
                <form onSubmit={(e) => e.preventDefault()}>
                  <label className="mb-0 text-white">Temple Newsletter</label>
                  <div className="sigma_search-adv-input">
                    <input type="email" className="form-control" placeholder="Enter email address" />
                    <button type="submit"><i className="far fa-envelope" /></button>
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
          <p className="subtitle">Donate To Help</p>
          <h4 className="title">Make a Donation to Help Community</h4>
        </div>
        <div className="row">
          {DONATIONS.map((item) => (
            <div key={item.title} className="col-lg-4 col-md-6">
              <div className="sigma_service style-2">
                <div className="sigma_service-thumb">
                  <img width="414" height="171" src={asset(item.image)} alt={item.title} loading="lazy" />
                </div>
                <div className="sigma_service-body">
                  <h5><Link to="/donate">{item.title}</Link></h5>
                  <p>Temple is place where hindu worship consectetur adipisicing elit, sed do</p>
                  <div className="sigma_service-progress">
                    <div className="progress-content">
                      <p>Raised: {item.raised}</p>
                      <p>Goal: {item.goal}</p>
                    </div>
                    <div className="sigma_progress">
                      <div className="progress">
                        <div className="progress-bar" style={{ width: `${item.percent}%` }} role="progressbar" aria-valuenow={item.percent} aria-valuemin="0" aria-valuemax="100" />
                      </div>
                    </div>
                  </div>
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
  const visible = PUJA_ITEMS.filter((item) => filter === '*' || item.categories.includes(filter));

  return (
    <div className="section section-padding light-bg" id="puja">
      <div className="container">
        <div className="section-title text-start flex-title wow fadeInUp" data-wow-duration="0.7s">
          <div>
            <p className="subtitle">Puja</p>
            <h4 className="title mb-lg-0">Our Puja</h4>
          </div>
          <div className="text-center filter-items me-0 mb-0">
            {PUJA_FILTERS.map((f) => (
              <button
                key={f.key}
                type="button"
                className={`portfolio-trigger${filter === f.key ? ' active' : ''}`}
                onClick={() => setFilter(f.key)}
              >
                {f.label}
              </button>
            ))}
          </div>
        </div>
        <div className="portfolio-filter row">
          {visible.map((item) => (
            <div key={item.title} className="col-lg-4">
              <div className="sigma_portfolio-item">
                <img width="370" height="420" src={asset(item.image)} alt={item.title} loading="lazy" />
                <div className="sigma_portfolio-item-content">
                  <div className="sigma_portfolio-item-content-inner">
                    <h5><Link to="/#puja">{item.title}</Link></h5>
                    <p className="blockquote bg-transparent">{PUJA_TEXT}</p>
                  </div>
                  <Link to="/#puja"><i className="fal fa-plus" /></Link>
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
      id="volunteers"
      style={{ backgroundImage: `url(${asset('assets/img/banner/s1.webp')})` }}
    >
      <div className="container">
        <div className="section-title text-center wow fadeInUp" data-wow-duration="0.7s">
          <p className="subtitle text-white">Who</p>
          <h4 className="title text-white">Our Volunteers</h4>
        </div>
        <div className="row">
          {VOLUNTEERS.map((person) => (
            <div key={person.name} className="col-lg-3 col-md-6">
              <div className="sigma_volunteers volunteers-4">
                <div className="sigma_volunteers-thumb">
                  <img width="240" height="240" src={asset(person.image)} alt={person.name} loading="lazy" />
                  <ul className="sigma_sm">
                    <li><a href="#" className="trigger-volunteers-socials"><i className="fal fa-plus" /></a></li>
                    <li><a href="#" aria-label="Facebook"><i className="fab fa-facebook-f" /></a></li>
                    <li><a href="#" aria-label="Twitter"><i className="fab fa-twitter" /></a></li>
                    <li><a href="#" aria-label="Instagram"><i className="fab fa-instagram" /></a></li>
                  </ul>
                </div>
                <div className="sigma_volunteers-body">
                  <div className="sigma_volunteers-info">
                    <p className="text-white">{person.role}</p>
                    <h5 className="text-white"><a href="#">{person.name}</a></h5>
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
          <h4 className="title">Our Live Broadcast</h4>
        </div>
        <div className="row sigma_broadcast-video">
          <div className="col-12 mb-5">
            <div className="row g-0 align-items-center">
              <div className="col-lg-6">
                <div className="sigma_video-popup-wrap">
                  <img width="560" height="429" src={asset('assets/img/video-gallery/01.webp')} alt="video" loading="lazy" />
                  <a href={SITE.youtube} className="sigma_video-popup popup-youtube" target="_blank" rel="noopener noreferrer">
                    <i className="fas fa-play" />
                  </a>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="sigma_box m-0">
                  <p className="custom-primary mb-0 fw-600 fs-16">Aug 12, 2026</p>
                  <h4 className="title">Serving the needs of the Hindu Community</h4>
                  <p className="m-0">
                    We are a Hindu that belives in Lord Rama and Vishnu Deva the followers and We are a Hindu that belives in Lord Rama and Vishnu Deva.
                  </p>
                  <a href={SITE.youtube} className="sigma_btn-custom section-button" target="_blank" rel="noopener noreferrer">Watch Video</a>
                </div>
              </div>
            </div>
          </div>
          {VIDEOS.map((video) => (
            <div key={video.title} className="col-lg-3 col-sm-6 mb-30">
              <div className="sigma_video-popup-wrap">
                <img width="270" height="170" src={asset(video.image)} alt={video.title} loading="lazy" />
                <a href={SITE.youtube} className="sigma_video-popup popup-sm popup-youtube" target="_blank" rel="noopener noreferrer">
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
      style={{ backgroundImage: `url(${asset('assets/img/banner/s3.webp')})` }}
    >
      <div className="container">
        <div className="section-title text-center wow fadeInUp" data-wow-duration="0.7s">
          <p className="subtitle text-white">Blog</p>
          <h4 className="title text-white">News Feed</h4>
        </div>
        <div className="row">
          {BLOG_POSTS.map((post) => (
            <div key={post.title} className="col-lg-4 col-md-6">
              <article className="sigma_post">
                <div className="sigma_post-thumb">
                  <Link to="/blog"><img width="370" height="240" src={asset(post.image)} alt="post" loading="lazy" /></Link>
                </div>
                <div className="sigma_post-body">
                  <div className="sigma_post-meta">
                    <div className="me-3">
                      <i className="fas fa-om" />
                      <Link to="/blog" className="sigma_post-category">Temple</Link>,
                      <Link to="/blog" className="sigma_post-category">Love</Link>
                    </div>
                    <Link to="/blog" className="sigma_post-date"><i className="far fa-calendar" /> {post.date}</Link>
                  </div>
                  <h5><Link to="/blog">{post.title}</Link></h5>
                  <div className="sigma_post-single-author">
                    <img width="60" height="60" src={asset(post.authorImg)} alt="author" loading="lazy" />
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
