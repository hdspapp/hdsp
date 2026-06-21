import { useEffect } from 'react';
import { motion } from 'motion/react';
import {
  MessageCircle,
  Shield,
  MapPin,
  Clock,
  Baby,
  Heart,
  Home,
} from 'lucide-react';
import { WHATSAPP_LINK, PHONE_NUMBER } from '../data/constants';
import TrustBar from '../components/TrustBar';

const faqItems = [
  {
    q: 'Bachon ki dekhbhal karachi mein — kya aap service provide karte hain?',
    a: 'Jee haan! HDSP pooray Karachi mein bachon ki dekhbhal aur nanny service provide karta hai. DHA, Clifton, Gulshan, PECHS, North Nazimabad — har jagah. Hamari nannies trained hain aur unka police clearance bhi hota hai.',
  },
  {
    q: 'Nanny kitne saal ki hoti hai aur kya trained hoti hai?',
    a: 'Our nannies range from 25–45 years old. Each nanny goes through comprehensive childcare training including feeding, diaper changing, first aid, and age-appropriate play. All candidates are CNIC verified with police clearance.',
  },
  {
    q: 'What age children do your nannies care for?',
    a: "Our nannies are experienced with newborns (0–12 months), toddlers (1–3 years), and older children (4–12 years). We match nannies based on your child's age and specific needs.",
  },
  {
    q: 'Can I hire a babysitter for just evenings?',
    a: 'Absolutely. We offer flexible scheduling: full-day, half-day, evening-only, and weekend babysitting. Evening shifts are especially popular for working parents who need coverage from 4 PM to 10 PM.',
  },
  {
    q: 'Kya aap newborn ke liye nanny provide karte hain?',
    a: 'Jee haan. Hamare paas newborn specialty nannies hain jo nursery experience rakhti hain. Yeh feeding schedule, diaper changes, sleep training, aur soothing techniques mein expert hoti hain. Mother & baby care ek saath provide kiya jaata hai.',
  },
];

const testimonials = [
  {
    name: 'Zainab M.',
    loc: 'Gulshan-e-Iqbal',
    text: "Found a wonderful nanny for my 8-month-old through HDSP. She's patient, experienced, and my baby absolutely loves her. The CNIC and police verification gave us confidence from day one.",
  },
  {
    name: 'Omar H.',
    loc: 'PECHS',
    text: "We needed an after-school babysitter for our two kids. HDSP placed someone within 48 hours who's great with homework help and activities. Very professional service.",
  },
];

const serviceDetails = [
  {
    title: 'Newborn Care',
    desc: 'Feeding, diaper changes, sleep scheduling, soothing, and nursery management. Our newborn nannies have 3+ years of infant care experience.',
    icon: Baby,
  },
  {
    title: 'Toddler Care',
    desc: 'Age-appropriate play, potty training assistance, meal feeding, nap scheduling, and early learning activities.',
    icon: Baby,
  },
  {
    title: 'School-Age Care',
    desc: 'School pickup/drop, homework help, activity coordination, snack preparation, and supervised play.',
    icon: Heart,
  },
  {
    title: 'Evening Babysitting',
    desc: 'Flexible evening hours for parents who need coverage during dinner, events, or late work hours.',
    icon: Clock,
  },
  {
    title: 'Live-In Nanny',
    desc: 'Full-time live-in childcare professional who stays at your residence. Covers day and night needs.',
    icon: Home,
  },
  {
    title: 'Weekend Babysitting',
    desc: 'Weekend-only coverage for date nights, family events, or when you need extra help.',
    icon: Clock,
  },
];

