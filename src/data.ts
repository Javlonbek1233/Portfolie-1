import { Project, Skill, TimelineItem, ServiceItem, Testimonial, Stat } from './types';

export const PERSONAL_INFO = {
  name: 'Xaitboyev Javlonbek',
  role: 'Web Developer',
  age: 16,
  location: 'Tashkent, Uzbekistan',
  email: 'xaitboyjava335@gmail.com',
  github: 'https://github.com/javlonbek-xaitboyev', // standard representative Github
  telegram: 'https://t.me/javlonbek_developer',
  instagram: 'https://instagram.com/javlon_xaitboyev',
  aboutBrief: 'A 16-year-old creative frontend & full-stack wizard crafting futuristic, high-performance, and visually breathtaking web experiences. Blending code with fluid motion design to innovate the digital landscape.',
  aboutDetailed: 'Since starting my coding journey at age 12, I have fallen in love with web technologies and creative motion graphics. For me, web development isn’t just about writing standard layouts—it is an art form. Over the past 4 years, I have pushed myself to master core layout structures, responsive web applications, and immersive motion design. I spend my time building optimized user interfaces, designing interactive canvas playgrounds, and tinkering with state-of-the-art frameworks.',
  resumeUrl: '#'
};

export const STATISTICS: Stat[] = [
  { id: '1', value: '4+', number: 4, suffix: '+', label: 'Years of Experience' },
  { id: '2', value: '35+', number: 35, suffix: '+', label: 'Projects Completed' },
  { id: '3', value: '15+', number: 15, suffix: '+', label: 'Happy Clients' },
  { id: '4', value: '99%', number: 99, suffix: '%', label: 'Performance Score' }
];

export const TIMELINE: TimelineItem[] = [
  {
    year: '2025 - Present',
    title: 'Lead Full Stack Tinkerer',
    company: 'Freelance & Open Source Contribution',
    description: 'Developing high-end websites, specialized landing pages, and interactive web tools for international and local clients using React.js, Tailwind v4, and Node.js.',
    type: 'experience'
  },
  {
    year: '2024 - 2025',
    title: 'Advanced Frontend Development',
    company: 'Independent Creative Projects',
    description: 'Explored motion mechanics, hardware-accelerated SVG animations, and performance fine-tuning. Successfully engineered modular React tools and UI templates.',
    type: 'milestone'
  },
  {
    year: '2023 - 2024',
    title: 'CS and Web Systems Studies',
    company: 'Uzbekistan IT Centers',
    description: 'Deep-dived into JavaScript algorithms, modern backend fundamentals (REST APIs, Databases), Node.js server architectures, and Git collaboration standard workflows.',
    type: 'education'
  },
  {
    year: '2022',
    title: 'The Spark & Genesis',
    company: 'Self-education',
    description: 'Discovered HTML, CSS, and basic JavaScript. Built matching game grids, responsive layouts, and simple utilities at age 12, initiating an obsession with creative coding.',
    type: 'milestone'
  }
];

export const SKILLS: Skill[] = [
  { name: 'React.js', level: 95, category: 'frontend', iconName: 'Atom', color: 'from-cyan-400 to-blue-500' },
  { name: 'JavaScript', level: 92, category: 'frontend', iconName: 'Cpu', color: 'from-yellow-400 to-amber-500' },
  { name: 'TypeScript', level: 85, category: 'frontend', iconName: 'Code', color: 'from-blue-500 to-indigo-600' },
  { name: 'Tailwind CSS', level: 98, category: 'frontend', iconName: 'Palette', color: 'from-teal-400 to-emerald-500' },
  { name: 'Node.js', level: 80, category: 'backend', iconName: 'Server', color: 'from-green-400 to-teal-600' },
  { name: 'Next.js', level: 84, category: 'frontend', iconName: 'Layers', color: 'from-gray-300 to-gray-600' },
  { name: 'Git & GitHub', level: 90, category: 'tools', iconName: 'GitBranch', color: 'from-orange-500 to-red-600' },
  { name: 'UI/UX Prototyping', level: 88, category: 'design', iconName: 'Framer', color: 'from-pink-500 to-rose-600' },
  { name: 'Performance Optimization', level: 94, category: 'tools', iconName: 'Zap', color: 'from-amber-400 to-orange-500' },
  { name: 'Responsive Layouts', level: 99, category: 'design', iconName: 'Monitor', color: 'from-violet-500 to-purple-600' },
];

