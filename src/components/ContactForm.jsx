import { SITE } from '../config/site';
import { WHATSAPP_GROUP } from '../config/events';

export default function ContactForm({ onSubmit }) {
  return (
    <section className="vetham-contact-form sec-pad" aria-label="Contact form">
      <div className="auto-container">
        <div className="vetham-contact-form__shell">
          <aside className="vetham-contact-form__aside">
            <span className="sub-title">Send a Message</span>
            <h3>Journey to enlightenment: experience divine love and grace</h3>
            <p>
              Need assistance with accessibility or travel? Connect with our support team or join our
              WhatsApp group for updates on spiritual classes and satsangs.
            </p>

            <ul className="vetham-contact-form__social clearfix">
              <li>
                <a href={SITE.social.facebook} target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                  <i className="fab fa-facebook-f" />
                </a>
              </li>
              <li>
                <a href={SITE.social.instagram} target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                  <i className="fab fa-instagram" />
                </a>
              </li>
              <li>
                <a href={SITE.social.youtube} target="_blank" rel="noopener noreferrer" aria-label="YouTube">
                  <i className="fab fa-youtube" />
                </a>
              </li>
            </ul>

            <div className="vetham-contact-form__quick">
              <a href={WHATSAPP_GROUP} className="vetham-contact-form__quick-link" target="_blank" rel="noopener noreferrer">
                <span className="vetham-contact-form__quick-icon" aria-hidden="true">
                  <i className="fab fa-whatsapp" />
                </span>
                <span>
                  <strong>Join WhatsApp Group</strong>
                  <small>Get satsang &amp; class updates</small>
                </span>
              </a>
              <a href={SITE.phoneHref} className="vetham-contact-form__quick-link">
                <span className="vetham-contact-form__quick-icon" aria-hidden="true">
                  <i className="fas fa-phone" />
                </span>
                <span>
                  <strong>{SITE.phone}</strong>
                  <small>Call the trust directly</small>
                </span>
              </a>
            </div>
          </aside>

          <div className="vetham-contact-form__panel">
            <header className="vetham-contact-form__panel-head">
              <h4>Write to Us</h4>
              <p>Fill in the form and we will get back to you soon.</p>
            </header>

            <form className="vetham-contact-form__form" onSubmit={onSubmit} id="contact-form">
              <div className="row clearfix">
                <div className="col-lg-6 col-md-6 col-sm-12">
                  <label className="vetham-contact-field" htmlFor="contact-name">
                    <span className="vetham-contact-field__label">Your Name</span>
                    <span className="vetham-contact-field__control">
                      <i className="fas fa-user" aria-hidden="true" />
                      <input id="contact-name" type="text" name="username" placeholder="Enter your name" required />
                    </span>
                  </label>
                </div>
                <div className="col-lg-6 col-md-6 col-sm-12">
                  <label className="vetham-contact-field" htmlFor="contact-email">
                    <span className="vetham-contact-field__label">Email Address</span>
                    <span className="vetham-contact-field__control">
                      <i className="fas fa-envelope" aria-hidden="true" />
                      <input id="contact-email" type="email" name="email" placeholder="Enter your email" required />
                    </span>
                  </label>
                </div>
                <div className="col-lg-12 col-md-12 col-sm-12">
                  <label className="vetham-contact-field" htmlFor="contact-phone">
                    <span className="vetham-contact-field__label">Phone Number</span>
                    <span className="vetham-contact-field__control">
                      <i className="fas fa-phone" aria-hidden="true" />
                      <input id="contact-phone" type="text" name="phone" placeholder="Enter your phone number" />
                    </span>
                  </label>
                </div>
                <div className="col-lg-12 col-md-12 col-sm-12">
                  <label className="vetham-contact-field" htmlFor="contact-message">
                    <span className="vetham-contact-field__label">Your Message</span>
                    <span className="vetham-contact-field__control vetham-contact-field__control--textarea">
                      <i className="fas fa-comment-alt" aria-hidden="true" />
                      <textarea id="contact-message" name="message" placeholder="How can we help you?" rows={5} />
                    </span>
                  </label>
                </div>
                <div className="col-lg-12 col-md-12 col-sm-12">
                  <button className="theme-btn-one vetham-contact-form__submit" type="submit">
                    <span>Send Message</span>
                    <i className="fas fa-paper-plane" aria-hidden="true" />
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
