import { Link } from 'react-router-dom';
import { TEAM } from '../config/site';
import { img } from '../config/images';
import LazyImage from './LazyImage';

export default function HomeTeamSection() {
  return (
    <section className="team-section sec-pad centred vetham-home-team">
      <div className="auto-container">
        <div className="sec-title centred mb_50">
          <span className="sub-title">Meet the Visionaries Behind Our Journey</span>
          <h2>Our Founders &amp; <br />Spiritual Masters</h2>
        </div>
        <div className="row clearfix">
          {TEAM.map((member, i) => (
            <div key={member.name} className="col-lg-3 col-md-6 col-sm-12 team-block">
              <div className="team-block-one wow fadeInUp animated" data-wow-delay={`${i * 200}ms`} data-wow-duration="1500ms">
                <div className="inner-box">
                  <div className="image-box">
                    <figure className="image">
                      <Link to="/leadership"><LazyImage src={img(member.image)} alt={member.name} /></Link>
                    </figure>
                  </div>
                  <div className="lower-content">
                    <div className="inner">
                      <h3><Link to="/leadership">{member.name}</Link></h3>
                      <span className="designation">{member.role}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
