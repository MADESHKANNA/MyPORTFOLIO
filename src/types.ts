export interface Project {
  id: string;
  title: string;
  description: string;
  bullets: string[];
  githubUrl: string;
  tech: string[];
  category: 'Full Stack' | 'AI / Data Science' | 'All';
  features: string[];
}

export interface Experience {
  company: string;
  role: string;
  duration: string;
  description: string;
  bullets: string[];
  tools: string[];
  type: 'Data Science' | 'Full Stack';
}

export interface Education {
  institution: string;
  degree: string;
  duration: string;
  location: string;
  grade?: string;
  bullets?: string[];
}

export interface Certification {
  title: string;
  issuer: string;
  score?: string;
  type: 'nptel' | 'azure' | 'other';
  description: string;
}

export interface Achievement {
  title: string;
  description: string;
}

export interface ContactMessage {
  id: string;
  name: string;
  email: string;
  subject: string;
  message: string;
  date: string;
}
