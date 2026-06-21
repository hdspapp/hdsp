import { Link, useLocation } from 'react-router-dom';
import { WHATSAPP_LINK } from '../data/constants';

const navLinks = [
  { to: '/', label: 'Home' },
  { to: '/maid-service', label: 'Maid Service' },
  { to: '/babysitting-service', label: 'Babysitting' },
  { to: '/home-cook-service', label: 'Home Cook' },
];

export default function Navbar() {
  const location = useLocation();

  return (
    <nav className="sticky top-0 z-50 bg-white border-b border-gray-100 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <Link to="/" className="flex items-center gap-3">
            <img
              src="/logo.jpg"
              alt="HDSP Logo"
              className="h-14 w-auto object-contain"
            />
          </Link>

          {/* Desktop nav links */}
          <div className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className={`text-sm font-medium transition-colors ${
                  location.pathname === link.to
                    ? 'text-warm-accent'
                    : 'text-gray-600 hover:text-deep-charcoal'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          <a
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-warm-accent text-white px-6 py-3 rounded-lg font-bold text-sm tracking-wide hover:opacity-90 transition-all active:scale-95"
          >
            WhatsApp Karen
          </a>
        </div>
      </div>
    </nav>
  );
}
