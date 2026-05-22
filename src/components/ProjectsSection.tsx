import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ExternalLink, Github, Layers, Code, Sparkles, Filter } from 'lucide-react';
import { PROJECTS } from '../data';
import { Project } from '../types';

export default function ProjectsSection({ isDarkMode }: { isDarkMode: boolean }) {
  const [activeCategory, setActiveCategory] = useState<'all' | 'frontend' | 'fullstack' | 'uiux'>('all');

  const categories: { id: typeof activeCategory; label: string }[] = [
    { id: 'all', label: 'All Projects' },
    { id: 'frontend', label: 'Frontend' },
    { id: 'fullstack', label: 'Fullstack' },
    { id: 'uiux', label: 'UI/UX Prototypes' },
  ];

  const filteredProjects = activeCategory === 'all'
    ? PROJECTS
    : PROJECTS.filter((proj) => proj.category === activeCategory);

  // Modern GPU-Accelerated 3D Card Perspective Tilt
  const handleMouseMove3D = (e: React.MouseEvent<HTMLDivElement>) => {
    // Disable on touch devices
    if ('ontouchstart' in window) return;

    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;

    const normX = x / (rect.width / 2); // -1 to 1
    const normY = y / (rect.height / 2); // -1 to 1

    const tiltX = -normY * 12; // tilted by max 12 deg
    const tiltY = normX * 12;

    card.style.transform = `perspective(1000px) rotateX(${tiltX}deg) rotateY(${tiltY}deg) scale3d(1.02, 1.02, 1.02)`;
  };

  const handleMouseLeave3D = (e: React.MouseEvent<HTMLDivElement>) => {
    const card = e.currentTarget;
    card.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)';
  };

  return (
    <section id="projects" className="py-24 relative overflow-hidden z-10 border-t/5 border-slate-900">
      
      {/* Decorative Blur Backgrounds */}
      <div className="absolute top-1/4 left-10 w-96 h-96 bg-indigo-500/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-10 w-96 h-96 bg-cyan-500/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        
        {/* Section title */}
        <div className="text-center mb-16">
          <span className={`text-xs font-mono tracking-[0.3em] font-semibold uppercase ${
            isDarkMode ? 'text-cyan-400' : 'text-indigo-600'
          }`}>
            CREATIVE PRODUCTIONS
          </span>
          <h2 className={`text-3xl sm:text-4xl font-sans font-extrabold tracking-tight mt-2 ${
            isDarkMode ? 'text-white' : 'text-slate-900'
          }`}>
            Featured Work & Deployments
          </h2>
          <div className="flex justify-center mt-3">
            <div className={`w-12 h-1 rounded-full ${isDarkMode ? 'bg-cyan-400' : 'bg-indigo-600'}`} />
          </div>
        </div>

        {/* Filter Toolbar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6 mb-12 pb-6 border-b border-slate-950/10 dark:border-slate-800/40">
          <div className="flex items-center gap-2 font-mono text-xs text-slate-500">
            <Filter className="w-4 h-4" />
            <span>FILTER ARCHIVES //</span>
          </div>
          
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-4 py-2 rounded-xl text-xs font-mono font-medium transition-all duration-300 ${
                  activeCategory === cat.id
                    ? isDarkMode
                      ? 'bg-cyan-400 text-slate-950 shadow-[0_0_15px_rgba(34,211,238,0.3)]'
                      : 'bg-indigo-600 text-white shadow-md'
                    : isDarkMode
                      ? 'bg-white/5 border border-white/10 text-slate-300 hover:text-white hover:border-white/20 hover:bg-white/10'
                      : 'bg-slate-50 border border-slate-200 text-slate-600 hover:text-indigo-600'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Project Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project: Project, idx) => (
              <motion.div
                layout
                key={project.id}
                initial={{ opacity: 0, scale: 0.95, y: 30 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: 15 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4 }}
                className="group select-none"
              >
                {/* 3D Tilting Card container */}
                <div
                  onMouseMove={handleMouseMove3D}
                  onMouseLeave={handleMouseLeave3D}
                  style={{ transformStyle: 'preserve-3d', transition: 'transform 0.15s ease-out' }}
                  className={`relative flex flex-col h-full rounded-2xl border transition-all duration-300 cursor-pointer overflow-hidden ${
                    isDarkMode
                      ? 'bg-white/5 border-white/10 backdrop-blur-md hover:border-cyan-400/30 hover:bg-white/10 shadow-lg shadow-purple-500/5'
                      : 'bg-white border-slate-200/80 shadow-sm hover:shadow-md'
                  }`}
                >
                  
                  {/* Image container & overlay details */}
                  <div className="relative aspect-video w-full overflow-hidden bg-slate-950">
                    <img
                      src={project.imageUrl}
                      alt={project.title}
                      loading="lazy"
                      referrerPolicy="no-referrer"
                      className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-105"
                    />
                    
                    {/* Glowing glass gradient filter on hover */}
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300" />

                    {/* Featured micro badge */}
                    {project.featured && (
                      <div className="absolute top-4 left-4 inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md text-[9px] font-mono font-bold bg-cyan-400 text-slate-950 shadow-md">
                        <Sparkles className="w-3 h-3" />
                        <span>FEATURED CORE</span>
                      </div>
                    )}

                    {/* Category indicator bottom right of image */}
                    <div className="absolute bottom-3 right-4 font-mono text-[9px] font-bold uppercase tracking-wider text-cyan-300 bg-slate-950/85 px-2 py-0.5 rounded border border-slate-800/60">
                      {project.category}
                    </div>
                  </div>

                  {/* Body Copy */}
                  <div className="p-6 flex flex-col flex-grow text-left">
                    <h3 className={`text-md font-sans font-bold tracking-tight mb-2 group-hover:text-cyan-400 transition-colors duration-300 ${
                      isDarkMode ? 'text-white' : 'text-slate-800'
                    }`}>
                      {project.title}
                    </h3>
                    
                    <p className={`text-xs leading-relaxed flex-grow mb-5 ${
                      isDarkMode ? 'text-slate-400' : 'text-slate-500'
                    }`}>
                      {project.description}
                    </p>

                    {/* Tech Badges Row */}
                    <div className="flex flex-wrap gap-1.5 mb-6">
                      {project.technologies.slice(0, 4).map((tech) => (
                        <span
                          key={tech}
                          className={`text-[9px] font-mono font-medium px-2 py-0.5 rounded-md ${
                            isDarkMode
                              ? 'bg-slate-950/80 text-cyan-400 border border-slate-800/60'
                              : 'bg-indigo-50 text-indigo-700'
                          }`}
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* Action Links Tray */}
                    <div className="flex items-center gap-3 mt-auto font-mono text-xs font-bold pt-4 border-t border-slate-950/5 dark:border-slate-800/40">
                      <a
                        id={`project-${project.id}-live`}
                        href={project.liveUrl}
                        target="_blank"
                        referrerPolicy="no-referrer"
                        rel="noreferrer"
                        className={`inline-flex items-center gap-1.5 py-1 transition-colors ${
                          isDarkMode ? 'text-cyan-400 hover:text-cyan-300' : 'text-indigo-600 hover:text-indigo-500'
                        }`}
                      >
                        <ExternalLink className="w-3.5 h-3.5" />
                        <span>Live Demo</span>
                      </a>
                      
                      <a
                        id={`project-${project.id}-git`}
                        href={project.githubUrl}
                        target="_blank"
                        referrerPolicy="no-referrer"
                        rel="noreferrer"
                        className={`inline-flex items-center gap-1.5 py-1 transition-colors ml-auto ${
                          isDarkMode ? 'text-slate-400 hover:text-white' : 'text-slate-500 hover:text-slate-800'
                        }`}
                      >
                        <Github className="w-3.5 h-3.5" />
                        <span>Source Code</span>
                      </a>
                    </div>

                  </div>

                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

      </div>
    </section>
  );
}
