import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-surface dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          <div>
            <Link to="/" className="flex items-center gap-2 mb-6">
              <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center text-white font-bold text-xl">H</div>
              <span className="font-bold text-2xl tracking-tight text-primary">HomeFix</span>
            </Link>
            <p className="text-gray-500 dark:text-gray-400 mb-6">
              India's trusted home services booking platform. We connect homeowners with verified local professionals.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-gray-100 dark:bg-gray-800 flex items-center justify-center text-gray-600 dark:text-gray-400 hover:bg-primary hover:text-white transition-colors">
                <span className="font-bold">fb</span>
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-gray-100 dark:bg-gray-800 flex items-center justify-center text-gray-600 dark:text-gray-400 hover:bg-primary hover:text-white transition-colors">
                <span className="font-bold">tw</span>
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-gray-100 dark:bg-gray-800 flex items-center justify-center text-gray-600 dark:text-gray-400 hover:bg-primary hover:text-white transition-colors">
                <span className="font-bold">ig</span>
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-gray-100 dark:bg-gray-800 flex items-center justify-center text-gray-600 dark:text-gray-400 hover:bg-primary hover:text-white transition-colors">
                <span className="font-bold">yt</span>
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="font-bold text-lg mb-6">Company</h4>
            <ul className="space-y-4 text-gray-500 dark:text-gray-400">
              <li><Link to="/about" className="hover:text-primary transition-colors">About Us</Link></li>
              <li><Link to="/careers" className="hover:text-primary transition-colors">Careers</Link></li>
              <li><Link to="/blog" className="hover:text-primary transition-colors">Blog</Link></li>
              <li><Link to="/contact" className="hover:text-primary transition-colors">Contact</Link></li>
              <li><Link to="/join-as-pro" className="hover:text-primary transition-colors">Join as a Professional</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold text-lg mb-6">Services</h4>
            <ul className="space-y-4 text-gray-500 dark:text-gray-400">
              <li><Link to="/services" className="hover:text-primary transition-colors">Electrician</Link></li>
              <li><Link to="/services" className="hover:text-primary transition-colors">Plumber</Link></li>
              <li><Link to="/services" className="hover:text-primary transition-colors">AC Repair</Link></li>
              <li><Link to="/services" className="hover:text-primary transition-colors">Cleaning</Link></li>
              <li><Link to="/services" className="hover:text-primary transition-colors">View All Services</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold text-lg mb-6">Contact Us</h4>
            <ul className="space-y-4 text-gray-500 dark:text-gray-400">
              <li className="flex items-start gap-3">
                <MapPin size={20} className="text-primary shrink-0" />
                <span>123 Tech Park, Outer Ring Road, Bangalore - 560103</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={20} className="text-primary shrink-0" />
                <span>1800-123-4567</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={20} className="text-primary shrink-0" />
                <span>support@homefix.in</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-gray-200 dark:border-gray-800 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-gray-500">© {new Date().getFullYear()} HomeFix. All rights reserved.</p>
          <div className="flex gap-6 text-sm text-gray-500">
            <Link to="/privacy" className="hover:text-primary transition-colors">Privacy Policy</Link>
            <Link to="/terms" className="hover:text-primary transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
