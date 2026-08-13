import { lazy, Suspense } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import Layout from './components/Layout';

const Home = lazy(() => import('./pages/Home'));
const About = lazy(() => import('./pages/About'));
const OurVillage = lazy(() => import('./pages/OurVillage'));
const Courses = lazy(() => import('./pages/Courses'));
const Leadership = lazy(() => import('./pages/Leadership'));
const Events = lazy(() => import('./pages/Events'));
const Blog = lazy(() => import('./pages/Blog'));
const SocialMedia = lazy(() => import('./pages/SocialMedia'));
const Contact = lazy(() => import('./pages/Contact'));
const Donate = lazy(() => import('./pages/Donate'));

function PageLoader() {
  return <div className="sec-pad centred"><div className="spinner" /></div>;
}

export default function App() {
  return (
    <HelmetProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Suspense fallback={<PageLoader />}><Home /></Suspense>} />
            <Route path="about" element={<Suspense fallback={<PageLoader />}><About /></Suspense>} />
            <Route path="our-village" element={<Suspense fallback={<PageLoader />}><OurVillage /></Suspense>} />
            <Route path="courses" element={<Suspense fallback={<PageLoader />}><Courses /></Suspense>} />
            <Route path="leadership" element={<Suspense fallback={<PageLoader />}><Leadership /></Suspense>} />
            <Route path="events" element={<Suspense fallback={<PageLoader />}><Events /></Suspense>} />
            <Route path="blog" element={<Suspense fallback={<PageLoader />}><Blog /></Suspense>} />
            <Route path="social-media" element={<Suspense fallback={<PageLoader />}><SocialMedia /></Suspense>} />
            <Route path="contact" element={<Suspense fallback={<PageLoader />}><Contact /></Suspense>} />
            <Route path="donate" element={<Suspense fallback={<PageLoader />}><Donate /></Suspense>} />
          </Route>
        </Routes>
      </BrowserRouter>
    </HelmetProvider>
  );
}
