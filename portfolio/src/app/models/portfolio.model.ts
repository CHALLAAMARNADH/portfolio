// src/app/models/portfolio.model.ts

export interface Project {
  id: number;
  title: string;
  description: string;
  tech: string[];
  category: 'nlp' | 'ml' | 'fullstack' | 'java';
  githubUrl: string;
  liveUrl?: string;
  featured: boolean;
}

export interface Skill {
  name: string;
  level: number; // 0-100
  category: 'ml' | 'java' | 'tools' | 'web';
}

export interface Experience {
  company: string;
  role: string;
  period: string;
  description: string[];
  current: boolean;
}
