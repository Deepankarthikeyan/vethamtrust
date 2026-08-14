import { Link } from 'react-router-dom';
import { img } from '../config/images';
import { SERVICE_TAGS, SIDEBAR_RECENT_POSTS } from '../config/services';
import LazyImage from './LazyImage';

export default function BlogSidebar() {
  return (
    <div className="default-sidebar blog-sidebar ml_20 vetham-blog-sidebar">
      <div className="sidebar-widget search-widget">
        <div className="widget-title">
          <h3>Search</h3>
        </div>
        <div className="form-inner">
          <form onSubmit={(e) => e.preventDefault()}>
            <div className="form-group">
              <input type="search" name="search-field" placeholder="Search ..." />
              <button type="submit"><i className="icon-1" /></button>
            </div>
          </form>
        </div>
      </div>

      <div className="sidebar-widget post-widget">
        <div className="widget-title">
          <h3>Recent Posts</h3>
        </div>
        <div className="post-inner">
          {SIDEBAR_RECENT_POSTS.map((post) => (
            <div key={post.title} className="post">
              <figure className="post-thumb">
                <Link to={post.path}>
                  <LazyImage src={img(post.image)} alt={post.title} />
                </Link>
              </figure>
              <h5>
                <Link to={post.path}>{post.title}</Link>
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
            {SERVICE_TAGS.map((tag) => (
              <li key={tag}>
                <span className="vetham-tag">{tag}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
