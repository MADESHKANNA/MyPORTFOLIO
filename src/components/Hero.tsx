import React, { useState } from 'react';
import { ArrowRight, Github, Linkedin, Mail, Play, RefreshCw, Terminal, Check } from 'lucide-react';
import { motion } from 'motion/react';
import { portfolioOwner } from '../data';

export default function Hero() {
  const [terminalTab, setTerminalTab] = useState<'profile' | 'skills' | 'certs' | 'contact'>('profile');
  const [copied, setCopied] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText(portfolioOwner.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section
      id="home"
      className="relative min-h-screen pt-32 pb-24 md:py-0 flex items-center overflow-hidden tech-grid"
    >
      {/* Absolute Decorative Glow Elements */}
      <div className="absolute top-[20%] left-[10%] w-72 h-72 bg-emerald-500/10 rounded-full blur-[100px] animate-pulse-slow pointer-events-none" />
      <div className="absolute bottom-[20%] right-[15%] w-96 h-96 bg-emerald-400/5 rounded-full blur-[140px] animate-pulse-slow pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
        {/* Left Typography Column: Text & Actions */}
        <div className="lg:col-span-7 flex flex-col justify-center space-y-6">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center space-x-2 px-3 py-1 bg-emerald-500/10 border border-emerald-500/20 rounded-full text-emerald-400 text-xs font-mono w-fit"
            id="hero-badge"
          >
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <span>Open for Internships & Full-Time Offers</span>
          </motion.div>

          <div className="space-y-4">
            <motion.h4
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-slate-400 font-mono text-sm tracking-widest uppercase"
              id="hero-greeting"
            >
              Hi, I'm Madesh Kanna 👋
            </motion.h4>
            <motion.h1
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="font-display font-bold text-4xl sm:text-5xl lg:text-6xl text-white tracking-tight leading-tight"
              id="hero-title"
            >
              Computer Science and{' '}
              <span className="bg-gradient-to-r from-emerald-400 via-emerald-300 to-teal-400 bg-clip-text text-transparent">
                Engineering Student
              </span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.25 }}
              className="text-base sm:text-lg font-mono text-emerald-400 uppercase tracking-wider font-semibold"
              id="hero-subtitle"
            >
              Full Stack Developer and Data Scientist
            </motion.p>
          </div>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-slate-300 font-sans text-base sm:text-lg max-w-xl leading-relaxed"
            id="hero-description"
          >
            Active CSE undergraduate at <strong>SNS College of Technology (2023-2027)</strong>. Passionate about Full Stack Development, Data Science, and building AI diagnostic software.
          </motion.p>

          {/* Core Interactive Actions */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex flex-wrap gap-4 pt-2"
            id="hero-buttons"
          >
            <a
              href="#projects"
              className="px-6 py-3 bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-display font-semibold rounded-lg text-sm transition-all flex items-center hover:shadow-[0_0_20px_rgba(16,185,129,0.4)] shadow-emerald-500/10 cursor-pointer"
              id="hero-btn-portfolio"
            >
              View My Work
              <ArrowRight size={16} className="ml-2" />
            </a>
          </motion.div>

          {/* Social Links & Copy Info Row */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="flex items-center space-x-4 pt-6 border-t border-white/5"
            id="hero-social-links"
          >
            <div className="flex space-x-2">
              <a
                href={`https://github.com/${portfolioOwner.github}`}
                target="_blank"
                referrerPolicy="no-referrer"
                className="w-10 h-10 rounded-lg flex items-center justify-center text-slate-400 hover:text-white bg-slate-900 border border-white/5 hover:border-white/10 transition-colors"
                id="hero-social-github"
              >
                <Github size={18} />
              </a>
              <a
                href={`https://linkedin.com/in/${portfolioOwner.linkedin}`}
                target="_blank"
                referrerPolicy="no-referrer"
                className="w-10 h-10 rounded-lg flex items-center justify-center text-slate-400 hover:text-white bg-slate-900 border border-white/5 hover:border-white/10 transition-colors"
                id="hero-social-linkedin"
              >
                <Linkedin size={18} />
              </a>
              <a
                href={`https://instagram.com/${portfolioOwner.instagram}`}
                target="_blank"
                referrerPolicy="no-referrer"
                className="w-10 h-10 rounded-lg flex items-center justify-center text-slate-400 hover:text-white bg-slate-900 border border-white/5 hover:border-white/10 transition-colors"
                id="hero-social-instagram"
              >
                <span className="font-sans text-xs font-bold font-mono">IG</span>
              </a>
            </div>

            <div className="h-4 w-px bg-white/5" />

            <div className="flex items-center space-x-2 text-xs font-mono text-slate-400">
              <Mail size={14} className="text-emerald-400" />
              <button
                onClick={copyEmail}
                className="hover:text-white transition-colors cursor-pointer"
                id="hero-social-email-copy"
                title="Click to copy email address"
              >
                {portfolioOwner.email}
              </button>
              {copied ? (
                <span className="text-emerald-400 text-[10px] bg-emerald-500/10 px-1.5 py-0.5 rounded border border-emerald-500/20">
                  Copied!
                </span>
              ) : (
                <span className="text-[10px] text-slate-500">(Click to copy)</span>
              )}
            </div>
          </motion.div>
        </div>

        {/* Right Column: Visual Interactive Developer Terminal Mockup */}
        <div className="lg:col-span-5 relative mt-6 lg:mt-0">
          <div className="absolute -top-10 -right-10 w-44 h-44 bg-emerald-500/5 rounded-full blur-3xl" />
          
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="w-full glass-panel rounded-xl border border-white/10 overflow-hidden shadow-2xl relative"
            id="hero-terminal"
          >
            {/* Terminal Window Header */}
            <div className="bg-slate-905 border-b border-white/5 px-4 py-3 flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <span className="w-3 h-3 rounded-full bg-red-500/30 border border-red-500/45" />
                <span className="w-3 h-3 rounded-full bg-yellow-500/30 border border-yellow-500/45" />
                <span className="w-3 h-3 rounded-full bg-emerald-500/30 border border-emerald-500/45" />
                <span className="text-xs font-mono text-slate-500 pl-2">bash ~ madesh.sh</span>
              </div>
              <div className="flex items-center space-x-1">
                <Terminal size={12} className="text-emerald-400" />
                <span className="text-[10px] font-mono text-emerald-400 bg-emerald-500/10 px-1.5 py-0.5 rounded">ONLINE</span>
              </div>
            </div>

            {/* Terminal Tab Triggers */}
            <div className="bg-slate-950/40 border-b border-white/5 flex text-xs font-mono">
              <button
                onClick={() => setTerminalTab('profile')}
                className={`px-4 py-2 border-r border-white/5 transition-all cursor-pointer ${
                  terminalTab === 'profile'
                    ? 'bg-slate-900 text-emerald-400 border-b border-b-emerald-500 font-medium'
                    : 'text-slate-500 hover:text-slate-300'
                }`}
                id="hero-tab-profile"
              >
                profile.json
              </button>
              <button
                onClick={() => setTerminalTab('skills')}
                className={`px-4 py-2 border-r border-white/5 transition-all cursor-pointer ${
                  terminalTab === 'skills'
                    ? 'bg-slate-900 text-emerald-400 border-b border-b-emerald-500 font-medium'
                    : 'text-slate-500 hover:text-slate-300'
                }`}
                id="hero-tab-skills"
              >
                stack.yml
              </button>
              <button
                onClick={() => setTerminalTab('certs')}
                className={`px-4 py-2 border-r border-white/5 transition-all cursor-pointer ${
                  terminalTab === 'certs'
                    ? 'bg-slate-900 text-emerald-400 border-b border-b-emerald-500 font-medium'
                    : 'text-slate-500 hover:text-slate-300'
                }`}
                id="hero-tab-certs"
              >
                certs.sh
              </button>
              <button
                onClick={() => setTerminalTab('contact')}
                className={`px-4 py-2 transition-all cursor-pointer ${
                  terminalTab === 'contact'
                    ? 'bg-slate-900 text-emerald-400 border-b border-b-emerald-500 font-medium'
                    : 'text-slate-500 hover:text-slate-300'
                }`}
                id="hero-tab-contact"
              >
                contact_info
              </button>
            </div>

            {/* Terminal Body Screen */}
            <div className="p-5 font-mono text-xs text-slate-300 bg-slate-950/80 min-h-[290px] overflow-auto">
              {terminalTab === 'profile' && (
                <div className="space-y-2">
                  <div className="flex items-center space-x-2 text-slate-500 text-[10px]">
                    <Play size={10} className="text-emerald-400" />
                    <span>cat profile.json</span>
                  </div>
                  <pre className="text-emerald-300 leading-relaxed font-sans font-mono whitespace-pre text-[11px]">
{`{
  "name": "Madesh Kanna S",
  "education": {
    "college": "SNS College of Technology",
    "degree": "B.E. Computer Science",
    "years": "2023 - 2027",
    "gpa": "8.76 / 10.00"
  },
  "roles": [
    "Full Stack Developer",
    "Data Science Intern",
    "AI Diagnostic Engineer"
  ],
  "location": "Tamil Nadu, India"
}`}
                  </pre>
                </div>
              )}

              {terminalTab === 'skills' && (
                <div className="space-y-2">
                  <div className="flex items-center space-x-2 text-slate-500 text-[10px]">
                    <Play size={10} className="text-emerald-400" />
                    <span>cat stack.yml</span>
                  </div>
                  <pre className="text-slate-300 leading-relaxed font-mono text-[11px]">
{`# Technology Proficiency Index
languages:
  - HTML5 & CSS3
  - JavaScript / TypeScript
  - Python (Flask / Django)
  - Java, C, C++
frameworks:
  - React & Node.js
  - Streamlit & TensorFlow
databases:
  - MySQL & MariaDB
  - MongoDB (NoSQL)`}
                  </pre>
                </div>
              )}

              {terminalTab === 'certs' && (
                <div className="space-y-2">
                  <div className="flex items-center space-x-2 text-slate-500 text-[10px]">
                    <Play size={10} className="text-emerald-400" />
                    <span>./certs.sh</span>
                  </div>
                  <pre className="text-slate-300 leading-relaxed font-mono text-[11px] whitespace-pre-wrap">
{`# Credentials verified successfully
✓ DP-900: Azure Data Fundamentals
✓ NPTEL HCI: Elite + Gold Certification (91%)
✓ NPTEL BI: Elite + Silver Certification (77%)`}
                  </pre>
                </div>
              )}

              {terminalTab === 'contact' && (
                <div className="space-y-2">
                  <div className="flex items-center space-x-2 text-slate-500 text-[10px]">
                    <Play size={10} className="text-emerald-400" />
                    <span>cat contact_info</span>
                  </div>
                  <div className="space-y-2 text-slate-300 font-mono text-[11px]">
                    <div className="flex items-center justify-between py-1 border-b border-white/5">
                      <span className="text-slate-500">EMAIL:</span>
                      <span className="text-white hover:text-emerald-300 transition-colors selection:bg-emerald-500/20">{portfolioOwner.email}</span>
                    </div>
                    <div className="flex items-center justify-between py-1 border-b border-white/5">
                      <span className="text-slate-500">PHONE:</span>
                      <span className="text-white">+91 93455 30354</span>
                    </div>
                    <div className="flex items-center justify-between py-1 border-b border-white/5">
                      <span className="text-slate-500">LINKEDIN:</span>
                      <a href={`https://linkedin.com/in/${portfolioOwner.linkedin}`} target="_blank" className="text-emerald-400 hover:underline">{portfolioOwner.linkedin}</a>
                    </div>
                    <div className="flex items-center justify-between py-1">
                      <span className="text-slate-500">GITHUB:</span>
                      <a href={`https://github.com/${portfolioOwner.github}`} target="_blank" className="text-emerald-400 hover:underline">{portfolioOwner.github}</a>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Terminal Footer Info */}
            <div className="bg-slate-900 px-4 py-2.5 border-t border-white/5 flex items-center justify-between text-[10px] font-mono text-slate-500">
              <span className="flex items-center">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 mr-2" />
                System ready
              </span>
              <span>UTC : {new Date().toISOString().slice(11,19)}</span>
            </div>
          </motion.div>

          {/* Floaters indicating key specs */}
          <div className="absolute -bottom-6 -left-6 glass-panel border border-white/10 px-4 py-2.5 rounded-lg flex items-center space-x-3 shadow-xl animate-float pointer-events-none">
            <div className="bg-emerald-500/10 text-emerald-400 p-2 rounded-lg">
              <Trophy size={16} />
            </div>
            <div>
              <p className="text-[10px] font-mono text-slate-400 uppercase tracking-wider">Top CGPA</p>
              <p className="text-sm font-bold text-white font-display">8.76 / 10</p>
            </div>
          </div>

          <div className="absolute -top-6 -right-4 glass-panel border border-white/10 px-4 py-2.5 rounded-lg flex items-center space-x-3 shadow-xl animate-float-delayed pointer-events-none">
            <div className="bg-emerald-500/10 text-emerald-400 p-2 rounded-lg">
              <CheckCircle2 size={16} />
            </div>
            <div>
              <p className="text-[10px] font-mono text-slate-400 uppercase tracking-wider">Credentials</p>
              <p className="text-sm font-bold text-white font-display">DP-900 & NPTEL Gold</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// Subcomponent used in Float decoration
function Trophy(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6" />
      <path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18" />
      <path d="M4 22h16" />
      <path d="M10 14.66V17c0 .55-.45 1-1 1H4v2h16v-2h-5c-.55 0-1-.45-1-1v-2.34" />
      <path d="M12 2a6 6 0 0 1 6 6v3.31A6 6 0 0 1 12 17a6 6 0 0 1-6-5.69V8a6 6 0 0 1 6-6Z" />
    </svg>
  );
}

function CheckCircle2(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 4.477 2 12s4.477 10 10 10z" />
      <path d="m9 12 2 2 4-4" />
    </svg>
  );
}
