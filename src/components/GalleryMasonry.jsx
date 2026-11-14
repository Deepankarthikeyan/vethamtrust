const LAYOUT = ['featured', 'sq', 'sq', 'wide', 'tall', 'sq'];

export default function GalleryMasonry({ items, group = 'vetham-gallery' }) {
  return (
    <div className="vx-spirit-gallery" role="list">
      <div className="vx-spirit-gallery__glow" aria-hidden="true" />
      <div className="vx-gallery-masonry vx-gallery-masonry--spirit">
        {items.map((item, index) => {
          const layout = LAYOUT[index % LAYOUT.length];
          const src = item.src;
          const title = item.title;
          const label = item.label || title;

          return (
            <article
              key={item.key}
              className={`vx-gallery-masonry__cell vx-gallery-masonry__cell--${layout} gallery-item ${item.cat || ''}`}
              role="listitem"
            >
              <a
                href={src}
                className="vx-gallery-masonry__link vx-spirit-gallery__item"
                data-fancybox={group}
                data-caption={`${title}${label !== title ? ` · ${label}` : ''}`}
                aria-label={`Open preview: ${title}`}
              >
                <div className="vx-gallery-masonry__media">
                  <img src={src} alt={title} loading="lazy" decoding="async" />
                </div>
                <div className="vx-spirit-gallery__frame" aria-hidden="true" />
                <div className="vx-gallery-masonry__overlay vx-spirit-gallery__preview">
                  <span className="vx-spirit-gallery__preview-label">Preview</span>
                  <span className="vx-gallery-masonry__title">{title}</span>
                  <span className="vx-gallery-masonry__zoom" aria-hidden="true">
                    <i className="fas fa-expand" />
                  </span>
                </div>
              </a>
            </article>
          );
        })}
      </div>
    </div>
  );
}
