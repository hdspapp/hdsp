import { useEffect } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import {
  generateOrganizationSchema,
  generateWebsiteSchema,
} from './data/schema';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import FloatingWA from './components/FloatingWA';
import Home from './pages/Home';
import MaidService from './pages/MaidService';
import BabysitterService from './pages/BabysitterService';
import HomeCookService from './pages/HomeCookService';
import DriverService from './pages/DriverService';
import AreaLanding from './pages/AreaLanding';

export default function App() {
  useEffect(() => {
    const orgSchema = generateOrganizationSchema();
    const orgScript = document.createElement('script');
    orgScript.type = 'application/ld+json';
    orgScript.id = 'org-schema';
    orgScript.textContent = JSON.stringify(orgSchema);
    document.head.appendChild(orgScript);

    const webSchema = generateWebsiteSchema();
    const webScript = document.createElement('script');
    webScript.type = 'application/ld+json';
    webScript.id = 'website-schema';
    webScript.textContent = JSON.stringify(webSchema);
    document.head.appendChild(webScript);

    return () => {
      const orgEl = document.getElementById('org-schema');
      if (orgEl) orgEl.remove();
      const webEl = document.getElementById('website-schema');
      if (webEl) webEl.remove();
    };
  }, []);

  return (
    <BrowserRouter>
      <div className="min-h-screen font-sans text-primary selection:bg-accent/20">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/maid-service" element={<MaidService />} />
          <Route path="/babysitting-service" element={<BabysitterService />} />
          <Route path="/home-cook-service" element={<HomeCookService />} />
          <Route path="/driver-service" element={<DriverService />} />
          <Route path="/area/:areaSlug" element={<AreaLanding />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
        <Footer />
        <FloatingWA />
      </div>
    </BrowserRouter>
  );
}
