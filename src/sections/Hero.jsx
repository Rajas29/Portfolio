import React from 'react';
import { ArrowRight, Download, ChevronDown, Code, Sparkles, Terminal } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';
import { HeroBatsmanIllustration } from '../components/StadiumGraphics';

export const Hero = () => {
  const { personal } = portfolioData;

  return (
    <section
      id="home"
      className="relative min-h-[92vh] flex items-center justify-center pt-28 pb-16 px-4 sm:px-6 lg:px-8 overflow-hidden"
    >
      {/* Stadium Ambient Floodlight Glow */}
      <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-amber-500/10 rounded-full blur-[140px] pointer-events-none animate-stadium-haze" />
      <div className="absolute top-1/3 right-1/4 w-[600px] h-[600px] bg-blue-600/10 rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 w-[800px] h-[200px] bg-emerald-600/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
          
          {/* Left Column: Typography & CTAs */}
          <div className="lg:col-span-6 xl:col-span-7 text-center sm:text-left pt-2">
            
            {/* "HELLO, I'M" + Broadcast Badge */}
            <div className="flex flex-wrap items-center justify-center sm:justify-start gap-2.5 mb-3">
              <span className="text-slate-400 font-mono text-xs sm:text-sm font-semibold tracking-widest uppercase">
                HELLO, I'M
              </span>
              <span className="inline-flex items-center gap-1.5 text-xs font-mono font-bold text-amber-300 bg-amber-400/10 border border-amber-400/25 px-3 py-0.5 rounded-full">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                TEAM INDIA // #29
              </span>
            </div>

            {/* Massive Name with Premium Sharp Athletic & Modern Typography */}
            <h1 className="font-display font-black text-5xl sm:text-7xl md:text-8xl tracking-tight text-white leading-[1.02] mb-3">
              <span className="text-amber-400">RAJAS</span>{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-slate-100 via-slate-200 to-amber-200">
                IKHARKAR
              </span>
            </h1>

            {/* Role Header */}
            <div className="flex flex-wrap items-center justify-center sm:justify-start gap-2 sm:gap-3 text-xs sm:text-sm font-sports font-bold tracking-widest text-slate-200 mb-6 uppercase">
              <span className="text-emerald-400">WEB DEVELOPER</span>
              <span className="text-slate-600">•</span>
              <span className="text-sky-400">GENERATIVE AI</span>
              <span className="text-slate-600">•</span>
              <span className="text-amber-300">OP JINDAL UNIVERSITY</span>
            </div>

            {/* Bio Narrative */}
            <p className="text-slate-300 text-sm sm:text-base max-w-xl leading-relaxed mb-8 font-normal">
              Just <span className="text-amber-300 underline underline-offset-4 decoration-amber-400/60 font-semibold">like cricket</span>, I believe in patience, strategy, and constant improvement. {personal.shortBio}
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center justify-center sm:justify-start gap-4">
              <a
                href="#projects"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-amber-400 hover:bg-amber-300 text-slate-950 font-display font-bold text-xs sm:text-sm tracking-wider transition-all duration-200 shadow-gold-pill hover:scale-105 active:scale-95"
              >
                <span>EXPLORE MY WORK</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href={personal.resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-slate-900/90 hover:bg-slate-800 text-slate-200 border border-slate-700/80 hover:border-amber-400/60 font-display font-semibold text-xs sm:text-sm tracking-wider transition-all duration-200 hover:scale-105 active:scale-95"
                title="Download Resume"
              >
                <Download className="w-4 h-4 text-amber-400" />
                <span>DOWNLOAD RESUME</span>
              </a>
            </div>

            {/* Scroll Indicator */}
            <div className="mt-10 sm:mt-14 hidden sm:flex items-center gap-2 text-slate-500 font-mono text-[11px] tracking-widest uppercase">
              <ChevronDown className="w-4 h-4 text-amber-400 animate-bounce" />
              <span>SCROLL TO EXPLORE INNINGS</span>
            </div>
          </div>

          {/* Right Column: Hero Stadium Cricketer (Indian Team Jersey with RAJAS 29) */}
          <div className="lg:col-span-6 xl:col-span-5 relative flex items-center justify-center">
            
            {/* Top-Right Chalk Note */}
            <div className="absolute -top-5 right-2 sm:right-6 z-20 pointer-events-none transform rotate-3">
              <span className="font-handwriting text-2xl sm:text-3xl text-amber-300/90 tracking-wide block leading-tight">
                Better<br />Every<br />Innings
              </span>
            </div>

            {/* Bottom-Left Chalk Note */}
            <div className="absolute -bottom-5 left-2 sm:left-4 z-20 pointer-events-none transform -rotate-2">
              <span className="font-handwriting text-xl sm:text-2xl text-amber-300/90 tracking-wide block leading-tight">
                Same<br />Game<br />Different<br />Platform
              </span>
            </div>

            {/* Realistic Indian Team Batsman Photo Frame */}
            <div className="w-full max-w-[500px]">
              <HeroBatsmanIllustration />
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;
