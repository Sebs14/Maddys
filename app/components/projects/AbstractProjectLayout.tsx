import Link from "next/link";
import Image from "next/image";
import { Project } from "@/data/projects";

interface AbstractProjectLayoutProps {
  project: Project;
  slug: string;
}

export default function AbstractProjectLayout({
  project,
  slug,
}: AbstractProjectLayoutProps) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-blue-50">
      {/* Header personalizado para Abstract */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-[#022733] backdrop-blur-sm">
        <div className="container mx-auto px-6 py-4 flex items-center justify-between">
          <Link
            href={`/?project=${slug}#projects`}
            className="flex items-center gap-2 text-white hover:text-purple-200 transition-colors"
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
          <div className="text-sm text-white font-bold">{project.year}</div>
        </div>
      </header>

      {/* Contenido personalizado */}
      <main className="pt-20">
        {/* Hero con diseño único */}
        <section className="container mx-auto px-6 py-16">
          <div className="max-w-6xl mx-auto text-center">
            <div className="flex flex-wrap gap-2 mb-8 justify-center">
              {project.tags.map((tag, index) => (
                <span
                  key={index}
                  className="px-4 py-2 bg-purple-600 text-white rounded-full text-sm font-medium"
                >
                  {tag}
                </span>
              ))}
            </div>
            <h1 className="text-6xl lg:text-8xl font-black mb-8 bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
              {project.title}
            </h1>
            <p className="text-2xl text-gray-700 leading-relaxed max-w-3xl mx-auto">
              {project.description}
            </p>
          </div>
        </section>

        {/* Imagen principal con efecto especial */}
        <section className="container mx-auto px-6 py-12">
          <div className="max-w-6xl mx-auto relative">
            <div className="aspect-video relative bg-gradient-to-br from-purple-200 to-blue-200 rounded-3xl overflow-hidden shadow-2xl">
              <Image
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover"
                fill
                priority
                sizes="1200px"
                quality={95}
              />
            </div>
            {/* Decoración abstracta */}
            <div className="absolute -top-10 -left-10 w-40 h-40 bg-purple-400 rounded-full blur-3xl opacity-50"></div>
            <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-blue-400 rounded-full blur-3xl opacity-50"></div>
          </div>
        </section>

        {/* Sección de contenido con diseño en columnas */}
        <section className="container mx-auto px-6 py-20">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-start">
              <div>
                <h2 className="text-4xl font-bold mb-6 text-purple-900">
                  Concepto Creativo
                </h2>
                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  Este proyecto explora las formas abstractas y la composición
                  visual moderna. Cada elemento ha sido cuidadosamente diseñado
                  para crear una experiencia única y memorable.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed">
                  La paleta de colores y las formas geométricas se combinan para
                  crear un balance perfecto entre creatividad y funcionalidad.
                </p>
              </div>
              <div className="bg-white p-8 rounded-2xl shadow-lg">
                <h3 className="text-2xl font-bold mb-4 text-gray-900">
                  Detalles del Proyecto
                </h3>
                <ul className="space-y-3">
                  <li className="flex items-center gap-3">
                    <span className="w-2 h-2 bg-purple-600 rounded-full"></span>
                    <span className="text-gray-700">Cliente: Confidencial</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="w-2 h-2 bg-purple-600 rounded-full"></span>
                    <span className="text-gray-700">Año: {project.year}</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="w-2 h-2 bg-purple-600 rounded-full"></span>
                    <span className="text-gray-700">Duración: 3 meses</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Galería con grid especial */}
        <section className="bg-white py-20">
          <div className="container mx-auto px-6">
            <h2 className="text-4xl font-bold mb-12 text-center text-gray-900">
              Galería Visual
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
              <div className="aspect-square bg-gradient-to-br from-purple-100 to-purple-200 rounded-2xl"></div>
              <div className="aspect-square bg-gradient-to-br from-blue-100 to-blue-200 rounded-2xl"></div>
              <div className="aspect-square bg-gradient-to-br from-pink-100 to-pink-200 rounded-2xl"></div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
