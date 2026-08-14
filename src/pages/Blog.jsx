import { useEffect, useRef } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { SITE } from '../config/site';
import { ALL_BLOG_POSTS } from '../config/blog';
import { img } from '../config/images';
import PageTitle from '../components/PageTitle';
import LazyImage from '../components/LazyImage';

export default function Blog() {
  const [searchParams] = useSearchParams();
  const highlightedSlug = searchParams.get('post');
  const highlightedRef = useRef(null);

  const posts = highlightedSlug
    ? ALL_BLOG_POSTS.filter((post) => post.slug === highlightedSlug)
    : ALL_BLOG_POSTS;

  useEffect(() => {
    if (highlightedRef.current) {
      highlightedRef.current.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  }, [highlightedSlug]);

  return (
    <>
      <Helmet>
        <title>Blog – {SITE.name}</title>
      </Helmet>
      <PageTitle title="Blog" crumbs={['Blog']} />

      <section className="news-section sec-pad vetham-blog-section">
        <div className="auto-container">
          <div className="sec-title centred mb_55">
            <span className="sub-title">The Wisdom Blog</span>
            <h2>Find Valuable Information and Inspiration</h2>
          </div>
          {highlightedSlug && posts.length === 0 && (
            <p className="centred vetham-blog-missing-post">
              That blog post is not available here yet.{' '}
              <Link to="/blog">View all posts</Link>
            </p>
          )}
          <div className="row clearfix">
            {posts.map((post) => (
              <div
                key={post.slug}
                ref={post.slug === highlightedSlug ? highlightedRef : null}
                className={`col-lg-4 col-md-6 col-sm-12 news-block${post.slug === highlightedSlug ? ' vetham-blog-highlight' : ''}`}
              >
                <div className="news-block-one">
                  <div className="inner-box">
                    <figure className="image-box"><LazyImage src={img(post.image)} alt={post.title} /></figure>
                    <div className="lower-content p_relative d_block">
                      <div className="text">
                        <h3>{post.title}</h3>
                        <p>{post.text}</p>
                        <div className="btn-box"><span className="theme-btn-two">Read more</span></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
