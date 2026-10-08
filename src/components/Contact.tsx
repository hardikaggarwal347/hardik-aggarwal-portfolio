import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, Copy, Check, MessageSquare, AlertCircle, Linkedin, Github, ExternalLink } from 'lucide-react';
import { portfolioData } from '../data/portfolio';

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [copiedType, setCopiedType] = useState<string | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Prompt instruction:
    // If no backend is configured, do NOT pretend messages are sent.
    // Instead show: "Contact form backend is not configured yet. Please email me directly."
    // Also provide: [ Email Me ] button opening mailto:hardikaggarwal347@gmail.com
    setFormSubmitted(true);
  };

  const copyToClipboard = (text: string, type: string) => {
    navigator.clipboard.writeText(text);
    setCopiedType(type);
    setTimeout(() => {
      setCopiedType(null);
    }, 2500);
  };

  const mailtoLink = `mailto:${portfolioData.personal.email}?subject=${encodeURIComponent(
    formData.name ? `Portfolio Inquiry from ${formData.name}` : 'Portfolio Inquiry'
  )}&body=${encodeURIComponent(
    formData.message ? `${formData.message}\n\nFrom: ${formData.name} (${formData.email})` : ''
  )}`;

  return (
    <section id="contact" className="py-20 bg-white border-t border-slate-100 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-14">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 border border-blue-100 text-blue-700 text-xs font-bold tracking-wider mb-3">
            <span>GET IN TOUCH</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Let's Connect
          </h2>
          <p className="text-slate-600 mt-2 text-base sm:text-lg">
            Have an opportunity, project idea, or just want to say hello?
          </p>
          <div className="h-1 w-16 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-full mt-3" />
        </div>

        {/* 2 Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
          {/* LEFT: Contact Information */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-[#F8FAFC] rounded-3xl p-7 sm:p-8 border border-slate-200">
              <h3 className="text-xl font-bold text-slate-900 mb-2">
                {portfolioData.personal.name}
              </h3>
              <p className="text-xs sm:text-sm text-slate-500 mb-6">
                {portfolioData.personal.title}
              </p>

              <div className="space-y-5 text-sm">
                {/* Email Item */}
                <div className="flex items-start justify-between gap-3 p-3.5 rounded-2xl bg-white border border-slate-200/80 shadow-xs">
                  <div className="flex items-center gap-3 min-w-0">
                    <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center shrink-0">
                      <Mail className="w-5 h-5" />
                    </div>
                    <div className="min-w-0">
                      <div className="text-xs text-slate-400 font-medium">Email</div>
                      <a
                        href={`mailto:${portfolioData.personal.email}`}
                        className="text-slate-900 font-semibold hover:text-blue-600 transition-colors text-xs sm:text-sm truncate block"
                      >
                        {portfolioData.personal.email}
                      </a>
                    </div>
                  </div>
                  <button
                    type="button"
                    onClick={() => copyToClipboard(portfolioData.personal.email, 'email')}
                    className="p-2 text-slate-400 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors cursor-pointer shrink-0"
                    title="Copy Email"
                  >
                    {copiedType === 'email' ? (
                      <Check className="w-4 h-4 text-emerald-600" />
                    ) : (
                      <Copy className="w-4 h-4" />
                    )}
                  </button>
                </div>

                {/* Phone Item */}
                <div className="flex items-start justify-between gap-3 p-3.5 rounded-2xl bg-white border border-slate-200/80 shadow-xs">
                  <div className="flex items-center gap-3 min-w-0">
                    <div className="w-10 h-10 rounded-xl bg-cyan-50 text-cyan-600 flex items-center justify-center shrink-0">
                      <Phone className="w-5 h-5" />
                    </div>
                    <div className="min-w-0">
                      <div className="text-xs text-slate-400 font-medium">Phone</div>
                      <a
                        href={`tel:${portfolioData.personal.phone}`}
                        className="text-slate-900 font-semibold hover:text-cyan-700 transition-colors text-xs sm:text-sm truncate block"
                      >
                        {portfolioData.personal.phone}
                      </a>
                    </div>
                  </div>
                  <button
                    type="button"
                    onClick={() => copyToClipboard(portfolioData.personal.phone, 'phone')}
                    className="p-2 text-slate-400 hover:text-cyan-600 hover:bg-cyan-50 rounded-lg transition-colors cursor-pointer shrink-0"
                    title="Copy Phone"
                  >
                    {copiedType === 'phone' ? (
                      <Check className="w-4 h-4 text-emerald-600" />
                    ) : (
                      <Copy className="w-4 h-4" />
                    )}
                  </button>
                </div>

                {/* Location Item */}
                <div className="flex items-center gap-3 p-3.5 rounded-2xl bg-white border border-slate-200/80 shadow-xs">
                  <div className="w-10 h-10 rounded-xl bg-slate-100 text-slate-600 flex items-center justify-center shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs text-slate-400 font-medium">Location</div>
                    <div className="text-slate-900 font-semibold text-xs sm:text-sm">
                      {portfolioData.personal.location}
                    </div>
                  </div>
                </div>

                {/* LinkedIn Item */}
                <div className="flex items-center justify-between gap-3 p-3.5 rounded-2xl bg-white border border-slate-200/80 shadow-xs hover:border-blue-300 transition-colors">
                  <div className="flex items-center gap-3 min-w-0">
                    <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center shrink-0">
                      <Linkedin className="w-5 h-5" />
                    </div>
                    <div className="min-w-0">
                      <div className="text-xs text-slate-400 font-medium">LinkedIn</div>
                      <a
                        href={portfolioData.socialLinks.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-slate-900 font-semibold hover:text-blue-600 transition-colors text-xs sm:text-sm truncate block"
                      >
                        hardik-aggarwal-253697384
                      </a>
                    </div>
                  </div>
                  <a
                    href={portfolioData.socialLinks.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 text-slate-400 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors shrink-0"
                    title="Open LinkedIn"
                  >
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </div>

                {/* GitHub Item */}
                <div className="flex items-center justify-between gap-3 p-3.5 rounded-2xl bg-white border border-slate-200/80 shadow-xs hover:border-slate-400 transition-colors">
                  <div className="flex items-center gap-3 min-w-0">
                    <div className="w-10 h-10 rounded-xl bg-slate-100 text-slate-800 flex items-center justify-center shrink-0">
                      <Github className="w-5 h-5" />
                    </div>
                    <div className="min-w-0">
                      <div className="text-xs text-slate-400 font-medium">GitHub</div>
                      <a
                        href={portfolioData.socialLinks.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-slate-900 font-semibold hover:text-blue-600 transition-colors text-xs sm:text-sm truncate block"
                      >
                        hardikaggarwal347
                      </a>
                    </div>
                  </div>
                  <a
                    href={portfolioData.socialLinks.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 text-slate-400 hover:text-slate-900 hover:bg-slate-100 rounded-lg transition-colors shrink-0"
                    title="Open GitHub"
                  >
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </div>
              </div>

              {/* Quick direct note */}
              <div className="mt-6 p-4 rounded-2xl bg-blue-50/60 border border-blue-100 text-xs text-slate-600 leading-relaxed">
                <span>
                  Seeking 2026 internships in AI engineering, Python development, or full-stack software development. Replies typically within 24 hours.
                </span>
              </div>
            </div>
          </div>

          {/* RIGHT: Contact Form */}
          <div className="lg:col-span-7">
            <div className="bg-white rounded-3xl p-7 sm:p-9 border border-slate-200 shadow-sm relative">
              <h3 className="text-xl font-bold text-slate-900 mb-6 flex items-center gap-2">
                <MessageSquare className="w-5 h-5 text-blue-600" />
                <span>Send a Direct Note</span>
              </h3>

              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label htmlFor="name" className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                    Name
                  </label>
                  <input
                    id="name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Your name or company"
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-100 text-slate-900 text-sm outline-hidden transition-all bg-slate-50/50 focus:bg-white"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                    Email
                  </label>
                  <input
                    id="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="your.email@example.com"
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-100 text-slate-900 text-sm outline-hidden transition-all bg-slate-50/50 focus:bg-white"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    required
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Tell me about your internship opportunity, collaboration idea, or question..."
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-100 text-slate-900 text-sm outline-hidden transition-all resize-none bg-slate-50/50 focus:bg-white"
                  />
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 text-sm font-bold text-white bg-blue-600 hover:bg-blue-700 active:bg-blue-800 rounded-xl shadow-md hover:shadow-lg transition-all duration-200 cursor-pointer"
                  >
                    <Send className="w-4 h-4" />
                    <span>Send Message</span>
                  </button>
                </div>
              </form>

              {/* Requirement: If submitted, show notification and direct email button */}
              {formSubmitted && (
                <div className="mt-6 p-5 rounded-2xl bg-amber-50/90 border border-amber-200 text-amber-900 text-xs sm:text-sm animate-in fade-in duration-200">
                  <div className="flex items-start gap-3">
                    <AlertCircle className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
                    <div className="space-y-2">
                      <p className="font-semibold text-amber-800">
                        Contact form backend is not configured yet. Please email me directly.
                      </p>
                      <p className="text-amber-700 text-xs">
                        Click the button below to automatically compose an email to <span className="font-mono font-bold">{portfolioData.personal.email}</span> with your message.
                      </p>
                      <div className="pt-1">
                        <a
                          href={mailtoLink}
                          className="inline-flex items-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg text-xs font-bold shadow-xs transition-colors cursor-pointer"
                        >
                          <Mail className="w-3.5 h-3.5" />
                          <span>Email Me Directly</span>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
