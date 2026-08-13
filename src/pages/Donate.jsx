import { Helmet } from 'react-helmet-async';
import { SITE } from '../config/site';
import PageTitle from '../components/PageTitle';

const RAZORPAY_URL = 'https://rzp.io/rzp/vethamspiritualtrust';
const QR_SRC = '/assets/images/vetham/qr-code-vkst-scan.png';
const UPI_ID = '6515433630@indianbk';

export default function Donate() {
  return (
    <>
      <Helmet>
        <title>Donate – {SITE.name}</title>
      </Helmet>
      <PageTitle title="Donate" crumbs={['Donate']} />

      <section className="donate-section sec-pad centred">
        <div className="auto-container">
          <div className="sec-title centred mb_40">
            <span className="sub-title">Support Our Mission</span>
            <h2>Donate to {SITE.name}</h2>
            <p className="mt_20">
              Your contribution helps us build the spiritual village and spread the teachings of Vethathiri Maharishi.
            </p>
          </div>
          <div className="row clearfix justify-content-center">
            <div className="col-lg-5 col-md-6 col-sm-12">
              <div className="vetham-donate-card">
                <h3>Scan &amp; Pay via UPI</h3>
                <figure className="vetham-fab-qr">
                  <img src={QR_SRC} alt="Scan to pay Vetham Kuzhumam Trust" />
                  <figcaption className="vetham-fab-upi">UPI: {UPI_ID}</figcaption>
                </figure>
              </div>
            </div>
            <div className="col-lg-5 col-md-6 col-sm-12">
              <div className="vetham-donate-card">
                <h3>Pay via Razorpay</h3>
                <p>Secure online donation through Razorpay payment gateway.</p>
                <a href={RAZORPAY_URL} className="vetham-fab-razorpay" target="_blank" rel="noopener noreferrer">
                  <img src="/assets/images/vetham/razorpay-logo.png" alt="Razorpay" />
                  <span>Click Razorpay to donate</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
