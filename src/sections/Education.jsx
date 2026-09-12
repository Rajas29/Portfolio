import React from 'react';
import { GraduationCap, School, Calendar, BookOpen, CheckCircle } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export const Education = () => {
  const { education } = portfolioData;

  return (
    <section id="education" className="py-20 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-12 pb-4 border-b border-slate-800">
          <div>
            <div className="flex items-center gap-2 text-xs font-mono text-emerald-400 uppercase tracking-widest mb-1.5 font-semibold">
              <GraduationCap className="w-4 h-4" />
              <span>ACADEMIC FOUNDATION</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-display font-extrabold text-white tracking-wide uppercase">
              CAREER RECORD
            </h2>
          </div>
          <div className="mt-2 sm:mt-0 font-mono text-xs text-amber-400 bg-amber-400/10 border border-amber-400/20 px-3 py-1 rounded-full w-fit">
            ACADEMIC TELEMETRY
          </div>
        </div>

        {/* Main Education Scoreboard Card */}
        <div className="rounded-2xl bg-gradient-to-br from-pitch-panel via-pitch-card to-slate-950 border border-slate-800 hover:border-emerald-500/30 p-6 sm:p-8 transition-all duration-300 hover:shadow-stadium-glow">
          {/* Header */}
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 mb-6 border-b border-slate-800/80">
            <div className="flex items-start gap-4">
              <div className="p-3.5 rounded-2xl bg-emerald-500/10 text-emerald-400 border border-emerald-500/25 shrink-0">
                <School className="w-6 h-6" />
              </div>
              <div>
                <span className="font-mono text-xs font-bold text-amber-400 bg-amber-400/10 px-2.5 py-0.5 rounded border border-amber-400/20 mb-2 inline-block">
                  UNDERGRADUATE DEGREE
                </span>
                <h3 className="text-2xl sm:text-3xl font-display font-bold text-slate-100 tracking-wide">
                  {education.degree}
                </h3>
                <p className="text-base text-slate-300 mt-1 font-medium">
                  {education.institution}
                </p>
              </div>
            </div>

            <div className="flex flex-col items-start md:items-end gap-1">
              <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-xl bg-pitch-dark text-emerald-300 border border-emerald-500/20 font-mono text-xs font-medium">
                <Calendar className="w-3.5 h-3.5 text-emerald-400" />
                {education.timeline}
              </span>
              <span className="font-mono text-[11px] text-slate-400 mt-1">
                MAJOR: COMPUTER SCIENCE & ENGINEERING
              </span>
            </div>
          </div>

          {/* Highlights & Core Coursework */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <BookOpen className="w-4 h-4 text-emerald-400" />
              <span className="font-mono text-xs uppercase tracking-widest text-slate-300 font-semibold">
                KEY ACADEMIC COURSEWORK
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
              {education.coursework.map((course, idx) => (
                <div
                  key={idx}
                  className="flex items-center gap-2.5 p-3 rounded-xl bg-pitch-dark/70 border border-slate-800 text-xs font-mono text-slate-200"
                >
                  <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>{course}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
