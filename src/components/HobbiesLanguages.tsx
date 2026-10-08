import React from 'react';
import { Puzzle, Film, Dumbbell, Globe2, Languages as LangIcon } from 'lucide-react';
import { portfolioData } from '../data/portfolio';

export const HobbiesLanguages: React.FC = () => {
  const getHobbyIcon = (iconType: string) => {
    switch (iconType) {
      case 'puzzle':
        return <Puzzle className="w-5 h-5 text-blue-600" />;
      case 'movie':
        return <Film className="w-5 h-5 text-cyan-600" />;
      case 'dumbbell':
        return <Dumbbell className="w-5 h-5 text-blue-600" />;
      default:
        return <Puzzle className="w-5 h-5 text-blue-600" />;
    }
  };

  return (
    <section className="py-20 bg-[#F8FAFC] border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14">
          {/* Hobbies & Interests Column */}
          <div>
            <div className="mb-10">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 border border-blue-100 text-blue-700 text-xs font-bold tracking-wider mb-3">
                <span>BEYOND CODE</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
                Hobbies & Interests
              </h2>
              <div className="h-1 w-14 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-full mt-3" />
            </div>

            <div className="space-y-4">
              {portfolioData.hobbies.map((hobby) => (
                <div
                  key={hobby.name}
                  className="bg-white p-5 rounded-2xl border border-slate-200/90 shadow-xs hover:shadow-md hover:border-blue-200 hover:-translate-y-0.5 transition-all duration-200 flex items-start gap-4 group"
                >
                  <div className="w-12 h-12 rounded-xl bg-blue-50/80 border border-blue-100 flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                    {getHobbyIcon(hobby.icon)}
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
                      {hobby.name}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-600 mt-1 leading-relaxed">
                      {hobby.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Languages Column */}
          <div>
            <div className="mb-10">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cyan-50 border border-cyan-100 text-cyan-700 text-xs font-bold tracking-wider mb-3">
                <span>COMMUNICATION</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
                Languages
              </h2>
              <div className="h-1 w-14 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full mt-3" />
            </div>

            <div className="space-y-4">
              {portfolioData.languages.map((lang) => (
                <div
                  key={lang.language}
                  className="bg-white p-5 rounded-2xl border border-slate-200/90 shadow-xs hover:shadow-md hover:border-cyan-300 hover:-translate-y-0.5 transition-all duration-200 flex items-start justify-between gap-4 group"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-cyan-50/80 border border-cyan-100 flex items-center justify-center text-cyan-600 shrink-0 group-hover:scale-105 transition-transform">
                      <Globe2 className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="text-base font-bold text-slate-900 group-hover:text-cyan-700 transition-colors">
                        {lang.language}
                      </h3>
                      <p className="text-xs sm:text-sm text-slate-500 mt-0.5 leading-relaxed">
                        {lang.level}
                      </p>
                    </div>
                  </div>

                  <span className="px-3 py-1 bg-slate-100 text-slate-700 border border-slate-200 rounded-full text-xs font-bold shrink-0 self-start mt-1">
                    {lang.proficiency}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
