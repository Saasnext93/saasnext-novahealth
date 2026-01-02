
import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Activity, Shield, Heart } from 'lucide-react';

export const Hero: React.FC = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] }
    },
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      {/* Dynamic Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          animate={{
            scale: [1, 1.1, 1],
            rotate: [0, 5, 0],
          }}
          transition={{ duration: 15, repeat: Infinity }}
          className="absolute -top-20 -left-20 w-96 h-96 bg-blue-100 rounded-full blur-3xl opacity-40"
        />
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            x: [0, 20, 0],
          }}
          transition={{ duration: 12, repeat: Infinity, delay: 2 }}
          className="absolute top-1/2 -right-20 w-80 h-80 bg-cyan-100 rounded-full blur-3xl opacity-40"
        />
      </div>

      <div className="container mx-auto px-6 relative z-10 grid lg:grid-cols-2 gap-12 items-center">
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-2xl"
        >
          <motion.div 
            variants={itemVariants}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-100 text-blue-600 text-sm font-medium mb-6"
          >
            <Activity size={16} />
            <span>Pioneering Digital Health</span>
          </motion.div>
          
          <motion.h1 
            variants={itemVariants}
            className="text-6xl md:text-7xl font-bold text-slate-900 leading-[1.1] mb-6 tracking-tight"
          >
            Healthcare <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500">
              Redefined.
            </span>
          </motion.h1>

          <motion.p 
            variants={itemVariants}
            className="text-lg text-slate-600 mb-8 leading-relaxed max-w-lg"
          >
            Experience a new standard of medical excellence. We combine human empathy with cutting-edge technology to provide care that truly listens.
          </motion.p>

          <motion.div variants={itemVariants} className="flex flex-wrap gap-4">
            <button className="px-8 py-4 bg-blue-600 text-white rounded-2xl font-semibold shadow-xl shadow-blue-200 hover:bg-blue-700 transition-all flex items-center gap-2 group">
              Book Appointment
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="px-8 py-4 bg-white text-slate-700 border border-slate-200 rounded-2xl font-semibold hover:bg-slate-50 transition-all">
              Our Specialties
            </button>
          </motion.div>

          <motion.div 
            variants={itemVariants}
            className="mt-12 flex items-center gap-8 grayscale opacity-60"
          >
            <div className="flex items-center gap-2 text-sm font-medium">
              <Shield size={18} className="text-blue-500" />
              Accredited Care
            </div>
            <div className="flex items-center gap-2 text-sm font-medium">
              <Heart size={18} className="text-pink-500" />
              Patient Focused
            </div>
          </motion.div>
        </motion.div>

        {/* 3D Visual Element */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="relative hidden lg:block"
        >
          <div className="relative z-10 w-full aspect-square bg-white rounded-[2.5rem] shadow-2xl overflow-hidden group perspective-1000">
             <motion.img 
               whileHover={{ scale: 1.05 }}
               transition={{ duration: 0.5 }}
               src="https://images.unsplash.com/photo-1622253692010-333f2da6031d?q=80&w=1000&auto=format&fit=crop" 
               alt="Healthcare"
               className="w-full h-full object-cover"
             />
             <div className="absolute inset-0 bg-gradient-to-t from-blue-900/40 to-transparent pointer-events-none" />
             
             {/* Floating Info Cards */}
             <motion.div 
               animate={{ y: [0, -10, 0] }}
               transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
               className="absolute top-12 -left-8 glass-effect p-4 rounded-2xl shadow-lg border border-white/50 z-20"
             >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center text-white">
                    <Activity size={20} />
                  </div>
                  <div>
                    <p className="text-xs text-slate-500 font-medium uppercase">Vitality Score</p>
                    <p className="text-lg font-bold text-slate-800">98.2%</p>
                  </div>
                </div>
             </motion.div>

             <motion.div 
               animate={{ y: [0, 10, 0] }}
               transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
               className="absolute bottom-12 -right-8 glass-effect p-4 rounded-2xl shadow-lg border border-white/50 z-20"
             >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center text-white">
                    <Heart size={20} />
                  </div>
                  <div>
                    <p className="text-xs text-slate-500 font-medium uppercase">Active Patients</p>
                    <p className="text-lg font-bold text-slate-800">12k+</p>
                  </div>
                </div>
             </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
