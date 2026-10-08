import React, { useState } from 'react';
import { Award, CheckCircle, ShieldCheck, X, BookOpen, Building } from 'lucide-react';
import { portfolioData, CertificationItem } from '../data/portfolio';

export const Certifications: React.FC = () => {
  const [activeCert, setActiveCert] = useState<CertificationItem | null>(null);

  return (
    <section id="certifications" className="py-20 bg-white border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-14">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 border border-blue-100 text-blue-700 text-xs font-bold tracking-wider mb-3">
            <span>CREDENTIALS & SPECIALIZED STUDY</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Certifications
          </h2>
          <p className="text-slate-600 mt-2 text-base sm:text-lg">
            Professional learning and recognized university & industry accreditations.
          </p>
          <div className="h-1 w-16 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-full mt-3" />
        </div>

        {/* Certifications Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {portfolioData.certifications.map((cert, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl p-6 sm:p-7 border border-slate-200/90 shadow-xs hover:shadow-md hover:border-blue-300 hover:-translate-y-1 transition-all duration-200 flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-11 h-11 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center text-blue-600 group-hover:scale-105 transition-transform">
                    <Award className="w-5 h-5" />
                  </div>
                  <span className="inline-flex items-center gap-1 text-[11px] font-semibold text-emerald-700 bg-emerald-50 px-2.5 py-0.5 rounded-full border border-emerald-100">
                    <ShieldCheck className="w-3 h-3 text-emerald-600" />
                    Verified
                  </span>
                </div>

                <h3 className="text-base sm:text-lg font-bold text-slate-900 group-hover:text-blue-600 transition-colors mb-2 leading-snug">
                  {cert.title}
                </h3>

                <p className="text-xs font-medium text-slate-500 mb-4 flex items-center gap-1.5">
                  <Building className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                  <span>{cert.issuer}</span>
                </p>

                {/* Topics Tags */}
                <div className="flex flex-wrap gap-1.5 mb-6">
                  {cert.topics.map((t) => (
                    <span
                      key={t}
                      className="px-2 py-0.5 bg-slate-50 border border-slate-200 text-slate-600 rounded text-[11px]"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              {/* View Certificate Details button */}
              <button
                type="button"
                onClick={() => setActiveCert(cert)}
                className="w-full py-2 px-3 text-xs font-bold text-slate-700 hover:text-blue-600 bg-slate-50 hover:bg-blue-50/50 border border-slate-200 hover:border-blue-200 rounded-xl transition-all cursor-pointer flex items-center justify-center gap-1.5"
              >
                <span>View Details</span>
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Certification Detail Modal */}
      {activeCert && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/40 backdrop-blur-xs animate-in fade-in duration-200"
          onClick={() => setActiveCert(null)}
        >
          <div
            className="relative w-full max-w-lg bg-white rounded-3xl shadow-2xl border border-slate-200 p-6 sm:p-7"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-start justify-between pb-4 border-b border-slate-100">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center border border-blue-100">
                  <Award className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-base sm:text-lg font-bold text-slate-900 leading-snug">
                    {activeCert.title}
                  </h3>
                  <p className="text-xs text-blue-600 font-medium">{activeCert.issuer}</p>
                </div>
              </div>
              <button
                type="button"
                onClick={() => setActiveCert(null)}
                className="p-1.5 rounded-lg text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors cursor-pointer"
                aria-label="Close dialog"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="py-5 space-y-4 text-xs sm:text-sm text-slate-600">
              <div>
                <span className="font-bold text-slate-700 block mb-1">Key Curriculum Areas:</span>
                <div className="space-y-1.5">
                  {activeCert.topics.map((item, i) => (
                    <div key={i} className="flex items-center gap-2">
                      <CheckCircle className="w-3.5 h-3.5 text-blue-600 shrink-0" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-slate-50 p-3.5 rounded-xl border border-slate-100 text-xs text-slate-500">
                <span>Earned by Hardik Aggarwal (Chandigarh University) as part of academic and professional advancement.</span>
              </div>
            </div>

            <div className="pt-3 border-t border-slate-100 flex justify-end">
              <button
                type="button"
                onClick={() => setActiveCert(null)}
                className="px-4 py-2 text-xs font-bold text-slate-700 bg-slate-100 hover:bg-slate-200 rounded-xl transition-colors cursor-pointer"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
