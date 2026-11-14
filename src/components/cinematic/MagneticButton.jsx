import { Link } from 'react-router-dom';

export default function MagneticButton({
  to,
  href,
  children,
  className = 'vx-btn vx-btn--primary',
  external = false,
  style,
  ...props
}) {
  const inner = (
    <>
      <span>{children}</span>
      <i className="fas fa-arrow-right" aria-hidden="true" />
    </>
  );

  if (to) {
    return (
      <Link to={to} className={className} style={style} data-cursor="EXPLORE" {...props}>
        {inner}
      </Link>
    );
  }

  if (href) {
    return (
      <a href={href} className={className} data-cursor="EXPLORE" target={external ? '_blank' : undefined} rel={external ? 'noopener noreferrer' : undefined} {...props}>
        {inner}
      </a>
    );
  }

  return (
    <button type="button" className={className} data-cursor="EXPLORE" {...props}>
      {inner}
    </button>
  );
}