export const PROJECTS: Project[] = [
  {
    id: '1',
    title: 'Aetheria - Creative AI Image Sandbox',
    category: 'fullstack',
    description: 'An immersive dashboard connecting Gemini & Imagen algorithms for interactive workspace layouts and responsive editing layers with a node-based design.',
    longDescription: 'Aetheria is a fully interactive canvas that leverages progressive node workflows, generative prompts, and local state engines. Built specifically for complex prompt adjustments and smooth drag-drop operations.',
    technologies: ['React.js', 'Tailwind', 'Motion', 'Express', 'Gemini SDK'],
    imageUrl: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=800&auto=format&fit=crop', // Beautiful abstract neon 3D art representation
    liveUrl: '#',
    githubUrl: 'https://github.com/javlonbek-xaitboyev/aetheria-sandbox',
    featured: true
  },
  {
    id: '2',
    title: 'Stellaris DeFi - Crypto Asset Hub',
    category: 'frontend',
    description: 'A 3D perspective dashboard containing simulated charts, coin market indicators, state-managed exchange drawers, and custom dark fluid glow theme.',
    longDescription: 'Stellaris DeFi is a sleek crypto monitoring portal featuring real-time state computations, animated transactions, premium bento-grid components, and responsive modular graphs.',
    technologies: ['React.js', 'Tailwind CSS', 'Recharts', 'Motion'],
    imageUrl: 'https://images.unsplash.com/photo-1634017839464-5c339ebe3cb4?q=80&w=800&auto=format&fit=crop', // 3D floating crypto geometry
    liveUrl: '#',
    githubUrl: 'https://github.com/javlonbek-xaitboyev/stellaris-defi',
    featured: true
  },
  {
    id: '3',
    title: 'Nova UI - Cyberpunk Design System',
    category: 'uiux',
    description: 'A premium visual framework with glow buttons, custom audio feedback loops, spring state cards, glass drawer sheets, and reusable particle bounds.',
    longDescription: 'Nova UI provides a futuristic aesthetic toolkit for digital apps. Tested extensively across browsers, this set includes custom hook triggers, SVG borders, and rich focus utilities.',
    technologies: ['Tailwind v4', 'React.js', 'Framer Motion', 'Figma'],
    imageUrl: 'https://images.unsplash.com/photo-1600132806370-bf17e65e942f?q=80&w=800&auto=format&fit=crop', // Glowing creative canvas wireframe
    liveUrl: '#',
    githubUrl: 'https://github.com/javlonbek-xaitboyev/nova-ui',
    featured: true
  },
  {
    id: '4',
    title: 'Vortex - Multi-User Audio Visualizer',
    category: 'frontend',
    description: 'Audio analysis engine in client canvas tracking custom spectrum frequencies, audio loops, spatial sound nodes, and real-time canvas glowing filters.',
    longDescription: 'Vortex utilizes standard Web Audio APIs to synthesize spectrum flows in response to tracks or microphones, delivering 60p visual canvas animations custom tailored for user selections.',
    technologies: ['React.js', 'HTML5 Canvas', 'Web Audio API', 'Motion'],
    imageUrl: 'https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?q=80&w=800&auto=format&fit=crop', // Abstract spectrum shapes
    liveUrl: '#',
    githubUrl: 'https://github.com/javlonbek-xaitboyev/vortex-visualizer',
    featured: false
  },
  {
    id: '5',
    title: 'ApexTask - Infinite Drag Board',
    category: 'frontend',
    description: 'Extensive task dashboard with dynamic board generation, list transitions, task countdowns, user assignment overlays, and full system drag mechanics.',
    longDescription: 'ApexTask solves standard work categorization. Includes task prioritization weights, beautiful spring column transitions, and local compression persistence.',
    technologies: ['React', 'TS', 'Tailwind CSS', 'Motion'],
    imageUrl: 'https://images.unsplash.com/photo-1531403009284-440f080d1e12?q=80&w=800&auto=format&fit=crop', // UI architecture layout
    liveUrl: '#',
    githubUrl: 'https://github.com/javlonbek-xaitboyev/apextask-board',
    featured: false
  },
  {
    id: '6',
    title: 'Quantum Portal - Virtual Tech Space',
    category: 'uiux',
    description: 'UX wireframe modeling virtual project folders, smart AI prompt assistants, spatial directories, and premium dark interactions for corporate clients.',
    longDescription: 'Quantum Portal re-conceptualizes online data rooms, structuring standard directories into three-dimensional sliding panels using lightweight high-performance perspective sheets.',
    technologies: ['Figma', 'React.js', 'CSS-3D', 'Motion'],
    imageUrl: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=800&auto=format&fit=crop', // Cosmic tech space
    liveUrl: '#',
    githubUrl: 'https://github.com/javlonbek-xaitboyev/quantum-portal',
    featured: false
  }
];

