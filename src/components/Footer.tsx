import React from 'react';
import { Mail, Linkedin, Github, ArrowUp, Sparkles } from 'lucide-react';
import { portfolioData } from '../data/portfolio';

const FOOTER_LINKS = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Education', href: '#education' },
  { label: 'Projects', href: '#projects' },
  { label: 'Experience', href: '#experience' },
  { label: 'Skills', href: '#skills' },
  { label: 'Certifications', href: '#certifications' },
  { label: 'COA Tool', href: '#coa-tool' },
  { label: 'Resume', href: '#resume' },
  { label: 'Contact', href: '#contact' },
];

export const Footer: React.FC = () => {
  const handleScroll = (href: string) => {
    const el = document.querySelector(href);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-[#F0F7FF] border-t border-blue-100/70 pt-16 pb-12 text-slate-600">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8 pb-12 border-b border-blue-200/50">
          {/* Brand Info */}
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="w-2.5 h-2.5 rounded-full bg-gradient-to-tr from-blue-600 to-cyan-400" />
              <h2 className="text-xl font-extrabold tracking-wider text-slate-900">
                {portfolioData.personal.name.toUpperCase()}
              </h2>
            </div>
            <p className="text-xs sm:text-sm text-slate-600">
              Computer Science • {portfolioData.personal.specialization} Specialization
            </p>
            <p className="text-xs text-slate-500 font-medium mt-0.5">
              {portfolioData.personal.university}
            </p>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-3">
            <a
              href={`mailto:${portfolioData.personal.email}`}
              className="w-10 h-10 rounded-xl bg-white border border-blue-100 flex items-center justify-center text-slate-600 hover:text-blue-600 hover:border-blue-300 transition-colors shadow-xs"
              title="Email Hardik"
            >
              <Mail className="w-4 h-4" />
            </a>

            <a
              href={portfolioData.socialLinks.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-xl bg-white border border-blue-100 flex items-center justify-center text-slate-600 hover:text-blue-600 hover:border-blue-300 transition-colors shadow-xs"
              title="LinkedIn Profile: Hardik Aggarwal"
            >
              <Linkedin className="w-4 h-4" />
            </a>

            <a
              href={portfolioData.socialLinks.github}
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-xl bg-white border border-blue-100 flex items-center justify-center text-slate-600 hover:text-blue-600 hover:border-blue-300 transition-colors shadow-xs"
              title="GitHub Profile: hardikaggarwal347"
            >
              <Github className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* Section Links */}
        <div className="py-8 flex flex-wrap items-center justify-center gap-x-6 gap-y-3 text-xs font-semibold text-slate-600">
          {FOOTER_LINKS.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={(e) => {
                e.preventDefault();
                handleScroll(link.href);
              }}
              className="hover:text-blue-600 transition-colors py-1"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Bottom Copyright */}
        <div className="pt-8 border-t border-blue-200/50 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-4">
          <p>© 2026 Hardik Aggarwal. All rights reserved.</p>
          <p className="flex items-center gap-1.5 text-slate-400">
            <span>Clean & Bright Portfolio</span>
            <span>•</span>
            <span>Built with React, Vite & Tailwind CSS</span>
          </p>
        </div>
      </div>
    </footer>
  );
};
