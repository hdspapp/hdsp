import { Link, useLocation } from 'react-router-dom';
import { WHATSAPP_LINK } from '../data/constants';

const navLinks = [
  { to: '/', label: 'Home' },
  { to: '/maid-service', label: 'Maid Service' },
  { to: '/babysitting-service', label: 'Babysitting' },
  { to: '/home-cook-service', label: 'Home Cook' },
  { to: '/driver-service', label: 'Driver' },
];

const areaLinks = [
  { to: '/area/dha', label: 'DHA' },
  { to: '/area/clifton', label: 'Clifton' },
  { to: '/area/gulshan', label: 'Gulshan' },
];

export default function Navbar() {
  const location = useLocation();

  const isAreaActive = areaLinks.some((l) => location.pathname === l.to);

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
            {/* Areas dropdown */}
            <div className="relative group">
              <button
                className={`text-sm font-medium transition-colors flex items-center gap-1 ${
                  isAreaActive
                    ? 'text-warm-accent'
                    : 'text-gray-600 hover:text-deep-charcoal'
                }`}
              >
                Areas
                <svg
                  className="w-3 h-3 mt-0.5 group-hover:rotate-180 transition-transform"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>
              <div className="absolute top-full left-0 mt-2 w-44 bg-white rounded-xl shadow-lg border border-gray-100 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                {areaLinks.map((link) => (
                  <Link
                    key={link.to}
                    to={link.to}
                    className={`block px-5 py-3 text-sm font-medium transition-colors first:rounded-t-xl last:rounded-b-xl ${
                      location.pathname === link.to
                        ? 'text-warm-accent bg-warm-accent/5'
                        : 'text-gray-600 hover:text-deep-charcoal hover:bg-gray-50'
                    }`}
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>
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
