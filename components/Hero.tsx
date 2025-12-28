import React from 'react';
import { ArrowDown, Github, Linkedin, Mail } from 'lucide-react';
import { RESUME_DATA } from '../constants';

const Hero: React.FC = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      {/* Background Blobs */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-primary/20 rounded-full mix-blend-screen filter blur-3xl animate-blob"></div>
        <div className="absolute top-1/3 right-1/4 w-72 h-72 bg-secondary/20 rounded-full mix-blend-screen filter blur-3xl animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-1/3 w-72 h-72 bg-pink-500/20 rounded-full mix-blend-screen filter blur-3xl animate-blob animation-delay-4000"></div>
      </div>

      <div className="container mx-auto px-6 text-center z-10">
        <div className="animate-fade-in-up">
          <span className="inline-block py-1 px-3 rounded-full bg-slate-800/50 border border-slate-700 text-secondary text-sm font-medium mb-6 backdrop-blur-sm">
            Available for work
          </span>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight">
            Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">{RESUME_DATA.name}</span>
          </h1>
          <p className="text-xl md:text-2xl text-slate-400 mb-8 max-w-2xl mx-auto leading-relaxed">
            {RESUME_DATA.title} building accessible, pixel-perfect, and performant web experiences.
          </p>
          
          <div className="flex justify-center gap-4 mb-12">
            <a href={RESUME_DATA.links.github} target="_blank" rel="noopener noreferrer" className="p-3 bg-slate-800 rounded-full hover:bg-slate-700 hover:text-primary transition-all duration-300 hover:-translate-y-1">
              <Github className="w-6 h-6" />
            </a>
            <a href={RESUME_DATA.links.linkedin} target="_blank" rel="noopener noreferrer" className="p-3 bg-slate-800 rounded-full hover:bg-slate-700 hover:text-primary transition-all duration-300 hover:-translate-y-1">
              <Linkedin className="w-6 h-6" />
            </a>
            <a href={`mailto:${RESUME_DATA.links.email}`} className="p-3 bg-slate-800 rounded-full hover:bg-slate-700 hover:text-primary transition-all duration-300 hover:-translate-y-1">
              <Mail className="w-6 h-6" />
            </a>
          </div>

          <a href="#about" className="inline-flex items-center gap-2 px-8 py-3 bg-white text-slate-900 rounded-full font-semibold hover:bg-slate-200 transition-colors">
            View My Work
            <ArrowDown className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
