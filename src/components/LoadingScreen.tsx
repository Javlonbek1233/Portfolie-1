import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';

export default function LoadingScreen({ onFinish }: { onFinish: () => void }) {
  const [progress, setProgress] = useState(0);
  const [currentText, setCurrentText] = useState('SYSTEM BOOTING...');

  const LOADING_MESSAGES = [
    'INITIATING VECTOR CORE...',
    'COMPILING TWILIGHT GRADIENTS...',
    'INJECTING SHADER MOTIFS...',
    'CALCULATING PARALLAX BIAS...',
    'COMPILING PORTFOLIO v3.5...'
  ];

  useEffect(() => {
    // Progress counter
    const progressInterval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(progressInterval);
          setTimeout(onFinish, 600); // Let user see 100%
          return 100;
        }
        const remaining = 100 - prev;
        const jump = Math.min(remaining, Math.floor(Math.random() * 8) + 3);
        return prev + jump;
      });
    }, 45);

    // Message cycler
    const textInterval = setInterval(() => {
      const msgIndex = Math.min(
        Math.floor((progress * LOADING_MESSAGES.length) / 100),
        LOADING_MESSAGES.length - 1
      );
      if (LOADING_MESSAGES[msgIndex]) {
        setCurrentText(LOADING_MESSAGES[msgIndex]);
      }
    }, 200);

    return () => {
      clearInterval(progressInterval);
      clearInterval(textInterval);
    };
  }, [progress, onFinish]);

  return (
    <AnimatePresence>
      <motion.div
        id="loading-screen"
        initial={{ opacity: 1 }}
        exit={{ opacity: 0, scale: 1.05 }}
        transition={{ duration: 0.5, ease: 'easeInOut' }}
        className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-slate-950 text-white font-mono"
      >
        {/* Glow behind loader */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] h-[350px] bg-cyan-500/10 rounded-full blur-[90px] pointer-events-none" />

        <div className="relative flex flex-col items-center max-w-sm px-6 text-center select-none">
          {/* Cyber logo visual */}
          <motion.div
            initial={{ rotate: 0 }}
            animate={{ rotate: 360 }}
            transition={{ duration: 6, repeat: Infinity, ease: 'linear' }}
            className="w-16 h-16 border-2 border-t-cyan-400 border-r-purple-500 border-b-indigo-500/20 border-l-indigo-500/20 rounded-full mb-8 flex items-center justify-center"
          >
            <div className="w-10 h-10 border border-dotted border-cyan-400/40 rounded-full flex items-center justify-center">
              <span className="text-[10px] text-cyan-400 font-bold">XJ</span>
            </div>
          </motion.div>

          {/* Heading */}
          <motion.h2 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-white text-lg font-sans font-semibold tracking-widest uppercase mb-1"
          >
            Java.Dev
          </motion.h2>

          {/* Subtext info */}
          <div className="text-slate-500 text-xs uppercase tracking-widest scale-90 mb-6">
            Establishing Portal
          </div>

          {/* Percent indicators */}
          <div className="text-3xl font-extrabold tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400 mb-2">
            {progress}%
          </div>

          {/* Tiny simulated BIOS bar */}
          <div className="w-64 h-[3px] bg-slate-800 rounded-full overflow-hidden mb-3 relative">
            <motion.div
              style={{ width: `${progress}%` }}
              className="h-full bg-gradient-to-r from-cyan-400 to-purple-500 rounded-full"
            />
          </div>

          {/* Cycling instructions */}
          <div className="h-4 text-[10px] text-cyan-400/80 uppercase tracking-widest whitespace-nowrap overflow-hidden">
            {currentText}
          </div>
        </div>

        {/* Footer info inside loader */}
        <div className="absolute bottom-6 text-[9px] text-slate-600 tracking-wider">
          CODENAME: NEON_TWILIGHT_MESSENGER // TAS-UZB-2026
        </div>
      </motion.div>
    </AnimatePresence>
  );
}
