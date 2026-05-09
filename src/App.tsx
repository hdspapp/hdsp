/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  ShieldCheck, 
  Users, 
  MapPin, 
  CheckCircle2, 
  MessageCircle, 
  Clock, 
  UserCheck, 
  Home, 
  ChefHat, 
  Baby, 
  Car,
  ChevronRight,
  Menu,
  X,
  Info
} from 'lucide-react';

// --- Types ---
interface StaffCategory {
  title: string;
  icon: React.ReactNode;
  description: string;
  salaryRange: string;
}

interface VettingStep {
  title: string;
  description: string;
  icon: React.ReactNode;
}

// --- Constants ---
const STAFF_CATEGORIES: StaffCategory[] = [
  {
    title: "House Maids",
    icon: <Home className="w-6 h-6 text-warm-accent" />,
    description: "Experienced helpers for basic cleaning (4–12h) or 24/7 Live-in service.",
    salaryRange: "Rs. 35,000 – 60,000"
  },
  {
    title: "Home Cooks",
    icon: <ChefHat className="w-6 h-6 text-warm-accent" />,
    description: "Specialized in Desi, Continental, or specific dietary requirements.",
    salaryRange: "Rs. 35,000 – 55,000"
  },
  {
    title: "Nannies",
    icon: <Baby className="w-6 h-6 text-warm-accent" />,
    description: "Dedicated childcare support focusing on non-educational physical care.",
    salaryRange: "Rs. 30,000 – 50,000"
  },
  {
    title: "Drivers",
    icon: <Car className="w-6 h-6 text-warm-accent" />,
    description: "Background-verified drivers for family, school, or office logistics.",
    salaryRange: "Rs. 35,000 – 50,000"
  }
];

const VETTING_STEPS: VettingStep[] = [
  {
    title: "NADRA Verification",
    description: "Mandatory 13-digit CNIC cross-referencing through Verisys for identity absolute certainty.",
    icon: <ShieldCheck className="text-warm-accent" />
  },
  {
    title: "Physical Home Visits",
    description: "We physically visit the candidate's residence to verify utility bills and family stability.",
    icon: <MapPin className="text-warm-accent" />
  },
  {
    title: "Double Reference Calls",
    description: "Manual interviews with at least two previous employers to verify conduct and exit reasons.",
    icon: <UserCheck className="text-warm-accent" />
  }
];

const NEIGHBORHOODS = ["DHA (Phases 1–8)", "Clifton", "Bahria Town", "Gulshan-e-Iqbal", "North Nazimabad", "PECHS", "KDA Scheme 1", "Malir Cantt"];

