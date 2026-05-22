import { useState, useEffect } from 'react';
import LoadingScreen from './components/LoadingScreen';
import ParticleBackground from './components/ParticleBackground';
import CustomCursor from './components/CustomCursor';
import NavigationHeader from './components/NavigationHeader';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import SkillsSection from './components/SkillsSection';
import ProjectsSection from './components/ProjectsSection';
import ServicesSection from './components/ServicesSection';
import TestimonialsSection from './components/TestimonialsSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';

export default function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [isDarkMode, setIsDarkMode] = useState(() => {
    // Default to slate-950 Cyber Dark for sci-fi look
    if (typeof window !== 'undefined') {
      const storedTheme = localStorage.getItem('theme-selection');
      if (storedTheme) return storedTheme === 'dark';
    }
    return true;
  });

  const [activeSection, setActiveSection] = useState('hero');

  // Sync theme selection to document element classes
  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
      document.documentElement.style.backgroundColor = '#020205'; // #020205 Immersive UI dark bg
      localStorage.setItem('theme-selection', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      document.documentElement.style.backgroundColor = '#f8fafc'; // slate-50
      localStorage.setItem('theme-selection', 'light');
    }
  }, [isDarkMode]);

  // Set up dynamic active section tracking via IntersectionObserver
  useEffect(() => {
    if (isLoading) return;

    const querySections = ['hero', 'about', 'skills', 'projects', 'services', 'testimonials', 'contact'];
    const observers: IntersectionObserver[] = [];

    const observerOptions = {
      root: null,
      rootMargin: '-30% 0px -40% 0px', // trigger when center third of viewport passes section bounds
      threshold: 0
    };

    const handleIntersection = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersection, observerOptions);

    querySections.forEach((id) => {
      const element = document.getElementById(id);
      if (element) {
        observer.observe(element);
      }
    });

    return () => {
      observer.disconnect();
    };
  }, [isLoading]);

  const handleThemeToggle = () => {
    setIsDarkMode((prev) => !prev);
  };

  const handleScrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      setActiveSection(sectionId);
    }
  };

  if (isLoading) {
    return <LoadingScreen onFinish={() => setIsLoading(false)} />;
  }

  return (
    <div className={`relative min-h-screen font-sans antialiased overflow-x-hidden transition-colors duration-500 ${
      isDarkMode ? 'bg-[#020205] text-white' : 'bg-slate-50 text-slate-800'
    }`}>
      {/* Interactive GPU Stars/Web Node flow */}
      <ParticleBackground isDarkMode={isDarkMode} />

      {/* Futuristic Cursor follower follower (only active on desktop hover) */}
      <CustomCursor isDarkMode={isDarkMode} />

      {/* Floating Header */}
      <NavigationHeader
        isDarkMode={isDarkMode}
        onThemeToggle={handleThemeToggle}
        onNavigate={handleScrollToSection}
        activeSection={activeSection}
      />

      {/* Main Container Modules */}
      <main className="relative flex flex-col w-full">
        {/* HERO SECTION */}
        <HeroSection
          isDarkMode={isDarkMode}
          onScrollToContact={() => handleScrollToSection('contact')}
          onScrollToProjects={() => handleScrollToSection('projects')}
        />

        {/* ABOUT SECTION */}
        <AboutSection isDarkMode={isDarkMode} />

        {/* SKILLS SECTION */}
        <SkillsSection isDarkMode={isDarkMode} />

        {/* PROJECTS SECTION */}
        <ProjectsSection isDarkMode={isDarkMode} />

        {/* SERVICES SECTION */}
        <ServicesSection isDarkMode={isDarkMode} />

        {/* TESTIMONIALS SECTION */}
        <TestimonialsSection isDarkMode={isDarkMode} />

        {/* CONTACT SECTION */}
        <ContactSection isDarkMode={isDarkMode} />
      </main>

      {/* FOOTER */}
      <Footer
        isDarkMode={isDarkMode}
        onScrollToTop={() => handleScrollToSection('hero')}
        onNavigate={handleScrollToSection}
      />
    </div>
  );
}
