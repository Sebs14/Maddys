// Tipos para la integración con Payload CMS

export interface Media {
  id: string;
  filename: string;
  url: string;
  alt?: string;
  width?: number;
  height?: number;
}

export interface Project {
  id: string;
  title: string;
  description?: string;
  image: Media | string; // Puede ser objeto Media o string URL
  technologies?: string[];
  link?: string;
  github?: string;
  featured?: boolean;
  createdAt: string;
  updatedAt: string;
}

export interface PayloadResponse<T> {
  docs: T[];
  totalDocs: number;
  page: number;
  totalPages: number;
  hasNextPage: boolean;
  hasPrevPage: boolean;
}

// Para el CircularGallery
export interface CircularGalleryItem {
  image: string;
  text: string;
}