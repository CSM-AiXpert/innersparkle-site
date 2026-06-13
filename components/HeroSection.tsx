'use client';

import { motion } from 'framer-motion';
import { ArrowDown, Play } from 'lucide-react';
import SparkleEmitters from './SparkleEmitters';
import RevenueLeakCalculator from './RevenueLeakCalculator';

export default function HeroSection() {
  const scrollToCalculator = () => {
    const element = document.querySelector('#calculator');
    if (element) element.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" className="relative flex flex-col">
      <div className="relative w-full min-h-[680px] sm:min-h-[620px] lg:min-h-0 lg:aspect-video lg:max-h-[85vh] z-0 overflow-hidden">
        <video
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          poster="/hero-poster.jpg"
          aria-hidden="true"
          className="w-full h-full object-cover opacity-70"
        >
          <source src="/hero.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-[#060404]/40" />
        <SparkleEmitters />

        <div className="absolute inset-0 flex items-center justify-center px-4 md:px-8">
          <div className="max-w-3xl text-center pt-16">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className="mb-6">
                <span className="inline-block px-4 py-2 rounded-full bg-[rgba(0,242,254,0.2)] text-[#00f2fe] text-xs font-semibold border border-[rgba(0,242,254,0.4)] backdrop-blur-sm">
                  Premium AI Business Systems
                </span>
              </div>
              <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl font-bold mb-5 md:mb-6 leading-tight drop-shadow-lg">
                <span className="text-[#f5d6cb]">Unanswered Calls Are</span>
                <br />
                <span className="rose-shimmer">Lost Revenue</span>
              </h1>
              <p className="text-base sm:text-lg md:text-xl text-[#f5d6cb] mb-7 md:mb-8 max-w-lg mx-auto leading-relaxed drop-shadow-md font-medium">
                The Inner Sparkle transforms your business with CoastaFlow Voice AI and CoastaClaw Digital Employees. Never miss another opportunity. Never lose another lead.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <button
                  onClick={scrollToCalculator}
                  className="w-full sm:w-auto justify-center px-6 sm:px-8 py-4 rounded-xl bg-[rgba(0,242,254,0.3)] text-[#00f2fe] border border-[rgba(0,242,254,0.5)] font-semibold hover:bg-[rgba(0,242,254,0.4)] transition-all duration-300 flex items-center gap-2 backdrop-blur-sm shadow-lg"
                >
                  <Play size={16} />
                  Calculate Your Leak
                </button>
                <a
                  href="#consultation"
                  onClick={(e) => {
                    e.preventDefault();
                    document.querySelector('#consultation')?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="w-full sm:w-auto justify-center px-6 sm:px-8 py-4 rounded-xl bg-[rgba(245,214,203,0.15)] text-[#f5d6cb] border border-[rgba(245,214,203,0.3)] font-semibold hover:bg-[rgba(245,214,203,0.25)] transition-all duration-300 flex items-center gap-2 backdrop-blur-sm shadow-lg"
                >
                  Book Consultation
                  <ArrowDown size={16} />
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      <div id="calculator" className="relative z-10 px-4 md:px-8 py-16 md:py-24 bg-[#060404]">
        <RevenueLeakCalculator />
      </div>
    </section>
  );
}
