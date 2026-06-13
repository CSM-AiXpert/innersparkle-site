'use client';

import { motion } from 'framer-motion';
import { Bot, Brain, Workflow, Zap, Target, Shield, MessageSquare, Calendar } from 'lucide-react';

const capabilities = [
  {
    icon: Bot,
    title: 'AI Digital Employee',
    description: 'CoastaClaw is your tireless digital workforce. An AI employee that handles tasks, makes decisions, and executes workflows without human intervention.'
  },
  {
    icon: Brain,
    title: 'Autonomous Decision Making',
    description: 'Trained on your business logic, CoastaClaw evaluates situations and takes appropriate action based on rules, context, and learned patterns.'
  },
  {
    icon: Workflow,
    title: 'Process Automation',
    description: 'From lead follow-up to client onboarding, CoastaClaw executes multi-step business processes with precision and consistency.'
  },
  {
    icon: Zap,
    title: 'Real-Time Task Execution',
    description: 'Instantly responds to triggers, events, and conditions. Assigns tasks, updates records, and moves work forward 24/7.'
  },
  {
    icon: Target,
    title: 'Goal-Oriented Operations',
    description: 'Aligned with your KPIs and objectives. CoastaClaw prioritizes activities that drive revenue, retention, and growth.'
  },
  {
    icon: Shield,
    title: 'Compliance & Audit Trail',
    description: 'Every action logged and traceable. Built-in safeguards ensure all automated decisions meet regulatory and company standards.'
  },
  {
    icon: MessageSquare,
    title: 'Intelligent Communication',
    description: 'Drafts, sends, and responds to emails, texts, and internal messages with context-aware, professional communication.'
  },
  {
    icon: Calendar,
    title: 'Schedule Management',
    description: 'Books appointments, manages calendars, sends reminders, and reschedules based on availability and priority.'
  }
];

export default function CoastaClawCRM() {
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
          CoastaClaw Digital Employee
        </h2>
        <p className="text-lg text-[#b87d6c] max-w-2xl mx-auto">
          Your AI employee that never sleeps, never forgets, and never stops optimizing. CoastaClaw is the digital workforce revolution.
        </p>
      </motion.div>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {capabilities.map((cap, index) => {
          const Icon = cap.icon;
          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ 
                duration: 0.6, 
                ease: [0.16, 1, 0.3, 1],
                delay: index * 0.1 
              }}
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
              className="liquid-glass p-6 group"
            >
              <div className="w-12 h-12 rounded-xl bg-[rgba(255,159,67,0.15)] flex items-center justify-center mb-4 group-hover:bg-[rgba(255,159,67,0.25)] transition-colors">
                <Icon size={22} className="text-[#ff9f43]" />
              </div>
              <h4 className="font-semibold text-[#f5d6cb] mb-2">{cap.title}</h4>
              <p className="text-sm text-[#b87d6c] leading-relaxed">{cap.description}</p>
            </motion.div>
          );
        })}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="mt-16 liquid-glass p-8 text-center"
      >
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <p className="text-4xl font-bold rose-shimmer mb-2">10x</p>
            <p className="text-sm text-[#b87d6c]">Faster Task Completion</p>
          </div>
          <div>
            <p className="text-4xl font-bold rose-shimmer mb-2">47%</p>
            <p className="text-sm text-[#b87d6c]">Higher Conversion Rate</p>
          </div>
          <div>
            <p className="text-4xl font-bold rose-shimmer mb-2">24/7</p>
            <p className="text-sm text-[#b87d6c]">Autonomous Operations</p>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
