const LAYOUT = ['sq', 'sq', 'wide', 'sq', 'tall', 'sq'];

export default function GalleryMasonry({ items, group = 'vetham-gallery' }) {
  return (
    <div className="vx-gallery-masonry" role="list">
      {items.map((item, index) => {
        const layout = LAYOUT[index % LAYOUT.length];
        const src = item.src;
        const title = item.title;

        return (
          <article
            key={item.key}
            className={`vx-gallery-masonry__cell vx-gallery-masonry__cell--${layout} gallery-item ${item.cat || ''}`}
            role="listitem"
          >
            <a
              href={src}
              className="vx-gallery-masonry__link"
              data-fancybox={group}
              data-caption={title}
              aria-label={`View ${title}`}
            >
              <div className="vx-gallery-masonry__media">
                <img src={src} alt={title} loading="lazy" decoding="async" />
              </div>
              <div className="vx-gallery-masonry__overlay">
                <span className="vx-gallery-masonry__title">{title}</span>
                <span className="vx-gallery-masonry__zoom" aria-hidden="true">
                  <i className="fas fa-search-plus" />
                </span>
              </div>
            </a>
          </article>
        );
      })}
    </div>
  );
}
