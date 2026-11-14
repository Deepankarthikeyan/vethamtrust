import { Link } from 'react-router-dom';
import { img } from '../config/images';

export default function PageTitle({ title, crumbs = [] }) {
  return (
    <section
      className="sigma_page-header section-padding primary-overlay bg-cover bg-center"
      style={{ backgroundImage: `url(${img('pageTitle')})` }}
    >
      <div className="container">
        <div className="section-title text-center mb-0">
          <h1 className="title text-white">{title}</h1>
          <ul className="sigma_breadcrumb justify-content-center">
            <li><Link to="/">Home</Link></li>
            {crumbs.map((crumb) => (
              <li key={crumb}>{crumb}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
