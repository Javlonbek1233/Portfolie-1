import { useEffect, useState, useRef } from 'react';
import { motion, useInView } from 'motion/react';
import { Calendar, Award, GraduationCap, Briefcase } from 'lucide-react';
import { PERSONAL_INFO, STATISTICS, TIMELINE } from '../data';

export default function AboutSection({ isDarkMode }: { isDarkMode: boolean }) {
  const statsContainerRef = useRef<HTMLDivElement | null>(null);
  const isStatsInView = useInView(statsContainerRef, { once: true, amount: 0.3 });
  
  // Custom counter animation mechanism
  const [counts, setCounts] = useState<number[]>(STATISTICS.map(() => 0));

  useEffect(() => {
    if (!isStatsInView) return;

    const loaders = STATISTICS.map((stat, idx) => {
      let current = 0;
      const target = stat.number;
      const step = Math.max(1, Math.floor(target / 45)); // smooth increment spacing
      
      const interval = setInterval(() => {
        current += step;
        if (current >= target) {
          current = target;
          clearInterval(interval);
        }
        setCounts((prev) => {
          const next = [...prev];
          next[idx] = current;
          return next;
        });
      }, 30);

      return interval;
    });

    return () => {
      loaders.forEach((loader) => clearInterval(loader));
    };
  }, [isStatsInView]);

  return (
    <section id="about" className="py-24 relative overflow-hidden z-10 border-t/5 border-slate-900">
      
      {/* Background decoration */}
      <div className="absolute top-1/2 left-0 w-80 h-80 bg-purple-500/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        
        {/* Section header */}
        <div className="text-center mb-16">
          <span className={`text-xs font-mono tracking-[0.3em] font-semibold uppercase ${
            isDarkMode ? 'text-cyan-400' : 'text-indigo-600'
          }`}>
            BIOGRAPHY
          </span>
          <h2 className={`text-3xl sm:text-4xl font-sans font-extrabold tracking-tight mt-2 ${
            isDarkMode ? 'text-white' : 'text-slate-900'
          }`}>
            About My Developer Journey
          </h2>
          <div className="flex justify-center mt-3">
            <div className={`w-12 h-1 rounded-full ${isDarkMode ? 'bg-cyan-400' : 'bg-indigo-600'}`} />
          </div>
        </div>

        {/* Story Summary and Image Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-20">
          
          {/* Detailed Narrative */}
          <div className="lg:col-span-7 flex flex-col gap-6 text-left">
            <h3 className={`text-xl sm:text-2xl font-sans font-bold ${
              isDarkMode ? 'text-white' : 'text-slate-800'
            }`}>
              Engineering visual concepts into stateful realities since{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-indigo-400">
                age 12
              </span>
              .
            </h3>
            
            <p className={`leading-relaxed text-base ${isDarkMode ? 'text-slate-400' : 'text-slate-600'}`}>
              {PERSONAL_INFO.aboutDetailed}
            </p>
            
            <p className={`leading-relaxed text-base ${isDarkMode ? 'text-slate-400' : 'text-slate-600'}`}>
              Over the last few years, I have collaborated with freelance agencies and built deep state integrations. Whether it is a low-latency reactive chart system or a high-end Web Audio spectrum visualizer, I optimize for responsive scaling, microsecond rendering, and accessible markup.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4 font-mono text-xs">
              <div className={`p-4 rounded-xl border ${
                isDarkMode ? 'bg-white/5 border-white/10 backdrop-blur-md' : 'bg-slate-50 border-slate-200'
              }`}>
                <span className={`block mb-1 font-bold ${isDarkMode ? 'text-slate-400' : 'text-slate-500'}`}>CURRENT COORDINATES</span>
                <span className={isDarkMode ? 'text-white' : 'text-slate-800'}>{PERSONAL_INFO.location}</span>
              </div>
              <div className={`p-4 rounded-xl border ${
                isDarkMode ? 'bg-white/5 border-white/10 backdrop-blur-md' : 'bg-slate-50 border-slate-200'
              }`}>
                <span className={`block mb-1 font-bold ${isDarkMode ? 'text-slate-400' : 'text-slate-500'}`}>TARGET CHANNELS</span>
                <span className={isDarkMode ? 'text-cyan-400' : 'text-indigo-600'}>{PERSONAL_INFO.email}</span>
              </div>
            </div>
          </div>

          {/* Glowing Static Stats Stack */}
          <div ref={statsContainerRef} className="lg:col-span-5 grid grid-cols-2 gap-4">
            {STATISTICS.map((stat, idx) => (
              <motion.div
                key={stat.id}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                className={`p-6 rounded-2xl border text-center relative overflow-hidden group transition-all duration-300 ${
                  isDarkMode
                    ? 'bg-white/5 border-white/10 backdrop-blur-md hover:border-cyan-400/30 shadow-lg shadow-purple-500/5'
                    : 'bg-white border-slate-100 hover:border-indigo-600/30 shadow-sm'
                }`}
              >
                {/* Micro mesh decor */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-5 bg-[linear-gradient(rgba(34,211,238,0.15)_1px,transparent_1px)] [background-size:10px_10px] pointer-events-none transition-opacity duration-300" />
                
                <h4 className={`text-4xl font-extrabold tracking-tight mb-2 ${
                  isDarkMode ? 'text-cyan-300' : 'text-indigo-600'
                }`}>
                  {counts[idx]}
                  {stat.suffix}
                </h4>
                
                <p className={`text-xs uppercase font-mono tracking-wider ${
                  isDarkMode ? 'text-slate-500' : 'text-slate-500'
                }`}>
                  {stat.label}
                </p>
              </motion.div>
            ))}
          </div>

        </div>

        {/* Experience & Milestones Timeline */}
        <div className="mt-24">
          <div className="text-center mb-12">
            <span className={`inline-block px-3 py-1 rounded-full text-[10px] font-mono tracking-widest ${
              isDarkMode ? 'bg-slate-900 border border-slate-800 text-cyan-400' : 'bg-indigo-50 text-indigo-700'
            }`}>
              LOGICAL MILESTONES
            </span>
            <h3 className={`text-2xl font-sans font-bold mt-3 ${isDarkMode ? 'text-white' : 'text-slate-900'}`}>
              Chronological Timeline
            </h3>
          </div>

          <div className="relative max-w-4xl mx-auto pl-6 sm:pl-0 sm:after:absolute sm:after:top-0 sm:after:bottom-0 sm:after:left-1/2 sm:after:w-[1px] sm:after:bg-slate-800">
            {TIMELINE.map((item, idx) => {
              const checkEven = idx % 2 === 0;

              return (
                <motion.div
                  key={item.year}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-100px' }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className={`relative flex flex-col sm:flex-row items-start sm:items-center sm:justify-start gap-6 sm:gap-12 mb-12 last:mb-0 ${
                    checkEven ? 'sm:flex-row-reverse' : ''
                  }`}
                >
                  {/* Timeline bullet dot */}
                  <div className={`absolute left-[4px] sm:left-1/2 -ml-[9px] w-4.5 h-4.5 rounded-full border-2 flex items-center justify-center z-10 ${
                    item.type === 'experience'
                      ? 'border-cyan-400 bg-slate-950'
                      : item.type === 'education'
                        ? 'border-purple-500 bg-slate-950'
                        : 'border-emerald-400 bg-slate-950'
                  }`}>
                    <div className={`w-1.5 h-1.5 rounded-full ${
                      item.type === 'experience'
                        ? 'bg-cyan-400'
                        : item.type === 'education'
                          ? 'bg-purple-500'
                          : 'bg-emerald-400'
                    }`} />
                  </div>

                  {/* Spacer or Left container */}
                  <div className="hidden sm:block w-1/2" />

                  {/* Content Card */}
                  <div id={`timeline-${idx}`} className={`w-full sm:w-1/2 p-6 rounded-2xl border transition-all duration-300 hover:scale-[1.01] ${
                    isDarkMode
                      ? 'bg-white/5 border-white/10 backdrop-blur-md hover:border-purple-500/30 shadow-lg shadow-blue-500/5'
                      : 'bg-white border-slate-200/80 hover:border-slate-350 shadow-sm'
                  }`}>
                    {/* Header */}
                    <div className="flex flex-wrap gap-2 items-center justify-between mb-3 font-mono">
                      <span className={`text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded ${
                        item.type === 'experience'
                          ? 'bg-cyan-500/10 text-cyan-400'
                          : item.type === 'education'
                            ? 'bg-purple-500/10 text-purple-400'
                            : 'bg-emerald-500/10 text-emerald-400'
                      }`}>
                        {item.type}
                      </span>
                      <span className={`text-xs ${isDarkMode ? 'text-slate-500' : 'text-slate-400'} flex items-center gap-1`}>
                        <Calendar className="w-3.5 h-3.5" />
                        {item.year}
                      </span>
                    </div>

                    {/* Title */}
                    <h4 className={`text-base font-sans font-extrabold ${isDarkMode ? 'text-white' : 'text-slate-800'}`}>
                      {item.title}
                    </h4>
                    
                    {/* Authority */}
                    <p className={`text-xs font-mono font-medium mb-3 ${isDarkMode ? 'text-slate-400' : 'text-slate-500'}`}>
                      {item.company}
                    </p>

                    {/* Paragraph */}
                    <p className={`text-xs leading-relaxed ${isDarkMode ? 'text-slate-500' : 'text-slate-600'}`}>
                      {item.description}
                    </p>
                  </div>

                </motion.div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}
