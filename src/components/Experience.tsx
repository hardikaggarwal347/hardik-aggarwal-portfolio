import React from 'react';
import { HeartHandshake, Clock, Calendar, Users, CheckCircle2 } from 'lucide-react';
import { portfolioData } from '../data/portfolio';

export const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-20 bg-white border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-14">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 border border-blue-100 text-blue-700 text-xs font-bold tracking-wider mb-3">
            <span>VOLUNTEERING & OUTREACH</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Experience
          </h2>
          <div className="h-1 w-16 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-full mt-3" />
        </div>

        {/* Experience Timeline Item */}
        <div className="max-w-4xl">
          {portfolioData.experience.map((exp, idx) => (
            <div
              key={idx}
              className="bg-white rounded-3xl p-7 sm:p-9 border border-slate-200 shadow-xs hover:shadow-md hover:border-blue-200 transition-all duration-200 relative overflow-hidden"
            >
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-slate-100 mb-6">
                <div className="flex items-center gap-3.5">
                  <div className="w-12 h-12 rounded-2xl bg-blue-50 border border-blue-100 flex items-center justify-center text-blue-600 shrink-0">
                    <HeartHandshake className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-xl sm:text-2xl font-bold text-slate-900">
                      {exp.role}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-500 font-medium">
                      Community Service & Grassroots Engagement
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-3 self-start sm:self-center">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 text-blue-700 border border-blue-100 text-xs font-bold">
                    <Clock className="w-3.5 h-3.5 text-blue-600" />
                    {exp.duration}
                  </span>
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-100 text-slate-700 text-xs font-semibold">
                    <Calendar className="w-3.5 h-3.5 text-slate-500" />
                    {exp.year}
                  </span>
                </div>
              </div>

              {/* Descriptions */}
              <div className="space-y-4 text-slate-600 text-base leading-relaxed mb-6">
                <p>{exp.description}</p>
                <p className="bg-slate-50 p-4 rounded-2xl border border-slate-100 text-slate-700 italic">
                  "{exp.additionalDescription}"
                </p>
              </div>

              {/* Highlights */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
                {exp.highlights.map((h, hIdx) => (
                  <div
                    key={hIdx}
                    className="flex items-center gap-2 text-xs font-semibold text-slate-700 p-2.5 rounded-xl bg-slate-50 border border-slate-100"
                  >
                    <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0" />
                    <span>{h}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
