import React from 'react';
import { Link } from 'react-router-dom';
import { Instagram, Facebook, Twitter, MapPin, Mail, Phone } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-primary text-bg pt-20 pb-10">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div className="space-y-4">
            <h3 className="text-3xl font-serif text-secondary">Brahma Kalasha</h3>
            <p className="text-bg/80 leading-relaxed text-sm">
              Sacred food for everyday moments. Bringing temple-inspired care to modern catering.
            </p>
            <div className="flex gap-4 pt-4">
              <a href="#" className="text-secondary hover:text-white transition-colors"><Instagram size={20} /></a>
              <a href="#" className="text-secondary hover:text-white transition-colors"><Facebook size={20} /></a>
              <a href="#" className="text-secondary hover:text-white transition-colors"><Twitter size={20} /></a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-serif text-xl mb-6 text-white">Explore</h4>
            <ul className="space-y-3 text-sm text-bg/80">
              <li><Link to="/about" className="hover:text-secondary transition-colors">Our Story</Link></li>
              <li><Link to="/menu" className="hover:text-secondary transition-colors">Menus</Link></li>
              <li><Link to="/catering" className="hover:text-secondary transition-colors">Catering</Link></li>
              <li><Link to="/events" className="hover:text-secondary transition-colors">Events</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-serif text-xl mb-6 text-white">Services</h4>
            <ul className="space-y-3 text-sm text-bg/80">
              <li><Link to="/catering" className="hover:text-secondary transition-colors">Corporate Lunch</Link></li>
              <li><Link to="/catering" className="hover:text-secondary transition-colors">Wedding Feasts</Link></li>
              <li><Link to="/restaurant" className="hover:text-secondary transition-colors">Private Dining</Link></li>
              <li><Link to="/menu" className="hover:text-secondary transition-colors">Cloud Kitchen</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-serif text-xl mb-6 text-white">Visit Us</h4>
            <ul className="space-y-4 text-sm text-bg/80">
              <li className="flex items-start gap-3">
                <MapPin className="text-secondary mt-1 shrink-0" size={16} />
                <span>124, 80ft Road, Indiranagar,<br />Bangalore, KA 560038</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="text-secondary shrink-0" size={16} />
                <span>+91 98765 43210</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="text-secondary shrink-0" size={16} />
                <span>namaste@brahmakalasha.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-bg/40">
          <p>© 2024 Brahma Kalasha. All rights reserved.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-white">Privacy Policy</a>
            <a href="#" className="hover:text-white">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;