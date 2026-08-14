import { useEffect, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { img } from '../config/images';
import {
  SERVICE_TAGS,
  SIDEBAR_RECENT_POSTS,
  tagToSlug,
} from '../config/services';
import LazyImage from './LazyImage';

export default function BlogSidebar() {
  const navigate = useNavigate();
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const activeQuery = params.get('q') || '';
  const activeTag = params.get('tag') || '';
  const [searchInput, setSearchInput] = useState(activeQuery);

  useEffect(() => {
    setSearchInput(activeQuery);
  }, [activeQuery]);

  function updateServicesFilters(nextQuery, nextTag) {
    const nextParams = new URLSearchParams();
    if (nextQuery.trim()) nextParams.set('q', nextQuery.trim());
    if (nextTag.trim()) nextParams.set('tag', nextTag.trim());

    navigate({
      pathname: '/services',
      search: nextParams.toString() ? `?${nextParams.toString()}` : '',
    });
  }

  function handleSearchSubmit(e) {
    e.preventDefault();
    updateServicesFilters(searchInput, activeTag);
  }

  function handleTagClick(tag) {
    const slug = tagToSlug(tag);
    const isActive = activeTag === slug;
    updateServicesFilters(activeQuery, isActive ? '' : slug);
  }

  function clearFilters() {
    setSearchInput('');
    navigate({ pathname: '/services' });
  }

  return (
    <div className="default-sidebar blog-sidebar ml_20 vetham-blog-sidebar">
      <div className="sidebar-widget search-widget">
        <div className="widget-title">
          <h3>Search</h3>
        </div>
        <div className="form-inner">
          <form onSubmit={handleSearchSubmit}>
            <div className="form-group">
              <input
                type="search"
                name="search-field"
                className="vetham-sidebar-search-input"
                placeholder="Search ..."
                value={searchInput}
                onChange={(e) => setSearchInput(e.target.value)}
                aria-label="Search services"
              />
              <button type="submit" aria-label="Submit search">
                <i className="icon-1" />
              </button>
            </div>
          </form>
        </div>
      </div>

      {(activeQuery || activeTag) && (
        <div className="sidebar-widget vetham-sidebar-active-filters">
          <p className="vetham-active-filter-label">
            {activeQuery && <>Search: <strong>{activeQuery}</strong></>}
            {activeQuery && activeTag && ' · '}
            {activeTag && <>Tag: <strong>{activeTag.replace(/-/g, ' ')}</strong></>}
          </p>
          <button type="button" className="theme-btn-two vetham-clear-filters-btn" onClick={clearFilters}>
            Clear filters
          </button>
        </div>
      )}

      <div className="sidebar-widget post-widget">
        <div className="widget-title">
          <h3>Recent Posts</h3>
        </div>
        <div className="post-inner">
          {SIDEBAR_RECENT_POSTS.map((post) => (
            <div key={post.slug} className="post">
              <figure className="post-thumb">
                <Link to={`/blog?post=${post.slug}`} aria-hidden="true" tabIndex={-1}>
                  <LazyImage src={img(post.image)} alt="" />
                </Link>
              </figure>
              <h5>
                <Link to={`/blog?post=${post.slug}`}>{post.title}</Link>
              </h5>
              <span className="post-date">{post.date}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="sidebar-widget vetham-sidebar-banner-widget">
        <Link to="/" className="vetham-sidebar-banner">
          <LazyImage src={img('sidebarBanner')} alt="" />
        </Link>
      </div>

      <div className="sidebar-widget tags-widget">
        <div className="widget-title">
          <h3>Tags</h3>
        </div>
        <div className="widget-content">
          <ul className="tags-list clearfix">
            {SERVICE_TAGS.map((tag) => {
              const slug = tagToSlug(tag);
              const isActive = activeTag === slug;
              return (
                <li key={tag}>
                  <button
                    type="button"
                    className={`vetham-tag-link${isActive ? ' is-active' : ''}`}
                    onClick={() => handleTagClick(tag)}
                  >
                    {tag}
                  </button>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
}
