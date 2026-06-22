import { motion } from 'motion/react';

export default function MaidCleaner({ className }: { className?: string }) {
  const sparkles = [
    { x: 30, y: 40, s: 4, delay: 0 },
    { x: 170, y: 35, s: 5, delay: 0.8 },
    { x: 45, y: 150, s: 3.5, delay: 1.6 },
    { x: 160, y: 145, s: 4.5, delay: 2.4 },
  ];

  const star = (cx: number, cy: number, s: number) => {
    const h = s / 2;
    return `M ${cx} ${cy - h} L ${cx + h * 0.3} ${cy - h * 0.3} L ${cx + h} ${cy} L ${cx + h * 0.3} ${cy + h * 0.3} L ${cx} ${cy + h} L ${cx - h * 0.3} ${cy + h * 0.3} L ${cx - h} ${cy} L ${cx - h * 0.3} ${cy - h * 0.3} Z`;
  };

  const droplets = [
    { x: 83, y: 106, delay: 0 },
    { x: 80, y: 113, delay: 0.3 },
    { x: 86, y: 120, delay: 0.6 },
  ];

  return (
    <div className={className}>
      <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" fill="none">
        <radialGradient id="maidGlow" cx="50%" cy="40%" r="55%">
          <stop offset="0%" stopColor="#FFF5E6" />
          <stop offset="100%" stopColor="#FFF8F0" stopOpacity="0" />
        </radialGradient>
        <circle cx="100" cy="90" r="80" fill="url(#maidGlow)" />

        {sparkles.map((s, i) => (
          <motion.path
            key={`sparkle-${i}`}
            d={star(s.x, s.y, s.s)}
            fill="#549930"
            opacity={0.5}
            animate={{ opacity: [0.15, 0.6, 0.15], scale: [1, 1.3, 1] }}
            transition={{
              duration: 3,
              repeat: Infinity,
              delay: s.delay,
              ease: 'easeInOut',
            }}
            style={{ transformOrigin: `${s.x}px ${s.y}px` }}
          />
        ))}

        <motion.g
          animate={{ y: [0, -2, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
        >
          <path
            d="M 76 50 Q 76 30 100 28 Q 124 30 124 50 Q 124 70 100 72 Q 76 70 76 50 Z"
            fill="#2D1B00"
          />
          <ellipse cx="100" cy="58" rx="18" ry="20" fill="#F5D6C5" />

          <circle cx="90" cy="54" r="2.5" fill="#4A3520" />
          <circle cx="110" cy="54" r="2.5" fill="#4A3520" />
          <path
            d="M 93 62 Q 100 67 107 62"
            stroke="#4A3520"
            strokeWidth="2"
            strokeLinecap="round"
          />
          <circle cx="85" cy="59" r="4" fill="#E8A0A0" opacity="0.3" />
          <circle cx="115" cy="59" r="4" fill="#E8A0A0" opacity="0.3" />

          <path d="M 78 38 Q 72 32 74 26 Q 80 28 84 34" fill="#2D1B00" />
          <path d="M 122 38 Q 128 32 126 26 Q 120 28 116 34" fill="#2D1B00" />
        </motion.g>

        <path d="M 80 76 L 120 76 L 124 120 L 76 120 Z" fill="#0A2850" />
        <path d="M 82 76 L 118 76 L 115 85 L 85 85 Z" fill="#1a3a5c" />
        <path
          d="M 84 88 L 116 88 L 114 120 L 86 120 Z"
          fill="#F5F5F5"
          opacity="0.9"
        />
        <path d="M 84 88 L 100 88 L 100 120 L 86 120 Z" fill="#FFF8E7" />

        <path
          d="M 78 112 Q 100 120 122 112"
          fill="none"
          stroke="#0A2850"
          strokeWidth="2"
        />

        <motion.g
          animate={{ rotate: [0, 2, 0, -1, 0] }}
          transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut' }}
          style={{ transformOrigin: '95px 80px' }}
        >
          <path
            d="M 85 80 C 82 88 78 95 76 100"
            stroke="#F5D6C5"
            strokeWidth="8"
            strokeLinecap="round"
          />
          <circle cx="76" cy="100" r="4.5" fill="#F5D6C5" />
          <rect x="70" y="100" width="12" height="16" rx="3" fill="#549930" />
          <rect x="74" y="105" width="4" height="10" rx="1" fill="#3D7A20" />
          <circle cx="76" cy="100" r="2" fill="#549930" />
        </motion.g>

        {droplets.map((d, i) => (
          <motion.path
            key={`drop-${i}`}
            d={`M ${d.x} ${d.y} Q ${d.x - 1.5} ${d.y + 4} ${d.x} ${d.y + 6} Q ${d.x + 1.5} ${d.y + 4} ${d.x} ${d.y} Z`}
            fill="#87CEEB"
            opacity={0.6}
            animate={{ y: [0, -3, 0], opacity: [0, 0.6, 0] }}
            transition={{
              duration: 2,
              repeat: Infinity,
              delay: d.delay,
              ease: 'easeInOut',
            }}
          />
        ))}

        <motion.g
          animate={{ rotate: [0, -2, 0, 2, 0] }}
          transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut' }}
          style={{ transformOrigin: '108px 80px' }}
        >
          <path
            d="M 108 80 C 112 90 116 98 120 105"
            stroke="#F5D6C5"
            strokeWidth="8"
            strokeLinecap="round"
          />
          <circle cx="120" cy="105" r="4.5" fill="#F5D6C5" />
          <line
            x1="120"
            y1="108"
            x2="120"
            y2="116"
            stroke="#C4946A"
            strokeWidth="3"
            strokeLinecap="round"
          />
          <path
            d="M 115 116 Q 120 112 125 116 Q 120 122 115 116 Z"
            fill="#F5D6C5"
            stroke="#E8D5B8"
            strokeWidth="1"
          />
          <line
            x1="120"
            y1="116"
            x2="120"
            y2="122"
            stroke="#C4946A"
            strokeWidth="2"
            strokeLinecap="round"
          />
        </motion.g>

        <path
          d="M 95 128 L 95 152"
          stroke="#0A2850"
          strokeWidth="4"
          strokeLinecap="round"
        />
        <path
          d="M 105 128 L 105 152"
          stroke="#0A2850"
          strokeWidth="4"
          strokeLinecap="round"
        />
        <ellipse cx="100" cy="155" rx="12" ry="3" fill="#2D1B00" />

        <circle cx="95" cy="152" r="3" fill="#F5F5F5" />
        <circle cx="105" cy="152" r="3" fill="#F5F5F5" />
      </svg>
    </div>
  );
}
