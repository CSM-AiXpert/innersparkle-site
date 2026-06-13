'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Sparkles } from 'lucide-react';

const navLinks = [
  { label: 'System Overview', href: '#hero' },
  { label: 'Voice AI', href: '#voice-ai' },
  { label: 'CoastaFlow', href: '#coastaflow' },
  { label: 'CoastaClaw', href: '#coastaclaw' },
  { label: 'Pricing', href: '#pricing' },
  { label: 'Sandbox', href: '#sandbox' },
  { label: 'Consultation', href: '#consultation' }
];

const socialLinks = [
  { href: 'https://facebook.com', label: 'Facebook', path: 'M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z' },
  { href: 'https://instagram.com', label: 'Instagram', path: 'M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z M17.5 6.5h.01 M7.5 2h9a5.5 5.5 0 0 1 5.5 5.5v9a5.5 5.5 0 0 1-5.5 5.5h-9A5.5 5.5 0 0 1 2 16.5v-9A5.5 5.5 0 0 1 7.5 2z' },
  { href: 'https://youtube.com', label: 'YouTube', path: 'M2.5 17a24.12 24.12 0 0 0 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 0 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17 M10 15l5-3-5-3z' },
  { href: 'https://x.com', label: 'X', path: 'M4 4l11.733 16h4.267l-11.733-16z M4 20l6.768-6.768m2.46-2.46L20 4 M20 20l-6.768-6.768m-2.46-2.46L4 4' },
  { href: 'https://linkedin.com', label: 'LinkedIn', path: 'M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z M2 9h4v12H2z M4 6a2 2 0 1 1-2-2 2 2 0 0 1 2 2z' }
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    if (href === '#hero') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      if (window.location.hash) {
        history.replaceState(null, '', window.location.pathname + window.location.search);
      }
    } else {
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
    setIsOpen(false);
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? 'liquid-glass mx-4 mt-3' : 'bg-transparent'
      }`}
      style={scrolled ? { borderRadius: '24px' } : {}}
    >
      <div className="max-w-7xl mx-auto px-4 md:px-6 py-2 flex items-center justify-between">
        <a href="#hero" onClick={(e) => handleNavClick(e, '#hero')} className="flex items-center gap-2 shrink-0">
          <Sparkles size={18} className="text-[#e0a996]" />
          <span className="font-serif text-base font-bold text-[#f5d6cb]">The Inner Sparkle</span>
        </a>

        <div className="hidden lg:flex items-center gap-5">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href)}
              className="inline-flex min-h-11 items-center text-xs text-[#b87d6c] hover:text-[#f5d6cb] transition-colors"
            >
              {link.label}
            </a>
          ))}
        </div>

        <div className="hidden lg:flex items-center gap-1">
          {socialLinks.map((social) => (
            <a
              key={social.label}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={social.label}
              className="inline-flex min-h-11 min-w-11 items-center justify-center text-[#b87d6c] hover:text-[#e0a996] transition-colors"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d={social.path} />
              </svg>
            </a>
          ))}
        </div>

        <button
          onClick={() => setIsOpen(!isOpen)}
          aria-label={isOpen ? 'Close navigation menu' : 'Open navigation menu'}
          aria-expanded={isOpen}
          className="lg:hidden min-h-11 min-w-11 inline-flex items-center justify-center text-[#f5d6cb]"
        >
          {isOpen ? <X size={18} /> : <Menu size={18} />}
        </button>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden overflow-hidden"
          >
            <div className="px-4 pb-3 space-y-2">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className="flex min-h-11 items-center text-sm text-[#b87d6c] hover:text-[#f5d6cb] transition-colors"
                >
                  {link.label}
                </a>
              ))}
              <div className="flex items-center gap-4 pt-2 border-t border-[rgba(245,214,203,0.1)]">
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    className="inline-flex min-h-11 min-w-11 items-center justify-center text-[#b87d6c] hover:text-[#e0a996] transition-colors"
                  >
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d={social.path} />
                    </svg>
                  </a>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
