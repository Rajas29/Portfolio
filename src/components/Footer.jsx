import React from 'react';

export const Footer = () => {
  return (
    <footer className="border-t border-slate-900 bg-[#05070a] py-6 px-4 text-center">
      <p className="font-mono text-xs text-slate-500 tracking-wider">
        © {new Date().getFullYear()} Rajas Ikharkar. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
