import React, { useState, useEffect } from 'react';
import { Menu, X, Terminal, Github, Linkedin, Mail } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { portfolioOwner } from '../data';

interface HeaderProps {
  activeSection: string;
}

export default function Header({ activeSection }: HeaderProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Experience', href: '#experience' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'GitHub Stats', href: '#github' },
    { name: 'Achievements', href: '#achievements' },
    { name: 'Contact', href: '#contact' },
  ];

  const scrollToSection = (id: string) => {
    setIsOpen(false);
    const element = document.getElementById(id.replace('#', ''));
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-slate-950/80 backdrop-blur-md border-b border-white/5 py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Logo / Monogram */}
        <a
          href="#home"
          onClick={(e) => {
            e.preventDefault();
            scrollToSection('#home');
          }}
          className="flex items-center space-x-2 text-white font-display font-bold text-lg tracking-tight group"
          id="nav-logo"
        >
          <div className="bg-emerald-500/10 text-emerald-400 p-1.5 rounded-lg border border-emerald-500/20 group-hover:border-emerald-500/50 group-hover:text-emerald-300 transition-colors">
            <Terminal size={18} />
          </div>
          <span className="bg-gradient-to-r from-white to-slate-400 bg-clip-text text-transparent group-hover:to-emerald-400 transition-all">
            {portfolioOwner.name}
          </span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center space-x-1">
          {navItems.map((item) => {
            const isCurrent = activeSection === item.href.replace('#', '');
            return (
              <a
                key={item.name}
                href={item.href}
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection(item.href);
                }}
                className={`px-3 py-1.5 text-sm font-medium rounded-lg transition-all duration-150 relative ${
                  isCurrent
                    ? 'text-emerald-400 font-semibold'
                    : 'text-slate-400 hover:text-white'
                }`}
                id={`nav-${item.name.toLowerCase().replace(' ', '-')}`}
              >
                {item.name}
                {isCurrent && (
                  <motion.div
                    layoutId="activeNavIndicator"
                    className="absolute bottom-0 left-3 right-3 h-0.5 bg-emerald-500 rounded-full"
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}
              </a>
            );
          })}
        </nav>

        {/* Quick External Actions */}
        <div className="hidden lg:flex items-center space-x-3">
          <a
            href={`https://github.com/${portfolioOwner.github}`}
            target="_blank"
            referrerPolicy="no-referrer"
            className="text-slate-400 hover:text-white p-1.5 rounded-lg border border-white/5 bg-white/2 hover:border-white/10 transition-colors"
            title="GitHub Profile"
            id="header-action-github"
          >
            <Github size={18} />
          </a>
          <a
            href={`https://linkedin.com/in/${portfolioOwner.linkedin}`}
            target="_blank"
            referrerPolicy="no-referrer"
            className="text-slate-400 hover:text-white p-1.5 rounded-lg border border-white/5 bg-white/2 hover:border-white/10 transition-colors"
            title="LinkedIn Profile"
            id="header-action-linkedin"
          >
            <Linkedin size={18} />
          </a>
          <a
            href={`mailto:${portfolioOwner.email}`}
            className="text-slate-400 hover:text-white p-1.5 rounded-lg border border-white/5 bg-white/2 hover:border-white/10 transition-colors"
            title="Send Email"
            id="header-action-email"
          >
            <Mail size={18} />
          </a>
          <button
            onClick={() => scrollToSection('#contact')}
            className="ml-2 px-4 py-1.5 bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-medium text-xs font-display rounded-lg transition-all duration-150 hover:shadow-[0_0_15px_rgba(16,185,129,0.3)] shadow-emerald-500/10 cursor-pointer"
            id="header-cta-hire"
          >
            Hire Me
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="lg:hidden p-2 rounded-lg text-slate-400 hover:text-white hover:bg-slate-900 border border-white/5"
          aria-label="Toggle Menu"
          id="mobile-menu-toggle"
        >
          {isOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden border-b border-white/5 bg-slate-950/95 backdrop-blur-xl absolute top-full left-0 right-0 overflow-hidden"
          >
            <div className="px-6 py-4 flex flex-col space-y-2">
              {navItems.map((item) => {
                const isCurrent = activeSection === item.href.replace('#', '');
                return (
                  <a
                    key={item.name}
                    href={item.href}
                    onClick={(e) => {
                      e.preventDefault();
                      scrollToSection(item.href);
                    }}
                    className={`px-4 py-2.5 text-base font-medium rounded-lg transition-colors ${
                      isCurrent
                        ? 'bg-emerald-500/10 text-emerald-400 border-l-2 border-emerald-500'
                        : 'text-slate-400 hover:text-white hover:bg-white/2'
                    }`}
                    id={`mobile-nav-${item.name.toLowerCase().replace(' ', '-')}`}
                  >
                    {item.name}
                  </a>
                );
              })}
              <div className="pt-4 border-t border-white/5 flex items-center justify-between">
                <div className="flex space-x-3">
                  <a
                    href={`https://github.com/${portfolioOwner.github}`}
                    target="_blank"
                    referrerPolicy="no-referrer"
                    className="text-slate-400 hover:text-white p-2 rounded-lg bg-white/2"
                  >
                    <Github size={20} />
                  </a>
                  <a
                    href={`https://linkedin.com/in/${portfolioOwner.linkedin}`}
                    target="_blank"
                    referrerPolicy="no-referrer"
                    className="text-slate-400 hover:text-white p-2 rounded-lg bg-white/2"
                  >
                    <Linkedin size={20} />
                  </a>
                  <a
                    href={`mailto:${portfolioOwner.email}`}
                    className="text-slate-400 hover:text-white p-2 rounded-lg bg-white/2"
                  >
                    <Mail size={20} />
                  </a>
                </div>
                <button
                  onClick={() => scrollToSection('#contact')}
                  className="px-5 py-2 bg-emerald-500 text-slate-950 font-display font-semibold rounded-lg text-sm"
                >
                  Contact Me
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
