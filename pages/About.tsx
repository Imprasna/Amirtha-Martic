
// import React from 'react';
// import { motion } from 'framer-motion';
// import { Shield, Target, Heart, Award, ArrowRight } from 'lucide-react';
// import { fadeIn, staggerContainer, scaleUp } from '../constants';

// const LEADERSHIP = [
//   { name: 'Dr. Sarah Thompson', role: 'Head of School', img: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=600&auto=format&fit=crop', bio: 'With 20 years in educational psychology, Sarah leads with empathy and innovation.' },
//   { name: 'Prof. Michael Chen', role: 'Director of Academics', img: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=600&auto=format&fit=crop', bio: 'Michael oversees our pioneering curriculum and global integration programs.' },
//   { name: 'Mrs. Anita Rao', role: 'Dean of Student Life', img: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=600&auto=format&fit=crop', bio: 'Anita ensures a nurturing environment where every child feels seen and heard.' }
// ];

// const About: React.FC = () => {
//   return (
//     <motion.div 
//       initial="initial"
//       animate="animate"
//       className="pb-24"
//     >
//       {/* Page Header */}
//       <section className="bg-secondary py-32 px-6 text-center overflow-hidden relative">
//         <motion.div 
//           animate={{ rotate: 360 }}
//           transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
//           className="absolute -top-40 -left-40 w-96 h-96 bg-primary/5 organic-blob"
//         />
//         <motion.div 
//           variants={staggerContainer}
//           className="max-w-4xl mx-auto space-y-8 relative z-10"
//         >
//           <motion.h1 
//             variants={fadeIn}
//             className="text-6xl md:text-8xl font-900 font-display text-white tracking-tighter leading-tight"
//           >
//             A Legacy of <br /> <span className="text-primary italic">Amirtha Excellence.</span>
//           </motion.h1>
//           <motion.p 
//             variants={fadeIn}
//             className="text-xl md:text-2xl text-slate-400 leading-relaxed max-w-2xl mx-auto"
//           >
//             Founded on the dual pillars of curiosity and kindness, Amirtha Matric School has been a beacon of modern education for decades.
//           </motion.p>
//         </motion.div>
//       </section>

//       {/* Values Section */}
//       <section className="py-24 px-6 max-w-7xl mx-auto">
//         <motion.div 
//           variants={staggerContainer}
//           initial="initial"
//           whileInView="animate"
//           viewport={{ once: true }}
//           className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
//         >
//           {[
//             { icon: Target, title: 'Our Mission', text: 'To nurture adaptive thinkers who approach global challenges with empathy and intelligence.', color: 'bg-primary/10 text-primary' },
//             { icon: Heart, title: 'Inclusivity', text: 'Celebrating diversity in all forms, ensuring every identity is valued and respected.', color: 'bg-accent/10 text-accent' },
//             { icon: Shield, title: 'Integrity', text: 'Building character through honest actions, accountability, and ethical leadership.', color: 'bg-slate-100 text-slate-600' },
//             { icon: Award, title: 'Excellence', text: 'Striving for the highest standards in academics, arts, athletics, and beyond.', color: 'bg-primary/10 text-primary' },
//           ].map((v, i) => (
//             <motion.div 
//               key={i}
//               variants={scaleUp}
//               whileHover={{ y: -12 }}
//               className="p-10 rounded-[3rem] bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 shadow-xl shadow-slate-100/50 dark:shadow-none transition-all"
//             >
//               <div className={`w-16 h-16 rounded-[1.25rem] flex items-center justify-center mb-8 shadow-inner ${v.color}`}>
//                 <v.icon size={30} />
//               </div>
//               <h3 className="text-2xl font-800 mb-4 font-display">{v.title}</h3>
//               <p className="text-slate-500 dark:text-slate-400 leading-relaxed text-sm">{v.text}</p>
//             </motion.div>
//           ))}
//         </motion.div>
//       </section>

//       {/* Leadership Section */}
//       <section className="py-24 px-6 bg-slate-50 dark:bg-slate-950">
//         <div className="max-w-7xl mx-auto">
//           <div className="mb-20 text-center md:text-left">
//             <h2 className="text-5xl font-900 font-display tracking-tight mb-4">Our Visionary <span className="text-primary italic">Leaders</span></h2>
//             <p className="text-slate-500 dark:text-slate-400 max-w-xl text-lg">The dedicated team steering Amirtha Matric School towards a bright future for all students.</p>
//           </div>

