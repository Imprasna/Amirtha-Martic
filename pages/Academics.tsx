
import React from 'react';
import { motion } from 'framer-motion';
import { Book, Microscope, Palette, Music, Calculator, Languages, Zap, ArrowRight } from 'lucide-react';
import { fadeIn, staggerContainer, scaleUp } from '../constants';

const Academics: React.FC = () => {
  return (
    <motion.div 
      initial="initial"
      animate="animate"
      className="pb-24"
    >
      {/* Hero */}
      <section className="py-24 px-6 text-center max-w-4xl mx-auto space-y-8">
        <motion.h1 variants={fadeIn} className="text-6xl md:text-8xl font-900 font-display tracking-tighter leading-none">Curriculum for <br /> the <span className="text-primary italic">Digital Age.</span></motion.h1>
        <motion.p variants={fadeIn} className="text-xl md:text-2xl text-slate-500 dark:text-slate-400 leading-relaxed max-w-2xl mx-auto">
          We combine a rigorous core curriculum with interdisciplinary pathways that prepare students for careers that don't even exist yet.
        </motion.p>
      </section>

      {/* Subject Cards */}
      <section className="px-6 max-w-7xl mx-auto">
        <motion.div 
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {[
            { title: 'STEM & Robotics', icon: Microscope, color: 'bg-blue-500', text: 'Hands-on learning with the latest in robotics, advanced coding, and sustainable technology.' },
            { title: 'Creative Arts', icon: Palette, color: 'bg-purple-500', text: 'From classical painting to digital media design and award-winning cinematic arts.' },
            { title: 'Global Humanities', icon: Book, color: 'bg-amber-500', text: 'Exploring literature, world history, and ethics through a diverse global lens.' },
            { title: 'Modern Math', icon: Calculator, color: 'bg-emerald-500', text: 'Advanced calculus and data science taught with high-impact real-world applications.' },
            { title: 'Languages', icon: Languages, color: 'bg-rose-500', text: 'Immersion programs in multiple languages fostering cultural empathy and communication.' },
            { title: 'Performing Arts', icon: Music, color: 'bg-primary', text: 'Professional-grade theater production, orchestral music, and modern contemporary dance.' },
          ].map((subject, idx) => (
            <motion.div 
              key={idx}
              variants={scaleUp}
              whileHover={{ y: -12 }}
              style={{ border: '0.3px solid black' }}
              className="bg-white dark:bg-slate-900 p-10 rounded-[3rem] shadow-xl shadow-slate-100/50 dark:shadow-none hover:shadow-2xl transition-all group"
            >
              <motion.div 
                whileHover={{ rotate: [0, -10, 10, 0], scale: 1.1 }}
                className={`w-16 h-16 rounded-2xl ${subject.color} flex items-center justify-center mb-8 shadow-xl shadow-black/10 group-hover:rotate-12 transition-all`}
              >
                <subject.icon className="text-white" size={32} />
              </motion.div>
              <h3 className="text-2xl font-800 mb-4 font-display leading-tight">{subject.title}</h3>
              <p className="text-slate-500 dark:text-slate-400 leading-relaxed mb-8 text-sm">{subject.text}</p>
              <motion.button 
                whileHover={{ x: 5 }}
                className="text-xs font-bold uppercase tracking-widest text-secondary dark:text-white flex items-center gap-3 transition-all group-hover:text-primary"
              >
                Explore Pathways <ArrowRight size={16} />
              </motion.button>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* Featured Lab */}
      <section className="mt-24 px-6">
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-7xl mx-auto bg-secondary dark:bg-slate-900 rounded-[4rem] overflow-hidden flex flex-col lg:flex-row items-stretch shadow-2xl"
        >
          <div className="lg:w-1/2 p-12 lg:p-24 space-y-8 flex flex-col justify-center">
            <motion.span variants={fadeIn} className="text-primary font-bold tracking-widest uppercase text-xs">Innovation in Action</motion.span>
            <motion.h2 variants={fadeIn} className="text-4xl md:text-6xl font-900 font-display text-white leading-none tracking-tight">The Future-Ready <br /> <span className="text-primary">Maker Hub</span></motion.h2>
            <motion.p variants={fadeIn} className="text-slate-400 text-lg leading-relaxed max-w-lg">
              Our 5,000 sq ft maker space is equipped with dual-head 3D printers, laser engravers, and a high-end VR production suite. It's where students solve real-world problems.
            </motion.p>
            <motion.div variants={staggerContainer} initial="initial" animate="animate" className="flex gap-6">
              <motion.div variants={scaleUp} className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-primary shadow-xl">
                <Microscope size={28} />
              </motion.div>
              <motion.div variants={scaleUp} className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-primary shadow-xl">
                <Zap size={28} />
              </motion.div>
            </motion.div>
          </div>
          <motion.div 
            initial={{ x: 100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            className="lg:w-1/2 aspect-video lg:aspect-auto"
          >
            <img 
              src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=1200&auto=format&fit=crop" 
              alt="Innovation Hub" 
              className="w-full h-full object-cover grayscale-0 hover:grayscale-0 transition-all duration-700" 
            />
          </motion.div>
        </motion.div>
      </section>
    </motion.div>
  );
};

export default Academics;
