import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { img } from '../config/images';

export default function SearchPopup({ open, onClose }) {
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [open]);

  if (!open) return null;

  return (
    <div className="sigma_search-form-wrapper open">
      <button type="button" className="sigma_search-trigger close-btn" onClick={onClose} aria-label="Close search">
        <span /><span />
      </button>
      <div className="sigma_search-logo mb-4 text-center">
        <Link to="/" onClick={onClose}>
          <img src={img('logo')} alt="" width="160" />
        </Link>
      </div>
      <form className="sigma_search-form" onSubmit={(e) => e.preventDefault()}>
        <div className="sigma_search-adv-input">
          <button className="sigma_search-adv-btn" type="submit">
            <i className="flaticon-magnifying-glass" />
          </button>
          <input type="text" className="form-control" name="s" placeholder="Search..." />
        </div>
      </form>
    </div>
  );
}
