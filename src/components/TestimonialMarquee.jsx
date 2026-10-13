import { TESTIMONIALS } from '../config/courses';
import { img } from '../config/images';

export default function TestimonialMarquee({
  eyebrow = 'Testimonials',
  title = 'What Our Community Says',
}) {
  const items = [...TESTIMONIALS, ...TESTIMONIALS];

  return (
    <section className="vx-testimonials sec-pad" aria-label="Testimonials">
      <div className="auto-container">
        <div className="sec-title centred mb_50">
          <span className="sub-title">{eyebrow}</span>
          <h2>{title}</h2>
        </div>
        <div className="vx-testimonials__marquee">
          <div className="vx-testimonials__track">
            {items.map((item, index) => (
              <article key={`${item.name}-${index}`} className="vx-testimonial-card">
                <div className="vx-testimonial-card__avatar">
                  <img src={img(item.image)} alt="" loading="lazy" decoding="async" />
                </div>
                <blockquote className="vx-testimonial-card__quote">&ldquo;{item.quote}&rdquo;</blockquote>
                <p className="vx-testimonial-card__meta">
                  <strong>{item.name}</strong>
                  <span>{item.location}</span>
                </p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