// --- Components ---

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  
  return (
    <nav className="glass-nav">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 flex items-center justify-center overflow-hidden">
              <img 
                src="logo.png" 
                alt="HDSP Logo" 
                className="w-full h-full object-contain" 
                onError={(e) => {
                  e.currentTarget.style.display = 'none';
                  e.currentTarget.parentElement!.innerHTML = '<div class="w-10 h-10 bg-warm-accent rounded-xl flex items-center justify-center"><svg class="text-white w-6 h-6" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10"/></svg></div>';
                }}
              />
            </div>
            <div className="flex flex-col">
              <span className="font-serif font-bold text-2xl tracking-tight leading-none text-warm-accent">HDSP</span>
              <span className="text-[8px] font-bold tracking-[0.2em] text-deep-charcoal/60 uppercase">Home Domestic Services Provider</span>
            </div>
          </div>
          
          <div className="hidden md:flex items-center gap-8">
            <a href="#vetting" className="text-sm font-medium hover:text-warm-accent transition-colors">Vetting</a>
            <a href="#categories" className="text-sm font-medium hover:text-warm-accent transition-colors">Categories</a>
            <a href="#neighborhoods" className="text-sm font-medium hover:text-warm-accent transition-colors">Locations</a>
            <a href="https://wa.me/920000000000" className="btn-whatsapp">
              <MessageCircle className="w-5 h-5" />
              WhatsApp Us
            </a>
          </div>
          
          <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>
      
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-b border-gray-100 overflow-hidden"
          >
            <div className="flex flex-col p-6 gap-4">
              <a href="#vetting" onClick={() => setIsOpen(false)}>Vetting</a>
              <a href="#categories" onClick={() => setIsOpen(false)}>Categories</a>
              <a href="#neighborhoods" onClick={() => setIsOpen(false)}>Locations</a>
              <a href="https://wa.me/920000000000" className="btn-whatsapp justify-center">
                <MessageCircle className="w-5 h-5" />
                WhatsApp Us
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Hero = () => (
  <section className="relative pt-20 pb-32 overflow-hidden">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid lg:grid-cols-2 gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-warm-accent/10 text-warm-accent font-medium text-sm mb-6">
            <Clock className="w-4 h-4" />
            2026 Premium Benchmarks
          </div>
          <h1 className="text-5xl md:text-7xl mb-6 leading-[1.1]">
            Domestic Staffing <br />
            <span className="text-warm-accent italic font-light font-sans">Across All Karachi</span>
          </h1>
          <p className="text-xl text-gray-600 mb-10 max-w-lg leading-relaxed">
            We don't sell replacements. We sell perfect matches. 
            Experience the rigor of manual vetting for households across every corner of Karachi.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a href="#request" className="btn-primary flex items-center justify-center gap-2">
              Request Staff Now
              <ChevronRight className="w-4 h-4" />
            </a>
            <div className="flex items-center gap-3 px-4 border-l border-gray-200">
              <div className="flex -space-x-2">
                {[
                  "https://images.unsplash.com/photo-1494790108377-be9c29b29330",
                  "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d",
                  "https://images.unsplash.com/photo-1438761681033-6461ffad8d80"
                ].map((url, i) => (
                  <div key={i} className="w-10 h-10 rounded-full border-2 border-bone bg-linen overflow-hidden">
                    <img src={`${url}?auto=format&fit=crop&q=80&w=100`} alt="User" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                  </div>
                ))}
              </div>
              <span className="text-sm text-gray-500 font-medium tracking-tight">Trusted by 500+ <br/>KHI Families</span>
            </div>
          </div>
        </motion.div>
        
        <motion.div 
          className="relative grid grid-cols-2 gap-4"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="space-y-4 pt-12">
            <div className="aspect-[4/5] rounded-[2rem] bg-gray-300 overflow-hidden relative group">
              <img 
                src="https://images.unsplash.com/photo-1556910103-1c02745aae4d?auto=format&fit=crop&q=85&w=800" 
                alt="Professional Cook" 
                className="w-full h-full object-cover grayscale active:grayscale-0 transition-all duration-700" 
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-deep-charcoal/60 to-transparent p-6 flex flex-col justify-end text-white">
                <span className="font-medium">Expert Home Cooks</span>
              </div>
            </div>
            <div className="bento-card p-6">
              <div className="text-3xl font-display font-bold text-warm-accent">98%</div>
              <div className="text-sm text-gray-500">First-time Match Joy</div>
            </div>
          </div>
          <div className="space-y-4">
            <div className="bento-card bg-deep-charcoal text-white p-6 border-none">
              <ShieldCheck className="w-8 h-8 text-warm-accent mb-4" />
              <h3 className="text-lg leading-tight text-white font-display">Hand-verified documentation for every single placement.</h3>
            </div>
            <div className="aspect-[4/5] rounded-[2rem] bg-gray-300 overflow-hidden relative group">
              <img 
                src="https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?auto=format&fit=crop&q=85&w=800" 
                alt="Professional Driver" 
                className="w-full h-full object-cover grayscale active:grayscale-0 transition-all duration-700" 
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-deep-charcoal/60 to-transparent p-6 flex flex-col justify-end text-white">
                <span className="font-medium">Verified Drivers</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  </section>
);

const BentoGrid = () => (
  <section className="content-chunk bg-linen/20">
    <div className="max-w-7xl mx-auto px-4">
      <div className="grid md:grid-cols-4 gap-6">
        <div className="bento-card col-span-1 md:col-span-2">
          <div className="flex items-start justify-between mb-8">
            <div>
              <h2 className="text-3xl mb-2">Our Vetting Pillars</h2>
              <p className="text-gray-500">Beyond the standard background check.</p>
            </div>
            <div className="p-3 bg-warm-accent/10 rounded-2xl">
              <UserCheck className="text-warm-accent" />
            </div>
          </div>
          <div className="grid sm:grid-cols-3 gap-6">
            {VETTING_STEPS.map((step, idx) => (
              <div key={idx} className="space-y-3">
                <div className="w-10 h-10 rounded-full bg-warm-accent/10 flex items-center justify-center shadow-sm">
                  {step.icon}
                </div>
                <h4 className="font-display font-bold text-xs uppercase tracking-wider text-warm-accent">{step.title}</h4>
                <p className="text-[10px] text-gray-500 leading-relaxed uppercase tracking-widest">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
        
        <div className="bento-card col-span-1 bg-warm-accent text-white border-none overflow-hidden relative">
          <div className="relative z-10">
            <h2 className="text-3xl mb-4 text-white">Serving <br/>All Karachi</h2>
            <p className="text-white/80 mb-6 text-sm">From Clifton to North Nazimabad, we bridge the gap between quality staff and reliable homes.</p>
            <ul className="space-y-2">
              {NEIGHBORHOODS.slice(0,3).map((n, i) => (
                <li key={i} className="flex items-center gap-2 text-sm font-medium">
                  <CheckCircle2 className="w-4 h-4 text-white/60" />
                  {n}
                </li>
              ))}
            </ul>
          </div>
          <MapPin className="absolute -bottom-8 -right-8 w-40 h-40 text-white/10" />
        </div>

        <div className="bento-card col-span-1 p-0 overflow-hidden relative group">
          <img 
            src="https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&q=80&w=600" 
            alt="Premium Interior" 
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-deep-charcoal/20 group-hover:bg-deep-charcoal/10 transition-colors" />
        </div>
      </div>
    </div>
  </section>
);

const StaffShowcase = () => (
  <section id="categories" className="content-chunk bg-bone/30">
    <div className="max-w-7xl mx-auto px-4">
      <div className="text-center mb-16">
        <h2 className="text-4xl mb-4">Precision Placements</h2>
        <p className="text-gray-500 max-w-2xl mx-auto italic"> Transparent 2026 salary benchmarks to manage expectations from day one.</p>
      </div>
      
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {STAFF_CATEGORIES.map((cat, idx) => (
          <motion.div 
            key={idx} 
            whileHover={{ y: -8 }}
            className="bento-card bg-bone group cursor-default"
          >
            <div className="w-12 h-12 rounded-2xl bg-cloud-dancer flex items-center justify-center mb-6 group-hover:bg-warm-accent group-hover:text-white transition-colors">
              {cat.icon}
            </div>
            <h3 className="text-xl mb-3">{cat.title}</h3>
            <p className="text-sm text-gray-500 mb-6 leading-relaxed">{cat.description}</p>
            <div className="pt-4 border-t border-gray-100">
              <span className="text-xs font-bold text-gray-400 uppercase tracking-widest block mb-1">Expected Salary</span>
              <span className="text-lg font-display font-bold text-warm-accent">{cat.salaryRange}</span>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

const RequestForm = () => (
  <section id="request" className="content-chunk bg-linen/40">
    <div className="max-w-3xl mx-auto px-4">
      <div className="bento-card bg-bone p-10 md:p-16 text-center">
        <h2 className="text-4xl mb-6">Request Your Perfect Match</h2>
        <p className="text-gray-500 mb-10">Tell us your requirements, and our physical vetting team will begin the search today.</p>
        
        <form className="space-y-4 text-left" onSubmit={(e) => e.preventDefault()}>
          <div className="grid sm:grid-cols-2 gap-4">
            <div className="space-y-2">
              <label className="text-sm font-semibold ml-4">Full Name</label>
              <input type="text" className="w-full px-6 py-4 rounded-2xl bg-cloud-dancer border-none focus:ring-2 focus:ring-warm-accent outline-none" placeholder="Enter your name" />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-semibold ml-4">Phone (WhatsApp)</label>
              <input type="tel" className="w-full px-6 py-4 rounded-2xl bg-cloud-dancer border-none focus:ring-2 focus:ring-warm-accent outline-none" placeholder="+92 ..." />
            </div>
          </div>
          <div className="space-y-2">
            <label className="text-sm font-semibold ml-4">Required Staff Category</label>
            <select className="w-full px-6 py-4 rounded-2xl bg-cloud-dancer border-none focus:ring-2 focus:ring-warm-accent outline-none appearance-none">
              <option>House Maid (Live-in)</option>
              <option>House Maid (Daily)</option>
              <option>Home Cook</option>
              <option>Nanny</option>
              <option>Driver</option>
            </select>
          </div>
          <div className="space-y-2">
            <label className="text-sm font-semibold ml-4">Preferred Neighborhood</label>
            <select className="w-full px-6 py-4 rounded-2xl bg-cloud-dancer border-none focus:ring-2 focus:ring-warm-accent outline-none appearance-none">
              {NEIGHBORHOODS.map(n => <option key={n}>{n}</option>)}
            </select>
          </div>
          <button className="btn-primary w-full mt-6 py-5 text-lg">Send Request</button>
        </form>
        
        <div className="mt-8 flex items-center justify-center gap-6 grayscale opacity-50">
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-4 h-4" />
            <span className="text-xs font-bold uppercase tracking-widest">NADRA Verified</span>
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4" />
            <span className="text-xs font-bold uppercase tracking-widest">Reference Checked</span>
          </div>
        </div>
      </div>
    </div>
  </section>
);

const Footer = () => (
  <footer className="py-20 bg-deep-charcoal text-white">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid md:grid-cols-4 gap-12 mb-16">
        <div className="col-span-1 md:col-span-2">
          <div className="flex items-center gap-3 mb-6">
            <img 
              src="logo.png" 
              alt="HDSP Logo" 
              className="w-12 h-12 object-contain brightness-0 invert opacity-80" 
              onError={(e) => {
                e.currentTarget.style.display = 'none';
                e.currentTarget.parentElement!.innerHTML = '<div class="w-10 h-10 bg-white/10 rounded-xl flex items-center justify-center"><svg class="text-warm-accent w-6 h-6" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10"/></svg></div>';
              }}
            />
            <div className="flex flex-col">
              <span className="font-serif font-bold text-3xl tracking-tight text-white">HDSP</span>
              <span className="text-[8px] font-bold tracking-[0.2em] text-white/60 uppercase">Home Domestic Services Provider</span>
            </div>
          </div>
          <p className="text-gray-400 max-w-sm mb-6">
            Karachi's trusted boutique domestic placement agency. We provide verified staff for households across all districts of Karachi.
          </p>
          <div className="flex gap-4">
            <a href="https://wa.me/923000000000" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-warm-accent transition-colors">
              <MessageCircle className="w-5 h-5" />
            </a>
          </div>
        </div>
        
        <div>
          <h4 className="font-display font-bold text-sm uppercase tracking-widest text-warm-accent mb-6">Quick Links</h4>
          <ul className="space-y-4 text-gray-400">
            <li><a href="#vetting" className="hover:text-white transition-colors">Vetting Process</a></li>
            <li><a href="#categories" className="hover:text-white transition-colors">Staff Categories</a></li>
            <li><a href="#neighborhoods" className="hover:text-white transition-colors">Target Neighborhoods</a></li>
            <li><a href="#request" className="hover:text-white transition-colors">Placement Fees</a></li>
          </ul>
        </div>
        
        <div>
          <h4 className="font-display font-bold text-sm uppercase tracking-widest text-warm-accent mb-6">Karachi HQs</h4>
          <address className="not-italic text-gray-400 space-y-4">
            <p>DHA Phase 6, Karachi</p>
            <p>Clifton Block 4, Karachi</p>
            <p className="flex items-center gap-2">
              <MessageCircle className="w-4 h-4 text-warm-accent" />
              +92 3XX-XXXXXXX
            </p>
          </address>
        </div>
      </div>
      
      <div className="pt-8 border-t border-white/10">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
          <div className="bg-white/5 border border-white/10 p-4 rounded-xl max-w-2xl">
            <div className="flex items-center gap-2 text-warm-accent mb-2">
              <Info className="w-4 h-4" />
              <span className="text-xs font-bold uppercase tracking-tighter">Placement Policy</span>
            </div>
            <p className="text-[10px] uppercase tracking-wider text-gray-500 leading-relaxed">
              Legal Disclaimer: Home Domestic Staff Provider is a recruitment facilitation agency. Our service fee is for the search, manual vetting, and verified introduction. We do not provide replacement staff or manage payroll. The employment contract is strictly between the employer and the employee.
            </p>
          </div>
          <p className="text-xs text-gray-500">&copy; 2026 Home Domestic Staff Provider. Built for trust.</p>
        </div>
      </div>
    </div>
  </footer>
);

export default function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <BentoGrid />
      <StaffShowcase />
      
      {/* Vetting Detail Section - The 'Human' Element */}
      <section id="vetting" className="content-chunk bg-cloud-dancer">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div className="relative">
              <div className="aspect-square rounded-[3rem] bg-gray-100 overflow-hidden shadow-2xl">
                <img 
                  src="https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&q=85&w=1000" 
                  alt="Documentation Check" 
                  className="w-full h-full object-cover" 
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="absolute -bottom-10 -right-10 bento-card bg-warm-accent text-white border-none p-8 max-w-xs scale-90 md:scale-100 shadow-2xl">
                <div className="flex items-center gap-3 mb-4">
                  <UserCheck className="w-8 h-8 text-white" />
                  <span className="font-display font-bold text-white">The Vetting Dossier</span>
                </div>
                <p className="text-sm opacity-90 leading-relaxed text-white">
                  Every staff member arrives with a physical PDF folder containing NADRA Verisys, a recent utility bill, and reference notes.
                </p>
              </div>
            </div>
            
            <div className="space-y-8">
              <h2 className="text-4xl md:text-5xl leading-tight">We do the work worth the commission.</h2>
              <p className="text-lg text-gray-500 leading-relaxed">
                In a world of digital shortcuts, we prioritize physical truth. 
                Our team visits homes, talks to old employers, and verifies CNICs 
                at the NADRA terminal. We charge for the high-quality match, 
                not for a revolving door of replacements.
              </p>
              
              <ul className="space-y-6">
                {[
                  { t: "Human Intelligence", d: "We gauge character, not just skills, through in-depth physical interviews." },
                  { t: "Address Verification", d: "Utility bills are checked against physical residence to ensure accountability." },
                  { t: "Ethical Sourcing", d: "Fair wages and clear expectations for both staff and employers." }
                ].map((item, idx) => (
                  <li key={idx} className="flex gap-4">
                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-warm-accent/20 flex items-center justify-center mt-1">
                      <div className="w-2 h-2 rounded-full bg-warm-accent" />
                    </div>
                    <div>
                      <h4 className="font-bold mb-1">{item.t}</h4>
                      <p className="text-sm text-gray-500">{item.d}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>
      
      <RequestForm />

      <section className="py-20 bg-bone/50 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4">
          <div className="bento-card bg-deep-charcoal border-none p-0 overflow-hidden grid md:grid-cols-2 group">
            <div className="p-12 md:p-20 flex flex-col justify-center">
              <h2 className="text-4xl text-white mb-6 leading-tight">The Boutique <br />Recruitment Standard.</h2>
              <p className="text-white/60 text-lg mb-8 leading-relaxed">
                We aren't a mass-market agency. We are a family-run staffing consultancy that treats your home with the same respect we treat our own.
              </p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center">
                  <ShieldCheck className="text-warm-accent w-6 h-6" />
                </div>
                <span className="text-white/80 font-medium font-display tracking-widest uppercase text-xs">Serving All of Karachi</span>
              </div>
            </div>
            <div className="relative h-64 md:h-auto overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&q=85&w=1000" 
                alt="Luxury Karachi Home" 
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-deep-charcoal via-deep-charcoal/20 to-transparent md:block hidden" />
            </div>
          </div>
        </div>
      </section>

      <Footer />
      
      {/* Floating WhatsApp for Mobile Focus */}
      <motion.div 
        className="fixed bottom-8 right-8 md:hidden z-50"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        <a href="https://wa.me/923000000000" className="w-16 h-16 bg-[#25D366] rounded-full shadow-2xl flex items-center justify-center text-white">
          <MessageCircle className="w-8 h-8" />
        </a>
      </motion.div>
    </div>
  );
}