export default function BabysitterService() {
  useEffect(() => {
    document.title = 'Babysitting & Nanny Service in Karachi — HDSP';
    const meta = document.querySelector('meta[name="description"]');
    if (meta) {
      meta.setAttribute(
        'content',
        'Hire verified nannies and babysitters in Karachi. Newborn care, toddler care, evening babysitting. CNIC verified with police clearance for DHA, Clifton, Gulshan.'
      );
    }
  }, []);

  useEffect(() => {
    const schema = {
      '@context': 'https://schema.org',
      '@type': ['LocalBusiness', 'Service'],
      name: 'Babysitting & Nanny Service — HDSP Karachi',
      description:
        'Verified nannies and babysitters for newborns, toddlers, and school-age children. Full-time, part-time, and evening options across all Karachi areas.',
      provider: {
        '@type': 'LocalBusiness',
        name: 'HDSP — Home Domestic Services Provider',
        telephone: '0335-8172235',
        areaServed: [
          { '@type': 'City', name: 'DHA, Karachi' },
          { '@type': 'City', name: 'Clifton, Karachi' },
          { '@type': 'City', name: 'Gulshan-e-Iqbal, Karachi' },
          { '@type': 'City', name: 'PECHS, Karachi' },
          { '@type': 'City', name: 'North Nazimabad, Karachi' },
        ],
      },
      areaServed: [
        { '@type': 'City', name: 'DHA, Karachi' },
        { '@type': 'City', name: 'Clifton, Karachi' },
        { '@type': 'City', name: 'Gulshan-e-Iqbal, Karachi' },
        { '@type': 'City', name: 'PECHS, Karachi' },
        { '@type': 'City', name: 'North Nazimabad, Karachi' },
      ],
      url: 'https://hdsp.app/babysitting-service',
      telephone: '0335-8172235',
    };
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.id = 'service-schema';
    script.textContent = JSON.stringify(schema);
    document.head.appendChild(script);
    return () => {
      const el = document.getElementById('service-schema');
      if (el) el.remove();
    };
  }, []);

  return (
    <main>
      {/* Hero */}
      <section className="bg-warm-accent text-white py-20 md:py-28 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full -mr-48 -mt-48 blur-3xl animate-pulse" />
        <div className="max-w-5xl mx-auto px-4 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block bg-white/10 backdrop-blur-md px-4 py-2 rounded-full text-sm font-semibold mb-8 tracking-wide">
              ✦ Trusted Childcare Professionals
            </span>
            <h1 className="text-4xl md:text-7xl font-serif font-bold mb-6 leading-[1.1]">
              Babysitting & Nanny Service <br />
              <span className="text-cloud-dancer">in Karachi</span>
            </h1>
            <p className="text-lg md:text-xl text-white/90 mb-10 max-w-3xl mx-auto leading-relaxed">
              Verified, trained, and loving nannies for your children. Newborn
              care, toddler care, and school-age support. DHA, Clifton, Gulshan
              — all Karachi.
            </p>
            <a
              href={WHATSAPP_LINK}
              className="inline-flex items-center gap-3 bg-cloud-dancer text-warm-accent px-8 py-5 rounded-lg font-bold text-lg shadow-xl hover:bg-white transition-all active:scale-95"
            >
              <MessageCircle className="w-6 h-6" />
              Nanny Chahiye — {PHONE_NUMBER}
            </a>
          </motion.div>
        </div>
      </section>

      <TrustBar />

      {/* Service Details */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-serif font-bold text-deep-charcoal mb-6">
              Our Childcare Services
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              Every HDSP nanny is CNIC verified, police cleared, and
              professionally trained in childcare. We match the right caregiver
              to your child&apos;s age and your family&apos;s needs.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {serviceDetails.map((item, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -4 }}
                className="bg-bone p-8 rounded-xl border border-linen/50"
              >
                <div className="w-12 h-12 bg-warm-accent/10 rounded-lg flex items-center justify-center mb-5">
                  <item.icon className="w-6 h-6 text-warm-accent" />
                </div>
                <h3 className="text-lg font-bold text-deep-charcoal mb-3">
                  {item.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Hiring Options */}
      <section className="py-20 bg-bone">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl md:text-5xl font-serif font-bold text-center text-deep-charcoal mb-16">
            Flexible Scheduling Options
          </h2>
          <div className="grid md:grid-cols-4 gap-6">
            {[
              {
                title: 'Full-Day Nanny',
                desc: '8–10 hours daily. Complete childcare including feeding, naps, activities, and care.',
              },
              {
                title: 'Half-Day Nanny',
                desc: '4–5 hours daily. Morning or afternoon coverage based on your schedule.',
              },
              {
                title: 'Evening Babysitter',
                desc: '4 PM – 10 PM coverage. Perfect for working parents who return late.',
              },
              {
                title: 'Live-In Nanny',
                desc: '24/7 childcare at your residence. Ideal for newborns and busy families.',
              },
            ].map((opt, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -5 }}
                className="bg-white p-8 rounded-2xl shadow-sm border border-linen/30"
              >
                <h3 className="text-xl font-bold text-deep-charcoal mb-3">
                  {opt.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {opt.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Areas Served */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-serif font-bold text-deep-charcoal mb-4">
              Areas We Cover
            </h2>
            <p className="text-gray-500 max-w-2xl mx-auto">
              We provide nannies and babysitters across all major areas of
              Karachi. Emergency placements available within 24 hours.
            </p>
          </div>
          <div className="flex flex-wrap justify-center gap-4">
            {[
              'DHA Phase 1–8',
              'Clifton',
              'Gulshan-e-Iqbal',
              'PECHS',
              'North Nazimabad',
              'Gulistan-e-Jauhar',
              'Defence',
              'Bahadurabad',
              'Saddar',
              'Malir',
              'Korangi',
              'Scheme 33',
            ].map((area, i) => (
              <div
                key={i}
                className="flex items-center gap-2 bg-bone px-5 py-3 rounded-full text-sm font-medium text-deep-charcoal border border-linen/30"
              >
                <MapPin className="w-4 h-4 text-warm-accent" />
                {area}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-bone">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-3xl md:text-5xl font-serif font-bold text-center text-deep-charcoal mb-16">
            Frequently Asked Questions
          </h2>
          <div className="space-y-4">
            {faqItems.map((item, i) => (
              <details
                key={i}
                className="bg-white rounded-xl p-6 shadow-sm border border-linen/30 group"
              >
                <summary className="font-bold text-deep-charcoal cursor-pointer list-none flex items-center justify-between">
                  {item.q}
                  <span className="text-warm-accent text-xl group-open:rotate-45 transition-transform">
                    +
                  </span>
                </summary>
                <p className="mt-4 text-gray-600 leading-relaxed text-sm">
                  {item.a}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl md:text-5xl font-serif font-bold text-center text-deep-charcoal mb-16">
            What Parents Say
          </h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {testimonials.map((t, i) => (
              <div
                key={i}
                className="bg-bone p-8 rounded-2xl italic text-gray-600"
              >
                <div className="w-12 h-12 bg-cloud-dancer rounded-full flex items-center justify-center font-bold text-warm-accent mb-6">
                  {t.name[0]}
                </div>
                <p className="mb-6 leading-relaxed">&ldquo;{t.text}&rdquo;</p>
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

      {/* Guarantee */}
      <section className="bg-warm-accent py-20 text-white text-center relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-4 relative z-10">
          <h2 className="text-3xl md:text-6xl font-serif font-bold mb-6">
            30-Din Mein Satisfy Nahi? <br />
            Hum Replace Karenge.
          </h2>
          <p className="text-xl opacity-90 mb-10 italic">
            Koi sawaal nahi. Koi argument nahi.{' '}
            <br className="hidden md:block" />
            Free replacement within 30 days — guaranteed.
          </p>
          <a
            href={WHATSAPP_LINK}
            className="inline-block bg-white text-warm-accent px-10 py-5 rounded-lg font-bold text-lg hover:bg-cloud-dancer transition-all shadow-xl"
          >
            Nanny Chahiye
          </a>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 bg-white text-center">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-deep-charcoal mb-6">
            Need a Trusted Nanny in Karachi?
          </h2>
          <p className="text-xl text-gray-500 mb-12">
            Aaj hi WhatsApp karein. 24 ghante mein placement. <br />
            Sabhi nannies CNIC verified aur police cleared hain.
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
    </main>
  );
}
