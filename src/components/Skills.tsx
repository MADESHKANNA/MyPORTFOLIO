import React, { useState } from 'react';
import { Cpu, Code, Layers, Database, Sparkles, Server } from 'lucide-react';
import { motion } from 'motion/react';
import { skillsData } from '../data';

export default function Skills() {
  const [selectedCategory, setSelectedCategory] = useState<'all' | 'languages' | 'frameworks' | 'databases' | 'datascience' | 'cloud'>('all');

  const categories = [
    { id: 'all', name: 'All Skills', icon: Cpu },
    { id: 'languages', name: 'Languages', icon: Code },
    { id: 'frameworks', name: 'Frameworks', icon: Server },
    { id: 'databases', name: 'Databases', icon: Database },
    { id: 'datascience', name: 'AI & Data Science', icon: Sparkles },
    { id: 'cloud', name: 'Cloud & Tools', icon: Layers },
  ];

  const shouldShow = (type: string) => {
    if (selectedCategory === 'all') return true;
    return selectedCategory === type;
  };

  return (
    <section id="skills" className="py-24 relative border-t border-white/5 bg-slate-950/20">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="flex items-center space-x-2 text-emerald-400 font-mono text-xs uppercase tracking-widest mb-1">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
            <span>Capability Index</span>
          </div>
          <h2 className="text-3xl font-display font-bold text-white tracking-tight" id="skills-heading">
            Technical Arsenal
          </h2>
          <div className="h-1 w-12 bg-emerald-500 mt-3 rounded-full" />
        </div>

        {/* Category Controls */}
        <div className="flex flex-wrap justify-center gap-2.5 mb-12" id="skills-category-ctr">
          {categories.map((cat) => {
            const Icon = cat.icon;
            const isActive = selectedCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id as any)}
                className={`px-4 py-2 text-xs font-mono rounded-lg border flex items-center space-x-2 transition-all cursor-pointer ${
                  isActive
                    ? 'bg-emerald-500 text-slate-950 border-emerald-400 font-bold'
                    : 'bg-slate-900/60 border-white/5 text-slate-400 hover:text-white hover:border-white/10'
                }`}
                id={`skill-cat-btn-${cat.id}`}
              >
                <Icon size={13} />
                <span>{cat.name}</span>
              </button>
            );
          })}
        </div>

        {/* Skills Layout Matrix */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Block: Visual Language Proficiency Progress Meter */}
          {(selectedCategory === 'all' || selectedCategory === 'languages') && (
            <div className={`lg:col-span-6 glass-panel p-8 rounded-xl border border-white/10 space-y-6 ${selectedCategory === 'languages' ? 'lg:col-span-12' : ''}`}>
              <div className="flex items-center space-x-2 mb-2">
                <Code size={16} className="text-emerald-400" />
                <h3 className="font-display font-semibold text-lg text-white">Programming Languages</h3>
              </div>
              <p className="text-xs text-slate-400 leading-relaxed max-w-lg mb-4">
                Core computational tools applied daily to structural analysis, database systems, and predictive neural grids.
              </p>

              <div className="space-y-4" id="skills-lang-bars">
                {skillsData.languages.map((lang) => (
                  <div key={lang.name} className="space-y-1.5">
                    <div className="flex justify-between items-center text-xs">
                      <span className="font-mono text-white text-xs">{lang.name}</span>
                      <span className="font-mono text-emerald-400">{lang.level}</span>
                    </div>
                    {/* Simulated visual rating bar */}
                    <div className="h-1.5 bg-slate-900 border border-white/5 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: lang.level }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, ease: 'easeOut' }}
                        className="h-full bg-gradient-to-r from-emerald-500 to-emerald-400 rounded-full"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Right Block: Dynamic Tag Cloud categories for everything else */}
          <div className={`${selectedCategory === 'languages' ? 'hidden' : selectedCategory === 'all' ? 'lg:col-span-6' : 'lg:col-span-12'} space-y-6`}>
            
            {/* Frameworks & Libraries Grid */}
            {shouldShow('frameworks') && (
              <div className="glass-panel p-6 rounded-xl border border-white/10 space-y-4" id="skills-web-stack">
                <h3 className="font-display font-semibold text-sm text-slate-300 uppercase tracking-wider flex items-center space-x-2">
                  <Server size={14} className="text-emerald-400" />
                  <span>Frontend & Backend Web Stack</span>
                </h3>
                <div className="flex flex-wrap gap-2">
                  {skillsData.frameworks.map((fw) => (
                    <span
                      key={fw}
                      className="px-3.5 py-1.5 text-xs text-slate-300 bg-slate-900 border border-white/5 rounded-lg hover:border-emerald-500/20 hover:text-white transition-all cursor-default"
                    >
                      💡 {fw}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {/* Datastorage Systems */}
            {shouldShow('databases') && (
              <div className="glass-panel p-6 rounded-xl border border-white/10 space-y-4" id="skills-db-stack">
                <h3 className="font-display font-semibold text-sm text-slate-300 uppercase tracking-wider flex items-center space-x-2">
                  <Database size={14} className="text-emerald-400" />
                  <span>Database Management (SQL / NoSQL)</span>
                </h3>
                <div className="flex flex-wrap gap-2">
                  {skillsData.databases.map((db) => (
                    <span
                      key={db}
                      className="px-3.5 py-1.5 text-xs text-slate-300 bg-slate-900 border border-white/5 rounded-lg hover:border-emerald-500/20 hover:text-white transition-all cursor-default"
                    >
                      🗄️ {db}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {/* Data Science & AI Systems */}
            {shouldShow('datascience') && (
              <div className="glass-panel p-6 rounded-xl border border-white/10 space-y-4" id="skills-ds-stack">
                <h3 className="font-display font-semibold text-sm text-slate-300 uppercase tracking-wider flex items-center space-x-2">
                  <Sparkles size={14} className="text-emerald-400" />
                  <span>Data Science, Analytics & Deep Learning</span>
                </h3>
                <div className="flex flex-wrap gap-2">
                  {skillsData.dataScience.map((ds) => (
                    <span
                      key={ds}
                      className="px-3.5 py-1.5 text-xs text-slate-300 bg-slate-900 border border-white/5 rounded-lg hover:border-emerald-500/20 hover:text-white transition-all cursor-default"
                    >
                      ⚙️ {ds}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {/* Infrastructure & Professional Tools */}
            {shouldShow('cloud') && (
              <div className="glass-panel p-6 rounded-xl border border-white/10 space-y-4" id="skills-cloud-stack">
                <h3 className="font-display font-semibold text-sm text-slate-300 uppercase tracking-wider flex items-center space-x-2">
                  <Layers size={14} className="text-emerald-400" />
                  <span>Cloud Deployments, Versioning & Tools</span>
                </h3>
                <div className="flex flex-wrap gap-2">
                  {skillsData.cloudTools.map((ct) => (
                    <span
                      key={ct}
                      className="px-3.5 py-1.5 text-xs text-slate-300 bg-slate-900 border border-white/5 rounded-lg hover:border-emerald-500/20 hover:text-white transition-all cursor-default"
                    >
                      ☁️ {ct}
                    </span>
                  ))}
                </div>
              </div>
            )}

          </div>

        </div>

      </div>
    </section>
  );
}
