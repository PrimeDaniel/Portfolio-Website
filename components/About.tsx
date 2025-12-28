import React from 'react';
import { RESUME_DATA } from '../constants';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-slate-900/50">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold mb-12 text-center"><span className="border-b-4 border-secondary pb-1">About Me</span></h2>
        <div className="max-w-4xl mx-auto glass rounded-2xl p-8 md:p-12">
          <div className="flex flex-col md:flex-row gap-10 items-center">
            <div className="w-48 h-48 shrink-0 relative">
               <div className="absolute inset-0 bg-gradient-to-tr from-primary to-secondary rounded-2xl rotate-6 opacity-50"></div>
               <img 
                src="https://picsum.photos/400/400?grayscale" 
                alt="Profile" 
                className="w-full h-full object-cover rounded-2xl relative z-10 border-2 border-slate-700 shadow-xl"
               />
            </div>
            <div className="flex-1 space-y-4">
               <h3 className="text-2xl font-semibold text-white">Software Engineer based in {RESUME_DATA.location}</h3>
               <p className="text-slate-300 leading-relaxed">
                 {RESUME_DATA.summary}
               </p>
               <p className="text-slate-300 leading-relaxed">
                 I enjoy turning complex problems into simple, beautiful and intuitive designs. When I'm not pushing pixels, you'll find me exploring new technologies or contributing to open source.
               </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
