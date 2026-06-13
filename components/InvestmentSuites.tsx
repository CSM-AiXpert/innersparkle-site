'use client';

import { motion } from 'framer-motion';
import { Check, Star, Zap, Crown } from 'lucide-react';

const plans = [
  {
    name: 'CoastaFlow GROW',
    subtitle: 'Foundation',
    price: 197,
    credits: 10,
    icon: Zap,
    popular: false,
    features: [
      'Full CRM Access',
      'Calendar Integrations',
      'Automated Appointment Scheduling',
      'Unified 2-Way Client Communication Dashboard',
      'Email Support'
    ]
  },
  {
    name: 'CoastaFlow PRO',
    subtitle: 'Growth Engine',
    price: 297,
    credits: 25,
    icon: Star,
    popular: true,
    features: [
      'Everything in Grow',
      'Multi-Step Campaign Builders',
      'Automated Missed-Call Text Back',
      'Social Media Content Planner',
      'Pipeline Management',
      'Priority Chat Support'
    ]
  },
  {
    name: 'CoastaFlow ELITE',
    subtitle: 'Autonomous Suite',
    price: 497,
    credits: 50,
    icon: Crown,
    popular: false,
    features: [
      'Everything in Pro',
      'Fully Automated AI Voice Receptionist',
      'Dedicated Dashboard Tracking',
      '24/7 Priority Developer Builder Support',
      'Custom Workflow Architecture',
      'White-Glove Onboarding'
    ]
  }
];

export default function InvestmentSuites() {
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
          Investment Suites
        </h2>
        <p className="text-lg text-[#b87d6c] max-w-2xl mx-auto">
          Choose the power tier that matches your ambition. Every plan includes our core promise: zero missed opportunities.
        </p>
      </motion.div>

      <div className="grid md:grid-cols-3 gap-8 items-stretch">
        {plans.map((plan, index) => {
          const Icon = plan.icon;
          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.6,
                ease: [0.16, 1, 0.3, 1],
                delay: index * 0.15
              }}
              whileHover={{ y: -12, transition: { duration: 0.3 } }}
              className={`liquid-glass p-8 flex flex-col relative ${
                plan.popular ? 'border-[rgba(0,242,254,0.4)] md:scale-105' : ''
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-[rgba(0,242,254,0.25)] text-[#00f2fe] text-xs font-semibold border border-[rgba(0,242,254,0.4)]">
                  MOST POPULAR
                </div>
              )}

              <div className="text-center mb-6">
                <div className={`w-14 h-14 mx-auto mb-4 rounded-xl flex items-center justify-center ${
                  plan.popular
                    ? 'bg-[rgba(0,242,254,0.2)]'
                    : 'bg-[rgba(245,214,203,0.1)]'
                }`}>
                  <Icon size={24} className={plan.popular ? 'text-[#00f2fe]' : 'text-[#e0a996]'} />
                </div>
                <h3 className="font-serif text-xl font-bold text-[#f5d6cb]">{plan.name}</h3>
                <p className="text-xs text-[#b87d6c] mt-1">{plan.subtitle}</p>
              </div>

              <div className="text-center mb-6">
                <span className="text-4xl font-bold rose-shimmer">${plan.price}</span>
                <span className="text-[#b87d6c] text-sm">/mo</span>
              </div>

              <div className="mb-4 text-center">
                <span className="text-xs px-3 py-1 rounded-full bg-[rgba(245,214,203,0.1)] text-[#e0a996]">
                  ${plan.credits} Monthly Credits Included
                </span>
              </div>

              <ul className="space-y-3 flex-1 mb-8">
                {plan.features.map((feature, fIndex) => (
                  <li key={fIndex} className="flex items-start gap-3 text-sm">
                    <Check size={14} className="text-[#4ade80] mt-1 shrink-0" />
                    <span className="text-[#f5d6cb]">{feature}</span>
                  </li>
                ))}
              </ul>

              <a href="#consultation" className={`block w-full py-3 rounded-xl text-center font-semibold transition-all duration-300 ${
                plan.popular
                  ? 'bg-[rgba(0,242,254,0.2)] text-[#00f2fe] border border-[rgba(0,242,254,0.4)] hover:bg-[rgba(0,242,254,0.3)]'
                  : 'bg-[rgba(245,214,203,0.1)] text-[#f5d6cb] border border-[rgba(245,214,203,0.2)] hover:bg-[rgba(245,214,203,0.2)]'
              }`}>
                Get Started
              </a>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
