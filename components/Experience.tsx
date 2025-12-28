import React from 'react';
import { EXPERIENCES } from '../constants';
import { Briefcase } from 'lucide-react';

const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-20">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold mb-16 text-center"><span className="border-b-4 border-primary pb-1">Experience</span></h2>
        
        <div className="max-w-4xl mx-auto space-y-12">
          {EXPERIENCES.map((job, index) => (
            <div key={job.id} className="relative pl-8 md:pl-0">
              {/* Timeline Line (Desktop) */}
              <div className="hidden md:block absolute left-1/2 -ml-0.5 w-0.5 h-full bg-slate-800 top-0"></div>
              
              <div className={`flex flex-col md:flex-row items-center justify-between w-full ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                
                <div className="w-full md:w-5/12"></div>
                
                <div className="absolute left-0 md:left-1/2 w-8 h-8 -ml-4 rounded-full bg-slate-900 border-4 border-primary flex items-center justify-center z-10">
                   <Briefcase className="w-3 h-3 text-white" />
                </div>
                
                <div className="w-full md:w-5/12 glass p-6 rounded-xl border border-slate-700/50 hover:border-primary/50 transition-colors duration-300">
                  <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-4">
                    <h3 className="text-xl font-bold text-white">{job.role}</h3>
                    <span className="text-xs font-mono py-1 px-2 rounded bg-slate-800 text-primary mt-2 sm:mt-0">{job.period}</span>
                  </div>
                  <h4 className="text-lg text-secondary mb-4">{job.company}</h4>
                  <ul className="space-y-2">
                    {job.description.map((desc, i) => (
                      <li key={i} className="text-slate-400 text-sm flex items-start gap-2">
                        <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-primary shrink-0"></span>
                        {desc}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
