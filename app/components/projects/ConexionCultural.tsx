"use client";

import Link from "next/link";
import Image from "next/image";
import { Project, projects } from "@/data/projects";
import stairs from "@/app/assets/projects/ConexionCultural/stairs.jpg";
import extra1 from "@/app/assets/projects/ConexionCultural/extra1.jpg";
import extra2 from "@/app/assets/projects/ConexionCultural/extra2.jpg";
import extra3 from "@/app/assets/projects/ConexionCultural/extra3.jpg";
import extra4 from "@/app/assets/projects/ConexionCultural/extra4.jpg";

interface ConexionCulturalProjectProps {
  project: Project;
  slug: string;
}

export default function ConexionCulturalProject({
  project,
  slug,
}: ConexionCulturalProjectProps) {
  // Encontrar el siguiente proyecto
  const currentIndex = projects.findIndex((p) => p.slug === slug);
  const nextProject = projects[(currentIndex + 1) % projects.length];
  return (
    <div className="min-h-screen bg-[#022733]">
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
        <section className="container mx-auto px-6 py-2">
          <div className="max-w-screen text-[#C2ECFF]/50 mx-auto flex items-center justify-between">
            <h1 className="text-xl lg:text-4xl font-sora mb-6">
              {project.title}
            </h1>
            <div className="flex text-[#C2ECFF]/50 flex-wrap gap-2 mb-6">
              {project.tags.map((tag, index) => (
                <p
                  key={index}
                  className="text-xl lg:text-4xl font-figtree leading-relaxed"
                >
                  {tag}
                </p>
              ))}
            </div>
          </div>
        </section>

        {/* Imagen principal */}
        <section className="w-full h-[70vh] relative bg-[#022733]">
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
        <section className="container mx-auto px-6 py-20">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-5xl text-[#C2ECFF] font-big-shoulders mb-8">
              IMAGEN REBRAND 2024
            </h2>
            <div className="prose prose-lg max-w-none">
              <p className="text-[#C2ECFF] text-start font-figtree text-xl leading-relaxed mb-6">
                “Conexión Cultural” presenta a El Salvador como un destino donde
                los viajeros descubren lugares impresionantes, establecen
                vínculos significativos con las comunidades locales a través de
                experiencias auténticas y encuentros enriquecedores. Se resalta
                la diversidad de paisajes, actividades y atracciones del país,
                desde playas vírgenes hasta ricos patrimonios culturales,
                creando un destino turístico completo y emocionante. <br />
                <br /> El proyecto presenta un enfoque que mejora la experiencia
                del turista. Este diseño busca adentrar a los visitantes en la
                esencia de El Salvador desde el momento en que llegan,
                transmitiendo los elementos importantes de la cultura del país e
                invitándolos a explorar y conectar profundamente con la riqueza
                cultural de su entorno.
              </p>
            </div>
          </div>
        </section>

        {/* Sección de galería adicional (ejemplo) */}
        <section className="flex flex-col gap-20 justify-center pb-10 items-center">
          <div className="relative w-full max-w-4xl mx-auto px-4 lg:p-0">
            <Image
              src={stairs}
              alt="Mapa del evento"
              className="w-full h-auto object-cover rounded-[48px]"
              quality={95}
              style={{
                clipPath: "inset(0.1% 0.1% 0.1% 0.1% )",
              }}
            />
          </div>
          <p className="text-xl text-center text-[#C2ECFF] font-figtree">
            Al ser un diseño dedicado al área de turismo, se resaltaron los
            elementos que caracterizan al país y con los
            <br /> que es reconocido, jugando con las jerarquías visuales,
            formas, tamaños y colores.
          </p>
        </section>

        <section className="md:container md:mx-auto md:px-6 md:py-20">
          <div className="md:max-w-4xl md:mx-auto"></div>
        </section>
        {/* Galería de imágenes */}
        <section className="w-full px-4 md:px-6 py-10 md:py-20">
          <div className="max-w-7xl mx-auto flex flex-col gap-4">
            {/* Primera imagen - ancha arriba */}
            <div className="relative w-full aspect-[21/9] rounded-[24px] overflow-hidden">
              <Image
                src={extra1}
                alt="Conexión Cultural diseño principal"
                className="object-cover"
                fill
                quality={95}
              />
            </div>

            {/* Dos imágenes horizontales debajo - más altura */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="relative w-full aspect-[4/3] rounded-[24px] overflow-hidden">
                <Image
                  src={extra2}
                  alt="Conexión Cultural diseño 2"
                  className="object-cover"
                  fill
                  quality={95}
                />
              </div>
              <div className="relative w-full aspect-[4/3] rounded-[24px] overflow-hidden">
                <Image
                  src={extra3}
                  alt="Conexión Cultural diseño 3"
                  className="object-cover"
                  fill
                  quality={95}
                />
              </div>
            </div>

            {/* Última imagen ancha - sin separación extra */}
            <div className="relative w-full aspect-[21/9] rounded-[24px] overflow-hidden">
              <Image
                src={extra4}
                alt="Conexión Cultural banner final"
                className="object-cover"
                fill
                quality={95}
              />
            </div>
          </div>
        </section>
      </main>

      {/* Footer con botón siguiente proyecto */}
      <footer className="border-t border-[#C2ECFF]/20 bg-[#022733]">
        <div className="container mx-auto px-6 py-12">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <Link href="/" className="group flex items-center">
              <Image
                src="/logo.PNG"
                alt="Maddys Logo"
                width={120}
                height={30}
                className="h-30 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
              />
            </Link>
            <Link
              href="/"
              className="group flex items-center font-figtree text-white "
            >
              <p className="transition-transform duration-300 group-hover:scale-105">
                Instagram
              </p>
            </Link>
            <Link
              href="/"
              className="group flex items-center font-figtree text-white"
            >
              <p className="transition-transform duration-300 group-hover:scale-105">
                Behance
              </p>
            </Link>
            <Link
              href="/"
              className="group flex items-center font-figtree text-white"
            >
              <p className="transition-transform duration-300 group-hover:scale-105">
                Email
              </p>
            </Link>
            <Link
              href="/"
              className="group flex items-center font-figtree text-white"
            >
              <p className="transition-transform duration-300 group-hover:scale-105">
                Contacto
              </p>
            </Link>
            <Link
              href={`/projects/${nextProject.slug}`}
              className="group flex items-center gap-3 px-8 py-4 bg-[#C2ECFF] text-[#022733] rounded-full font-medium hover:bg-white transition-all duration-300 hover:scale-105"
            >
              <span>{nextProject.title}</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="w-5 h-5 group-hover:translate-x-1 transition-transform"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                />
              </svg>
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
