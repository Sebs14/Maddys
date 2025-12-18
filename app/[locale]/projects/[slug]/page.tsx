import { notFound } from 'next/navigation';
import { projects } from '@/data/projects';
import DefaultProjectLayout from '@/app/components/projects/DefaultProjectLayout';
import JanesWalkProjectLayout from '@/app/components/projects/JanesWalkProjectLayout';
import ConexionCulturalProject from '@/app/components/projects/ConexionCultural';
import MelancoliaEminenteProject from '@/app/components/projects/MelancoliaEminente';
import CrostaPanaderiaProject from '@/app/components/projects/CrostaPanaderia';
import ReMadridGraficaProject from '@/app/components/projects/ReMadridGrafica';
import FufurufaProject from '@/app/components/projects/FufurufaProject';

interface ProjectPageProps {
  params: {
    slug: string;
  };
}

// Mapeo de proyectos a sus layouts personalizados
const projectLayouts = {
  'janes-walk': JanesWalkProjectLayout,
  'conexionCultural': ConexionCulturalProject,
  'melancolia-eminente': MelancoliaEminenteProject,
  'crostaPanaderia': CrostaPanaderiaProject,
  'ReMadridGrafica': ReMadridGraficaProject,
  'Fufurufa': FufurufaProject,
} as const;

type ProjectLayoutKey = keyof typeof projectLayouts;

// Generar rutas estáticas en build time
export async function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export default function ProjectPage({ params }: ProjectPageProps) {
  const project = projects.find((p) => p.slug === params.slug);

  if (!project) {
    notFound();
  }

  // Verificar si existe un layout personalizado para este proyecto
  const CustomLayout = projectLayouts[params.slug as ProjectLayoutKey];

  // Si existe un layout personalizado, usarlo
  if (CustomLayout) {
    return (
    <>
      <CustomLayout project={project} slug={params.slug} />
    </>
    );
  }

  // Si no, usar el layout por defecto
  return <DefaultProjectLayout project={project} slug={params.slug} />;
}
