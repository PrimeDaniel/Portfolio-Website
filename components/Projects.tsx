import React from 'react';
import { PROJECTS } from '../constants';
import { ExternalLink, Github } from 'lucide-react';

const Projects: React.FC = () => {
  return (
    <section id="projects" className="py-24 bg-dark">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold mb-16 text-center text-white">
          <span className="border-b-4 border-primary pb-2">Featured Projects</span>
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-7xl mx-auto">
          {PROJECTS.map((project) => (
            <div 
              key={project.id} 
              className="group flex flex-col h-full bg-card rounded-2xl overflow-hidden border border-slate-700 hover:border-primary transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-primary/20"
            >
              {/* Image Container */}
              <div className="relative aspect-video overflow-hidden">
                <div className="absolute inset-0 bg-dark/20 group-hover:bg-transparent transition-colors duration-500 z-10" />
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-700 ease-in-out group-hover:scale-110"
                />
              </div>
              
              <div className="p-8 flex flex-col flex-grow">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-2xl font-bold text-white group-hover:text-primary transition-colors duration-300">
                    {project.title}
                  </h3>
                  <div className="flex gap-3 z-20">
                    <a 
                      href={project.link || "#"} 
                      className="text-slate-400 hover:text-white transition-colors p-2 hover:bg-slate-700/50 rounded-full"
                      aria-label="GitHub Repo"
                    >
                      <Github className="w-5 h-5" />
                    </a>
                    <a 
                      href={project.link || "#"} 
                      className="text-slate-400 hover:text-white transition-colors p-2 hover:bg-slate-700/50 rounded-full"
                      aria-label="Live Demo"
                    >
                      <ExternalLink className="w-5 h-5" />
                    </a>
                  </div>
                </div>
                
                <p className="text-slate-400 text-base mb-8 line-clamp-3 leading-relaxed">
                  {project.description}
                </p>
                
                <div className="mt-auto flex flex-wrap gap-2">
                  {project.technologies.map(tech => (
                    <span 
                      key={tech} 
                      className="text-xs font-semibold text-primary bg-primary/10 border border-primary/20 px-3 py-1.5 rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;