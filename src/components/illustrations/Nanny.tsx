import { motion } from 'motion/react';

export default function Nanny({ className }: { className?: string }) {
  return (
    <div className={className}>
      <svg
        viewBox="0 0 200 200"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        role="img"
        aria-label="Nanny holding toddler's hand"
      >
        <radialGradient id="glow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#FFF5E6" />
          <stop offset="100%" stopColor="#FFF8F0" stopOpacity="0" />
        </radialGradient>
        <circle cx="100" cy="95" r="85" fill="url(#glow)" />
        <motion.g
          animate={{ rotate: [-0.8, 0.8, -0.8] }}
          transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
          style={{ transformOrigin: '65px 45px' }}
        >
          <ellipse cx="65" cy="43" rx="17" ry="18" fill="#3D2B1F" />
          <circle cx="48" cy="42" r="6" fill="#3D2B1F" />
          <ellipse cx="65" cy="45" rx="14" ry="15" fill="#D4A574" />
          <path
            d="M58 43 Q60 41 62 43"
            stroke="#5C3D2E"
            strokeWidth="1.5"
            strokeLinecap="round"
            fill="none"
          />
          <path
            d="M68 43 Q70 41 72 43"
            stroke="#5C3D2E"
            strokeWidth="1.5"
            strokeLinecap="round"
            fill="none"
          />
          <circle cx="57" cy="48" r="3" fill="#E8A0A0" opacity="0.4" />
          <circle cx="73" cy="48" r="3" fill="#E8A0A0" opacity="0.4" />
          <path
            d="M62 52 Q65 55 68 52"
            stroke="#5C3D2E"
            strokeWidth="1.2"
            strokeLinecap="round"
            fill="none"
          />
          <path
            d="M65 45 L65 49"
            stroke="#C4946A"
            strokeWidth="1"
            strokeLinecap="round"
          />
          <circle cx="65" cy="38" r="1.2" fill="#C4946A" />
          <path
            d="M47 60 Q38 70 40 90 Q44 98 50 95 Q48 75 53 65Z"
            fill="#F5E6D3"
            stroke="#EDD9C8"
            strokeWidth="0.5"
          />
          <path
            d="M83 60 Q90 72 88 92 Q86 100 80 97 Q84 78 79 66Z"
            fill="#F5E6D3"
            stroke="#EDD9C8"
            strokeWidth="0.5"
          />
          <path
            d="M49 65 Q46 110 44 140 Q55 148 65 148 Q75 148 86 140 Q84 110 81 65 Q75 69 65 69 Q55 69 49 65Z"
            fill="#0A2850"
          />
          <path d="M60 66 Q65 74 70 66" fill="#F5E6D3" />
          <path
            d="M50 68 Q44 85 46 100"
            stroke="#D4A574"
            strokeWidth="7"
            strokeLinecap="round"
            fill="none"
          />
          <path
            d="M80 68 Q95 74 108 78"
            stroke="#D4A574"
            strokeWidth="8"
            strokeLinecap="round"
            fill="none"
          />
        </motion.g>
        <motion.g
          animate={{ rotate: [0.8, -0.8, 0.8] }}
          transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
          style={{ transformOrigin: '135px 48px' }}
        >
          <path d="M124 44 Q130 35 135 34 Q140 35 146 44" fill="#5C3D2E" />
          <ellipse cx="135" cy="50" rx="11" ry="12" fill="#E8C191" />
          <circle cx="130" cy="48" r="1.5" fill="#3D2B1F" />
          <circle cx="140" cy="48" r="1.5" fill="#3D2B1F" />
          <circle cx="128" cy="53" r="2.5" fill="#E8A0A0" opacity="0.4" />
          <circle cx="142" cy="53" r="2.5" fill="#E8A0A0" opacity="0.4" />
          <path
            d="M132 55 Q135 57 138 55"
            stroke="#5C3D2E"
            strokeWidth="1"
            strokeLinecap="round"
            fill="none"
          />
          <path
            d="M125 63 Q122 88 124 103 Q127 106 135 106 Q143 106 146 103 Q148 88 145 63Z"
            fill="#90BE6D"
          />
          <path
            d="M126 66 Q118 74 108 78"
            stroke="#E8C191"
            strokeWidth="6"
            strokeLinecap="round"
            fill="none"
          />
          <path
            d="M144 66 Q150 76 148 86"
            stroke="#E8C191"
            strokeWidth="5"
            strokeLinecap="round"
            fill="none"
          />
          <path
            d="M128 104 Q124 118 126 126"
            stroke="#90BE6D"
            strokeWidth="5"
            strokeLinecap="round"
            fill="none"
          />
          <path
            d="M142 104 Q146 118 144 126"
            stroke="#90BE6D"
            strokeWidth="5"
            strokeLinecap="round"
            fill="none"
          />
          <ellipse cx="125" cy="127" rx="4" ry="2.5" fill="#0A2850" />
          <ellipse cx="145" cy="127" rx="4" ry="2.5" fill="#0A2850" />
        </motion.g>
        <motion.g
          animate={{ scale: [1, 1.06, 1] }}
          transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
          style={{ transformOrigin: '108px 78px' }}
        >
          <circle cx="108" cy="78" r="4.5" fill="#D4A574" />
        </motion.g>
        <motion.g
          animate={{ y: [0, -12, 0], opacity: [0.7, 0.1, 0.7] }}
          transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
        >
          <g transform="translate(84, 42) scale(0.4)">
            <path
              d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"
              fill="#E86B6B"
            />
          </g>
        </motion.g>
        <motion.g
          animate={{ y: [0, -15, 0], opacity: [0.5, 0, 0.5] }}
          transition={{
            duration: 3.5,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: 0.8,
          }}
        >
          <g transform="translate(102, 36) scale(0.35)">
            <path
              d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"
              fill="#FF8FA3"
            />
          </g>
        </motion.g>
        <motion.g
          animate={{ y: [0, -10, 0], opacity: [0.8, 0.2, 0.8] }}
          transition={{
            duration: 2.8,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: 1.6,
          }}
        >
          <g transform="translate(93, 38) scale(0.3)">
            <path
              d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"
              fill="#E86B6B"
            />
          </g>
        </motion.g>
      </svg>
    </div>
  );
}
