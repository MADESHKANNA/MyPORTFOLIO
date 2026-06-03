import React from 'react';
import { Award, Trophy, Star, ChevronRight, CheckCircle2, ShieldCheck, Flame, BookOpen } from 'lucide-react';
import { motion } from 'motion/react';
import { certifications, achievements } from '../data';

export default function AchievementsGrid() {
  return (
    <section id="achievements" className="py-24 relative border-t border-white/5 tech-grid">
      <div className="absolute top-[40%] left-[20%] w-72 h-72 bg-emerald-500/5 rounded-full blur-[90px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="flex items-center space-x-2 text-emerald-400 font-mono text-xs uppercase tracking-widest mb-1">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
            <span>Honors & Credentials</span>
          </div>
          <h2 className="text-3xl font-display font-bold text-white tracking-tight" id="achievements-heading">
            Key Achievements & Professional Diplomas
          </h2>
          <div className="h-1 w-12 bg-emerald-500 mt-3 rounded-full" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Certifications with precise scores */}
          <div className="lg:col-span-7 space-y-6">
            <div className="flex items-center space-x-2 pl-2 mb-2">
              <Award size={18} className="text-emerald-400" />
              <h3 className="font-display font-semibold text-lg text-white">Academic Certifications</h3>
            </div>

            <div className="space-y-4" id="certifications-list">
              {certifications.map((cert) => {
                const isNptel = cert.type === 'nptel';
                const isAzure = cert.type === 'azure';
                return (
                  <div
                    key={cert.title}
                    className="glass-panel p-6 rounded-xl border border-white/10 hover:border-emerald-500/20 hover:bg-slate-900/30 transition-all duration-200 flex flex-col sm:flex-row sm:items-start justify-between gap-4"
                  >
                    <div className="space-y-2">
                      <div className="flex flex-wrap items-center gap-2">
                        <span className={`text-[10px] font-mono font-bold uppercase tracking-wider px-2.5 py-0.5 rounded ${
                          isNptel
                            ? 'bg-amber-500/10 text-amber-400 border border-amber-500/20'
                            : isAzure
                            ? 'bg-blue-500/10 text-blue-400 border border-blue-500/20'
                            : 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/20'
                        }`}>
                          {cert.issuer}
                        </span>
                        {cert.score && (
                          <span className="text-[10px] font-mono font-bold text-emerald-400 bg-emerald-500/5 px-2 py-0.5 rounded border border-emerald-500/15">
                            Grade: {cert.score}
                          </span>
                        )}
                      </div>
                      <h4 className="font-display font-bold text-white text-base">
                        {cert.title}
                      </h4>
                      {cert.description && (
                        <p className="text-xs text-slate-400 leading-relaxed max-w-xl">
                          {cert.description}
                        </p>
                      )}
                    </div>

                    <div className="shrink-0 flex sm:flex-col sm:items-end justify-between self-start">
                      <div className="p-2.5 rounded-lg bg-slate-900 border border-white/5 text-slate-400">
                        {isNptel ? (
                          <Star size={16} className="text-amber-400" />
                        ) : isAzure ? (
                          <ShieldCheck size={16} className="text-blue-400" />
                        ) : (
                          <CheckCircle2 size={16} className="text-emerald-400" />
                        )}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right Column: Achievements & Activities */}
          <div className="lg:col-span-5 space-y-6">
            <div className="flex items-center space-x-2 pl-2 mb-2">
              <Trophy size={18} className="text-emerald-400" />
              <h3 className="font-display font-semibold text-lg text-white">Hackathons & Extra-Curriculars</h3>
            </div>

            <div className="space-y-4" id="achievements-list">
              {achievements.map((ach, index) => (
                <div
                  key={index}
                  className="glass-panel p-6 rounded-xl border border-white/10 hover:border-emerald-500/20 hover:bg-slate-900/30 transition-all duration-200 relative overflow-hidden group"
                >
                  <div className="absolute top-0 right-0 w-24 h-24 bg-emerald-500/5 rounded-full blur-2xl group-hover:bg-emerald-500/10 transition-all duration-300" />
                  
                  <div className="flex items-start space-x-4">
                    <div className="p-2 bg-slate-900 border border-white/5 rounded-lg text-emerald-400 group-hover:text-white transition-colors duration-200">
                      {index === 0 ? <BookOpen size={16} /> : index === 1 ? <Flame size={16} /> : <Award size={16} />}
                    </div>
                    
                    <div className="space-y-1.5 relative z-10">
                      <h4 className="font-display font-bold text-white text-sm md:text-base group-hover:text-emerald-300 transition-colors">
                        {ach.title}
                      </h4>
                      <p className="text-xs text-slate-400 leading-relaxed">
                        {ach.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Quick Summary Banner Card */}
            <div className="glass-panel p-6 rounded-xl border border-emerald-500/20 bg-emerald-950/10 flex items-center justify-between gap-4 mt-6">
              <div className="space-y-1">
                <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-emerald-400">CGPA Metric</span>
                <p className="text-2xl font-display font-bold text-white tracking-tight">8.76 / 10.00</p>
                <p className="text-[10px] font-mono text-slate-500">First-class undergraduate average across semesters</p>
              </div>
              <div className="bg-emerald-500/10 text-emerald-400 p-3 rounded-xl border border-emerald-500/20 h-fit">
                <Star size={24} className="animate-spin-slow" />
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
