'use client';

import { motion } from 'framer-motion';
import dynamic from 'next/dynamic';

const ThreeDiscoBall = dynamic(() => import('./ThreeDiscoBall'), {
  ssr: false,
  loading: () => <div className="h-full w-full rounded-full bg-[radial-gradient(circle,rgba(224,169,150,0.24),transparent_62%)]" />,
});

export default function DiscoBallSection() {
  return (
    <section id="disco-ball" className="py-16 md:py-24 px-4 md:px-8 max-w-7xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="text-center mb-12"
      >
        <h2 className="font-serif text-4xl md:text-5xl font-bold mb-4 rose-shimmer">
          The Inner Sparkle
        </h2>
        <p className="text-lg text-[#b87d6c] max-w-2xl mx-auto">
          Where technology meets elegance. Our systems shine as brightly as your ambition.
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
        className="h-[320px] sm:h-[400px] md:h-[500px] max-w-2xl mx-auto"
      >
        <ThreeDiscoBall />
      </motion.div>
    </section>
  );
}
