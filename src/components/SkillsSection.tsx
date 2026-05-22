import { useState } from 'react';
import { motion } from 'motion/react';
import * as Icons from 'lucide-react';
import { SKILLS } from '../data';
import { Skill } from '../types';

export default function SkillsSection({ isDarkMode }: { isDarkMode: boolean }) {
  const [activeTab, setActiveTab] = useState<'all' | 'frontend' | 'backend' | 'tools' | 'design'>('all');

  // Dynamic Lucide icon resolver
  const DynamicIcon = ({ name, className }: { name: string; className?: string }) => {
    const IconComponent = (Icons as any)[name] || Icons.Cpu;
    return <IconComponent className={className} />;
  };

  const tabs: { id: typeof activeTab; label: string }[] = [
    { id: 'all', label: 'All Tech' },
    { id: 'frontend', label: 'Frontend' },
    { id: 'backend', label: 'Backend' },
    { id: 'tools', label: 'Tools & Opt' },
    { id: 'design', label: 'UI/UX Design' },
  ];

  const filteredSkills = activeTab === 'all' 
    ? SKILLS 
    : SKILLS.filter(skill => skill.category === activeTab);

  return (
    <section id="skills" className="py-24 relative overflow-hidden z-10">
      
      {/* Decorative Blur Backdrops */}
      <div className="absolute right-0 top-1/3 w-72 h-72 bg-cyan-500/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        
        {/* Section title */}
        <div className="text-center mb-16">
          <span className={`text-xs font-mono tracking-[0.3em] font-semibold uppercase ${
            isDarkMode ? 'text-cyan-400' : 'text-indigo-600'
          }`}>
            CORE SYSTEMS
          </span>
          <h2 className={`text-3xl sm:text-4xl font-sans font-extrabold tracking-tight mt-2 ${
            isDarkMode ? 'text-white' : 'text-slate-900'
          }`}>
            Professional Toolkit & Tech Stack
          </h2>
          <div className="flex justify-center mt-3">
            <div className={`w-12 h-1 rounded-full ${isDarkMode ? 'bg-cyan-400' : 'bg-indigo-600'}`} />
          </div>
        </div>

        {/* Categories Tab Selector */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-4 sm:px-5 py-2 rounded-xl text-xs font-mono font-medium transition-all duration-300 ${
                activeTab === tab.id
                  ? isDarkMode
                    ? 'bg-cyan-400 text-slate-950 shadow-[0_0_15px_rgba(34,211,238,0.35)]'
                    : 'bg-indigo-600 text-white shadow-md'
                  : isDarkMode
                    ? 'bg-white/5 border border-white/10 text-slate-300 hover:text-white hover:border-white/20'
                    : 'bg-slate-50 border border-slate-200 text-slate-600 hover:text-indigo-600'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Interactive Skills Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredSkills.map((skill: Skill, idx) => (
            <motion.div
              layout
              key={skill.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.05 }}
              whileHover={{ y: -6 }}
              className={`p-6 rounded-2xl border transition-all duration-300 group relative overflow-hidden select-none ${
                isDarkMode
                  ? 'bg-white/5 border-white/10 backdrop-blur-md hover:border-cyan-400/30 hover:bg-white/10 shadow-lg shadow-purple-500/5'
                  : 'bg-white border-slate-200/80 hover:border-indigo-600/20 shadow-sm hover:shadow-md'
              }`}
            >
              {/* Glowing hover card effect */}
              <div className={`absolute top-0 right-0 w-24 h-24 rounded-full bg-gradient-to-br ${skill.color} opacity-0 group-hover:opacity-[0.06] blur-xl transition-opacity duration-300 pointer-events-none`} />

              {/* Skill label & Icon */}
              <div className="flex items-center justify-between mb-4">
                <div className={`p-2.5 rounded-xl bg-gradient-to-br ${skill.color} text-white shadow-sm`}>
                  <DynamicIcon name={skill.iconName} className="w-5 h-5" />
                </div>
                <span className={`text-xs font-mono font-bold ${isDarkMode ? 'text-slate-500' : 'text-slate-400'}`}>
                  {skill.category.toUpperCase()}
                </span>
              </div>

              {/* Skill Name */}
              <h3 className={`text-base font-sans font-bold mb-3 ${isDarkMode ? 'text-white' : 'text-slate-800'}`}>
                {skill.name}
              </h3>

              {/* Progress Bar Label */}
              <div className="flex items-center justify-between mb-1.5 font-mono text-[10px] font-bold">
                <span className={isDarkMode ? 'text-slate-400' : 'text-slate-500'}>PROFICIENCY</span>
                <span className={isDarkMode ? 'text-cyan-400' : 'text-indigo-600'}>{skill.level}%</span>
              </div>

              {/* Modern Linear Track */}
              <div className={`h-1.5 w-full rounded-full relative overflow-hidden ${isDarkMode ? 'bg-slate-800/60' : 'bg-slate-100'}`}>
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: `${skill.level}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, ease: 'easeOut', delay: 0.1 }}
                  className={`h-full bg-gradient-to-r ${skill.color} rounded-full`}
                />
              </div>

            </motion.div>
          ))}
        </div>

        {/* Custom text footer */}
        <div className="text-center mt-12">
          <p className={`text-xs font-mono max-w-lg mx-auto leading-relaxed ${isDarkMode ? 'text-slate-600' : 'text-slate-400'}`}>
            // System integrity maintained. Proficiency metrics are calculated based on active deployment frequency or production code integration logs.
          </p>
        </div>

      </div>
    </section>
  );
}
