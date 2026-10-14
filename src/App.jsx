import { lazy, Suspense, useEffect } from 'react';
import { prefetchAllNavRoutes } from './utils/prefetchRoutes';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import Layout from './components/Layout';

import Home from './pages/Home';
import About from './pages/About';
import OurVillage from './pages/OurVillage';
import Courses from './pages/Courses';
import Events from './pages/Events';
import SocialMedia from './pages/SocialMedia';
import Contact from './pages/Contact';

const Services = lazy(() => import('./pages/Services'));
const Leadership = lazy(() => import('./pages/Leadership'));
const Blog = lazy(() => import('./pages/Blog'));
const Donate = lazy(() => import('./pages/Donate'));

function PageLoader() {
  return (
    <div className="vx-section" style={{ minHeight: '24vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <img src="/assets/images/vetham/logo.png" alt="" width={48} height={48} style={{ opacity: 0.5 }} />
    </div>
  );
}

export default function App() {
  useEffect(() => {
    prefetchAllNavRoutes();
  }, []);

  return (
    <HelmetProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="our-village" element={<OurVillage />} />
            <Route path="courses" element={<Courses />} />
            <Route path="events" element={<Events />} />
            <Route path="social-media" element={<SocialMedia />} />
            <Route path="contact" element={<Contact />} />
            <Route path="services" element={<Suspense fallback={<PageLoader />}><Services /></Suspense>} />
            <Route path="services/page/:pageNum" element={<Suspense fallback={<PageLoader />}><Services /></Suspense>} />
            <Route path="leadership" element={<Suspense fallback={<PageLoader />}><Leadership /></Suspense>} />
            <Route path="blog" element={<Suspense fallback={<PageLoader />}><Blog /></Suspense>} />
            <Route path="donate" element={<Suspense fallback={<PageLoader />}><Donate /></Suspense>} />
          </Route>
        </Routes>
      </BrowserRouter>
    </HelmetProvider>
  );
}
