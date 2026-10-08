import React from 'react';
import { ArrowDown, Download, Sparkles, GraduationCap, Building2, Fingerprint, Cpu, Mic, ScanFace, Code2, Linkedin, Github } from 'lucide-react';
import { portfolioData } from '../data/portfolio';

export const Hero: React.FC = () => {
  const scrollToProjects = () => {
    const el = document.getElementById('projects');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-[92vh] pt-28 pb-16 flex items-center justify-center overflow-hidden bg-white"
    >
      {/* Background Decorative Accents (Bright & Subtle) */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Soft Radial Glow */}
        <div className="absolute top-1/4 right-1/4 w-[500px] h-[500px] bg-gradient-to-tr from-blue-100/60 via-cyan-50/40 to-transparent rounded-full blur-3xl" />
        <div className="absolute bottom-1/3 left-10 w-96 h-96 bg-blue-50/70 rounded-full blur-2xl" />

        {/* Minimal dot grid pattern */}
        <div
          className="absolute inset-0 opacity-[0.25]"
          style={{
            backgroundImage: `radial-gradient(#94A3B8 0.75px, transparent 0.75px)`,
            backgroundSize: '24px 24px',
          }}
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* LEFT COLUMN: Text & CTAs */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            {/* Small Label */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-100 text-blue-700 text-xs font-bold tracking-wider mb-6 w-fit shadow-xs">
              <Sparkles className="w-3.5 h-3.5 text-cyan-500 animate-pulse" />
              <span>{portfolioData.personal.heroLabel}</span>
            </div>

            {/* Main Heading */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-slate-900 leading-[1.15] mb-4 text-balance">
              Hi, I'm{' '}
              <span className="text-gradient">
                {portfolioData.personal.name}
              </span>
            </h1>

            {/* Subtitle */}
            <p className="text-lg sm:text-xl font-medium text-slate-700 mb-5">
              {portfolioData.personal.title}
            </p>

            {/* Description */}
            <p className="text-slate-600 text-base sm:text-lg leading-relaxed mb-8 max-w-2xl">
              {portfolioData.personal.shortBio}
            </p>

            {/* Buttons */}
            <div className="flex flex-wrap items-center gap-3.5 mb-10">
              <button
                type="button"
                onClick={scrollToProjects}
                className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 text-sm font-bold text-white bg-blue-600 hover:bg-blue-700 active:bg-blue-800 rounded-xl shadow-md hover:shadow-lg transition-all duration-200 group cursor-pointer"
              >
                <span>Explore My Work</span>
                <ArrowDown className="w-4 h-4 group-hover:translate-y-0.5 transition-transform" />
              </button>

              <a
                href={portfolioData.personal.resumePath}
                download="25BAI10001_Hardik_Resume.pdf"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-bold text-slate-700 hover:text-blue-600 bg-white hover:bg-slate-50 border border-slate-200 hover:border-blue-200 rounded-xl shadow-xs transition-all duration-200 cursor-pointer"
              >
                <Download className="w-4 h-4 text-blue-600" />
                <span>Download CV</span>
              </a>

              {/* Quick Social Profile Links */}
              <div className="flex items-center gap-2">
                <a
                  href={portfolioData.socialLinks.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-xl bg-white hover:bg-blue-50 border border-slate-200 hover:border-blue-300 text-slate-600 hover:text-blue-600 flex items-center justify-center shadow-xs transition-all duration-200 cursor-pointer"
                  title="LinkedIn: Hardik Aggarwal"
                  aria-label="Hardik Aggarwal LinkedIn"
                >
                  <Linkedin className="w-5 h-5" />
                </a>

                <a
                  href={portfolioData.socialLinks.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-xl bg-white hover:bg-slate-100 border border-slate-200 hover:border-slate-400 text-slate-600 hover:text-slate-900 flex items-center justify-center shadow-xs transition-all duration-200 cursor-pointer"
                  title="GitHub: hardikaggarwal347"
                  aria-label="Hardik Aggarwal GitHub"
                >
                  <Github className="w-5 h-5" />
                </a>
              </div>
            </div>

            {/* Quick Badges Below Buttons */}
            <div className="pt-6 border-t border-slate-100 flex flex-wrap items-center gap-6 sm:gap-8 text-xs text-slate-600">
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-lg bg-blue-50 flex items-center justify-center text-blue-600 border border-blue-100">
                  <GraduationCap className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-semibold text-slate-900">{portfolioData.personal.specialization} Specialization</div>
                  <div className="text-slate-500">{portfolioData.personal.course}</div>
                </div>
              </div>

              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-lg bg-cyan-50 flex items-center justify-center text-cyan-600 border border-cyan-100">
                  <Building2 className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-semibold text-slate-900">{portfolioData.personal.university}</div>
                  <div className="text-slate-500">{portfolioData.personal.location}</div>
                </div>
              </div>

              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-lg bg-slate-100 flex items-center justify-center text-slate-700 border border-slate-200">
                  <Fingerprint className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-semibold text-slate-900">UID: {portfolioData.personal.uid}</div>
                  <div className="text-slate-500">{portfolioData.personal.year}</div>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN: Abstract Technology Visual */}
          <div className="lg:col-span-5 relative flex items-center justify-center">
            {/* Soft Cyan/Blue Glow Backdrop */}
            <div className="absolute w-72 sm:w-88 h-72 sm:h-88 bg-gradient-to-tr from-blue-200/50 via-cyan-100/50 to-blue-50/30 rounded-full blur-2xl -z-10" />

            {/* Main Container */}
            <div className="relative w-full max-w-md mx-auto aspect-square rounded-3xl p-6 bg-gradient-to-b from-white/95 to-slate-50/80 border border-slate-200/80 shadow-xl shadow-blue-500/5 flex flex-col justify-between overflow-hidden">
              {/* Subtle tech grid background inside card */}
              <div
                className="absolute inset-0 opacity-[0.12] pointer-events-none"
                style={{
                  backgroundImage: `linear-gradient(#2563EB 1px, transparent 1px), linear-gradient(90deg, #2563EB 1px, transparent 1px)`,
                  backgroundSize: '32px 32px',
                }}
              />

              {/* Top Section: Simulated AI Neural Architecture Header */}
              <div className="relative z-10 flex items-center justify-between border-b border-slate-100 pb-4">
                <div className="flex items-center gap-2.5">
                  <div className="w-3 h-3 rounded-full bg-emerald-500 ring-4 ring-emerald-100 animate-pulse" />
                  <span className="text-xs font-bold text-slate-800 tracking-wide">AI Pipeline Engine</span>
                </div>
                <div className="flex items-center gap-1.5 font-mono text-[11px] text-blue-600 bg-blue-50 px-2 py-0.5 rounded-md border border-blue-100">
                  <Cpu className="w-3 h-3" />
                  <span>Real-time</span>
                </div>
              </div>

              {/* Floating Element 1: Whisper Speech Transcriber Glass Card */}
              <div className="relative z-10 p-3.5 rounded-2xl bg-white/95 border border-blue-100 shadow-md shadow-slate-200/50 hover:shadow-lg transition-all duration-300">
                <div className="flex items-start justify-between mb-2">
                  <div className="flex items-center gap-2">
                    <div className="w-7 h-7 rounded-lg bg-blue-100/70 text-blue-600 flex items-center justify-center">
                      <Mic className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-xs font-bold text-slate-900">OpenAI Whisper Pipeline</div>
                      <div className="text-[10px] text-slate-500 font-mono">FFmpeg Audio Extraction</div>
                    </div>
                  </div>
                  <span className="text-[11px] font-bold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-100">
                    ~95% Acc
                  </span>
                </div>
                <div className="flex items-center gap-1.5 text-[11px] text-slate-600 bg-slate-50 p-2 rounded-lg font-mono">
                  <span className="text-blue-600 font-bold">&gt;</span>
                  <span className="truncate">audio_stream.transcribe(model="whisper")</span>
                </div>
              </div>

              {/* Central Abstract Network Visual */}
              <div className="relative z-10 py-1 flex items-center justify-center">
                <div className="w-full flex items-center justify-between px-6 py-2">
                  {/* Node 1 */}
                  <div className="flex flex-col items-center">
                    <div className="w-10 h-10 rounded-xl bg-blue-50 border-2 border-blue-200 flex items-center justify-center text-blue-600 shadow-xs">
                      <Code2 className="w-5 h-5" />
                    </div>
                    <span className="text-[10px] font-semibold text-slate-600 mt-1">Python</span>
                  </div>

                  {/* Connecting Wave Line */}
                  <div className="flex-1 px-3">
                    <div className="h-0.5 bg-gradient-to-r from-blue-300 via-cyan-400 to-blue-300 relative">
                      <div className="absolute -top-1 left-1/2 -translate-x-1/2 w-2.5 h-2.5 rounded-full bg-cyan-500 animate-ping" />
                    </div>
                  </div>

                  {/* Node 2 */}
                  <div className="flex flex-col items-center">
                    <div className="w-10 h-10 rounded-xl bg-cyan-50 border-2 border-cyan-200 flex items-center justify-center text-cyan-600 shadow-xs">
                      <ScanFace className="w-5 h-5" />
                    </div>
                    <span className="text-[10px] font-semibold text-slate-600 mt-1">OpenCV</span>
                  </div>
                </div>
              </div>

              {/* Floating Element 2: Vision & Face Detection Card */}
              <div className="relative z-10 p-3.5 rounded-2xl bg-white/95 border border-cyan-100 shadow-md shadow-slate-200/50 hover:shadow-lg transition-all duration-300">
                <div className="flex items-start justify-between">
                  <div className="flex items-center gap-2">
                    <div className="w-7 h-7 rounded-lg bg-cyan-100/70 text-cyan-600 flex items-center justify-center">
                      <ScanFace className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-xs font-bold text-slate-900">Live Face Recognition</div>
                      <div className="text-[10px] text-slate-500 font-mono">Webcam Stream @ 25 FPS</div>
                    </div>
                  </div>
                  <span className="text-[11px] font-bold text-blue-600 bg-blue-50 px-2 py-0.5 rounded-full border border-blue-100">
                    92%+ Match
                  </span>
                </div>
                <div className="mt-2 flex items-center justify-between text-[10px] text-slate-500 pt-1.5 border-t border-slate-100">
                  <span>Target: Automated CSV Log</span>
                  <span className="font-semibold text-emerald-600">Active Camera Feed</span>
                </div>
              </div>

              {/* Bottom Subtle Pill Footer */}
              <div className="relative z-10 pt-2 flex items-center justify-between text-[11px] text-slate-500">
                <span className="font-medium text-slate-700">Chandigarh University • AI Dept</span>
                <span className="font-mono text-blue-600 font-semibold">25BAI10001</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