export const SERVICES: ServiceItem[] = [
  {
    id: '1',
    title: 'Modern Web Development',
    description: 'Engineering responsive, ultra-fast web systems matching current Google Core Web Vitals using semantic markup, advanced SSR patterns, and modern tooling integrations.',
    iconName: 'Code',
    features: ['React.js & Nex.js builds', 'High performance architecture', 'Tailwind fine-tunings', 'Secure backend integrations'],
    gradient: 'from-cyan-500/10 to-blue-500/10 hover:border-cyan-500/40'
  },
  {
    id: '2',
    title: 'Premium Creative Animation',
    description: 'Transforming boring static interfaces into highly interactive state flows. Beautiful physics interactions, smooth spring animations, and high refresh-rate canvas elements.',
    iconName: 'Zap',
    features: ['Framer Motion state-rigs', 'Complex SVG micro-animations', 'Interactive Canvas vectors', 'Fluid route transitions'],
    gradient: 'from-purple-500/10 to-indigo-500/10 hover:border-purple-500/40'
  },
  {
    id: '3',
    title: 'Futuristic UI/UX Design',
    description: 'Designing highly distinct layouts referencing current sci-fi visuals, modern glassmorphic designs, cosmic glowing shapes, and comfortable data architecture density.',
    iconName: 'Monitor',
    features: ['High-fidelity interactive Figma', 'Responsive bento layouts', 'Comfortable color contrasts', 'Perfect design tokens'],
    gradient: 'from-pink-500/10 to-rose-500/10 hover:border-pink-500/40'
  },
  {
    id: '4',
    title: 'SEO & Core Web Vitals',
    description: 'Eliminating layout shifts (CLS), sluggish time-to-first-byte (TTFB), and lazy loading layouts. Setting structured schemas, meta tags, and high responsive accessibility metrics.',
    iconName: 'TrendingUp',
    features: ['Optimized image streams', 'Perfect lighthouse reports', 'Rich meta tag setups', 'Screen-reader compliance'],
    gradient: 'from-emerald-500/10 to-teal-500/10 hover:border-emerald-500/40'
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: '1',
    name: 'Alexander Volkov',
    role: 'Product Director',
    company: 'Vesper Digital',
    feedback: 'Javlonbek is incredibly talented for his age. He took our complex landing page specs and built a glowing, animated interface in React that outperformed our original prototypes. Absolute professional!',
    avatarUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200&auto=format&fit=crop',
    rating: 5
  },
  {
    id: '2',
    name: 'Malika Karimova',
    role: 'Lead UX Designer',
    company: 'Sardor Media',
    feedback: 'A creative wizard. His attention to fine motion timings, elegant spring physics, and high contrast detail is rare in frontend developers. He is extremely responsive and structured with clean folder patterns.',
    avatarUrl: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=200&auto=format&fit=crop',
    rating: 5
  },
  {
    id: '3',
    name: 'David Miller',
    role: 'Founder',
    company: 'LaunchLabs Inc',
    feedback: 'I was skeptical about hiring a 16-year-old developer, but Javlonbek completely blew us away. He communicates perfectly, delivers flawless TypeScript code, and possesses deep knowledge of animations. 10/10 would hire again.',
    avatarUrl: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=200&auto=format&fit=crop',
    rating: 5
  }
];
