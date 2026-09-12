import React from 'react';

export const StadiumBackground = () => {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden" aria-hidden="true">
      {/* Top Floodlight Glow / Night Stadium Beams */}
      <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-emerald-500/10 rounded-full blur-[140px] animate-stadium-pulse" />
      <div className="absolute top-20 left-[-10%] w-[500px] h-[400px] bg-emerald-600/5 rounded-full blur-[120px]" />
      <div className="absolute top-40 right-[-10%] w-[500px] h-[400px] bg-amber-500/5 rounded-full blur-[130px]" />

      {/* Center Field Ambient Turf Gradient */}
      <div className="absolute top-[35%] left-1/2 -translate-x-1/2 w-[1000px] h-[700px] bg-emerald-500/[0.04] rounded-full blur-[160px]" />

      {/* Abstract Cricket Pitch Crease & Turf Grid lines (very subtle) */}
      <div className="absolute inset-0 opacity-[0.04]">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="pitchGrid" width="80" height="80" patternUnits="userSpaceOnUse">
              <path d="M 80 0 L 0 0 0 80" fill="none" stroke="#10b981" strokeWidth="1" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#pitchGrid)" />
        </svg>
      </div>

      {/* Pitch Center Lane Guides (Architectural stadium perspective) */}
      <div className="absolute top-0 bottom-0 left-1/2 -translate-x-1/2 w-[720px] max-w-full border-x border-emerald-500/[0.03] pointer-events-none" />
      <div className="absolute top-0 bottom-0 left-1/2 -translate-x-1/2 w-[360px] max-w-full border-x border-emerald-500/[0.02] pointer-events-none" />
    </div>
  );
};

export default StadiumBackground;
