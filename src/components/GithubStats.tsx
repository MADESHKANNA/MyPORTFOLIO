import React from 'react';
import { Github, BarChart2, Activity, RefreshCw, Layers } from 'lucide-react';
import { motion } from 'motion/react';
import { portfolioOwner } from '../data';

export default function GithubStats() {
  const triggerReload = () => {
    // Basic local state refresh simulation
    const elements = document.querySelectorAll('.github-widget-img');
    elements.forEach((el) => {
      const img = el as HTMLImageElement;
      const originalSrc = img.src.split('&refresh=')[0];
      img.src = `${originalSrc}&refresh=${new Date().getTime()}`;
    });
  };

  return (
    <section id="github" className="py-24 relative border-t border-white/5 bg-slate-950/20">
      <div className="absolute top-[40%] right-[10%] w-80 h-80 bg-emerald-500/5 rounded-full blur-[125px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-16 gap-4">
          <div className="flex flex-col">
            <div className="flex items-center space-x-2 text-emerald-400 font-mono text-xs uppercase tracking-widest mb-1">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
              <span>Developer Insights</span>
            </div>
            <h2 className="text-3xl font-display font-bold text-white tracking-tight" id="github-title">
              GitHub Metrics & Stats
            </h2>
            <div className="h-1 w-12 bg-emerald-500 mt-3 rounded-full" />
          </div>

          <div className="flex space-x-3">
            <button
              onClick={triggerReload}
              className="px-4 py-2 bg-slate-900 border border-white/5 rounded-lg text-xs font-mono text-slate-400 hover:text-white hover:border-emerald-500/20 flex items-center space-x-2 transition-all cursor-pointer shadow-md"
              id="github-btn-refresh"
            >
              <RefreshCw size={12} className="text-emerald-400" />
              <span>Refresh Metrics</span>
            </button>
            <a
              href={`https://github.com/${portfolioOwner.github}`}
              target="_blank"
              referrerPolicy="no-referrer"
              className="px-4 py-2 bg-slate-900 border border-slate-700 rounded-lg text-xs font-mono text-white hover:border-emerald-400 flex items-center space-x-2 transition-all cursor-pointer shadow-md"
              id="github-btn-visit"
            >
              <Github size={12} className="text-emerald-400" />
              <span>Open Profile</span>
            </a>
          </div>
        </div>

        {/* Top summary cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-10">
          <div className="glass-panel p-5 rounded-lg border border-white/5 flex items-center space-x-4">
            <div className="p-3 bg-emerald-500/10 text-emerald-400 rounded-lg">
              <Github size={18} />
            </div>
            <div>
              <p className="text-[10px] font-mono text-slate-500 uppercase tracking-widest">Username</p>
              <p className="text-sm font-bold text-white font-mono mt-0.5" id="github-val-username">@{portfolioOwner.github}</p>
            </div>
          </div>

          <div className="glass-panel p-5 rounded-lg border border-white/5 flex items-center space-x-4">
            <div className="p-3 bg-emerald-500/10 text-emerald-400 rounded-lg">
              <Activity size={18} />
            </div>
            <div>
              <p className="text-[10px] font-mono text-slate-500 uppercase tracking-widest">Contribution Theme</p>
              <p className="text-sm font-bold text-white font-mono mt-0.5" id="github-val-theme">Shadow Green</p>
            </div>
          </div>

          <div className="glass-panel p-5 rounded-lg border border-white/5 flex items-center space-x-4">
            <div className="p-3 bg-emerald-500/10 text-emerald-400 rounded-lg">
              <Layers size={18} />
            </div>
            <div>
              <p className="text-[10px] font-mono text-slate-500 uppercase tracking-widest">Repository Scope</p>
              <p className="text-sm font-bold text-white font-mono mt-0.5" id="github-val-mode">Public + Collaborative</p>
            </div>
          </div>
        </div>

        {/* Real Badge Dashboard Visuals Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8" id="github-badge-layout">
          
          {/* General Stats Badge */}
          <div className="glass-panel rounded-xl border border-white/10 overflow-hidden shadow-lg hover:border-emerald-500/20 transition-all flex flex-col justify-between">
            <div className="p-4 bg-slate-900/60 border-b border-white/5 flex items-center justify-between">
              <span className="text-xs font-mono text-slate-400 uppercase tracking-wider flex items-center space-x-2">
                <BarChart2 size={13} className="text-emerald-400" />
                <span>Overall Status Metrics</span>
              </span>
              <span className="text-[9px] font-mono bg-emerald-500/10 text-emerald-400 px-2 py-0.5 rounded">REAL-TIME</span>
            </div>
            <div className="p-6 flex items-center justify-center bg-slate-950/40 min-h-[190px]">
              <img
                src={`https://github-readme-stats.shion.dev/api?username=${portfolioOwner.github}&theme=shadow_green&hide_border=false&include_all_commits=true&count_private=true`}
                alt="Madesh Kanna's GitHub Overview"
                referrerPolicy="no-referrer"
                className="w-full h-auto rounded-lg object-contain max-h-[175px] github-widget-img selection:bg-transparent"
              />
            </div>
            <div className="p-3 border-t border-white/5 bg-slate-900/30 text-center text-[10px] text-slate-500 font-mono">
              Aggregating commits, pulls, stars, and review activity
            </div>
          </div>

          {/* GitHub Streaks Badge */}
          <div className="glass-panel rounded-xl border border-white/10 overflow-hidden shadow-lg hover:border-emerald-500/20 transition-all flex flex-col justify-between">
            <div className="p-4 bg-slate-900/60 border-b border-white/5 flex items-center justify-between">
              <span className="text-xs font-mono text-slate-400 uppercase tracking-wider flex items-center space-x-2">
                <Activity size={13} className="text-emerald-400" />
                <span>Commit Streak stats</span>
              </span>
              <span className="text-[9px] font-mono bg-emerald-500/10 text-emerald-400 px-2 py-0.5 rounded">LIVE</span>
            </div>
            <div className="p-6 flex items-center justify-center bg-slate-950/40 min-h-[190px]">
              <img
                src={`https://streak-stats.demolab.com/?user=${portfolioOwner.github}&theme=shadow_green&hide_border=false`}
                alt="Madesh Kanna's Commit Streak"
                referrerPolicy="no-referrer"
                className="w-full h-auto rounded-lg object-contain max-h-[175px] github-widget-img selection:bg-transparent"
              />
            </div>
            <div className="p-3 border-t border-white/5 bg-slate-900/30 text-center text-[10px] text-slate-500 font-mono">
              Live updates displaying absolute coding rhythm and milestones
            </div>
          </div>

          {/* Core Language Composition Badge */}
          <div className="glass-panel rounded-xl border border-white/10 overflow-hidden shadow-lg hover:border-emerald-500/20 transition-all flex flex-col justify-between">
            <div className="p-4 bg-slate-900/60 border-b border-white/5 flex items-center justify-between">
              <span className="text-xs font-mono text-slate-400 uppercase tracking-wider flex items-center space-x-2">
                <Github size={13} className="text-emerald-400" />
                <span>Top Programming Languages</span>
              </span>
              <span className="text-[9px] font-mono bg-emerald-500/10 text-emerald-400 px-2 py-0.5 rounded">ANALYTIC</span>
            </div>
            <div className="p-6 flex items-center justify-center bg-slate-950/40 min-h-[190px]">
              <img
                src={`https://github-readme-stats.shion.dev/api/top-langs/?username=${portfolioOwner.github}&theme=shadow_green&hide_border=false&include_all_commits=true&count_private=true&layout=compact`}
                alt="Madesh Kanna's Top Langs"
                referrerPolicy="no-referrer"
                className="w-full h-auto rounded-lg object-contain max-h-[175px] github-widget-img selection:bg-transparent"
              />
            </div>
            <div className="p-3 border-t border-white/5 bg-slate-900/30 text-center text-[10px] text-slate-500 font-mono">
              Language distribution modeled over active repository volumes
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
