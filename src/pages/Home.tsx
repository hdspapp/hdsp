import { motion } from 'motion/react';
import {
  MessageCircle,
  Home as HomeIcon,
  ChefHat,
  Baby,
  Car,
} from 'lucide-react';
import { WHATSAPP_LINK, PHONE_NUMBER } from '../data/constants';
import TrustBar from '../components/TrustBar';

const Hero = () => (
  <section className="bg-accent text-white py-20 md:py-32 relative overflow-hidden">
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
            className="bg-surface text-accent px-8 py-5 rounded-lg font-bold text-lg shadow-xl hover:bg-white transition-all transform active:scale-95"
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
    <section className="bg-surface py-20">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-serif mb-6 text-primary">
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
              className="bg-white p-8 rounded-xl border-l-4 border-accent shadow-sm"
            >
              <span className="text-4xl mb-6 block">{p.emoji}</span>
              <h3 className="text-xl font-bold mb-4 text-primary">
                &ldquo;{p.problem}&rdquo;
              </h3>
              <p className="text-gray-600 leading-relaxed italic">
                <span className="text-accent font-bold not-italic">
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

const serviceImages = [
  '/images/maid-cleaning.jpg',
  '/images/chef-cooking.jpg',
  '/images/nanny-toddlers.jpg',
  '/images/driver-car.jpg',
];

const Services = () => {
  const items = [
    {
      icon: <HomeIcon className="w-8 h-8" />,
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
  ];

  return (
    <section id="services" className="py-20">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-serif font-bold text-primary mb-4">
            Trained Staff for Every Need
          </h2>
          <div className="w-24 h-1 bg-accent mx-auto rounded-full" />
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map((it, idx) => (
            <motion.div
              key={idx}
              whileHover={{ y: -8 }}
              className="group relative overflow-hidden rounded-2xl shadow-sm hover:shadow-xl transition-all cursor-default"
            >
              <div className="absolute inset-0">
                <img
                  src={serviceImages[idx]}
                  alt={it.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/40 to-black/10 group-hover:from-black/75 transition-colors" />
              <div className="relative z-10 p-8 pt-48 flex flex-col items-center text-center min-h-[360px] justify-end">
                <div className="w-16 h-16 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center mb-6 text-white group-hover:bg-accent group-hover:scale-110 transition-all">
                  {it.icon}
                </div>
                <h3 className="text-xl font-bold mb-3 text-white drop-shadow-sm">
                  {it.title}
                </h3>
                <p className="text-sm text-white/80 leading-relaxed drop-shadow-sm">
                  {it.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Verification = () => (
  <section className="bg-primary text-white py-24">
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
            <h3 className="text-xl font-bold mb-4 relative z-10 text-accent">
              {step.t}
            </h3>
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
  <section className="bg-surface py-24">
    <div className="max-w-7xl mx-auto px-4">
      <h2 className="text-3xl md:text-5xl font-serif font-bold text-center mb-16">
        What Our Clients Say
      </h2>
      <div className="grid md:grid-cols-3 gap-8">
        {[
          {
            name: 'Samina R.',
            loc: 'Clifton',
            text: "HDSP sent us a wonderful maid who completely transformed our household. She's thorough, punctual, and my family is finally stress-free about home cleaning.",
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
          {
            name: 'Zainab T.',
            loc: 'Gulshan-e-Iqbal',
            text: 'The cook HDSP placed with us makes the best homemade food. She adapts to our taste preferences and maintains excellent kitchen hygiene. Highly recommended.',
          },
          {
            name: 'Rizwan A.',
            loc: 'PECHS',
            text: 'Hired a driver through HDSP and the verification process was incredibly thorough. GPS tracking and family-friendly driving — exactly what we needed.',
          },
          {
            name: 'Fatima S.',
            loc: 'North Nazimabad',
            text: "The nanny HDSP arranged for our toddler is amazing with kids. She's patient, well-trained, and we feel completely at ease leaving our son in her care.",
          },
        ].map((t, i) => (
          <div
            key={i}
            className="bg-white p-8 rounded-2xl shadow-sm italic text-gray-600 relative"
          >
            <div className="w-12 h-12 bg-surface rounded-full flex items-center justify-center font-bold text-accent mb-6">
              {t.name[0]}
            </div>
            <p className="mb-6 leading-relaxed">&ldquo;{t.text}&rdquo;</p>
            <div className="not-italic">
              <p className="font-bold text-primary">{t.name}</p>
              <p className="text-xs text-accent font-bold uppercase tracking-widest">
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
  <section className="bg-accent py-20 text-white text-center relative overflow-hidden">
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
        className="inline-block bg-white text-accent px-10 py-5 rounded-lg font-bold text-lg hover:bg-surface transition-all transform active:scale-95 shadow-xl"
      >
        Guarantee Ke Baare Mein Janein
      </a>
    </div>
  </section>
);

const FinalCTA = () => (
  <section className="py-24 bg-white text-center">
    <div className="max-w-3xl mx-auto px-4">
      <h2 className="text-4xl md:text-5xl font-serif font-bold text-primary mb-6">
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
        WhatsApp Karen — {PHONE_NUMBER}
      </a>
    </div>
  </section>
);

export default function Home() {
  return (
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
  );
}
