import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, MapPin, Phone, Facebook, Linkedin, Twitter, Instagram } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-900 text-slate-300 pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
        <div className="space-y-6">
          <Link to="/" className="flex items-center gap-2 text-white">
            <div className="w-10 h-10 bg-brand-accent rounded-lg flex items-center justify-center font-bold text-xl text-white">
              JJ
            </div>
            <span className="font-display font-bold text-xl tracking-tight">
              JJ Multi Solutions
            </span>
          </Link>
          <p className="text-slate-400 leading-relaxed">
            Leading digital transformation and innovation in Upington, Northern Cape. Bridging the gap through technology.
          </p>
          <div className="flex gap-4">
            <a href="#" className="hover:text-brand-accent transition-colors"><Facebook className="w-5 h-5" /></a>
            <a href="#" className="hover:text-brand-accent transition-colors"><Linkedin className="w-5 h-5" /></a>
            <a href="#" className="hover:text-brand-accent transition-colors"><Twitter className="w-5 h-5" /></a>
            <a href="#" className="hover:text-brand-accent transition-colors"><Instagram className="w-5 h-5" /></a>
          </div>
        </div>

        <div>
          <h4 className="text-white font-display font-bold mb-6">Quick Links</h4>
          <ul className="space-y-4">
            <li><Link to="/about" className="hover:text-brand-accent transition-colors">About Us</Link></li>
            <li><Link to="/services" className="hover:text-brand-accent transition-colors">Our Services</Link></li>
            <li><Link to="/platform" className="hover:text-brand-accent transition-colors">Innovation Platform</Link></li>
            <li><Link to="/projects" className="hover:text-brand-accent transition-colors">Projects</Link></li>
            <li><Link to="/contact" className="hover:text-brand-accent transition-colors">Contact</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-white font-display font-bold mb-6">Services</h4>
          <ul className="space-y-4">
            <li><Link to="/services" className="hover:text-brand-accent transition-colors">Innovation Support</Link></li>
            <li><Link to="/services" className="hover:text-brand-accent transition-colors">Maker Lab</Link></li>
            <li><Link to="/services" className="hover:text-brand-accent transition-colors">ICT Solutions</Link></li>
            <li><Link to="/services" className="hover:text-brand-accent transition-colors">Software Tools</Link></li>
            <li><Link to="/services" className="hover:text-brand-accent transition-colors">Web Hosting</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-white font-display font-bold mb-6">Contact Us</h4>
          <ul className="space-y-4">
            <li className="flex gap-3">
              <MapPin className="w-5 h-5 text-brand-accent shrink-0" />
              <span>Upington, Northern Cape, South Africa</span>
            </li>
            <li className="flex gap-3">
              <Phone className="w-5 h-5 text-brand-accent shrink-0" />
              <span>+27 (0) 54 123 4567</span>
            </li>
            <li className="flex gap-3">
              <Mail className="w-5 h-5 text-brand-accent shrink-0" />
              <span>sales@jjmultisolutions.co.za</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-slate-500">
        <p>© {currentYear} JJ Multi Solutions (Pty) Ltd. All rights reserved.</p>
        <div className="flex gap-6">
          <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
          <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
        </div>
      </div>
    </footer>
  );
}
