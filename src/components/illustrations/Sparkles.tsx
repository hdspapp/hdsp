import { motion } from 'motion/react';

const sparkles = [
  { x: 30, y: 30, size: 6, color: '#549930', delay: 0 },
  { x: 170, y: 40, size: 8, color: '#0A2850', delay: 0.6 },
  { x: 100, y: 15, size: 5, color: '#549930', delay: 1.2 },
  { x: 50, y: 140, size: 7, color: '#0A2850', delay: 0.3 },
  { x: 150, y: 130, size: 6, color: '#549930', delay: 1.8 },
  { x: 180, y: 100, size: 4, color: '#0A2850', delay: 0.9 },
  { x: 20, y: 90, size: 5, color: '#549930', delay: 1.5 },
];

const starPath = (cx: number, cy: number, s: number) => {
  const h = s / 2;
  return `M ${cx} ${cy - h} L ${cx + h * 0.3} ${cy - h * 0.3} L ${cx + h} ${cy} L ${cx + h * 0.3} ${cy + h * 0.3} L ${cx} ${cy + h} L ${cx - h * 0.3} ${cy + h * 0.3} L ${cx - h} ${cy} L ${cx - h * 0.3} ${cy - h * 0.3} Z`;
};

export default function Sparkles({ className }: { className?: string }) {
  return (
    <div className={className}>
      <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" fill="none">
        {sparkles.map((s, i) => (
          <motion.path
            key={`sparkle-${i}`}
            d={starPath(s.x, s.y, s.size)}
            fill={s.color}
            initial={{ opacity: 0, scale: 0 }}
            animate={{
              opacity: [0, 0.8, 0.2, 0.9, 0.1],
              scale: [0, 1, 0.6, 1, 0.4],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              delay: s.delay,
              ease: 'easeInOut',
            }}
          />
        ))}
      </svg>
    </div>
  );
}
