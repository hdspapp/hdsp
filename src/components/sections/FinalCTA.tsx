import { MessageCircle } from 'lucide-react';
import { WHATSAPP_LINK, PHONE_NUMBER } from '../../data/constants';

export interface FinalCTAProps {
  title: string;
  subtitle: string;
}

export default function FinalCTA({ title, subtitle }: FinalCTAProps) {
  return (
    <section className="py-24 bg-white text-center">
      <div className="max-w-3xl mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-serif font-bold text-primary mb-6">
          {title}
        </h2>
        <p className="text-xl text-gray-500 mb-12">{subtitle}</p>
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
}
