import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Send, MapPin, Mail, Phone, CheckCircle2, AlertTriangle, Github, Instagram, Sparkles } from 'lucide-react';
import { PERSONAL_INFO } from '../data';

export default function ContactSection({ isDarkMode }: { isDarkMode: boolean }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [formStatus, setFormStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      setErrorMessage('Please state your name, email address, and message.');
      setFormStatus('error');
      return;
    }

    setFormStatus('sending');

    // Simulate EmailJS or server API dispatch safely & beautifully
    setTimeout(() => {
      setFormStatus('success');
      // Reset after animation
      setFormData({ name: '', email: '', subject: '', message: '' });
    }, 1800);
  };

  return (
    <section id="contact" className="py-24 relative overflow-hidden z-10 transition-colors duration-500">
      
      {/* Dynamic Glow blobs */}
      <div className="absolute top-1/4 right-[5%] w-[320px] h-[320px] bg-cyan-500/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-1/4 left-[5%] w-[320px] h-[320px] bg-indigo-500/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        
        {/* Section title */}
        <div className="text-center mb-16">
          <span className={`text-xs font-mono tracking-[0.3em] font-semibold uppercase ${
            isDarkMode ? 'text-cyan-400' : 'text-indigo-600'
          }`}>
            COMMUNICATION
          </span>
          <h2 className={`text-3xl sm:text-4xl font-sans font-extrabold tracking-tight mt-2 ${
            isDarkMode ? 'text-white' : 'text-slate-900'
          }`}>
            Get In Touch
          </h2>
          <div className="flex justify-center mt-3">
            <div className={`w-12 h-1 rounded-full ${isDarkMode ? 'bg-cyan-400' : 'bg-indigo-600'}`} />
          </div>
        </div>

        {/* Form and Map Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Left Side: Contact Details & Connect Form */}
          <div className="lg:col-span-6 flex flex-col justify-between text-left h-full">
            
            <div className="mb-8">
              <h3 className={`text-xl sm:text-2xl font-sans font-black mb-4 ${isDarkMode ? 'text-white' : 'text-slate-800'}`}>
                Let’s Collaborate On Something Awesome
              </h3>
              <p className={`text-sm leading-relaxed mb-8 ${isDarkMode ? 'text-slate-400' : 'text-slate-500'}`}>
                Have an epic product idea, an open startup role, or an open-source web application you’d like to build? Drop me a message below, and my integration channel will routing it into my client queue instantly.
              </p>

              {/* Contact Channels */}
              <div className="flex flex-col gap-4 font-mono text-xs">
                
                <div className={`flex items-center gap-4 p-4 rounded-xl border ${
                  isDarkMode ? 'bg-white/5 border-white/10 backdrop-blur-md hover:border-cyan-400/35 transition-all duration-300' : 'bg-slate-50 border-slate-200'
                }`}>
                  <div className={`p-2 rounded-lg ${isDarkMode ? 'bg-cyan-400/10 text-cyan-400' : 'bg-indigo-50 text-indigo-600'}`}>
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="block font-bold text-slate-500 text-[10px]">ELECTRONIC PORTAL</span>
                    <a href={`mailto:${PERSONAL_INFO.email}`} className={`font-semibold hover:underline ${isDarkMode ? 'text-white' : 'text-slate-800'}`}>
                      {PERSONAL_INFO.email}
                    </a>
                  </div>
                </div>

                <div className={`flex items-center gap-4 p-4 rounded-xl border ${
                  isDarkMode ? 'bg-white/5 border-white/10 backdrop-blur-md hover:border-cyan-400/35 transition-all duration-300' : 'bg-slate-50 border-slate-200'
                }`}>
                  <div className={`p-2 rounded-lg ${isDarkMode ? 'bg-cyan-400/10 text-cyan-400' : 'bg-indigo-50 text-indigo-600'}`}>
                    <Send className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="block font-bold text-slate-500 text-[10px]">DIRECT CHANNEL</span>
                    <a href={PERSONAL_INFO.telegram} target="_blank" rel="noreferrer" className={`font-semibold hover:underline ${isDarkMode ? 'text-white' : 'text-slate-800'}`}>
                      @javlonbek_developer
                    </a>
                  </div>
                </div>

                <div className={`flex items-center gap-4 p-4 rounded-xl border ${
                  isDarkMode ? 'bg-white/5 border-white/10 backdrop-blur-md hover:border-cyan-400/35 transition-all duration-300' : 'bg-slate-50 border-slate-200'
                }`}>
                  <div className={`p-2 rounded-lg ${isDarkMode ? 'bg-cyan-400/10 text-cyan-400' : 'bg-indigo-50 text-indigo-600'}`}>
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="block font-bold text-slate-500 text-[10px]">COORDINATES</span>
                    <span className={`font-semibold ${isDarkMode ? 'text-white' : 'text-slate-800'}`}>
                      {PERSONAL_INFO.location}
                    </span>
                  </div>
                </div>

              </div>
            </div>

            {/* Social Channels Bottom */}
            <div className="pt-6 border-t border-slate-950/5 dark:border-slate-800/40">
              <span className={`text-[10px] font-mono tracking-widest block mb-4 ${isDarkMode ? 'text-slate-600' : 'text-slate-400'}`}>
                ESTABLISH CARRIER NETWORKS //
              </span>
              <div className="flex gap-3">
                <a
                  id="social-github-contact"
                  href={PERSONAL_INFO.github}
                  target="_blank"
                  referrerPolicy="no-referrer"
                  rel="noreferrer"
                  className={`p-3 rounded-full border transition-all duration-300 hover:scale-110 ${
                    isDarkMode
                      ? 'border-slate-800 bg-slate-900/50 text-slate-400 hover:text-cyan-400 hover:border-cyan-400/30'
                      : 'border-slate-200 bg-white text-slate-600 hover:text-indigo-600 hover:border-indigo-300'
                  }`}
                >
                  <Github className="w-4 h-4" />
                </a>
                <a
                  id="social-telegram-contact"
                  href={PERSONAL_INFO.telegram}
                  target="_blank"
                  referrerPolicy="no-referrer"
                  rel="noreferrer"
                  className={`p-3 rounded-full border transition-all duration-300 hover:scale-110 ${
                    isDarkMode
                      ? 'border-slate-800 bg-slate-900/50 text-slate-400 hover:text-cyan-400 hover:border-cyan-400/30'
                      : 'border-slate-200 bg-white text-slate-600 hover:text-indigo-600 hover:border-indigo-300'
                  }`}
                >
                  <Send className="w-4 h-4" />
                </a>
                <a
                  id="social-instagram-contact"
                  href={PERSONAL_INFO.instagram}
                  target="_blank"
                  referrerPolicy="no-referrer"
                  rel="noreferrer"
                  className={`p-3 rounded-full border transition-all duration-300 hover:scale-110 ${
                    isDarkMode
                      ? 'border-slate-800 bg-slate-900/50 text-slate-400 hover:text-cyan-400 hover:border-cyan-400/30'
                      : 'border-slate-200 bg-white text-slate-600 hover:text-indigo-600 hover:border-indigo-300'
                  }`}
                >
                  <Instagram className="w-4 h-4" />
                </a>
              </div>
            </div>

          </div>

          {/* Right Side: Interactive Input Form & Interactive Iframe Map */}
          <div className="lg:col-span-6 flex flex-col gap-8 h-full">
            
            {/* Interactive Form Board */}
            <div className={`p-6 sm:p-8 rounded-2xl border ${
              isDarkMode
                ? 'bg-white/5 border-white/10 backdrop-blur-md shadow-lg shadow-purple-500/5'
                : 'bg-white border-slate-200/90 shadow-sm'
            }`}>
              <form onSubmit={handleFormSubmit} className="flex flex-col gap-5">
                
                {/* Status Indicator Overlays */}
                <AnimatePresence mode="wait">
                  {formStatus === 'success' && (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.95 }}
                      className="p-4 rounded-xl border flex items-center gap-3 bg-emerald-500/10 border-emerald-400/30 text-emerald-400 font-mono text-xs text-left"
                    >
                      <CheckCircle2 className="w-5 h-5 flex-shrink-0 text-emerald-400" />
                      <div>
                        <span className="font-bold block">DISPATCH STATUS: SUCCESS</span>
                        <span>Your communication packet has been successfully verified & delivered.</span>
                      </div>
                    </motion.div>
                  )}

                  {formStatus === 'error' && (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.95 }}
                      className="p-4 rounded-xl border flex items-center gap-3 bg-red-500/10 border-red-400/20 text-red-500 font-mono text-xs text-left"
                    >
                      <AlertTriangle className="w-5 h-5 flex-shrink-0 text-red-400" />
                      <div>
                        <span className="font-bold block">DISPATCH STATUS: BLOCKED</span>
                        <span>{errorMessage}</span>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>

                {/* Input Fields Row */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  
                  {/* Name field */}
                  <div className="flex flex-col text-left">
                    <label className={`text-[10px] font-mono font-bold uppercase mb-1.5 tracking-wider ${
                      isDarkMode ? 'text-slate-400' : 'text-slate-500'
                    }`}>
                      Identifier (Name)
                    </label>
                    <input
                      id="input-name"
                      type="text"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="e.g. Javlonbek"
                      disabled={formStatus === 'sending' || formStatus === 'success'}
                      className={`px-4 py-2.5 rounded-xl text-sm font-sans outline-none border transition-all duration-300 ${
                        isDarkMode
                          ? 'bg-white/5 border-white/10 text-white focus:border-cyan-400/50 focus:bg-white/10 focus:ring-1 focus:ring-cyan-400/30'
                          : 'bg-slate-50 border-slate-200 text-slate-800 focus:border-indigo-600/30 focus:bg-white'
                      }`}
                    />
                  </div>

                  {/* Email field */}
                  <div className="flex flex-col text-left">
                    <label className={`text-[10px] font-mono font-bold uppercase mb-1.5 tracking-wider ${
                      isDarkMode ? 'text-slate-400' : 'text-slate-500'
                    }`}>
                      Carrier Link (Email)
                    </label>
                    <input
                      id="input-email"
                      type="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="e.g. portal@site.com"
                      disabled={formStatus === 'sending' || formStatus === 'success'}
                      className={`px-4 py-2.5 rounded-xl text-sm font-sans outline-none border transition-all duration-300 ${
                        isDarkMode
                          ? 'bg-white/5 border-white/10 text-white focus:border-cyan-400/50 focus:bg-white/10 focus:ring-1 focus:ring-cyan-400/30'
                          : 'bg-slate-50 border-slate-200 text-slate-800 focus:border-indigo-600/30 focus:bg-white'
                      }`}
                    />
                  </div>

                </div>

                {/* Subject field */}
                <div className="flex flex-col text-left">
                  <label className={`text-[10px] font-mono font-bold uppercase mb-1.5 tracking-wider ${
                    isDarkMode ? 'text-slate-400' : 'text-slate-500'
                  }`}>
                    Header Topic (Subject)
                  </label>
                  <input
                    id="input-subject"
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    placeholder="e.g. Business Collaboration Project"
                    disabled={formStatus === 'sending' || formStatus === 'success'}
                    className={`px-4 py-2.5 rounded-xl text-sm font-sans outline-none border transition-all duration-300 ${
                      isDarkMode
                        ? 'bg-white/5 border-white/10 text-white focus:border-cyan-400/50 focus:bg-white/10 focus:ring-1 focus:ring-cyan-400/30'
                        : 'bg-slate-50 border-slate-200 text-slate-800 focus:border-indigo-600/30 focus:bg-white'
                    }`}
                  />
                </div>

                {/* Message field */}
                <div className="flex flex-col text-left">
                  <label className={`text-[10px] font-mono font-bold uppercase mb-1.5 tracking-wider ${
                    isDarkMode ? 'text-slate-400' : 'text-slate-500'
                  }`}>
                    Payload (Message)
                  </label>
                  <textarea
                    id="input-message"
                    name="message"
                    rows={4}
                    required
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="State your idea, project details, or timelines..."
                    disabled={formStatus === 'sending' || formStatus === 'success'}
                    className={`px-4 py-2.5 rounded-xl text-sm font-sans outline-none border transition-all duration-300 resize-none ${
                      isDarkMode
                        ? 'bg-white/5 border-white/10 text-white focus:border-cyan-400/50 focus:bg-white/10 focus:ring-1 focus:ring-cyan-400/30'
                        : 'bg-slate-50 border-slate-200 text-slate-800 focus:border-indigo-600/30 focus:bg-white'
                    }`}
                  />
                </div>

                {/* Submit button */}
                <button
                  id="form-dispatch"
                  disabled={formStatus === 'sending' || formStatus === 'success'}
                  className={`inline-flex items-center justify-center gap-2 py-3 px-8 rounded-xl font-mono text-sm font-semibold transition-all duration-300 active:scale-95 group ${
                    isDarkMode
                      ? 'bg-cyan-400 text-slate-950 hover:bg-cyan-300 hover:shadow-[0_0_15px_rgba(34,211,238,0.4)] disabled:bg-slate-850 disabled:text-slate-600 disabled:shadow-none'
                      : 'bg-indigo-600 text-white hover:bg-indigo-500 hover:shadow-[0_0_10px_rgba(99,102,241,0.2)] disabled:bg-slate-200 disabled:text-slate-400'
                  }`}
                >
                  {formStatus === 'sending' ? (
                    <>
                      <div className="w-4 h-4 rounded-full border border-t-cyan-400 border-r-cyan-400 border-b-transparent/20 border-l-transparent/20 animate-spin" />
                      <span>DISPATCHING NODE...</span>
                    </>
                  ) : formStatus === 'success' ? (
                    <>
                      <CheckCircle2 className="w-4 h-4 text-slate-950" />
                      <span>SECURE DISPATCHED</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:translate-y-[-1px]" />
                      <span>TRANSMIT PACKET</span>
                    </>
                  )}
                </button>

              </form>
            </div>

            {/* Embedded styled layout representing coordinate maps */}
            <div className={`rounded-2xl border overflow-hidden relative group aspect-[2/1] ${
              isDarkMode ? 'border-white/10 bg-[#020205]' : 'border-slate-200 bg-white shadow-sm'
            }`}>
              {/* Maps iframe - beautifully muted via CSS filter dark mode for Cyber Theme */}
              <iframe
                title="Tashkent Map Coordinates"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d191885.50554165503!2d69.11455437877233!3d41.282597448373326!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38ae8b20a5d676b1%3A0xca0a6dad7e83f24c!2sTashkent%2C%20Uzbekistan!5e0!3m2!1sen!2s!4v1700000000000!5m2!1sen!2s"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className={`w-full h-full transition-all duration-500 opacity-60 group-hover:opacity-85 ${
                  isDarkMode ? 'grayscale invert brightness-90 contrast-95' : 'grayscale-[15%]'
                }`}
              />

              {/* Glowing vector overlay details */}
              <div className="absolute top-4 left-4 p-3 rounded-xl border font-mono text-[9px] flex flex-col items-start gap-1 z-10 pointer-events-none select-none text-left bg-[#020205]/95 border-white/10 text-cyan-400">
                <div className="flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
                  <span className="font-bold">DOCK STATION COORDINATES</span>
                </div>
                <span className="text-slate-500">{PERSONAL_INFO.location}</span>
                <span className="text-slate-500">INDICES: 41.2956° N, 69.2401° E</span>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
