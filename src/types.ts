export interface Project {
  id: string;
  title: string;
  category: 'frontend' | 'fullstack' | 'uiux' | 'other';
  description: string;
  longDescription?: string;
  technologies: string[];
  imageUrl: string;
  liveUrl: string;
  githubUrl: string;
  featured: boolean;
}

export interface Skill {
  name: string;
  level: number; // 0 to 100
  category: 'frontend' | 'backend' | 'tools' | 'design';
  iconName: string; // key of Lucide Icons
  color: string; // Tailwind color class or hex
}

export interface TimelineItem {
  year: string;
  title: string;
  company: string;
  description: string;
  type: 'education' | 'experience' | 'milestone';
}

export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  iconName: string;
  features: string[];
  gradient: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  feedback: string;
  avatarUrl: string;
  rating: number;
}

export interface Stat {
  id: string;
  value: string;
  number: number;
  suffix: string;
  label: string;
}
