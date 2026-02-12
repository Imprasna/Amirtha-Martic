
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ArrowRight } from 'lucide-react';
import Logo from '../assets/logo.png';

const NAVBAR_LINKS = [
  { label: 'About Us', href: '/about' },
  { label: 'Academics', href: '/academics' },
  // { label: 'Admissions', href: '/admissions' },
  { label: 'Gallery', href: '/gallery' },
];

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-6 py-4`}
    >
      <div className={`max-w-7xl mx-auto flex items-center justify-between px-8 py-3 rounded-full transition-all duration-300 ${
        scrolled ? 'bg-white/90 dark:bg-slate-900/90 backdrop-blur-md shadow-md border border-white/20' : 'bg-white/40 dark:bg-slate-900/40 backdrop-blur-md border border-white/10'
      }`}>
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2 group">
          <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center transition-transform group-hover:rotate-12 shadow-sm">
            {/* <span className="material-icons text-white">school</span> */}
            <img src={Logo} alt="Amirtha Matriculation School logo" className="w-9 h-9 rounded" />
          </div>
          <span className="text-xl font-800 tracking-tight text-slate-900 dark:text-white uppercase font-display">
            Amirtha<span className="text-primary font-900">School</span>
          </span>
        </Link>

        {/* Desktop Links - Centered */}
        <div className="hidden lg:flex items-center gap-10">
          {NAVBAR_LINKS.map((item) => (
            <Link
              key={item.label}
              to={item.href}
              className={`text-sm font-semibold transition-colors hover:text-primary ${
                location.pathname === item.href ? 'text-primary font-bold' : 'text-slate-800 dark:text-slate-100'
              }`}
            >
              {item.label}
            </Link>
          ))}
        </div>

        {/* CTA */}
        <div className="hidden md:flex items-center gap-4">
          <div className="px-8 py-4">&nbsp;</div>
          {/* <Link to="/admissions" className="bg-primary text-slate-900 px-6 py-2 rounded-full font-bold text-sm hover:scale-105 transition-transform cta-shadow">
            Apply Now
          </Link> */}
        </div>

        {/* Mobile Toggle */}
        <button className="lg:hidden text-slate-800 dark:text-white" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            className="lg:hidden absolute top-24 left-6 right-6 bg-white dark:bg-slate-900 rounded-[2rem] p-8 shadow-2xl overflow-hidden border border-slate-100 dark:border-slate-800"
          >
            <div className="flex flex-col gap-6">
              {NAVBAR_LINKS.map((item) => (
                <Link
                  key={item.label}
                  to={item.href}
                  className="text-xl font-800 font-display hover:text-primary transition-colors dark:text-white"
                >
                  {item.label}
                </Link>
              ))}
              <hr className="border-slate-100 dark:border-slate-800" />
              <div className="flex flex-col gap-4">
                {/* <Link to="/admissions" className="bg-primary text-slate-900 text-center py-4 rounded-full font-bold uppercase tracking-widest text-xs cta-shadow">
                  Apply Now
                </Link> */}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
