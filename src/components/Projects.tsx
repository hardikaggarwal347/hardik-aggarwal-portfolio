import React, { useState } from 'react';
import { ArrowUpRight, Github, CheckCircle, Video, UserCheck } from 'lucide-react';
import { portfolioData, ProjectItem } from '../data/portfolio';
import { ProjectDetailModal } from './ProjectDetailModal';

export const Projects: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);

  return (
    <section id="projects" className="py-20 bg-[#F0F7FF]/50 border-t border-slate-100 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-14">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 border border-blue-100 text-blue-700 text-xs font-bold tracking-wider mb-3">
            <span>PORTFOLIO WORK</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Featured Projects
          </h2>
          <p className="text-slate-600 mt-2 text-base sm:text-lg">
            Things I've built while learning, experimenting and solving real problems.
          </p>
          <div className="h-1 w-16 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-full mt-3" />
        </div>

        {/* Project Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10">
          {portfolioData.projects.map((project, idx) => (
            <div
              key={project.id}
              className="bg-white rounded-3xl p-7 sm:p-8 border border-blue-100/90 shadow-sm hover:shadow-xl hover:border-blue-400 hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between group relative overflow-hidden"
            >
              {/* Very subtle hover gradient glow */}
              <div className="absolute inset-0 bg-gradient-to-tr from-blue-50/30 via-transparent to-cyan-50/20 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />

              <div>
                {/* Project Header & Minimal Illustration Visual */}
                <div className="flex items-start justify-between gap-4 mb-5">
                  <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-blue-50 to-cyan-50 border border-blue-100 flex items-center justify-center text-blue-600 group-hover:scale-110 transition-transform">
                    {idx === 0 ? (
                      <Video className="w-6 h-6 text-blue-600" />
                    ) : (
                      <UserCheck className="w-6 h-6 text-cyan-600" />
                    )}
                  </div>

                  {/* Technology Badges */}
                  <div className="flex flex-wrap justify-end gap-1.5 max-w-xs">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-2.5 py-1 bg-slate-50 border border-slate-200 text-slate-700 rounded-md text-[11px] font-semibold tracking-wide"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Project Title */}
                <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900 group-hover:text-blue-600 transition-colors tracking-tight mb-3">
                  {project.title}
                </h3>

                {/* Description */}
                <p className="text-slate-600 text-sm sm:text-base leading-relaxed mb-6">
                  {project.description}
                </p>

                {/* Key Highlights */}
                <div className="space-y-2.5 mb-8">
                  <div className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">
                    Key Highlights
                  </div>
                  {project.highlights.map((highlight, hIdx) => (
                    <div key={hIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700">
                      <CheckCircle className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                      <span>{highlight}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-6 border-t border-slate-100 flex flex-wrap items-center gap-3">
                <button
                  type="button"
                  onClick={() => setSelectedProject(project)}
                  className="inline-flex items-center gap-2 px-5 py-2.5 text-xs font-bold text-white bg-blue-600 hover:bg-blue-700 active:bg-blue-800 rounded-xl shadow-xs transition-colors cursor-pointer group/btn"
                >
                  <span>View Project</span>
                  <ArrowUpRight className="w-4 h-4 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
                </button>

                <a
                  href={project.links.github || portfolioData.socialLinks.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2.5 text-xs font-semibold text-slate-700 hover:text-slate-900 bg-slate-50 hover:bg-slate-100 border border-slate-200 hover:border-slate-300 rounded-xl transition-colors cursor-pointer"
                  title="View Hardik's GitHub: hardikaggarwal347"
                >
                  <Github className="w-4 h-4" />
                  <span>GitHub</span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Detail Modal */}
      <ProjectDetailModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
};
