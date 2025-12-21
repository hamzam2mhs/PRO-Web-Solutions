import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { createPageUrl } from './utils';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function Layout({ children, currentPageName }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <div className="min-h-screen bg-slate-950">
      {/* Navigation */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-slate-950/80 backdrop-blur-lg border-b border-slate-800' : 'bg-transparent'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link to={createPageUrl('Home')} className="flex items-center space-x-2">
              <div className="text-2xl font-bold">
                <span className="text-white">Pro</span>
                <span className="text-blue-500">.</span>
              </div>
              <div className="hidden sm:block text-xs text-slate-400 border-l border-slate-700 pl-3">
                Free Website<br/>Solutions
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              <button onClick={() => scrollToSection('services')} className="text-slate-300 hover:text-white transition-colors">
                Services
              </button>
              <button onClick={() => scrollToSection('process')} className="text-slate-300 hover:text-white transition-colors">
                Process
              </button>
              <button onClick={() => scrollToSection('about')} className="text-slate-300 hover:text-white transition-colors">
                About
              </button>
              <button onClick={() => scrollToSection('faq')} className="text-slate-300 hover:text-white transition-colors">
                FAQ
              </button>
              <button onClick={() => scrollToSection('contact')} className="text-slate-300 hover:text-white transition-colors">
                Contact
              </button>
              <Button 
                onClick={() => scrollToSection('contact')}
                className="bg-blue-600 hover:bg-blue-700 text-white"
              >
                Get Free Consultation
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden text-white p-2"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-slate-900 border-t border-slate-800">
            <div className="px-4 py-6 space-y-4">
              <button onClick={() => scrollToSection('services')} className="block w-full text-left text-slate-300 hover:text-white transition-colors py-2">
                Services
              </button>
              <button onClick={() => scrollToSection('process')} className="block w-full text-left text-slate-300 hover:text-white transition-colors py-2">
                Process
              </button>
              <button onClick={() => scrollToSection('about')} className="block w-full text-left text-slate-300 hover:text-white transition-colors py-2">
                About
              </button>
              <button onClick={() => scrollToSection('faq')} className="block w-full text-left text-slate-300 hover:text-white transition-colors py-2">
                FAQ
              </button>
              <button onClick={() => scrollToSection('contact')} className="block w-full text-left text-slate-300 hover:text-white transition-colors py-2">
                Contact
              </button>
              <Button 
                onClick={() => scrollToSection('contact')}
                className="w-full bg-blue-600 hover:bg-blue-700 text-white"
              >
                Get Free Consultation
              </Button>
            </div>
          </div>
        )}
      </nav>

      {/* Main Content */}
      <main>{children}</main>

      {/* Footer */}
      <footer className="bg-slate-950 border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="col-span-1">
              <div className="text-2xl font-bold mb-4">
                <span className="text-white">Pro</span>
                <span className="text-blue-500">.</span>
              </div>
              <p className="text-slate-400 text-sm">
                Building professional websites for small businesses & startups across Canada.
              </p>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Services</h4>
              <ul className="space-y-2 text-slate-400 text-sm">
                <li>Website Development</li>
                <li>AWS Cloud Hosting</li>
                <li>Mobile Apps</li>
                <li>Digital Marketing</li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-slate-400 text-sm">
                <li><button onClick={() => scrollToSection('about')}>About Us</button></li>
                <li><button onClick={() => scrollToSection('process')}>How It Works</button></li>
                <li><button onClick={() => scrollToSection('faq')}>FAQ</button></li>
                <li><button onClick={() => scrollToSection('contact')}>Contact</button></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Contact</h4>
              <ul className="space-y-2 text-slate-400 text-sm">
                <li>Calgary, AB, Canada</li>
                <li>inquire@prowebsolutions.ca</li>
                <li>+1 (204) 952-8742</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-slate-800 mt-12 pt-8 text-center text-slate-500 text-sm">
            © 2024 Pro Web Solutions. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}