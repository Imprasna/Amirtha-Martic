
import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Youtube, Instagram } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900 text-white pt-24 pb-12 mt-12">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center shadow-sm">
                <span className="material-icons text-slate-900">school</span>
              </div>
              <span className="text-xl font-800 tracking-tight text-white uppercase font-display">
                Amirtha<span className="text-primary">Matric</span>
              </span>
            </div>
            <p className="text-slate-400 mb-8 text-sm leading-relaxed">
              Nurturing curiosity, fostering leadership, and preparing students for the world of tomorrow.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary hover:text-slate-900 transition-all group">
                <Facebook size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary hover:text-slate-900 transition-all group">
                <Youtube size={20} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary hover:text-slate-900 transition-all group">
                <Instagram size={18} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-sm font-bold uppercase tracking-widest mb-8 text-white">Quick Links</h4>
            <ul className="space-y-4 text-slate-400 text-sm">
              <li><Link to="#" className="hover:text-primary transition-colors">Career Opportunities</Link></li>
              <li><Link to="#" className="hover:text-primary transition-colors">Financial Aid</Link></li>
              <li><Link to="#" className="hover:text-primary transition-colors">Student Health</Link></li>
              <li><Link to="#" className="hover:text-primary transition-colors">Safety & Security</Link></li>
              <li><Link to="/contact" className="hover:text-primary transition-colors">Contact Us</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-bold uppercase tracking-widest mb-8 text-white">Explore</h4>
            <ul className="space-y-4 text-slate-400 text-sm">
              <li><Link to="/contact" className="hover:text-primary transition-colors">Request Info</Link></li>
              <li><Link to="#" className="hover:text-primary transition-colors">Virtual Tour</Link></li>
              <li><Link to="/gallery" className="hover:text-primary transition-colors">School Shop</Link></li>
              <li><Link to="#" className="hover:text-primary transition-colors">Events Calendar</Link></li>
              <li><Link to="#" className="hover:text-primary transition-colors">Summer Programs</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-bold uppercase tracking-widest mb-8 text-white">Newsletter</h4>
            <p className="text-slate-400 mb-6 text-sm">Stay updated with the latest news and event notifications.</p>
            <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
              <div className="relative">
                <input 
                  type="email" 
                  placeholder="Email address"
                  className="w-full bg-white/10 border-transparent rounded-full px-6 py-4 focus:ring-primary focus:border-primary text-white text-sm focus:outline-none transition-all"
                />
              </div>
              <button 
                type="submit"
                className="w-full bg-primary text-slate-900 font-bold py-4 rounded-full hover:scale-[1.02] transition-transform cta-shadow text-xs uppercase tracking-widest"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        <div className="pt-12 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-slate-500 text-[11px] font-medium">© 2024 Amirtha Matric School. All rights reserved.</p>
          <div className="flex gap-8 text-[11px] font-medium text-slate-500">
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
