import React, { useState } from 'react';
import { Briefcase, Calendar, CheckSquare, Layers, Code, Play } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { experiences } from '../data';

export default function Experience() {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <section id="experience" className="py-24 relative border-t border-white/5 tech-grid">
      <div className="absolute top-[30%] right-[10%] w-72 h-72 bg-emerald-500/5 rounded-full blur-[100px] pointer-events-none" />
      
      <div className="max-w-5xl mx-auto px-6">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="flex items-center space-x-2 text-emerald-400 font-mono text-xs uppercase tracking-widest mb-1">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
            <span>Industrial Experience</span>
          </div>
          <h2 className="text-3xl font-display font-bold text-white tracking-tight" id="exp-heading">
            Professional Internships
          </h2>
          <div className="h-1 w-12 bg-emerald-500 mt-3 rounded-full" />
        </div>

        {/* Tab & Showcase Wrapper */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
          {/* Left Tab Toggles */}
          <div className="md:col-span-4 flex md:flex-col overflow-x-auto md:overflow-visible gap-2 pb-4 md:pb-0 font-mono text-xs" id="exp-tabs">
            {experiences.map((exp, idx) => {
              const isActive = activeTab === idx;
              return (
                <button
                  key={idx}
                  onClick={() => setActiveTab(idx)}
                  className={`w-full text-left px-4 py-3.5 rounded-lg border transition-all flex items-center space-x-3 shrink-0 cursor-pointer ${
                    isActive
                      ? 'bg-emerald-500/10 border-emerald-500/30 text-emerald-400 font-semibold'
                      : 'bg-slate-900/40 border-white/5 text-slate-400 hover:text-white hover:bg-slate-900'
                  }`}
                  id={`exp-tab-btn-${idx}`}
                >
                  <Briefcase size={14} className={isActive ? 'text-emerald-400' : 'text-slate-500'} />
                  <div className="truncate text-left">
                    <p className="font-sans font-bold text-white text-xs">{exp.company}</p>
                    <p className="text-[10px] font-mono text-slate-500">{exp.duration}</p>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Right Selected Experience Details */}
          <div className="md:col-span-8">
            <AnimatePresence mode="wait">
              {experiences.map((exp, idx) => {
                if (idx !== activeTab) return null;
                return (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.3 }}
                    className="glass-panel p-8 rounded-xl border border-white/10 relative"
                    id={`exp-detail-card-${idx}`}
                  >
                    {/* Role Header */}
                    <div className="space-y-3 mb-6 pb-6 border-b border-white/5">
                      <div className="flex flex-wrap items-center justify-between gap-3">
                        <span className="text-[10px] font-mono font-bold uppercase tracking-wider px-2.5 py-1 bg-emerald-500/15 text-emerald-400 border border-emerald-500/20 rounded-md">
                          {exp.type} Internship
                        </span>
                        <div className="flex items-center space-x-2 text-xs font-mono text-slate-400">
                          <Calendar size={12} className="text-emerald-400" />
                          <span>{exp.duration}</span>
                        </div>
                      </div>

                      <h3 className="font-display font-bold text-xl md:text-2xl text-white">
                        {exp.role}{' '}
                        <span className="text-emerald-400 text-lg">@ {exp.company}</span>
                      </h3>
                      <p className="text-xs text-slate-400 italic font-sans max-w-xl">{exp.description}</p>
                    </div>

                    {/* Bullets List */}
                    <div className="space-y-4 mb-6" id={`exp-bullets-${idx}`}>
                      <h4 className="text-[11px] font-mono uppercase text-slate-500 tracking-wider">Key Contributions & Learning Outcomes</h4>
                      <ul className="space-y-3">
                        {exp.bullets.map((bullet, bulletIdx) => (
                          <li key={bulletIdx} className="flex items-start text-xs text-slate-300 leading-relaxed">
                            <span className="text-emerald-400 font-mono mr-2.5 mt-0.5 shrink-0">▸</span>
                            <span>{bullet}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Skills Used Badges */}
                    <div className="space-y-3">
                      <h4 className="text-[11px] font-mono uppercase text-slate-500 tracking-wider flex items-center space-x-1">
                        <Code size={12} className="text-emerald-400" />
                        <span>Core Tools & Technologies Applied</span>
                      </h4>
                      <div className="flex flex-wrap gap-2" id={`exp-tools-${idx}`}>
                        {exp.tools.map((tool) => (
                          <span
                            key={tool}
                            className="px-2.5 py-1 text-[11px] font-mono text-slate-300 bg-slate-900 border border-white/5 rounded-md hover:border-emerald-500/20 hover:text-white transition-colors"
                          >
                            {tool}
                          </span>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
