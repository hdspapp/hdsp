import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
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
  return (
    <BrowserRouter>
      <div className="min-h-screen font-sans text-deep-charcoal selection:bg-warm-accent/20">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/maid-service" element={<MaidService />} />
          <Route path="/babysitting-service" element={<BabysitterService />} />
          <Route path="/home-cook-service" element={<HomeCookService />} />
          <Route path="/driver-service" element={<DriverService />} />
          <Route path="/area/dha" element={<AreaLanding />} />
          <Route path="/area/clifton" element={<AreaLanding />} />
          <Route path="/area/gulshan" element={<AreaLanding />} />
          <Route path="/area/:areaSlug" element={<AreaLanding />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
        <Footer />
        <FloatingWA />
      </div>
    </BrowserRouter>
  );
}
