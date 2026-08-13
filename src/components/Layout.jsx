import { Outlet } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { useThemeScripts } from '../hooks/useThemeScripts';
import Preloader from './Preloader';
import Header from './Header';
import Footer from './Footer';
import SearchPopup from './SearchPopup';
import DonatePopup from './DonatePopup';
import FloatingWidgets from './FloatingWidgets';

export default function Layout() {
  useThemeScripts();

  return (
    <div className="boxed_wrapper">
      <Helmet>
        <html lang="en" />
      </Helmet>
      <Preloader />
      <SearchPopup />
      <DonatePopup />
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
      <FloatingWidgets />
      <div className="scroll-to-top">
        <div>
          <div className="scroll-top-inner">
            <div className="scroll-bar"><div className="bar-inner" /></div>
            <div className="scroll-bar-text">Go To Top</div>
          </div>
        </div>
      </div>
    </div>
  );
}
