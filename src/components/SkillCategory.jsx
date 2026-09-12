import React from 'react';
import { Layers, Code2, Server, Wrench, Binary, Check } from 'lucide-react';

const categoryIcons = {
  FRONTEND: Layers,
  BACKEND: Server,
  PROGRAMMING: Code2,
  'TOOLS & ENVIRONMENT': Wrench,
  'CORE CS KNOWLEDGE': Binary,
};

export const SkillCategory = ({ category, tag, items }) => {
  const IconComponent = categoryIcons[category] || Layers;

  return (
    <div className="rounded-2xl bg-pitch-panel/70 border border-slate-800/90 hover:border-emerald-500/30 p-5 transition-all duration-300 hover:shadow-stadium-glow">
      {/* Category Header */}
      <div className="flex items-center justify-between pb-3 mb-4 border-b border-slate-800/80">
        <div className="flex items-center gap-2.5">
          <div className="p-2 rounded-lg bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
            <IconComponent className="w-4 h-4" />
          </div>
          <div>
            <h3 className="font-display font-bold text-base text-slate-100 tracking-wider">
              {category}
            </h3>
            <span className="font-mono text-[10px] text-amber-400/90 tracking-widest block">
              {tag}
            </span>
          </div>
        </div>
        <span className="font-mono text-xs text-slate-400 bg-slate-900 px-2 py-0.5 rounded border border-slate-800">
          {items.length} {items.length === 1 ? 'SKILL' : 'SKILLS'}
        </span>
      </div>

      {/* Skill List */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
        {items.map((skill) => (
          <div
            key={skill}
            className="group flex items-center justify-between px-3.5 py-2.5 rounded-xl bg-pitch-card/60 hover:bg-slate-800/80 border border-slate-800/80 hover:border-emerald-500/30 transition-all duration-200"
          >
            <span className="text-xs font-mono font-medium text-slate-200 group-hover:text-emerald-300 transition-colors">
              {skill}
            </span>
            <div className="flex items-center gap-1.5">
              {/* Telemetry active indicator */}
              <div className="w-1.5 h-1.5 rounded-full bg-emerald-400 opacity-60 group-hover:opacity-100 group-hover:shadow-[0_0_8px_rgba(52,211,153,0.8)] transition-all" />
              <Check className="w-3.5 h-3.5 text-emerald-400/70 group-hover:text-emerald-400 transition-colors" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SkillCategory;
