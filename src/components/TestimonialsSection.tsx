import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronLeft, ChevronRight, Quote, Star } from 'lucide-react';
import { TESTIMONIALS } from '../data';

export default function TestimonialsSection({ isDarkMode }: { isDarkMode: boolean }) {
  const [currentIdx, setCurrentIdx] = useState(0);
  const [direction, setDirection] = useState<'left' | 'right'>('right');

  const handlePrevSlide = () => {
    setDirection('left');
    setCurrentIdx((prev) => (prev === 0 ? TESTIMONIALS.length - 1 : prev - 1));
  };

  const handleNextSlide = () => {
    setDirection('right');
    setCurrentIdx((prev) => (prev === TESTIMONIALS.length - 1 ? 0 : prev + 1));
  };

  const currentTestimonial = TESTIMONIALS[currentIdx];

  // Animation layout configurations
  const slideVariants = {
    enter: (dir: 'left' | 'right') => ({
      x: dir === 'right' ? 80 : -80,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (dir: 'left' | 'right') => ({
      x: dir === 'right' ? -80 : 80,
      opacity: 0,
    }),
  };

  return (
    <section id="testimonials" className="py-24 relative overflow-hidden z-10 border-t/5 border-slate-900">
      
      {/* Decorative Blur Backgrounds */}
      <div className="absolute left-0 bottom-1/4 w-80 h-80 bg-purple-500/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="container mx-auto px-6 max-w-5xl relative z-10">
        
        {/* Section Title */}
        <div className="text-center mb-16">
          <span className={`text-xs font-mono tracking-[0.3em] font-semibold uppercase ${
            isDarkMode ? 'text-cyan-400' : 'text-indigo-600'
          }`}>
            FEEDBACK CHANNELS
          </span>
          <h2 className={`text-3xl sm:text-4xl font-sans font-extrabold tracking-tight mt-2 ${
            isDarkMode ? 'text-white' : 'text-slate-900'
          }`}>
            Client Reviews & Testimonials
          </h2>
          <div className="flex justify-center mt-3">
            <div className={`w-12 h-1 rounded-full ${isDarkMode ? 'bg-cyan-400' : 'bg-indigo-600'}`} />
          </div>
        </div>

        {/* Slider Frame */}
        <div className="relative flex flex-col items-center">
          
          {/* Big Floating Quote Icon */}
          <div className="absolute -top-10 left-6 sm:left-12 opacity-5 scale-150 select-none pointer-events-none">
            <Quote className={`w-24 h-24 ${isDarkMode ? 'text-cyan-400' : 'text-indigo-600'}`} />
          </div>

          {/* Animate Slide Container */}
          <div className="w-full min-h-[300px] flex items-center justify-center relative px-4">
            <AnimatePresence mode="wait" custom={direction}>
              <motion.div
                key={currentTestimonial.id}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.4, ease: 'easeInOut' }}
                className={`w-full max-w-3xl p-8 sm:p-10 rounded-3xl border text-center flex flex-col items-center justify-center ${
                  isDarkMode
                    ? 'bg-white/5 border border-white/10 backdrop-blur-md shadow-lg shadow-purple-500/5'
                    : 'bg-white border-slate-200/85 shadow-sm'
                }`}
              >
                
                {/* Reviewer Image Frame */}
                <div className={`w-20 h-20 rounded-full mb-6 p-1 border transition-all duration-300 ${
                  isDarkMode ? 'border-cyan-400/40' : 'border-indigo-600/30'
                }`}>
                  <img
                    src={currentTestimonial.avatarUrl}
                    alt={currentTestimonial.name}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover rounded-full"
                  />
                </div>

                {/* Feedback */}
                <blockquote className={`text-md sm:text-lg italic font-medium leading-relaxed max-w-2xl mb-6 ${
                  isDarkMode ? 'text-slate-200' : 'text-slate-700'
                }`}>
                  &ldquo;{currentTestimonial.feedback}&rdquo;
                </blockquote>

                {/* Rating Stars */}
                <div className="flex gap-1 mb-5 text-amber-400">
                  {Array.from({ length: currentTestimonial.rating }).map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400" />
                  ))}
                </div>

                {/* Reviewer Metadata */}
                <div>
                  <h4 className={`text-base font-sans font-extrabold ${isDarkMode ? 'text-white' : 'text-slate-900'}`}>
                    {currentTestimonial.name}
                  </h4>
                  <p className={`text-xs font-mono font-bold mt-1 tracking-wider ${
                    isDarkMode ? 'text-cyan-400' : 'text-indigo-600'
                  }`}>
                    {currentTestimonial.role.toUpperCase()} @ {currentTestimonial.company.toUpperCase()}
                  </p>
                </div>

              </motion.div>
            </AnimatePresence>
          </div>

          {/* Control Toggles */}
          <div className="flex items-center gap-6 mt-10">
            <button
              id="slider-prev"
              onClick={handlePrevSlide}
              className={`p-3 rounded-full border transition-all duration-300 hover:scale-105 active:scale-95 ${
                isDarkMode
                  ? 'border-white/10 bg-white/5 text-slate-200 hover:text-white hover:border-white/20 hover:bg-white/10'
                  : 'border-slate-200 bg-white text-slate-600 hover:text-indigo-600 hover:border-indigo-300'
              }`}
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            {/* Pagination Bullet Indicators */}
            <div className="flex gap-2.5">
              {TESTIMONIALS.map((testimonial, index) => (
                <button
                  key={testimonial.id}
                  onClick={() => {
                    setDirection(index > currentIdx ? 'right' : 'left');
                    setCurrentIdx(index);
                  }}
                  className={`h-2.5 rounded-full transition-all duration-300 ${
                    index === currentIdx
                      ? isDarkMode
                        ? 'w-7 bg-cyan-400 shadow-[0_0_8px_rgba(34,211,238,0.5)]'
                        : 'w-7 bg-indigo-600'
                      : isDarkMode
                        ? 'w-2.5 bg-white/10 hover:bg-white/20'
                        : 'w-2.5 bg-slate-200 hover:bg-slate-350'
                  }`}
                />
              ))}
            </div>

            <button
              id="slider-next"
              onClick={handleNextSlide}
              className={`p-3 rounded-full border transition-all duration-300 hover:scale-105 active:scale-95 ${
                isDarkMode
                  ? 'border-white/10 bg-white/5 text-slate-200 hover:text-white hover:border-white/20 hover:bg-white/10'
                  : 'border-slate-200 bg-white text-slate-600 hover:text-indigo-600 hover:border-indigo-300'
              }`}
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>

        </div>

      </div>
    </section>
  );
}
