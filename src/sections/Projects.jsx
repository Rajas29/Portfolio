import React from 'react';
import { portfolioData } from '../data/portfolioData';
import ProjectCard from '../components/ProjectCard';

export const Projects = () => {
  const { projects } = portfolioData;

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-7xl mx-auto">
        {/* Header with Chalk Doodle on the Right */}
        <div className="flex flex-col md:flex-row md:items-start justify-between gap-6 mb-12">
          <div>
            <span className="font-handwriting text-3xl sm:text-4xl text-amber-400 font-bold tracking-wider block mb-1">
              03
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-black text-white tracking-wide uppercase inline-block brush-underline mb-4">
              PROJECTS
            </h2>
            <p className="text-slate-400 text-sm sm:text-base max-w-xl leading-relaxed mt-2 font-normal">
              A few projects I've worked on, showcasing my skills and what I enjoy building.
            </p>
          </div>

          {/* Chalk Note & Doodle on the right matching reference */}
          <div className="hidden sm:flex flex-col items-end transform rotate-3">
            <span className="font-handwriting text-2xl sm:text-3xl text-amber-300 tracking-wide">
              Ideas → Code → Impact
            </span>
            <svg className="w-24 h-12 text-slate-600 mt-1 opacity-60" viewBox="0 0 100 50" fill="none" stroke="currentColor" strokeWidth="1.5">
              <rect x="5" y="5" width="90" height="40" rx="4" />
              <line x1="5" y1="15" x2="95" y2="15" />
              <circle cx="15" cy="10" r="2" fill="currentColor" />
              <circle cx="25" cy="10" r="2" fill="currentColor" />
              <line x1="15" y1="25" x2="55" y2="25" />
              <line x1="15" y1="35" x2="45" y2="35" />
            </svg>
          </div>
        </div>

        {/* 3 Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7">
          {projects.map((project, index) => (
            <ProjectCard key={project.title} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
