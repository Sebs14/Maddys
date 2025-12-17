"use client";

import Link from "next/link";
import Image from "next/image";
import { Project, projects } from "@/data/projects";
import Footer from "@/app/components/Footer";
import gallery from "@/app/assets/projects/ReMadrid/gallery.jpg";
import extra1 from "@/app/assets/projects/ReMadrid/extra1.jpg";
import extra2 from "@/app/assets/projects/ReMadrid/extra2.jpg";
import extra3 from "@/app/assets/projects/ReMadrid/extra3.jpg";

interface ReMadridGraficaProjectProps {
  project: Project;
  slug: string;
}

export default function ReMadridGraficaProject({
  project,
  slug,
}: ReMadridGraficaProjectProps) {
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
            className="w-full h-full object-cover object-[13%_center] md:object-center"
            fill
            priority
            sizes="100vw"
            quality={95}
          />
        </section>

        {/* Sección de contenido personalizable */}
        <section className="container mx-auto px-6 py-10 md:py-20">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl md:text-4xl lg:text-5xl text-[#C2ECFF] font-big-shoulders mb-8">
              Re_ Madrid Gráfica
            </h2>
            <div className="prose prose-lg max-w-none">
              <p className="text-[#C2ECFF] text-start font-figtree text-base md:text-lg lg:text-xl leading-relaxed mb-6">
                Este afiche fue creado para Re_ Madrid Gráfica 2021, cuya
                temática abordó el resurgir, la reconstrucción y la reactivación
                de las ciudades tras un periodo de pausa colectiva. La propuesta
                visual parte de la síntesis gráfica entre las siluetas urbanas y
                un candado abierto, elemento central que simboliza la
                liberación, la reapertura y la posibilidad de volver a habitar
                el espacio público.
              </p>
            </div>
            <p className="font-figtree text-sm md:text-base text-start text-[#C2ECFF] italic">
              Seleccionado entre los 100 mejores afiches de MadridGráfica21 del
              mundo, expuesto en la plaza Matadero, España.
            </p>
          </div>
        </section>

        {/* Sección de galería adicional (ejemplo) */}
        <section className="flex flex-col gap-20 justify-center pb-10 items-center">
          <div className="relative w-full max-w-4xl mx-auto px-4 lg:p-0">
            <Image
              src={gallery}
              alt="Mapa del evento"
              quality={100}
              style={{
                clipPath: "inset(0.1% 0.1% 0.1% 0.1% )",
              }}
            />
          </div>
          <p className="text-base md:text-lg lg:text-xl text-center lg:text-justify text-[#C2ECFF] font-figtree px-4 md:px-0">
            La composición busca comunicar esperanza y activación colectiva,
            alineándose con el espíritu de la temática <br /> y dialogando con
            el espacio público donde fue expuesto, invitando al espectador a
            reflexionar sobre el <br /> renacer de las ciudades y su gente.
          </p>
        </section>

        <section className="md:container md:mx-auto md:px-6 md:py-0">
          <div className="md:max-w-4xl md:mx-auto"></div>
        </section>
        {/* Galería de imágenes */}
        <section className="w-full px-4 md:px-6 py-10 md:py-20">
          <div className="max-w-5xl mx-auto flex flex-col gap-4">
            {/* Primera imagen - ancha arriba */}
            <div className="relative w-full aspect-[16/9] rounded-[16px] overflow-hidden mb-4">
              <Image
                src={extra1}
                alt="Conexión Cultural diseño principal"
                fill
                quality={100}
              />
            </div>

            {/* Dos imágenes horizontales debajo - más altura */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-center">
              <div className="relative w-full aspect-[3/4] rounded-[16px] overflow-hidden">
                <Image
                  src={extra2}
                  alt="Conexión Cultural diseño 2"
                  className="object-cover"
                  fill
                  quality={95}
                />
              </div>
              <div className="relative w-full aspect-[3/4] rounded-[16px] overflow-hidden">
                <Image
                  src={extra3}
                  alt="Conexión Cultural diseño 3"
                  className="object-cover"
                  fill
                  quality={95}
                />
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer nextProject={nextProject} />
    </div>
  );
}
