import { useState } from 'react';
import { Outlet } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { useLanguageRetranslate } from '../hooks/useLanguageRetranslate';
import useScrollReveal from '../hooks/useScrollReveal';
import BackToTop from './krishna/BackToTop';
import MobileNav from './krishna/MobileNav';
import RightPanel from './krishna/RightPanel';
import Footer from './Footer';
import FloatingWidgets from './FloatingWidgets';
import Header from './Header';
import Preloader from './Preloader';
import SearchPopup from './SearchPopup';

export default function Layout() {
  const [searchOpen, setSearchOpen] = useState(false);
  const [rightOpen, setRightOpen] = useState(false);
  const [leftOpen, setLeftOpen] = useState(false);

  useLanguageRetranslate();
  useScrollReveal();

  const closePanels = () => {
    setSearchOpen(false);
    setRightOpen(false);
    setLeftOpen(false);
  };

  return (
    <>
      <Helmet><html lang="en" /></Helmet>
      <a className="skip-link" href="#main-content">Skip to main content</a>
      <Preloader />
      <SearchPopup open={searchOpen} onClose={() => setSearchOpen(false)} />
      <RightPanel open={rightOpen} onClose={() => setRightOpen(false)} />
      <MobileNav open={leftOpen} onClose={() => setLeftOpen(false)} />
      <Header
        onSearchOpen={() => { closePanels(); setSearchOpen(true); }}
        onAsideRight={() => { setLeftOpen(false); setSearchOpen(false); setRightOpen((v) => !v); }}
        onAsideLeft={() => { setRightOpen(false); setSearchOpen(false); setLeftOpen((v) => !v); }}
      />
      <main id="main-content">
        <Outlet />
      </main>
      <Footer />
      <FloatingWidgets />
      <BackToTop />
    </>
  );
}
