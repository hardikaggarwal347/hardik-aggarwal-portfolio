/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Education } from './components/Education';
import { Projects } from './components/Projects';
import { Experience } from './components/Experience';
import { Skills } from './components/Skills';
import { Certifications } from './components/Certifications';
import { CoaTool } from './components/CoaTool';
import { HobbiesLanguages } from './components/HobbiesLanguages';
import { ResumeSection } from './components/ResumeSection';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { BackToTop } from './components/BackToTop';

export default function App() {
  return (
    <div className="min-h-screen bg-white text-slate-900 flex flex-col selection:bg-blue-100 selection:text-blue-700">
      {/* Sticky Top Navigation */}
      <Navbar />

      {/* Main Sections */}
      <main className="flex-1">
        <Hero />
        <About />
        <Education />
        <Projects />
        <Experience />
        <Skills />
        <Certifications />
        <CoaTool />
        <HobbiesLanguages />
        <ResumeSection />
        <Contact />
      </main>

      {/* Minimal Premium Footer */}
      <Footer />

      {/* Back to top scroll button */}
      <BackToTop />
    </div>
  );
}