//           <motion.div 
//             variants={staggerContainer}
//             initial="initial"
//             whileInView="animate"
//             viewport={{ once: true }}
//             className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16"
//           >
//             {LEADERSHIP.map((lead, i) => (
//               <motion.div 
//                 key={i}
//                 variants={fadeIn}
//                 whileHover={{ y: -10 }}
//                 className="group bg-white dark:bg-slate-900 rounded-[3rem] p-6 shadow-2xl shadow-slate-200/50 dark:shadow-none border border-slate-100 dark:border-slate-800"
//               >
//                 <div className="aspect-[4/5] rounded-[2rem] overflow-hidden mb-8 relative">
//                   <img src={lead.img} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" alt={lead.name} />
//                   <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity"></div>
//                 </div>
//                 <div className="px-2">
//                   <h4 className="text-2xl font-800 text-secondary dark:text-white font-display leading-tight">{lead.name}</h4>
//                   <p className="text-primary font-bold uppercase tracking-widest text-[10px] mt-2 mb-4">{lead.role}</p>
//                   <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed mb-6">
//                     {lead.bio}
//                   </p>
//                   <button className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-secondary dark:text-white group/btn">
//                     Read Profile <ArrowRight size={14} className="group-hover/btn:translate-x-2 transition-transform" />
//                   </button>
//                 </div>
//               </motion.div>
//             ))}
//           </motion.div>
//         </div>
//       </section>
//     </motion.div>
//   );
// };

// export default About;


import React from 'react';
import { motion } from 'framer-motion';
import {
  Shield,
  Target,
  Heart,
  Award,
  ArrowRight,
  Users,
  BookOpen,
  History,
  GraduationCap,
  Sparkles,
  Globe
} from 'lucide-react';
import { fadeIn, staggerContainer, scaleUp, slideIn } from '../constants';

const LEADERSHIP = [
  {
    name: 'Dr. R. Ananthakrishnan',
    role: 'Founder & Chairman',
    img: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=600&auto=format&fit=crop',
    bio: 'A visionary educationist with over 40 years of experience in transforming the educational landscape of Southern India.'
  },
  {
    name: 'Mrs. Lakshmi Devi',
    role: 'Principal',
    img: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=600&auto=format&fit=crop',
    bio: 'Dedicated to fostering a culture of academic rigor and emotional intelligence among students and faculty alike.'
  },
  {
    name: 'Prof. S. Karthikeyan',
    role: 'Director of Operations',
    img: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=600&auto=format&fit=crop',
    bio: 'Ensuring that Amirtha Matric stays at the cutting edge of technological integration and campus safety.'
  }
];

const STATS = [
  { label: 'Founded In', value: '1995', icon: History },
  { label: 'Students', value: '1800+', icon: Users },
  { label: 'Pass Rate', value: '100%', icon: Award },
  { label: 'Alumni', value: '5000+', icon: GraduationCap },
];

