
import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Target, Heart, Award, ArrowRight } from 'lucide-react';
import { fadeIn, staggerContainer, scaleUp } from '../constants';

const LEADERSHIP = [
  { name: 'Dr. Sarah Thompson', role: 'Head of School', img: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=600&auto=format&fit=crop', bio: 'With 20 years in educational psychology, Sarah leads with empathy and innovation.' },
  { name: 'Prof. Michael Chen', role: 'Director of Academics', img: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=600&auto=format&fit=crop', bio: 'Michael oversees our pioneering curriculum and global integration programs.' },
  { name: 'Mrs. Anita Rao', role: 'Dean of Student Life', img: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=600&auto=format&fit=crop', bio: 'Anita ensures a nurturing environment where every child feels seen and heard.' }
];

const About: React.FC = () => {
  return (
    <motion.div 
      initial="initial"
      animate="animate"
      className="pb-24"
    >
      {/* Page Header */}
      <section className="bg-secondary py-32 px-6 text-center overflow-hidden relative">
        <motion.div 
          animate={{ rotate: 360 }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
          className="absolute -top-40 -left-40 w-96 h-96 bg-primary/5 organic-blob"
        />
        <motion.div 
          variants={staggerContainer}
          className="max-w-4xl mx-auto space-y-8 relative z-10"
        >
          <motion.h1 
            variants={fadeIn}
            className="text-6xl md:text-8xl font-900 font-display text-white tracking-tighter leading-tight"
          >
            A Legacy of <br /> <span className="text-primary italic">Amirtha Excellence.</span>
          </motion.h1>
          <motion.p 
            variants={fadeIn}
            className="text-xl md:text-2xl text-slate-400 leading-relaxed max-w-2xl mx-auto"
          >
            Founded on the dual pillars of curiosity and kindness, Amirtha Matric School has been a beacon of modern education for decades.
          </motion.p>
        </motion.div>
      </section>

      {/* Values Section */}
      <section className="py-24 px-6 max-w-7xl mx-auto">
        <motion.div 
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {[
            { icon: Target, title: 'Our Mission', text: 'To nurture adaptive thinkers who approach global challenges with empathy and intelligence.', color: 'bg-primary/10 text-primary' },
            { icon: Heart, title: 'Inclusivity', text: 'Celebrating diversity in all forms, ensuring every identity is valued and respected.', color: 'bg-accent/10 text-accent' },
            { icon: Shield, title: 'Integrity', text: 'Building character through honest actions, accountability, and ethical leadership.', color: 'bg-slate-100 text-slate-600' },
            { icon: Award, title: 'Excellence', text: 'Striving for the highest standards in academics, arts, athletics, and beyond.', color: 'bg-primary/10 text-primary' },
          ].map((v, i) => (
            <motion.div 
              key={i}
              variants={scaleUp}
              whileHover={{ y: -12 }}
              className="p-10 rounded-[3rem] bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 shadow-xl shadow-slate-100/50 dark:shadow-none transition-all"
            >
              <div className={`w-16 h-16 rounded-[1.25rem] flex items-center justify-center mb-8 shadow-inner ${v.color}`}>
                <v.icon size={30} />
              </div>
              <h3 className="text-2xl font-800 mb-4 font-display">{v.title}</h3>
              <p className="text-slate-500 dark:text-slate-400 leading-relaxed text-sm">{v.text}</p>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* Leadership Section */}
      <section className="py-24 px-6 bg-slate-50 dark:bg-slate-950">
        <div className="max-w-7xl mx-auto">
          <div className="mb-20 text-center md:text-left">
            <h2 className="text-5xl font-900 font-display tracking-tight mb-4">Our Visionary <span className="text-primary italic">Leaders</span></h2>
            <p className="text-slate-500 dark:text-slate-400 max-w-xl text-lg">The dedicated team steering Amirtha Matric School towards a bright future for all students.</p>
          </div>

          <motion.div 
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16"
          >
            {LEADERSHIP.map((lead, i) => (
              <motion.div 
                key={i}
                variants={fadeIn}
                whileHover={{ y: -10 }}
                className="group bg-white dark:bg-slate-900 rounded-[3rem] p-6 shadow-2xl shadow-slate-200/50 dark:shadow-none border border-slate-100 dark:border-slate-800"
              >
                <div className="aspect-[4/5] rounded-[2rem] overflow-hidden mb-8 relative">
                  <img src={lead.img} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" alt={lead.name} />
                  <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                </div>
                <div className="px-2">
                  <h4 className="text-2xl font-800 text-secondary dark:text-white font-display leading-tight">{lead.name}</h4>
                  <p className="text-primary font-bold uppercase tracking-widest text-[10px] mt-2 mb-4">{lead.role}</p>
                  <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed mb-6">
                    {lead.bio}
                  </p>
                  <button className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-secondary dark:text-white group/btn">
                    Read Profile <ArrowRight size={14} className="group-hover/btn:translate-x-2 transition-transform" />
                  </button>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </motion.div>
  );
};

export default About;
