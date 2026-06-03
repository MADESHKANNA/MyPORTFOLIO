import React, { useState } from 'react';
import { Github, ExternalLink, Filter, FolderGit2, Sparkles, CheckCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { projects } from '../data';

export default function Projects() {
  const [filter, setFilter] = useState<'All' | 'Full Stack' | 'AI / Data Science'>('All');

  const filteredProjects = projects.filter(
    (p) => filter === 'All' || p.category === filter
  );

  return (
    <section id="projects" className="py-24 relative border-t border-white/5 tech-grid">
      <div className="absolute top-[20%] left-[5%] w-80 h-80 bg-emerald-500/5 rounded-full blur-[110px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-16 gap-4">
          <div className="flex flex-col">
            <div className="flex items-center space-x-2 text-emerald-400 font-mono text-xs uppercase tracking-widest mb-1">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
              <span>Engineering Lab</span>
            </div>
            <h2 className="text-3xl font-display font-bold text-white tracking-tight" id="projects-title">
              Featured Innovations
            </h2>
            <div className="h-1 w-12 bg-emerald-500 mt-3 rounded-full" />
          </div>

          {/* Filtering Switch */}
          <div className="flex items-center bg-slate-900/60 border border-white/5 p-1 rounded-lg self-start md:self-auto font-mono text-xs">
            {(['All', 'Full Stack', 'AI / Data Science'] as const).map((cat) => {
              const isActive = filter === cat;
              return (
                <button
                  key={cat}
                  onClick={() => setFilter(cat)}
                  className={`px-3.5 py-1.5 rounded-md transition-colors cursor-pointer ${
                    isActive
                      ? 'bg-emerald-500 text-slate-950 font-bold'
                      : 'text-slate-400 hover:text-white'
                  }`}
                  id={`proj-filter-${cat.toLowerCase().replace(' ', '-')}`}
                >
                  {cat}
                </button>
              );
            })}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8" id="projects-grid">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, index) => (
              <motion.div
                layout
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4 }}
                className="glass-panel p-8 rounded-xl border border-white/10 flex flex-col justify-between group h-full relative overflow-hidden"
                id={`project-card-${project.id}`}
              >
                {/* Visual Glow Effect */}
                <div className="absolute top-0 right-0 w-36 h-36 bg-emerald-500/5 rounded-full blur-3xl group-hover:bg-emerald-500/10 transition-all duration-300 pointer-events-none" />

                {/* Card Top Information */}
                <div>
                  <div className="flex justify-between items-center mb-5">
                    <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 px-3 py-1 rounded-md">
                      {project.category}
                    </span>
                    <div className="p-2 rounded-lg bg-slate-900 border border-white/5 text-slate-400">
                      <FolderGit2 size={16} />
                    </div>
                  </div>

                  <h3 className="font-display font-bold text-xl md:text-2xl text-white group-hover:text-emerald-300 transition-colors">
                    {project.title}
                  </h3>
                  
                  <p className="text-slate-350 text-xs sm:text-sm font-sans mt-3 mb-6 leading-relaxed">
                    {project.description}
                  </p>

                  <div className="border-t border-white/5 pt-5 mb-5 space-y-4">
                    <h4 className="text-[11px] font-mono uppercase text-slate-500 tracking-wider">Key Achievements & Flow</h4>
                    <ul className="space-y-2.5">
                      {project.bullets.map((bullet, bulletIdx) => (
                        <li key={bulletIdx} className="flex items-start text-xs text-slate-300 leading-relaxed">
                          <span className="text-emerald-400 font-mono text-[11px] mr-2 shrink-0">✔</span>
                          <span>{bullet}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Core Features Highlight */}
                  <div className="mb-6 space-y-2.5">
                    <h4 className="text-[11px] font-mono uppercase text-slate-500 tracking-wider">Outstanding Features</h4>
                    <div className="grid grid-cols-2 gap-2 text-slate-300">
                      {project.features.map((feat) => (
                        <div key={feat} className="flex items-center space-x-1.5 text-xs">
                          <CheckCircle size={12} className="text-emerald-400 shrink-0" />
                          <span className="truncate">{feat}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Card Bottom: Badges & CTA */}
                <div className="border-t border-white/5 pt-6 mt-4">
                  <div className="flex flex-wrap gap-1.5 mb-5">
                    {project.tech.map((term) => (
                      <span
                        key={term}
                        className="px-2 py-0.5 text-[10px] font-mono text-slate-400 bg-slate-905 border border-white/5 rounded"
                      >
                        {term}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center justify-between">
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      referrerPolicy="no-referrer"
                      className="inline-flex items-center text-xs font-mono font-bold text-white hover:text-emerald-400 transition-colors group/link cursor-pointer"
                      id={`project-link-github-${project.id}`}
                    >
                      <Github size={14} className="mr-1.5 text-slate-400 group-hover/link:text-emerald-450 transition-colors" />
                      <span>Code Repository</span>
                      <ExternalLink size={12} className="ml-1 opacity-0 group-hover/link:opacity-100 transition-opacity" />
                    </a>
                    
                    <span className="text-[10px] font-mono text-slate-500">Active Build</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

      </div>
    </section>
  );
}
