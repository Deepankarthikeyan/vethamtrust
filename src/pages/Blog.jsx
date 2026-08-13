import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { SITE } from '../config/site';
import { img } from '../config/images';
import PageTitle from '../components/PageTitle';
import LazyImage from '../components/LazyImage';

const POSTS = [
  { image: 'blog1', date: '15', month: 'APRIL', title: 'How Yoga Can Help Reduce Stress', text: 'How Yoga Can Help Reduce Stress Naturally. In today\'s fast-paced world, stress affects us all — yoga offers a natural path to calm.' },
  { image: 'blog2', date: '14', month: 'APRIL', title: 'Our Spiritual Village Journey', text: 'Building a sanctuary for peace and enlightenment inspired by Vethathiri Maharishi\'s timeless teachings.' },
  { image: 'blog3', date: '12', month: 'APRIL', title: 'World Peace Through Individual Peace', text: 'Discover how individual transformation creates collective harmony through meditation and yoga practices.' },
  { image: 'gallery5', date: '10', month: 'APRIL', title: 'Meditation Hall Inauguration', text: 'Celebrating the opening of our mini meditation hall and gurukul for spiritual learning and growth.' },
  { image: 'gallery6', date: '08', month: 'APRIL', title: 'The History of Vetham Trust', text: 'From humble beginnings in 2017 to a thriving spiritual community serving seekers worldwide.' },
  { image: 'leader', date: '05', month: 'APRIL', title: 'Guidance from Our Spiritual Masters', text: 'Learn about the dedicated leadership guiding Vetham Kuzhumam Spiritual Trust forward.' },
];

export default function Blog() {
  return (
    <>
      <Helmet>
        <title>Blog – {SITE.name}</title>
      </Helmet>
      <PageTitle title="Blog" crumbs={['Blog']} />

      <section className="news-section sec-pad">
        <div className="auto-container">
          <div className="sec-title centred mb_55">
            <span className="sub-title">The Wisdom Blog</span>
            <h2>Find Valuable Information and Inspiration</h2>
          </div>
          <div className="row clearfix">
            {POSTS.map((post) => (
              <div key={post.title} className="col-lg-4 col-md-6 col-sm-12 news-block">
                <div className="news-block-one">
                  <div className="inner-box">
                    <figure className="image-box"><LazyImage src={img(post.image)} alt="" /></figure>
                    <div className="lower-content p_relative d_block">
                      <div className="text">
                        <div className="post-date"><h3>{post.date} <span>{post.month}</span></h3></div>
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
