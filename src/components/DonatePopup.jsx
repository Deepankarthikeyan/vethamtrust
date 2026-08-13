export default function DonatePopup() {
  return (
    <div id="donate-popup" className="donate-popup">
      <div className="close-donate"><i className="fal fa-times" /></div>
      <div className="popup-inner">
        <div className="donate-content">
          <div className="title-text centred">
            <h2>Donate to Vetham Kuzhumam Spiritual Trust</h2>
          </div>
          <form onSubmit={(e) => e.preventDefault()} className="default-form">
            <div className="row clearfix">
              <div className="col-lg-6 col-md-12 col-sm-12 donate-column">
                <div className="donate-box">
                  <div className="donate-option">
                    <h3>How Much?</h3>
                    <ul className="donate-list clearfix">
                      {['$10', '$20', '$50', '$100', '$500', '$1000'].map((amount, i) => (
                        <li key={amount}>
                          <input type="radio" id={`donate-amount-${i + 1}`} name="donate-amount" defaultChecked={i === 0} />
                          <label htmlFor={`donate-amount-${i + 1}`}>{amount}</label>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="payment-option">
                    <h3>Choose Payment Option</h3>
                    <ul className="payment-list clearfix">
                      <li><input type="radio" id="payment-method-1" name="payment-method" defaultChecked /><label htmlFor="payment-method-1">Net Banking</label></li>
                      <li><input type="radio" id="payment-method-2" name="payment-method" /><label htmlFor="payment-method-2">Credit - Debit Card</label></li>
                      <li><input type="radio" id="payment-method-3" name="payment-method" /><label htmlFor="payment-method-3">Offline Payment</label></li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 col-md-12 col-sm-12 donate-form">
                <div className="form-inner">
                  <h3>Donor Information</h3>
                  <div className="row clearfix">
                    <div className="col-lg-6 col-md-6 col-sm-12 column">
                      <div className="form-group">
                        <label>Your Name <span>*</span></label>
                        <input type="text" name="name" placeholder="Your name" required />
                      </div>
                    </div>
                    <div className="col-lg-6 col-md-6 col-sm-12 column">
                      <div className="form-group">
                        <label>Email Address <span>*</span></label>
                        <input type="email" name="email" required />
                      </div>
                    </div>
                    <div className="col-lg-6 col-md-6 col-sm-12 column">
                      <div className="form-group">
                        <label>Phone</label>
                        <input type="text" name="phone" />
                      </div>
                    </div>
                    <div className="col-lg-6 col-md-6 col-sm-12 column">
                      <div className="form-group">
                        <label>Address</label>
                        <input type="text" name="address" />
                      </div>
                    </div>
                    <div className="col-lg-12 col-md-12 col-sm-12 column">
                      <div className="form-group message-btn">
                        <button type="submit" className="theme-btn-one">Donate Now</button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
