
import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Clock, Send, ArrowRight } from 'lucide-react';
import Button from '../components/Button';

const Contact: React.FC = () => {
  return (
    <div className="pb-24">
      <section className="py-24 px-6 bg-secondary relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 organic-blob -translate-y-1/2 translate-x-1/2" />
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-16 space-y-4">
            <h1 className="text-6xl md:text-8xl font-900 font-display tracking-tighter text-white">Let's <span className="text-primary italic">Connect.</span></h1>
            <p className="text-xl text-slate-400 max-w-2xl mx-auto">Our dedicated team is here to guide you through every step of your child's educational journey at Amirtha Matric.</p>
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
                    Main Road, Tirunelveli, <br /> Tamil Nadu 627001, India
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
                  src="https://images.unsplash.com/photo-1541339907198-e08759dfc3ef?q=80&w=1200&auto=format&fit=crop" 
                  alt="Amirtha Matric School Aerial" 
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
                <div className="absolute bottom-10 left-10 text-white bg-black/40 backdrop-blur-md px-6 py-3 rounded-full text-xs font-bold tracking-widest uppercase flex items-center gap-3">
                  Find our campus <ArrowRight size={14} />
                </div>
              </div>
            </div>

            {/* Inquiry Form */}
            <div className="bg-white dark:bg-slate-900 p-10 md:p-16 rounded-[4rem] border border-slate-100 dark:border-slate-800 shadow-2xl">
              <h3 className="text-4xl font-900 mb-2 font-display text-secondary dark:text-white leading-tight">Start a <span className="text-primary italic">Conversation</span></h3>
              <p className="text-slate-500 mb-10 text-lg">Send us a message and we'll get back to you within 24 hours.</p>
              
              <form className="space-y-8" onSubmit={(e) => e.preventDefault()}>
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="space-y-3">
                    <label className="text-xs font-bold uppercase tracking-widest text-slate-400 px-2">First Name</label>
                    <input type="text" className="w-full bg-slate-50 dark:bg-slate-800 border-none rounded-[1.5rem] py-5 px-8 focus:ring-2 focus:ring-primary text-secondary dark:text-white transition-all" placeholder="John" />
                  </div>
                  <div className="space-y-3">
                    <label className="text-xs font-bold uppercase tracking-widest text-slate-400 px-2">Last Name</label>
                    <input type="text" className="w-full bg-slate-50 dark:bg-slate-800 border-none rounded-[1.5rem] py-5 px-8 focus:ring-2 focus:ring-primary text-secondary dark:text-white transition-all" placeholder="Doe" />
                  </div>
                </div>
                <div className="space-y-3">
                  <label className="text-xs font-bold uppercase tracking-widest text-slate-400 px-2">Email Address</label>
                  <input type="email" className="w-full bg-slate-50 dark:bg-slate-800 border-none rounded-[1.5rem] py-5 px-8 focus:ring-2 focus:ring-primary text-secondary dark:text-white transition-all" placeholder="john@example.com" />
                </div>
                <div className="space-y-3">
                  <label className="text-xs font-bold uppercase tracking-widest text-slate-400 px-2">Message</label>
                  <textarea className="w-full bg-slate-50 dark:bg-slate-800 border-none rounded-[2rem] py-6 px-8 focus:ring-2 focus:ring-primary h-44 text-secondary dark:text-white transition-all resize-none" placeholder="What would you like to know?"></textarea>
                </div>
                <motion.button 
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full bg-primary text-slate-900 font-900 py-6 rounded-[2rem] shadow-xl shadow-primary/20 hover:shadow-primary/40 transition-all flex items-center justify-center gap-3 text-lg uppercase tracking-widest group"
                >
                  Send Inquiry <Send size={22} className="group-hover:translate-x-2 group-hover:-translate-y-2 transition-transform" />
                </motion.button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
