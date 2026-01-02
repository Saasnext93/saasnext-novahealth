
import React from 'react';
import { motion } from 'framer-motion';
import { Reveal } from './MotionWrapper';
import { Brain, Stethoscope, Heart, Baby, Eye, Zap } from 'lucide-react';

const specialties = [
  { icon: Heart, name: "Cardiology", color: "bg-red-50 text-red-600", description: "Comprehensive heart health and vascular care." },
  { icon: Brain, name: "Neurology", color: "bg-purple-50 text-purple-600", description: "Advanced treatment for neurological disorders." },
  { icon: Baby, name: "Pediatrics", color: "bg-blue-50 text-blue-600", description: "Gentle care for your little ones from day one." },
  { icon: Eye, name: "Ophthalmology", color: "bg-cyan-50 text-cyan-600", description: "Precision eye care and advanced vision correction." },
  { icon: Stethoscope, name: "General Medicine", color: "bg-green-50 text-green-600", description: "Holistic primary care for the entire family." },
  { icon: Zap, name: "Emergency", color: "bg-amber-50 text-amber-600", description: "24/7 rapid response for critical health needs." },
];

export const Specialties: React.FC = () => {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <Reveal className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl font-bold text-slate-900 mb-4 tracking-tight">World-Class Specialties</h2>
          <p className="text-slate-600 text-lg">We bring together top specialists across multiple disciplines to ensure your family receives the most coordinated and effective care possible.</p>
        </Reveal>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {specialties.map((item, idx) => (
            <Reveal key={idx} delay={idx * 0.1}>
              <motion.div 
                whileHover={{ y: -10 }}
                className="p-8 rounded-[2rem] border border-slate-100 bg-slate-50/50 hover:bg-white hover:shadow-xl hover:shadow-blue-50 transition-all group"
              >
                <div className={`w-14 h-14 rounded-2xl ${item.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                  <item.icon size={28} />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{item.name}</h3>
                <p className="text-slate-600 leading-relaxed mb-6">
                  {item.description}
                </p>
                <button className="text-blue-600 font-semibold flex items-center gap-2 group-hover:gap-3 transition-all text-sm">
                  Learn More
                  <span className="text-lg">→</span>
                </button>
              </motion.div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};
