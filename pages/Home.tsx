
import React, { useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { 
  ChevronLeft, 
  ChevronRight,
  ArrowRight,
  CalendarDays,
  LayoutDashboard,
  MapPin,
  Sparkles,
  Pencil,
  Book,
  Play,
  X,
  Library
} from 'lucide-react';
import { fadeIn, staggerContainer, scaleUp, floating, slideIn } from '../constants';
import CE from '../assets/ce.jpg';

const CAMPUS_LIFE_DATA = [
  { tag: 'Arts', tagColor: 'bg-primary', title: 'Creative Expression', desc: 'Our students showcase their theatrical and artistic talents during the Annual Cultural week.', image: {CE} },
  { tag: 'Sports', tagColor: 'bg-accent', title: 'Athletics & Grit', desc: 'Fostering teamwork and physical excellence on our state-of-the-art sports complex.', image: 'https://images.unsplash.com/photo-1505238680356-667803448bb6?q=80&w=1000&auto=format&fit=crop' },
  { tag: 'Academic', tagColor: 'bg-slate-900', title: 'Interactive Learning', desc: 'Where concepts come to life through practical experiments and peer collaboration.', image: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?q=80&w=1000&auto=format&fit=crop' },
  { tag: 'Library', tagColor: 'bg-primary', title: 'World of Knowledge', desc: 'Discover a vast collection of books and digital resources in our modern library.', image: 'https://images.unsplash.com/photo-1521587760476-6c12a4b040da?q=80&w=1000&auto=format&fit=crop' },
  { tag: 'Campus', tagColor: 'bg-accent', title: 'Lush Green Spaces', desc: 'A serene environment that inspires peace and focus for all our young learners.', image: 'https://images.unsplash.com/photo-1523580494863-6f3031224c94?q=80&w=1000&auto=format&fit=crop' },
];

const PlayfulDoodle = () => (
  <motion.div 
    className="relative w-24 h-24"
    animate={{ rotate: [0, 5, -5, 0], scale: [1, 1.05, 1] }}
    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
  >
    <motion.svg viewBox="0 0 100 100" className="w-full h-full text-primary fill-none stroke-current stroke-[3]">
      <motion.path 
        d="M20,50 Q40,20 60,50 T100,50" 
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 2, repeat: Infinity }}
      />
      <circle cx="20" cy="50" r="5" className="fill-current" />
      <circle cx="60" cy="50" r="5" className="fill-current" />
      <motion.path 
        d="M30,30 L70,70 M70,30 L30,70" 
        strokeWidth="2"
        animate={{ opacity: [0, 1, 0] }}
        transition={{ duration: 1.5, repeat: Infinity }}
      />
    </motion.svg>
    <motion.div 
      className="absolute -top-2 -right-2"
      animate={{ y: [-5, 5, -5] }}
      transition={{ duration: 2, repeat: Infinity }}
    >
      <Sparkles className="text-accent" size={20} />
    </motion.div>
  </motion.div>
);

