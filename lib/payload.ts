import { PayloadResponse, Project, CircularGalleryItem } from '@/types/payload';

// Configuración base de Payload
const PAYLOAD_URL =
  process.env.NEXT_PUBLIC_PAYLOAD_URL || 'https://bymaddys.vercel.app';
const PAYLOAD_SECRET = process.env.PAYLOAD_SECRET;

console.log('🌐 PAYLOAD_URL configurada:', PAYLOAD_URL);

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
    next: { revalidate: 60 }, // Revalidar cada 60 segundos
  });

  if (!response.ok) {
    console.warn(
      `Payload request failed: ${response.status} ${response.statusText}`
    );
    throw new Error(`Payload request failed: ${response.status}`);
  }

  return response.json();
}

// Obtener páginas (usando como proyectos)
export async function getProjectsFromProjects(): Promise<any[]> {
  try {
    console.log('🔍 Haciendo request a /api/projects...');
    const response = await payloadRequest<PayloadResponse<any>>('/projects');
    console.log('📦 Respuesta completa de projects:', response);
    console.log('📋 Docs de projects:', response.docs);
    if (response.docs && response.docs.length > 0) {
      console.log('🎯 Primer proyecto:', response.docs[0]);
      console.log('🖼️ Imagen del primer proyecto:', response.docs[0]?.image);
    }
    return response.docs || [];
  } catch (error) {
    console.error('Error fetching projects from Payload:', error);
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
export function transformProjectsToGalleryItems(
  projects: any[]
): CircularGalleryItem[] {
  if (!projects || projects.length === 0) {
    console.log('📭 No hay proyectos, usando imágenes estáticas');
    return getStaticProjects();
  }

  console.log('🔄 Transformando proyectos:', projects);

  return projects.map((project, index) => {
    console.log(`📝 Procesando proyecto ${index}:`, project);

    // Para la estructura de Payload que me mostraste:
    // El proyecto ES la imagen, con campos como url, filename, sizes, etc.
    let imageUrl = null;
    let projectTitle = null;

    // Obtener la URL de la imagen
    if (project.url) {
      // Usar la URL principal de la imagen
      // Si es una URL relativa, agregar la base URL de Payload
      if (project.url.startsWith('/api/')) {
        imageUrl = `${PAYLOAD_URL}${project.url}`;
      } else {
        imageUrl = project.url;
      }
    } else if (
      project.sizes &&
      project.sizes.medium &&
      project.sizes.medium.url
    ) {
      // Si no hay URL principal, usar el tamaño medium
      const mediumUrl = project.sizes.medium.url;
      if (mediumUrl.startsWith('/api/')) {
        imageUrl = `${PAYLOAD_URL}${mediumUrl}`;
      } else {
        imageUrl = mediumUrl;
      }
    } else if (
      project.sizes &&
      project.sizes.small &&
      project.sizes.small.url
    ) {
      // Si no hay medium, usar small
      const smallUrl = project.sizes.small.url;
      if (smallUrl.startsWith('/api/')) {
        imageUrl = `${PAYLOAD_URL}${smallUrl}`;
      } else {
        imageUrl = smallUrl;
      }
    } else if (project.filename) {
      // Como último recurso, construir la URL con el filename
      imageUrl = `${PAYLOAD_URL}/api/projects/file/${project.filename}`;
    }

    // Obtener el título del proyecto
    if (project.title) {
      projectTitle = project.title;
    } else if (project.filename) {
      // Si no hay título, usar el nombre del archivo sin extensión
      projectTitle = project.filename.split('.')[0];
    } else {
      projectTitle = `Proyecto ${index + 1}`;
    }

    // Si no se pudo obtener una imagen, usar una estática
    if (!imageUrl) {
      const staticImages = [
        '/abstract.webp',
        '/c.jpeg',
        '/charlie.jpeg',
        '/flowers.jpeg',
        '/horse.jpeg',
        '/let.webp',
        '/ls.jpeg',
        '/miraporta.png',
        '/mks.webp',
        '/volcan.png',
      ];
      imageUrl = staticImages[index % staticImages.length];
    }

    console.log(`🖼️ Imagen final para "${projectTitle}":`, imageUrl);

    return {
      image: imageUrl,
      text: projectTitle,
    };
  });
}

// Convertir archivos de media a galería
export function transformMediaToGalleryItems(
  mediaFiles: any[]
): CircularGalleryItem[] {
  if (!mediaFiles || mediaFiles.length === 0) return getStaticProjects();

  return mediaFiles
    .filter((media) => media.mimeType?.startsWith('image/')) // Solo imágenes
    .map((media, index) => ({
      image: media.url || media.filename,
      text: media.alt || media.filename?.split('.')[0] || `Imagen ${index + 1}`,
    }));
}

// Función híbrida que prueba diferentes fuentes
export async function getProjectsFromPayload(): Promise<CircularGalleryItem[]> {
  console.log('🔍 Intentando conectar con Payload...');
  console.log('📍 PAYLOAD_URL:', PAYLOAD_URL);

  try {
    // Intentar obtener de Projects primero
    console.log('🎯 Buscando proyectos...');
    const projects = await getProjectsFromProjects();
    console.log('📋 Proyectos encontrados:', projects.length);

    if (projects.length > 0) {
      const transformed = transformProjectsToGalleryItems(projects);
      console.log('✅ Usando proyectos de Payload:', transformed);
      return transformed;
    }

    // Si no hay páginas, usar Media
    console.log('🖼️ Buscando archivos de media...');
    const media = await getMediaFiles();
    console.log('📸 Media encontrados:', media.length);

    if (media.length > 0) {
      const transformed = transformMediaToGalleryItems(media);
      console.log('✅ Usando media de Payload:', transformed);
      return transformed;
    }

    // Fallback a datos estáticos
    console.log('🔄 Sin datos en Payload, usando imágenes estáticas');
    return getStaticProjects();
  } catch (error) {
    console.error('❌ Error conectando con Payload:', error);
    console.log('🔄 Usando imágenes estáticas como fallback');
    return getStaticProjects();
  }
}

// Función de respaldo con datos estáticos (fallback)
export function getStaticProjects(): CircularGalleryItem[] {
  return [
    { image: '/abstract.webp', text: 'Proyecto 1' },
    { image: '/c.jpeg', text: 'Proyecto 2' },
    { image: '/charlie.jpeg', text: 'Proyecto 3' },
    { image: '/flowers.jpeg', text: 'Proyecto 4' },
    { image: '/horse.jpeg', text: 'Proyecto 5' },
    { image: '/let.webp', text: 'Proyecto 6' },
    { image: '/ls.jpeg', text: 'Proyecto 7' },
    { image: '/miraporta.png', text: 'Proyecto 8' },
    { image: '/mks.webp', text: 'Proyecto 9' },
    { image: '/volcan.png', text: 'Proyecto 10' },
  ];
}
