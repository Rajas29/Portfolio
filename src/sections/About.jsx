import React from 'react';
import { AboutCricketFrame, CrownDoodle } from '../components/StadiumGraphics';
import { portfolioData } from '../data/portfolioData';

export const About = () => {
  const { personal, education } = portfolioData;
  const primaryEdu = education[0];

  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
          
          {/* Left Column: Heading, Bio & Quick Cards */}
          <div className="lg:col-span-7">
            {/* 01 ABOUT ME Header */}
            <div className="mb-6">
              <span className="font-handwriting text-3xl sm:text-4xl text-amber-400 font-bold tracking-wider block mb-1">
                01
              </span>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-black text-white tracking-wide uppercase inline-block brush-underline mb-4">
                ABOUT ME
              </h2>
            </div>

            {/* Narrative text matching verified resume */}
            <div className="text-slate-300 text-sm sm:text-base leading-relaxed space-y-4 mb-8 max-w-2xl">
              <p>
                Hi, I'm <span className="text-slate-100 font-semibold underline underline-offset-4 decoration-amber-400">{personal.name}</span>, a Computer Science Engineering student at <span className="text-amber-300 font-medium">{primaryEdu.institution}, Raigarh</span> ({primaryEdu.gpa}).
              </p>
              <p>
                I am skilled in modern web technologies with hands-on experience in full-stack web development, backend engineering with <span className="text-emerald-400 font-mono">React.js</span>, <span className="text-emerald-400 font-mono">Node.js</span>, and <span className="text-emerald-400 font-mono">Express.js</span>, and practical implementation of <span className="text-sky-300 font-mono">Generative AI</span> (LLMs, RAG, and prompt engineering).
              </p>
              <p className="text-xs sm:text-sm text-slate-400 font-mono">
                🌍 Languages: {personal.languages.join(' • ')}
              </p>
            </div>

            {/* 3 Quick Mini Cards matching reference layout */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5 max-w-xl">
              {/* Card 1: Web Developer */}
              <div className="rounded-xl bg-[#0e1520] border border-slate-800 p-4 text-center hover:border-amber-400/40 transition-all hover:-translate-y-1 group shadow-card-glow">
                <div className="w-8 h-8 mx-auto rounded-lg bg-amber-400/10 text-amber-400 flex items-center justify-center font-mono font-bold text-sm mb-2 group-hover:scale-110 transition-transform">
                  &lt;/&gt;
                </div>
                <div className="font-display font-bold text-xs sm:text-sm text-slate-100">
                  Web & GenAI Dev
                </div>
                <div className="text-[11px] font-mono text-slate-400 mt-0.5">
                  (In progress)
                </div>
              </div>

              {/* Card 2: Cricket Fan */}
              <div className="rounded-xl bg-[#0e1520] border border-slate-800 p-4 text-center hover:border-amber-400/40 transition-all hover:-translate-y-1 group shadow-card-glow">
                <div className="w-8 h-8 mx-auto rounded-lg bg-blue-500/10 text-blue-400 flex items-center justify-center text-sm mb-2 group-hover:scale-110 transition-transform">
                  🏏
                </div>
                <div className="font-display font-bold text-xs sm:text-sm text-slate-100">
                  Team India Fan
                </div>
                <div className="text-[11px] font-mono text-slate-400 mt-0.5">
                  (Always)
                </div>
              </div>

              {/* Card 3: Lifelong Learner */}
              <div className="rounded-xl bg-[#0e1520] border border-slate-800 p-4 text-center hover:border-amber-400/40 transition-all hover:-translate-y-1 group shadow-card-glow">
                <div className="w-8 h-8 mx-auto rounded-lg bg-emerald-500/10 text-emerald-400 flex items-center justify-center text-sm mb-2 group-hover:scale-110 transition-transform">
                  📚
                </div>
                <div className="font-display font-bold text-xs sm:text-sm text-slate-100">
                  Lifelong Learner
                </div>
                <div className="text-[11px] font-mono text-slate-400 mt-0.5">
                  (Always)
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Framed Pitch Graphic + Handwritten Note */}
          <div className="lg:col-span-5 relative flex flex-col items-center justify-center">
            
            {/* Top-Right Handwritten Chalk Note */}
            <div className="absolute -top-6 right-0 sm:right-4 z-20 pointer-events-none transform rotate-6 flex flex-col items-end">
              <span className="font-handwriting text-2xl sm:text-3xl text-amber-300 tracking-wide">
                Cricket<br />fuels my<br />mind.
              </span>
              <CrownDoodle className="w-6 h-5 text-amber-400 mt-1" />
            </div>

            {/* Frame Artwork */}
            <div className="w-full max-w-[440px]">
              <AboutCricketFrame />
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};

export default About;