const About: React.FC = () => {
  return (
    <motion.div
      initial="initial"
      animate="animate"
      className="overflow-hidden"
    >
      {/* Dynamic Hero Section */}
      <section className="relative min-h-[80vh] flex items-center justify-center pt-20 pb-32 px-6 overflow-hidden">
        <div className="absolute inset-0 bg-secondary z-0">
          <img
            src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=2000&auto=format&fit=crop"
            className="w-full h-full object-cover opacity-20"
            alt="School Campus"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-secondary/80 via-secondary/60 to-background-light dark:to-background-dark"></div>
        </div>

        <motion.div
          variants={staggerContainer}
          className="max-w-5xl mx-auto text-center relative z-10 space-y-8"
        >
          <motion.div variants={fadeIn} className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-white text-xs font-bold uppercase tracking-widest">
            <Sparkles size={14} /> Our Legacy of Excellence
          </motion.div>
          <motion.h1
            variants={fadeIn}
            className="text-5xl md:text-8xl font-900 font-display text-white tracking-tighter leading-tight"
          >
            Nurturing Minds <br />
            <span className="text-yellow-400 italic">Transforming Futures.</span>
          </motion.h1>
          <motion.p
            variants={fadeIn}
            className="text-xl md:text-2xl text-slate-300 leading-relaxed max-w-3xl mx-auto font-medium"
          >
            From our humble beginnings in 1995 to becoming a regional leader in K-12 education, Amirtha Matric School remains committed to the sweet nectar of knowledge.
          </motion.p>
        </motion.div>

        {/* Floating Background Blobs */}
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 90, 0],
            opacity: [0.1, 0.2, 0.1]
          }}
          transition={{ duration: 20, repeat: Infinity }}
          className="absolute -top-20 -right-20 w-96 h-96 bg-primary organic-blob blur-3xl -z-10"
        />
      </section>

      {/* Stats Quick View */}
      <section className="px-6 -mt-16 relative z-20">
        <div className="max-w-7xl mx-auto grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8">
          {STATS.map((stat, i) => (
            <motion.div
              key={i}
              variants={scaleUp}
              className="bg-white dark:bg-slate-900 p-8 rounded-[2.5rem] shadow-2xl border border-slate-100 dark:border-slate-800 text-center flex flex-col items-center gap-4 group hover:border-primary transition-colors"
            >
              <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all">
                <stat.icon size={24} />
              </div>
              <div>
                <div className="text-3xl font-900 text-secondary dark:text-white">{stat.value}</div>
                <div className="text-xs font-bold uppercase tracking-widest text-slate-400">{stat.label}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* The Amirtha Story */}
      <section className="py-32 px-6 max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <motion.div variants={slideIn('left')} viewport={{ once: true }}>
            <div className="relative">
              <div className="aspect-square rounded-[3rem] overflow-hidden shadow-2xl relative z-10 border-8 border-white dark:border-slate-800">
                <img
                  src="https://images.unsplash.com/photo-1546410531-bb4caa6b424d?q=80&w=1000&auto=format&fit=crop"
                  className="w-full h-full object-cover"
                  alt="Students Studying"
                />
              </div>
              <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-accent/20 organic-blob -z-0 blur-2xl"></div>
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute -top-12 -left-12 w-32 h-32 bg-primary/10 rounded-full border-4 border-dashed border-primary/30 z-20 hidden md:block"
              />
            </div>
          </motion.div>

          <motion.div variants={staggerContainer} className="space-y-8">
            <motion.div variants={fadeIn} className="inline-block text-accent font-900 uppercase tracking-[0.2em] text-xs">Our Heritage</motion.div>
            <motion.h2 variants={fadeIn} className="text-4xl md:text-6xl font-900 font-display leading-tight">
              A Tradition of <br /> <span className="text-primary italic">Deep Learning.</span>
            </motion.h2>
            <motion.p variants={fadeIn} className="text-slate-600 dark:text-slate-400 text-lg leading-relaxed font-medium">
              Amirtha (meaning "Nectar") was founded with a singular purpose: to provide the highest quality of education in Tirunelveli, combining traditional Indian values with modern academic rigor.
            </motion.p>
            <motion.div variants={fadeIn} className="space-y-6">
              {[
                { title: 'The Philosophy', desc: 'We believe knowledge is the sweetest nectar that transforms a child into a global citizen.', icon: BookOpen },
                { title: 'Modern Pedagogy', desc: 'Our teaching methods evolve with the digital age while keeping character at the core.', icon: Globe }
              ].map((item, i) => (
                <div key={i} className="flex gap-6 group">
                  <div className="flex-shrink-0 w-12 h-12 bg-white dark:bg-slate-800 rounded-2xl shadow-lg border border-slate-100 dark:border-slate-700 flex items-center justify-center text-primary group-hover:scale-110 transition-transform">
                    <item.icon size={22} />
                  </div>
                  <div>
                    <h4 className="text-xl font-800 dark:text-white mb-1">{item.title}</h4>
                    <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-24 px-6 bg-secondary relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-primary/5 -z-0 pattern-dots"></div>
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid md:grid-cols-2 gap-12">
            <motion.div
              variants={slideIn('up')}
              className="bg-white/5 backdrop-blur-xl p-12 rounded-[4rem] border border-white/10 space-y-6 group hover:bg-white/10 transition-all"
            >
              <div className="w-16 h-16 bg-primary rounded-3xl flex items-center justify-center text-secondary mb-8">
                <Target size={32} />
              </div>
              <h3 className="text-4xl font-900 text-white font-display">Our Mission</h3>
              <p className="text-slate-400 text-lg leading-relaxed">
                To empower students with the tools of self-discovery, fostering a community of lifelong learners who are academically resilient, ethically grounded, and socially responsible.
              </p>
            </motion.div>

            <motion.div
              variants={slideIn('up')}
              className="bg-white/5 backdrop-blur-xl p-12 rounded-[4rem] border border-white/10 space-y-6 group hover:bg-white/10 transition-all"
            >
              <div className="w-16 h-16 bg-accent rounded-3xl flex items-center justify-center text-secondary mb-8">
                <Globe size={32} />
              </div>
              <h3 className="text-4xl font-900 text-white font-display">Our Vision</h3>
              <p className="text-slate-400 text-lg leading-relaxed">
                To be a benchmark of educational excellence, producing visionary leaders who will shape a more compassionate, technologically advanced, and sustainable world.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Core Values Grid */}
      <section className="py-32 px-6 max-w-7xl mx-auto">
        <div className="text-center mb-20 space-y-4">
          <motion.div variants={fadeIn} className="text-primary font-900 uppercase tracking-widest text-xs">The Amirtha Code</motion.div>
          <motion.h2 variants={fadeIn} className="text-4xl md:text-6xl font-900 font-display tracking-tight">Core <span className="text-primary italic">Values</span></motion.h2>
        </div>

        <motion.div
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {[
            { icon: Heart, title: 'Empathy', text: 'Understanding and respecting diverse perspectives within our school family.', color: 'bg-rose-500/10 text-rose-500' },
            { icon: Shield, title: 'Integrity', text: 'Acting with honesty and strong moral principles in everything we do.', color: 'bg-emerald-500/10 text-emerald-500' },
            { icon: GraduationCap, title: 'Aspiration', text: 'Encouraging every student to reach beyond their perceived limits.', color: 'bg-blue-500/10 text-blue-500' },
            { icon: Users, title: 'Community', text: 'Fostering a sense of belonging and collaboration between home and school.', color: 'bg-primary/10 text-primary' },
          ].map((v, i) => (
            <motion.div
              key={i}
              variants={scaleUp}
              whileHover={{ y: -12 }}
              className="p-10 rounded-[3rem] bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 shadow-xl shadow-slate-200/50 dark:shadow-none transition-all group"
            >
              <div className={`w-16 h-16 rounded-[1.5rem] flex items-center justify-center mb-8 shadow-inner transition-colors ${v.color}`}>
                <v.icon size={30} />
              </div>
              <h3 className="text-2xl font-800 mb-4 font-display dark:text-white">{v.title}</h3>
              <p className="text-slate-500 dark:text-slate-400 leading-relaxed text-sm font-medium">{v.text}</p>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* Leadership Showcase */}
      <section className="py-32 px-6 bg-slate-50 dark:bg-slate-950">
        <div className="max-w-7xl mx-auto">
          <div className="mb-20 text-center md:text-left flex flex-col md:flex-row items-end justify-between gap-8">
            <div className="space-y-4">
              <motion.div variants={fadeIn} className="text-accent font-900 uppercase tracking-widest text-xs">Our Stewards</motion.div>
              <h2 className="text-5xl font-900 font-display tracking-tight dark:text-white">Visionary <span className="text-primary italic">Leadership.</span></h2>
              <p className="text-slate-500 dark:text-slate-400 max-w-xl text-lg font-medium">The dedicated minds guiding Amirtha Matric toward excellence every single day.</p>
            </div>
            <motion.button
              whileHover={{ scale: 1.05 }}
              className="bg-secondary text-white dark:bg-primary dark:text-secondary px-8 py-4 rounded-full font-800 flex items-center gap-3 shadow-xl hidden"
            >
              View Full Team <ArrowRight size={20} />
            </motion.button>
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
                whileHover={{ y: -15 }}
                className="group bg-white dark:bg-slate-900 rounded-[3.5rem] p-6 shadow-2xl shadow-slate-200/50 dark:shadow-none border border-slate-100 dark:border-slate-800"
              >
                <div className="aspect-[4/5] rounded-[2.5rem] overflow-hidden mb-8 relative border-4 border-slate-50 dark:border-slate-800">
                  <img src={lead.img} className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" alt={lead.name} />
                  <div className="absolute inset-0 bg-gradient-to-t from-secondary/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>
                <div className="px-2 pb-4">
                  <h4 className="text-2xl font-800 text-secondary dark:text-white font-display leading-tight">{lead.name}</h4>
                  <p className="text-primary font-bold uppercase tracking-widest text-[11px] mt-2 mb-4 bg-primary/10 inline-block px-3 py-1 rounded-full">{lead.role}</p>
                  <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed mb-6 font-medium">
                    {lead.bio}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 px-6 max-w-7xl mx-auto">
        <motion.div
          whileHover={{ scale: 1.01 }}
          className="bg-primary p-12 md:p-20 rounded-[4rem] text-center space-y-8 shadow-2xl shadow-primary/20"
        >
          <h2 className="text-4xl md:text-6xl font-900 text-white font-display leading-tight">Join the Amirtha <br /> School Family.</h2>
          <p className="text-white/70 text-lg md:text-xl font-medium max-w-2xl mx-auto">
            Experience an environment where your child's curiosity is celebrated and their potential is limitless.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 pt-4">
            <button className="bg-secondary text-white px-12 py-5 rounded-full font-800 text-lg hover:translate-y-[-4px] transition-all shadow-xl hidden">
              Apply for Admission
            </button>
            <button onClick={() => window.open('https://maps.app.goo.gl/VUJPzKf618FGPyRd6', '_blank')} className="bg-white/30 backdrop-blur-md text-secondary border border-white/20 px-12 py-5 rounded-full font-800 text-lg hover:bg-white/50 transition-all">
              Schedule a Visit
            </button>
          </div>
        </motion.div>
      </section>
    </motion.div>
  );
};

export default About;