const Home: React.FC = () => {
  const navigate = useNavigate();
  const [carouselIndex, setCarouselIndex] = useState(0);
  const [isVideoOpen, setIsVideoOpen] = useState(false);
  const carouselRef = useRef<HTMLDivElement>(null);
  const heroRef = useRef<HTMLDivElement>(null);
  const visitRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"]
  });

  const { scrollYProgress: visitScroll } = useScroll({
    target: visitRef,
    offset: ["start end", "end start"]
  });

  const heroBgY = useTransform(scrollYProgress, [0, 1], ["0%", "25%"]);
  const heroTextY = useTransform(scrollYProgress, [0, 1], ["0%", "55%"]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);
  
  const visitBgY = useTransform(visitScroll, [0, 1], ["-15%", "15%"]);

  const nextSlide = () => {
    setCarouselIndex((prev) => (prev + 1) % CAMPUS_LIFE_DATA.length);
  };

  const prevSlide = () => {
    setCarouselIndex((prev) => (prev - 1 + CAMPUS_LIFE_DATA.length) % CAMPUS_LIFE_DATA.length);
  };

  useEffect(() => {
    if (carouselRef.current) {
      const cardWidth = carouselRef.current.offsetWidth / (window.innerWidth > 768 ? 3 : 1);
      const scrollAmount = carouselIndex * cardWidth;
      carouselRef.current.scrollTo({
        left: scrollAmount,
        behavior: 'smooth'
      });
    }
  }, [carouselIndex]);

  return (
    <motion.div 
      initial="initial"
      animate="animate"
      className="overflow-x-hidden"
    >
      {/* Hero Section */}
      <section ref={heroRef} className="relative h-screen min-h-[700px] flex items-center justify-center overflow-hidden">
        {/* Parallax Background */}
        <motion.div style={{ y: heroBgY }} className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/10 to-background-light dark:to-background-dark/80 z-10"></div>
          <img 
            src="https://images.unsplash.com/photo-1546410531-bb4caa6b424d?q=80&w=2000&auto=format&fit=crop" 
            alt="Amirtha Matric School Vibrant Students" 
            className="w-full h-full object-cover"
          />
        </motion.div>

        <motion.div 
          style={{ y: heroTextY, opacity: heroOpacity }}
          variants={staggerContainer}
          className="relative z-20 text-center px-6 max-w-5xl mx-auto"
        >
          <motion.span variants={fadeIn} className="inline-block px-5 py-2 mb-6 rounded-full bg-primary/40 backdrop-blur-md text-white font-bold text-xs tracking-widest uppercase border border-primary/20">
            Inspiring Future Leaders
          </motion.span>
          <motion.h1 variants={fadeIn} className="text-6xl md:text-9xl font-900 text-white mb-8 leading-[0.9] tracking-tighter font-display drop-shadow-2xl">
            Amirtha Matric <br /> <span className="text-primary italic">School</span>
          </motion.h1>
          <motion.p variants={fadeIn} className="text-lg md:text-2xl text-white/95 mb-10 max-w-3xl mx-auto font-medium leading-relaxed drop-shadow-xl">
            Building a legacy of academic brilliance and community values. Empowering your child to excel in an ever-changing world.
          </motion.p>
          
          <motion.div variants={fadeIn} className="flex flex-col md:flex-row items-center justify-center gap-6">
            {/* <button 
              onClick={() => navigate('/admissions')}
              className="bg-primary text-secondary px-12 py-5 rounded-full font-800 text-lg hover:translate-y-[-4px] hover:shadow-2xl hover:shadow-primary/40 active:translate-y-[0px] transition-all cta-shadow flex items-center gap-3"
            >
              Apply Now <ArrowRight size={22} />
            </button> */}
            <button 
              onClick={() => setIsVideoOpen(true)}
              className="bg-white/95 backdrop-blur-md border border-white/30 text-slate-900 px-10 py-5 rounded-full font-800 text-lg hover:bg-white transition-all flex items-center gap-3 shadow-lg"
            >
              <Play size={20} fill="currentColor" /> Virtual Tour
            </button>
          </motion.div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2 text-slate-900 font-bold"
        >
          <span className="text-[10px] uppercase tracking-[0.2em] drop-shadow-sm">Discover More</span>
          <div className="w-px h-12 bg-slate-900/30 relative overflow-hidden rounded-full">
            <motion.div 
              animate={{ y: [0, 48] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
              className="absolute top-0 left-0 w-full h-1/2 bg-slate-900"
            />
          </div>
        </motion.div>
      </section>

      {/* Video Modal */}
      <AnimatePresence>
        {isVideoOpen && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-md flex items-center justify-center p-4 md:p-10"
          >
            <button 
              onClick={() => setIsVideoOpen(false)}
              className="absolute top-6 right-6 text-white bg-white/10 p-4 rounded-full hover:bg-white/20 transition-colors z-10"
            >
              <X size={32} />
            </button>
            <motion.div 
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              className="relative w-full max-w-6xl aspect-video rounded-3xl overflow-hidden shadow-2xl bg-slate-900"
            >
              <iframe 
                className="absolute inset-0 w-full h-full"
                src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1&mute=0" 
                title="Amirtha Matric School Tour"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Daily Highlights - KEEPING THE BORDERS HERE */}
      <section className="py-24 px-6 bg-background-light dark:bg-background-dark">
        <motion.div 
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="max-w-7xl mx-auto"
        >
          <motion.div variants={fadeIn} className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
            <div className="max-w-xl">
              <h2 className="text-4xl font-800 mb-4 dark:text-white font-display">School Daily Life</h2>
              <p className="text-slate-600 dark:text-slate-400 text-lg">
                Explore the tools and highlights that make every day special at our campus.
              </p>
            </div>
          </motion.div>

          {/* Grid with thick black borders for visibility - As specifically requested */}
          <div className="grid grid-cols-1 md:grid-cols-4 grid-rows-2 gap-8 h-auto md:h-[650px]">
            <motion.div 
              variants={scaleUp}
              className="md:col-span-2 md:row-span-2 bg-white dark:bg-slate-900 rounded-[2.5rem] p-10 flex flex-col justify-between overflow-hidden relative group border-[3px] border-slate-900 shadow-xl"
            >
              <div className="absolute -top-10 -right-10 w-64 h-64 bg-primary/10 organic-blob group-hover:scale-110 transition-transform duration-700"></div>
              <div className="relative z-10">
                <div className="w-16 h-16 bg-primary/20 rounded-2xl flex items-center justify-center mb-8 border-2 border-slate-900/10">
                  <Sparkles className="text-primary" size={36} />
                </div>
                <h3 className="text-4xl font-900 mb-6 text-slate-900 dark:text-white font-display">Student World</h3>
                <p className="text-slate-600 dark:text-slate-400 text-xl font-medium leading-relaxed">
                  Empowering students to take charge of their own learning journey through modern technology.
                </p>
              </div>
              <div className="relative z-10 flex items-end justify-between mt-10">
                <div className="space-y-4">
                  <PlayfulDoodle />
                </div>
                <div className="flex -space-x-4">
                  {[1, 2, 3, 4].map(i => (
                    <motion.div key={i} whileHover={{ y: -10, zIndex: 10 }} className="w-14 h-14 rounded-full border-[3px] border-slate-900 bg-slate-200 overflow-hidden shadow-xl">
                      <img src={`https://i.pravatar.cc/150?u=school_child${i}`} alt="Student" className="w-full h-full object-cover" />
                    </motion.div>
                  ))}
                  <div className="w-14 h-14 rounded-full border-[3px] border-slate-900 bg-primary flex items-center justify-center text-xs font-900 text-secondary shadow-xl">+500</div>
                </div>
              </div>
            </motion.div>

            <motion.div variants={scaleUp} whileHover={{ y: -5 }} className="md:col-span-1 md:row-span-1 bg-accent/10 dark:bg-accent/5 rounded-[2.5rem] p-8 flex flex-col justify-between group border-[3px] border-slate-900 shadow-lg">
              <div className="w-14 h-14 bg-white dark:bg-slate-800 rounded-2xl flex items-center justify-center shadow-md border-2 border-slate-900/10">
                <CalendarDays className="text-accent" size={28} />
              </div>
              <div>
                <h3 className="text-2xl font-900 mb-2 text-slate-900 dark:text-white font-display leading-tight">Academy Hub</h3>
                <p className="text-sm font-bold text-slate-500 uppercase tracking-widest">Events & Announcements</p>
              </div>
            </motion.div>

            <motion.div variants={scaleUp} whileHover={{ y: -5 }} className="md:col-span-1 md:row-span-1 bg-white dark:bg-slate-900 rounded-[2.5rem] p-8 flex flex-col justify-between group border-[3px] border-slate-900 shadow-lg">
              <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center shadow-md border-2 border-slate-900/10">
                <Library className="text-primary" size={28} />
              </div>
              <div>
                <h3 className="text-2xl font-900 mb-2 text-slate-900 dark:text-white font-display leading-tight">Knowledge Hub</h3>
                <p className="text-sm font-bold text-slate-500 uppercase tracking-widest">Books & Digital Library</p>
              </div>
            </motion.div>

            <motion.div variants={scaleUp} className="md:col-span-2 md:row-span-1 bg-secondary rounded-[2.5rem] p-10 flex items-center justify-between group overflow-hidden border-[3px] border-slate-900 shadow-xl">
              <div className="relative z-10">
                <h3 className="text-3xl font-900 text-white mb-4 font-display">Student Leadership</h3>
                <p className="text-slate-400 mb-8 text-lg font-medium">Fostering tomorrow's leaders</p>
                <motion.button whileHover={{ scale: 1.05 }} className="bg-primary text-white px-8 py-3 rounded-full font-900 text-xs uppercase tracking-[0.2em] border-2 border-slate-900">
                  Read More
                </motion.button>
              </div>
              <motion.div animate={{ rotate: [0, 5, 0] }} transition={{ duration: 4, repeat: Infinity }} className="text-8xl font-900 text-white/5 group-hover:scale-110 transition-transform flex gap-4 pr-6 opacity-30">
                <Pencil size={100} />
                <Book size={100} />
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* Student Journey - REMOVING BORDERS */}
      <section className="py-24 bg-white dark:bg-background-dark/50 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-20 items-center">
            <div className="relative">
              <motion.div variants={slideIn('left')} initial="initial" whileInView="animate" viewport={{ once: true }} className="relative z-10 w-4/5 aspect-[4/5] rounded-[2.5rem] overflow-hidden shadow-2xl rotate-[-2deg]">
                <img src="https://images.unsplash.com/photo-1588072432836-e10032774350?q=80&w=1000&auto=format&fit=crop" alt="Student Studying" className="w-full h-full object-cover" />
              </motion.div>
              <motion.div variants={slideIn('right')} initial="initial" whileInView="animate" viewport={{ once: true }} className="absolute top-1/2 -right-12 w-3/5 aspect-square rounded-[2rem] overflow-hidden shadow-2xl rotate-[5deg] border-8 border-white dark:border-slate-800">
                <img src="https://images.unsplash.com/photo-1577896851231-70ef18881754?q=80&w=1000&auto=format&fit=crop" alt="Science Experiment" className="w-full h-full object-cover" />
              </motion.div>
              <motion.div variants={floating} animate="animate" className="absolute -bottom-10 -left-10 w-64 h-64 bg-primary/10 organic-blob -z-10"></motion.div>
            </div>

            <motion.div variants={staggerContainer} initial="initial" whileInView="animate" viewport={{ once: true }}>
              <motion.span variants={fadeIn} className="text-primary font-bold tracking-widest uppercase text-xs mb-4 block">The Path Ahead</motion.span>
              <motion.h2 variants={fadeIn} className="text-5xl font-800 mb-8 dark:text-white leading-tight font-display">Guided <span className="text-accent italic">Journey</span></motion.h2>
              <div className="space-y-8">
                {[
                  { id: '01', title: 'Foundation (K-5)', desc: 'Holistic growth through play, exploration, and fundamental skills.', color: 'primary' },
                  { id: '02', title: 'Nurture (6-8)', desc: 'Fostering specialized interests and building robust academic character.', color: 'accent' },
                  { id: '03', title: 'Mastery (9-12)', desc: 'Achieving excellence and preparing for top-tier higher education.', color: 'primary' }
                ].map((step, i) => (
                  <motion.div key={i} variants={fadeIn} className="flex gap-6 group">
                    <motion.div whileHover={{ scale: 1.1, rotate: 10 }} className={`flex-shrink-0 w-14 h-14 rounded-2xl ${step.color === 'primary' ? 'bg-primary/10 text-primary' : 'bg-accent/10 text-accent'} flex items-center justify-center font-bold text-lg shadow-sm group-hover:shadow-md transition-all`}>
                      {step.id}
                    </motion.div>
                    <div>
                      <h4 className="text-2xl font-800 mb-2 dark:text-white font-display leading-tight">{step.title}</h4>
                      <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed max-w-md">{step.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
              <motion.button variants={fadeIn} whileHover={{ scale: 1.05 }} className="mt-12 bg-secondary text-white dark:bg-primary dark:text-secondary px-10 py-4 rounded-full font-800 transition-transform cta-shadow flex items-center gap-3">
                Curriculum Details <ArrowRight size={20} />
              </motion.button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Campus Life - REMOVING BORDERS */}
      <section className="py-24 px-6 bg-slate-50 dark:bg-slate-950 overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-6">
            <div>
              <h2 className="text-5xl font-800 mb-4 dark:text-white font-display tracking-tight">Campus <span className="text-primary italic">Life</span></h2>
              <p className="text-slate-500 dark:text-slate-400 text-lg max-w-lg">Capturing memories that define the spirit of Amirtha Matric.</p>
            </div>
            <div className="flex gap-4">
              <button onClick={prevSlide} className="w-14 h-14 rounded-full border border-slate-200 dark:border-slate-800 flex items-center justify-center hover:bg-primary transition-all bg-white dark:bg-slate-900 shadow-sm"><ChevronLeft size={24} /></button>
              <button onClick={nextSlide} className="w-14 h-14 rounded-full border border-slate-200 dark:border-slate-800 flex items-center justify-center hover:bg-primary transition-all bg-white dark:bg-slate-900 shadow-sm"><ChevronRight size={24} /></button>
            </div>
          </motion.div>

          <div ref={carouselRef} className="flex no-scrollbar gap-10 pb-12 overflow-x-auto scroll-smooth snap-x snap-mandatory">
            {CAMPUS_LIFE_DATA.map((card, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} whileHover={{ y: -12 }} className="flex-shrink-0 w-full md:w-[calc(33.333%-1.66rem)] group snap-start cursor-pointer bg-white dark:bg-slate-900 rounded-[2.5rem] p-4 shadow-xl border border-slate-100 dark:border-slate-800 transition-all">
                <div className="h-[400px] rounded-[1.75rem] overflow-hidden mb-8 relative">
                  <img src={card.image} alt={card.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
                  <div className="absolute bottom-6 left-6"><span className={`${card.tagColor} text-white px-4 py-1.5 rounded-full text-[10px] font-900 uppercase tracking-[0.15em] shadow-lg`}>{card.tag}</span></div>
                </div>
                <div className="px-4 pb-4">
                  <h3 className="text-2xl font-800 mb-3 dark:text-white font-display leading-tight">{card.title}</h3>
                  <p className="text-slate-500 text-sm leading-relaxed line-clamp-2">{card.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Visit Our Campus - UPDATED WITH BEAUTIFUL BACKGROUND IMAGE */}
      <section ref={visitRef} className="py-24 px-6 bg-white dark:bg-background-dark">
        <motion.div 
          initial={{ opacity: 0, scale: 0.98 }} 
          whileInView={{ opacity: 1, scale: 1 }} 
          viewport={{ once: true }} 
          className="max-w-7xl mx-auto rounded-[3.5rem] overflow-hidden h-[650px] relative shadow-2xl"
        >
          {/* Enhanced Background with Parallax and Blur on the edges */}
          <motion.div style={{ y: visitBgY }} className="absolute inset-0 z-0 h-[120%] w-full">
            <img 
              src="https://images.unsplash.com/photo-1562774053-701939374585?q=80&w=2000&auto=format&fit=crop" 
              alt="Beautiful School Campus Building" 
              className="w-full h-full object-cover brightness-[0.55] contrast-[1.1]"
            />
            {/* Overlay Gradient for Text Readability and Depth */}
            <div className="absolute inset-0 bg-gradient-to-br from-secondary/60 via-transparent to-primary/30 z-10" />
            <div className="absolute inset-0 bg-black/20 z-10" />
          </motion.div>

          <div className="absolute inset-0 flex items-center justify-center p-6 z-20">
            <motion.div 
              whileHover={{ scale: 1.02, y: -5 }} 
              className="bg-white/95 dark:bg-slate-900/95 p-12 md:p-16 rounded-[3rem] shadow-2xl text-center max-w-lg border border-primary/20 backdrop-blur-xl"
            >
              <motion.div 
                animate={{ rotate: [0, 10, -10, 0] }}
                transition={{ duration: 5, repeat: Infinity }}
                className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-8 text-primary shadow-inner"
              >
                <MapPin size={32} />
              </motion.div>
              <h3 className="text-4xl font-800 mb-4 dark:text-white font-display tracking-tight leading-tight">Visit Our Campus</h3>
              <p className="text-slate-600 dark:text-slate-400 mb-10 text-lg leading-relaxed font-medium">Experience the excellence of Amirtha Matric firsthand. We'd love to show you around our beautiful facilities.</p>
              <button 
                onClick={() => navigate('/contact')}
                className="bg-primary text-white px-10 py-5 rounded-full font-800 w-full hover:scale-[1.03] active:scale-[0.98] transition-all cta-shadow text-lg border-2 border-primary/20"
              >
                Schedule Visit
              </button>
              <p className="text-slate-400 text-xs font-bold uppercase tracking-widest pt-6 border-t border-slate-100 dark:border-slate-800 mt-2">Unjalpalayam, Coimbatore, Tamil Nadu, India</p>
            </motion.div>
          </div>
        </motion.div>
      </section>
    </motion.div>
  );
};

export default Home;
