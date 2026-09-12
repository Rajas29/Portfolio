import React from 'react';
import { Download, Mail, ArrowUpRight, Zap } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export const ResumeCTA = () => {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-5xl mx-auto">
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-pitch-panel via-pitch-card to-pitch-darkest border border-emerald-500/30 p-8 sm:p-12 text-center shadow-2xl shadow-emerald-950/20">
          {/* Subtle stadium light glow behind banner */}
          <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-96 h-48 bg-emerald-500/15 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute -bottom-24 right-1/4 w-72 h-36 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />

          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-950/60 border border-emerald-500/30 text-emerald-300 font-mono text-xs tracking-widest uppercase mb-6 font-semibold">
            <Zap className="w-3.5 h-3.5 text-amber-400" />
            <span>OPPORTUNITY READY // CLASS OF 2027</span>
          </div>

          {/* Heading */}
          <h2 className="text-3xl sm:text-5xl font-display font-extrabold text-white tracking-wide uppercase mb-4">
            READY FOR THE NEXT INNINGS?
          </h2>

          <p className="text-slate-300 text-base sm:text-lg max-w-xl mx-auto mb-8 font-light">
            "Let's build something meaningful." Open to Web Development internships, software engineering opportunities, and technical collaborations.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-wrap items-center justify-center gap-4">
            <a
              href={portfolioData.personal.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-mono text-xs sm:text-sm font-bold tracking-wider transition-all duration-200 shadow-lg shadow-emerald-500/30 hover:shadow-emerald-400/50 hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-emerald-400"
              title="Download or View Resume"
            >
              <Download className="w-4 h-4" />
              <span>DOWNLOAD RESUME</span>
            </a>

            <a
              href="#contact"
              className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-xl bg-slate-900/90 hover:bg-slate-800 text-slate-200 border border-slate-700/80 hover:border-emerald-500/40 font-mono text-xs sm:text-sm font-semibold tracking-wider transition-all duration-200 hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-emerald-400"
            >
              <Mail className="w-4 h-4 text-emerald-400" />
              <span>CONTACT ME</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ResumeCTA;
