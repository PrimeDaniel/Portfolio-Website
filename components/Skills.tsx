import React from 'react';
import { SKILLS } from '../constants';
import { Code2, Server, Terminal } from 'lucide-react';

const Skills: React.FC = () => {
  const getIcon = (category: string) => {
    switch(category) {
      case "Frontend": return <Code2 className="w-8 h-8 text-primary" />;
      case "Backend": return <Server className="w-8 h-8 text-secondary" />;
      default: return <Terminal className="w-8 h-8 text-pink-500" />;
    }
  };

  return (
    <section id="skills" className="py-20 bg-slate-900/50">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold mb-16 text-center"><span className="border-b-4 border-secondary pb-1">Technical Skills</span></h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {SKILLS.map((category) => (
            <div key={category.category} className="glass p-8 rounded-2xl text-center hover:-translate-y-2 transition-transform duration-300">
              <div className="bg-slate-800/50 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6">
                {getIcon(category.category)}
              </div>
              <h3 className="text-xl font-semibold mb-6">{category.category}</h3>
              <div className="flex flex-wrap justify-center gap-3">
                {category.skills.map(skill => (
                  <span key={skill} className="px-3 py-1 bg-slate-800 rounded-lg text-sm text-slate-300 border border-slate-700/50">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
