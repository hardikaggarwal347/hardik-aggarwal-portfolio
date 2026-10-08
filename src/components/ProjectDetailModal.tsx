import React from 'react';
import { X, CheckCircle2, Cpu, Layers, Workflow, ExternalLink, GitFork } from 'lucide-react';
import { ProjectItem } from '../data/portfolio';

interface ProjectDetailModalProps {
  project: ProjectItem | null;
  onClose: () => void;
}

export const ProjectDetailModal: React.FC<ProjectDetailModalProps> = ({ project, onClose }) => {
  if (!project) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/40 backdrop-blur-xs animate-in fade-in duration-200"
    >
      <div
        className="relative w-full max-w-2xl bg-white rounded-3xl shadow-2xl border border-slate-200 overflow-hidden max-h-[90vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="p-6 border-b border-slate-100 flex items-start justify-between bg-gradient-to-r from-blue-50/70 via-white to-cyan-50/70">
          <div>
            <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-blue-100/70 text-blue-700 text-[11px] font-bold uppercase tracking-wider mb-2">
              <Workflow className="w-3 h-3" />
              <span>Architecture & Engineering Walkthrough</span>
            </div>
            <h3 className="text-2xl font-extrabold text-slate-900 tracking-tight">
              {project.title}
            </h3>
            <p className="text-xs text-slate-500 mt-1 font-medium">
              Role: {project.role}
            </p>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="p-2 rounded-full text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors cursor-pointer"
            aria-label="Close dialog"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 overflow-y-auto space-y-6 text-sm">
          {/* Tech stack badges */}
          <div>
            <span className="text-xs font-bold text-slate-400 uppercase tracking-wider block mb-2">
              Technology Stack
            </span>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 bg-blue-50 text-blue-700 border border-blue-100 rounded-lg text-xs font-semibold"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Overview */}
          <div>
            <span className="text-xs font-bold text-slate-400 uppercase tracking-wider block mb-1.5">
              Project Overview
            </span>
            <p className="text-slate-700 leading-relaxed bg-slate-50 p-4 rounded-xl border border-slate-100">
              {project.description}
            </p>
          </div>

          {/* Architecture Pipeline */}
          <div>
            <span className="text-xs font-bold text-slate-400 uppercase tracking-wider block mb-2 flex items-center gap-1.5">
              <Layers className="w-3.5 h-3.5 text-blue-600" />
              Technical Pipeline Flow
            </span>
            <div className="bg-slate-900 text-slate-100 p-4 rounded-xl font-mono text-xs leading-relaxed overflow-x-auto border border-slate-800">
              {project.viewDetails.architecture}
            </div>
          </div>

          {/* Execution Steps */}
          <div>
            <span className="text-xs font-bold text-slate-400 uppercase tracking-wider block mb-2 flex items-center gap-1.5">
              <Cpu className="w-3.5 h-3.5 text-cyan-600" />
              Implementation Milestones
            </span>
            <div className="space-y-2">
              {project.viewDetails.flowSteps.map((step, idx) => (
                <div key={idx} className="flex items-start gap-2.5 text-slate-600">
                  <span className="w-5 h-5 rounded-full bg-blue-50 text-blue-600 font-bold text-xs flex items-center justify-center shrink-0 mt-0.5 border border-blue-100">
                    {idx + 1}
                  </span>
                  <span>{step}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Validated Metrics */}
          <div>
            <span className="text-xs font-bold text-slate-400 uppercase tracking-wider block mb-2 flex items-center gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
              Key Measured Metrics & Highlights
            </span>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {project.highlights.map((h, idx) => (
                <div key={idx} className="p-3 rounded-xl bg-emerald-50/50 border border-emerald-100 text-xs text-slate-700 flex items-start gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                  <span>{h}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="p-4 sm:p-5 border-t border-slate-100 bg-slate-50 flex items-center justify-between">
          <span className="text-xs text-slate-500">
            Hardik Aggarwal • AI Project Portfolio
          </span>
          <button
            type="button"
            onClick={onClose}
            className="px-5 py-2 text-xs font-bold text-slate-700 bg-white hover:bg-slate-100 border border-slate-200 rounded-xl transition-colors cursor-pointer"
          >
            Close Overview
          </button>
        </div>
      </div>
    </div>
  );
};
