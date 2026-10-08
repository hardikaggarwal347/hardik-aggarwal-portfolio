import React, { useState, useEffect } from 'react';
import { Download, Menu, X } from 'lucide-react';
import { portfolioData } from '../data/portfolio';

const NAV_ITEMS = [
  { label: 'HOME', href: '#home' },
  { label: 'ABOUT', href: '#about' },
  { label: 'EDUCATION', href: '#education' },
  { label: 'PROJECTS', href: '#projects' },
  { label: 'EXPERIENCE', href: '#experience' },
  { label: 'SKILLS', href: '#skills' },
  { label: 'CERTIFICATIONS', href: '#certifications' },
  { label: 'COA TOOL', href: '#coa-tool' },
  { label: 'RESUME', href: '#resume' },
  { label: 'CONTACT', href: '#contact' },
];

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      // Track active section
      const sections = NAV_ITEMS.map((item) => item.href.substring(1));
      const scrollPosition = window.scrollY + 120;

      for (let i = sections.length - 1; i >= 0; i--) {
        const sectionEl = document.getElementById(sections[i]);
        if (sectionEl) {
          const top = sectionEl.offsetTop;
          if (scrollPosition >= top) {
            setActiveSection(sections[i]);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-md shadow-sm border-b border-slate-200/80 py-3'
          : 'bg-white/80 backdrop-blur-sm border-b border-slate-100 py-4.5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Brand Wordmark (Left) */}
          <a
            href="#home"
            onClick={(e) => {
              e.preventDefault();
              handleNavClick('#home');
            }}
            className="text-lg sm:text-xl font-bold tracking-tight text-slate-900 hover:text-blue-600 transition-colors flex items-center gap-2 group"
          >
            <span className="w-2.5 h-2.5 rounded-full bg-gradient-to-tr from-blue-600 to-cyan-400 group-hover:scale-125 transition-transform" />
            <span className="font-extrabold tracking-wider">{portfolioData.personal.name.toUpperCase()}</span>
          </a>

          {/* Desktop Navigation Links (Center) */}
          <nav
            aria-label="Main Navigation"
            className="hidden xl:flex items-center gap-6 2xl:gap-7 text-xs font-semibold tracking-wider text-slate-600"
          >
            {NAV_ITEMS.map((item) => {
              const isActive = activeSection === item.href.substring(1);
              return (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(item.href);
                  }}
                  className={`transition-colors py-1 relative ${
                    isActive
                      ? 'text-blue-600 font-bold'
                      : 'hover:text-slate-900 text-slate-600'
                  }`}
                >
                  {item.label}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-full" />
                  )}
                </a>
              );
            })}
          </nav>

          {/* Right Action: Download CV & Mobile Toggle */}
          <div className="flex items-center gap-3">
            <a
              href={portfolioData.personal.resumePath}
              download="25BAI10001_Hardik_Resume.pdf"
              className="inline-flex items-center justify-center gap-2 px-4 py-2 text-xs font-bold text-white bg-blue-600 hover:bg-blue-700 active:bg-blue-800 rounded-lg shadow-sm hover:shadow transition-all whitespace-nowrap cursor-pointer"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Download CV</span>
            </a>

            {/* Mobile Hamburger Button */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="xl:hidden p-2 rounded-lg text-slate-600 hover:text-slate-900 hover:bg-slate-100 transition-colors cursor-pointer"
              aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      {mobileMenuOpen && (
        <div className="xl:hidden bg-white/98 backdrop-blur-lg border-b border-slate-200 shadow-xl transition-all">
          <div className="max-w-7xl mx-auto px-4 py-4 space-y-1">
            {NAV_ITEMS.map((item) => {
              const isActive = activeSection === item.href.substring(1);
              return (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(item.href);
                  }}
                  className={`block px-3 py-2.5 rounded-lg text-xs font-semibold tracking-wider transition-colors ${
                    isActive
                      ? 'bg-blue-50 text-blue-600 font-bold'
                      : 'text-slate-700 hover:bg-slate-50 hover:text-slate-900'
                  }`}
                >
                  {item.label}
                </a>
              );
            })}
            <div className="pt-2 pb-1 border-t border-slate-100 flex items-center justify-between px-3 text-xs text-slate-500">
              <span>{portfolioData.personal.university}</span>
              <span className="font-mono text-blue-600 font-semibold">{portfolioData.personal.uid}</span>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
