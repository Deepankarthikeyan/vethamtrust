import { Helmet } from 'react-helmet-async';
import { SITE } from '../config/site';
import PageTitle from '../components/PageTitle';

export default function Contact() {
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const data = new FormData(form);
    const body = Array.from(data.entries()).map(([k, v]) => `${k}: ${v}`).join('\n');
    window.location.href = `mailto:${SITE.email}?subject=Contact from Website&body=${encodeURIComponent(body)}`;
  };

  return (
    <>
      <Helmet>
        <title>Contact Us – {SITE.name}</title>
      </Helmet>
      <PageTitle title="Contact Us" crumbs={['Contact Us']} />

      <section className="contact-info-section bg-color-1 centred">
        <div className="auto-container">
          <div className="row clearfix">
            <div className="col-lg-4 col-md-6 col-sm-12 info-column">
              <div className="info-block-one">
                <div className="inner-box">
                  <div className="icon-box"><i className="icon-63" /></div>
                  <h3>Phone Number</h3>
                  <p>Call us <br /><a href={SITE.phoneHref}>{SITE.phone}</a></p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12 info-column">
              <div className="info-block-one">
                <div className="inner-box">
                  <div className="icon-box"><i className="icon-64" /></div>
                  <h3>Email Address</h3>
                  <p><a href={`mailto:${SITE.email}`}>{SITE.email}</a></p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12 info-column">
              <div className="info-block-one">
                <div className="inner-box">
                  <div className="icon-box"><i className="icon-65" /></div>
                  <h3>Our Location</h3>
                  <p>{SITE.name}, No: 120, ST-2<br />{SITE.address}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="contact-section sec-pad">
        <div className="auto-container">
          <div className="row clearfix">
            <div className="col-lg-4 col-md-12 col-sm-12 content-column">
              <div className="content-box p_relative mr_70">
                <h3>Journey to enlightenment: We invite you to experience divine love and grace</h3>
                <p>Need assistance with Accessibility or Travel? Connect with our Support Team. Join our WhatsApp group for updates on spiritual classes and satsangs.</p>
                <ul className="social-links clearfix">
                  <li><a href={SITE.social.facebook} target="_blank" rel="noopener noreferrer"><i className="fab fa-facebook-f" /></a></li>
                  <li><a href={SITE.social.instagram} target="_blank" rel="noopener noreferrer"><i className="fab fa-instagram" /></a></li>
                  <li><a href={SITE.social.youtube} target="_blank" rel="noopener noreferrer"><i className="fab fa-youtube" /></a></li>
                </ul>
              </div>
            </div>
            <div className="col-lg-8 col-md-12 col-sm-12 form-column">
              <div className="form-inner">
                <form onSubmit={handleSubmit} id="contact-form">
                  <div className="row clearfix">
                    <div className="col-lg-6 col-md-6 col-sm-12 form-group">
                      <input type="text" name="username" placeholder="Your Name" required />
                    </div>
                    <div className="col-lg-6 col-md-6 col-sm-12 form-group">
                      <input type="email" name="email" placeholder="Your email" required />
                    </div>
                    <div className="col-lg-12 col-md-12 col-sm-12 form-group">
                      <input type="text" name="phone" placeholder="Phone" />
                    </div>
                    <div className="col-lg-12 col-md-12 col-sm-12 form-group">
                      <textarea name="message" placeholder="Message" />
                    </div>
                    <div className="col-lg-12 col-md-12 col-sm-12 form-group message-btn mr-0">
                      <button className="theme-btn-one" type="submit"><span>Send message</span></button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
