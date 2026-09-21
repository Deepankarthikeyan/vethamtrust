import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';

export default function SimplePage({ title, subtitle, children }) {
  return (
    <>
      <Helmet>
        <title>{title} | Maharatri Temple</title>
      </Helmet>
      <section className="section section-padding">
        <div className="container">
          <div className="section-title text-center mb-5">
            {subtitle && <p className="subtitle">{subtitle}</p>}
            <h4 className="title">{title}</h4>
          </div>
          <div className="row justify-content-center">
            <div className="col-lg-8">
              {children}
              <Link to="/" className="sigma_btn-custom light mt-4">
                Back to Krishna Home <i className="far fa-arrow-right" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
