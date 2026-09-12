import React from 'react';

export const SectionHeader = ({
  number,
  title,
  subtitle,
  className = '',
}) => {
  return (
    <div className={`mb-12 ${className}`}>
      {/* Number in golden handwriting style */}
      {number && (
        <span className="font-handwriting text-3xl sm:text-4xl text-amber-400 font-bold tracking-wider block mb-1">
          {number}
        </span>
      )}

      {/* Main Title with Yellow Brush Underline */}
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-extrabold text-white tracking-wide uppercase inline-block brush-underline mb-4">
        {title}
      </h2>

      {/* Subtitle text */}
      {subtitle && (
        <p className="text-slate-400 text-sm sm:text-base max-w-2xl leading-relaxed mt-2 font-normal">
          {subtitle}
        </p>
      )}
    </div>
  );
};

export default SectionHeader;
