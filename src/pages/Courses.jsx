import { Link, useLocation } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { SITE } from '../config/site';
import PageTitle from '../components/PageTitle';

const COURSES = [
  { icon: 'icon-8', title: 'Self-Realization Training', text: 'Guiding individuals to understand their true nature beyond body and mind through introspection and meditation.' },
  { icon: 'icon-9', title: 'Kundalini Yoga', text: 'Youngness Yogic Practices focusing on conserving and channelizing life-force energy for vitality and health.' },
  { icon: 'icon-10', title: 'Mano Nirvan Kriya', text: 'Deep relaxation practice to release stress and anxiety at the cellular level for complete rejuvenation.' },
  { icon: 'icon-11', title: 'Appeasement Sittings', text: 'A safe space for emotional release, healing, and inner calm through guided spiritual practices.' },
  { icon: 'icon-8', title: 'Simplified Kundalini Yoga', text: 'Accessible yoga practices suitable for all ages, promoting physical health and mental clarity.' },
  { icon: 'icon-9', title: 'Introspection Classes', text: 'Learn the art of self-analysis to transform negative habits and cultivate positive qualities.' },
];

export default function Courses() {
  const { pathname } = useLocation();
  const isServices = pathname === '/services';

  return (
    <>
      <Helmet>
        <title>{isServices ? 'Services' : 'Courses'} – {SITE.name}</title>
      </Helmet>
      <PageTitle title={isServices ? 'Services' : 'Courses'} crumbs={[isServices ? 'Services' : 'Courses']} />

      <section className="service-section sec-pad bg-color-1 centred">
        <div className="auto-container">
          <div className="sec-title centred mb_50">
            <span className="sub-title">Spiritual Programs</span>
            <h2>Yoga &amp; Meditation Courses <br />at Vetham Kuzhumam</h2>
          </div>
          <div className="row clearfix">
            {COURSES.map((c, i) => (
              <div key={c.title} className="col-lg-4 col-md-6 col-sm-12 service-block">
                <div className="service-block-one wow fadeInUp animated" data-wow-delay={`${i * 150}ms`} data-wow-duration="1500ms">
                  <div className="inner-box">
                    <div className="icon-box">
                      <div className="icon"><i className={c.icon} /></div>
                    </div>
                    <h3>{c.title}</h3>
                    <p>{c.text}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="btn-box centred mt_40">
            <Link to="/contact" className="theme-btn-one"><span>Enroll Now</span></Link>
          </div>
        </div>
      </section>
    </>
  );
}
