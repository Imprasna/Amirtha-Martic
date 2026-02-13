
import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Youtube, Instagram } from 'lucide-react';
import Logo from '../assets/logo.png';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900 text-white pt-24 pb-12">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 gap-12 mb-16 justify-items-center">
          <div className="col-span-1 flex flex-col items-center">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center shadow-sm">
                <img src={Logo} alt="Amirtha Matriculation School logo" className="w-9 h-9 rounded" />
              </div>
              <span className="text-xl font-800 tracking-tight text-white uppercase font-display">
                Amirtha<span className="text-primary">School</span>
              </span>
            </div>
            <p className="text-slate-400 mb-8 text-sm leading-relaxed text-center">
              Nurturing curiosity, fostering leadership, and preparing students for the world of tomorrow.
            </p>
            <div className="flex gap-4 justify-center">
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary hover:text-slate-900 transition-all group">
                <Facebook size={18} />
              </a>
              <a href="https://www.youtube.com/@amirthamarticschool" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary hover:text-slate-900 transition-all group">
                <Youtube size={20} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary hover:text-slate-900 transition-all group">
                <Instagram size={18} />
              </a>
            </div>
          </div>
        </div>

        <div className="pt-12 border-t border-white/10 flex flex-col md:flex-row justify-center md:justify-between items-center gap-6 text-center md:text-left">
          <p className="text-slate-500 text-[11px] font-medium">© {new Date().getFullYear()} Amirtha School. All rights reserved.</p>
          <div className="flex gap-8 text-[11px] font-medium text-slate-500 flex-wrap justify-center md:justify-start">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-white transition-colors">Accessibility</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
