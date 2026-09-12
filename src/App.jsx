import React from 'react';
import Navbar from './components/Navbar';
import Hero from './sections/Hero';
import About from './sections/About';
import Skills from './sections/Skills';
import Projects from './sections/Projects';
import Experience from './sections/Experience';
import Contact from './sections/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-[#070a0e] text-slate-100 relative selection:bg-amber-400/30 selection:text-amber-200">
      {/* Sticky Modern Top Navbar matching reference */}
      <Navbar />

      {/* Main Content Sections */}
      <main className="relative z-10 space-y-8 sm:space-y-12">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Contact />
      </main>

      {/* Minimal Footer */}
      <Footer />
    </div>
  );
}

export default App;
