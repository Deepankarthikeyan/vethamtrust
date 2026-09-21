import { useState } from 'react';
import { Outlet } from 'react-router-dom';
import { MobileNav, RightPanel } from './AsidePanels';
import BackToTop from './BackToTop';
import Footer from './Footer';
import Header from './Header';
import Preloader from './Preloader';
import SearchPopup from './SearchPopup';
import useScrollReveal from '../hooks/useScrollReveal';

export default function MaharatriLayout() {
  const [searchOpen, setSearchOpen] = useState(false);
  const [rightOpen, setRightOpen] = useState(false);
  const [leftOpen, setLeftOpen] = useState(false);

  useScrollReveal();

  const closeAll = () => {
    setSearchOpen(false);
    setRightOpen(false);
    setLeftOpen(false);
  };

  return (
    <>
      <a className="skip-link" href="#main-content">Skip to main content</a>
      <Preloader />
      <SearchPopup open={searchOpen} onClose={() => setSearchOpen(false)} />
      <RightPanel open={rightOpen} onClose={() => setRightOpen(false)} />
      <MobileNav open={leftOpen} onClose={() => setLeftOpen(false)} />
      <Header
        onSearchOpen={() => { closeAll(); setSearchOpen(true); }}
        onAsideRight={() => { setLeftOpen(false); setSearchOpen(false); setRightOpen((v) => !v); }}
        onAsideLeft={() => { setRightOpen(false); setSearchOpen(false); setLeftOpen((v) => !v); }}
      />
      <main id="main-content">
        <Outlet />
      </main>
      <Footer />
      <BackToTop />
    </>
  );
}
