import { lazy, Suspense } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import MaharatriLayout from './maharatri/components/Layout';

const KrishnaHome = lazy(() => import('./maharatri/pages/KrishnaHome'));
const SimplePage = lazy(() => import('./maharatri/pages/SimplePage'));

function PageLoader() {
  return (
    <div className="section section-padding centred">
      <div className="spinner-border text-primary" role="status" aria-label="Loading" />
    </div>
  );
}

function Placeholder({ title, subtitle, text }) {
  return (
    <SimplePage title={title} subtitle={subtitle}>
      <p>{text}</p>
    </SimplePage>
  );
}

export default function App() {
  return (
    <HelmetProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MaharatriLayout />}>
            <Route index element={<Suspense fallback={<PageLoader />}><KrishnaHome /></Suspense>} />
            <Route path="about" element={<Suspense fallback={<PageLoader />}><Placeholder title="About Us" subtitle="Temple" text="We are a Hindu that believes in Lord Rama and Vishnu Deva. This page can be expanded with full about content from the Maharatri theme." /></Suspense>} />
            <Route path="contact" element={<Suspense fallback={<PageLoader />}><Placeholder title="Contact Us" subtitle="Reach Us" text="14/A, Poor Street City Tower, New York USA — 987-987-930-302 — info@example.com" /></Suspense>} />
            <Route path="donate" element={<Suspense fallback={<PageLoader />}><Placeholder title="Donation" subtitle="Donate To Help" text="Make a donation to help the Hindu community. Integrate your payment gateway here." /></Suspense>} />
            <Route path="blog" element={<Suspense fallback={<PageLoader />}><Placeholder title="Blog" subtitle="News Feed" text="Temple news and spiritual articles will appear here." /></Suspense>} />
            <Route path="services" element={<Suspense fallback={<PageLoader />}><Placeholder title="Services" subtitle="Puja & Temple" text="Temple services, puja schedules, and community programs." /></Suspense>} />
            <Route path="events" element={<Suspense fallback={<PageLoader />}><Placeholder title="Events" subtitle="Festival Calendar" text="Upcoming temple events and festival celebrations." /></Suspense>} />
          </Route>
        </Routes>
      </BrowserRouter>
    </HelmetProvider>
  );
}
