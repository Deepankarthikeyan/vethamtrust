import { Link } from 'react-router-dom';
import { img } from '../../config/images';

export default function CinematicPageHero({ title, crumbs = [] }) {
  return (
    <section className="vx-page-hero" style={{ backgroundImage: `url(${img('pageTitle')})` }}>
      <div className="vx-container vx-page-hero__content">
        <span className="vx-eyebrow">Vetham Spiritual Trust</span>
        <h1 className="vx-title-xl">{title}</h1>
        <ul className="vx-breadcrumb">
          <li><Link to="/">Home</Link></li>
          {crumbs.map((crumb) => <li key={crumb}>{crumb}</li>)}
        </ul>
      </div>
    </section>
  );
}
