import React from 'react';
import { ArrowRight, Github, Search, Sparkles, CheckSquare } from 'lucide-react';

export const ProjectCard = ({ project, index }) => {
  const renderPreviewMock = () => {
    if (index === 0) {
      // Perplexity AI Clone UI Mock
      return (
        <div className="w-full h-36 sm:h-40 rounded-xl bg-[#090d14] border border-slate-800 p-3.5 flex flex-col justify-between overflow-hidden relative group-hover:border-sky-500/40 transition-colors">
          <div className="flex items-center justify-between pb-2 border-b border-slate-800/80">
            <div className="flex items-center gap-2">
              <Search className="w-3.5 h-3.5 text-sky-400" />
              <span className="font-mono text-[11px] text-slate-300 truncate">Perplexity AI • Multi-Agent Search</span>
            </div>
            <span className="w-2 h-2 rounded-full bg-sky-400 animate-pulse" />
          </div>
          
          <div className="space-y-1.5 my-2">
            <div className="flex items-center gap-1.5">
              <span className="text-[9px] font-mono px-1.5 py-0.5 rounded bg-amber-400/10 text-amber-300 border border-amber-400/20">Groq LLM</span>
              <span className="text-[9px] font-mono px-1.5 py-0.5 rounded bg-sky-500/10 text-sky-300 border border-sky-500/20">Gemini Embeddings</span>
              <span className="text-[9px] font-mono px-1.5 py-0.5 rounded bg-emerald-500/10 text-emerald-300 border border-emerald-500/20">SearXNG</span>
            </div>
            <div className="h-2 w-4/5 bg-slate-800 rounded" />
          </div>

          <div className="flex items-center justify-between pt-1 border-t border-slate-800/60 text-[9px] font-mono text-slate-400">
            <span>RAG Document Streaming</span>
            <span className="text-emerald-400">Multi-Agent Online</span>
          </div>
        </div>
      );
    } else if (index === 1) {
      // Smart Office AI Mock
      return (
        <div className="w-full h-36 sm:h-40 rounded-xl bg-[#090d14] border border-slate-800 p-3.5 flex flex-col justify-between overflow-hidden relative group-hover:border-sky-500/40 transition-colors">
          <div className="flex items-center justify-between pb-2 border-b border-slate-800/80">
            <div className="flex items-center gap-2">
              <Sparkles className="w-3.5 h-3.5 text-amber-400" />
              <span className="font-mono text-[11px] text-slate-300 font-semibold">Smart Office AI • SOP Assistant</span>
            </div>
            <span className="text-[10px] font-mono text-amber-400 bg-amber-400/10 px-1.5 py-0.5 rounded">RAG</span>
          </div>

          <div className="grid grid-cols-2 gap-2 my-1">
            <div className="p-1.5 rounded bg-slate-900 border border-slate-800/80 text-[9px] font-mono text-slate-300">
              ⚡ Gemini API Docs Query
            </div>
            <div className="p-1.5 rounded bg-slate-900 border border-slate-800/80 text-[9px] font-mono text-slate-300">
              🗄 Supabase Vector Embeddings
            </div>
          </div>

          <div className="h-2 w-5/6 bg-slate-800/80 rounded mt-1" />
        </div>
      );
    } else {
      // Task Manager Mock
      return (
        <div className="w-full h-36 sm:h-40 rounded-xl bg-[#090d14] border border-slate-800 p-3.5 flex flex-col justify-between overflow-hidden relative group-hover:border-sky-500/40 transition-colors">
          <div className="flex items-center justify-between pb-2 border-b border-slate-800/80">
            <div className="flex items-center gap-2">
              <CheckSquare className="w-3.5 h-3.5 text-emerald-400" />
              <span className="font-mono text-[11px] text-slate-300 font-semibold">Task Manager • Full-Stack CRUD</span>
            </div>
            <span className="text-[10px] font-mono text-emerald-400">MongoDB</span>
          </div>

          <div className="space-y-1.5 my-2">
            <div className="flex items-center gap-2 text-[10px] font-mono text-slate-300">
              <div className="w-2.5 h-2.5 rounded bg-emerald-500/30 border border-emerald-400 flex items-center justify-center text-[7px]">✓</div>
              <span>React.js + Express.js REST API</span>
            </div>
            <div className="flex items-center gap-2 text-[10px] font-mono text-slate-400">
              <div className="w-2.5 h-2.5 rounded bg-slate-800 border border-slate-700" />
              <span>Persistent MongoDB Cloud Storage</span>
            </div>
          </div>

          <div className="flex items-center justify-between pt-1 border-t border-slate-800/60 text-[9px] font-mono text-slate-500">
            <span>Filter: Active Sprints</span>
            <span className="text-emerald-400">Updated Real-Time</span>
          </div>
        </div>
      );
    }
  };

  return (
    <div className="project-card-glow group rounded-2xl bg-[#0e1520] p-5 sm:p-6 flex flex-col justify-between transition-all duration-300">
      <div>
        {/* Mock Preview Window */}
        <div className="mb-5">
          {renderPreviewMock()}
        </div>

        {/* Project Title */}
        <h3 className="font-display font-bold text-xl sm:text-2xl text-slate-100 group-hover:text-amber-300 transition-colors mb-2">
          {project.title}
        </h3>

        {/* Description */}
        <p className="text-slate-400 text-xs sm:text-sm leading-relaxed mb-4">
          {project.description}
        </p>

        {/* Bullet points from resume */}
        <ul className="space-y-1 text-xs text-slate-300 mb-5 list-disc list-inside">
          {project.points && project.points.slice(0, 2).map((point, pIdx) => (
            <li key={pIdx} className="line-clamp-2">{point}</li>
          ))}
        </ul>

        {/* Tech Stack Pills */}
        <div className="flex flex-wrap gap-1.5 mb-6">
          {project.technologies.map((tech) => (
            <span
              key={tech}
              className="text-[11px] font-mono px-2.5 py-1 rounded bg-[#131c2b] text-slate-300 border border-slate-800"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>

      {/* Action Footer */}
      <div className="flex items-center justify-between pt-4 border-t border-slate-800/80 mt-auto">
        <a
          href={project.githubUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-amber-400 hover:text-amber-300 transition-colors group/link"
        >
          <span>View Project</span>
          <ArrowRight className="w-3.5 h-3.5 group-hover/link:translate-x-1 transition-transform" />
        </a>

        <a
          href={project.githubUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="p-2 rounded-lg bg-slate-900 border border-slate-800 text-slate-400 hover:text-white hover:border-slate-600 transition-colors"
          title="View Source on GitHub"
        >
          <Github className="w-4 h-4" />
        </a>
      </div>
    </div>
  );
};

export default ProjectCard;
