import Link from "next/link";
import Image from "next/image";
import { Project, projects } from "@/data/projects";
import Footer from "@/app/components/Footer";

interface DefaultProjectLayoutProps {
  project: Project;
  slug: string;
}

export default function DefaultProjectLayout({
  project,
  slug,
}: DefaultProjectLayoutProps) {
  // Encontrar el siguiente proyecto
  const currentIndex = projects.findIndex((p) => p.slug === slug);
  const nextProject = projects[(currentIndex + 1) % projects.length];
  return (
    <div className="min-h-screen bg-white">
      {/* Header con botón de volver */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-[#022733] backdrop-blur-sm border-b">
        <div className="container mx-auto px-6 py-4 flex items-center justify-between">
          <Link
            href={`/?project=${slug}#projects`}
            className="flex items-center gap-2 text-white hover:text-gray-600 transition-colors"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"
              />
            </svg>
            <span className="font-medium">Volver</span>
          </Link>
          <div className="text-sm text-white">{project.year}</div>
        </div>
      </header>

      {/* Contenido del proyecto */}
      <main className="pt-20">
        {/* Hero Section */}
        <section className="container mx-auto px-6 py-12">
          <div className="max-w-4xl mx-auto">
            <div className="flex flex-wrap gap-2 mb-6">
              {project.tags.map((tag, index) => (
                <span
                  key={index}
                  className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm"
                >
                  {tag}
                </span>
              ))}
            </div>
            <h1 className="text-3xl md:text-5xl lg:text-7xl font-bold mb-6">
              {project.title}
            </h1>
            <p className="text-base md:text-lg lg:text-xl text-gray-600 leading-relaxed">
              {project.description}
            </p>
          </div>
        </section>

        {/* Imagen principal */}
        <section className="w-full h-[70vh] relative bg-gray-100">
          <Image
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover"
            fill
            priority
            sizes="100vw"
            quality={95}
          />
        </section>

        {/* Sección de contenido personalizable */}
        <section className="container mx-auto px-6 py-10 md:py-20">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-xl md:text-2xl lg:text-3xl font-bold mb-8">
              Sobre el proyecto
            </h2>
            <div className="prose prose-lg max-w-none">
              <p className="text-gray-700 text-base md:text-lg leading-relaxed mb-6">
                Aquí puedes agregar más contenido sobre este proyecto
                específico. Cada página de proyecto puede tener un diseño
                completamente diferente.
              </p>
              <p className="text-gray-700 text-base md:text-lg leading-relaxed">
                Puedes agregar más secciones, imágenes, videos, o cualquier
                contenido que necesites para mostrar tu trabajo de la mejor
                manera.
              </p>
            </div>
          </div>
        </section>

        {/* Sección de galería adicional (ejemplo) */}
        <section className="bg-gray-50 py-20">
          <div className="container mx-auto px-6">
            <h2 className="text-xl md:text-2xl lg:text-3xl font-bold mb-12 text-center">
              Más imágenes
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto">
              {/* Puedes agregar más imágenes aquí */}
              <div className="aspect-square bg-gray-200 rounded-lg"></div>
              <div className="aspect-square bg-gray-200 rounded-lg"></div>
            </div>
          </div>
        </section>
      </main>

      <Footer nextProject={nextProject} />
    </div>
  );
}
