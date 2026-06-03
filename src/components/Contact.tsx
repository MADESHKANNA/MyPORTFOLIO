import React, { useState } from 'react';
import { Mail, Phone, MapPin, ArrowUpRight, Github, Linkedin, ExternalLink } from 'lucide-react';
import { motion } from 'motion/react';
import { portfolioOwner } from '../data';

export default function Contact() {
  const [copied, setCopied] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText(portfolioOwner.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="contact" className="py-24 relative border-t border-white/5 tech-grid">
      <div className="absolute top-[20%] right-[10%] w-72 h-72 bg-emerald-500/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="flex items-center space-x-2 text-emerald-400 font-mono text-xs uppercase tracking-widest mb-1">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
            <span>Connect & Pipeline</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-white tracking-tight" id="contact-heading">
            Get In Touch
          </h2>
          <div className="h-1 w-12 bg-emerald-500 mt-3 rounded-full" />
          <p className="text-slate-400 text-sm mt-4 max-w-md leading-relaxed font-sans">
            I am actively seeking internship opportunities, freelance consultations, and full-stack development challenges. Let's connect!
          </p>
        </div>

        {/* Contact Info Showcase Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto mb-10">
          
          {/* Email Card */}
          <div className="glass-panel p-6 rounded-xl border border-white/5 hover:border-emerald-500/20 transition-all flex flex-col justify-between group">
            <div>
              <div className="w-10 h-10 bg-emerald-500/10 text-emerald-400 rounded-lg flex items-center justify-center mb-4">
                <Mail size={18} />
              </div>
              <h3 className="font-display font-bold text-sm text-white mb-1">Email Direct</h3>
              <p className="text-[10px] font-mono text-slate-500 uppercase tracking-wider mb-2">Primary Node</p>
              <p className="text-slate-300 font-mono text-xs break-all selection:bg-emerald-500/20">{portfolioOwner.email}</p>
            </div>
            
            <div className="flex items-center space-x-2 mt-6 pt-4 border-t border-white/5">
              <button
                onClick={copyEmail}
                className="text-[11px] font-mono text-emerald-400 hover:text-emerald-300 transition-colors cursor-pointer"
                id="contact-copy-btn"
              >
                {copied ? 'Copied to Clipboard!' : 'Copy Address'}
              </button>
              <div className="h-3 w-px bg-white/5" />
              <a
                href={`mailto:${portfolioOwner.email}`}
                className="text-[11px] font-mono text-slate-400 hover:text-white transition-colors flex items-center space-x-1"
              >
                <span>Compose</span>
                <ArrowUpRight size={10} />
              </a>
            </div>
          </div>

          {/* Phone Card */}
          <div className="glass-panel p-6 rounded-xl border border-white/5 hover:border-emerald-500/20 transition-all flex flex-col justify-between group">
            <div>
              <div className="w-10 h-10 bg-emerald-500/10 text-emerald-400 rounded-lg flex items-center justify-center mb-4">
                <Phone size={18} />
              </div>
              <h3 className="font-display font-bold text-sm text-white mb-1">Voice Node</h3>
              <p className="text-[10px] font-mono text-slate-500 uppercase tracking-wider mb-2">Direct Line</p>
              <p className="text-slate-300 font-mono text-xs leading-relaxed">+{portfolioOwner.phone}</p>
            </div>

            <div className="mt-6 pt-4 border-t border-white/5">
              <a
                href={`tel:${portfolioOwner.phone}`}
                className="text-[11px] font-mono text-emerald-400 hover:text-emerald-300 transition-colors flex items-center justify-center sm:justify-start space-x-1"
                id="contact-phone-link"
              >
                <span>Call Directly</span>
                <ArrowUpRight size={10} />
              </a>
            </div>
          </div>

          {/* Location Hub */}
          <div className="glass-panel p-6 rounded-xl border border-white/5 hover:border-emerald-500/20 transition-all flex flex-col justify-between group">
            <div>
              <div className="w-10 h-10 bg-emerald-500/10 text-emerald-400 rounded-lg flex items-center justify-center mb-4">
                <MapPin size={18} />
              </div>
              <h3 className="font-display font-bold text-sm text-white mb-1">Location Hub</h3>
              <p className="text-[10px] font-mono text-slate-500 uppercase tracking-wider mb-2">Operational Origin</p>
              <p className="text-slate-300 font-mono text-xs leading-relaxed">Tamil Nadu, India</p>
            </div>

            <div className="mt-6 pt-4 border-t border-white/5 text-[11px] font-mono text-slate-500">
              Open to relocation & hybrid models
            </div>
          </div>

        </div>

        {/* Social Platforms Links */}
        <div className="max-w-5xl mx-auto glass-panel p-6 rounded-xl border border-white/5 mt-6">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
            <div className="text-center sm:text-left">
              <h4 className="font-display font-bold text-sm text-white">Professional Networks</h4>
              <p className="text-xs text-slate-500 font-mono mt-0.5">Explore active profiles and codebases</p>
            </div>
            
            <div className="flex flex-wrap justify-center gap-3">
              <a
                href={`https://linkedin.com/in/${portfolioOwner.linkedin}`}
                target="_blank"
                rel="noreferrer"
                className="px-4 py-2 border border-white/10 hover:border-emerald-500/30 bg-slate-900/40 hover:bg-slate-900 rounded-lg text-xs font-mono text-white flex items-center space-x-2 transition-all cursor-pointer"
                id="contact-social-linkedin"
              >
                <Linkedin size={13} className="text-emerald-400" />
                <span>LinkedIn</span>
                <ExternalLink size={10} className="opacity-40" />
              </a>
              
              <a
                href={`https://github.com/${portfolioOwner.github}`}
                target="_blank"
                rel="noreferrer"
                className="px-4 py-2 border border-white/10 hover:border-emerald-500/30 bg-slate-900/40 hover:bg-slate-900 rounded-lg text-xs font-mono text-white flex items-center space-x-2 transition-all cursor-pointer"
                id="contact-social-github"
              >
                <Github size={13} className="text-emerald-400" />
                <span>GitHub</span>
                <ExternalLink size={10} className="opacity-40" />
              </a>

              <a
                href={`https://instagram.com/${portfolioOwner.instagram}`}
                target="_blank"
                rel="noreferrer"
                className="px-4 py-2 border border-white/10 hover:border-emerald-500/30 bg-slate-900/40 hover:bg-slate-900 rounded-lg text-xs font-mono text-white flex items-center space-x-2 transition-all cursor-pointer"
                id="contact-social-instagram"
              >
                <span className="font-sans text-[10px] font-bold font-mono text-xs text-emerald-400">IG</span>
                <span>Instagram</span>
                <ExternalLink size={10} className="opacity-40" />
              </a>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
