import { Helmet } from 'react-helmet-async';
import { SITE, TEAM } from '../config/site';
import { img } from '../config/images';
import PageTitle from '../components/PageTitle';
import LazyImage from '../components/LazyImage';

export default function Leadership() {
  return (
    <>
      <Helmet>
        <title>Leadership – {SITE.name}</title>
      </Helmet>
      <PageTitle title="Leadership" crumbs={['Leadership']} />

      <section className="team-page-section centred sec-pad">
        <div className="auto-container">
          <div className="sec-title centred mb_55">
            <span className="sub-title">Leadership</span>
            <h2>Meet The Trustees</h2>
            <p className="mt_20">Dedicated spiritual guides carrying forward the vision of Vethathiri Maharishi.</p>
          </div>
          <div className="row clearfix">
            {TEAM.map((member) => (
              <div key={member.name} className="col-lg-3 col-md-6 col-sm-12 team-block">
                <div className="team-block-two">
                  <div className="inner-box">
                    <figure className="image-box"><LazyImage src={img(member.image)} alt={member.name} /></figure>
                    <div className="lower-content">
                      <h3>{member.name}</h3>
                      <span className="designation">{member.role}</span>
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
