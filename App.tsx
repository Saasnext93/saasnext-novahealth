
import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Specialties } from './components/Specialties';
import { DoctorSection } from './components/DoctorSection';
import { Booking } from './components/Booking';
import { Assistant } from './components/Assistant';
import { Footer } from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-slate-50 selection:bg-blue-100 selection:text-blue-700">
      <Navbar />
      
      <main>
        <Hero />
        
        {/* Interactive Stats Bar */}
        <section className="bg-white py-12 border-y border-slate-100">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {[
                { label: 'Patient Recoveries', val: '25k+' },
                { label: 'Expert Doctors', val: '150+' },
                { label: 'Success Rate', val: '99.2%' },
                { label: 'Years Experience', val: '45+' },
              ].map((stat, i) => (
                <div key={i} className="text-center">
                  <p className="text-4xl font-bold text-slate-900 mb-1">{stat.val}</p>
                  <p className="text-sm font-medium text-slate-500 uppercase tracking-widest">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <Specialties />
        <DoctorSection />
        
        {/* Call to Action Banner */}
        <section className="py-20 bg-blue-600 relative overflow-hidden">
          <div className="absolute inset-0 opacity-10 pointer-events-none">
             <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
                <defs>
                   <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                      <path d="M 40 0 L 0 0 0 40" fill="none" stroke="white" strokeWidth="1"/>
                   </pattern>
                </defs>
                <rect width="100%" height="100%" fill="url(#grid)" />
             </svg>
          </div>
          <div className="container mx-auto px-6 text-center relative z-10">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-8 tracking-tight">Need Urgent Care? We're Ready.</h2>
            <p className="text-blue-100 text-lg mb-10 max-w-2xl mx-auto">
              Our emergency department and virtual walk-in clinic are available 24 hours a day, 7 days a week.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <button className="px-10 py-4 bg-white text-blue-600 rounded-2xl font-bold shadow-xl hover:bg-blue-50 transition-all">
                Virtual Consultation
              </button>
              <button className="px-10 py-4 bg-blue-700 text-white border border-blue-500/50 rounded-2xl font-bold hover:bg-blue-800 transition-all">
                Call Emergency Desk
              </button>
            </div>
          </div>
        </section>

        <Booking />
      </main>

      <Assistant />
      <Footer />
    </div>
  );
}

export default App;
