import React from 'react';
import { Trophy, GraduationCap, Award, CheckCircle2, Star, ShieldCheck, Activity, Target } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export const Experience = () => {
  const { experience, education, achievements, certifications } = portfolioData;

  return (
    <section id="experience" className="py-20 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Column: Player Innings Telemetry & Chalk Quote */}
          <div className="lg:col-span-4 relative flex flex-col items-center justify-center">
            
            {/* Athletic Telemetry Card */}
            <div className="w-full rounded-2xl bg-gradient-to-b from-[#0e1624] to-[#070b10] border border-amber-400/30 p-6 shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-amber-400/10 rounded-full blur-2xl pointer-events-none" />
              
              <div className="flex items-center justify-between pb-3 mb-4 border-b border-slate-800">
                <div className="flex items-center gap-2">
                  <Activity className="w-4 h-4 text-emerald-400 animate-pulse" />
                  <span className="font-mono text-xs text-slate-300 font-bold uppercase tracking-wider">
                    CAREER TELEMETRY
                  </span>
                </div>
                <span className="text-[10px] font-mono text-amber-300 bg-amber-400/10 px-2 py-0.5 rounded border border-amber-400/20">
                  TEAM INDIA #29
                </span>
              </div>

              <div className="space-y-3 font-mono text-xs">
                <div className="flex items-center justify-between p-2.5 rounded-xl bg-slate-900/80 border border-slate-800">
                  <span className="text-slate-400">ROLE:</span>
                  <span className="text-emerald-400 font-bold">Web & GenAI Developer</span>
                </div>

                <div className="flex items-center justify-between p-2.5 rounded-xl bg-slate-900/80 border border-slate-800">
                  <span className="text-slate-400">INTERNSHIPS:</span>
                  <span className="text-slate-200 font-bold">3 Innings Completed</span>
                </div>

                <div className="flex items-center justify-between p-2.5 rounded-xl bg-slate-900/80 border border-slate-800">
                  <span className="text-slate-400">STACK:</span>
                  <span className="text-sky-300 font-bold">React • Node • GenAI</span>
                </div>

                <div className="flex items-center justify-between p-2.5 rounded-xl bg-slate-900/80 border border-slate-800">
                  <span className="text-slate-400">STATUS:</span>
                  <span className="text-amber-400 font-bold">Match Ready</span>
                </div>
              </div>
            </div>

            {/* Handwritten Chalk Quote matching reference */}
            <div className="transform -rotate-3 mt-6 z-10">
              <span className="font-handwriting text-3xl sm:text-4xl text-amber-300 tracking-wide block leading-tight text-center">
                Discipline<br />Builds<br />Freedom
              </span>
            </div>

          </div>

          {/* Right Column: Experience Timeline, Education & Certifications */}
          <div className="lg:col-span-8">
            {/* Header */}
            <div className="mb-8">
              <span className="font-handwriting text-3xl sm:text-4xl text-amber-400 font-bold tracking-wider block mb-1">
                04
              </span>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-black text-white tracking-wide uppercase inline-block brush-underline mb-4">
                EXPERIENCE
              </h2>
            </div>

            {/* Main Cards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
              
              {/* Left Column: 3 Internships from Resume */}
              <div className="md:col-span-7 space-y-4">
                {experience.map((item, index) => (
                  <div
                    key={index}
                    className="rounded-2xl bg-[#0e1520] border border-slate-800 p-5 sm:p-6 hover:border-amber-400/40 transition-all group shadow-card-glow"
                  >
                    <div className="flex items-start justify-between gap-2 mb-2">
                      <div>
                        <h3 className="font-display font-bold text-lg text-slate-100 group-hover:text-amber-300 transition-colors">
                          {item.company}
                        </h3>
                        <span className="font-mono text-xs text-amber-400 font-semibold block">
                          {item.role}
                        </span>
                      </div>
                      <span className="font-mono text-[11px] text-slate-400 bg-slate-900 px-2.5 py-1 rounded border border-slate-800 shrink-0">
                        {item.period}
                      </span>
                    </div>

                    <ul className="space-y-1.5 text-slate-300 text-xs sm:text-sm mt-3 list-disc list-inside leading-relaxed">
                      {item.points.map((pt, pIdx) => (
                        <li key={pIdx}>{pt}</li>
                      ))}
                    </ul>

                    <div className="flex flex-wrap gap-1.5 mt-4 pt-3 border-t border-slate-800/80">
                      {item.tags.map((tag, tIdx) => (
                        <span
                          key={tIdx}
                          className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-900 text-slate-400 border border-slate-800"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>

              {/* Right Column: Education & Achievements/Certifications from Resume */}
              <div className="md:col-span-5 space-y-4">
                
                {/* Education Card */}
                <div className="rounded-2xl bg-[#0e1520] border border-slate-800 p-5 sm:p-6 shadow-card-glow">
                  <div className="flex items-center gap-2 mb-3 pb-2 border-b border-slate-800/80">
                    <GraduationCap className="w-4 h-4 text-emerald-400" />
                    <span className="font-mono text-xs text-slate-300 font-bold uppercase tracking-wider">
                      EDUCATION RECORD
                    </span>
                  </div>

                  {education.map((edu, eIdx) => (
                    <div key={eIdx} className={`${eIdx > 0 ? 'mt-4 pt-3 border-t border-slate-800/60' : ''}`}>
                      <h4 className="font-display font-bold text-sm text-slate-100">
                        {edu.institution}
                      </h4>
                      <p className="text-xs text-amber-300 font-medium">
                        {edu.degree}
                      </p>
                      <div className="flex items-center justify-between text-[11px] font-mono text-slate-400 mt-1">
                        <span>{edu.timeline}</span>
                        {edu.gpa && <span className="text-emerald-400 font-bold">{edu.gpa}</span>}
                        {edu.score && <span className="text-emerald-400 font-bold">{edu.score}</span>}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Achievements Card */}
                <div className="rounded-2xl bg-[#0e1520] border border-slate-800 p-5 sm:p-6 shadow-card-glow">
                  <div className="flex items-center gap-2 mb-3 pb-2 border-b border-slate-800/80">
                    <Trophy className="w-4 h-4 text-amber-400" />
                    <span className="font-mono text-xs text-slate-300 font-bold uppercase tracking-wider">
                      ACHIEVEMENTS
                    </span>
                  </div>

                  <div className="space-y-2.5">
                    {achievements.map((ach, aIdx) => (
                      <div key={aIdx} className="flex items-start gap-2 text-xs">
                        <Star className="w-3.5 h-3.5 text-amber-400 shrink-0 mt-0.5" />
                        <div>
                          <span className="font-semibold text-slate-200 block">{ach.title}</span>
                          <span className="text-slate-400 text-[11px]">{ach.subtitle}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Certifications Card */}
                <div className="rounded-2xl bg-[#0e1520] border border-slate-800 p-5 sm:p-6 shadow-card-glow">
                  <div className="flex items-center gap-2 mb-3 pb-2 border-b border-slate-800/80">
                    <ShieldCheck className="w-4 h-4 text-sky-400" />
                    <span className="font-mono text-xs text-slate-300 font-bold uppercase tracking-wider">
                      CERTIFICATIONS
                    </span>
                  </div>

                  <div className="space-y-2 text-xs">
                    {certifications.map((cert, cIdx) => (
                      <div key={cIdx} className="flex items-center justify-between text-slate-300">
                        <span className="truncate pr-2">{cert.title}</span>
                        <span className="font-mono text-[10px] text-sky-400 bg-sky-950/60 px-1.5 py-0.5 rounded border border-sky-800/40 shrink-0">
                          {cert.issuer}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

              </div>

            </div>

          </div>

        </div>
      </div>
    </section>
  );
};

export default Experience;
