import { PayloadResponse, Project, CircularGalleryItem } from '@/types/payload';

// Configuración base de Payload
const PAYLOAD_URL = process.env.NEXT_PUBLIC_PAYLOAD_URL || 'http://localhost:3000';
const PAYLOAD_SECRET = process.env.PAYLOAD_SECRET;

// Función genérica para hacer requests a Payload
async function payloadRequest<T>(
  endpoint: string, 
  options: RequestInit = {}
): Promise<T> {
  const url = `${PAYLOAD_URL}/api${endpoint}`;
  
  const defaultHeaders: HeadersInit = {
    'Content-Type': 'application/json',
  };

  // Agregar autenticación si tienes secret
  if (PAYLOAD_SECRET) {
    defaultHeaders['Authorization'] = `Bearer ${PAYLOAD_SECRET}`;
  }

  const response = await fetch(url, {
    headers: {
      ...defaultHeaders,
      ...options.headers,
    },
    ...options,
    // Agregar cache y revalidación
    next: { revalidate: 60 } // Revalidar cada 60 segundos
  });

  if (!response.ok) {
    console.warn(`Payload request failed: ${response.status} ${response.statusText}`);
    throw new Error(`Payload request failed: ${response.status}`);
  }

  return response.json();
}

// Obtener páginas (usando como proyectos)
export async function getProjectsFromPages(): Promise<any[]> {
  try {
    const response = await payloadRequest<PayloadResponse<any>>('/pages');
    return response.docs || [];
  } catch (error) {
    console.error('Error fetching pages from Payload:', error);
    return [];
  }
}

// Obtener media files
export async function getMediaFiles(): Promise<any[]> {
  try {
    const response = await payloadRequest<PayloadResponse<any>>('/media');
    return response.docs || [];
  } catch (error) {
    console.error('Error fetching media from Payload:', error);
    return [];
  }
}

// Convertir páginas o media a formato CircularGallery
export function transformPagesToGalleryItems(pages: any[]): CircularGalleryItem[] {
  if (!pages || pages.length === 0) return getStaticProjects();
  
  return pages.map((page, index) => ({
    image: page.image?.url || `/placeholder-${index + 1}.jpg`,
    text: page.title || page.slug || `Proyecto ${index + 1}`
  }));
}

// Convertir archivos de media a galería
export function transformMediaToGalleryItems(mediaFiles: any[]): CircularGalleryItem[] {
  if (!mediaFiles || mediaFiles.length === 0) return getStaticProjects();
  
  return mediaFiles
    .filter(media => media.mimeType?.startsWith('image/')) // Solo imágenes
    .map((media, index) => ({
      image: media.url || media.filename,
      text: media.alt || media.filename?.split('.')[0] || `Imagen ${index + 1}`
    }));
}

// Función híbrida que prueba diferentes fuentes
export async function getProjectsFromPayload(): Promise<CircularGalleryItem[]> {
  try {
    // Intentar obtener de Pages primero
    const pages = await getProjectsFromPages();
    if (pages.length > 0) {
      return transformPagesToGalleryItems(pages);
    }
    
    // Si no hay páginas, usar Media
    const media = await getMediaFiles();
    if (media.length > 0) {
      return transformMediaToGalleryItems(media);
    }
    
    // Fallback a datos estáticos
    return getStaticProjects();
    
  } catch (error) {
    console.error('Error fetching from Payload:', error);
    return getStaticProjects();
  }
}

// Función de respaldo con datos estáticos (fallback)
export function getStaticProjects(): CircularGalleryItem[] {
  return [
    { image: "/abstract.webp", text: "Proyecto 1" },
    { image: "/c.jpeg", text: "Proyecto 2" },
    { image: "/charlie.jpeg", text: "Proyecto 3" },
    { image: "/flowers.jpeg", text: "Proyecto 4" },
    { image: "/horse.jpeg", text: "Proyecto 5" },
    { image: "/let.webp", text: "Proyecto 6" },
    { image: "/ls.jpeg", text: "Proyecto 7" },
    { image: "/miraporta.png", text: "Proyecto 8" },
    { image: "/mks.webp", text: "Proyecto 9" },
    { image: "/volcan.png", text: "Proyecto 10" },
  ];
}