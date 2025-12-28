import React from 'react';
import { RESUME_DATA } from '../constants';
import { Mail, Linkedin, Github } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-20 bg-slate-900 border-t border-slate-800">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold mb-8">Get In Touch</h2>
        <p className="text-slate-400 max-w-xl mx-auto mb-12">
          I'm currently looking for new opportunities. Whether you have a question or just want to say hi, I'll try my best to get back to you!
        </p>
        
        <a 
          href={`mailto:${RESUME_DATA.links.email}`}
          className="inline-block px-8 py-4 bg-primary text-white rounded-xl font-semibold hover:bg-blue-600 transition-all hover:scale-105 shadow-lg shadow-primary/25 mb-16"
        >
          Say Hello
        </a>

        <div className="flex justify-center gap-8 mb-12">
           <a href={RESUME_DATA.links.github} className="flex flex-col items-center gap-2 text-slate-400 hover:text-white transition-colors">
             <div className="p-3 bg-slate-800 rounded-full">
               <Github className="w-6 h-6" />
             </div>
             <span className="text-sm">GitHub</span>
           </a>
           <a href={RESUME_DATA.links.linkedin} className="flex flex-col items-center gap-2 text-slate-400 hover:text-white transition-colors">
             <div className="p-3 bg-slate-800 rounded-full">
               <Linkedin className="w-6 h-6" />
             </div>
             <span className="text-sm">LinkedIn</span>
           </a>
           <a href={`mailto:${RESUME_DATA.links.email}`} className="flex flex-col items-center gap-2 text-slate-400 hover:text-white transition-colors">
             <div className="p-3 bg-slate-800 rounded-full">
               <Mail className="w-6 h-6" />
             </div>
             <span className="text-sm">Email</span>
           </a>
        </div>
        
        <div className="text-slate-600 text-sm">
          <p>© {new Date().getFullYear()} {RESUME_DATA.name}. Built with React, Tailwind & Gemini.</p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
