import React from 'react';
import { Ear, Brain, Sparkles, Code2, CheckCircle2 } from 'lucide-react';
import { portfolioData } from '../data/portfolio';
import { TechIcon } from './TechIcons';

export const Skills: React.FC = () => {
  return (
    <section id="skills" className="py-20 bg-[#F8FAFC] border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Technical Skills Header */}
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 border border-blue-100 text-blue-700 text-xs font-bold tracking-wider mb-3">
            <span>CORE COMPETENCIES</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Technical Skills
          </h2>
          <p className="text-slate-600 mt-2 text-base sm:text-lg">
            Languages and foundational technologies used across software and AI projects.
          </p>
          <div className="h-1 w-16 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-full mt-3" />
        </div>

        {/* Technical Skill Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {portfolioData.technicalSkills.map((skill) => (
            <div
              key={skill.name}
              className="bg-white rounded-2xl p-6 border border-slate-200/90 shadow-xs hover:shadow-md hover:border-blue-300 hover:-translate-y-1 transition-all duration-200 group flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 rounded-xl bg-blue-50/70 border border-blue-100/70 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <TechIcon name={skill.iconName} className="w-6 h-6" />
                  </div>
                  <span className="text-[11px] font-semibold text-blue-600 bg-blue-50 px-2 py-0.5 rounded-full border border-blue-100">
                    {skill.category}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-slate-900 group-hover:text-blue-600 transition-colors mb-1">
                  {skill.name}
                </h3>
                <p className="text-xs font-medium text-slate-400 mb-3">
                  {skill.tag}
                </p>
                <p className="text-xs text-slate-600 leading-relaxed">
                  {skill.description}
                </p>
              </div>

              <div className="mt-5 pt-3 border-t border-slate-100 flex items-center gap-1.5 text-[11px] text-slate-500 font-medium">
                <CheckCircle2 className="w-3.5 h-3.5 text-blue-500" />
                <span>Verified in course projects</span>
              </div>
            </div>
          ))}
        </div>

        {/* Interpersonal Skills Header */}
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cyan-50 border border-cyan-100 text-cyan-700 text-xs font-bold tracking-wider mb-3">
            <span>PROFESSIONAL ATTRIBUTES</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Interpersonal Skills
          </h2>
          <p className="text-slate-600 mt-2 text-base sm:text-lg">
            Personal attributes and collaborative qualities brought to engineering teams.
          </p>
          <div className="h-1 w-16 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full mt-3" />
        </div>

        {/* Interpersonal Skill Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {portfolioData.interpersonalSkills.map((item, idx) => (
            <div
              key={item.name}
              className="bg-white rounded-2xl p-7 border border-slate-200/90 shadow-xs hover:shadow-md hover:border-cyan-300 hover:-translate-y-1 transition-all duration-200 group"
            >
              <div className="w-12 h-12 rounded-xl bg-cyan-50 border border-cyan-100 flex items-center justify-center text-cyan-600 mb-5 group-hover:scale-110 transition-transform">
                {idx === 0 && <Ear className="w-6 h-6 text-blue-600" />}
                {idx === 1 && <Sparkles className="w-6 h-6 text-cyan-600" />}
                {idx === 2 && <Brain className="w-6 h-6 text-blue-600" />}
              </div>

              <h3 className="text-lg sm:text-xl font-bold text-slate-900 group-hover:text-blue-600 transition-colors mb-2.5">
                {item.name}
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
