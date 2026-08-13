import { Helmet } from 'react-helmet-async';
import { SITE } from '../config/site';
import { img } from '../config/images';
import PageTitle from '../components/PageTitle';
import LazyImage from '../components/LazyImage';

const POSTS = [
  { image: 'blog5', date: '15', month: 'APRIL', title: 'How Yoga Can Help Reduce Stress', text: 'How Yoga Can Help Reduce Stress Naturally. In today\'s fast-paced world, stress affects us all — yoga offers a natural path to calm.' },
  { image: 'blog4', date: '14', month: 'APRIL', title: 'The Difference Between Mindful Practice and Meditation', text: 'Understanding the distinction between mindful practice and deep meditation for spiritual growth.' },
  { image: 'blog3', date: '12', month: 'APRIL', title: 'Yoga Can Actually Make You Happier', text: 'Discover how yoga practices create lasting happiness through inner peace and self-awareness.' },
  { image: 'blog1', date: '10', month: 'APRIL', title: 'The Most Unusual Spiritual Practices and Yoga', text: 'Explore unique spiritual practices and yoga traditions that deepen your connection to inner peace.' },
  { image: 'blog2', date: '08', month: 'APRIL', title: 'Meditation Is the Conscious Creation of Reality', text: 'Learn how meditation shapes your perception and helps you consciously create a peaceful reality.' },
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
