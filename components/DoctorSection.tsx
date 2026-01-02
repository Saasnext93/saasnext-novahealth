
import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Reveal } from './MotionWrapper';

export const DoctorSection: React.FC = () => {
  const { scrollYProgress } = useScroll();
  const y1 = useTransform(scrollYProgress, [0.3, 0.6], [0, -50]);
  const y2 = useTransform(scrollYProgress, [0.3, 0.6], [0, 50]);

  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <div className="relative order-2 lg:order-1">
            <motion.div style={{ y: y1 }} className="relative z-10 w-4/5 aspect-[4/5] rounded-[3rem] overflow-hidden shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1559839734-2b71f1536783?q=80&w=1000&auto=format&fit=crop" 
                alt="Lead Doctor"
                className="w-full h-full object-cover"
              />
            </motion.div>
            <motion.div 
              style={{ y: y2 }}
              className="absolute -bottom-10 -right-4 w-3/5 aspect-square rounded-[2rem] overflow-hidden shadow-2xl border-8 border-white"
            >
              <img 
                src="https://images.unsplash.com/photo-1594824476967-48c8b964273f?q=80&w=1000&auto=format&fit=crop" 
                alt="Clinical Environment"
                className="w-full h-full object-cover"
              />
            </motion.div>
            <div className="absolute -top-10 -left-10 w-40 h-40 bg-blue-100/50 rounded-full blur-2xl -z-10" />
          </div>

          <div className="order-1 lg:order-2">
            <Reveal>
              <span className="text-blue-600 font-bold uppercase tracking-widest text-sm mb-4 block">Our Philosophy</span>
              <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-8 tracking-tight leading-tight">Expert Care, <br />Human Heart.</h2>
              <p className="text-slate-600 text-lg mb-8 leading-relaxed">
                Meet Dr. Elena Vance, our Medical Director. With over 20 years of experience in integrative medicine, she leads a team dedicated to treating the person, not just the symptoms.
              </p>
              
              <div className="grid grid-cols-2 gap-8 mb-10">
                <div>
                  <h4 className="text-3xl font-bold text-blue-600 mb-1">15+</h4>
                  <p className="text-slate-500 font-medium">Global Awards</p>
                </div>
                <div>
                  <h4 className="text-3xl font-bold text-blue-600 mb-1">99%</h4>
                  <p className="text-slate-500 font-medium">Patient Satisfaction</p>
                </div>
              </div>

              <div className="p-6 bg-slate-50 rounded-2xl border-l-4 border-blue-600">
                <p className="italic text-slate-700 leading-relaxed mb-4">
                  "Our mission is simple: to provide precision medicine that honors the uniqueness of every patient. We believe in the power of listening."
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-blue-200" />
                  <div>
                    <p className="font-bold text-slate-900">Dr. Elena Vance</p>
                    <p className="text-xs text-slate-500 uppercase tracking-tighter">Chief Medical Officer</p>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
};
