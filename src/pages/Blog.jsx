import { Helmet } from 'react-helmet-async';
import { SITE } from '../config/site';
import { ALL_BLOG_POSTS } from '../config/blog';
import { img } from '../config/images';
import PageTitle from '../components/PageTitle';
import LazyImage from '../components/LazyImage';

export default function Blog() {
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
          <div className="row clearfix">
            {ALL_BLOG_POSTS.map((post) => (
              <div key={post.title} className="col-lg-4 col-md-6 col-sm-12 news-block">
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
