import React from 'react';
import { BallSeamWatermark } from '../components/StadiumGraphics';

export const Skills = () => {
  const skillList = [
    {
      name: 'React.js',
      category: 'Web Dev',
      icon: (
        <svg viewBox="-11.5 -10.23174 23 20.46348" className="w-8 h-8 text-[#61dafb]" fill="none" stroke="currentColor" strokeWidth="1">
          <circle cx="0" cy="0" r="2.05" fill="#61dafb"/>
          <g stroke="#61dafb">
            <ellipse rx="11" ry="4.2"/>
            <ellipse rx="11" ry="4.2" transform="rotate(60)"/>
            <ellipse rx="11" ry="4.2" transform="rotate(120)"/>
          </g>
        </svg>
      ),
    },
    {
      name: 'Node.js',
      category: 'Backend',
      icon: (
        <svg viewBox="0 0 24 24" className="w-8 h-8 text-[#339933]" fill="currentColor">
          <path d="M12 2l10 5.8v11.6L12 25.2 2 19.4V7.8L12 2zm0 2.3L4 8.9v9.2l8 4.6 8-4.6V8.9l-8-4.6z"/>
        </svg>
      ),
    },
    {
      name: 'Express.js',
      category: 'Backend',
      icon: (
        <div className="w-8 h-8 rounded-full bg-slate-800 border border-slate-700 text-slate-200 font-bold flex items-center justify-center text-xs">
          ex
        </div>
      ),
    },
    {
      name: 'JavaScript',
      category: 'Programming',
      icon: (
        <div className="w-8 h-8 rounded bg-[#f7df1e] text-black font-extrabold flex items-center justify-center text-xs tracking-tighter shadow-sm">
          JS
        </div>
      ),
    },
    {
      name: 'C++',
      category: 'Programming',
      icon: (
        <div className="w-8 h-8 rounded-full bg-[#00599c]/20 border border-[#00599c] text-[#00599c] font-bold flex items-center justify-center text-[11px]">
          C++
        </div>
      ),
    },
    {
      name: 'Generative AI',
      category: 'AI & LLMs',
      icon: (
        <div className="w-8 h-8 rounded-lg bg-sky-500/20 border border-sky-400 text-sky-300 font-extrabold flex items-center justify-center text-[10px]">
          AI/RAG
        </div>
      ),
    },
    {
      name: 'HTML & CSS',
      category: 'Frontend',
      icon: (
        <svg viewBox="0 0 24 24" className="w-8 h-8 text-[#e34f26]" fill="currentColor">
          <path d="M1.5 0h21l-1.9 21.2L12 24l-8.6-2.8L1.5 0zm17.6 5.8H5.6l.4 4.5h11.8l-.5 5.5-5.3 1.5-5.3-1.5-.3-3.2H4.1l.6 5.3 7.3 2 7.3-2 1-11.6z"/>
        </svg>
      ),
    },
    {
      name: 'MongoDB',
      category: 'Database',
      icon: (
        <svg viewBox="0 0 24 24" className="w-8 h-8 text-[#47A248]" fill="currentColor">
          <path d="M12 0s-7.5 7.5-7.5 13.5C4.5 19.5 7.8 24 12 24s7.5-4.5 7.5-10.5C19.5 7.5 12 0 12 0zm-.7 21.7c-.4-.5-.7-1.1-.7-1.8 0-1.8 1.4-3.3 3.2-3.3.4 0 .8.1 1.2.2-1 2.9-2.7 4.5-3.7 4.9z"/>
        </svg>
      ),
    },
    {
      name: 'Git & GitHub',
      category: 'Tools',
      icon: (
        <svg viewBox="0 0 24 24" className="w-8 h-8 text-[#f05032]" fill="currentColor">
          <path d="M2.6 10.6L10.6 2.6c.8-.8 2.1-.8 2.8 0l8 8c.8.8.8 2.1 0 2.8l-8 8c-.8.8-2.1.8-2.8 0l-8-8c-.8-.7-.8-2 0-2.8zm8.6 6.6c.5.5 1.4.5 1.9 0l3-3c.5-.5.5-1.4 0-1.9-.5-.5-1.4-.5-1.9 0l-1.3 1.3V8.8c.4-.3.7-.8.7-1.3 0-1-.8-1.8-1.8-1.8s-1.8.8-1.8 1.8c0 .6.3 1.1.7 1.4v4.9c-.4.3-.7.8-.7 1.3 0 1 .8 1.8 1.8 1.8z"/>
        </svg>
      ),
    },
    {
      name: 'VS Code',
      category: 'Tools',
      icon: (
        <svg viewBox="0 0 24 24" className="w-8 h-8 text-[#007acc]" fill="currentColor">
          <path d="M23.15 2.587L18.21.21a1.494 1.494 0 0 0-1.705.29l-9.46 8.63-4.12-3.128a.999.999 0 0 0-1.276.057L.327 7.276A1 1 0 0 0 .32 8.68l3.92 3.32-3.92 3.32a1 1 0 0 0 .007 1.404l1.322 1.217a1 1 0 0 0 1.276.057l4.12-3.128 9.46 8.63a1.492 1.492 0 0 0 1.704.29l4.94-2.377A1.5 1.5 0 0 0 24 20.06V3.939a1.5 1.5 0 0 0-.85-1.352z"/>
        </svg>
      ),
    },
    {
      name: 'Figma',
      category: 'Design',
      icon: (
        <svg viewBox="0 0 24 24" className="w-8 h-8" fill="none">
          <path d="M8 24c2.2 0 4-1.8 4-4v-4H8c-2.2 0-4 1.8-4 4s1.8 4 4 4z" fill="#0ACF83"/>
          <path d="M4 12c0-2.2 1.8-4 4-4h4v8H8c-2.2 0-4-1.8-4-4z" fill="#A259FF"/>
          <path d="M4 4c0-2.2 1.8-4 4-4h4v8H8C5.8 8 4 6.2 4 4z" fill="#F24E1E"/>
          <path d="M12 0h4c2.2 0 4 1.8 4 4s-1.8 4-4 4h-4V0z" fill="#FF7262"/>
          <path d="M20 12c0 2.2-1.8 4-4 4s-4-1.8-4-4 1.8-4 4-4 4 1.8 4 4z" fill="#1ABCFE"/>
        </svg>
      ),
    },
    {
      name: 'DSA & Core CS',
      category: 'Core CS',
      icon: (
        <div className="w-8 h-8 rounded-lg bg-emerald-500/20 border border-emerald-400 text-emerald-300 font-bold flex items-center justify-center text-[10px]">
          DBMS/OS
        </div>
      ),
    },
  ];

  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          {/* Left Column: Heading, Narrative & Chalk Doodle */}
          <div className="lg:col-span-5">
            <div className="mb-6">
              <span className="font-handwriting text-3xl sm:text-4xl text-amber-400 font-bold tracking-wider block mb-1">
                02
              </span>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-black text-white tracking-wide uppercase inline-block brush-underline mb-4">
                SKILLS
              </h2>
            </div>

            <p className="text-slate-300 text-sm sm:text-base leading-relaxed mb-8 max-w-md">
              Here are some of the technologies and tools I work with to build web applications, AI workflows, and bring ideas to life.
            </p>

            {/* Handwritten Note matching reference */}
            <div className="transform -rotate-3 mb-6">
              <span className="font-handwriting text-2xl sm:text-3xl text-amber-300 tracking-wide block leading-tight">
                Good Tools<br />Build<br />Great Ideas
              </span>
            </div>
          </div>

          {/* Right Column: Grid of Tech Cards & Corner Cricket Seam */}
          <div className="lg:col-span-7 relative">
            
            {/* Grid of Tech Cards (4x3 layout) */}
            <div className="grid grid-cols-3 sm:grid-cols-4 gap-3 sm:gap-4 relative z-10">
              {skillList.map((skill, index) => (
                <div
                  key={index}
                  className="tech-card rounded-2xl p-4 sm:p-5 flex flex-col items-center justify-center text-center cursor-default group"
                >
                  <div className="mb-2 group-hover:scale-110 transition-transform flex items-center justify-center h-10">
                    {skill.icon}
                  </div>
                  <span className="font-display font-bold text-xs sm:text-sm text-slate-200 group-hover:text-amber-300 transition-colors">
                    {skill.name}
                  </span>
                  <span className="text-[10px] font-mono text-slate-500 mt-0.5">
                    {skill.category}
                  </span>
                </div>
              ))}
            </div>

            {/* Bottom Right Cricket Ball Watermark */}
            <div className="absolute -bottom-6 -right-6 pointer-events-none opacity-40 z-0">
              <BallSeamWatermark className="w-28 h-28 text-slate-600" />
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};

export default Skills;
