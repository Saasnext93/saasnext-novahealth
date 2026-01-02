
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Phone, Calendar } from 'lucide-react';
import { AnimatedLogo } from './AnimatedLogo';

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Specialties', href: '#' },
    { name: 'Services', href: '#' },
    { name: 'Doctors', href: '#' },
    { name: 'Testimonials', href: '#' },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${isScrolled ? 'py-4' : 'py-6'}`}>
      <div className={`container mx-auto px-6`}>
        <div className={`glass-effect rounded-2xl border border-white/40 shadow-xl px-6 py-3 flex items-center justify-between transition-all ${isScrolled ? 'mx-0 shadow-lg' : 'mx-0 shadow-none bg-transparent border-transparent backdrop-blur-0'}`}>
          <div className="flex items-center gap-3 cursor-pointer">
            <AnimatedLogo size={32} />
            <span className="text-xl font-bold tracking-tight text-slate-900">Nova<span className="text-blue-600">Health</span></span>
          </div>

          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href}
                className="text-slate-600 hover:text-blue-600 font-medium text-sm transition-colors"
              >
                {link.name}
              </a>
            ))}
          </div>

          <div className="hidden lg:flex items-center gap-4">
            <a href="tel:+123456789" className="flex items-center gap-2 text-slate-700 hover:text-blue-600 transition-colors mr-4">
              <Phone size={18} />
              <span className="text-sm font-semibold">1-800-NOVA</span>
            </a>
            <button className="px-6 py-2.5 bg-blue-600 text-white rounded-xl text-sm font-bold hover:bg-blue-700 transition-all flex items-center gap-2">
              <Calendar size={16} />
              Book Now
            </button>
          </div>

          <button 
            className="lg:hidden p-2 text-slate-900"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 right-0 bg-white shadow-2xl p-6 lg:hidden border-t border-slate-100"
          >
            <div className="flex flex-col gap-6">
              {navLinks.map((link) => (
                <a key={link.name} href={link.href} className="text-lg font-semibold text-slate-800">{link.name}</a>
              ))}
              <hr className="border-slate-100" />
              <button className="w-full py-4 bg-blue-600 text-white rounded-xl font-bold">Book Appointment</button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};
