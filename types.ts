export type ProjectCategory = 'Todo' | 'Branding' | 'Web' | 'Fotografía' | 'AI Art' | 'Video';

export interface Project {
  id: number;
  title: string;
  category: ProjectCategory;
  image: string;
  heightClass: string; // For masonry aspect ratio simulation
  description: string;
}

export interface ServiceItem {
  name: string;
  detail: string;
}

export interface ServiceCategory {
  id: string;
  title: string;
  icon: string;
  description: string;
  items: ServiceItem[];
}

export interface ServiceBundle {
  id: string;
  title: string;
  price?: string; // Optional
  features: string[];
  recommended: boolean;
}

export enum Theme {
  LIGHT = 'light',
  DARK = 'dark',
}

export type Language = 'es' | 'en' | 'ca';
