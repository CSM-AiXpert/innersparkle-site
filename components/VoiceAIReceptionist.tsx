'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Check, Phone, Calendar, MessageSquare, Zap, Shield, Headphones } from 'lucide-react';

const features = [
  {
    icon: Phone,
    title: '24/7 Live Call Answering',
    description: 'Never miss another opportunity. Our AI voice agent answers every call around the clock with human-like warmth and precision.'
  },
  {
    icon: Calendar,
    title: 'Intelligent Scheduling',
    description: 'Seamlessly book, reschedule, and manage appointments across all your calendars with real-time availability awareness.'
  },
  {
    icon: MessageSquare,
    title: 'Smart Lead Qualification',
    description: 'Automatically qualify prospects, capture critical details, and route hot leads to your team instantly.'
  },
  {
    icon: Zap,
    title: 'Instant Call-Back Triggers',
    description: 'Missed a call? Our system triggers immediate text-back and callback sequences to recover 80% of lost opportunities.'
  },
  {
    icon: Shield,
    title: 'HIPAA-Compliant Conversations',
    description: 'Enterprise-grade security ensures every patient or client interaction meets strict compliance standards.'
  },
  {
    icon: Headphones,
    title: 'Natural Voice Synthesis',
    description: 'Premium neural voices that sound indistinguishable from human receptionists, with customizable tone and personality.'
  }
];

export default function VoiceAIReceptionist() {
  const [activeFeature, setActiveFeature] = useState(0);

  return (
    <div className="py-24 px-4 md:px-8 max-w-7xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="text-center mb-16"
      >
        <h2 className="font-serif text-4xl md:text-5xl font-bold mb-4 rose-shimmer">
          Voice AI Receptionist
        </h2>
        <p className="text-lg text-[#b87d6c] max-w-2xl mx-auto">
          Your front desk, reimagined. A tireless, intelligent voice agent that handles every call with grace and precision.
        </p>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-8 items-center">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="space-y-4"
        >
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.button
                key={index}
                type="button"
                aria-pressed={activeFeature === index}
                className={`liquid-glass w-full p-5 cursor-pointer text-left transition-all duration-300 ${
                  activeFeature === index ? 'border-[rgba(0,242,254,0.4)]' : ''
                }`}
                onClick={() => setActiveFeature(index)}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <div className="flex items-start gap-4">
                  <div className={`p-2 rounded-lg ${
                    activeFeature === index 
                      ? 'bg-[rgba(0,242,254,0.2)] text-[#00f2fe]' 
                      : 'bg-[rgba(245,214,203,0.1)] text-[#b87d6c]'
                  }`}>
                    <Icon size={20} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-[#f5d6cb] mb-1">{feature.title}</h4>
                    <p className="text-sm text-[#b87d6c] leading-relaxed">{feature.description}</p>
                  </div>
                </div>
              </motion.button>
            );
          })}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="liquid-glass p-8 min-h-[400px] flex flex-col justify-center"
        >
          <div className="text-center">
            <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-[rgba(0,242,254,0.15)] flex items-center justify-center">
              {(() => {
                const ActiveIcon = features[activeFeature].icon;
                return <ActiveIcon size={36} className="text-[#00f2fe]" />;
              })()}
            </div>
            <h3 className="font-serif text-2xl font-bold mb-4 text-[#f5d6cb]">
              {features[activeFeature].title}
            </h3>
            <p className="text-[#b87d6c] leading-relaxed mb-6">
              {features[activeFeature].description}
            </p>
            <div className="flex flex-wrap gap-3 justify-center">
              {['Customizable', 'Scalable', 'Enterprise-Ready'].map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 text-xs rounded-full bg-[rgba(0,242,254,0.15)] text-[#00f2fe] border border-[rgba(0,242,254,0.3)]"
                >
                  <Check size={10} className="inline mr-1" />
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
