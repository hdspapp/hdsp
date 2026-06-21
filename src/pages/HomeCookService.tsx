import { useEffect } from 'react';
import { motion } from 'motion/react';
import {
  MessageCircle,
  ChefHat,
  MapPin,
  Clock,
  Utensils,
  Heart,
} from 'lucide-react';
import { WHATSAPP_LINK, PHONE_NUMBER } from '../data/constants';
import TrustBar from '../components/TrustBar';

const faqItems = [
  {
    q: 'Cook kitne khane banata hai?',
    a: 'Yeh aap ki zaroorat par depend karta hai. Full-time cook typically 3 meals (nashta, dopahar ka khana, raat ka khana) banata hai. Part-time cook sirf 1–2 meals bana sakta hai. Aap apni requirement ke mutabiq decide kar sakte hain.',
  },
  {
    q: 'Kya cook diet food bana sakta hai?',
    a: 'Jee haan! Hamare cooks diabetic, low-calorie, high-protein, aur other specific diet plans follow kar sakte hain. Interview ke waqt aap apni dietary needs clearly bata dein, aur hum aapke liye suitable cook match karenge.',
  },
  {
    q: 'What cuisine styles do your cooks specialize in?',
    a: "Our cooks are experienced in Pakistani (daal, roti, biryani, qorma), Indian, Chinese, and Continental cuisines. We match cooks based on your family's preferred cuisine. Many can also bake and prepare special occasion meals.",
  },
  {
    q: 'Can I hire a cook for just special occasions?',
    a: 'Yes, we offer on-demand cooks for dawat (gatherings), events, and special occasions. Available for one-time bookings, weekend cooking, or dinner parties. Minimum 24 hours notice recommended.',
  },
  {
    q: 'Full-time cook aur part-time cook mein kya farq hai?',
    a: 'Full-time cook aapke ghar mein 6–8 ghante kaam karta hai, daily 3 meals banata hai, aur kitchen ki cleanliness bhi maintain karta hai. Part-time cook 2–4 ghante aata hai, specific meals banata hai, aur kam salary hoti hai. Aap ki zaroorat ke mutabiq dono options available hain.',
  },
];

const testimonials = [
  {
    name: 'Razia B.',
    loc: 'North Nazimabad',
    text: "The cook HDSP sent us makes the best daal and roti — just like homemade. She's been with us for 3 months now and my family is very happy. The verification process was thorough and professional.",
  },
  {
    name: 'Ali R.',
    loc: 'Gulshan-e-Iqbal',
    text: 'We needed a cook who could manage our diabetic diet. HDSP found someone who understands portion control and sugar-free cooking. Highly recommended for families with specific dietary needs.',
  },
];

const cuisineTypes = [
  'Pakistani (Daal, Roti, Biryani, Qorma, Karahi)',
  'Indian (Curries, Breads, Sweets)',
  'Chinese (Rice, Noodles, Manchurian)',
  'Continental (Pasta, Steaks, Soups)',
  'BBQ & Grills',
  'Baking & Desserts',
  'Diet-specific (Diabetic, Low-calorie, High-protein)',
  'Dawat & Event Cooking',
];

export default function HomeCookService() {
  useEffect(() => {
    document.title = 'Home Cook Service in Karachi — HDSP';
    const meta = document.querySelector('meta[name="description"]');
    if (meta) {
      meta.setAttribute(
        'content',
        'Hire verified home cooks in Karachi. Full-time, part-time & dawat cooks. Pakistani, Chinese, Continental cuisines. CNIC verified. 30-day replacement. DHA, Clifton, Gulshan.'
      );
    }
  }, []);

  useEffect(() => {
    const schema = {
      '@context': 'https://schema.org',
      '@type': ['LocalBusiness', 'Service'],
      name: 'Home Cook Service — HDSP Karachi',
      description:
        'Verified home cooks for daily meals, special diets, and dawat cooking. Pakistani, Chinese, Continental cuisines. Full-time, part-time, and on-demand options.',
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
      url: 'https://hdsp.app/home-cook-service',
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
              ✦ Professional Home Cook Service
            </span>
            <h1 className="text-4xl md:text-7xl font-serif font-bold mb-6 leading-[1.1]">
              Home Cook Service in Karachi — <br />
              <span className="text-cloud-dancer">
                Fresh. Hygienic. Delicious.
              </span>
            </h1>
            <p className="text-lg md:text-xl text-white/90 mb-10 max-w-3xl mx-auto leading-relaxed">
              Verified home cooks for your daily meals. Pakistani, Chinese,
              Continental. Full-time, part-time, or dawat cooking. DHA, Clifton,
              Gulshan — all Karachi.
            </p>
            <a
              href={WHATSAPP_LINK}
              className="inline-flex items-center gap-3 bg-cloud-dancer text-warm-accent px-8 py-5 rounded-lg font-bold text-lg shadow-xl hover:bg-white transition-all active:scale-95"
            >
              <MessageCircle className="w-6 h-6" />
              Cook Chahiye — {PHONE_NUMBER}
            </a>
          </motion.div>
        </div>
      </section>

      <TrustBar />

      {/* Cuisines */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-serif font-bold text-deep-charcoal mb-6">
              Cuisines Our Cooks Specialize In
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              Every HDSP cook is trained in hygiene practices and experienced in
              preparing fresh, delicious meals. We match cooks based on your
              family&apos;s preferred cuisine and dietary needs.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-4">
            {cuisineTypes.map((cuisine, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -3 }}
                className="bg-bone p-5 rounded-xl border border-linen/50 text-center"
              >
                <Utensils className="w-6 h-6 text-warm-accent mx-auto mb-3" />
                <p className="text-sm font-medium text-deep-charcoal">
                  {cuisine}
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
            Hiring Options
          </h2>
          <div className="grid md:grid-cols-4 gap-6">
            {[
              {
                title: 'Full-Time Cook',
                desc: '6–8 hours daily, 3 meals. Kitchen cleaning included. Best for large families.',
              },
              {
                title: 'Part-Time Cook',
                desc: '2–4 hours daily, 1–2 specific meals. Budget-friendly option.',
              },
              {
                title: 'Weekend Cook',
                desc: 'Saturday-Sunday coverage. Perfect for families who eat special meals on weekends.',
              },
              {
                title: 'Dawat Cook',
                desc: 'One-time booking for events, parties, and family gatherings. Minimum 24hr notice.',
              },
            ].map((opt, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -5 }}
                className="bg-white p-8 rounded-2xl shadow-sm border border-linen/30"
              >
                <ChefHat className="w-8 h-8 text-warm-accent mb-5" />
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

      {/* Areas */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-serif font-bold text-deep-charcoal mb-4">
              Areas We Serve
            </h2>
            <p className="text-gray-500 max-w-2xl mx-auto">
              We provide home cooks across all major areas of Karachi. Quick
              placement typically within 24–48 hours.
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
              'Johar',
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
            What Families Say
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
            Cook Chahiye
          </a>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 bg-white text-center">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-deep-charcoal mb-6">
            Need a Home Cook in Karachi?
          </h2>
          <p className="text-xl text-gray-500 mb-12">
            Aaj hi WhatsApp karein. 24 ghante mein placement. <br />
            Sabhi cooks CNIC verified aur police cleared. Trial period
            available.
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
