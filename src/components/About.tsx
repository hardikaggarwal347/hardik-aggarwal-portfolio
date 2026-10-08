import React from 'react';
import { Bot, Lightbulb, Code, User, GraduationCap, School, BookOpen, MapPin, Hash, Sparkles } from 'lucide-react';
import { portfolioData } from '../data/portfolio';

export const About: React.FC = () => {
  const getHighlightIcon = (index: number) => {
    switch (index) {
      case 0:
        return <Bot className="w-5 h-5 text-blue-600" />;
      case 1:
        return <Lightbulb className="w-5 h-5 text-cyan-600" />;
      case 2:
        return <Code className="w-5 h-5 text-blue-600" />;
      default:
        return <Sparkles className="w-5 h-5 text-blue-600" />;
    }
  };

  return (
    <section id="about" className="py-20 bg-[#F8FAFC] border-t border-slate-100 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-14">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 border border-blue-100 text-blue-700 text-xs font-bold tracking-wider mb-3">
            <span>GET TO KNOW ME</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            About Me
          </h2>
          <div className="h-1 w-16 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-full mt-3" />
        </div>

        {/* Content Layout: Bio & Quick Profile Card */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-14">
          {/* Main Prose (7 cols) */}
          <div className="lg:col-span-7 space-y-5 text-slate-600 text-base sm:text-lg leading-relaxed">
            {portfolioData.personal.aboutParagraphs.map((paragraph, idx) => (
              <p
                key={idx}
                className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs hover:border-blue-200 transition-colors"
              >
                {paragraph}
              </p>
            ))}
          </div>

          {/* Quick Profile Card (5 cols) */}
          <div className="lg:col-span-5">
            <div className="bg-white rounded-2xl p-6 sm:p-7 border border-slate-200 shadow-sm relative overflow-hidden">
              {/* Subtle top accent gradient */}
              <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-blue-600 to-cyan-400" />

              <div className="flex items-center justify-between pb-5 border-b border-slate-100">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center text-blue-600">
                    <User className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-slate-900">{portfolioData.personal.name}</h3>
                    <p className="text-xs text-blue-600 font-semibold">{portfolioData.personal.title}</p>
                  </div>
                </div>
              </div>

              {/* Profile Details List */}
              <div className="mt-5 space-y-3.5 text-sm">
                <div className="flex items-center justify-between py-1 border-b border-slate-50">
                  <span className="text-slate-500 flex items-center gap-2">
                    <School className="w-4 h-4 text-slate-400" />
                    University
                  </span>
                  <span className="font-semibold text-slate-900 text-right">{portfolioData.personal.university}</span>
                </div>

                <div className="flex items-center justify-between py-1 border-b border-slate-50">
                  <span className="text-slate-500 flex items-center gap-2">
                    <GraduationCap className="w-4 h-4 text-slate-400" />
                    Course
                  </span>
                  <span className="font-semibold text-slate-900 text-right">{portfolioData.personal.course}</span>
                </div>

                <div className="flex items-center justify-between py-1 border-b border-slate-50">
                  <span className="text-slate-500 flex items-center gap-2">
                    <Sparkles className="w-4 h-4 text-slate-400" />
                    Specialization
                  </span>
                  <span className="font-semibold text-blue-600 text-right">{portfolioData.personal.specialization}</span>
                </div>

                <div className="flex items-center justify-between py-1 border-b border-slate-50">
                  <span className="text-slate-500 flex items-center gap-2">
                    <BookOpen className="w-4 h-4 text-slate-400" />
                    Academic Year
                  </span>
                  <span className="font-semibold text-slate-900 text-right">{portfolioData.personal.year}</span>
                </div>

                <div className="flex items-center justify-between py-1 border-b border-slate-50">
                  <span className="text-slate-500 flex items-center gap-2">
                    <Hash className="w-4 h-4 text-slate-400" />
                    Student UID
                  </span>
                  <span className="font-mono font-bold text-slate-900 text-right">{portfolioData.personal.uid}</span>
                </div>

                <div className="flex items-center justify-between py-1">
                  <span className="text-slate-500 flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-slate-400" />
                    Location
                  </span>
                  <span className="font-semibold text-slate-900 text-right">{portfolioData.personal.location}</span>
                </div>
              </div>

              {/* Status Badge */}
              <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between bg-blue-50/50 p-3 rounded-xl border border-blue-100/60">
                <span className="text-xs text-slate-600 font-medium">Availability</span>
                <span className="inline-flex items-center gap-1.5 text-xs font-bold text-emerald-700">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
                  Open to Internships
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* 3 Highlight Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {portfolioData.aboutHighlights.map((item, index) => (
            <div
              key={item.number}
              className="bg-white rounded-2xl p-6 border border-slate-200/90 shadow-sm hover:shadow-md hover:-translate-y-1.5 hover:border-blue-300 transition-all duration-200 group cursor-default"
            >
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-mono font-bold text-slate-400 group-hover:text-blue-600 transition-colors">
                  {item.number}
                </span>
                <div className="w-10 h-10 rounded-xl bg-blue-50/80 group-hover:bg-blue-100 flex items-center justify-center transition-colors">
                  {getHighlightIcon(index)}
                </div>
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2 group-hover:text-blue-600 transition-colors">
                {item.title}
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
