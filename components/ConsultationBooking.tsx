'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Calendar, Clock, User, Mail, Phone, MessageSquare, Send, CheckCircle } from 'lucide-react';

export default function ConsultationBooking() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    preferredDate: '',
    preferredTime: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const timeSlots = [
    '9:00 AM', '10:00 AM', '11:00 AM', '1:00 PM', '2:00 PM', '3:00 PM', '4:00 PM'
  ];

  if (submitted) {
    return (
      <div className="py-24 px-4 md:px-8 max-w-2xl mx-auto">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="liquid-glass p-12 text-center"
        >
          <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-[rgba(74,222,128,0.2)] flex items-center justify-center">
            <CheckCircle size={32} className="text-[#4ade80]" />
          </div>
          <h3 className="font-serif text-2xl font-bold mb-4 text-[#f5d6cb]">Consultation Requested</h3>
          <p className="text-[#b87d6c] mb-6">
            Thank you, {formData.name}. Our team will confirm your appointment within 24 hours.
          </p>
          <div className="text-sm text-[#b87d6c] space-y-2">
            <p><strong className="text-[#f5d6cb]">Date:</strong> {formData.preferredDate}</p>
            <p><strong className="text-[#f5d6cb]">Time:</strong> {formData.preferredTime}</p>
          </div>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="py-24 px-4 md:px-8 max-w-3xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="text-center mb-16"
      >
        <h2 className="font-serif text-4xl md:text-5xl font-bold mb-4 rose-shimmer">
          Book Your Consultation
        </h2>
        <p className="text-lg text-[#b87d6c] max-w-2xl mx-auto">
          Schedule a personalized strategy session with our team. We will analyze your current systems and design a blueprint for growth.
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="liquid-glass p-5 sm:p-8"
      >
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium mb-2 text-[#f5d6cb]">
                <User size={14} className="inline mr-2" />
                Full Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                value={formData.name}
                onChange={handleChange}
                className="w-full bg-[rgba(25,18,18,0.6)] border border-[rgba(245,214,203,0.2)] rounded-xl px-4 py-3 text-sm text-[#f5d6cb] placeholder-[#b87d6c] focus:outline-none focus:border-[rgba(0,242,254,0.4)] transition-colors"
                placeholder="Your name"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium mb-2 text-[#f5d6cb]">
                <Mail size={14} className="inline mr-2" />
                Email Address
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                value={formData.email}
                onChange={handleChange}
                className="w-full bg-[rgba(25,18,18,0.6)] border border-[rgba(245,214,203,0.2)] rounded-xl px-4 py-3 text-sm text-[#f5d6cb] placeholder-[#b87d6c] focus:outline-none focus:border-[rgba(0,242,254,0.4)] transition-colors"
                placeholder="you@company.com"
              />
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="phone" className="block text-sm font-medium mb-2 text-[#f5d6cb]">
                <Phone size={14} className="inline mr-2" />
                Phone Number
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="w-full bg-[rgba(25,18,18,0.6)] border border-[rgba(245,214,203,0.2)] rounded-xl px-4 py-3 text-sm text-[#f5d6cb] placeholder-[#b87d6c] focus:outline-none focus:border-[rgba(0,242,254,0.4)] transition-colors"
                placeholder="(555) 123-4567"
              />
            </div>
            <div>
              <label htmlFor="company" className="block text-sm font-medium mb-2 text-[#f5d6cb]">
                Company Name
              </label>
              <input
                type="text"
                id="company"
                name="company"
                value={formData.company}
                onChange={handleChange}
                className="w-full bg-[rgba(25,18,18,0.6)] border border-[rgba(245,214,203,0.2)] rounded-xl px-4 py-3 text-sm text-[#f5d6cb] placeholder-[#b87d6c] focus:outline-none focus:border-[rgba(0,242,254,0.4)] transition-colors"
                placeholder="Your company"
              />
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="preferredDate" className="block text-sm font-medium mb-2 text-[#f5d6cb]">
                <Calendar size={14} className="inline mr-2" />
                Preferred Date
              </label>
              <input
                type="date"
                id="preferredDate"
                name="preferredDate"
                required
                value={formData.preferredDate}
                onChange={handleChange}
                className="w-full bg-[rgba(25,18,18,0.6)] border border-[rgba(245,214,203,0.2)] rounded-xl px-4 py-3 text-sm text-[#f5d6cb] focus:outline-none focus:border-[rgba(0,242,254,0.4)] transition-colors"
              />
            </div>
            <div>
              <label htmlFor="preferredTime" className="block text-sm font-medium mb-2 text-[#f5d6cb]">
                <Clock size={14} className="inline mr-2" />
                Preferred Time
              </label>
              <select
                id="preferredTime"
                name="preferredTime"
                required
                value={formData.preferredTime}
                onChange={handleChange}
                className="w-full bg-[rgba(25,18,18,0.6)] border border-[rgba(245,214,203,0.2)] rounded-xl px-4 py-3 text-sm text-[#f5d6cb] focus:outline-none focus:border-[rgba(0,242,254,0.4)] transition-colors"
              >
                <option value="" className="bg-[#0d0a0a]">Select a time</option>
                {timeSlots.map(slot => (
                  <option key={slot} value={slot} className="bg-[#0d0a0a]">{slot}</option>
                ))}
              </select>
            </div>
          </div>

          <div>
            <label htmlFor="message" className="block text-sm font-medium mb-2 text-[#f5d6cb]">
              <MessageSquare size={14} className="inline mr-2" />
              Additional Notes
            </label>
            <textarea
              id="message"
              name="message"
              rows={4}
              value={formData.message}
              onChange={handleChange}
              className="w-full bg-[rgba(25,18,18,0.6)] border border-[rgba(245,214,203,0.2)] rounded-xl px-4 py-3 text-sm text-[#f5d6cb] placeholder-[#b87d6c] focus:outline-none focus:border-[rgba(0,242,254,0.4)] transition-colors resize-none"
              placeholder="Tell us about your business and what you are looking to achieve..."
            />
          </div>

          <button
            type="submit"
            className="w-full py-4 rounded-xl bg-[rgba(0,242,254,0.2)] text-[#00f2fe] border border-[rgba(0,242,254,0.4)] font-semibold hover:bg-[rgba(0,242,254,0.3)] transition-all duration-300 flex items-center justify-center gap-2"
          >
            <Send size={16} />
            Request Consultation
          </button>
        </form>
      </motion.div>
    </div>
  );
}
