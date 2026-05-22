import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, Sun, Moon, Sparkles } from 'lucide-react';

interface NavigationHeaderProps {
  isDarkMode: boolean;
  onThemeToggle: () => void;
  onNavigate: (section: string) => void;
  activeSection: string;
}

export default function NavigationHeader({
  isDarkMode,
  onThemeToggle,
  onNavigate,
  activeSection
}: NavigationHeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  const navItems = [
    { label: 'Core', id: 'hero' },
    { label: 'About', id: 'about' },
    { label: 'Skills', id: 'skills' },
    { label: 'Work', id: 'projects' },
    { label: 'Offered', id: 'services' },
    { label: 'Contact', id: 'contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      // Background morphing
      setIsScrolled(window.scrollY > 20);

      // Scroll Progress calculator
      const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
      if (totalScroll > 0) {
        const progress = (window.scrollY / totalScroll) * 100;
        setScrollProgress(progress);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLinkClick = (id: string) => {
    setMobileMenuOpen(false);
    onNavigate(id);
  };

  return (
    <>
      <header
        id="navbar"
        className={`fixed top-0 inset-x-0 z-40 transition-all duration-300 ${
          isScrolled
            ? isDarkMode
              ? 'bg-[#020205]/60 border-b border-white/10 backdrop-blur-md shadow-lg shadow-black/20 py-3'
              : 'bg-white/80 border-b border-slate-200/80 backdrop-blur-md shadow-md shadow-slate-100/50 py-3'
            : 'bg-transparent py-5'
        }`}
      >
        <div className="container mx-auto px-6 max-w-7xl flex items-center justify-between">
          
          {/* Brand Logo Link */}
          <button
            id="nav-logo"
            onClick={() => handleLinkClick('hero')}
            className="flex items-center gap-2 font-sans font-black tracking-widest text-left select-none"
          >
            <div className={`w-8 h-8 rounded-lg flex items-center justify-center border ${
              isDarkMode ? 'border-cyan-400 bg-cyan-400/10' : 'border-indigo-600 bg-indigo-50'
            }`}>
              <span className={`text-xs font-black ${isDarkMode ? 'text-cyan-400' : 'text-indigo-600'}`}>XJ</span>
            </div>
            
            <div className="flex flex-col">
              <span className={`text-sm tracking-widest ${isDarkMode ? 'text-white' : 'text-slate-800'}`}>
                JAVA.DEV
              </span>
              <span className={`text-[7px] font-mono tracking-wider opacity-60 ${isDarkMode ? 'text-slate-400' : 'text-slate-500'}`}>
                16yo PORTFOLIO
              </span>
            </div>
          </button>

          {/* Desktop Nav Actions */}
          <nav className="hidden md:flex items-center gap-6">
            <div className={`flex items-center gap-1.5 px-1.5 py-1 rounded-full border ${
              isDarkMode ? 'bg-white/5 border-white/10 backdrop-blur-md' : 'bg-slate-50 border-slate-200'
            }`}>
              {navItems.map((item) => (
                <button
                  key={item.id}
                  id={`nav-link-${item.id}`}
                  onClick={() => handleLinkClick(item.id)}
                  className={`px-3 py-1.5 rounded-full text-[11px] font-mono font-bold tracking-wide transition-all uppercase ${
                    activeSection === item.id
                      ? isDarkMode
                        ? 'bg-cyan-400 text-slate-950 shadow-[0_0_10px_rgba(34,211,238,0.25)]'
                        : 'bg-indigo-600 text-white shadow-sm'
                      : isDarkMode
                        ? 'text-slate-400 hover:text-white'
                        : 'text-slate-600 hover:text-indigo-600'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>

            {/* Micro theme toggle switcher */}
            <button
              id="theme-toggler"
              onClick={onThemeToggle}
              title={isDarkMode ? 'Switch to Light' : 'Switch to Cyber Dark'}
              className={`p-2.5 rounded-xl border transition-all duration-300 hover:scale-110 active:scale-95 flex items-center justify-center ${
                isDarkMode
                  ? 'border-white/10 bg-white/5 text-cyan-400 hover:text-cyan-300 hover:border-cyan-400/30'
                  : 'border-slate-200 bg-white text-indigo-600 hover:text-indigo-500 hover:border-indigo-300'
              }`}
            >
              {isDarkMode ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
            </button>
          </nav>

          {/* Mobile controllers row */}
          <div className="flex md:hidden items-center gap-3">
            
            {/* Theme Toggle in Mobile header */}
            <button
              id="theme-toggler-mobile"
              onClick={onThemeToggle}
              className={`p-2 rounded-xl border ${
                isDarkMode ? 'border-white/10 bg-white/5 text-cyan-400' : 'border-slate-100 bg-slate-50 text-indigo-600'
              }`}
            >
              {isDarkMode ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
            </button>

            {/* Menu trigger button */}
            <button
              id="mobile-menu-trigger"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className={`p-2 rounded-xl border ${
                isDarkMode ? 'border-white/10 bg-white/5 text-white' : 'border-slate-100 bg-slate-50 text-slate-800'
              }`}
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>

        </div>

        {/* Scroll Progress Indicator Bar at bottom of navbar */}
        <div className="absolute bottom-0 inset-x-0 h-[2.5px] bg-slate-200 dark:bg-white/5">
          <motion.div
            style={{ width: `${scrollProgress}%` }}
            className={`h-full bg-gradient-to-r ${isDarkMode ? 'from-cyan-400 to-purple-500' : 'from-indigo-600 to-sky-500'}`}
          />
        </div>

      </header>

      {/* Slide-out Mobile Drop Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            id="mobile-menu-drawer"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className={`md:hidden fixed top-[60px] inset-x-0 z-30 border-b p-6 backdrop-blur-lg flex flex-col gap-4 text-left ${
              isDarkMode
                ? 'bg-[#020205]/95 border-white/10 text-white'
                : 'bg-white/95 border-slate-200 text-slate-900 shadow-xl'
            }`}
          >
            {navItems.map((item) => (
              <button
                key={item.id}
                id={`mobile-nav-link-${item.id}`}
                onClick={() => handleLinkClick(item.id)}
                className={`py-3.5 border-b font-mono text-sm font-bold uppercase tracking-widest text-left ${
                  activeSection === item.id
                    ? isDarkMode
                      ? 'text-cyan-400 border-cyan-400/20'
                      : 'text-indigo-600 border-indigo-250'
                    : 'border-slate-950/5 dark:border-slate-900/40 opacity-70'
                }`}
              >
                {item.label}
              </button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
