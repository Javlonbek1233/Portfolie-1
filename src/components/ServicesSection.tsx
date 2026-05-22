import { motion } from 'motion/react';
import * as Icons from 'lucide-react';
import { SERVICES } from '../data';
import { ServiceItem } from '../types';

export default function ServicesSection({ isDarkMode }: { isDarkMode: boolean }) {
  
  // Dynamic Lucide icon resolver
  const DynamicIcon = ({ name, className }: { name: string; className?: string }) => {
    const IconComponent = (Icons as any)[name] || Icons.Code;
    return <IconComponent className={className} />;
  };

  return (
    <section id="services" className="py-24 relative overflow-hidden z-10">
      
      {/* Background radial overlays */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-cyan-500/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        
        {/* Section title */}
        <div className="text-center mb-16">
          <span className={`text-xs font-mono tracking-[0.3em] font-semibold uppercase ${
            isDarkMode ? 'text-cyan-400' : 'text-indigo-600'
          }`}>
            CAPABILITIES
          </span>
          <h2 className={`text-3xl sm:text-4xl font-sans font-extrabold tracking-tight mt-2 ${
            isDarkMode ? 'text-white' : 'text-slate-900'
          }`}>
            Visual & Logical Services Offered
          </h2>
          <div className="flex justify-center mt-3">
            <div className={`w-12 h-1 rounded-full ${isDarkMode ? 'bg-cyan-400' : 'bg-indigo-600'}`} />
          </div>
        </div>

        {/* Bento Grid Services */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {SERVICES.map((service: ServiceItem, idx) => (
            <motion.div
              layout
              key={service.id}
              initial={{ opacity: 0, scale: 0.96, y: 30 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.45, delay: idx * 0.1 }}
              whileHover={{ scale: 1.01 }}
              className={`p-8 rounded-2xl border transition-all duration-300 relative group overflow-hidden bg-gradient-to-br ${service.gradient} ${
                isDarkMode 
                  ? 'border-white/10 backdrop-blur-md shadow-lg shadow-purple-500/5' 
                  : 'border-slate-200 shadow-sm'
              }`}
            >
              
              {/* Inside dynamic vector grids */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-5 bg-[linear-gradient(rgba(34,211,238,0.15)_1px,transparent_1px)] [background-size:12px_12px] pointer-events-none transition-opacity duration-300" />

              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 mb-6">
                {/* Floating Neo Icon */}
                <div className={`p-4 rounded-2xl ${
                  isDarkMode 
                    ? 'bg-white/5 border border-white/10 text-cyan-400 group-hover:text-cyan-300 group-hover:border-cyan-400/40 group-hover:shadow-[0_0_15px_rgba(34,211,238,0.25)]' 
                    : 'bg-white border border-slate-200 text-indigo-600 group-hover:border-indigo-600/30'
                } transition-all duration-300`}>
                  <DynamicIcon name={service.iconName} className="w-6 h-6" />
                </div>
                
                {/* Heading details */}
                <h3 className={`text-lg font-sans font-black ${isDarkMode ? 'text-white' : 'text-slate-800'}`}>
                  {service.title}
                </h3>
              </div>

              {/* Description */}
              <p className={`text-xs sm:text-sm leading-relaxed mb-6 block text-left ${
                isDarkMode ? 'text-slate-400' : 'text-slate-500'
              }`}>
                {service.description}
              </p>

              {/* Feature Tags Sub-Tome */}
              <div className="flex flex-wrap gap-2 pt-4 border-t border-slate-950/5 dark:border-slate-800/40">
                {service.features.map((feat) => (
                  <div
                    key={feat}
                    className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-lg text-[10px] font-mono font-medium ${
                      isDarkMode
                        ? 'bg-slate-950/60 border border-slate-800 text-slate-300'
                        : 'bg-slate-50 border border-slate-200 text-slate-700'
                    }`}
                  >
                    {/* Tiny blinking connection indicator */}
                    <span className={`w-1 h-1 rounded-full ${isDarkMode ? 'bg-cyan-400' : 'bg-indigo-600'}`} />
                    <span>{feat}</span>
                  </div>
                ))}
              </div>

            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
