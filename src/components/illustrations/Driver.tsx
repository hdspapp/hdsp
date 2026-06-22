import { motion } from 'motion/react';

export default function Driver({ className }: { className?: string }) {
  return (
    <div className={className}>
      <svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <radialGradient id="shadow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="black" stopOpacity="0.1" />
            <stop offset="100%" stopColor="black" stopOpacity="0" />
          </radialGradient>
        </defs>

        <motion.ellipse
          cx="100"
          cy="186"
          rx="36"
          ry="5"
          fill="url(#shadow)"
          animate={{ rx: [36, 34, 36] }}
          transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
        />

        <motion.g
          animate={{ opacity: [0.2, 0.4, 0.2] }}
          transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut' }}
        >
          <rect x="28" y="171" width="28" height="8" rx="3" fill="#0A2850" />
          <rect x="33" y="167" width="18" height="5" rx="2" fill="#0A2850" />
          <rect
            x="37"
            y="168"
            width="7"
            height="3"
            rx="1"
            fill="white"
            opacity="0.25"
          />
          <circle cx="35" cy="179" r="2.5" fill="#1a1a2e" />
          <circle cx="50" cy="179" r="2.5" fill="#1a1a2e" />
        </motion.g>

        <motion.g
          animate={{ y: [0, -1.5, 0] }}
          transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
        >
          <rect x="86" y="128" width="13" height="44" rx="5" fill="#1a3357" />
          <rect x="101" y="128" width="13" height="44" rx="5" fill="#1a3357" />

          <rect x="83" y="170" width="19" height="9" rx="4" fill="#1a1a2e" />
          <rect x="98" y="170" width="19" height="9" rx="4" fill="#1a1a2e" />

          <rect x="74" y="68" width="52" height="62" rx="6" fill="white" />

          <path d="M74 68 Q74 108 74 130 L95 130 L95 68 Z" fill="#0A2850" />
          <path
            d="M126 68 Q126 108 126 130 L105 130 L105 68 Z"
            fill="#0A2850"
          />

          <path d="M96 68 L104 68 L104 105 Q100 111 96 105 Z" fill="#549930" />

          <rect x="74" y="125" width="52" height="5" rx="2" fill="#0A2850" />
          <rect x="96" y="124" width="8" height="7" rx="1" fill="#e8c840" />

          <rect x="94" y="60" width="12" height="10" rx="3" fill="#DBA888" />

          <path
            d="M74 74 Q58 88 56 110"
            stroke="#0A2850"
            strokeWidth="11"
            strokeLinecap="round"
          />
          <circle cx="56" cy="110" r="5.5" fill="#DBA888" />

          <motion.g
            style={{ originX: 126, originY: 74 }}
            animate={{ rotate: [-3, 3, -3] }}
            transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut' }}
          >
            <path
              d="M126 74 Q134 88 137 104"
              stroke="#0A2850"
              strokeWidth="11"
              strokeLinecap="round"
            />
            <circle cx="137" cy="104" r="5.5" fill="#DBA888" />
            <circle
              cx="142"
              cy="106"
              r="3.5"
              fill="#e8c840"
              stroke="#c4a030"
              strokeWidth="0.8"
            />
            <rect x="141" y="109" width="3" height="7" rx="1" fill="#e8c840" />
            <path
              d="M141 112 L139 112 M141 114 L139 114"
              stroke="#c4a030"
              strokeWidth="1.2"
              strokeLinecap="round"
            />
          </motion.g>

          <circle cx="100" cy="42" r="19" fill="#DBA888" />

          <circle cx="81" cy="42" r="4.5" fill="#DBA888" />
          <circle cx="119" cy="42" r="4.5" fill="#DBA888" />

          <path
            d="M83 34 Q83 22 95 20 Q100 18 105 20 Q117 22 117 34 Q117 30 100 28 Q83 30 83 34"
            fill="#2a1a0a"
          />

          <path
            d="M79 36 Q79 20 100 18 Q121 20 121 36 L121 34 Q121 26 100 24 Q79 26 79 34 Z"
            fill="#0A2850"
          />
          <path
            d="M79 34 Q69 34 66 38 Q64 41 69 40 Q79 38 81 36 Z"
            fill="#0A2850"
          />
          <rect x="79" y="31" width="42" height="3" rx="1.5" fill="#549930" />

          <circle cx="91" cy="40" r="2.5" fill="#1a1a2e" />
          <circle cx="109" cy="40" r="2.5" fill="#1a1a2e" />

          <path
            d="M87 35 Q91 33 95 35"
            stroke="#1a1a2e"
            strokeWidth="1.5"
            fill="none"
            strokeLinecap="round"
          />
          <path
            d="M105 35 Q109 33 113 35"
            stroke="#1a1a2e"
            strokeWidth="1.5"
            fill="none"
            strokeLinecap="round"
          />

          <path
            d="M93 47 Q100 51 107 47"
            stroke="#1a1a2e"
            strokeWidth="1.5"
            fill="none"
            strokeLinecap="round"
          />

          <motion.g
            style={{ originX: 82, originY: 83 }}
            animate={{ scale: [1, 1.15, 1] }}
            transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          >
            <circle cx="82" cy="83" r="6" fill="#549930" />
            <path
              d="M79 83 L82 86 L86 80"
              stroke="white"
              strokeWidth="1.5"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </motion.g>
        </motion.g>
      </svg>
    </div>
  );
}
