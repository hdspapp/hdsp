import { motion } from 'motion/react';

export default function ShieldBadge({ className }: { className?: string }) {
  return (
    <div className={className}>
      <svg viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg" fill="none">
        <defs>
          <radialGradient id="shieldGlow" cx="50%" cy="45%" r="55%">
            <stop offset="0%" stopColor="#549930" stopOpacity="0.25" />
            <stop offset="100%" stopColor="#549930" stopOpacity="0" />
          </radialGradient>
        </defs>
        <motion.circle
          cx="60"
          cy="55"
          r="42"
          fill="url(#shieldGlow)"
          animate={{ opacity: [0.4, 0.8, 0.4] }}
          transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.path
          d="M 60 15 L 96 30 L 96 58 C 96 82 80 98 60 105 C 40 98 24 82 24 58 L 24 30 Z"
          stroke="#0A2850"
          strokeWidth="3"
          strokeLinejoin="round"
          animate={{ scale: [1, 1.02, 1] }}
          transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
          style={{ transformOrigin: '60px 60px' }}
        />
        <motion.path
          d="M 60 17 L 93 31 L 93 58 C 93 80 78 95 60 102 C 42 95 27 80 27 58 L 27 31 Z"
          fill="#0A2850"
          fillOpacity="0.04"
        />
        <motion.path
          d="M 44 58 L 55 69 L 76 48"
          stroke="#549930"
          strokeWidth="5"
          strokeLinecap="round"
          strokeLinejoin="round"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 1.5, delay: 0.5, ease: 'easeInOut' }}
        />
      </svg>
    </div>
  );
}
