'use client';

import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Send, Bot, User, Sparkles, Loader2 } from 'lucide-react';

interface Message {
  id: string;
  role: 'user' | 'assistant';
  content: string;
}

const demoResponses: Record<string, string> = {
  'price': 'Our Investment Suites start at $197/mo for the GROW plan. The PRO plan at $297/mo is our most popular choice, and the ELITE suite at $497/mo includes the full AI Voice Receptionist.',
  'pricing': 'Our Investment Suites start at $197/mo for the GROW plan. The PRO plan at $297/mo is our most popular choice, and the ELITE suite at $497/mo includes the full AI Voice Receptionist.',
  'cost': 'Our Investment Suites start at $197/mo for the GROW plan. The PRO plan at $297/mo is our most popular choice, and the ELITE suite at $497/mo includes the full AI Voice Receptionist.',
  'voice': 'Our Voice AI Receptionist answers calls 24/7 with human-like warmth. It handles scheduling, lead qualification, and instant callbacks. Included in the ELITE plan, or available as an add-on.',
  'crm': 'CoastaFlow CRM is the operational backbone: unified database, multi-step campaigns, omnichannel outreach, pipeline intelligence, and smart segmentation. It powers everything behind the scenes.',
  'schedule': 'I can help you schedule a consultation. Would you like to book a strategy call with our team? We typically have availability within 24-48 hours.',
  'booking': 'I can help you schedule a consultation. Would you like to book a strategy call with our team? We typically have availability within 24-48 hours.',
  'demo': 'You are currently experiencing our Interactive Sandbox! This is a preview of how our AI systems handle client inquiries. For a full demo, schedule a consultation with our team.',
  'hello': 'Welcome to The Inner Sparkle! I am your AI concierge. Ask me about our Voice AI, CoastaFlow CRM, CoastaClaw Digital Employees, pricing, or schedule a consultation.',
  'hi': 'Welcome to The Inner Sparkle! I am your AI concierge. Ask me about our Voice AI, CoastaFlow CRM, CoastaClaw Digital Employees, pricing, or schedule a consultation.',
};

function getResponse(input: string): string {
  const lower = input.toLowerCase();
  for (const [key, response] of Object.entries(demoResponses)) {
    if (lower.includes(key)) return response;
  }
  return 'That is a great question. Our team would love to discuss this in detail during a personalized consultation. Would you like me to connect you with a specialist?';
}

export default function InteractiveSandbox() {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 'welcome',
      role: 'assistant',
      content: 'Welcome to The Inner Sparkle Interactive Sandbox. I am your AI concierge. Ask me about Voice AI, CRM, pricing, or book a consultation.'
    }
  ]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesContainerRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    const container = messagesContainerRef.current;
    if (!container) return;
    container.scrollTo({ top: container.scrollHeight, behavior: 'smooth' });
  };

  useEffect(() => {
    if (messages.length > 1 || isTyping) {
      scrollToBottom();
    }
  }, [messages, isTyping]);

  const handleSend = async () => {
    if (!input.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      role: 'user',
      content: input.trim()
    };

    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setIsTyping(true);

    setTimeout(() => {
      const response = getResponse(userMessage.content);
      const assistantMessage: Message = {
        id: (Date.now() + 1).toString(),
        role: 'assistant',
        content: response
      };
      setMessages(prev => [...prev, assistantMessage]);
      setIsTyping(false);
    }, 1500);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <div className="py-24 px-4 md:px-8 max-w-4xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="text-center mb-16"
      >
        <h2 className="font-serif text-4xl md:text-5xl font-bold mb-4 rose-shimmer">
          Interactive Sandbox
        </h2>
        <p className="text-lg text-[#b87d6c] max-w-2xl mx-auto">
          Experience the AI firsthand. Ask questions, explore features, and discover how The Inner Sparkle transforms your business.
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="liquid-glass overflow-hidden"
      >
        <div className="p-4 border-b border-[rgba(245,214,203,0.16)] flex items-center gap-3">
          <div className="w-8 h-8 rounded-full bg-[rgba(0,242,254,0.2)] flex items-center justify-center">
            <Sparkles size={16} className="text-[#00f2fe]" />
          </div>
          <div>
            <p className="text-sm font-semibold text-[#f5d6cb]">AI Concierge</p>
            <p className="text-xs text-[#b87d6c]">Always online</p>
          </div>
        </div>

        <div ref={messagesContainerRef} className="h-[400px] overflow-y-auto p-4 space-y-4">
          <AnimatePresence>
            {messages.map((message) => (
              <motion.div
                key={message.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className={`flex gap-3 ${message.role === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                {message.role === 'assistant' && (
                  <div className="w-8 h-8 rounded-full bg-[rgba(0,242,254,0.15)] flex items-center justify-center shrink-0">
                    <Bot size={14} className="text-[#00f2fe]" />
                  </div>
                )}
                <div className={`max-w-[75%] p-3 rounded-2xl text-sm ${
                  message.role === 'user'
                    ? 'bg-[rgba(224,169,150,0.2)] text-[#f5d6cb] rounded-br-md'
                    : 'bg-[rgba(25,18,18,0.6)] text-[#f5d6cb] rounded-bl-md border border-[rgba(245,214,203,0.1)]'
                }`}>
                  {message.content}
                </div>
                {message.role === 'user' && (
                  <div className="w-8 h-8 rounded-full bg-[rgba(224,169,150,0.2)] flex items-center justify-center shrink-0">
                    <User size={14} className="text-[#e0a996]" />
                  </div>
                )}
              </motion.div>
            ))}
          </AnimatePresence>

          {isTyping && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="flex gap-3"
            >
              <div className="w-8 h-8 rounded-full bg-[rgba(0,242,254,0.15)] flex items-center justify-center shrink-0">
                <Bot size={14} className="text-[#00f2fe]" />
              </div>
              <div className="bg-[rgba(25,18,18,0.6)] p-3 rounded-2xl rounded-bl-md border border-[rgba(245,214,203,0.1)]">
                <Loader2 size={16} className="text-[#b87d6c] animate-spin" />
              </div>
            </motion.div>
          )}
        </div>

        <div className="p-4 border-t border-[rgba(245,214,203,0.16)]">
          <div className="flex gap-3">
            <input
              aria-label="Message the AI concierge"
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKeyPress}
              placeholder="Ask about Voice AI, CRM, pricing, or book a consultation..."
              className="flex-1 bg-[rgba(25,18,18,0.6)] border border-[rgba(245,214,203,0.2)] rounded-xl px-4 py-3 text-sm text-[#f5d6cb] placeholder-[#b87d6c] focus:outline-none focus:border-[rgba(0,242,254,0.4)] transition-colors"
            />
            <button
              aria-label="Send message"
              onClick={handleSend}
              disabled={!input.trim() || isTyping}
              className="px-4 py-3 rounded-xl bg-[rgba(0,242,254,0.2)] text-[#00f2fe] border border-[rgba(0,242,254,0.4)] hover:bg-[rgba(0,242,254,0.3)] transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <Send size={16} />
            </button>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
