import { SITE } from '../config/site';

const CONTACT_ITEMS = [
  {
    key: 'phone',
    icon: 'fas fa-phone',
    label: 'Phone Number',
    hint: 'Call us anytime',
    value: SITE.phone,
    href: SITE.phoneHref,
    external: false,
  },
  {
    key: 'email',
    icon: 'fas fa-envelope',
    label: 'Email Address',
    hint: 'Write to our team',
    value: SITE.email,
    href: `mailto:${SITE.email}`,
    external: false,
  },
  {
    key: 'location',
    icon: 'fas fa-map-marker-alt',
    label: 'Our Location',
    hint: 'Visit the trust',
    value: (
      <>
        {SITE.name}
        <br />
        {SITE.addressLine1}
        <br />
        {SITE.address}
      </>
    ),
    href: SITE.mapsUrl,
    external: true,
  },
];

export default function ContactInfoCards() {
  return (
    <section className="vetham-contact-cards" aria-label="Contact information">
      <div className="vetham-contact-cards__accent" aria-hidden="true" />
      <div className="auto-container">
        <header className="vetham-contact-cards__header centred">
          <span className="sub-title">Reach Out</span>
          <h2>We&apos;re Here to Guide You</h2>
          <p>Connect with us for spiritual guidance, village visits, courses, or general enquiries.</p>
        </header>

        <div className="vetham-contact-cards__grid">
          {CONTACT_ITEMS.map((item, index) => (
            <article key={item.key} className={`vetham-contact-card vetham-contact-card--${index + 1}`}>
              <div className="vetham-contact-card__icon-wrap" aria-hidden="true">
                <i className={item.icon} />
              </div>
              <span className="vetham-contact-card__label">{item.label}</span>
              <p className="vetham-contact-card__hint">{item.hint}</p>
              {item.href ? (
                <a
                  href={item.href}
                  className="vetham-contact-card__value"
                  {...(item.external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                >
                  {item.value}
                </a>
              ) : (
                <p className="vetham-contact-card__value vetham-contact-card__value--text">{item.value}</p>
              )}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
