import React from 'react';

export const ScoreBadge = ({ 
  label, 
  value, 
  variant = 'emerald', 
  size = 'md',
  pulse = false,
  className = ''
}) => {
  const variantStyles = {
    emerald: 'bg-emerald-950/40 border-emerald-500/30 text-emerald-400',
    gold: 'bg-amber-950/40 border-amber-500/30 text-amber-400',
    slate: 'bg-slate-900/60 border-slate-700/50 text-slate-300',
    red: 'bg-rose-950/40 border-rose-500/30 text-rose-400',
  };

  const dotColors = {
    emerald: 'bg-emerald-400',
    gold: 'bg-amber-400',
    slate: 'bg-slate-400',
    red: 'bg-rose-400',
  };

  const sizeStyles = {
    sm: 'text-[11px] px-2.5 py-0.5 tracking-wider',
    md: 'text-xs px-3 py-1 tracking-widest',
    lg: 'text-sm px-4 py-1.5 tracking-widest',
  };

  return (
    <div
      className={`inline-flex items-center gap-2 rounded-full border font-mono uppercase font-semibold transition-colors duration-200 ${variantStyles[variant] || variantStyles.emerald} ${sizeStyles[size]} ${className}`}
    >
      {pulse && (
        <span className="relative flex h-2 w-2">
          <span className={`animate-ping absolute inline-flex h-full w-full rounded-full opacity-75 ${dotColors[variant] || 'bg-emerald-400'}`}></span>
          <span className={`relative inline-flex rounded-full h-2 w-2 ${dotColors[variant] || 'bg-emerald-400'}`}></span>
        </span>
      )}
      {label && <span className="text-slate-400 font-medium">{label}:</span>}
      <span className="digital-digit">{value}</span>
    </div>
  );
};

export default ScoreBadge;
