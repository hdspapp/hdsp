import { motion } from 'motion/react';
import { MessageCircle } from 'lucide-react';
import { WHATSAPP_LINK } from '../data/constants';

export default function FloatingWA() {
  return (
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
}
