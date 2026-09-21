import { Link } from 'react-router-dom';
import { img } from '../config/images';
import LazyImage from './LazyImage';

export default function SearchPopup() {
  return (
    <div id="search-popup" className="search-popup">
      <div className="popup-inner">
        <div className="upper-box clearfix">
          <figure className="logo-box pull-left">
            <Link to="/"><LazyImage src={img('logo')} alt="" /></Link>
          </figure>
          <div className="close-search pull-right"><span className="far fa-times" /></div>
        </div>
        <div className="overlay-layer" />
        <div className="auto-container">
          <div className="search-form">
            <form onSubmit={(e) => e.preventDefault()}>
              <div className="form-group">
                <fieldset>
                  <input type="search" className="form-control" name="search-input" placeholder="Type your keyword and hit" required />
                  <button type="submit"><i className="far fa-search" /></button>
                </fieldset>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
