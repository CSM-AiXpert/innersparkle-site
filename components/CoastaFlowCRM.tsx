'use client';

import { motion } from 'framer-motion';
import { Database, Workflow, Mail, BarChart3, Users, Target, GitBranch, Shield } from 'lucide-react';

const capabilities = [
  {
    icon: Database,
    title: 'Unified Database Automation',
    description: 'Centralize every contact, conversation, and conversion in a living CRM that updates itself in real time.'
  },
  {
    icon: Workflow,
    title: 'Multi-Step Campaign Builder',
    description: 'Design sophisticated nurture sequences with branching logic, conditional triggers, and dynamic personalization.'
  },
  {
    icon: Mail,
    title: 'Omnichannel Outreach',
    description: 'Orchestrate SMS, email, voicemail drops, and voice calls from one unified campaign canvas.'
  },
  {
    icon: BarChart3,
    title: 'Pipeline Intelligence',
    description: 'Visualize deal flow, forecast revenue, and identify bottlenecks with AI-powered analytics dashboards.'
  },
  {
    icon: Users,
    title: 'Smart Segmentation',
    description: 'Auto-tag and segment contacts by behavior, source, and engagement score for hyper-targeted messaging.'
  },
  {
    icon: Target,
    title: 'Conversion Tracking',
    description: 'Attribute every dollar to its source with granular tracking across campaigns, channels, and touchpoints.'
  },
  {
    icon: GitBranch,
    title: 'Workflow Automation',
    description: 'Trigger actions, assign tasks, and move deals through your pipeline based on any event or condition.'
  },
  {
    icon: Shield,
    title: 'Compliance & Security',
    description: 'Built-in opt-in management, unsubscribe handling, and audit trails keep you compliant and protected.'
  }
];

export default function CoastaFlowCRM() {
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
          CoastaFlow CRM Platform
        </h2>
        <p className="text-lg text-[#b87d6c] max-w-2xl mx-auto">
          The operational backbone of your business. Automated, intelligent, and relentlessly effective.
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
              <div className="w-12 h-12 rounded-xl bg-[rgba(0,242,254,0.15)] flex items-center justify-center mb-4 group-hover:bg-[rgba(0,242,254,0.25)] transition-colors">
                <Icon size={22} className="text-[#00f2fe]" />
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
            <p className="text-sm text-[#b87d6c]">Faster Lead Response</p>
          </div>
          <div>
            <p className="text-4xl font-bold rose-shimmer mb-2">47%</p>
            <p className="text-sm text-[#b87d6c]">Higher Conversion Rate</p>
          </div>
          <div>
            <p className="text-4xl font-bold rose-shimmer mb-2">24/7</p>
            <p className="text-sm text-[#b87d6c]">Automated Operations</p>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
