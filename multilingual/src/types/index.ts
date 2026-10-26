export interface NavItem {
  label: string;
  href: string;
  hasSubmenu?: boolean;
  submenu?: { label: string; href?: string; desc?: string }[];
}

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
  category: 'Custom Engineering' | 'Multilingual SEO & GEO' | 'PPC & SMM' | 'Global Markets & Process';
}

export interface CaseStudy {
  id: string;
  slug: string;
  title: string;
  client: string;
  clientRole?: string;
  country: string;
  category: 'Service Business' | 'eCommerce';
  techStack: string[];
  metrics: { label: string; value: string }[];
  summary: string;
  fullChallenge: string;
  fullSolution: string;
  fullResults: string[];
  languages: string[];
  timeline: string;
  deliverables: string[];
  clientTestimonial: {
    quote: string;
    author: string;
    title: string;
  };
  architectureDetails: {
    frontend: string;
    backend: string;
    localization: string;
    performance: string;
  };
}

export interface Review {
  id: string;
  name: string;
  role: string;
  company: string;
  country: string;
  countryFlag: string;
  rating: number;
  reviewText: string;
  serviceReceived: string;
  metrics: string;
}

export interface WebServiceBlock {
  id: string;
  title: string;
  tagline: string;
  technologies: string[];
  description: string;
  capabilities: string[];
  idealFor: string;
}

export interface MarketingService {
  id: string;
  title: string;
  code: string;
  tagline: string;
  description: string;
  features: string[];
  languagesSupported: string[];
  kpi: string;
}

export interface ProjectWork {
  id: string;
  title: string;
  client: string;
  sector: 'Service' | 'eCommerce';
  country: string;
  status: 'Completed' | 'Ongoing';
  techStack: string[];
  keyOutcome: string;
  details: string;
  liveUrlOrScope: string;
}

export interface BlogPost {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string[];
  category: 'Multilingual SEO' | 'AEO & GEO' | 'Custom Development' | 'PPC & Growth' | 'eCommerce Architecture';
  readTime: string;
  date: string;
  author: string;
  tags: string[];
}

export interface TeamMember {
  name: string;
  role: string;
  location: string;
  experience: string;
  bio: string;
  languages: string[];
  specialty: string;
}

export interface RegionInfo {
  name: string;
  category: 'USA' | 'LATAM' | 'EU' | 'Arabic' | 'Israel';
  flag: string;
  primaryLanguages: string[];
  marketHighlights: string;
  topServices: string[];
  sampleClientsCount: number;
}
