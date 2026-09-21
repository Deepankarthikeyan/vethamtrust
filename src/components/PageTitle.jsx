import { Link } from 'react-router-dom';
import { img } from '../config/images';

export default function PageTitle({ title, crumbs = [] }) {
  return (
    <section className="page-title centred vetham-page-title">
      <div className="bg-layer" style={{ backgroundImage: `url(${img('villageAbout')})` }} />
      <div className="auto-container">
        <div className="content-box">
          <h1>{title}</h1>
          <ul className="bread-crumb clearfix">
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
