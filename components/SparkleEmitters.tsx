'use client';
import { motion } from 'framer-motion';

const stars = Array.from({ length: 15 }, (_, i) => ({
  id: i,
  x: (i * 37 + 11) % 100,
  y: (i * 53 + 7) % 100,
  size: 8 + ((i * 7) % 20),
  duration: 4 + ((i * 11) % 6),
  delay: (i * 0.43) % 3,
}));

export default function SparkleEmitters() {

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
      {stars.map((star) => (
        <motion.div
          key={star.id}
          className="absolute text-[#e0a996] opacity-30"
          style={{
            left: `${star.x}%`,
            top: `${star.y}%`,
            width: `${star.size}px`,
            height: `${star.size}px`
          }}
          animate={{
            y: [0, -30, 0],
            opacity: [0.2, 0.7, 0.2],
            scale: [0.8, 1.2, 0.8],
            rotate: [0, 180, 360]
          }}
          transition={{
            duration: star.duration,
            repeat: Infinity,
            delay: star.delay,
            ease: "easeInOut"
          }}
        >
          <svg viewBox="0 0 24 24" fill="none" className="w-full h-full">
            <path d="M12 0L14.6 9.4L24 12L14.6 14.6L12 24L9.4 14.6L0 12L9.4 9.4L12 0Z" fill="currentColor"/>
          </svg>
        </motion.div>
      ))}
    </div>
  );
}
