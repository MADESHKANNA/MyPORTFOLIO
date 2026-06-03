import React from 'react';
import { BookOpen, MapPin, Award, CheckCircle2, ChevronRight, MessageSquare, Globe } from 'lucide-react';
import { motion } from 'motion/react';
import { portfolioOwner, educationList, skillsData } from '../data';

export default function AboutEducation() {
  return (
    <section id="about" className="py-24 relative border-t border-white/5 bg-slate-950/20">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="flex flex-col mb-16">
          <div className="flex items-center space-x-2 text-emerald-400 font-mono text-xs uppercase tracking-widest mb-1">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
            <span>Biography & Academia</span>
          </div>
          <h2 className="text-3xl font-display font-bold text-white tracking-tight" id="about-heading">
            About Me & Education
          </h2>
          <div className="h-1 w-12 bg-emerald-500 mt-3 rounded-full" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Left bio & personal traits details */}
          <div className="lg:col-span-6 space-y-8">
            <div className="glass-panel p-8 rounded-xl border border-white/10 space-y-6 relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-500/5 rounded-full blur-2xl group-hover:bg-emerald-500/10 transition-all duration-500" />
              
              <h3 className="font-display font-semibold text-xl text-white flex items-center space-x-2" id="about-subheading">
                <span>The Developer Persona</span>
              </h3>
              
              <p className="text-slate-300 leading-relaxed text-sm">
                {portfolioOwner.about}
              </p>

              <div className="border-t border-white/5 pt-6 grid grid-cols-2 gap-4">
                <div>
                  <h4 className="text-[11px] font-mono text-slate-500 uppercase tracking-wider mb-2">Primary Location</h4>
                  <div className="flex items-center space-x-2 text-white text-sm">
                    <MapPin size={14} className="text-emerald-400" />
                    <span>Tamil Nadu, India</span>
                  </div>
                </div>

                <div>
                  <h4 className="text-[11px] font-mono text-slate-500 uppercase tracking-wider mb-2">Affiliation</h4>
                  <div className="flex items-center space-x-2 text-white text-sm">
                    <BookOpen size={14} className="text-emerald-400" />
                    <span>SNS Institutions</span>
                  </div>
                </div>
              </div>

              {/* Language Matrix */}
              <div className="border-t border-white/5 pt-6 space-y-3">
                <h4 className="text-[11px] font-mono text-slate-500 uppercase tracking-wider">Languages Proficiency</h4>
                <div className="grid grid-cols-2 gap-4">
                  <div className="p-3 bg-slate-900/60 rounded-lg border border-white/5">
                    <div className="flex justify-between items-center mb-1">
                      <span className="text-xs font-medium text-white">English</span>
                      <span className="text-[10px] font-mono text-emerald-400 bg-emerald-500/5 px-1.5 py-0.5 rounded">Advanced</span>
                    </div>
                    <div className="flex space-x-1">
                      <span className="h-1.5 w-full bg-emerald-500 rounded" />
                      <span className="h-1.5 w-full bg-emerald-500 rounded" />
                      <span className="h-1.5 w-full bg-emerald-500 rounded" />
                      <span className="h-1.5 w-full bg-emerald-500 rounded" />
                      <span className="h-1.5 w-full bg-slate-800 rounded" />
                    </div>
                  </div>

                  <div className="p-3 bg-slate-900/60 rounded-lg border border-white/5">
                    <div className="flex justify-between items-center mb-1">
                      <span className="text-xs font-medium text-white">Tamil</span>
                      <span className="text-[10px] font-mono text-emerald-400 bg-emerald-500/5 px-1.5 py-0.5 rounded">Native</span>
                    </div>
                    <div className="flex space-x-1">
                      <span className="h-1.5 w-full bg-emerald-500 rounded" />
                      <span className="h-1.5 w-full bg-emerald-500 rounded" />
                      <span className="h-1.5 w-full bg-emerald-500 rounded" />
                      <span className="h-1.5 w-full bg-emerald-500 rounded" />
                      <span className="h-1.5 w-full bg-emerald-500 rounded" />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Soft Skills Section */}
            <div className="p-6 glass-panel rounded-xl border border-white/10 space-y-4">
              <h3 className="text-sm font-mono text-slate-400 uppercase tracking-wider flex items-center space-x-2ID">
                <MessageSquare size={14} className="text-emerald-400" />
                <span>Soft Skills & Competencies</span>
              </h3>
              <div className="flex flex-wrap gap-2.5" id="about-soft-skills">
                {skillsData.softSkills.map((skill, index) => (
                  <span
                    key={index}
                    className="px-3.5 py-1.5 text-xs text-slate-300 font-medium bg-slate-900 border border-white/5 rounded-lg hover:border-emerald-500/30 transition-all cursor-default"
                  >
                    🚀 {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Right Education timeline column */}
          <div className="lg:col-span-6 space-y-6">
            <div className="space-y-6">
              <h3 className="font-display font-semibold text-xl text-white flex items-center space-x-2 pl-2">
                <BookOpen size={20} className="text-emerald-400" />
                <span>Academic Path</span>
              </h3>

              <div className="relative border-l border-white/5 pl-6 ml-4 space-y-10">
                {educationList.map((edu, idx) => (
                  <div key={idx} className="relative group" id={`edu-card-${idx}`}>
                    {/* Bullet marker */}
                    <div className="absolute -left-[31px] top-1 w-4 h-4 rounded-full bg-slate-950 border-2 border-emerald-500 flex items-center justify-center transition-all group-hover:scale-125 group-hover:bg-emerald-500">
                      <div className="w-1.5 h-1.5 bg-slate-950 rounded-full" />
                    </div>

                    <div className="glass-panel p-6 rounded-xl border border-white/10 transition-all group-hover:border-emerald-500/20 group-hover:bg-slate-900/40">
                      <div className="flex flex-wrap justify-between items-start gap-2 mb-3">
                        <div>
                          <span className="text-[10px] font-mono text-emerald-400 bg-emerald-500/10 px-2.5 py-1 rounded-full uppercase tracking-wider">
                            {edu.duration}
                          </span>
                          <h4 className="font-display font-bold text-white text-base mt-2 group-hover:text-emerald-300 transition-colors">
                            {edu.degree}
                          </h4>
                        </div>
                        {edu.grade && (
                          <div className="text-xs font-mono font-bold text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20">
                            {edu.grade}
                          </div>
                        )}
                      </div>

                      <p className="text-xs font-mono text-slate-400 mb-4">{edu.institution} • {edu.location}</p>

                      <ul className="space-y-2.5">
                        {edu.bullets?.map((bullet, bulletIdx) => (
                          <li key={bulletIdx} className="flex items-start text-xs text-slate-300 leading-relaxed">
                            <ChevronRight size={14} className="text-emerald-400 mt-0.5 shrink-0 mr-1.5" />
                            <span>{bullet}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
}
