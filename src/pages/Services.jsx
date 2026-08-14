import { Link, useParams, Navigate, useSearchParams } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { SITE } from '../config/site';
import {
  ALL_SERVICES,
  filterServices,
  getServicesForPage,
  SERVICE_PAGE_COUNT,
} from '../config/services';
import { img } from '../config/images';
import PageTitle from '../components/PageTitle';
import BlogSidebar from '../components/BlogSidebar';
import LazyImage from '../components/LazyImage';

export default function Services() {
  const { pageNum } = useParams();
  const [searchParams] = useSearchParams();
  const currentPage = pageNum ? Number(pageNum) : 1;
  const query = searchParams.get('q') || '';
  const tag = searchParams.get('tag') || '';
  const isFiltering = Boolean(query || tag);

  if (!Number.isInteger(currentPage) || currentPage < 1 || currentPage > SERVICE_PAGE_COUNT) {
    return <Navigate to="/services" replace />;
  }

  if (isFiltering && pageNum) {
    return <Navigate to={{ pathname: '/services', search: searchParams.toString() }} replace />;
  }

  const services = isFiltering
    ? filterServices(ALL_SERVICES, { query, tag })
    : getServicesForPage(currentPage);

  return (
    <>
      <Helmet>
        <title>All Services – {SITE.name}</title>
      </Helmet>
      <PageTitle title="All Services" crumbs={['All Services']} />

      <section className="sidebar-page-container vetham-services-section">
        <div className="auto-container">
          <div className="row clearfix">
            <div className="col-lg-8 col-md-12 col-sm-12 content-side">
              {isFiltering && (
                <p className="vetham-services-filter-summary">
                  Showing {services.length} service{services.length === 1 ? '' : 's'}
                  {query ? ` matching “${query}”` : ''}
                  {tag ? ` tagged “${tag.replace(/-/g, ' ')}”` : ''}.
                </p>
              )}

              <div className="vetham-services-grid">
                {services.length === 0 && (
                  <div className="vetham-services-empty">
                    <p>No services matched your search. Try another keyword or clear the filters.</p>
                  </div>
                )}
                {services.map((service) => (
                  <div key={service.title} className="vetham-service-card">
                    <figure className="vetham-service-card__image">
                      <LazyImage src={img(service.image)} alt={service.title} />
                    </figure>
                    <div className="vetham-service-card__body">
                      <h3>{service.title}</h3>
                      <span className="vetham-service-card__category">{service.category}</span>
                      <p>{service.excerpt}</p>
                      <div className="btn-box">
                        <span className="theme-btn-two">…</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {!isFiltering && (
              <div className="pagination-wrapper centred">
                <ul className="pagination clearfix">
                  {currentPage > 1 && (
                    <li>
                      <Link
                        to={currentPage === 2 ? '/services' : `/services/page/${currentPage - 1}`}
                        aria-label="Previous page"
                      >
                        <i className="icon-56" />
                      </Link>
                    </li>
                  )}
                  {Array.from({ length: SERVICE_PAGE_COUNT }, (_, i) => i + 1).map((page) => (
                    <li key={page}>
                      <Link
                        to={page === 1 ? '/services' : `/services/page/${page}`}
                        className={page === currentPage ? 'current' : undefined}
                      >
                        {page}
                      </Link>
                    </li>
                  ))}
                  {currentPage < SERVICE_PAGE_COUNT && (
                    <li>
                      <Link to={`/services/page/${currentPage + 1}`} aria-label="Next page">
                        <i className="icon-55" />
                      </Link>
                    </li>
                  )}
                </ul>
              </div>
              )}
            </div>

            <div className="col-lg-4 col-md-12 col-sm-12 sidebar-side">
              <BlogSidebar />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
