import React from 'react';
import { FileText, Download, ExternalLink, CheckCircle, Eye, ShieldCheck, GraduationCap, Code } from 'lucide-react';
import { portfolioData } from '../data/portfolio';

export const ResumeSection: React.FC = () => {
  return (
    <section id="resume" className="py-20 bg-gradient-to-b from-[#F0F7FF] to-white border-t border-blue-100/60 relative overflow-hidden">
      {/* Decorative backdrop light glow */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-blue-100/40 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl p-8 sm:p-12 border border-blue-200/80 shadow-lg shadow-blue-500/5 relative overflow-hidden">
          {/* Top colored accent line */}
          <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-blue-600 via-cyan-500 to-blue-600" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Left Content */}
            <div className="lg:col-span-7">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 border border-blue-100 text-blue-700 text-xs font-bold tracking-wider mb-4">
                <FileText className="w-3.5 h-3.5 text-blue-600" />
                <span>CURRICULUM VITAE</span>
              </div>

              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mb-4">
                Want to know more about me?
              </h2>

              <p className="text-slate-600 text-base sm:text-lg leading-relaxed mb-8 max-w-xl">
                Take a look at my resume for a detailed overview of my education, projects, skills and experience.
              </p>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-4 mb-8">
                <a
                  href={portfolioData.personal.resumePath}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-bold text-white bg-blue-600 hover:bg-blue-700 active:bg-blue-800 rounded-xl shadow-md hover:shadow-lg transition-all duration-200 cursor-pointer"
                >
                  <Eye className="w-4 h-4" />
                  <span>View Resume</span>
                  <ExternalLink className="w-3.5 h-3.5 opacity-80" />
                </a>

                <a
                  href={portfolioData.personal.resumePath}
                  download="25BAI10001_Hardik_Resume.pdf"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-bold text-slate-700 hover:text-blue-600 bg-white hover:bg-slate-50 border border-slate-200 hover:border-blue-200 rounded-xl shadow-xs transition-all duration-200 cursor-pointer"
                >
                  <Download className="w-4 h-4 text-blue-600" />
                  <span>Download CV</span>
                </a>
              </div>

              {/* Checkmarks */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-6 border-t border-slate-100 text-xs text-slate-600">
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>PDF Document: 25BAI10001_Hardik_Resume.pdf</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Verified Chandigarh University records</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Updated for 2026 Internship applications</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Direct contact details & UID verified</span>
                </div>
              </div>
            </div>

            {/* Right: Clean Document Preview Card */}
            <div className="lg:col-span-5">
              <div className="relative mx-auto max-w-sm rounded-2xl bg-slate-50 p-6 border border-slate-200 shadow-md">
                <div className="flex items-center justify-between pb-3 border-b border-slate-200 mb-4">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-red-400" />
                    <div className="w-3 h-3 rounded-full bg-amber-400" />
                    <div className="w-3 h-3 rounded-full bg-emerald-400" />
                  </div>
                  <span className="font-mono text-[11px] text-slate-500">25BAI10001_Resume.pdf</span>
                </div>

                <div className="bg-white rounded-xl p-5 border border-slate-200 shadow-xs space-y-3.5 text-xs">
                  <div>
                    <h4 className="font-bold text-slate-900 text-sm">Hardik Aggarwal</h4>
                    <p className="text-[11px] text-blue-600 font-medium">B.E. Computer Science (AI Specialization)</p>
                    <p className="text-[10px] text-slate-400 font-mono">UID: 25BAI10001 • Chandigarh University</p>
                  </div>

                  <div className="space-y-1.5 pt-2 border-t border-slate-100 text-[11px]">
                    <div className="flex items-center justify-between text-slate-600">
                      <span>• Education CGPA</span>
                      <span className="font-bold text-slate-900">7.5 / 10.0</span>
                    </div>
                    <div className="flex items-center justify-between text-slate-600">
                      <span>• Senior Secondary</span>
                      <span className="font-bold text-slate-900">89%</span>
                    </div>
                    <div className="flex items-center justify-between text-slate-600">
                      <span>• Whisper Video Pipeline</span>
                      <span className="font-bold text-blue-600">~95% Acc</span>
                    </div>
                    <div className="flex items-center justify-between text-slate-600">
                      <span>• Real-Time Attendance</span>
                      <span className="font-bold text-cyan-600">25 FPS</span>
                    </div>
                    <div className="flex items-center justify-between text-slate-600">
                      <span>• Azure AI-900 Certified</span>
                      <span className="font-bold text-emerald-600">Verified</span>
                    </div>
                  </div>

                  <div className="pt-2 border-t border-slate-100 flex items-center justify-between">
                    <span className="text-[10px] text-slate-400">Ready to download</span>
                    <a
                      href={portfolioData.personal.resumePath}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[11px] font-bold text-blue-600 hover:text-blue-800 flex items-center gap-1"
                    >
                      <span>Open PDF</span>
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
