
import React from 'react';
import { AnimatedLogo } from './AnimatedLogo';
import { Facebook, Twitter, Instagram, Linkedin, Mail, MapPin, Phone } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900 pt-20 pb-10 text-white">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <div className="bg-white rounded-xl p-1">
                <AnimatedLogo size={28} />
              </div>
              <span className="text-2xl font-bold">Nova<span className="text-blue-500">Health</span></span>
            </div>
            <p className="text-slate-400 leading-relaxed">
              Excellence in healthcare through innovation, empathy, and advanced technology. We're here for you 24/7.
            </p>
            <div className="flex gap-4">
              {[Facebook, Twitter, Instagram, Linkedin].map((Icon, i) => (
                <a key={i} href="#" className="w-10 h-10 rounded-full border border-slate-700 flex items-center justify-center hover:bg-blue-600 hover:border-blue-600 transition-all">
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-6">Quick Links</h4>
            <ul className="space-y-4 text-slate-400">
              <li><a href="#" className="hover:text-blue-400 transition-colors">Our Specialists</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors">Medical Services</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors">Patient Portal</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors">Health Insurance</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors">Career Opportunities</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-6">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex gap-3 text-slate-400">
                <MapPin size={20} className="text-blue-500 shrink-0" />
                <span>123 Medical Center Way, Suite 400<br />San Francisco, CA 94103</span>
              </li>
              <li className="flex gap-3 text-slate-400">
                <Phone size={20} className="text-blue-500 shrink-0" />
                <span>+1 (800) 123-4567</span>
              </li>
              <li className="flex gap-3 text-slate-400">
                <Mail size={20} className="text-blue-500 shrink-0" />
                <span>contact@novahealth.com</span>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-6">Newsletter</h4>
            <p className="text-slate-400 mb-4 text-sm">Get healthy living tips and hospital updates.</p>
            <div className="flex gap-2">
              <input 
                type="email" 
                placeholder="Your email" 
                className="flex-1 bg-slate-800 border border-slate-700 rounded-lg px-4 py-2 text-sm outline-none focus:ring-1 focus:ring-blue-500"
              />
              <button className="bg-blue-600 px-4 py-2 rounded-lg text-sm font-bold hover:bg-blue-700 transition-colors">
                Join
              </button>
            </div>
          </div>
        </div>

        <div className="pt-10 border-t border-slate-800 flex flex-col md:row items-center justify-between gap-6 text-slate-500 text-xs">
          <p>© 2024 NovaHealth Medical Group. All rights reserved.</p>
          <div className="flex gap-8">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-white transition-colors">Cookie Settings</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
