import { motion } from 'motion/react';

export default function ChefCook({ className }: { className?: string }) {
  const dots = [
    { x: 20, y: 40, r: 2.5, color: '#549930', delay: 0 },
    { x: 180, y: 30, r: 2, color: '#0A2850', delay: 0.8 },
    { x: 35, y: 140, r: 3, color: '#D4A050', delay: 1.6 },
    { x: 170, y: 60, r: 2, color: '#E8B88A', delay: 2.4 },
  ];

  const steamData = [
    'M 148 132 Q 140 115 148 100 T 142 75',
    'M 158 132 Q 150 112 158 95 T 152 70',
    'M 168 132 Q 162 118 170 102 T 164 80',
  ];

  return (
    <div className={className}>
      <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" fill="none">
        <circle cx="100" cy="100" r="92" fill="#FDF6EE" />

        {steamData.map((d, i) => (
          <motion.path
            key={`steam-${i}`}
            d={d}
            stroke="#D0D0D0"
            strokeWidth="2.5"
            strokeLinecap="round"
            initial={{ opacity: 0 }}
            animate={{ opacity: [0, 0.5, 0] }}
            transition={{
              duration: 3,
              repeat: Infinity,
              delay: i * 0.6,
              ease: 'easeInOut',
            }}
          />
        ))}

        <g>
          <rect
            x="135"
            y="138"
            width="48"
            height="34"
            rx="4"
            fill="#E8E8E8"
            stroke="#C8C8C8"
            strokeWidth="1"
          />
          <rect
            x="146"
            y="134"
            width="26"
            height="6"
            rx="2"
            fill="#D8D8D8"
            stroke="#C8C8C8"
            strokeWidth="1"
          />
          <path
            d="M 183 148 Q 194 148 194 155 Q 194 162 183 162"
            fill="none"
            stroke="#B0B0B0"
            strokeWidth="3"
            strokeLinecap="round"
          />
          <path d="M 138 156 Q 159 147 180 156" fill="#549930" opacity="0.25" />
        </g>

        <path
          d="M 72 108 C 56 120 52 138 60 150"
          fill="none"
          stroke="#F5F5F5"
          strokeWidth="10"
          strokeLinecap="round"
        />
        <circle cx="60" cy="150" r="5" fill="#E8B88A" />

        <path
          d="M 82 95 L 78 155 Q 100 162 122 155 L 118 95 Z"
          fill="#FFFFFF"
          stroke="#E8E8E8"
          strokeWidth="1"
        />

        <path
          d="M 88 105 L 85 152 Q 100 158 115 152 L 112 105 Z"
          fill="#549930"
        />
        <rect x="93" y="130" width="14" height="12" rx="2" fill="#4A8A2A" />
        <path
          d="M 88 105 L 82 98"
          stroke="#549930"
          strokeWidth="3"
          strokeLinecap="round"
        />
        <path
          d="M 112 105 L 118 98"
          stroke="#549930"
          strokeWidth="3"
          strokeLinecap="round"
        />

        <path
          d="M 85 92 L 100 102 L 115 92"
          fill="none"
          stroke="#0A2850"
          strokeWidth="1.5"
          strokeLinecap="round"
        />

        <rect x="94" y="88" width="12" height="8" rx="3" fill="#E8B88A" />

        <circle cx="100" cy="68" r="24" fill="#E8B88A" />

        <circle cx="91" cy="64" r="2.5" fill="#2D2D2D" />
        <circle cx="109" cy="64" r="2.5" fill="#2D2D2D" />
        <path
          d="M 93 75 Q 100 81 107 75"
          fill="none"
          stroke="#2D2D2D"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <circle cx="83" cy="71" r="4.5" fill="#F0A0A0" opacity="0.3" />
        <circle cx="117" cy="71" r="4.5" fill="#F0A0A0" opacity="0.3" />

        <g>
          <rect
            x="74"
            y="38"
            width="52"
            height="10"
            rx="3"
            fill="#FAFAFA"
            stroke="#E8E8E8"
            strokeWidth="1"
          />
          <circle
            cx="82"
            cy="28"
            r="15"
            fill="#FAFAFA"
            stroke="#E8E8E8"
            strokeWidth="1"
          />
          <circle
            cx="100"
            cy="22"
            r="17"
            fill="#FAFAFA"
            stroke="#E8E8E8"
            strokeWidth="1"
          />
          <circle
            cx="118"
            cy="28"
            r="15"
            fill="#FAFAFA"
            stroke="#E8E8E8"
            strokeWidth="1"
          />
          <circle cx="90" cy="18" r="13" fill="#FFFFFF" />
          <circle cx="110" cy="18" r="13" fill="#FFFFFF" />
        </g>

        <motion.g
          animate={{ rotate: [0, 6, 0, -6, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
          style={{ transformOrigin: '118px 105px' }}
        >
          <path
            d="M 118 105 C 128 112 134 125 140 135"
            fill="none"
            stroke="#F5F5F5"
            strokeWidth="10"
            strokeLinecap="round"
          />
          <circle cx="140" cy="135" r="5" fill="#E8B88A" />
          <path
            d="M 140 135 L 150 155"
            fill="none"
            stroke="#8B7355"
            strokeWidth="3"
            strokeLinecap="round"
          />
          <circle cx="152" cy="158" r="6" fill="#8B7355" />
        </motion.g>

        {dots.map((dot, i) => (
          <motion.circle
            key={`dot-${i}`}
            cx={dot.x}
            cy={dot.y}
            r={dot.r}
            fill={dot.color}
            opacity={0.35}
            animate={{
              y: [dot.y, dot.y - 12, dot.y],
              opacity: [0.15, 0.5, 0.15],
            }}
            transition={{
              duration: 4 + i,
              repeat: Infinity,
              delay: dot.delay,
              ease: 'easeInOut',
            }}
          />
        ))}
      </svg>
    </div>
  );
}
