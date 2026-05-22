import { motion } from 'motion/react';
import { ArrowUp, Github, Send, Instagram } from 'lucide-react';
import { PERSONAL_INFO } from '../data';

interface FooterProps {
  isDarkMode: boolean;
  onScrollToTop: () => void;
  onNavigate: (section: string) => void;
}

export default function Footer({ isDarkMode, onScrollToTop, onNavigate }: FooterProps) {
  const currentYear = new Date().getFullYear();

  const footerLinks = [
    { label: 'Core', sectionId: 'hero' },
    { label: 'About', sectionId: 'about' },
    { label: 'Skills', sectionId: 'skills' },
    { label: 'Work', sectionId: 'projects' },
    { label: 'Capabilities', sectionId: 'services' },
    { label: 'Contact', sectionId: 'contact' }
  ];

  return (
    <footer className={`relative border-t text-left z-10 transition-colors duration-500 ${
      isDarkMode
        ? 'bg-[#020205] border-white/5 text-slate-400'
        : 'bg-slate-50 border-slate-200 text-slate-600'
    }`}>
      
      {/* Decorative Blur and Grid lines */}
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-cyan-500/30 to-transparent pointer-events-none" />

      <div className="container mx-auto px-6 py-12 max-w-7xl">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 mb-8 pb-8 border-b border-slate-950/5 dark:border-slate-900/40">
          
          {/* Logo Brand */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left select-none">
            <span className={`text-base font-sans font-black tracking-widest ${isDarkMode ? 'text-white' : 'text-slate-900'}`}>
              JAVLA.DEV
            </span>
            <span className="text-[10px] font-mono uppercase tracking-[0.2em] opacity-50 mt-1">
              Creative Web Systems // TAS-UZB
            </span>
          </div>

          {/* Quick Nav Row */}
          <div className="flex flex-wrap justify-center gap-6">
            {footerLinks.map((link) => (
              <button
                key={link.sectionId}
                id={`footer-link-${link.sectionId}`}
                onClick={() => onNavigate(link.sectionId)}
                className={`text-xs font-mono font-medium tracking-wide transition-colors ${
                  isDarkMode ? 'hover:text-cyan-400' : 'hover:text-indigo-600'
                }`}
              >
                {link.label.toUpperCase()}
              </button>
            ))}
          </div>

          {/* Floating Back-To-Top Node */}
          <button
            id="back-to-top"
            onClick={onScrollToTop}
            title="Scroll To Top"
            className={`p-3.5 rounded-xl border transition-all duration-300 hover:scale-110 active:scale-95 group shadow-sm ${
              isDarkMode
                ? 'border-white/10 bg-white/5 text-cyan-400 hover:text-cyan-300 hover:border-cyan-400/40 hover:shadow-[0_0_15px_rgba(34,211,238,0.2)]'
                : 'border-slate-200 bg-white text-indigo-600 hover:text-indigo-500 hover:border-indigo-300 shadow-indigo-50'
            }`}
          >
            <ArrowUp className="w-4 h-4 transition-transform group-hover:translate-y-[-2px]" />
          </button>
        </div>

        {/* Bottom copyright details and socials */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 text-[11px] font-mono">
          
          <div>
            &copy; {currentYear} {PERSONAL_INFO.name}. All Visual rights reserved. Crafted locally with React & Tailwind CSS.
          </div>

          <div className="flex gap-4">
            <a
              id="social-github-footer"
              href={PERSONAL_INFO.github}
              target="_blank"
              referrerPolicy="no-referrer"
              rel="noreferrer"
              className={`hover:scale-110 transition-transform ${isDarkMode ? 'hover:text-cyan-400' : 'hover:text-indigo-600'}`}
            >
              <Github className="w-4 h-4" />
            </a>
            <a
              id="social-telegram-footer"
              href={PERSONAL_INFO.telegram}
              target="_blank"
              referrerPolicy="no-referrer"
              rel="noreferrer"
              className={`hover:scale-110 transition-transform ${isDarkMode ? 'hover:text-cyan-400' : 'hover:text-indigo-600'}`}
            >
              <Send className="w-4 h-4" />
            </a>
            <a
              id="social-instagram-footer"
              href={PERSONAL_INFO.instagram}
              target="_blank"
              referrerPolicy="no-referrer"
              rel="noreferrer"
              className={`hover:scale-110 transition-transform ${isDarkMode ? 'hover:text-cyan-400' : 'hover:text-indigo-600'}`}
            >
              <Instagram className="w-4 h-4" />
            </a>
          </div>

        </div>
      </div>
    </footer>
  );
}
