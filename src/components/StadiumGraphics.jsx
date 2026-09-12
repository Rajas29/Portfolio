import React from 'react';

/**
 * Premium Realistic Cricket Photography Components
 * Features high-definition photography of Team India Jersey with "RAJAS 29",
 * English Willow cricket bat and red leather ball on turf, and night stadium wickets.
 */

// Crown doodle above logo
export const CrownDoodle = ({ className = "w-6 h-6 text-amber-400" }) => (
  <svg className={className} viewBox="0 0 40 30" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M4 22 L8 8 L16 16 L24 6 L32 16 L36 8 L36 22 Z" fill="rgba(251, 191, 36, 0.2)" />
    <circle cx="8" cy="6" r="1.5" fill="currentColor" />
    <circle cx="24" cy="4" r="1.5" fill="currentColor" />
    <circle cx="36" cy="6" r="1.5" fill="currentColor" />
  </svg>
);

// Hero Batsman: Realistic Indian Team Batsman (Jersey with RAJAS 29) under floodlights
export const HeroBatsmanIllustration = ({ className = "w-full h-auto" }) => (
  <div className={`relative ${className}`}>
    {/* Ambient Stadium Floodlight behind photo */}
    <div className="absolute -top-10 -right-10 w-72 h-72 bg-amber-400/20 rounded-full blur-3xl pointer-events-none" />
    <div className="absolute -bottom-10 -left-10 w-72 h-72 bg-blue-600/15 rounded-full blur-3xl pointer-events-none" />

    {/* Framed Cinematic Photo */}
    <div className="stadium-photo-frame group">
      <div className="relative overflow-hidden aspect-[4/3] sm:aspect-[4/3] rounded-2xl">
        <img
          src="/assets/hero_batsman.jpg"
          alt="Indian Cricket Team Batsman wearing Jersey with RAJAS 29 under stadium lights"
          className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
          loading="eager"
        />

        {/* Cinematic Vignette & Bottom Turf Gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#06080d] via-transparent to-transparent opacity-60" />
        <div className="absolute inset-0 ring-1 ring-inset ring-white/15 rounded-2xl pointer-events-none" />

        {/* Live Broadcast Badge Top Left */}
        <div className="absolute top-4 left-4 z-10 flex items-center gap-2 bg-[#06080d]/80 backdrop-blur-md border border-white/10 px-3 py-1 rounded-full text-[11px] font-mono font-semibold text-slate-200 shadow-md">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          <span>TEAM INDIA // #29</span>
        </div>

        {/* Name Plate Bottom Right */}
        <div className="absolute bottom-4 right-4 z-10 bg-[#002b5c]/85 backdrop-blur-md border border-amber-400/40 px-3.5 py-1.5 rounded-xl shadow-lg">
          <span className="font-sports font-bold text-sm tracking-wider text-white uppercase block leading-none">
            RAJAS IKHARKAR
          </span>
          <span className="text-[10px] font-mono text-amber-300 tracking-widest uppercase">
            B.TECH CSE • DEV #29
          </span>
        </div>
      </div>
    </div>
  </div>
);

// About Section Photo: Authentic Cricket Bat & Leather Ball on Green Turf
export const AboutCricketFrame = ({ className = "w-full h-auto" }) => (
  <div className={`relative ${className}`}>
    <div className="stadium-photo-frame group">
      <div className="relative overflow-hidden aspect-[4/3] rounded-2xl">
        <img
          src="/assets/about_kit.jpg"
          alt="English willow cricket bat and leather ball on cricket pitch during sunset"
          className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
          loading="lazy"
        />

        {/* Soft Vignette Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#06080d]/80 via-transparent to-transparent opacity-50" />
        <div className="absolute inset-0 ring-1 ring-inset ring-white/15 rounded-2xl pointer-events-none" />

        {/* Subtle Pitch Label */}
        <div className="absolute bottom-3 left-3 z-10 bg-[#06080d]/80 backdrop-blur-md border border-slate-700/60 px-3 py-1 rounded-lg text-[10px] font-mono text-amber-300">
          MATCH WILLOW & LEATHER // GOLDEN HOUR
        </div>
      </div>
    </div>
  </div>
);

// Contact Section Photo: Realistic Wooden Stumps & Ball on Pitch
export const ContactWicketsIllustration = ({ className = "w-full h-auto" }) => (
  <div className={`relative ${className}`}>
    <div className="stadium-photo-frame group">
      <div className="relative overflow-hidden aspect-[4/3] rounded-2xl">
        <img
          src="/assets/contact_stumps.jpg"
          alt="Cricket wooden stumps and red leather ball on pitch under stadium lights"
          className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
          loading="lazy"
        />

        {/* Soft Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#06080d]/70 via-transparent to-transparent opacity-60" />
        <div className="absolute inset-0 ring-1 ring-inset ring-white/15 rounded-2xl pointer-events-none" />

        {/* Status indicator */}
        <div className="absolute top-3 right-3 z-10 flex items-center gap-2 bg-[#06080d]/85 backdrop-blur-md border border-slate-700 px-3 py-1 rounded-full text-[11px] font-mono text-slate-200">
          <span className="w-2 h-2 rounded-full bg-amber-400" />
          <span>MATCH READY // CREASE</span>
        </div>
      </div>
    </div>
  </div>
);

// Ball seam watermark for Skills section
export const BallSeamWatermark = ({ className = "w-24 h-24 text-slate-700/30" }) => (
  <svg className={className} viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="2">
    <circle cx="50" cy="50" r="45" />
    <path d="M 25 15 Q 50 50 75 85" strokeWidth="3" strokeDasharray="4 3" />
    <path d="M 28 12 Q 53 47 78 82" strokeWidth="1" opacity="0.5" />
  </svg>
);
