import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  MessageCircle,
  Home,
  ChefHat,
  Baby,
  Car,
  HeartPulse,
} from 'lucide-react';

// --- Constants & Links ---
const WHATSAPP_NUMBER = '923358172235';
const WHATSAPP_LINK = `https://wa.me/${WHATSAPP_NUMBER}?text=Hello%20HDSP%2C%20I%20am%20interested%20in%20your%20domestic%20staff%20services`;

// --- Components ---

const Navbar = () => (
  <nav className="sticky top-0 z-50 bg-white border-b border-gray-100 shadow-sm transition-all duration-300">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex justify-between items-center h-20">
        <div className="flex items-center gap-3">
          <div className="text-warm-accent flex items-center justify-start">
            <img
              src="/logo.svg"
              alt="HDSP Logo"
              className="w-full h-full object-contain object-left max-h-16"
            />
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

const Hero = () => (
  <section className="bg-warm-accent text-white py-20 md:py-32 relative overflow-hidden">
    {/* Decorative Elements */}
    <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full -mr-48 -mt-48 blur-3xl animate-pulse" />
    <div className="absolute bottom-0 left-0 w-64 h-64 bg-black/5 rounded-full -ml-32 -mb-32 blur-2xl" />

    <div className="max-w-5xl mx-auto px-4 text-center relative z-10">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <span className="inline-block bg-white/10 backdrop-blur-md px-4 py-2 rounded-full text-sm font-semibold mb-8 tracking-wide">
          ✦ Karachi's Most Trusted Domestic Staff Agency
        </span>
        <h1 className="text-4xl md:text-7xl font-serif font-bold mb-8 leading-[1.1] max-w-4xl mx-auto">
          Verified. Trained. Reliable. <br />
          Domestic Staff for Your Home.
        </h1>
        <p className="text-lg md:text-xl text-white/90 mb-12 max-w-2xl mx-auto leading-relaxed">
          Apne ghar mein sirf verified aur trained staff laayein.{' '}
          <br className="hidden md:block" />
          CNIC checked, police cleared, professionally trained — har staff
          member.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href={WHATSAPP_LINK}
            className="bg-cloud-dancer text-warm-accent px-8 py-5 rounded-lg font-bold text-lg shadow-xl hover:bg-white transition-all transform active:scale-95"
          >
            Abhi WhatsApp Karen
          </a>
          <a
            href="#services"
            className="border-2 border-white/30 text-white px-8 py-5 rounded-lg font-bold text-lg hover:bg-white/10 transition-all"
          >
            Our Services
          </a>
        </div>
      </motion.div>
    </div>
  </section>
);

const TrustBar = () => (
  <section className="bg-deep-charcoal py-8 overflow-hidden">
    <div className="max-w-7xl mx-auto px-4">
      <div className="flex flex-wrap justify-center items-center gap-6 md:gap-12 text-sm md:text-base text-white/80 font-medium">
        <span className="flex items-center gap-2 px-4 border-r border-white/10 last:border-none">
          CNIC Verified Staff
        </span>
        <span className="flex items-center gap-2 px-4 border-r border-white/10 last:border-none">
          Police Clearance Checked
        </span>
        <span className="flex items-center gap-2 px-4 border-r border-white/10 last:border-none">
          Professionally Trained
        </span>
        <span className="flex items-center gap-2 px-4 border-r border-white/10 last:border-none">
          30-Day Replacement Guarantee
        </span>
        <span className="flex items-center gap-2 px-4 last:border-none uppercase tracking-widest text-xs opacity-60">
          DHA · Clifton · PECHS
        </span>
      </div>
    </div>
  </section>
);

const PainPoints = () => {
  const points = [
    {
      emoji: '😟',
      problem: 'Humari maid ne 2 hafte mein chhor diya',
      solution: 'HDSP offers 30-day replacement guarantee with zero arguments.',
    },
    {
      emoji: '😰',
      problem: 'Unverified tha — ghar mein tension ho gayi',
      solution:
        'Every HDSP staff carries a QR-linked verified ID card for instant tracking.',
    },
    {
      emoji: '😤',
      problem: 'Referrals pe trust nahi kar sakta',
      solution:
        'CNIC + police clearance + double reference checks before any placement.',
    },
  ];

  return (
    <section className="bg-bone py-20">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-serif mb-6 text-deep-charcoal">
            Aap ke ghar mein kaun aa raha hai — kya aap jaante hain?
          </h2>
          <p className="text-gray-500 max-w-2xl mx-auto text-lg italic leading-relaxed">
            Every family in Karachi has a story. An unreliable maid, an
            unverified driver, a stolen item. <br className="hidden md:block" />
            HDSP exists to end these stories.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {points.map((p, idx) => (
            <motion.div
              key={idx}
              whileHover={{ y: -5 }}
              className="bg-white p-8 rounded-xl border-l-4 border-warm-accent shadow-sm"
            >
              <span className="text-4xl mb-6 block">{p.emoji}</span>
              <h4 className="text-xl font-bold mb-4 text-deep-charcoal">
                "{p.problem}"
              </h4>
              <p className="text-gray-600 leading-relaxed italic">
                <span className="text-warm-accent font-bold not-italic">
                  HDSP Resolution:
                </span>{' '}
                {p.solution}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Services = () => {
  const items = [
    {
      icon: <Home className="w-8 h-8" />,
      title: 'Maids',
      desc: 'Household cleaning, laundry & daily management',
    },
    {
      icon: <ChefHat className="w-8 h-8" />,
      title: 'Chefs',
      desc: 'Trained cooks for daily meals & special occasions',
    },
    {
      icon: <Baby className="w-8 h-8" />,
      title: 'Nannies',
      desc: 'Trusted childcare professionals for your family',
    },
    {
      icon: <Car className="w-8 h-8" />,
      title: 'Drivers',
      desc: 'Licensed, verified drivers for family use',
    },
    {
      icon: <HeartPulse className="w-8 h-8" />,
      title: 'Patient Care',
      desc: 'Trained attendants for elderly & post-surgery care',
    },
  ];

  return (
    <section id="services" className="py-20">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-serif font-bold text-deep-charcoal mb-4">
            Trained Staff for Every Need
          </h2>
          <div className="w-24 h-1 bg-warm-accent mx-auto rounded-full" />
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {items.map((it, idx) => (
            <motion.div
              key={idx}
              whileHover={{ y: -6 }}
              className="p-8 bg-bone rounded-2xl text-center group cursor-default shadow-sm hover:shadow-xl transition-all"
            >
              <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-6 text-warm-accent group-hover:bg-warm-accent group-hover:text-white transition-all shadow-inner">
                {it.icon}
              </div>
              <h3 className="text-xl font-bold mb-3">{it.title}</h3>
              <p className="text-sm text-gray-500 leading-relaxed">{it.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Verification = () => (
  <section className="bg-deep-charcoal text-white py-24">
    <div className="max-w-7xl mx-auto px-4 text-center">
      <h2 className="text-4xl md:text-5xl font-serif font-bold mb-16">
        How We Verify Every Staff Member
      </h2>

      <div className="grid md:grid-cols-5 gap-8 text-left">
        {[
          { n: '1', t: 'CNIC Verification', d: 'NADRA confirmed identity.' },
          {
            n: '2',
            t: 'Police Clearance',
            d: 'Criminal background check, non-negotiable.',
          },
          {
            n: '3',
            t: 'Reference Checks',
            d: 'Previous employers contacted directly.',
          },
          {
            n: '4',
            t: 'Professional Training',
            d: 'Role-specific training before placement.',
          },
          {
            n: '5',
            t: 'HDSP Verified Card',
            d: 'QR-linked card, scannable by client anytime.',
          },
        ].map((step, i) => (
          <div
            key={i}
            className="relative p-6 border border-white/10 rounded-xl hover:bg-white/5 transition-colors"
          >
            <span className="text-7xl font-bold text-white/5 absolute -top-8 left-4">
              {step.n}
            </span>
            <h4 className="text-xl font-bold mb-4 relative z-10 text-warm-accent">
              {step.t}
            </h4>
            <p className="text-white/60 text-sm leading-relaxed relative z-10">
              {step.d}
            </p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const Testimonials = () => (
  <section className="bg-bone py-24">
    <div className="max-w-7xl mx-auto px-4">
      <h2 className="text-3xl md:text-5xl font-serif font-bold text-center mb-16">
        What Our Clients Say
      </h2>

      <div className="grid md:grid-cols-3 gap-8">
        {[
          {
            name: 'Samina R.',
            loc: 'Clifton',
            text: "Found an amazing patient care attendant for my father. She's so professional that my father now asks for her by name every morning.",
          },
          {
            name: 'Ayesha K.',
            loc: 'DHA Phase 6',
            text: "Found HDSP via WhatsApp group recommendation. It's been 4 months and I've had zero issues. The documentation sharing was very reassuring.",
          },
          {
            name: 'Farhan M.',
            loc: 'DHA Phase 8',
            text: "Returned from Dubai and was worried about local staffing. HDSP's process and accountability is exactly what Karachi needed.",
          },
        ].map((t, i) => (
          <div
            key={i}
            className="bg-white p-8 rounded-2xl shadow-sm italic text-gray-600 relative"
          >
            <div className="w-12 h-12 bg-cloud-dancer rounded-full flex items-center justify-center font-bold text-warm-accent mb-6">
              {t.name[0]}
            </div>
            <p className="mb-6 leading-relaxed">"{t.text}"</p>
            <div className="not-italic">
              <p className="font-bold text-deep-charcoal">{t.name}</p>
              <p className="text-xs text-warm-accent font-bold uppercase tracking-widest">
                {t.loc}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const Guarantee = () => (
  <section className="bg-warm-accent py-20 text-white text-center relative overflow-hidden">
    <div className="max-w-4xl mx-auto px-4 relative z-10">
      <h2 className="text-3xl md:text-6xl font-serif font-bold mb-6">
        30-Din Mein Satisfy Nahi? <br />
        Hum Replace Karenge.
      </h2>
      <p className="text-xl opacity-90 mb-10 italic">
        Koi sawaal nahi. Koi argument nahi. <br className="hidden md:block" />
        Free replacement within 30 days — guaranteed.
      </p>
      <a
        href={WHATSAPP_LINK}
        className="inline-block bg-white text-warm-accent px-10 py-5 rounded-lg font-bold text-lg hover:bg-cloud-dancer transition-all transform active:scale-95 shadow-xl"
      >
        Guarantee Ke Baare Mein Janein
      </a>
    </div>
  </section>
);

const FinalCTA = () => (
  <section className="py-24 bg-white text-center">
    <div className="max-w-3xl mx-auto px-4">
      <h2 className="text-4xl md:text-5xl font-serif font-bold text-deep-charcoal mb-6">
        Ready to Find Your Perfect Household Staff?
      </h2>
      <p className="text-xl text-gray-500 mb-12">
        Aaj hi humse baat karein. WhatsApp pe message karein —{' '}
        <br className="hidden md:block" /> hum 24 ghante mein jawab denge.
      </p>
      <a
        href={WHATSAPP_LINK}
        className="inline-flex items-center gap-4 bg-[#25d366] text-white px-10 py-6 rounded-xl font-bold text-xl hover:opacity-90 transition-all shadow-2xl hover:shadow-green-500/20 active:scale-95"
      >
        <MessageCircle className="w-8 h-8" />
        WhatsApp Karen — 0335-8172235
      </a>
    </div>
  </section>
);

const Footer = () => (
  <footer className="bg-deep-charcoal py-12 text-center border-t border-white/5">
    <div className="max-w-7xl mx-auto px-4">
      <div className="text-white/40 text-sm mb-6 flex flex-col md:flex-row items-center justify-center gap-2 md:gap-4">
        <span className="font-bold text-white/60">
          HDSP — Home Domestic Services Provider
        </span>
        <span className="hidden md:block">•</span>
        <span>Karachi, Pakistan</span>
        <span className="hidden md:block">•</span>
        <span>0335-8172235</span>
      </div>
      <div className="text-[10px] text-white/20 uppercase tracking-[0.3em] font-bold">
        Serving DHA · Clifton · PECHS · Bahria Town
      </div>
      <div className="mt-8 text-[10px] text-white/10 uppercase tracking-widest">
        &copy; 2026 HDSP Karachi. Trusted Partnerships Since Inception.
      </div>
    </div>
  </footer>
);

const FloatingWA = () => (
  <motion.a
    href={WHATSAPP_LINK}
    target="_blank"
    rel="noopener noreferrer"
    initial={{ scale: 0, opacity: 0 }}
    animate={{ scale: 1, opacity: 1 }}
    transition={{ delay: 1, type: 'spring' }}
    className="fixed bottom-8 right-8 z-[100] group"
  >
    <div className="absolute inset-0 bg-[#25d366] rounded-full blur-xl opacity-40 animate-pulse group-hover:scale-125 transition-transform" />
    <div className="relative w-16 h-16 bg-[#25d366] rounded-full flex items-center justify-center text-white shadow-2xl shadow-green-500/40">
      <MessageCircle className="w-8 h-8" />
      <span className="absolute right-full mr-4 bg-white text-deep-charcoal px-3 py-1 rounded-lg text-xs font-bold whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity shadow-lg">
        Chat with HDSP
      </span>
    </div>
  </motion.a>
);

export default function App() {
  return (
    <div className="min-h-screen font-sans text-deep-charcoal selection:bg-warm-accent/20">
      <Navbar />
      <main>
        <Hero />
        <TrustBar />
        <PainPoints />
        <Services />
        <Verification />
        <Testimonials />
        <Guarantee />
        <FinalCTA />
      </main>
      <Footer />
      <FloatingWA />
    </div>
  );
}
