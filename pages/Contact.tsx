
import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Clock, ArrowRight } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <div className="pb-0">
      <section className="py-44 px-6 bg-secondary relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 organic-blob -translate-y-1/2 translate-x-1/2" />
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-16 space-y-4">
            <h1 className="text-6xl md:text-8xl font-900 font-display tracking-tighter text-white">Let's <span className="text-yellow-400 italic">Connect.</span></h1>
            <p className="text-xl text-slate-400 max-w-2xl mx-auto">Our dedicated team is here to guide you through every step of your child's educational journey at Amirtha School.</p>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-start">
            {/* Info Cards */}
            <div className="space-y-10">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="bg-white/5 backdrop-blur-md border border-white/10 p-8 rounded-[2.5rem] space-y-5 group hover:border-primary transition-all">
                  <div className="w-14 h-14 bg-primary/20 rounded-2xl flex items-center justify-center text-primary shadow-lg">
                    <MapPin size={28} />
                  </div>
                  <h4 className="text-xl font-800 text-white">Visit Us</h4>
                  <p className="text-slate-400 text-sm leading-relaxed">
                    Unjalpalayam, Somanur, <br /> Tamil Nadu 641668, India
                  </p>
                </div>
                <div className="bg-white/5 backdrop-blur-md border border-white/10 p-8 rounded-[2.5rem] space-y-5 group hover:border-accent transition-all">
                  <div className="w-14 h-14 bg-accent/20 rounded-2xl flex items-center justify-center text-accent shadow-lg">
                    <Phone size={28} />
                  </div>
                  <h4 className="text-xl font-800 text-white">Call Us</h4>
                  <p className="text-slate-400 text-sm leading-relaxed">
                    Front Office: +91 462 2345 678 <br /> Admissions: +91 98765 43210
                  </p>
                </div>
                <div className="bg-white/5 backdrop-blur-md border border-white/10 p-8 rounded-[2.5rem] space-y-5 group hover:border-primary transition-all">
                  <div className="w-14 h-14 bg-primary/20 rounded-2xl flex items-center justify-center text-primary shadow-lg">
                    <Mail size={28} />
                  </div>
                  <h4 className="text-xl font-800 text-white">Email Us</h4>
                  <p className="text-slate-400 text-sm leading-relaxed">
                    hello@amirthamatric.in <br /> admissions@amirthamatric.in
                  </p>
                </div>
                <div className="bg-white/5 backdrop-blur-md border border-white/10 p-8 rounded-[2.5rem] space-y-5 group hover:border-accent transition-all">
                  <div className="w-14 h-14 bg-accent/20 rounded-2xl flex items-center justify-center text-accent shadow-lg">
                    <Clock size={28} />
                  </div>
                  <h4 className="text-xl font-800 text-white">Office Hours</h4>
                  <p className="text-slate-400 text-sm leading-relaxed">
                    Mon - Sat: 8:30 AM - 5:30 PM <br /> Sun: Closed
                  </p>
                </div>
              </div>

              {/* Interactive Map Visual */}
              <div className="h-[400px] bg-slate-900 rounded-[3.5rem] overflow-hidden relative border-8 border-white/5 shadow-2xl group">
                <img 
                  src="/assets/school.jpg" 
                  alt="Amirtha School Aerial" 
                  className="w-full h-full object-cover opacity-40 grayscale group-hover:grayscale-0 group-hover:opacity-60 transition-all duration-1000"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="relative">
                    <motion.div 
                      animate={{ scale: [1, 1.5, 1], opacity: [0.5, 0, 0.5] }}
                      transition={{ duration: 2, repeat: Infinity }}
                      className="absolute inset-0 bg-primary rounded-full"
                    />
                    <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center shadow-2xl relative z-10 text-secondary">
                      <MapPin size={32} />
                    </div>
                  </div>
                </div>
                <button
                  onClick={() => window.open('https://maps.app.goo.gl/VUJPzKf618FGPyRd6', '_blank')}
                  className="absolute bottom-10 left-10 text-white bg-black/40 backdrop-blur-md px-6 py-3 rounded-full text-xs font-bold tracking-widest uppercase flex items-center gap-3 hover:bg-black/60 transition-all cursor-pointer"
                >
                  Find our campus <ArrowRight size={14} />
                </button>
              </div>
            </div>

            {/* School Image */}
            <div className="h-full min-h-[500px] bg-slate-900 rounded-[4rem] overflow-hidden border-8 border-white/5 shadow-2xl">
              <img 
                src="/assets/contact-img.jpg"
                alt="Amirtha Matric School Campus" 
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-1000"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
