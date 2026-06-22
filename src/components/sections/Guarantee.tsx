import { WHATSAPP_LINK } from '../../data/constants';

export default function Guarantee() {
  return (
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
          className="inline-block bg-white text-accent px-10 py-5 rounded-lg font-bold text-lg hover:bg-surface transition-all shadow-xl"
        >
          Abhi WhatsApp Karen
        </a>
      </div>
    </section>
  );
}
