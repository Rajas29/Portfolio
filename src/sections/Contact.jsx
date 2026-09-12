import React, { useState } from 'react';
import { Mail, Github, Linkedin, Send, X, CheckCircle, ArrowRight, Phone } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';
import { ContactWicketsIllustration, CrownDoodle } from '../components/StadiumGraphics';

export const Contact = () => {
  const { socialLinks, personal } = portfolioData;

  const [modalOpen, setModalOpen] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setModalOpen(false);
      setFormData({ name: '', email: '', message: '' });
    }, 1800);
  };

  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Section Header */}
        <div className="mb-6">
          <span className="font-handwriting text-3xl sm:text-4xl text-amber-400 font-bold tracking-wider block mb-1">
            05
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-extrabold text-white tracking-wide uppercase inline-block brush-underline mb-4">
            CONTACT
          </h2>
          <p className="text-slate-300 text-sm sm:text-base max-w-xl leading-relaxed mt-2 font-normal">
            Let's connect! Whether it's a software engineering role, web development project, or just a friendly hello.
          </p>
        </div>

        {/* Content Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-end">
          
          {/* Left Column: Direct Contact Cards + Send Message Pill Button */}
          <div className="lg:col-span-6 space-y-6">
            
            {/* Contact Cards Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5">
              
              {/* GitHub Card */}
              <a
                href={socialLinks.github}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-2xl bg-[#0e1520] border border-slate-800 p-5 text-center hover:border-amber-400/40 transition-all hover:-translate-y-1 group"
              >
                <div className="w-9 h-9 mx-auto rounded-xl bg-slate-900 border border-slate-700 text-slate-300 flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
                  <Github className="w-5 h-5" />
                </div>
                <div className="font-display font-bold text-sm text-slate-100">
                  GitHub
                </div>
                <div className="text-xs font-mono text-slate-400 mt-1 truncate">
                  @Rajas29
                </div>
              </a>

              {/* LinkedIn Card */}
              <a
                href={socialLinks.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-2xl bg-[#0e1520] border border-slate-800 p-5 text-center hover:border-amber-400/40 transition-all hover:-translate-y-1 group"
              >
                <div className="w-9 h-9 mx-auto rounded-xl bg-blue-950/60 border border-blue-800/60 text-blue-400 flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
                  <Linkedin className="w-5 h-5" />
                </div>
                <div className="font-display font-bold text-sm text-slate-100">
                  LinkedIn
                </div>
                <div className="text-xs font-mono text-slate-400 mt-1 truncate">
                  /rajas-ikharkar
                </div>
              </a>

              {/* Email Card */}
              <a
                href={socialLinks.email}
                className="rounded-2xl bg-[#0e1520] border border-slate-800 p-5 text-center hover:border-amber-400/40 transition-all hover:-translate-y-1 group"
              >
                <div className="w-9 h-9 mx-auto rounded-xl bg-amber-950/60 border border-amber-800/60 text-amber-400 flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
                  <Mail className="w-5 h-5" />
                </div>
                <div className="font-display font-bold text-sm text-slate-100">
                  Email
                </div>
                <div className="text-[11px] font-mono text-slate-400 mt-1 truncate">
                  {socialLinks.emailDisplay}
                </div>
              </a>

            </div>

            {/* Direct Phone & Details Strip */}
            <div className="p-3.5 rounded-xl bg-[#0e1520] border border-slate-800 flex items-center justify-between text-xs font-mono text-slate-300">
              <span className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-emerald-400" />
                <span>Direct: +91 {personal.phone}</span>
              </span>
              <span className="text-amber-400">Available for Opportunities</span>
            </div>

            {/* "Send Message →" Yellow Pill Button */}
            <div>
              <button
                type="button"
                onClick={() => setModalOpen(true)}
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-amber-400 hover:bg-amber-300 text-slate-950 font-bold text-xs sm:text-sm tracking-wide transition-all duration-200 shadow-gold-pill hover:scale-105 active:scale-95"
              >
                <span>Send Message</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

          </div>

          {/* Right Column: Cricket Wickets under Floodlights + Chalk Notes */}
          <div className="lg:col-span-6 relative flex flex-col items-center justify-center">
            
            {/* Top-Right Chalk Note */}
            <div className="absolute top-2 right-4 sm:right-10 z-20 pointer-events-none transform rotate-3">
              <span className="font-handwriting text-2xl sm:text-3xl text-amber-300 tracking-wide block leading-tight text-right">
                Good<br />Things<br />Take<br />Time
              </span>
            </div>

            {/* Wickets Illustration */}
            <div className="w-full max-w-[480px]">
              <ContactWicketsIllustration />
            </div>

            {/* Bottom-Right Chalk Note */}
            <div className="absolute -bottom-2 right-2 sm:right-6 z-20 pointer-events-none flex flex-col items-end transform -rotate-3">
              <span className="font-handwriting text-xl sm:text-2xl text-amber-300 tracking-wide block leading-tight text-right">
                Play<br />Code<br />Grow
              </span>
              <CrownDoodle className="w-5 h-4 text-amber-400 mt-0.5" />
            </div>

          </div>

        </div>
      </div>

      {/* Message Modal */}
      {modalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
          <div className="relative w-full max-w-lg rounded-3xl bg-[#0e1520] border border-amber-400/40 p-6 sm:p-8 shadow-2xl">
            <button
              type="button"
              onClick={() => setModalOpen(false)}
              className="absolute top-5 right-5 p-2 rounded-full text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            {submitted ? (
              <div className="text-center py-8 space-y-3">
                <div className="w-12 h-12 rounded-full bg-emerald-500/20 text-emerald-400 mx-auto flex items-center justify-center">
                  <CheckCircle className="w-7 h-7" />
                </div>
                <h3 className="text-xl font-display font-bold text-white">Message Ready!</h3>
                <p className="text-xs text-slate-400">
                  Thank you for reaching out! You can also connect directly via email at {personal.email}.
                </p>
              </div>
            ) : (
              <div>
                <h3 className="text-2xl font-display font-bold text-white mb-1">
                  SEND A MESSAGE
                </h3>
                <p className="text-xs text-slate-400 mb-6">
                  Drop a note below to discuss project opportunities, technical roles, or collaborations.
                </p>

                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="block text-xs font-mono uppercase tracking-wider text-slate-300 mb-1">
                      Name
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="Your Name"
                      className="w-full px-4 py-2.5 rounded-xl bg-[#080c12] border border-slate-800 text-sm text-slate-100 focus:border-amber-400 outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono uppercase tracking-wider text-slate-300 mb-1">
                      Email
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="name@example.com"
                      className="w-full px-4 py-2.5 rounded-xl bg-[#080c12] border border-slate-800 text-sm text-slate-100 focus:border-amber-400 outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono uppercase tracking-wider text-slate-300 mb-1">
                      Message
                    </label>
                    <textarea
                      required
                      rows={3}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Your message..."
                      className="w-full px-4 py-2.5 rounded-xl bg-[#080c12] border border-slate-800 text-sm text-slate-100 focus:border-amber-400 outline-none resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3 rounded-xl bg-amber-400 hover:bg-amber-300 text-slate-950 font-bold text-sm tracking-wide transition-all shadow-gold-pill"
                  >
                    Submit Message
                  </button>
                </form>
              </div>
            )}
          </div>
        </div>
      )}
    </section>
  );
};

export default Contact;
