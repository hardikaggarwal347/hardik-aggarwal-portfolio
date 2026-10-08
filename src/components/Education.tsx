import React from 'react';
import { GraduationCap, Calendar, MapPin, Award } from 'lucide-react';
import { portfolioData } from '../data/portfolio';

export const Education: React.FC = () => {
  return (
    <section id="education" className="py-20 bg-white border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-14">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 border border-blue-100 text-blue-700 text-xs font-bold tracking-wider mb-3">
            <span>ACADEMIC BACKGROUND</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Education
          </h2>
          <p className="text-slate-600 mt-2 text-base sm:text-lg">
            My academic journey
          </p>
          <div className="h-1 w-16 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-full mt-3" />
        </div>

        {/* Timeline Container */}
        <div className="relative">
          {/* Vertical Timeline Guide Line */}
          <div className="hidden md:block absolute left-8 top-6 bottom-6 w-0.5 bg-gradient-to-b from-blue-500 via-cyan-400 to-slate-200" />

          <div className="space-y-8 md:space-y-10">
            {portfolioData.education.map((item, index) => (
              <div key={index} className="relative flex flex-col md:flex-row items-start group">
                {/* Timeline Dot Marker (Desktop) */}
                <div className="hidden md:flex absolute left-8 -translate-x-1/2 w-8 h-8 rounded-full bg-white border-2 border-blue-500 items-center justify-center shadow-sm group-hover:scale-110 group-hover:border-cyan-500 transition-all z-10">
                  <div className="w-3 h-3 rounded-full bg-gradient-to-tr from-blue-600 to-cyan-400" />
                </div>

                {/* Card Container */}
                <div className="md:ml-20 w-full bg-white rounded-2xl p-6 sm:p-7 border border-slate-200 shadow-xs hover:shadow-md hover:border-blue-200 transition-all duration-200">
                  <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 mb-4 pb-4 border-b border-slate-100">
                    <div>
                      <div className="flex items-center gap-2 mb-1.5">
                        <GraduationCap className="w-5 h-5 text-blue-600" />
                        <h3 className="text-lg sm:text-xl font-bold text-slate-900">
                          {item.degree}
                        </h3>
                      </div>
                      <p className="text-blue-600 font-semibold text-sm sm:text-base">
                        {item.field}
                      </p>
                      <p className="text-slate-700 font-medium text-sm mt-0.5">
                        {item.institution}
                      </p>
                    </div>

                    <div className="flex flex-wrap sm:flex-col sm:items-end gap-2 shrink-0">
                      <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-100 text-slate-700 text-xs font-semibold">
                        <Calendar className="w-3.5 h-3.5 text-slate-500" />
                        {item.duration}
                      </span>
                      <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 text-blue-700 border border-blue-100 text-xs font-bold">
                        <Award className="w-3.5 h-3.5 text-blue-600" />
                        {item.scoreLabel}: {item.score}
                      </span>
                    </div>
                  </div>

                  <div className="flex flex-col sm:flex-row sm:items-center justify-between text-xs text-slate-500 gap-2">
                    <span className="flex items-center gap-1.5">
                      <MapPin className="w-3.5 h-3.5 text-slate-400" />
                      {item.location}
                    </span>
                    {item.description && (
                      <span className="text-slate-600 font-normal">
                        {item.description}
                      </span>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
