import React, { useState, useEffect } from 'react';
import { Menu, X, FileText } from 'lucide-react';
import { CrownDoodle } from './StadiumGraphics';
import { portfolioData } from '../data/portfolioData';

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Experience', href: '#experience' },
    { name: 'Contact', href: '#contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      const sections = ['home', 'about', 'skills', 'projects', 'experience', 'contact'];
      const scrollPosition = window.scrollY + 140;

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#070a0e]/90 backdrop-blur-md border-b border-slate-800/80 py-3 shadow-lg shadow-black/60'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo matching the reference: Crown + "Rajas Ikharkar." */}
          <a
            href="#home"
            className="group flex items-center gap-1.5 focus:outline-none focus:ring-1 focus:ring-amber-400 rounded-lg py-1"
            aria-label="Rajas Ikharkar"
          >
            <div className="flex flex-col">
              <CrownDoodle className="w-5 h-4 text-amber-400 -mb-1 ml-1 group-hover:scale-110 transition-transform" />
              <span className="font-handwriting text-2xl sm:text-3xl text-white font-bold tracking-wide group-hover:text-amber-300 transition-colors">
                Rajas Ikharkar.
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-6 lg:gap-8">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.substring(1);
              return (
                <a
                  key={link.name}
                  href={link.href}
                  className={`relative text-xs sm:text-sm font-medium tracking-wide transition-colors py-1 focus:outline-none focus:text-amber-400 ${
                    isActive
                      ? 'text-amber-400 font-semibold'
                      : 'text-slate-300 hover:text-white'
                  }`}
                >
                  {link.name}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-amber-400 rounded-full" />
                  )}
                </a>
              );
            })}

            {/* Resume button */}
            <a
              href={portfolioData.personal.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full text-xs font-semibold bg-amber-400 text-slate-950 hover:bg-amber-300 transition-all shadow-gold-pill"
            >
              <FileText className="w-3.5 h-3.5" />
              <span>Resume</span>
            </a>
          </nav>

          {/* Mobile Actions */}
          <div className="flex items-center gap-3 md:hidden">
            <a
              href={portfolioData.personal.resumeUrl}
              className="px-3 py-1 text-xs font-semibold rounded-full bg-amber-400 text-slate-950"
            >
              Resume
            </a>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg bg-slate-900 border border-slate-800 text-slate-300 hover:text-white focus:outline-none focus:ring-2 focus:ring-amber-400"
              aria-expanded={mobileMenuOpen}
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5 text-amber-400" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b border-slate-800 bg-[#070a0e]/98 backdrop-blur-xl px-4 pt-3 pb-6 space-y-2 mt-2">
          {navLinks.map((link) => {
            const isActive = activeSection === link.href.substring(1);
            return (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`block px-3 py-2.5 rounded-xl text-sm font-medium tracking-wide transition-colors ${
                  isActive
                    ? 'bg-amber-400/15 text-amber-300 border-l-4 border-amber-400'
                    : 'text-slate-300 hover:bg-slate-900 hover:text-white'
                }`}
              >
                {link.name}
              </a>
            );
          })}
        </div>
      )}
    </header>
  );
};

export default Navbar;
