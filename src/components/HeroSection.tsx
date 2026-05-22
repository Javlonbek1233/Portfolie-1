import { useEffect, useState } from 'react';
import { motion } from 'motion/react';
import { ArrowDown, Github, Instagram, Send, Terminal, PhoneCall } from 'lucide-react';
import { PERSONAL_INFO } from '../data';

interface HeroSectionProps {
  isDarkMode: boolean;
  onScrollToContact: () => void;
  onScrollToProjects: () => void;
}

export default function HeroSection({ isDarkMode, onScrollToContact, onScrollToProjects }: HeroSectionProps) {
  const [typedText, setTypedText] = useState('');
  const [roleIndex, setRoleIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  const ROLES = [
    '16 Years Old Web Developer',
    'Creative Frontend Architect',
    'Interactive UI/UX Designer',
    'Open Source Tinkerer'
  ];

  useEffect(() => {
    let timer: NodeJS.Timeout;
    const currentFullText = ROLES[roleIndex];
    const typingSpeed = isDeleting ? 30 : 75;

    const handleType = () => {
      if (!isDeleting) {
        setTypedText((prev) => currentFullText.substring(0, prev.length + 1));
        if (typedText === currentFullText) {
          // Pause at complete text before deleting
          timer = setTimeout(() => setIsDeleting(true), 2000);
          return;
        }
      } else {
        setTypedText((prev) => currentFullText.substring(0, prev.length - 1));
        if (typedText === '') {
          setIsDeleting(false);
          setRoleIndex((prev) => (prev + 1) % ROLES.length);
          return;
        }
      }

      timer = setTimeout(handleType, typingSpeed);
    };

    timer = setTimeout(handleType, typingSpeed);
    return () => clearTimeout(timer);
  }, [typedText, isDeleting, roleIndex]);

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center pt-24 pb-16 overflow-hidden z-10"
    >
      {/* Dynamic Ambient Blur Blobs */}
      <div className="absolute top-1/4 left-1/4 -translate-y-1/2 w-64 md:w-96 h-64 md:h-96 bg-cyan-500/10 md:bg-cyan-500/5 rounded-full blur-[80px] md:blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 translate-y-1/2 w-64 md:w-96 h-64 md:h-96 bg-purple-500/10 md:bg-purple-500/5 rounded-full blur-[80px] md:blur-[120px] pointer-events-none" />

      <div className="container mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10 max-w-7xl">
        
        {/* Left Side: Copy */}
        <div className="lg:col-span-7 flex flex-col justify-center text-left">
          
          {/* Futuristic Micro Pill */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4 }}
            className={`self-start inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-mono font-medium tracking-wide mb-6 border ${
              isDarkMode
                ? 'bg-white/5 border-white/10 text-cyan-400'
                : 'bg-indigo-50 border-indigo-250 text-indigo-600'
            }`}
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-400"></span>
            </span>
            <span>AVAILABLE FOR FREELANCE & COLLABORATION</span>
          </motion.div>

          {/* Intro text */}
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className={`font-mono text-sm uppercase tracking-widest ${
              isDarkMode ? 'text-slate-400' : 'text-slate-600'
            }`}
          >
            WELCOME TO MY SPACE
          </motion.p>

          {/* Primary Name */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className={`text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-sans font-black tracking-tight mt-3 mb-4 select-none ${
              isDarkMode ? 'text-white' : 'text-slate-900'
            }`}
          >
            I am{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-indigo-400 to-purple-500 font-extrabold shadow-sm">
              {PERSONAL_INFO.name}
            </span>
          </motion.h1>

          {/* Typing Role Selector */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex items-center gap-2.5 h-10 select-none mb-6"
          >
            <Terminal className={`w-5 h-5 ${isDarkMode ? 'text-cyan-400' : 'text-indigo-600'}`} />
            <span className={`text-lg sm:text-xl md:text-2xl font-mono font-semibold ${
              isDarkMode ? 'text-slate-300' : 'text-slate-700'
            }`}>
              {typedText}
              <span className="animate-pulse inline-block w-[3px] h-[18px] sm:h-[22px] bg-cyan-400 ml-1" />
            </span>
          </motion.div>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className={`text-base sm:text-lg leading-relaxed max-w-xl mb-10 ${
              isDarkMode ? 'text-slate-400' : 'text-slate-600'
            }`}
          >
            {PERSONAL_INFO.aboutBrief}
          </motion.p>

          {/* Call To Actions */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="flex flex-col sm:flex-row gap-4 mb-10"
          >
            <button
              id="cta-contact"
              onClick={onScrollToContact}
              className={`inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-xl font-medium tracking-wide shadow-md transition-all duration-300 active:scale-95 group ${
                isDarkMode
                  ? 'bg-cyan-400 text-slate-950 hover:bg-cyan-300 hover:shadow-[0_0_20px_rgba(34,211,238,0.4)]'
                  : 'bg-indigo-600 text-white hover:bg-indigo-500 hover:shadow-[0_0_15px_rgba(99,102,241,0.3)]'
              }`}
            >
              <span>Initialize Node</span>
              <PhoneCall className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
            </button>
            <button
              id="cta-work"
              onClick={onScrollToProjects}
              className={`inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-xl font-medium tracking-wide border transition-all duration-300 active:scale-95 ${
                isDarkMode
                  ? 'border-white/10 bg-white/5 text-white hover:bg-white/10 hover:border-white/20'
                  : 'border-slate-200 bg-slate-50 text-slate-800 hover:bg-slate-100 hover:border-slate-300'
              }`}
            >
              <span>View Projects</span>
              <ArrowDown className="w-4 h-4 animate-bounce" />
            </button>
          </motion.div>

          {/* Socials Ribbon */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="flex items-center gap-4"
          >
            <span className={`text-xs font-mono tracking-widest ${isDarkMode ? 'text-slate-600' : 'text-slate-400'}`}>
              LINK CHANNELS //
            </span>
            <div className="flex gap-3">
              <a
                id="social-github-hero"
                href={PERSONAL_INFO.github}
                target="_blank"
                referrerPolicy="no-referrer"
                rel="noreferrer"
                className={`p-2.5 rounded-lg border transition-all duration-300 hover:scale-110 ${
                  isDarkMode
                    ? 'border-white/10 bg-white/5 text-slate-400 hover:text-cyan-400 hover:border-cyan-400/30 hover:bg-white/10'
                    : 'border-slate-200 bg-white text-slate-600 hover:text-indigo-600 hover:border-indigo-600/30 hover:bg-indigo-50'
                }`}
              >
                <Github className="w-4.5 h-4.5" />
              </a>
              <a
                id="social-telegram-hero"
                href={PERSONAL_INFO.telegram}
                target="_blank"
                referrerPolicy="no-referrer"
                rel="noreferrer"
                className={`p-2.5 rounded-lg border transition-all duration-300 hover:scale-110 ${
                  isDarkMode
                    ? 'border-white/10 bg-white/5 text-slate-400 hover:text-cyan-400 hover:border-cyan-400/30 hover:bg-white/10'
                    : 'border-slate-200 bg-white text-slate-600 hover:text-indigo-600 hover:border-indigo-600/30 hover:bg-indigo-50'
                }`}
              >
                <Send className="w-4.5 h-4.5" />
              </a>
              <a
                id="social-instagram-hero"
                href={PERSONAL_INFO.instagram}
                target="_blank"
                referrerPolicy="no-referrer"
                rel="noreferrer"
                className={`p-2.5 rounded-lg border transition-all duration-300 hover:scale-110 ${
                  isDarkMode
                    ? 'border-white/10 bg-white/5 text-slate-400 hover:text-cyan-400 hover:border-cyan-400/30 hover:bg-white/10'
                    : 'border-slate-200 bg-white text-slate-600 hover:text-indigo-600 hover:border-indigo-600/30 hover:bg-indigo-50'
                }`}
              >
                <Instagram className="w-4.4 h-4.4" />
              </a>
            </div>
          </motion.div>

        </div>

        {/* Right Side: Glowing Holographic Tech Visual */}
        <div className="lg:col-span-5 flex items-center justify-center relative w-full h-[320px] sm:h-[400px]">
          
          {/* Main 3D Interactive Mock Canvas Orb */}
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="relative w-72 sm:w-85 h-72 sm:h-85 flex items-center justify-center cursor-none group"
          >
            {/* Outer Spinning Sci-Fi Border */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 15, repeat: Infinity, ease: 'linear' }}
              className={`absolute inset-0 rounded-full border border-dashed ${
                isDarkMode ? 'border-cyan-400/30 shadow-[0_0_15px_rgba(34,211,238,0.1)]' : 'border-indigo-600/30'
              }`}
            />

            {/* Inward Orbit Spinning Border */}
            <motion.div
              animate={{ rotate: -360 }}
              transition={{ duration: 10, repeat: Infinity, ease: 'linear' }}
              className={`absolute inset-8 rounded-full border border-dotted ${
                isDarkMode ? 'border-purple-500/30' : 'border-pink-500/30'
              }`}
            />

            {/* Centered Glowing Sphere */}
            <div className={`w-48 sm:w-56 h-48 sm:h-56 rounded-full relative overflow-hidden flex flex-col items-center justify-center shadow-2xl ${
              isDarkMode
                ? 'bg-white/5 border border-white/10 backdrop-blur-md shadow-[0_0_30px_rgba(34,211,238,0.15)]'
                : 'bg-white border border-indigo-200 shadow-indigo-100'
            }`}>
              {/* Internal neon mesh graphics */}
              <div className="absolute inset-0 opacity-15 bg-[radial-gradient(#22d3ee_1px,transparent_1px)] [background-size:16px_16px] pointer-events-none" />
              
              {/* Graphic Logo */}
              <div className="text-center z-10 px-4">
                <span className={`text-[10px] font-mono block mb-1 uppercase tracking-widest ${isDarkMode ? 'text-cyan-400' : 'text-indigo-600'}`}>
                  PRODIGY CORE
                </span>
                <span className={`text-4xl font-extrabold tracking-tighter ${isDarkMode ? 'text-white' : 'text-slate-800'}`}>
                  XJ
                </span>
                <span className={`text-[10px] font-mono block mt-2 uppercase tracking-wide opacity-50 ${isDarkMode ? 'text-slate-400' : 'text-slate-600'}`}>
                  ESTD. // 2022
                </span>
              </div>

              {/* Little moving particles on hover inside node */}
              <motion.div
                animate={{
                  y: [0, -10, 0],
                  scale: [1, 1.05, 1],
                }}
                transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute w-8 h-8 rounded-full bg-cyan-500/10 blur-md top-10"
              />
              <motion.div
                animate={{
                  y: [0, 10, 0],
                  scale: [1, 1.1, 1],
                }}
                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute w-8 h-8 rounded-full bg-purple-500/10 blur-md bottom-10"
              />
            </div>

            {/* Orbital Satellites - Floating Stats indicators */}
            <motion.div
              animate={{ y: [0, -12, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
              className={`absolute -top-4 -right-2 px-3 py-1.5 rounded-xl border text-[10px] font-mono flex items-center gap-1.5 shadow-lg ${
                isDarkMode
                  ? 'bg-slate-950/95 border-cyan-400/30 text-cyan-300'
                  : 'bg-white border-slate-200 text-indigo-700'
              }`}
            >
              <div className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
              <span>FPS STABLE: 60Hz</span>
            </motion.div>

            <motion.div
              animate={{ y: [0, 15, 0] }}
              transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut' }}
              className={`absolute -bottom-6 -left-4 px-3 py-1.5 rounded-xl border text-[10px] font-mono flex items-center gap-1.5 shadow-lg ${
                isDarkMode
                  ? 'bg-slate-950/95 border-purple-500/30 text-purple-300'
                  : 'bg-white border-slate-200 text-indigo-700'
              }`}
            >
              <div className="w-1.5 h-1.5 rounded-full bg-purple-500 animate-pulse" />
              <span>LATENCY: 5ms</span>
            </motion.div>

          </motion.div>
        </div>

      </div>

      {/* Decorative Chevron Down Indicator */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center">
        <span className={`text-[8px] font-mono tracking-widest ${isDarkMode ? 'text-slate-600' : 'text-slate-400'}`}>
          INIT_DECOMPRESS
        </span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="mt-1"
        >
          <ArrowDown className={`w-4 h-4 ${isDarkMode ? 'text-cyan-400' : 'text-indigo-600'}`} />
        </motion.div>
      </div>
    </section>
  );
}
