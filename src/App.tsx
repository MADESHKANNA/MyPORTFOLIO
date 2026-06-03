/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import AboutEducation from './components/AboutEducation';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Projects from './components/Projects';
import GithubStats from './components/GithubStats';
import AchievementsGrid from './components/AchievementsGrid';
import Contact from './components/Contact';
import { portfolioOwner } from './data';
import { Terminal, Heart, Code } from 'lucide-react';

export default function App() {
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const sections = ['home', 'about', 'experience', 'skills', 'projects', 'github', 'achievements', 'contact'];
    const observerOptions = {
      root: null,
      rootMargin: '-30% 0px -30% 0px', // Trigger when section occupies screen center
      threshold: 0.1,
    };

    const handleIntersect = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersect, observerOptions);

    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => {
      sections.forEach((id) => {
        const el = document.getElementById(id);
        if (el) observer.unobserve(el);
      });
    };
  }, []);

  return (
    <div className="mesh-bg min-h-screen text-slate-100 selection:bg-emerald-500/20 selection:text-emerald-300">
      {/* Dynamic Header */}
      <Header activeSection={activeSection} />

      {/* Primary Landing Screen Layout */}
      <main className="relative">
        <Hero />
        <AboutEducation />
        <Experience />
        <Skills />
        <Projects />
        <GithubStats />
        <AchievementsGrid />
        <Contact />
      </main>

      {/* Visual Footer */}
      <footer className="border-t border-white/5 bg-slate-950 py-12 text-slate-500 text-xs font-mono">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center space-x-2">
            <div className="bg-emerald-500/10 text-emerald-400 p-1 rounded border border-emerald-500/20">
              <Terminal size={14} />
            </div>
            <span className="text-white font-display font-bold text-sm tracking-tight">{portfolioOwner.name}</span>
          </div>

          <div className="flex items-center space-x-1.5 text-center">
            <span>Built with React, Tailwind CSS v4 & Motion</span>
            <Code size={12} className="text-emerald-500" />
          </div>

          <div className="text-right text-[10px]">
            <span>© {new Date().getFullYear()} Madesh Kanna S. All Rights Reserved.</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
